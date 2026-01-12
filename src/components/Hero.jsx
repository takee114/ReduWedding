"use client";
import { Heart } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
 <section
        id="home"
        className="relative flex flex-col min-h-screen pt-24 overflow-hidden"
      >
        <div className="flex-1 flex flex-col justify-center px-6 md:px-14 py-16">
          <h1 className="text-[12vw] md:text-8xl font-extrabold tracking-tight leading-none text-gray-800 font-inter">
            Redu
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-600 tracking-wide font-inter max-w-2xl">
            Wedding Planning & Coordination
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-500 tracking-wide font-inter max-w-xl leading-relaxed">
            Creating unforgettable moments for your special day. From intimate
            gatherings to grand celebrations, we bring your dream wedding to
            life with elegance and precision.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#D4958D] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#C17E75] active:bg-[#B06A61] transition-colors duration-200 font-inter"
            >
              Start Planning
            </a>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-2/3 md:w-1/3 max-w-sm opacity-20 select-none pointer-events-none">
          <Heart className="w-full h-full text-[#D4958D]" strokeWidth={0.5} />
        </div>
      </section>
  );
}