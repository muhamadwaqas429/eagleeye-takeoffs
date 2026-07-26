// src/pages/Blog.jsx
// Blog listing page. Imports the generated blog manifest.
import React from "react";
import { Link } from "react-router-dom";
import blogManifest from "../generated/blog-manifest.json";

export default function Blog() {
  const articles = blogManifest.filter((p) => !p.draft);

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Construction Estimating{" "}
          <span className="text-amber-400">Blog</span>
        </h1>
        <p className="text-zinc-400 text-lg mb-16 max-w-2xl">
          Expert guides and resources on construction takeoffs, estimating, and
          blueprint reading for contractors.
        </p>

        {articles.length === 0 ? (
          <p className="text-zinc-500">No articles published yet. Check back soon.</p>
        ) : (
          <div className="grid gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-zinc-500 text-xs">{article.dateDisplay}</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">{article.description}</p>
                <span className="inline-block mt-4 text-amber-400 font-semibold text-sm">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
