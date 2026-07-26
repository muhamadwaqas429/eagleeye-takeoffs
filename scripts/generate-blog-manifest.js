// scripts/generate-blog-manifest.js
// Node-only script. Parses all markdown files in src/content/blog/
// and outputs src/generated/blog-manifest.json.
// Run before client and server builds.
//
// IMPORTANT: Markdown source files are trusted, repository-controlled content
// authored by project contributors. Marked output is inserted as HTML in BlogPost.jsx.
// No third-party or user-submitted content is accepted.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "src", "content", "blog");
const OUT_DIR = path.join(ROOT, "src", "generated");
const OUT_FILE = path.join(OUT_DIR, "blog-manifest.json");

/** Validate ISO date string */
function isValidISODate(str) {
  if (!str) return false;
  const d = new Date(str);
  return !isNaN(d.getTime());
}

/** Validate slug — lowercase letters, digits, hyphens only */
function isValidSlug(slug) {
  return /^[a-z0-9-]+$/.test(slug);
}

/** Convert relative image path to absolute production URL */
const DOMAIN = "https://eagleeyetakeoffs.com";
function toAbsoluteImage(image) {
  if (!image) return `${DOMAIN}/og-image.jpg`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${DOMAIN}${image.startsWith("/") ? image : "/" + image}`;
}

if (!fs.existsSync(BLOG_DIR)) {
  console.warn(`Blog directory not found: ${BLOG_DIR}. Creating empty manifest.`);
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify([], null, 2));
  process.exit(0);
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
const slugsSeen = new Set();
const articles = [];

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Skip drafts
  if (data.draft === true) continue;

  // Required field validation
  const required = ["title", "description", "slug", "publishedAt", "author", "category"];
  for (const field of required) {
    if (!data[field]) {
      console.error(`ERROR: Missing required frontmatter field "${field}" in ${file}`);
      process.exit(1);
    }
  }

  // Date validation
  if (!isValidISODate(data.publishedAt)) {
    console.error(`ERROR: Invalid publishedAt date in ${file}: "${data.publishedAt}"`);
    process.exit(1);
  }
  if (data.modifiedAt && !isValidISODate(data.modifiedAt)) {
    console.error(`ERROR: Invalid modifiedAt date in ${file}: "${data.modifiedAt}"`);
    process.exit(1);
  }

  // Slug validation
  const slug = data.slug;
  if (!isValidSlug(slug)) {
    console.error(`ERROR: Invalid slug "${slug}" in ${file} (only lowercase letters, digits, hyphens allowed)`);
    process.exit(1);
  }

  // Duplicate slug check
  if (slugsSeen.has(slug)) {
    console.error(`ERROR: Duplicate slug "${slug}" found in ${file}`);
    process.exit(1);
  }
  slugsSeen.add(slug);

  // Filename/slug consistency note:
  // The slug in frontmatter is the canonical slug identifier.
  // The filename is used only to locate the file; it does not need to match exactly,
  // though by convention it should match for clarity.

  articles.push({
    title: data.title,
    description: data.description,
    slug,
    publishedAt: new Date(data.publishedAt).toISOString(),
    modifiedAt: data.modifiedAt
      ? new Date(data.modifiedAt).toISOString()
      : new Date(data.publishedAt).toISOString(),
    author: data.author,
    category: data.category,
    image: toAbsoluteImage(data.image),
    draft: false,
    // Deterministic date display — same output on server and browser
    dateDisplay: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(data.publishedAt)),
    contentHtml: marked.parse(content),
  });
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(articles, null, 2));

console.log(
  `Blog manifest generated: ${articles.length} article(s) written to ${path.relative(ROOT, OUT_FILE)}`
);
