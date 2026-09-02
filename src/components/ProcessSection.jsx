// src/components/ProcessSection.jsx
import React from "react";

const steps = [
  {
    id: "send-plans",
    num: "01",
    title: "Send Plans",
    desc: "Upload your drawings, specifications, and project scope via our secure estimate form.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: "we-review",
    num: "02",
    title: "We Review",
    desc: "Our estimators examine your blueprints, specifications, and trade requirements in detail.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "takeoff-pricing",
    num: "03",
    title: "Takeoff & Pricing",
    desc: "We calculate accurate material quantities, labor hours, and prepare structured cost sheets.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "receive-estimate",
    num: "04",
    title: "Receive Your Estimate",
    desc: "Receive clean Excel spreadsheets and color-coded PDF plan markups ready to bid.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
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
      id="process"
      className="bg-white py-14 sm:py-20 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#d98c00", letterSpacing: "0.14em" }}
          >
            Simple Process
          </p>
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            How It Works
          </h2>
          <p
            className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed"
          >
            Getting your professional takeoff is straightforward. Here's exactly what to expect from start to delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute h-0.5 top-[34px] left-[12%] right-[12%]"
            style={{
              background: "linear-gradient(to right, #f5b034, rgba(245,176,52,0.25))",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.id}
                id={`process-step-${step.id}`}
                className="flex flex-col items-center text-center lg:items-start lg:text-left bg-slate-50 lg:bg-transparent p-5 lg:p-0 rounded-lg lg:rounded-none border lg:border-none border-slate-200"
              >
                {/* Step Circle */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 shadow-sm shrink-0"
                  style={{
                    background: i === 0 ? "#f5b034" : "#ffffff",
                    border: i === 0 ? "none" : "2px solid #e2e8f0",
                    color: i === 0 ? "#0a1628" : "#f5b034",
                  }}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <div
                  className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-600 mb-1"
                >
                  Step {step.num}
                </div>

                <h3
                  className="font-bold text-slate-900 text-base sm:text-lg mb-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 sm:gap-6 bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-8"
        >
          <div>
            <h3
              className="font-bold text-base sm:text-lg text-slate-900 mb-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to get your takeoff started?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Send your plans today and receive your accurate estimate within 24–48 hours.
            </p>
          </div>
          <button
            id="process-cta-btn"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap rounded transition-all duration-200 cursor-pointer"
            style={{
              background: "#f5b034",
              color: "#0a1628",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
          >
            Request an Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
