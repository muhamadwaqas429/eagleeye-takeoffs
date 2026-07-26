// src/seo/schemaBuilders.js
// Builds JSON-LD schema objects for each route.
// Used identically by the prerender script and the client-side SeoManager.

const DOMAIN = "https://eagleeyetakeoffs.com";

/** SafeEscape JSON-LD string for injection into <script> tags */
export function safeJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}

/** Organization schema — for Home page */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EagleEye Takeoffs",
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: ["US", "CA"],
    },
  };
}

/** Service schema — for Services page (uses visible card data) */
export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Takeoff and Estimating",
    provider: {
      "@type": "Organization",
      name: "EagleEye Takeoffs",
      url: DOMAIN,
    },
    areaServed: ["US", "CA"],
    description:
      "Professional material takeoffs, cost estimating, and blueprint analysis for construction contractors across USA and Canada.",
  };
}

/** CollectionPage schema — for Blog listing page */
export function buildBlogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Construction Estimating Blog",
    description:
      "Expert guides and resources on construction takeoffs, estimating, and blueprint reading.",
    url: `${DOMAIN}/blog`,
    publisher: {
      "@type": "Organization",
      name: "EagleEye Takeoffs",
      url: DOMAIN,
    },
  };
}

/** BlogPosting schema — for individual article pages */
export function buildBlogPostingSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${DOMAIN}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "EagleEye Takeoffs",
      url: DOMAIN,
      logo: {
        "@type": "ImageObject",
        url: `${DOMAIN}/logo.png`,
      },
    },
    image: article.image
      ? article.image.startsWith("http")
        ? article.image
        : `${DOMAIN}${article.image}`
      : `${DOMAIN}/og-image.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${article.slug}`,
    },
  };
}

/**
 * Get schemas for a given pathname.
 * Returns an array of schema objects (may be empty for 404).
 */
export function getSchemasForRoute(pathname, blogManifest = []) {
  if (pathname === "/" || pathname === "") {
    return [buildOrganizationSchema()];
  }
  if (pathname === "/services") {
    return [buildServiceSchema()];
  }
  if (pathname === "/blog") {
    return [buildBlogCollectionSchema()];
  }
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.slice("/blog/".length);
    const article = blogManifest.find((p) => p.slug === slug && !p.draft);
    if (article) {
      return [buildBlogPostingSchema(article)];
    }
  }
  // About, Contact, and 404 get no schema
  return [];
}
