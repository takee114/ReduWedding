import { 
  Search, 
  Share2, 
  Target, 
  BarChart3, 
  Megaphone, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Search Engine Optimization",
      description: "Boost your website's visibility and rank higher on Google with our proven SEO strategies and techniques.",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Link Building"]
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      description: "Engage your audience and build your brand presence across all major social media platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      icon: <Target size={32} />,
      title: "Pay-Per-Click Advertising",
      description: "Drive immediate traffic and conversions with targeted PPC campaigns across Google, Facebook, and more.",
      features: ["Campaign Setup", "Keyword Bidding", "Ad Optimization", "ROI Tracking"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and detailed performance reporting.",
      features: ["Google Analytics", "Custom Dashboards", "Performance Metrics", "Monthly Reports"]
    },
    {
      icon: <Megaphone size={32} />,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience.",
      features: ["Blog Writing", "Video Content", "Email Campaigns", "Content Strategy"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Conversion Optimization",
      description: "Maximize your website's potential by optimizing user experience and conversion funnels.",
      features: ["A/B Testing", "Landing Pages", "User Experience", "Funnel Analysis"]
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
            Our Digital Marketing
            <span className="relative inline-block ml-4">
              Services
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
                  fill="#10B981"
                  rx="4"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions designed to help your business 
            grow and succeed in today's competitive online landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <a 
                href="/services"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our digital marketing services can help your business 
            reach new heights and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Free Strategy Session
            </a>
            <a 
              href="/services"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}