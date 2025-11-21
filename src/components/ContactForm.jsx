// src/components/ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT BLOCK */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let’s Discuss Your
            <span className="text-amber-400"> Project Requirements</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-lg">
            Whether you need precise takeoffs, cost estimating, blueprint
            analysis, or full project review — we are here to help you deliver
            accurate, efficient, and professional construction solutions.
          </p>

          <div className="mt-10 space-y-4 text-zinc-300">
            <p className="flex items-center gap-3">
              <span className="text-amber-400 text-xl">•</span>
              Fast 24–48 hour turnaround for most projects
            </p>
            <p className="flex items-center gap-3">
              <span className="text-amber-400 text-xl">•</span>
              Highly accurate material & cost estimations
            </p>
            <p className="flex items-center gap-3">
              <span className="text-amber-400 text-xl">•</span>
              Expert blueprint analysis for contractors
            </p>
          </div>
        </div>

        {/* RIGHT FORM BLOCK */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-10 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-8">Contact Us</h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-amber-400 text-zinc-900 font-semibold text-lg shadow-lg hover:bg-amber-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
