// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactForm";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; // same offset as Navbar
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        // clear the state so back/refresh doesn't repeat
        window.history.replaceState({}, document.title);
      }, 80); // small delay so components mount
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
