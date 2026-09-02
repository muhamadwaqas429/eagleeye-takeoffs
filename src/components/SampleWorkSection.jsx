// src/components/SampleWorkSection.jsx
import React, { useState } from "react";
import blueprintImg from "../assets/blueprint_plans.jpg";
import estimateImg from "../assets/estimate_spreadsheet.jpg";

const examples = [
  {
    id: "commercial-roofing",
    type: "Commercial",
    title: "Commercial Roofing Project",
    location: "Dallas, TX",
    sqft: "42,000 SF",
    deliverables: [
      "Material quantities",
      "Labor pricing",
      "Waste calculations",
      "Accessories & flashings",
      "Excel estimate",
      "Color-coded PDF markup",
    ],
    img: blueprintImg,
  },
  {
    id: "residential-framing",
    type: "Residential",
    title: "Single-Family Home — Full Framing",
    location: "Phoenix, AZ",
    sqft: "3,200 SF",
    deliverables: [
      "Lumber board foot count",
      "Stud & header schedule",
      "Sheathing quantities",
      "Hardware & fasteners",
      "Excel takeoff",
      "Annotated floor plan PDF",
    ],
    img: estimateImg,
  },
  {
    id: "concrete-foundation",
    type: "Commercial",
    title: "Office Building — Concrete & Foundation",
    location: "Toronto, ON",
    sqft: "18,500 SF",
    deliverables: [
      "Footing & slab volumes (CY)",
      "Rebar quantities & schedule",
      "Forming materials",
      "Concrete mix specs",
      "Excel estimate with alternates",
      "Structural markup PDF",
    ],
    img: blueprintImg,
  },
];

export default function SampleWorkSection() {
  const [active, setActive] = useState(0);

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
      id="sample-work"
      className="py-14 sm:py-20 md:py-24"
      style={{ background: "#0a1628" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#f5b034", letterSpacing: "0.14em" }}
          >
            Sample Takeoffs
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <h2
              className="font-extrabold text-white tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "600px",
              }}
            >
              Recent Estimate Examples
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#8faabb", maxWidth: "420px" }}
            >
              This is exactly what you receive — organized, transparent, and ready to submit to owners.
            </p>
          </div>
          <div
            className="mt-6 sm:mt-8 h-px w-full"
            style={{
              background: "linear-gradient(to right, rgba(245,176,52,0.5), transparent)",
            }}
          />
        </div>

        {/* Tab Buttons (Scrollable on small mobile) */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              id={`sample-tab-${ex.id}`}
              onClick={() => setActive(i)}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded shrink-0 transition-all duration-200 cursor-pointer"
              style={{
                background: active === i ? "#f5b034" : "rgba(255,255,255,0.04)",
                color: active === i ? "#0a1628" : "#8faabb",
                border: active === i ? "1px solid #f5b034" : "1px solid rgba(255,255,255,0.1)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {/* Active Example Content */}
        {examples.map((ex, i) =>
          i !== active ? null : (
            <div
              key={ex.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
            >
              {/* Left Details Card */}
              <div
                className="rounded-lg p-5 sm:p-8 flex flex-col justify-between"
                style={{
                  background: "#0c192e",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  {/* Type Badge & Location */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{
                        background: "rgba(245,176,52,0.12)",
                        border: "1px solid rgba(245,176,52,0.3)",
                        color: "#f5b034",
                      }}
                    >
                      {ex.type}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400">{ex.location}</span>
                  </div>

                  <h3
                    className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {ex.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mb-6">
                    Project Area: <strong className="text-slate-200">{ex.sqft}</strong>
                  </p>

                  <div className="h-px w-full bg-white/10 mb-6" />

                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: "#f5b034" }}
                  >
                    Deliverables Included:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {ex.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0"
                          style={{
                            background: "rgba(245,176,52,0.18)",
                            color: "#f5b034",
                          }}
                        >
                          ✓
                        </span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id="sample-work-request-btn"
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 sm:py-3.5 font-semibold text-xs sm:text-sm text-center rounded transition-all duration-200 cursor-pointer"
                  style={{
                    background: "#f5b034",
                    color: "#0a1628",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
                >
                  Request a Similar Estimate
                </button>
              </div>

              {/* Right Image Card */}
              <div
                className="rounded-lg overflow-hidden border border-white/10 relative min-h-[260px] sm:min-h-[360px]"
              >
                <img
                  src={ex.img}
                  alt={`${ex.title} takeoff plan sample`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold"
                  style={{
                    background: "rgba(10,22,40,0.88)",
                    backdropFilter: "blur(6px)",
                    color: "#f5b034",
                    border: "1px solid rgba(245,176,52,0.3)",
                  }}
                >
                  Sample Preview
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
