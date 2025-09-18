import { Star, Quote } from "lucide-react";

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

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
            What Our Clients
            <span className="relative inline-block ml-4">
              Say
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with our digital marketing team.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote size={24} className="text-blue-100" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
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