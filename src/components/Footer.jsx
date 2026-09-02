// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const navSections = [
  { label: "Home", sectionId: "hero" },
  { label: "Services", sectionId: "services" },
  { label: "Sample Takeoffs", sectionId: "sample-work" },
  { label: "How It Works", sectionId: "process" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

const servicesList = [
  "Concrete & Foundation Takeoffs",
  "Roofing Takeoffs",
  "Framing & Drywall Estimates",
  "Electrical Takeoffs",
  "Plumbing & HVAC Estimates",
  "Flooring & Painting Estimates",
  "Sitework & Landscaping",
  "Commercial Estimating",
  "Residential Estimating",
];

const offices = [
  {
    country: "United States",
    flag: "🇺🇸",
    address: "30 N Gould St Ste N",
    city: "Sheridan, WY 82801",
    phone: "+1 (774) 457-4941",
    tel: "tel:+17744574941",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    address: "Victoriaville, Quebec",
    city: "Canada",
    phone: "+1 (581) 907-2780",
    tel: "tel:+15819072780",
  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -75;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #060e1c 0%, #040a14 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "#6b7280",
      }}
    >
      {/* Gold Top Accent Bar */}
      <div
        className="h-0.5 sm:h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #f5b034 30%, #ffd56b 50%, #f5b034 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img
                src={logo}
                alt="EagleEye Takeoffs"
                className="h-8 sm:h-9 object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span
                className="text-base sm:text-lg font-extrabold text-white tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                EagleEye{" "}
                <span style={{ color: "#f5b034" }}>Takeoffs</span>
              </span>
            </div>

            <p
              className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 text-slate-400"
              style={{ maxWidth: "300px" }}
            >
              Professional construction estimating and quantity takeoff services for contractors across the USA and Canada.
            </p>

            <a
              href="mailto:eagleeyetakeoffs@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors"
              style={{ color: "#f5b034" }}
            >
              <Mail size={14} />
              eagleeyetakeoffs@gmail.com
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest pb-2 sm:pb-3 mb-4 sm:mb-5"
              style={{
                color: "#f5b034",
                borderBottom: "1px solid rgba(245,158,11,0.2)",
                letterSpacing: "0.14em",
              }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {navSections.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.sectionId)}
                    className="flex items-center gap-2 text-xs sm:text-sm transition-colors text-left text-slate-400 hover:text-white cursor-pointer"
                  >
                    <span style={{ color: "#f5b034", fontSize: "9px" }}>▸</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h3
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest pb-2 sm:pb-3 mb-4 sm:mb-5"
              style={{
                color: "#f5b034",
                borderBottom: "1px solid rgba(245,158,11,0.2)",
                letterSpacing: "0.14em",
              }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {servicesList.map((svc) => (
                <li
                  key={svc}
                  className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-400"
                >
                  <span
                    style={{
                      color: "#f5b034",
                      fontSize: "9px",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Regional Offices */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest pb-2 sm:pb-3 mb-4 sm:mb-5"
              style={{
                color: "#f5b034",
                borderBottom: "1px solid rgba(245,158,11,0.2)",
                letterSpacing: "0.14em",
              }}
            >
              Our Offices
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="p-3 sm:p-4 rounded-md border border-white/5"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm sm:text-base leading-none">{office.flag}</span>
                    <span className="text-xs sm:text-sm font-bold text-white">{office.country}</span>
                  </div>

                  <div className="flex items-start gap-2 mb-1.5">
                    <MapPin
                      size={12}
                      className="shrink-0 mt-0.5 text-slate-500"
                    />
                    <div className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      <div>{office.address}</div>
                      <div>{office.city}</div>
                    </div>
                  </div>

                  <a
                    href={office.tel}
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Phone size={11} className="shrink-0 text-slate-500" />
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 sm:my-10 h-px w-full"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3 text-[11px] sm:text-xs text-slate-500"
        >
          <span>© {new Date().getFullYear()} EagleEye Takeoffs. All rights reserved.</span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_6px_#22c55e]"
              />
              Serving USA &amp; Canada
            </span>
            <span className="text-white/10">|</span>
            <a
              href="mailto:eagleeyetakeoffs@gmail.com"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              eagleeyetakeoffs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
