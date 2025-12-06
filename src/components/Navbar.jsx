import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "services", name: "Services" },
    { id: "gallery", name: "Gallery" },
    { id: "physics", name: "Physics Labs" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-cyan-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => setActivePage("home")}
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPcc7Jz7odcsxtYOP45v-RxdOVUWzssW9qpskAW=s680-w680-h510-rw"
              alt="NexInnovation Logo"
              className="h-10 w-auto rounded-md shadow-md shadow-cyan-500/20"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              NexInnovation
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  className={`relative group px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activePage === link.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ${
                      activePage === link.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
              <a
                href="https://wa.me/917048822616"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle size={18} /> Chat
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activePage === link.id
                    ? "text-cyan-400 bg-slate-800"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/917048822616"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left mt-4 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;