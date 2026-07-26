// scripts/generate-sitemap.js
// Generates dist/client/sitemap.xml from the same route source
// used by the prerender script and blog manifest.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CLIENT_DIST = path.join(ROOT, "dist", "client");
const MANIFEST_PATH = path.join(ROOT, "src", "generated", "blog-manifest.json");
const SITEMAP_PATH = path.join(CLIENT_DIST, "sitemap.xml");
const DOMAIN = "https://eagleeyetakeoffs.com";
const TODAY = new Date().toISOString().split("T")[0];

let blogManifest = [];
if (fs.existsSync(MANIFEST_PATH)) {
  blogManifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
}

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

const articleRoutes = blogManifest
  .filter((a) => !a.draft)
  .map((a) => ({
    path: `/blog/${a.slug}`,
    lastmod: (a.modifiedAt || a.publishedAt).split("T")[0],
    priority: "0.6",
    changefreq: "monthly",
  }));

const allRoutes = [...staticRoutes, ...articleRoutes];

const urlEntries = allRoutes
  .map(({ path: p, lastmod, priority, changefreq }) => {
    const loc = `${DOMAIN}${p}`;
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : `\n    <lastmod>${TODAY}</lastmod>`;
    return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

if (!fs.existsSync(CLIENT_DIST)) {
  console.error("ERROR: dist/client not found. Run the full build first.");
  process.exit(1);
}

fs.writeFileSync(SITEMAP_PATH, sitemap, "utf-8");
console.log(`Sitemap written: ${allRoutes.length} URL(s) → ${path.relative(ROOT, SITEMAP_PATH)}`);
