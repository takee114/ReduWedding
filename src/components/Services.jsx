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
          {/* Full Service Wedding Planning Package */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Full service wedding planning package
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Venue selection (የቦታ ምርጫ)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor coordination (ካሜራ/ዲኳር/ኬተሪንግ/ዲጄ)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design and style</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Budget management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline creation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Guest list management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Rehearsal coordination</span>
              </li>
            </ul>
          </div>

          {/* Partial Wedding Planning Package */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Partial wedding planning package
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor recommendations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design consulting</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline assistance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Day of coordination</span>
              </li>
            </ul>
          </div>

          {/* Day-of Wedding Planning Package */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Day-of wedding planning package
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Pre wedding consultation (meet the couples to go over detail and finalize the timeline)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor liaison (communicate with vendors on the day of the event)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>On site coordination (management of the event from start to finish)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-6xl bg-white p-8 border border-gray-200/60">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-inter">
            Additional services
          </h3>
          <ul className="space-y-3 text-gray-600 font-inter">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-[#D4958D] mt-1 flex-shrink-0" />
              <span>Bridal shower/pre-wedding events planning</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-[#D4958D] mt-1 flex-shrink-0" />
              <span>Post wedding events planning</span>
            </li>
          </ul>
        </div>
      </section>
  );
}