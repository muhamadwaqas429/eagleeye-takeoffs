// src/components/ServicesSection.jsx
import React, { useState } from "react";

const services = [
  {
    id: "concrete",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Concrete & Foundation Takeoffs",
    desc: "Footing volumes, slab quantities, reinforcement schedules, and forming materials.",
  },
  {
    id: "roofing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Roofing Takeoffs",
    desc: "Roof squares, pitch calculations, underlayment, flashings, and waste factors.",
  },
  {
    id: "framing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "Framing & Drywall Estimates",
    desc: "Lumber counts, stud spacing calculations, drywall square footage, and fasteners.",
  },
  {
    id: "electrical",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Electrical Takeoffs",
    desc: "Panel schedules, conduit runs, wire quantities, fixtures, and device counts.",
  },
  {
    id: "plumbing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4.4 0-8-3.6-8-8 0-4 6-12 8-12s8 8 8 12c0 4.4-3.6 8-8 8z" />
      </svg>
    ),
    title: "Plumbing & HVAC Estimates",
    desc: "Pipe lengths, fixture counts, duct sizing, equipment lists, and labor hours.",
  },
  {
    id: "flooring",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Flooring & Painting Estimates",
    desc: "Floor area measurements, paint coverage calculations, material quantities per room.",
  },
  {
    id: "sitework",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-8 4 4 4-6 4 8" />
        <line x1="3" y1="21" x2="21" y2="21" />
      </svg>
    ),
    title: "Sitework & Landscaping",
    desc: "Grading volumes, excavation quantities, paving areas, and drainage materials.",
  },
  {
    id: "commercial",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <line x1="10" y1="6" x2="10" y2="6.01" />
        <line x1="14" y1="6" x2="14" y2="6.01" />
        <line x1="10" y1="10" x2="10" y2="10.01" />
        <line x1="14" y1="10" x2="14" y2="10.01" />
        <line x1="10" y1="14" x2="10" y2="14.01" />
        <line x1="14" y1="14" x2="14" y2="14.01" />
        <line x1="10" y1="18" x2="10" y2="18.01" />
        <line x1="14" y1="18" x2="14" y2="18.01" />
      </svg>
    ),
    title: "Commercial Estimating",
    desc: "Full scope commercial project takeoffs — office, retail, industrial, and mixed-use.",
  },
  {
    id: "residential",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Residential Estimating",
    desc: "Single-family, multi-family, and custom home estimates for builders and contractors.",
  },
  {
    id: "material-labor",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Material & Labor Pricing",
    desc: "Current regional material pricing and labor cost breakdowns for accurate bidding.",
  },
];

export default function ServicesSection({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  const [hovered, setHovered] = useState(null);

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
      id="services"
      className="py-14 sm:py-20 md:py-24"
      style={{ background: "#0a1628" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#f5b034", letterSpacing: "0.14em" }}
          >
            What We Estimate
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <Heading
              className="font-extrabold text-white tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "600px",
              }}
            >
              Our Estimating Services
            </Heading>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{
                color: "#8faabb",
                maxWidth: "420px",
              }}
            >
              Full-scope takeoff and estimating services for every trade and division of construction.
            </p>
          </div>
          <div
            className="mt-6 sm:mt-8 h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(245,176,52,0.5), rgba(245,176,52,0.1), transparent)",
            }}
          />
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px rounded-md overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="relative p-5 sm:p-6 transition-colors duration-200 cursor-default"
              style={{
                background: hovered === service.id ? "#0e203a" : "#0c192e",
              }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-colors duration-200"
                style={{
                  background: hovered === service.id ? "#f5b034" : "transparent",
                }}
              />

              {/* Icon */}
              <div
                className="mb-3 sm:mb-4 transition-colors duration-200"
                style={{
                  color: hovered === service.id ? "#f5b034" : "#5d80a2",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-2 text-sm sm:text-base leading-snug transition-colors duration-200"
                style={{
                  color: hovered === service.id ? "#ffffff" : "#d0e0f0",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{
                  color: "#7292af",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}

          {/* CTA Grid Card */}
          <div
            className="p-5 sm:p-6 flex flex-col justify-center cursor-pointer transition-colors duration-200 sm:col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-1"
            style={{
              background: "#f5b034",
            }}
            onClick={() => scrollTo("contact")}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
          >
            <div className="mb-3 text-slate-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3
              className="font-bold mb-1 text-slate-950 text-sm sm:text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Don't See Your Trade?
            </h3>
            <p className="text-xs sm:text-sm text-slate-900/85 leading-relaxed mb-3">
              We cover all trades. Contact us to discuss your project scope.
            </p>
            <span className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1">
              Request Custom Estimate →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
