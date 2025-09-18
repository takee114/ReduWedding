"use client";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function HeroSection() {
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
    // Handle form submission
    console.log("Form submitted with email:", email);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-20 px-6 lg:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Main headline */}
            <div className="mb-6">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-900 leading-tight tracking-tight">
                Transform Your
                <span className="relative inline-block ml-4">
                  Digital
                  <svg
                    className="absolute left-0 w-full h-[10px]"
                    style={{ bottom: "-6px" }}
                    viewBox="0 0 100 10"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="10"
                      fill="#3B82F6"
                      rx="4"
                    />
                  </svg>
                </span>
                <br />
                Marketing Today
              </h1>
            </div>

            {/* Supporting paragraph */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg mb-8 leading-relaxed">
              Drive growth with data-driven digital marketing strategies. 
              We help businesses reach their target audience and maximize ROI 
              through innovative marketing solutions.
            </p>

            {/* Email capture form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={`w-full px-4 py-3 border rounded-lg text-base bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                    emailError
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
              </div>
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 whitespace-nowrap transform hover:scale-105 active:scale-95 flex items-center"
              >
                Get Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>

            {/* Feature bullets */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              <div className="flex items-center">
                <Check size={16} className="text-green-500 mr-2" />
                <span className="font-medium text-sm text-gray-700">
                  Free Strategy Session
                </span>
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-green-500 mr-2" />
                <span className="font-medium text-sm text-gray-700">
                  No Long-term Contracts
                </span>
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-green-500 mr-2" />
                <span className="font-medium text-sm text-gray-700">
                  Results-Driven Approach
                </span>
              </div>
            </div>

            {/* Social proof */}
            <div>
              <p className="font-medium text-xs text-gray-500 mb-4 uppercase tracking-wide">
                Trusted by 500+ Growing Businesses
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="h-14 px-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <span className="font-bold text-gray-400 text-sm">TechCorp</span>
                </div>
                <div className="h-14 px-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <span className="font-bold text-gray-400 text-sm">StartupXYZ</span>
                </div>
                <div className="h-14 px-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <span className="font-bold text-gray-400 text-sm">GrowthCo</span>
                </div>
                <div className="h-14 px-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <span className="font-bold text-gray-400 text-sm">InnovateInc</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Marketing dashboard mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-gray-900">Campaign Analytics</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Metrics cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">245%</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">15.2K</div>
                    <div className="text-sm text-gray-600">New Leads</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">8.7M</div>
                    <div className="text-sm text-gray-600">Impressions</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">12.4%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>

                {/* Chart representation */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">75%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">85%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">65%</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">📈</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}