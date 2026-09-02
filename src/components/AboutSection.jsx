// src/components/AboutSection.jsx
import React from "react";
import aboutImg from "../assets/about_construction.jpg";

const authorities = [
  {
    icon: "👁",
    title: "Experienced Estimators",
    desc: "Our team brings years of field and estimating experience across all construction trades.",
  },
  {
    icon: "✅",
    title: "Manual Review Process",
    desc: "Every takeoff is manually verified and checked line-by-line before delivery — no raw automated outputs.",
  },
  {
    icon: "📋",
    title: "Industry-Focused Workflows",
    desc: "Our process aligns with standard contractor bidding methods — organized by CSI division and trade.",
  },
];

export default function AboutSection({ headingLevel = "h2" }) {
  const Heading = headingLevel;

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
      id="about"
      className="py-14 sm:py-20 md:py-24 relative overflow-hidden"
      style={{ background: "#0a1628" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-lg overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={aboutImg}
                alt="EagleEye Takeoffs — professional construction estimating team"
                className="w-full h-auto object-cover max-h-[340px] sm:max-h-[460px]"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
              style={{ color: "#f5b034", letterSpacing: "0.14em" }}
            >
              About EagleEye Takeoffs
            </p>

            <Heading
              className="font-extrabold text-white tracking-tight mb-4 sm:mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Built for Contractors.{" "}
              <span style={{ color: "#f5b034" }}>Focused on Accurate Bids.</span>
            </Heading>

            <p
              className="text-sm sm:text-base leading-relaxed mb-4"
              style={{ color: "#8faabb" }}
            >
              EagleEye Takeoffs provides professional construction estimating and quantity takeoff
              services for contractors, subcontractors, builders, and construction professionals
              across the United States and Canada.
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
              style={{ color: "#8faabb" }}
            >
              Our estimators analyze project drawings and specifications to deliver detailed
              material quantities, labor and material pricing, and bid-ready estimates organized
              by trade and CSI division.
            </p>

            {/* Authority Points */}
            <div className="flex flex-col gap-3.5 sm:gap-4 mb-8">
              {authorities.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-md border border-white/5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <span className="text-xl sm:text-2xl shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <div
                      className="font-bold text-white text-sm sm:text-base mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                id="about-request-estimate-btn"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 font-semibold text-xs sm:text-sm text-center rounded transition-all duration-200 cursor-pointer"
                style={{
                  background: "#f5b034",
                  color: "#0a1628",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
              >
                Request an Estimate
              </button>
              <button
                id="about-services-btn"
                onClick={() => scrollTo("services")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 font-semibold text-xs sm:text-sm text-center rounded transition-all duration-200 cursor-pointer"
                style={{
                  background: "transparent",
                  color: "#d0e0f0",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#f5b034";
                  e.currentTarget.style.color = "#f5b034";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.color = "#d0e0f0";
                }}
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
