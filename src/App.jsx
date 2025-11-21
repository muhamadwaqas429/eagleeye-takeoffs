// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

import Home from "@/pages/Home.jsx";
import Services from "@/pages/Services.jsx";
import About from "@/pages/About.jsx";
import Contact from "@/pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
