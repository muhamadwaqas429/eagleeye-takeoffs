// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactSection({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 md:py-24"
      style={{ background: "#0a1628" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
              style={{ color: "#f5b034", letterSpacing: "0.14em" }}
            >
              Get In Touch
            </p>

            <Heading
              className="font-extrabold text-white tracking-tight mb-4 sm:mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Ready to Win More Bids With{" "}
              <span style={{ color: "#f5b034" }}>Accurate Estimates?</span>
            </Heading>

            <p
              className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
              style={{
                color: "#8faabb",
                maxWidth: "500px",
              }}
            >
              Send your project specifications, plans, and drawings. Our experienced estimating team is ready to deliver a fast, detailed, and bid-ready takeoff.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "United States Office",
                  value: "+1 (774) 457-4941",
                  href: "tel:+17744574941",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "Canada Office",
                  value: "+1 (581) 907-2780",
                  href: "tel:+15819072780",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Direct Email",
                  value: "eagleeyetakeoffs@gmail.com",
                  href: "mailto:eagleeyetakeoffs@gmail.com",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3.5 group no-underline"
                >
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-md flex items-center justify-center text-amber-400 shrink-0 transition-colors duration-200"
                    style={{
                      background: "rgba(245,176,52,0.1)",
                      border: "1px solid rgba(245,176,52,0.25)",
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {contact.label}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium group-hover:text-amber-400 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["24–48 Hr Turnaround", "USA & Canada Coverage", "All Construction Trades"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-slate-300 border border-white/10"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <span className="text-amber-400 text-xs">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div
            className="rounded-lg p-5 sm:p-8 md:p-10 w-full"
            style={{
              background: "#0c192e",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 sm:py-14">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 text-amber-400"
                  style={{ background: "rgba(245,176,52,0.15)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-bold text-white text-lg sm:text-xl mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                  Thank you for submitting your estimate inquiry. Our team will review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="font-bold text-lg sm:text-xl text-white mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Request an Estimate
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill in your details and we'll reply with a quote and turnaround schedule.
                </p>

                <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                        htmlFor="contact-name"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                        htmlFor="contact-company"
                      >
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="ABC Contracting"
                        className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                      htmlFor="contact-email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                      htmlFor="contact-trade"
                    >
                      Trade / Scope of Work
                    </label>
                    <select
                      id="contact-trade"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded bg-[#0c192e] border border-white/10 text-slate-200 outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="">Select a trade / division...</option>
                      <option>Concrete & Foundation</option>
                      <option>Roofing</option>
                      <option>Framing & Drywall</option>
                      <option>Electrical</option>
                      <option>Plumbing & HVAC</option>
                      <option>Flooring & Painting</option>
                      <option>Sitework & Landscaping</option>
                      <option>Commercial Full Scope</option>
                      <option>Residential Full Scope</option>
                      <option>Other / Multi-Trade</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                      htmlFor="contact-message"
                    >
                      Project Details &amp; Scope *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      placeholder="Describe your project location, square footage, scope of work, and bid deadline..."
                      className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3.5 font-semibold text-sm rounded transition-all duration-200 cursor-pointer"
                    style={{
                      background: "#f5b034",
                      color: "#0a1628",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
                  >
                    Send Estimate Request
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 We respect your privacy. All plan uploads are kept strictly confidential.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
