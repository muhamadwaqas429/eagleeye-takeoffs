// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/hero_construction.jpg";

const trustPoints = [
  { icon: "⏱", label: "24–48 Hr Typical Turnaround" },
  { icon: "📊", label: "Detailed Excel Takeoffs" },
  { icon: "🎨", label: "Color-Coded PDF Plans" },
  { icon: "🌎", label: "Serving USA & Canada" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Hero"
      className="relative w-full flex items-center justify-center text-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Commercial construction site"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.35)" }}
        aria-hidden="true"
      />

      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.90) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a1628)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(245, 176, 52, 0.12)",
              border: "1px solid rgba(245, 176, 52, 0.35)",
              borderRadius: "3px",
              color: "#f5b034",
              letterSpacing: "0.12em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#f5b034",
              }}
            />
            Professional Estimating Services
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-extrabold leading-[1.15] sm:leading-tight mb-4 sm:mb-6 tracking-tight text-white"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Construction Takeoffs &amp; Estimating Services{" "}
            <span style={{ color: "#f5b034" }}>for Contractors</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base md:text-lg"
            style={{
              color: "#b0c4d8",
              maxWidth: "620px",
            }}
          >
            Accurate material quantities, labor pricing, and bid-ready estimates
            for commercial and residential projects across the USA and Canada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto">
            <button
              id="hero-request-estimate-btn"
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base text-center transition-all duration-200 cursor-pointer"
              style={{
                background: "#f5b034",
                color: "#0a1628",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(245, 176, 52, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e8a020";
                e.currentTarget.style.boxShadow =
                  "0 6px 28px rgba(245, 176, 52, 0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f5b034";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(245, 176, 52, 0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Request an Estimate
            </button>

            <button
              id="hero-sample-takeoff-btn"
              onClick={() => scrollTo("sample-work")}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base text-center transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f5b034";
                e.currentTarget.style.color = "#f5b034";
                e.currentTarget.style.background = "rgba(245,176,52,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              View Sample Takeoff
            </button>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-3">
            {trustPoints.map((pt) => (
              <div
                key={pt.label}
                className="flex items-center gap-2.5"
                style={{ color: "#95adbe" }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    background: "rgba(245,176,52,0.18)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: "#f5b034",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span className="text-xs sm:text-sm font-medium">{pt.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
