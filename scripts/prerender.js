// scripts/prerender.js
// Postbuild prerendering script.
// Must run after: generate:blog, build:client, build:server
// Renders each route to static HTML and writes it to dist/client/.

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CLIENT_DIST = path.join(ROOT, "dist", "client");
const SERVER_DIST = path.join(ROOT, "dist", "server");
const MANIFEST_PATH = path.join(ROOT, "src", "generated", "blog-manifest.json");
const TEMPLATE_PATH = path.join(CLIENT_DIST, "index.html");
const PRODUCTION_ORIGIN = "https://eagleeyetakeoffs.com";

// Validate the build outputs exist
for (const [label, p] of [["Client dist", CLIENT_DIST], ["Server dist", SERVER_DIST], ["Template", TEMPLATE_PATH]]) {
  if (!fs.existsSync(p)) {
    console.error(`ERROR: ${label} not found at ${p}. Run build:client and build:server first.`);
    process.exit(1);
  }
}

// Load blog manifest
let blogManifest = [];
if (fs.existsSync(MANIFEST_PATH)) {
  blogManifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
} else {
  console.warn("Warning: blog manifest not found. No blog routes will be prerendered.");
}

// Import built server renderer
const { render } = await import(pathToFileURL(path.join(SERVER_DIST, "entry-server.js")).href);

// Import shared metadata and schema builders from source
// (These run in Node — they are pure JS with no DOM calls)
const { getRouteMetadata, normalizePathname } = await import(
  pathToFileURL(path.join(ROOT, "src", "seo", "routeMetadata.js")).href
);
const { getSchemasForRoute, safeJsonLd } = await import(
  pathToFileURL(path.join(ROOT, "src", "seo", "schemaBuilders.js")).href
);

const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

// Determine if this build is for Vercel Preview
const IS_PREVIEW = process.env.VERCEL_ENV === "preview";

