"use client";
import { Calendar, Camera, Users, CheckCircle } from "lucide-react";
import React from "react";
export default function Services() {
  return (
   <section id="services" className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Services<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Tailored packages for every celebration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Full Planning */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Full Planning
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Complete coordination from conception to celebration. We handle
              every detail so you can enjoy the journey.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Venue selection & booking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design & styling</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline creation</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at 750,000 ETB
            </p>
          </div>

          {/* Partial Planning */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Partial Planning
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Perfect for couples who have started planning but need expert
              guidance to bring it all together.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor recommendations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design consultation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Budget assistance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Monthly check-ins</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at 450,000 ETB
            </p>
          </div>

          {/* Day-of Coordination */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Day-of Coordination
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Stress-free execution on your wedding day. We ensure everything
              runs smoothly while you celebrate.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor coordination</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Setup supervision</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Problem solving</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at 225,000 ETB
            </p>
          </div>
        </div>
      </section>
  );
}