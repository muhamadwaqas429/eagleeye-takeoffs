// scripts/validate-seo.js
// Post-build validation: checks every generated HTML file for required SEO elements.
// Exits with code 1 if any check fails.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CLIENT_DIST = path.join(ROOT, "dist", "client");
const MANIFEST_PATH = path.join(ROOT, "src", "generated", "blog-manifest.json");

let blogManifest = [];
if (fs.existsSync(MANIFEST_PATH)) {
  blogManifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
}

const INDEXABLE_ROUTES = ["/", "/services", "/about", "/contact", "/blog"];
for (const a of blogManifest.filter((p) => !p.draft)) {
  INDEXABLE_ROUTES.push(`/blog/${a.slug}`);
}

let failCount = 0;

function fail(route, msg) {
  console.error(`  ✗ [${route}] ${msg}`);
  failCount++;
}

function pass(route, msg) {
  console.log(`  ✓ [${route}] ${msg}`);
}

function readFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

function countMatches(html, pattern) {
  return (html.match(pattern) || []).length;
}

function validateIndexable(route, html) {
  // Non-empty body
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch || bodyMatch[1].trim().length < 100) {
    fail(route, "Body content is too short or empty");
  } else {
    pass(route, "Body has content");
  }

  // Exactly one H1
  const h1Count = countMatches(html, /<h1[\s>]/gi);
  if (h1Count === 0) fail(route, "Missing H1");
  else if (h1Count > 1) fail(route, `Multiple H1 tags (${h1Count})`);
  else pass(route, "Exactly one H1");

  // Title
  const titleCount = countMatches(html, /<title>/gi);
  if (titleCount === 0) fail(route, "Missing <title>");
  else if (titleCount > 1) fail(route, `Duplicate <title> tags (${titleCount})`);
  else pass(route, "One <title> tag");

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || titleMatch[1].trim() === "") {
    fail(route, "Title is empty");
  }

  // Description
  const descCount = countMatches(html, /name="description"/gi);
  if (descCount === 0) fail(route, "Missing meta description");
  else if (descCount > 1) fail(route, `Duplicate meta description (${descCount})`);
  else pass(route, "One meta description");

  // Canonical
  const canonCount = countMatches(html, /rel="canonical"/gi);
  if (canonCount === 0) fail(route, "Missing canonical");
  else if (canonCount > 1) fail(route, `Duplicate canonical (${canonCount})`);
  else pass(route, "One canonical");

  // Canonical must be production URL
  const canonMatch = html.match(/rel="canonical"\s+href="([^"]+)"/i) || html.match(/href="([^"]+)"\s+rel="canonical"/i);
  if (canonMatch) {
    const canon = canonMatch[1];
    if (canon.includes("localhost")) fail(route, `Canonical contains localhost: ${canon}`);
    else if (canon.includes(".vercel.app")) fail(route, `Canonical is a Vercel preview URL: ${canon}`);
    else pass(route, `Canonical: ${canon}`);
  }

  // Robots
  const robotsMatch = html.match(/name="robots"\s+content="([^"]+)"/i);
  if (!robotsMatch) fail(route, "Missing robots meta tag");
  else pass(route, `robots: ${robotsMatch[1]}`);

  // OG tags
  if (!html.includes('property="og:title"')) fail(route, "Missing og:title");
  else pass(route, "og:title present");
  if (!html.includes('property="og:description"')) fail(route, "Missing og:description");
  if (!html.includes('property="og:url"')) fail(route, "Missing og:url");
  if (!html.includes('property="og:image"')) fail(route, "Missing og:image");

  // Absolute OG image
  const ogImgMatch = html.match(/property="og:image"\s+content="([^"]+)"/i);
  if (ogImgMatch) {
    const img = ogImgMatch[1];
    if (!img.startsWith("https://")) fail(route, `og:image is not absolute: ${img}`);
    if (img.includes("localhost")) fail(route, `og:image contains localhost: ${img}`);
  }

  // Twitter tags
  if (!html.includes('name="twitter:card"')) fail(route, "Missing twitter:card");
  if (!html.includes('name="twitter:title"')) fail(route, "Missing twitter:title");

  // No localhost URLs anywhere
  if (html.includes("localhost")) fail(route, "Page contains localhost reference");
  else pass(route, "No localhost references");
}

function validate404(html) {
  const route = "404.html";

  // Must have H1 or h2 with "Not Found" text
  if (!html.includes("Not Found") && !html.includes("404")) {
    fail(route, "Missing Not Found message");
  } else {
    pass(route, "Has 404/Not Found text");
  }

  // Robots must be noindex
  const robotsMatch = html.match(/name="robots"\s+content="([^"]+)"/i);
  if (!robotsMatch || !robotsMatch[1].includes("noindex")) {
    fail(route, `404 does not have noindex. robots: ${robotsMatch?.[1] || "missing"}`);
  } else {
    pass(route, "robots=noindex,nofollow");
  }

  // No canonical
  if (html.includes('rel="canonical"')) {
    fail(route, "404 contains canonical tag");
  } else {
    pass(route, "No canonical");
  }

  // No og:url pointing to homepage
  const ogUrl = html.match(/property="og:url"\s+content="([^"]+)"/i);
  if (ogUrl) {
    fail(route, `404 has og:url: ${ogUrl[1]}`);
  } else {
    pass(route, "No og:url");
  }

  // No JSON-LD
  if (html.includes('type="application/ld+json"')) {
    fail(route, "404 contains JSON-LD (should have none)");
  } else {
    pass(route, "No JSON-LD");
  }
}

console.log("\nRunning SEO validation...\n");

// Validate indexable routes
for (const route of INDEXABLE_ROUTES) {
  const normalised = route === "/" ? "" : route;
  const filePath = path.join(CLIENT_DIST, normalised, "index.html");
  const html = readFile(filePath);
  if (!html) {
    fail(route, `File not found: ${filePath}`);
    continue;
  }
  console.log(`\n→ Validating: ${route}`);
  validateIndexable(route, html);
}

// Validate 404.html
console.log("\n→ Validating: 404.html");
const notFoundHtml = readFile(path.join(CLIENT_DIST, "404.html"));
if (!notFoundHtml) {
  fail("404.html", "File not found");
} else {
  validate404(notFoundHtml);
}

// Final result
console.log(`\n${"─".repeat(50)}`);
if (failCount > 0) {
  console.error(`\nValidation FAILED: ${failCount} check(s) did not pass.\n`);
  process.exit(1);
} else {
  console.log(`\nAll SEO validation checks passed.\n`);
}
