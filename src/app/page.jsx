"use client";
import About from "@/components/About";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import {
  Menu,
  Heart,
  Calendar,
  Camera,
  Users,
  CheckCircle,
  X,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function ReduWeddingHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    budget: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const portfolioImages = [
    {
      id: 1,
      url: "https://raw.createusercontent.com/1de22b27-f1ea-479a-b8f6-458ab441ef9c/",
      title: "Outdoor Ceremony",
    },
    {
      id: 2,
      url: "https://raw.createusercontent.com/edca2318-4785-47f6-9dcf-4e3115af2533/",
      title: "Reception Details",
    },
    {
      id: 3,
      url: "https://raw.createusercontent.com/479e4d59-a37b-411e-81dd-cc3c3c1b4ab6/",
      title: "Couple Portrait",
    },
    {
      id: 4,
      url: "https://raw.createusercontent.com/0f73883e-5da1-4fb2-b83b-f98ef1efe3ae/",
      title: "Wedding Cake",
    },
    {
      id: 5,
      url: "https://raw.createusercontent.com/5c615df2-5e1e-46ac-af1d-e54c3122ca92/",
      title: "Bridal Bouquet",
    },
    {
      id: 6,
      url: "https://raw.createusercontent.com/90a219a1-46ab-45db-9b20-59708d856fc6/",
      title: "Venue Setup",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      budget: "",
      message: "",
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative bg-white">
      {/* Vertical guide lines */}
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-1/4 -z-10"></div>
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-1/2 -z-10"></div>
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-3/4 -z-10"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="w-full px-6 py-6 md:px-14">
          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex items-center justify-center gap-12">
            <div className="flex gap-8 items-center">
              <a
                href="#home"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Portfolio
              </a>
            </div>

            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-gray-800 font-inter">
                <img src="/logo.webp" alt="Redu" className="h-10 md:h-14 object-contain" />
              </span>
            </a>

            <div className="flex gap-8 items-center">
              <a
                href="#about"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Contact
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase text-[#D4958D] hover:text-[#C17E75] active:text-[#B06A61] transition-colors duration-200 focus:outline-none tracking-wide font-inter"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-gray-800 font-inter">
                <img src="/logo.webp" alt="Redu" className="h-10 object-contain" />
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-transparent hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Portfolio
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Contact
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-[#D4958D] hover:text-[#C17E75] transition-colors duration-200 font-inter border-t border-gray-100 mt-2 pt-5"
              >
                Book Now →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
  <Hero />

      {/* Services Section */}
   <Services />

      {/* Portfolio Section */}
     <Portfolio />

      {/* Testimonials Section */}
    <Testimonials />

      {/* About Section */}
    <About />

      {/* Contact Section */}
    <Contact />

      {/* Footer */}
  <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/251929148708"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1BA34C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
}
