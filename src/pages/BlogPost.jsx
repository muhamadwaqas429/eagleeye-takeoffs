// src/pages/BlogPost.jsx
// Individual article page. Reads from the generated blog manifest.
// Hooks are called unconditionally before any early return.
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import blogManifest from "../generated/blog-manifest.json";
import NotFound from "./NotFound.jsx";

export default function BlogPost() {
  const { slug } = useParams();

  // Resolve article — hooks must all be called before conditional returns
  const article = blogManifest.find((p) => p.slug === slug && !p.draft);
  const isValid = !!article;

  // Unconditional early delegate: if invalid, render NotFound
  // (SeoManager in App handles noindex for unknown routes via getRouteMetadata)
  if (!isValid) {
    return <NotFound />;
  }

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-300 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-amber-400 font-semibold mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <div className="flex flex-wrap gap-4 items-center text-sm text-zinc-400 mb-6">
          <span className="text-amber-400 font-semibold uppercase tracking-wider text-xs">
            {article.category}
          </span>
          <span>•</span>
          <span>{article.dateDisplay}</span>
          <span>•</span>
          <span>By {article.author}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Trusted repo-controlled markdown content rendered as HTML */}
        <div
          className="prose prose-invert prose-amber max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </div>
    </article>
  );
}
