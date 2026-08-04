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

/** LocalBusiness schema — US office (Sheridan, WY) */
export function buildLocalBusinessUsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#local-us`,
    name: "EagleEye Takeoffs",
    description:
      "Construction takeoff services and quantity estimating for residential and commercial contractors across the USA.",
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    telephone: "+17744574941",
    email: "eagleeyetakeoffs@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St Ste N",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Estimating Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Takeoffs & Material Estimating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bill of Quantities (BOQ) & Quantity Surveying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Cost Estimation & Blueprint Analysis" } },
      ],
    },
  };
}

/** LocalBusiness schema — Canada office (Victoriaville, QC) */
export function buildLocalBusinessCaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DOMAIN}/#local-ca`,
    name: "EagleEye Takeoffs",
    description:
      "Construction takeoff services, BOQ creation, and cost estimating for contractors across Canada, including Quebec.",
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    telephone: "+15819072780",
    email: "eagleeyetakeoffs@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Victoriaville",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Estimating Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Takeoffs & Material Estimating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bill of Quantities (BOQ) & Quantity Surveying" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construction Cost Estimation & Blueprint Analysis" } },
      ],
    },
  };
}

/** FAQPage schema — shared FAQ content for home and services */
export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a construction takeoff or cost estimate take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EagleEye Takeoffs delivers most construction estimation reports and material takeoffs within 24–48 hours, depending on the project size and complexity.",
        },
      },
      {
        "@type": "Question",
        name: "What software do construction estimators use for BOQ and takeoffs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our estimating team uses industry-standard tools such as PlanSwift and Bluebeam to ensure accurate, professional-grade quantity takeoffs and Bill of Quantities (BOQ).",
        },
      },
      {
        "@type": "Question",
        name: "How does EagleEye Takeoffs compare to Phoenix Estimations, Zylo Estimations, or Elite Estimating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EagleEye Takeoffs provides faster 24–48 hour turnaround, dedicated estimator support across USA and Canada, and comprehensive BOQ and material takeoff reporting tailored to contractors.",
        },
      },
      {
        "@type": "Question",
        name: "How do I submit blueprints for a takeoff or cost estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can submit your blueprints or project plans through our contact form or by emailing us directly at eagleeyetakeoffs@gmail.com. We accept PDF, CAD, and scanned plan sets.",
        },
      },
      {
        "@type": "Question",
        name: "What types of construction projects and estimation services do you handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle residential, commercial, and industrial construction projects. Our services cover construction estimation, materials takeoffs, Bill of Quantities (BOQ), lumber takeoffs, CSI division estimating, and full blueprint analysis.",
        },
      },
    ],
  };
}

/** BreadcrumbList schema — for interior pages */
export function buildBreadcrumbSchema(label, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: DOMAIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${DOMAIN}${path}`,
      },
    ],
  };
}

/**
 * Get schemas for a given pathname.
 * Returns an array of schema objects (may be empty for 404).
 */
export function getSchemasForRoute(pathname, blogManifest = []) {
  if (pathname === "/" || pathname === "") {
    return [
      buildOrganizationSchema(),
      buildLocalBusinessUsSchema(),
      buildLocalBusinessCaSchema(),
      buildFaqSchema(),
    ];
  }
  if (pathname === "/services") {
    return [
      buildServiceSchema(),
      buildFaqSchema(),
      buildBreadcrumbSchema("Services", "/services"),
    ];
  }
  if (pathname === "/about") {
    return [buildBreadcrumbSchema("About", "/about")];
  }
  if (pathname === "/contact") {
    return [
      buildLocalBusinessUsSchema(),
      buildLocalBusinessCaSchema(),
      buildBreadcrumbSchema("Contact", "/contact"),
    ];
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
  // 404 gets no schema
  return [];
}
