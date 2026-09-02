// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "@/components/Hero.jsx";
import TrustSection from "@/components/TrustSection.jsx";
import ServicesSection from "@/components/ServicesSection.jsx";
import DeliverablesSection from "@/components/DeliverablesSection.jsx";
import SampleWorkSection from "@/components/SampleWorkSection.jsx";
import ProcessSection from "@/components/ProcessSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import TestimonialsSection from "@/components/TestimonialsSection.jsx";
import ContactSection from "@/components/ContactForm.jsx";
import FinalCTA from "@/components/FinalCTA.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        window.history.replaceState({}, document.title);
      }, 80);
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <TrustSection />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="deliverables">
        <DeliverablesSection />
      </section>
      <section id="sample-work">
        <SampleWorkSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <FinalCTA />
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
