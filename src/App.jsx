// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import SeoManager from "@/seo/SeoManager.jsx";

import Home from "@/pages/Home.jsx";
import Services from "@/pages/Services.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";
import Blog from "@/pages/Blog.jsx";
import BlogPost from "@/pages/BlogPost.jsx";
import NotFound from "@/pages/NotFound.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* SeoManager must be inside the Router tree to use useLocation */}
      <SeoManager />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Wildcard catch-all: renders NotFound for any unmatched route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
