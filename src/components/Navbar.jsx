// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png"; // adjust if necessary

const NAV_LINKS = [
  { label: "Home", to: "/", sectionId: "hero" },
  { label: "Services", to: "/", sectionId: "services" },
  { label: "About", to: "/", sectionId: "about" },
  { label: "Contact", to: "/", sectionId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80; // set to match your navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // navigate to Home and pass state telling Home what to scroll to
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-zinc-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSectionClick("hero")}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo"
              className="h-10 object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="text-white font-bold">EagleEye</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleSectionClick(link.sectionId || "")}
              className="text-zinc-200 hover:text-amber-400 font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleSectionClick("contact")}
            className="ml-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-md font-semibold"
          >
            Get a Quote
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="text-white text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 px-4 py-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleSectionClick(link.sectionId || "")}
                className="text-zinc-200 text-lg text-left hover:text-amber-400"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleSectionClick("contact")}
              className="mt-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-md font-semibold"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