/** Escape an HTML attribute value */
function escAttr(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Validate that an injected URL is not localhost */
function assertNotLocalhost(url, context) {
  if (!url) return;
  if (url.includes("localhost") || url.includes("127.0.0.1")) {
    throw new Error(`Localhost URL found in ${context}: ${url}`);
  }
  if (url.includes(".vercel.app")) {
    throw new Error(`Vercel preview URL used as canonical in ${context}: ${url}`);
  }
}

/** Collect all static routes */
function getRoutes() {
  const routes = ["/", "/services", "/about", "/contact", "/blog"];
  for (const article of blogManifest) {
    routes.push(`/blog/${article.slug}`);
  }
  return routes;
}

/** Build metadata head HTML for a route */
function buildHeadHtml(meta) {
  assertNotLocalhost(meta.canonical, "canonical");
  assertNotLocalhost(meta.ogUrl, "ogUrl");
  assertNotLocalhost(meta.ogImage, "ogImage");

  const robots = IS_PREVIEW ? "noindex, nofollow" : meta.robots;
  let html = `<title>${escAttr(meta.title)}</title>\n`;
  html += `  <meta name="description" content="${escAttr(meta.description)}">\n`;
  html += `  <meta name="robots" content="${escAttr(robots)}">\n`;
  if (meta.canonical) {
    html += `  <link rel="canonical" href="${escAttr(meta.canonical)}">\n`;
  }
  html += `  <meta property="og:type" content="website">\n`;
  if (meta.ogTitle) html += `  <meta property="og:title" content="${escAttr(meta.ogTitle)}">\n`;
  if (meta.ogDescription) html += `  <meta property="og:description" content="${escAttr(meta.ogDescription)}">\n`;
  if (meta.ogUrl) html += `  <meta property="og:url" content="${escAttr(meta.ogUrl)}">\n`;
  if (meta.ogImage) html += `  <meta property="og:image" content="${escAttr(meta.ogImage)}">\n`;
  if (meta.twitterCard) html += `  <meta name="twitter:card" content="${escAttr(meta.twitterCard)}">\n`;
  if (meta.twitterTitle) html += `  <meta name="twitter:title" content="${escAttr(meta.twitterTitle)}">\n`;
  if (meta.twitterDescription) html += `  <meta name="twitter:description" content="${escAttr(meta.twitterDescription)}">\n`;
  if (meta.twitterImage) html += `  <meta name="twitter:image" content="${escAttr(meta.twitterImage)}">\n`;
  return html;
}

/** Build JSON-LD script tag HTML for a route */
function buildSchemaHtml(pathname) {
  const schemas = getSchemasForRoute(pathname, blogManifest);
  if (schemas.length === 0) return "";
  const schemaObj = schemas.length === 1 ? schemas[0] : { "@graph": schemas };
  return `<script id="json-ld-schema" type="application/ld+json">${safeJsonLd(schemaObj)}</script>`;
}

/** Write HTML to the correct output path */
function writeRoute(route, html, is404 = false) {
  if (is404) {
    const outPath = path.join(CLIENT_DIST, "404.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log(`  ✓ Written: 404.html`);
    return;
  }
  const normalised = normalizePathname(route);
  const dir = normalised === "/" ? CLIENT_DIST : path.join(CLIENT_DIST, normalised);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const outPath = path.join(dir, "index.html");
  // Safety: never overwrite asset files
  if (fs.existsSync(outPath)) {
    const existing = fs.readFileSync(outPath, "utf-8");
    if (!existing.includes("<!--ssr-outlet-->") && !existing.includes("<body>")) {
      throw new Error(`Refusing to overwrite non-HTML file at ${outPath}`);
    }
  }
  fs.writeFileSync(outPath, html, "utf-8");
  console.log(`  ✓ Written: ${normalised}/index.html`);
}

/** Inject content into template markers */
function buildPage(pathname, appHtml, headHtml, schemaHtml) {
  return template
    .replace("<!--seo-title-->", "")          // title is inside headHtml
    .replace("<!--seo-meta-->", headHtml)
    .replace("<!--seo-schema-->", schemaHtml)
    .replace("<!--ssr-outlet-->", appHtml);
}

console.log(`\nPrerendering ${getRoutes().length} routes (preview=${IS_PREVIEW})...\n`);

const routesSeen = new Set();
let errorCount = 0;

// Render all normal routes
for (const route of getRoutes()) {
  if (routesSeen.has(route)) {
    console.error(`ERROR: Duplicate route: ${route}`);
    errorCount++;
    continue;
  }
  routesSeen.add(route);

  try {
    const pathname = normalizePathname(route);
    const meta = getRouteMetadata(pathname, blogManifest, IS_PREVIEW);

    if (!meta.title) throw new Error(`Missing title for route: ${route}`);
    if (!meta.description) throw new Error(`Missing description for route: ${route}`);

    const appHtml = render(route);
    const headHtml = buildHeadHtml(meta);
    const schemaHtml = buildSchemaHtml(pathname);
    const html = buildPage(pathname, appHtml, headHtml, schemaHtml);

    writeRoute(route, html);
  } catch (err) {
    console.error(`ERROR rendering ${route}: ${err.message}`);
    errorCount++;
  }
}

// Render 404 page using the wildcard path
try {
  const notFoundAppHtml = render("/this-route-does-not-exist-404");
  const notFoundMeta = getRouteMetadata("/not-found", blogManifest, true); // always noindex
  const headHtml = buildHeadHtml({ ...notFoundMeta, robots: "noindex, nofollow", canonical: null, ogUrl: null });
  const html = buildPage("/404", notFoundAppHtml, headHtml, ""); // no schema for 404
  writeRoute("/404", html, true);
} catch (err) {
  console.error(`ERROR rendering 404: ${err.message}`);
  errorCount++;
}

if (errorCount > 0) {
  console.error(`\n${errorCount} route(s) failed. Aborting build.`);
  process.exit(1);
}

console.log("\nPrerendering complete.\n");
