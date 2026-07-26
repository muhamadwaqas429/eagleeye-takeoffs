// src/pages/Contact.jsx
import React from "react";
import ContactForm from "@/components/ContactForm.jsx";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* headingLevel="h1" — primary page heading for the standalone Contact route */}
      <ContactForm headingLevel="h1" />
    </div>
  );
}
