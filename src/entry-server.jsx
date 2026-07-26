// src/entry-server.jsx
// Node.js SSR entry point. Used by the prerender script.
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

/**
 * Renders a route to static HTML string.
 * @param {string} url - The pathname to render (e.g. "/about")
 * @returns {string} - The rendered HTML string for insertion into the SSR outlet
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
