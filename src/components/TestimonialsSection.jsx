"use client";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "DigitalMedia Pro transformed our online presence completely. Our website traffic increased by 300% and our sales conversions improved dramatically. Their team is professional, responsive, and truly understands digital marketing.",
      author: "Sarah Johnson",
      position: "CEO, TechStartup Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "TechStartup Inc."
    },
    {
      text: "Working with DigitalMedia Pro has been a game-changer for our business. Their SEO strategies helped us rank #1 for our main keywords, and their social media campaigns generated quality leads consistently.",
      author: "Michael Chen",
      position: "Marketing Director, GrowthCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "GrowthCorp"
    },
    {
      text: "The ROI we've seen from our digital marketing investment with DigitalMedia Pro is incredible. They increased our online visibility, generated high-quality leads, and helped us achieve our growth targets ahead of schedule.",
      author: "Emily Rodriguez",
      position: "Founder, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "InnovateLab"
    },
    {
      text: "Professional, results-driven, and incredibly knowledgeable. DigitalMedia Pro helped us launch successful PPC campaigns that generated immediate results while building our long-term organic presence.",
      author: "David Park",
      position: "Operations Manager, ScaleUp Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "ScaleUp Solutions"
    },
    {
      text: "Their data-driven approach and transparent reporting gave us complete confidence in our marketing investment. The results speak for themselves - doubled our qualified leads in just 6 months.",
      author: "Lisa Thompson",
      position: "VP Marketing, FutureTech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "FutureTech"
    },
    {
      text: "From strategy to execution, DigitalMedia Pro exceeded our expectations. Their creative campaigns and technical expertise helped us reach new markets and establish our brand as an industry leader.",
      author: "James Wilson",
      position: "CEO, NextGen Enterprises",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      company: "NextGen Enterprises"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Carousel state (infinite loop via tripled array)
  const total = testimonials.length;
  const loopData = [...testimonials, ...testimonials, ...testimonials];
  const extendedTotal = loopData.length;

  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(total); // start in the middle set
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const autoplayRef = useRef(null);

  // Responsive visible count
  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Reset index into middle when visibleCount changes to avoid bounds issues
  useEffect(() => {
    setTransitionEnabled(false);
    setIndex(total);
    const t = setTimeout(() => setTransitionEnabled(true), 20);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  // Autoplay
  useEffect(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  // Handle seamless snapping when reaching cloned edges
  useEffect(() => {
    // forward overflow: when index reaches start of third block, snap back by -total
    if (index >= total * 2) {
      // disable transition, snap back
      setTransitionEnabled(false);
      const next = index - total;
      // wait for DOM update to apply no-transition snap
      requestAnimationFrame(() => {
        setIndex(next);
        // re-enable transition on next frame
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    } else if (index < total) {
      // backward overflow: when index goes before middle block, snap forward
      setTransitionEnabled(false);
      const next = index + total;
      requestAnimationFrame(() => {
        setIndex(next);
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  // slide width percent
  const slideWidth = 100 / visibleCount;
  // compute translate as a percentage of the container width (seamless loop)
  // translatePercent = (index / totalSlides) * 100
  const translatePercent = (index / extendedTotal) * 100;
  const translate = -translatePercent;

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered Section header */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-center">
            <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-2">
              What Our Clients <span className="ml-2">Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          {/* Controls (centered) */}
          <div className="flex items-center space-x-2 mt-6">
            <button
              aria-label="Previous testimonials"
              onClick={prev}
              className="p-2 rounded-md bg-white shadow-sm hover:bg-gray-100"
            >
              ‹
            </button>
            <button
              aria-label="Next testimonials"
              onClick={next}
              className="p-2 rounded-md bg-white shadow-sm hover:bg-gray-100"
            >
              ›
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              width: `${(extendedTotal * 100) / visibleCount}%`,
              transform: `translateX(${translate}%)`,
              transition: transitionEnabled ? "transform 500ms ease-in-out" : "none",
            }}
          >
            {loopData.map((testimonial, i) => (
              <div
                key={i}
                className="p-4"
                style={{
                  width: `${slideWidth}%`,
                  boxSizing: "border-box",
                }}
              >
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col">
                  <div className="absolute top-6 right-6">
                    <Quote size={24} className="text-blue-100" />
                  </div>

                  <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

                  <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-xs text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">250%</div>
            <div className="text-gray-600">Average ROI Increase</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-gray-600">Leads Generated</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}