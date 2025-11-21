// src/components/ServicesSection.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";
import { motion } from "framer-motion";

// Services data
const services = [
  {
    title: "Takeoffs",
    img: "/src/assets/service_takeoff.png",
    desc: "Quick and accurate takeoffs for your projects.",
    badge: "Popular",
    accent: "from-amber-400 to-amber-500",
  },
  {
    title: "Estimating",
    img: "/src/assets/service_estimating.png",
    desc: "Precise estimating services for your construction needs.",
    badge: "New",
    accent: "from-pink-400 to-pink-500",
  },
  {
    title: "Reporting",
    img: "/src/assets/report_estimate.png",
    desc: "Detailed reporting to keep your team aligned and informed.",
    badge: "Expert",
    accent: "from-cyan-400 to-cyan-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 bg-zinc-900 text-white overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-500/20 to-amber-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-pink-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute -top-20 right-1/2 w-60 h-60 bg-gradient-to-tr from-cyan-400/20 to-cyan-500/10 rounded-full blur-2xl animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-6"
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-amber-400">Expert Services</span>
        </motion.h2>
        <motion.p
          className="text-zinc-300 text-lg md:text-xl text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Combining precision, technology, and expertise to deliver premium
          construction services that elevate your projects.
        </motion.p>

        {/* Premium Cards */}
        <div className="flex flex-col md:flex-row gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`flex-1 relative z-10 ${
                idx % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 1 }}
            >
              <Card className="bg-zinc-800 border border-zinc-700 hover:scale-105 transition-transform duration-500 relative overflow-hidden shadow-2xl">
                {/* Animated Badge */}
                <Badge
                  className={`absolute top-4 right-4 text-xs animate-pulse font-bold bg-gradient-to-r ${service.accent} text-zinc-900`}
                >
                  {service.badge}
                </Badge>

                {/* Floating abstract shapes inside card */}
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr ${service.accent} rounded-full blur-2xl animate-ping-slow`}
                ></div>
                <div
                  className={`absolute -bottom-8 -left-4 w-20 h-20 bg-gradient-to-tr ${service.accent} rounded-full blur-xl animate-spin-slow`}
                ></div>

                <CardHeader className="flex flex-col items-center gap-4 pt-12 relative z-10">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-28 h-28 md:w-32 md:h-32 object-contain hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 5 }}
                  />
                  <CardTitle className="text-2xl text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4 relative z-10">
                  <CardDescription className="text-zinc-300 text-center">
                    {service.desc}
                  </CardDescription>
                  <Button className="bg-amber-400 text-zinc-900 hover:bg-amber-500 px-6 py-2 font-semibold shadow-lg hover:shadow-2xl transition-all">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
