// src/components/Footer.jsx
import React from 'react';
// Import only the icons Footer actually uses
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* Logo in Footer */}
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPcc7Jz7odcsxtYOP45v-RxdOVUWzssW9qpskAW=s680-w680-h510-rw"
                alt="NexInnovation Logo"
                className="h-8 w-auto rounded-md"
              />
              <span className="text-xl font-bold text-white">
                NexInnovation
              </span>
            </div>
            <p className="text-slate-500 mb-6">
              NexInnovation your project partner. Bring you new innovative
              project ideas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/NexInnovation/61557319915725/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-600 hover:bg-slate-800 transition-all">
                  <Facebook size={18} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/_nexinnovation_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-pink-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-pink-600 hover:bg-slate-800 transition-all">
                  <Instagram size={18} />
                </div>
              </a>
              <a
                href="https://wa.me/917048822616"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-green-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-green-500 hover:bg-slate-800 transition-all">
                  <MessageCircle size={18} />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Useful Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <button
                  onClick={() => setPage("home")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("about")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("gallery")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("services")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Our Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("contact")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("physics")}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Physics Practicals
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="hover:text-cyan-400 cursor-default">
                Device Re-Engineering
              </li>
              <li className="hover:text-cyan-400 cursor-default">
                Web Development
              </li>
              <li className="hover:text-cyan-400 cursor-default">
                Embedded System Design
              </li>
              <li className="hover:text-cyan-400 cursor-default">
                IoT System Design
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Find Us</h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <a
                  href="https://maps.app.goo.gl/UY1wqcvA4BNUQR426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-cyan-400 transition-colors"
                >
                  <MapPin
                    size={20}
                    className="text-cyan-400 mt-1 flex-shrink-0"
                  />
                  <span>
                    428-429 Green Aristo Plaza, Canal Road, Jahangirpura, Surat,
                    Gujarat - 395009
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917048822616"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                  +91 70488 22616
                </a>
              </li>
              <li>
                <a
                  href="mailto:nexinnovation.6112@gmail.com"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={20} className="text-cyan-400 flex-shrink-0" />
                  nexinnovation.6112@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2024 NexInnovation Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;