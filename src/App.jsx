import React, { useState, useEffect, useCallback, useRef } from "react";

import {
  // Navigation & UI
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Settings,
  Target,
  Eye,
  Check,
  CheckCircle2,

  // General & Business
  Factory,
  Home,
  Briefcase,
  Users,
  Award,
  Database,
  Quote,
  UserCheck,
  PenTool,
  Monitor,
  BarChart3,
  Globe,
  Layers,

  // Tech & Engineering
  Cpu,
  Atom,
  CircuitBoard,
  Wifi,
  Bluetooth,
  Server,
  Code,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Fingerprint,
  Cloud,
  Smartphone,

  // Industry & Specific
  Stethoscope,
  Sprout,
  GraduationCap,

  // Contact
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Zap,
} from "lucide-react";

// Import layout components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Global styles injected via JS to prevent parser errors in sandboxes
const globalStyles = `
/* --- Blob Animation Keyframes --- */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

/* Custom Animation Delays */
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* --- Marquee Animation Keyframes --- */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

/* Pause Marquee on Group Hover */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* --- Slide Down Animation Keyframes (for dropdowns/menus) --- */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}

/* --- Fade In Animation Keyframes (general element entry) --- */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
`;

const AboutPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* 1. Hero / Intro */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  Who We Are
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Innovating for a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Smarter Tomorrow
                  </span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  NexInnovation is an advanced embedded technology company based
                  in Surat, Gujarat. We specialize in designing and developing
                  smart electronic systems that automate real-world processes in
                  homes, factories, offices, elevators, and schools.
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">500+</span>
                    <span className="text-slate-500 text-sm">
                      Students Mentored
                    </span>
                  </div>
                  <div className="w-px h-12 bg-slate-800"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">100+</span>
                    <span className="text-slate-500 text-sm">
                      Projects Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://s3.envato.com/files/687acd95-9b31-4f53-a45c-2728a14e066d/inline_image_preview.jpg"
                  alt="Team working on electronics"
                  className="relative rounded-2xl border border-slate-800 shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. Mission & Vision */}
      <div className="py-16 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={100} direction="right">
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all group h-full">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  To empower businesses with custom IoT solutions that drive
                  efficiency, and to inspire the next generation of engineers
                  through practical, hands-on STEM education.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200} direction="left">
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all group h-full">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  To be a global leader in embedded systems innovation, bridging
                  the gap between theoretical knowledge and industrial
                  application for a smarter, connected world.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-400">
                The principles that guide every circuit we design and every line
                of code we write.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb />,
                title: "Innovation",
                desc: "We constantly push boundaries to find better solutions.",
              },
              {
                icon: <Award />,
                title: "Quality",
                desc: "We never compromise on the reliability of our hardware.",
              },
              {
                icon: <GraduationCap />,
                title: "Education",
                desc: "We believe in sharing knowledge and empowering students.",
              },
              {
                icon: <ShieldCheck />,
                title: "Integrity",
                desc: "Transparent, honest communication with all our clients.",
              },
            ].map((val, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="text-center p-6 rounded-xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4 text-cyan-400">
                    {React.cloneElement(val.icon, { size: 20 })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Team / Expertise */}
      <div className="py-20 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">
                Meet The Team
              </h2>
              <p className="text-slate-400">The minds behind the innovation.</p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Parth Tank",
                role: "Founder & Lead Engineer",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
              },
              {
                name: "Electronics Specialist",
                role: "Hardware Design",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
              },
              {
                name: "Software Developer",
                role: "Full Stack & Cloud",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
              },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h4 className="text-cyan-400 font-bold uppercase tracking-wider mb-2">
              Get In Touch
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Contact Information
              </h3>
              <div className="space-y-6 relative z-10">
                <a
                  href="https://maps.app.goo.gl/UY1wqcvA4BNUQR426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-slate-800 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Our Location</p>
                    <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">
                      428-429 Green Aristo Plaza,
                      <br />
                      Canal Road, Jahangirpura,
                      <br />
                      Surat, Gujarat - 395009
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917048822616"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-slate-800 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone Number</p>
                    <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">
                      +91 70488 22616
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:nexinnovation.6112@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-slate-800 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email Address</p>
                    <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">
                      nexinnovation.6112@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn
            delay={200}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Your Phone
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="+91 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-32"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Smart Circuit Design",
      cat: "Hardware",
    },
    {
      url: "https://images.unsplash.com/photo-1555664424-778a18a21c60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "IoT Dashboard",
      cat: "Software",
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Security Systems",
      cat: "Cybersecurity",
    },
    {
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Industrial Automation",
      cat: "IoT",
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cloud Architecture",
      cat: "Web",
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cloud Architecture",
      cat: "Web",
    },
    {
      url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Robotics Control",
      cat: "Embedded",
    },
    {
      url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Robotics Control",
      cat: "Embedded",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h4 className="text-cyan-400 font-bold uppercase tracking-wider mb-2">
              Our Work
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Project Gallery
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer border border-slate-800 shadow-xl">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-cyan-500/0 transition-colors z-10 duration-500"></div>
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-cyan-500 text-white text-xs font-bold rounded mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {img.cat}
                  </span>
                  <h3 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const PhysicsPage = () => (
  <div className="pt-32 pb-24 bg-slate-950 min-h-screen flex items-center justify-center text-center px-4">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-white mb-4">Physics Practicals</h2>
      <p className="text-slate-400 text-lg mb-8">
        This section is reserved for the Physics Lab integrations.
      </p>
      {/* If you have the practicals folder in public/practicals, this link works */}
      <a
        href="/practicals/index.html"
        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Open Physics Labs <ArrowRight size={20} />
      </a>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "Device Re-Engineering",
      desc: "We specialize in re-engineering existing devices to enhance their functionality and performance, ensuring they meet modern standards.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    },
    {
      icon: <Fingerprint className="w-10 h-10 text-blue-400" />,
      title: "Fingerprint Technology",
      desc: "Our fingerprint technology solutions provide secure and reliable biometric authentication for various applications.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-400" />,
      title: "Web & Mobile Apps",
      desc: "We build robust, responsive web and mobile applications that serve as the command center for your connected hardware products.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
    },
    {
      icon: <CircuitBoard className="w-10 h-10 text-pink-400" />,
      title: "Embedded System Design",
      desc: "We provide comprehensive embedded system design services, from initial concept to final product deployment.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    },
    {
      icon: <Wifi className="w-10 h-10 text-green-400" />,
      title: "IoT Ecosystems",
      desc: "Our IoT system design services help you connect, monitor, and manage your devices efficiently and securely from anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    },
  ];

  const techStack = [
    { name: "C/C++", icon: <Code className="text-blue-400" /> },
    { name: "Python", icon: <Code className="text-yellow-400" /> },
    { name: "React", icon: <Code className="text-cyan-400" /> },
    { name: "Node.js", icon: <Server className="text-green-400" /> },
    { name: "AWS", icon: <Cloud className="text-orange-400" /> },
    { name: "Android/iOS", icon: <Smartphone className="text-white" /> },
    { name: "Altium", icon: <Cpu className="text-yellow-600" /> },
    { name: "Firebase", icon: <Database className="text-yellow-500" /> },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Excellence
              </span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
              We provide a full spectrum of engineering services to bring your
              electronic product ideas to life, from the circuit board to the
              cloud.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Detailed Service Sections (Zig-Zag) */}
      <div className="py-12 space-y-24">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn
                delay={100}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="p-3 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 inline-block mb-3">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Analysis & Design",
                        "Development & Testing",
                        "Deployment & Support",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-6 h-6 rounded-full bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                            <Check size={14} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div className="py-32 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Tech Stack
              </h2>
              <p className="text-slate-400">
                The tools we use to build world-class solutions.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <FadeIn key={index} delay={index * 50} direction="up">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors group">
                  <div className="mb-3 group-hover:scale-110 transition-transform">
                    {React.cloneElement(tech.icon, { size: 32 })}
                  </div>
                  <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-xl mb-10">
              From simple prototypes to complex industrial systems, we have the
              expertise to deliver.
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/25">
              Get a Free Quote
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const useOnScreen = (ref, rootMargin = "0px", threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      { rootMargin, threshold }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, rootMargin, threshold]);
  return isIntersecting;
};

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime;
        if (timePassed >= duration) {
          setCount(end);
          clearInterval(timer);
        } else {
          const progress = 1 - Math.pow(2, -10 * (timePassed / duration));
          setCount(Math.ceil(end * progress));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [onScreen, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-50px");

  const getTransform = () => {
    if (onScreen) return "translate(0, 0) scale(1)";
    switch (direction) {
      case "up":
        return "translateY(40px) scale(0.95)";
      case "down":
        return "translateY(-40px) scale(0.95)";
      case "left":
        return "translateX(40px) scale(0.95)";
      case "right":
        return "translateX(-40px) scale(0.95)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        onScreen ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What kind of hardware do you work with?",
      a: "We work with a wide range of platforms including Arduino, Raspberry Pi, ESP32/ESP8266, STM32, and custom PCB designs based on Atmel/Microchip and Nordic microcontrollers.",
    },
    {
      q: "Do you provide firmware development?",
      a: "Yes! We specialize in embedded C/C++, Python for embedded Linux, and even MicroPython. We build robust, optimized firmware for your hardware.",
    },
    {
      q: "Can you build the mobile app for my IoT device?",
      a: "Absolutely. We offer full-stack development, meaning we build the hardware, the firmware, the cloud backend, and the mobile app (iOS/Android) to control it.",
    },
    {
      q: "How long does a typical project take?",
      a: "Timelines vary by complexity. A simple prototype might take 2-4 weeks, while a full industrial IoT solution could take 3-6 months. Contact us for a specific estimate.",
    },
  ];

  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Common questions about our embedded systems and IoT services.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all hover:border-slate-700"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <ChevronDown
                    className={`text-slate-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      title: "Industrial Automation",
      icon: <Factory className="text-orange-400" />,
      desc: "Smart factories and machine monitoring.",
    },
    {
      title: "Home Automation",
      icon: <Home className="text-blue-400" />,
      desc: "Connected living and smart appliances.",
    },
    {
      title: "Healthcare IoT",
      icon: <Stethoscope className="text-red-400" />,
      desc: "Patient monitoring and wearable tech.",
    },
    {
      title: "Smart Agriculture",
      icon: <Sprout className="text-green-400" />,
      desc: "Precision farming and soil analysis.",
    },
    {
      title: "Education (EdTech)",
      icon: <GraduationCap className="text-purple-400" />,
      desc: "Virtual labs and STEM learning kits.",
    },
    {
      title: "Consumer Electronics",
      icon: <Cpu className="text-cyan-400" />,
      desc: "Custom gadgets and wearables.",
    },
  ];

  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-400">
              Tailored solutions for diverse sectors, engineered for impact.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <FadeIn
              key={index}
              delay={index * 50}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 hover:border-slate-700 transition-colors">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  {React.cloneElement(ind.icon, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {ind.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{ind.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const partners = [
    {
      name: "Arduino",
      local: "/img/partners/1.Arduino.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1280px-Arduino_Logo.svg.png",
    },
    {
      name: "Atmel",
      local: "/img/partners/2.Atmel.png",
      url: "https://images.seeklogo.com/logo-png/1/1/atmel-logo-png_seeklogo-13164.png",
    },
    {
      name: "AWS",
      local: "/img/partners/3.AWS.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Azure",
      local: "/img/partners/4.Azure.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    },
    {
      name: "Bluetooth",
      local: "/img/partners/5.Bluetooth.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Bluetooth.svg",
    },
    {
      name: "Espressif",
      local: "/img/partners/6.Espressif.png",
      url: "https://avatars.githubusercontent.com/u/9460735?s=200&v=4",
    },
    {
      name: "Linux",
      local: "/img/partners/7.Linux.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    },
    {
      name: "LoRa Alliance",
      local: "/img/partners/8.LoRa Alliance.png",
      url: "https://www.microcontrollertips.com/wp-content/uploads/2019/04/iot-lora-alliance-logo.svg_.png",
    },
    {
      name: "Mifare",
      local: "/img/partners/9.Mifare.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Mifare_logo_rgb.svg",
    },
    {
      name: "NFC Forum",
      local: "/img/partners/10.NFC Forum.png",
      url: "https://images.seeklogo.com/logo-png/37/2/near-field-communication-nfc-logo-png_seeklogo-379965.png",
    },
    {
      name: "NXP",
      local: "/img/partners/11.NXP.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NXP-Logo.svg/2560px-NXP-Logo.svg.png",
    },
    {
      name: "Python",
      local: "/img/partners/12.Python.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "Raspberry Pi",
      local: "/img/partners/13.Raspberry Pi.png",
      url: "https://www.raspberrypi.com/app/uploads/2020/06/raspberrry_pi_logo.png",
    },
    {
      name: "RFID",
      local: "/img/partners/14.RFID.jpeg",
      url: "https://img.freepik.com/premium-vector/radio-frequency-identification-rfid-icon-vector-illustration-symbol-design_609277-6881.jpg",
    },
    {
      name: "Silicon Labs",
      local: "/img/partners/15.Silicon Labs.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Silicon_Labs_2015.svg/1200px-Silicon_Labs_2015.svg.png",
    },
    {
      name: "Simcom",
      local: "/img/partners/16.Simcom.png",
      url: "https://s3.amazonaws.com/snapeda/pinax/images/company_logos/thumbs/SimCom-300x204.png",
    },
    {
      name: "Telit",
      local: "/img/partners/17.Telit.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Telit_logo.svg",
    },
    {
      name: "Texas Instruments",
      local: "/img/partners/17.Texas Instruments.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/TexasInstruments-Logo.svg",
    },
    {
      name: "Zigbee",
      local: "/img/partners/18.Zigbee.png",
      url: "https://in.element14.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/internet_of_things/zigbee-logo.jpg",
    },
    {
      name: "Node.js",
      local: "/img/partners/19.Node.js.png",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Nordic",
      local: "/img/partners/20.Nordic.png",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCrzpTk1iaiJLCRESL_z4Z2wfTL1U9Nsw6g&s",
    },
  ];

  return (
    <FadeIn
      delay={200}
      className="w-full bg-slate-900/50 border-y border-slate-800 py-12 overflow-hidden relative group"
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
          Our Technology Partners
        </h3>
      </div>

      <div className="flex overflow-hidden relative w-full">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[140px] h-24 transition-all duration-300 bg-white/5 border border-white/10 rounded-xl p-3 hover:scale-110 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg"
            >
              <div className="bg-white rounded-lg p-2 w-full h-full flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={partner.local}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    if (e.target.src === partner.url) {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                      return;
                    }
                    if (partner.url) {
                      e.target.src = partner.url;
                    } else {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }
                  }}
                />
                <span className="text-xs font-bold text-slate-800 hidden text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center min-w-[140px] h-24 transition-all duration-300 bg-white/5 border border-white/10 rounded-xl p-3 hover:scale-110 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-lg"
            >
              <div className="bg-white rounded-lg p-2 w-full h-full flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={partner.local}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    if (e.target.src === partner.url) {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                      return;
                    }
                    if (partner.url) {
                      e.target.src = partner.url;
                    } else {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }
                  }}
                />
                <span className="text-xs font-bold text-slate-800 hidden text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

const ProcessSection = () => {
  const ref = useRef();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const height = rect.height;
        // Start filling when the top of the section hits the middle of the screen
        const offset = window.innerHeight / 2;
        const top = rect.top;

        let p = (offset - top) / height;
        p = Math.max(0, Math.min(1, p)); // Clamp between 0 and 1
        setPercent(p);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "Requirement Analysis",
      desc: "We start by deeply listening. We analyze your challenges, define technical specifications, and brainstorm the most efficient roadmap for your product.",
      icon: <UserCheck />,
      bg: "from-blue-500/20 to-cyan-500/5",
    },
    {
      title: "Hardware Design",
      desc: "Our engineers design custom PCBs and hardware architectures. We select the best components (Sensors, MCUs, Modules) to ensure reliability and cost-effectiveness.",
      icon: <PenTool />,
      bg: "from-purple-500/20 to-pink-500/5",
    },
    {
      title: "System Programming",
      desc: "We breathe life into the hardware. From low-level firmware (C/C++) to high-level cloud dashboards (Node.js/React), we handle the full software stack.",
      icon: <Monitor />,
      bg: "from-orange-500/20 to-red-500/5",
    },
    {
      title: "Final Deployment",
      desc: "Your product undergoes rigorous testing. Once perfected, we help you deploy the solution in the real world and provide ongoing maintenance support.",
      icon: <Cpu />,
      bg: "from-green-500/20 to-emerald-500/5",
    },
  ];

  return (
    <div ref={ref} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Turning Vision Into Reality
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We bridge the gap between abstract ideas and tangible products.
              Follow our proven engineering journey.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical Central Line Container */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full transform md:-translate-x-1/2 overflow-hidden">
            {/* Dynamic Filling Line */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transition-all duration-100 ease-out"
              style={{ height: `${percent * 100}%` }}
            ></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between mb-24 md:mb-32 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Center Node (Icon) */}
              <div
                className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-4 z-10 transition-colors duration-500 ${
                  percent > index / steps.length
                    ? "bg-slate-900 border-cyan-500 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                <div
                  className={`transition-colors duration-500 ${
                    percent > index / steps.length
                      ? "text-cyan-400"
                      : "text-slate-500"
                  }`}
                >
                  {React.cloneElement(step.icon, { size: 24 })}
                </div>
              </div>

              {/* Content Card */}
              <FadeIn
                delay={index * 150}
                direction={index % 2 === 0 ? "right" : "left"}
                className={`w-full md:w-5/12 pl-16 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${step.bg} border border-slate-800 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg bg-slate-900/50 mb-4 text-cyan-400 md:hidden`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      label: "Years Experience",
      value: 5,
      icon: <BarChart3 className="text-cyan-400" />,
    },
    {
      label: "Projects Delivered",
      value: 100,
      icon: <Rocket className="text-purple-400" />,
    },
    {
      label: "Happy Clients",
      value: 50,
      icon: <CheckCircle2 className="text-green-400" />,
    },
    {
      label: "Students Mentored",
      value: 500,
      icon: <Globe className="text-blue-400" />,
    },
  ];

  return (
    <div className="py-20 bg-slate-950 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-slate-900 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group hover:-translate-y-1">
                <div className="mb-4 p-3 bg-slate-800 rounded-full group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  <Counter end={stat.value} />+
                </h3>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "Factory Owner",
      text: "NexInnovation transformed our manual machinery into smart, cloud-connected devices. Efficiency is up by 40%.",
    },
    {
      name: "Sarah Johnson",
      role: "EdTech Founder",
      text: "The physics simulations they built are incredible. Students love the interactivity, and it runs smoothly on all devices.",
    },
    {
      name: "Amit Shah",
      role: "AgriTech Startup",
      text: "From the soil sensors to the mobile dashboard, the team delivered a robust solution that actually survives in the field.",
    },
  ];

  return (
    <div className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 relative h-full flex flex-col">
                <Quote
                  className="text-slate-700 absolute top-6 right-6"
                  size={40}
                />
                <p className="text-slate-300 mb-6 italic relative z-10 flex-grow">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-cyan-500 text-sm">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const Typewriter = ({
  words,
  speed = 150,
  pause = 2000,
  className,
  initialIndex = 0,
  onIndexChange,
}) => {
  const [index, setIndex] = useState(initialIndex);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // 1. Handles side effect when the current word index changes (optional callback)
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(index);
    }
  }, [index, onIndexChange]);

  // 2. Main logic for the typing and deleting effect
  useEffect(() => {
    let timeout;
    const currentWord = words[index];

    // --- State Check Logic ---

    // A. Finished typing a word: Wait, then start reversing
    if (subIndex === currentWord.length && !reverse) {
      timeout = setTimeout(() => {
        setReverse(true);
      }, pause);
    }
    // B. Finished deleting a word: Switch to the next word and start typing
    else if (subIndex === 0 && reverse) {
      timeout = setTimeout(() => {
        setReverse(false);
        // Move to the next word, looping back to the start if needed
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, speed); // Wait a short period before starting the next word
    }
    // C. Currently typing or deleting
    else {
      // Calculate delay: Slower for deleting (reverse), or faster for typing (speed)
      const delay = reverse
        ? 75
        : subIndex === currentWord.length
        ? 1000
        : speed;

      timeout = setTimeout(() => {
        // Update subIndex: -1 when reversing, +1 when typing
        setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
      }, delay + parseInt(Math.random() * 50)); // Add small random delay for human feel
    }

    // Cleanup function: clears the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  // Render the partially typed word with a blinking cursor effect using the border
  return (
    <span className={`border-r-4 border-cyan-400 pr-1 ${className}`}>
      {words[index]?.substring(0, subIndex)}
    </span>
  );
};

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "End-to-End Expertise",
      desc: "We don't hand off parts of the project. We handle the entire ecosystem: Custom Hardware (PCB), Firmware, Cloud Backend, and Mobile/Web Apps. This ensures seamless compatibility and a single point of accountability.",
      icon: <Layers className="text-blue-400" />,
    },
    {
      title: "Rapid Prototyping",
      desc: "Time is money. We specialize in turning concepts into functional MVPs (Minimum Viable Products) in weeks, not months. This allows you to validate your market and iterate fast before committing to mass production.",
      icon: <Rocket className="text-purple-400" />,
    },
    {
      title: "Production-Ready Design",
      desc: "We design with manufacturing in mind (DFM). We select components that are available, cost-effective, and sustainable, ensuring a smooth transition from a prototype on a desk to thousands of units on a factory line.",
      icon: <Settings className="text-orange-400" />,
    },
    {
      title: "Reliability & Security",
      desc: "IoT devices are vulnerable if not secured. We implement industry-standard encryption and robust fail-safe mechanisms to ensure your devices stay online and your user data remains secure.",
      icon: <ShieldCheck className="text-green-400" />,
    },
    {
      title: "Scalable Architecture",
      desc: "Whether you have 10 devices or 10,000, our cloud architectures on AWS/Azure are built to handle the load. We design databases and APIs that grow effortlessly with your business.",
      icon: <Server className="text-cyan-400" />,
    },
    {
      title: "Innovation Partners",
      desc: "We act as your dedicated R&D team. We stay updated with the latest in AI, Edge Computing, and Wireless Tech so you can leverage the latest innovations without the steep learning curve.",
      icon: <Lightbulb className="text-yellow-400" />,
    },
  ];

  return (
    <div className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Partner With{" "}
              <span className="text-cyan-400">NexInnovation?</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              In a world of generic solutions, we provide tailored engineering
              excellence. We don't just build products; we engineer success
              stories through a blend of technical mastery and business acumen.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              direction="up"
              className="h-full"
            >
              <div className="h-full bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-500 group hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col">
                <div className="w-14 h-14 bg-slate-950 rounded-xl border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner shadow-black/50 shrink-0">
                  {React.cloneElement(reason.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors shrink-0">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 flex-grow">
                  {reason.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium animate-pulse">
            <CheckCircle2 size={16} /> 100% Satisfaction Guarantee on Prototypes
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// Hook for scroll parallax and progress
const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
};

const HomePage = ({ setPage }) => {
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollY = useScrollY();

  // Track the typewriter index for each slide (slide 0 index, slide 1 index)
  const [wordIndices, setWordIndices] = useState([0, 0]);

  // Data for the slides
  const slides = [
    {
      id: "iot",
      badge: "Creative & Innovative",
      titlePrefix: "We Build Custom",
      typewriterWords: [
        "Electronics",
        "IoT Solutions",
        "Web Platforms",
        "Smart Systems",
      ],
      description:
        "From seamless IoT integration to bespoke software development, we bridge the gap between imagination and reality.",
      primaryBtn: {
        text: "Our Skills",
        action: () => setPage("services"),
        icon: Zap,
      },
      secondaryBtn: { text: "Contact Us", action: () => setPage("contact") },
      color: "from-cyan-400 via-blue-500 to-purple-600",
    },
    {
      id: "physics",
      badge: "EdTech Revolution",
      titlePrefix: "Interactive Online",
      typewriterWords: [
        "Physics Labs",
        "Virtual Practical",
        "Science Sims",
        "Student Success",
      ],
      description:
        "We support students to do online practical simulations. Experience high-fidelity virtual physics labs from anywhere.",
      primaryBtn: {
        text: "Open Physics Lab",
        action: () => setPage("physics"),
        icon: Atom,
      },
      secondaryBtn: { text: "Learn More", action: () => setPage("physics") },
      color: "from-green-400 via-emerald-500 to-teal-600",
    },
  ];

  // Auto-switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Switch every 10 seconds to allow typewriter to finish multiple words
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  // Callback to update the index for the *current* slide when typewriter finishes a word
  const handleIndexChange = useCallback(
    (newIndex) => {
      setWordIndices((prev) => {
        const newIndices = [...prev];
        // Only update if value actually changed to prevent extra renders
        if (newIndices[currentSlide] === newIndex) return prev;
        newIndices[currentSlide] = newIndex;
        return newIndices;
      });
    },
    [currentSlide]
  );

  return (
    <>
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 min-h-[85vh] flex items-center justify-center">
        {/* Animated Background Effects with Scroll Parallax */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 transition-opacity duration-1000"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div
            className={`absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[100px] animate-blob transition-colors duration-1000 ${
              currentSlide === 0 ? "bg-blue-600/20" : "bg-green-600/20"
            }`}
          />
          <div
            className={`absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] animate-blob animation-delay-2000 transition-colors duration-1000 ${
              currentSlide === 0 ? "bg-purple-500/20" : "bg-teal-500/20"
            }`}
          />
          <div
            className={`absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full blur-[100px] animate-blob animation-delay-4000 transition-colors duration-1000 ${
              currentSlide === 0 ? "bg-cyan-500/20" : "bg-emerald-500/20"
            }`}
          />
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(15,23,42,0.9)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-20 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Content Container with key to trigger re-animation on switch */}
          <div key={slide.id} className="animate-fadeIn">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm shadow-lg shadow-cyan-900/20 mx-auto">
              <span
                className={`w-2 h-2 rounded-full animate-pulse ${
                  currentSlide === 0 ? "bg-cyan-400" : "bg-green-400"
                }`}
              ></span>
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">
                {slide.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              {slide.titlePrefix} <br />
              <Typewriter
                key={slide.id} // Re-mount typewriter on slide change
                words={slide.typewriterWords}
                initialIndex={wordIndices[currentSlide]} // Resume from saved index
                onIndexChange={handleIndexChange} // Save new index
                speed={80} // Faster typing speed
                pause={1500} // Shorter pause between words
                className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.color}`}
              />
            </h1>

            <p className="mt-4 max-w-2xl text-xl text-slate-400 mb-10 mx-auto">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button
                onClick={slide.primaryBtn.action}
                className={`group flex items-center justify-center gap-2 bg-gradient-to-r ${
                  currentSlide === 0
                    ? "from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                    : "from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500"
                } text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20`}
              >
                {slide.primaryBtn.text}{" "}
                <slide.primaryBtn.icon
                  size={20}
                  className="group-hover:fill-current"
                />
              </button>
              <button
                onClick={slide.secondaryBtn.action}
                className="group flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-4 px-8 rounded-lg transition-all hover:border-white/20"
              >
                {slide.secondaryBtn.text}{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-8 bg-white"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Partners />

      <StatsSection />

      <IndustriesSection />

      <WhyChooseUsSection />

      {/* Mini Services Preview */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">What We Do</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} direction="up" className="h-full">
              <div className="h-full bg-slate-900 border border-slate-700 hover:border-cyan-500 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 group flex flex-col">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-cyan-500 shadow-inner shadow-slate-950 shrink-0">
                  <CircuitBoard className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 shrink-0">
                  Embedded Systems
                </h3>
                <p className="text-slate-400 flex-grow">
                  Comprehensive hardware and firmware design from concept to
                  deployment.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200} direction="up" className="h-full">
              <div className="h-full bg-slate-900 border border-slate-700 hover:border-green-500 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:-translate-y-2 group flex flex-col">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-green-500 shadow-inner shadow-slate-950 shrink-0">
                  <Atom className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 shrink-0">
                  Physics Practicals
                </h3>
                <p className="text-slate-400 flex-grow">
                  Online simulation labs for students to perform experiments
                  virtually.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300} direction="up" className="h-full">
              <div className="h-full bg-slate-900 border border-slate-700 hover:border-purple-500 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-2 group flex flex-col">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-purple-500 shadow-inner shadow-slate-950 shrink-0">
                  <Wifi className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 shrink-0">
                  IoT Solutions
                </h3>
                <p className="text-slate-400 flex-grow">
                  Smart connectivity solutions that bring your devices to life.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <ProcessSection />

      <TestimonialsSection />

      <FAQSection />
    </>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  // Global styles injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = globalStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Function to render the correct page content
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage setPage={setActivePage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "gallery":
        return <GalleryPage />;
      case "physics":
        return <PhysicsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>{renderContent()}</main>
      <Footer setPage={setActivePage} />
    </div>
  );
}
