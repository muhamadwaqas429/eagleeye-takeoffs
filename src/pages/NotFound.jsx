// src/pages/NotFound.jsx
// Used by both the wildcard route in App.jsx and the static 404.html generation.
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-amber-400 text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
