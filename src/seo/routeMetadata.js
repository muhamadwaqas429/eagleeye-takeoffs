// src/seo/routeMetadata.js
// Single source of truth for all SEO metadata, used by both prerender script
// and the client-side SeoManager for SPA navigation updates.

const DOMAIN = "https://eagleeyetakeoffs.com";
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.jpg`;

export const companyDefaults = {
  title: "EagleEye Takeoffs | Precision Construction Estimating",
  description:
    "Fast, accurate construction takeoffs and cost estimating for contractors across USA and Canada. 24–48 hr turnaround.",
  ogImage: DEFAULT_OG_IMAGE,
  twitterCard: "summary_large_image",
};

const staticRoutes = {
  "/": {
    title: "Precision Construction Takeoffs | EagleEye Takeoffs",
    description:
      "Accurate construction takeoffs and cost estimating for USA and Canada contractors. 24–48 hr turnaround.",
    canonical: `${DOMAIN}/`,
    robots: "index, follow",
  },
  "/services": {
    title: "Construction Takeoff Services | EagleEye Takeoffs",
    description:
      "Professional material takeoffs, blueprint analysis, and cost estimating with fast 24–48 hr turnaround.",
    canonical: `${DOMAIN}/services`,
    robots: "index, follow",
  },
  "/about": {
    title: "About EagleEye Takeoffs | Expert Estimating Team",
    description:
      "Learn about EagleEye Takeoffs — a trusted estimating partner for contractors across North America.",
    canonical: `${DOMAIN}/about`,
    robots: "index, follow",
  },
  "/contact": {
    title: "Contact EagleEye Takeoffs | Get a Free Quote",
    description:
      "Get a free construction takeoff quote. Offices serving USA and Canada with fast, accurate estimates.",
    canonical: `${DOMAIN}/contact`,
    robots: "index, follow",
  },
  "/blog": {
    title: "Construction Estimating Blog | EagleEye Takeoffs",
    description:
      "Expert guides and resources on construction takeoffs, estimating, and blueprint reading for contractors.",
    canonical: `${DOMAIN}/blog`,
    robots: "index, follow",
  },
};

const notFoundMeta = {
  title: "Page Not Found | EagleEye Takeoffs",
  description: "The requested page could not be found.",
  canonical: null, // expressly no canonical on 404
  robots: "noindex, nofollow",
};

/**
 * Normalize pathnames for consistent matching:
 * - strip query strings
 * - remove trailing slash unless it IS the root "/"
 */
export function normalizePathname(pathname) {
  const withoutQuery = pathname.split("?")[0].split("#")[0];
  if (withoutQuery !== "/" && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery || "/";
}

/**
 * Validate a slug: lowercase letters, digits, and hyphens only.
 */
function isValidSlug(slug) {
  return /^[a-z0-9-]+$/.test(slug);
}

/**
 * Convert a relative image path to an absolute production URL.
 */
function toAbsoluteImageUrl(image) {
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const cleanPath = image.startsWith("/") ? image : `/${image}`;
  return `${DOMAIN}${cleanPath}`;
}

/**
 * Get full metadata object for a given pathname.
 * blogManifest is the parsed array from src/generated/blog-manifest.json.
 */
export function getRouteMetadata(rawPathname, blogManifest = [], isPreview = false) {
  const pathname = normalizePathname(rawPathname);

  let base = null;
  let ogType = "website";

  if (staticRoutes[pathname]) {
    base = { ...staticRoutes[pathname] };
  } else if (pathname.startsWith("/blog/")) {
    const slug = pathname.slice("/blog/".length);
    if (isValidSlug(slug) && Array.isArray(blogManifest)) {
      const article = blogManifest.find((p) => p.slug === slug && !p.draft);
      if (article) {
        ogType = "article";
        base = {
          title: `${article.title} | EagleEye Takeoffs`,
          description: article.description,
          canonical: `${DOMAIN}/blog/${slug}`,
          robots: "index, follow",
          ogImage: toAbsoluteImageUrl(article.image),
        };
      }
    }
  }

  if (!base) {
    base = { ...notFoundMeta };
  }

  // Preview deployments always get noindex regardless of route
  const robots = isPreview ? "noindex, nofollow" : base.robots;

  const ogImage = base.ogImage || DEFAULT_OG_IMAGE;
  const ogUrl = base.canonical || null;

  return {
    title: base.title,
    description: base.description,
    canonical: base.canonical || null,
    robots,
    ogTitle: base.title,
    ogDescription: base.description,
    ogUrl,
    ogImage,
    ogType,
    twitterCard: companyDefaults.twitterCard,
    twitterTitle: base.title,
    twitterDescription: base.description,
    twitterImage: ogImage,
  };
}
