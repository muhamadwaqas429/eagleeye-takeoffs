import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const servicesList = [
  "Construction Takeoffs",
  "Material Estimates",
  "Blueprint Analysis",
  "Residential Estimates",
  "Commercial Estimates",
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

function SectionHeading({ children }) {
  return (
    <h3
      className="text-[11px] font-bold uppercase tracking-widest pb-3 mb-5"
      style={{
        color: "#f59e0b",
        borderBottom: "1px solid rgba(245,158,11,0.2)",
      }}
    >
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0c1121 0%, #060a12 100%)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        color: "#9ca3af",
      }}
    >
      {/* Amber top accent */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent 0%, #f59e0b 30%, #fbbf24 50%, #f59e0b 70%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Main grid — 1 col on mobile, 2 cols on sm, 4 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "9px",
                  background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#0c1121" />
                  <path d="M2 17l10 5 10-5" stroke="#0c1121" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M2 12l10 5 10-5" stroke="#0c1121" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                EagleEye <span style={{ color: "#f59e0b" }}>Takeoffs</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280", maxWidth: "300px" }}>
              Premium construction takeoffs &amp; estimating services for
              contractors, builders, and architects across North America.
            </p>

            <a
              href="mailto:support@eetakeoffs.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#f59e0b" }}
            >
              <Mail size={14} />
              support@eetakeoffs.com
            </a>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    <span style={{ color: "#f59e0b", fontSize: "10px" }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <SectionHeading>Services</SectionHeading>
            <ul className="flex flex-col gap-3">
              {servicesList.map((svc) => (
                <li
                  key={svc}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#9ca3af" }}
                >
                  <span style={{ color: "#f59e0b", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>
                    ▸
                  </span>
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Offices ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <SectionHeading>Our Offices</SectionHeading>
            <div className="flex flex-col gap-4">
              {offices.map((office) => (
                <div
                  key={office.country}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  {/* Country */}
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ fontSize: "17px", lineHeight: 1 }}>{office.flag}</span>
                    <span className="text-sm font-bold text-white">{office.country}</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: "#6b7280" }} />
                    <div className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                      <div>{office.address}</div>
                      <div>{office.city}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href={office.tel}
                    className="inline-flex items-center gap-2 text-xs font-medium transition-colors hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    <Phone size={12} className="shrink-0" style={{ color: "#6b7280" }} />
                    {office.phone}
                    <ArrowUpRight size={11} style={{ color: "#f59e0b" }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "#4b5563" }}>
          <span>© {new Date().getFullYear()} EagleEye Takeoffs. All rights reserved.</span>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2">
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
              Serving USA &amp; Canada
            </span>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
            <a
              href="mailto:support@eetakeoffs.com"
              className="transition-colors hover:text-gray-400"
              style={{ color: "#4b5563" }}
            >
              support@eetakeoffs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
