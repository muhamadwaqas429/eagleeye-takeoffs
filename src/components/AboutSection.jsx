// src/components/AboutSection.jsx
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aboutImg from "../assets/services.png"; // Place your about image here

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-zinc-900 text-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-amber-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-pink-500/20 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image Column */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutImg}
            alt="About EagleEye Takeoffs"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold mb-6">
            About <span className="text-amber-400">EagleEye Takeoffs</span>
          </h2>
          <p className="text-zinc-300 text-lg md:text-xl mb-6">
            EagleEye Takeoffs provides precise, reliable, and fast construction
            takeoff and estimating services to help your projects stay on
            schedule and budget. We combine technology with expertise to deliver
            results you can trust.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {["Accuracy", "Speed", "Expert Team", "Professional Reporting"].map(
              (item) => (
                <Badge
                  key={item}
                  className="bg-amber-400 text-zinc-900 px-4 py-2 font-semibold shadow hover:shadow-lg transition-all"
                >
                  {item}
                </Badge>
              )
            )}
          </div>

          <Button className="bg-amber-400 text-zinc-900 hover:bg-amber-500 px-8 py-3 font-semibold shadow-lg hover:shadow-2xl transition-all">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
