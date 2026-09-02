// src/components/TrustSection.jsx
import React from "react";

const trustCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "24–48 Hour Turnaround",
    desc: "Typical delivery timeline for most residential and commercial projects.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Manual Estimator Review",
    desc: "Every project reviewed and verified by experienced construction estimators.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "CSI-Based Estimates",
    desc: "Organized, bid-ready cost breakdowns following industry-standard CSI divisions.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "USA & Canada Coverage",
    desc: "Supporting general contractors, subcontractors, and builders across North America.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="bg-white border-b border-slate-200 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#d98c00", letterSpacing: "0.14em" }}
          >
            Why Contractors Choose Us
          </p>
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Built for Accuracy. Designed for Contractors.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-md p-5 sm:p-6 transition-all duration-200"
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f5b034";
                e.currentTarget.style.background = "#fffcf5";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,176,52,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="mb-3 sm:mb-4 text-amber-500"
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-2 text-slate-900 text-base sm:text-[1.05rem]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
