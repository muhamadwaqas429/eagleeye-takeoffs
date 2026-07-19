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
    <div style={{ marginBottom: "20px" }}>
      <h3
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#f59e0b",
          margin: 0,
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(245,158,11,0.2)",
        }}
      >
        {children}
      </h3>
    </div>
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

      {/* Main content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 32px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr 1.2fr 2fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* ─── Column 1: Brand ─── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {/* Logo mark + name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "9px",
                  background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#0c1121" />
                  <path
                    d="M2 17l10 5 10-5"
                    stroke="#0c1121"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 12l10 5 10-5"
                    stroke="#0c1121"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  EagleEye{" "}
                  <span style={{ color: "#f59e0b" }}>Takeoffs</span>
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "13.5px",
                lineHeight: "1.75",
                color: "#6b7280",
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              Premium construction takeoffs &amp; estimating services for
              contractors, builders, and architects across North America.
            </p>

            <a
              href="mailto:support@eetakeoffs.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "13px",
                color: "#f59e0b",
                textDecoration: "none",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f59e0b")}
            >
              <Mail size={14} />
              support@eetakeoffs.com
            </a>
          </div>

          {/* ─── Column 2: Quick Links ─── */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={{
                      fontSize: "13.5px",
                      color: "#9ca3af",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                  >
                    <span style={{ color: "#f59e0b", fontSize: "10px" }}>▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 3: Services ─── */}
          <div>
            <SectionHeading>Services</SectionHeading>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {servicesList.map((svc) => (
                <li
                  key={svc}
                  style={{
                    fontSize: "13.5px",
                    color: "#9ca3af",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      fontSize: "10px",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 4: Offices ─── */}
          <div>
            <SectionHeading>Our Offices</SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
                  {/* Country header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ fontSize: "17px", lineHeight: 1 }}>
                      {office.flag}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {office.country}
                    </span>
                  </div>

                  {/* Address row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <MapPin
                      size={13}
                      style={{ color: "#6b7280", marginTop: "2px", flexShrink: 0 }}
                    />
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", lineHeight: 1.55 }}>
                      <div>{office.address}</div>
                      <div>{office.city}</div>
                    </div>
                  </div>

                  {/* Phone row */}
                  <a
                    href={office.tel}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      fontSize: "12.5px",
                      color: "#9ca3af",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                  >
                    <Phone size={12} style={{ color: "#6b7280", flexShrink: 0 }} />
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
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            margin: "44px 0 24px",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#4b5563" }}>
            © {new Date().getFullYear()} EagleEye Takeoffs. All rights reserved.
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "12px",
              color: "#4b5563",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
            <span style={{ color: "rgba(255,255,255,0.08)" }}>|</span>
            <a
              href="mailto:support@eetakeoffs.com"
              style={{ color: "#4b5563", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#9ca3af")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              support@eetakeoffs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
