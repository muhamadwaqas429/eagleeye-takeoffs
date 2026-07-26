// src/seo/SeoManager.jsx
// Manages all document metadata during client-side navigation.
// Mounted once inside the Router tree — replaces the old useSEO hook.
// Uses static import of blog manifest (generated at build time by generate:blog script).

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMetadata, normalizePathname } from "./routeMetadata";
import { getSchemasForRoute, safeJsonLd } from "./schemaBuilders";

// Static import — generate:blog must run before build:client.
// Default stub (src/generated/blog-manifest.json) is an empty array.
import blogManifest from "../generated/blog-manifest.json";

const PREVIEW = import.meta.env.VITE_VERCEL_ENV === "preview";

/** Ensure exactly one managed tag of a given selector exists. */
function setManagedTag(selector, attrName, value) {
  const all = document.querySelectorAll(`${selector}[data-seo-managed]`);
  all.forEach((el, i) => { if (i > 0) el.remove(); });

  let el = document.querySelector(`${selector}[data-seo-managed]`);

  if (!value) {
    if (el) el.remove();
    return;
  }

  if (!el) {
    // Extract tag name and any attribute selectors to pre-apply
    const tagName = selector.split("[")[0];
    el = document.createElement(tagName);
    const attrMatches = [...selector.matchAll(/\[([^=\]]+)="([^"]+)"\]/g)];
    attrMatches.forEach(([, k, v]) => el.setAttribute(k, v));
    el.setAttribute("data-seo-managed", "true");
    document.head.appendChild(el);
  }
  el.setAttribute(attrName, value);
}

function setLinkTag(rel, value) {
  const all = document.querySelectorAll(`link[rel="${rel}"][data-seo-managed]`);
  all.forEach((el, i) => { if (i > 0) el.remove(); });

  let el = document.querySelector(`link[rel="${rel}"][data-seo-managed]`);

  if (!value) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute("data-seo-managed", "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", value);
}

function updateSchemas(pathname) {
  // Remove previous managed schema
  const old = document.getElementById("json-ld-schema");
  if (old) old.remove();

  const schemas = getSchemasForRoute(pathname, blogManifest);
  if (schemas.length === 0) return;

  const script = document.createElement("script");
  script.id = "json-ld-schema";
  script.type = "application/ld+json";
  script.textContent = safeJsonLd(schemas.length === 1 ? schemas[0] : { "@graph": schemas });
  document.head.appendChild(script);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = normalizePathname(location.pathname);
    const meta = getRouteMetadata(pathname, blogManifest, PREVIEW);

    // Title
    document.title = meta.title;

    // Meta tags
    setManagedTag('meta[name="description"]', "content", meta.description);
    setManagedTag('meta[name="robots"]', "content", meta.robots);

    // Open Graph
    setManagedTag('meta[property="og:title"]', "content", meta.ogTitle);
    setManagedTag('meta[property="og:description"]', "content", meta.ogDescription);
    setManagedTag('meta[property="og:url"]', "content", meta.ogUrl);
    setManagedTag('meta[property="og:image"]', "content", meta.ogImage);

    // Twitter
    setManagedTag('meta[name="twitter:card"]', "content", meta.twitterCard);
    setManagedTag('meta[name="twitter:title"]', "content", meta.twitterTitle);
    setManagedTag('meta[name="twitter:description"]', "content", meta.twitterDescription);
    setManagedTag('meta[name="twitter:image"]', "content", meta.twitterImage);

    // Canonical link
    setLinkTag("canonical", meta.canonical);

    // JSON-LD
    updateSchemas(pathname);
  }, [location.pathname]);

  return null; // renders nothing to the DOM
}
