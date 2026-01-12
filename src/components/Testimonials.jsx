"use client";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
export default function Testimonials() {
  return (
      <section className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Testimonials<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Words from our happy couples
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Redu made our dream wedding a reality. Every detail was perfect,
              and we could actually enjoy our day without stress. Highly
              recommend!"
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Sarah & Michael
            </p>
            <p className="text-xs text-gray-500 font-inter">June 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Professional, organized, and creative. The team at Redu exceeded
              our expectations in every way. Our wedding was absolutely
              magical."
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Emily & David
            </p>
            <p className="text-xs text-gray-500 font-inter">August 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "From our first meeting to the last dance, Redu was there for us.
              They handled everything with grace and attention to detail. Thank
              you!"
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Jessica & Ryan
            </p>
            <p className="text-xs text-gray-500 font-inter">October 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Best decision we made for our wedding! Redu's expertise and calm
              demeanor kept everything on track. Couldn't have done it without
              them."
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Amanda & Chris
            </p>
            <p className="text-xs text-gray-500 font-inter">December 2024</p>
          </div>
        </div>
      </section>);}