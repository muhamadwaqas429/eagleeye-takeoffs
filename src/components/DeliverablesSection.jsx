// src/components/DeliverablesSection.jsx
import React from "react";
import estimateImg from "../assets/estimate_spreadsheet.jpg";

const deliverables = [
  {
    id: "excel-takeoff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Detailed Excel Takeoff",
    desc: "Organized material quantities and measurements in clear, structured spreadsheets.",
  },
  {
    id: "material-quantities",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "Material Quantities",
    desc: "Accurate counts, dimensions, and quantities for every line item in your project.",
  },
  {
    id: "labor-pricing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Labor & Material Pricing",
    desc: "Complete cost breakdown covering both material and labor for confident bid submissions.",
  },
  {
    id: "pdf-plans",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Color-Coded PDF Plans",
    desc: "Visual plan markups with color-coded highlights showing every measured area.",
  },
  {
    id: "csi",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "CSI Division Organization",
    desc: "Estimates structured by CSI divisions — the industry standard for construction bidding.",
  },
  {
    id: "bid-ready",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Bid-Ready Estimates",
    desc: "Deliverables ready to support contractor proposals and owner bid submissions.",
  },
];

export default function DeliverablesSection() {
  return (
    <section
      id="deliverables"
      className="bg-slate-50 py-14 sm:py-20 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#d98c00", letterSpacing: "0.14em" }}
          >
            Every Project Includes
          </p>
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "650px",
            }}
          >
            What You Receive With Every Estimate
          </h2>
          <div
            className="mt-4 sm:mt-6 h-0.5 w-24 sm:w-36"
            style={{
              background: "linear-gradient(to right, #f5b034, transparent)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Deliverables List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 order-2 lg:order-1">
            {deliverables.map((item) => (
              <div
                key={item.id}
                id={`deliverable-${item.id}`}
                className="bg-white border border-slate-200 rounded-md p-4 sm:p-5 transition-all duration-200 hover:border-amber-400 hover:shadow-md"
              >
                <div
                  className="mb-3 w-9 h-9 rounded-md flex items-center justify-center text-amber-500"
                  style={{
                    background: "rgba(245,176,52,0.12)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold mb-1 text-slate-900 text-sm sm:text-base"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Image Panel */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
              <img
                src={estimateImg}
                alt="Construction estimating spreadsheet and plans"
                className="w-full h-auto object-cover max-h-[300px] sm:max-h-[420px]"
              />
            </div>
            {/* Floating Badge */}
            <div
              className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:left-6 rounded-md p-3 sm:p-4 shadow-lg border border-amber-500/20"
              style={{
                background: "#0a1628",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Included With Every Job
                  </div>
                  <div className="text-xs sm:text-sm text-white font-bold">
                    Excel Workbook + PDF Markup Plans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
