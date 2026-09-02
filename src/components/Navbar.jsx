// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Home", sectionId: "hero" },
  { label: "Services", sectionId: "services" },
  { label: "Sample Takeoffs", sectionId: "sample-work" },
  { label: "How It Works", sectionId: "process" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -75;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 22, 40, 0.98)"
          : "rgba(10, 22, 40, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(245, 176, 52, 0.18)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleSectionClick("hero")}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none"
          id="nav-logo-btn"
          aria-label="EagleEye Takeoffs Home"
        >
          <img
            src={logo}
            alt="EagleEye Takeoffs Logo"
            className="h-8 sm:h-10 w-auto object-contain shrink-0"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-white font-bold text-base sm:text-lg tracking-tight whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EagleEye{" "}
              <span style={{ color: "#f5b034" }}>Takeoffs</span>
            </span>
            <span
              className="text-[10px] sm:text-xs font-medium tracking-widest uppercase"
              style={{ color: "#7a94ab", letterSpacing: "0.12em" }}
            >
              Estimating Services
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => handleSectionClick(link.sectionId)}
              className="text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: "#c0d0e0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5b034")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c0d0e0")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-request-estimate-btn"
            onClick={() => handleSectionClick("contact")}
            className="px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer"
            style={{
              background: "#f5b034",
              color: "#0a1628",
              borderRadius: "4px",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#e8a020")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#f5b034")
            }
          >
            Request Estimate
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none flex items-center justify-center rounded-md"
          style={{ background: "rgba(255,255,255,0.05)" }}
          onClick={() => setIsOpen((s) => !s)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          id="nav-mobile-toggle"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bottom-0 overflow-y-auto px-6 py-8 flex flex-col justify-between"
          style={{
            background: "rgba(10, 22, 40, 0.99)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            minHeight: "calc(100vh - 72px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleSectionClick(link.sectionId)}
                className="text-lg font-medium text-left py-3 px-3 rounded-md transition-colors border-b"
                style={{
                  color: "#d0e0f0",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-6 pb-12 flex flex-col gap-4">
            <button
              onClick={() => handleSectionClick("contact")}
              className="w-full py-3.5 text-base font-semibold text-center rounded-md"
              style={{
                background: "#f5b034",
                color: "#0a1628",
              }}
            >
              Request Estimate
            </button>
            <p className="text-xs text-center text-zinc-500">
              Serving USA &amp; Canada | 24–48 Hr Turnaround
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
