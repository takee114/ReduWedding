"use client";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function CallToActionSection() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    // Handle form submission
    console.log("Form submitted with email:", email);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <h2 className="font-extrabold text-3xl lg:text-5xl leading-tight mb-6">
          Ready to Transform Your
          <span className="relative inline-block ml-4">
            Business?
            <svg
              className="absolute left-0 w-full h-[8px]"
              style={{ bottom: "-4px" }}
              viewBox="0 0 100 8"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="0"
                y="0"
                width="100"
                height="8"
                fill="#F59E0B"
                rx="4"
              />
            </svg>
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Get your free digital marketing consultation today and discover how we can
          help you achieve your business goals with our proven strategies.
        </p>

        {/* Email capture form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={`w-full px-4 py-3 border rounded-lg text-base bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                  emailError
                    ? "border-red-300"
                    : "border-white"
                }`}
              />
              {emailError && (
                <p className="text-xs text-yellow-200 mt-1 text-left">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 whitespace-nowrap transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </form>

        {/* Benefits list */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-sm opacity-90">
              Free 30-minute strategy session
            </span>
          </div>
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-sm opacity-90">
              Custom marketing audit
            </span>
          </div>
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-sm opacity-90">
              No obligations or commitments
            </span>
          </div>
        </div>

        {/* Additional CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
          >
            View Our Services
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
          >
            Contact Us Today
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75 mb-4">
            Trusted by 500+ businesses worldwide
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs font-medium">✓ Award-winning agency</div>
            <div className="text-xs font-medium">✓ Google Partner</div>
            <div className="text-xs font-medium">✓ Facebook Marketing Partner</div>
          </div>
        </div>
      </div>
    </section>
  );
}