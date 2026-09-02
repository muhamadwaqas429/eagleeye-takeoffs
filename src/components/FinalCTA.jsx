// src/components/FinalCTA.jsx
import React from "react";
import heroImg from "../assets/hero_construction.jpg";

export default function FinalCTA() {
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
      id="final-cta"
      className="relative overflow-hidden py-16 sm:py-20 md:py-28"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Construction site under progress"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.20)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4"
          style={{ color: "#f5b034", letterSpacing: "0.14em" }}
        >
          Start Your Next Estimate
        </p>

        <h2
          className="font-extrabold text-white tracking-tight mb-4 sm:mb-6"
          style={{
            fontSize: "clamp(1.85rem, 4.5vw, 3.2rem)",
            fontFamily: "'Inter', sans-serif",
            lineHeight: "1.15",
          }}
        >
          Ready to Win More Bids With{" "}
          <span style={{ color: "#f5b034" }}>Accurate Estimates?</span>
        </h2>

        <p
          className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto"
          style={{
            color: "#b0c4d8",
          }}
        >
          Send your drawings and receive a professional, bid-ready takeoff prepared for your next project. 24–48 hour typical turnaround. All trades covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <button
            id="final-cta-request-btn"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 font-semibold text-sm sm:text-base rounded transition-all duration-200 cursor-pointer"
            style={{
              background: "#f5b034",
              color: "#0a1628",
              boxShadow: "0 4px 20px rgba(245, 176, 52, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e8a020";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f5b034";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Request an Estimate
          </button>

          <button
            id="final-cta-sample-btn"
            onClick={() => scrollTo("sample-work")}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 font-semibold text-sm sm:text-base rounded transition-all duration-200 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.25)",
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
            View Sample Work
          </button>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
        >
          {[
            "24–48 Hr Turnaround",
            "Excel + PDF Deliverables",
            "USA & Canada",
            "All Trades",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
            >
              <span className="text-amber-400 text-xs">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
