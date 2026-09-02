// src/components/TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    id: "t1",
    quote:
      "The takeoff was detailed and delivered exactly when promised. We were able to use it directly for our bid — no rework needed.",
    name: "James R.",
    role: "General Contractor",
    company: "Ridgeline Construction",
    location: "Denver, CO",
  },
  {
    id: "t2",
    quote:
      "I've used several estimating services over the years. EagleEye is the most organized and accurate. The color-coded PDFs alone save us hours.",
    name: "Maria T.",
    role: "Project Manager",
    company: "Tanner Building Group",
    location: "Houston, TX",
  },
  {
    id: "t3",
    quote:
      "Fast, professional, and exactly what we needed. The CSI-organized breakdown made it easy to review with the owner before bid day.",
    name: "Dan K.",
    role: "Subcontractor",
    company: "KW Framing & Drywall",
    location: "Calgary, AB",
  },
  {
    id: "t4",
    quote:
      "We submitted a bid on a 3-story commercial project using their takeoff and won. The numbers were spot on. Highly recommend.",
    name: "Steve M.",
    role: "Owner",
    company: "MacAllister Commercial Builders",
    location: "Atlanta, GA",
  },
  {
    id: "t5",
    quote:
      "The turnaround time is the best in the business. Had a 48-hour deadline and they delivered clean, bid-ready Excel files with no issues.",
    name: "Fatima A.",
    role: "Estimator",
    company: "Apex Contracting Ltd.",
    location: "Toronto, ON",
  },
  {
    id: "t6",
    quote:
      "Switched from doing takeoffs in-house to using EagleEye. Saved us 20+ hours per bid. Their process is straightforward and the results are professional.",
    name: "Brian L.",
    role: "Roofing Contractor",
    company: "Liberty Roofing Co.",
    location: "Phoenix, AZ",
  },
];

const StarRating = () => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#f5b034"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
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
      id="testimonials"
      className="bg-slate-50 py-14 sm:py-20 md:py-24 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-3"
            style={{ color: "#d98c00", letterSpacing: "0.14em" }}
          >
            Contractor Reviews
          </p>
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.7rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            What Contractors Say
          </h2>
          <p
            className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mt-2 sm:mt-3 leading-relaxed"
          >
            Trusted by general contractors, subcontractors, and builders across North America.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="bg-white border border-slate-200 rounded-md p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between hover:border-amber-400 hover:shadow-md"
            >
              <div>
                {/* Stars */}
                <div className="mb-3 sm:mb-4">
                  <StarRating />
                </div>

                {/* Quote */}
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5 sm:mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              <div>
                <div className="h-px w-full bg-slate-100 mb-4" />
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-amber-400 font-bold text-xs shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0a1628, #1e3a5f)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="text-xs sm:text-sm font-bold text-slate-900"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500">
                      {t.role} — {t.company}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="text-center mt-10 sm:mt-14">
          <button
            id="testimonials-cta-btn"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 font-semibold text-xs sm:text-sm rounded transition-all duration-200 cursor-pointer"
            style={{
              background: "#f5b034",
              color: "#0a1628",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e8a020")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5b034")}
          >
            Join These Contractors — Request an Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
