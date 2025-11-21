import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import heroImg from "../assets/hero.png"; // replace with your hero image

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt="Construction aerial"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        aria-hidden="true"
      />

      {/* Soft round cinematic spotlight (center) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[90vh] max-h-[900px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,195,80,0.12), rgba(0,0,0,0.65) 40%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Decorative subtle vignette to deepen edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Glassmorphism content card */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[92%] max-w-5xl rounded-2xl p-6 md:p-10 bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-[rgba(255,255,255,0.06)] shadow-2xl"
        role="region"
        aria-labelledby="hero-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Precision{" "}
              <span className="text-amber-400">Construction Takeoffs</span>
              <span className="block text-lg md:text-xl font-medium text-zinc-300 mt-3 max-w-xl">
                Delivered fast — accurate measurements, reliable estimates, and
                expert support to keep your projects on schedule.
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="flex items-center justify-center px-6 py-3 text-base shadow-md">
                Get a Quote
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center px-6 py-3 text-base border-zinc-600 text-zinc-100"
              >
                Learn More
              </Button>
            </div>

            {/* micro-features inline */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="inline-flex items-center gap-3 bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-sm text-zinc-200">Fast Turnaround</span>
              </div>

              <div className="inline-flex items-center gap-3 bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-sm text-zinc-200">Industry Accuracy</span>
              </div>

              <div className="inline-flex items-center gap-3 bg-zinc-800/50 px-3 py-2 rounded-lg border border-zinc-700">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-sm text-zinc-200">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right visual / small feature panel */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-xl overflow-hidden border border-[rgba(255,255,255,0.04)] bg-gradient-to-b from-white/3 to-white/2 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-zinc-300">Latest Project</p>
                  <h4 className="text-lg font-semibold">
                    Commercial Complex Takeoff
                  </h4>
                </div>
                <div className="text-amber-400 font-semibold">Trusted</div>
              </div>

              <div className="h-40 w-full rounded-md overflow-hidden bg-zinc-800">
                {/* small thumbnail — keep as background img or replace with actual */}
                <img
                  src={heroImg}
                  alt="Project thumbnail"
                  className="w-full h-full object-cover brightness-75"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-zinc-300">
                <div>2,400+ items measured</div>
                <div>Delivered in 48 hrs</div>
              </div>
            </motion.div>

            {/* small stats row */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { label: "Accuracy", value: "99.6%" },
                { label: "Avg. Turnaround", value: "48 hrs" },
                { label: "Satisfaction", value: "4.9/5" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-lg p-3 text-center"
                >
                  <div className="text-xs text-zinc-300">{s.label}</div>
                  <div className="text-lg font-semibold text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* subtle animated floating shapes (decorative) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.12, y: 0 }}
        animate={{ opacity: [0.12, 0.06, 0.12], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
      />
    </section>
  );
}
