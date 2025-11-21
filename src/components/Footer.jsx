import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-gray-300 pt-14 pb-8 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            EagleEye Takeoffs
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed text-sm">
            Premium construction takeoffs & estimating services for contractors,
            builders, and architects across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>Construction Takeoffs</li>
            <li>Material Estimates</li>
            <li>Blueprint Analysis</li>
            <li>Residential & Commercial Estimates</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} /> +92 300 1234567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> support@eetakeoffs.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} /> Lahore, Pakistan
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a className="hover:text-white transition cursor-pointer">
              <Facebook size={20} />
            </a>
            <a className="hover:text-white transition cursor-pointer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EagleEye Takeoffs. All rights reserved.
      </div>
    </footer>
  );
}
