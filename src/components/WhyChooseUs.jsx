import { Award, Users, Target, BarChart3, Clock, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Proven Track Record",
      description: "Over 5 years of success helping businesses achieve their digital marketing goals with measurable results."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Our certified digital marketing specialists stay updated with the latest trends and best practices."
    },
    {
      icon: <Target size={32} />,
      title: "Data-Driven Approach",
      description: "We make decisions based on real data and analytics to ensure maximum ROI for your investment."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Transparent Reporting",
      description: "Get detailed monthly reports showing exactly how your campaigns are performing and improving."
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Results",
      description: "See improvements in your online presence within the first 30 days of working with our team."
    },
    {
      icon: <Shield size={32} />,
      title: "100% White Hat",
      description: "We use only ethical, Google-approved strategies that protect your brand's reputation long-term."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-3xl lg:text-5xl leading-tight mb-6">
            Why Choose
            <span className="relative inline-block ml-4">
              Us?
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
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your growth partners, committed to 
            delivering exceptional results and helping your business thrive in the digital landscape.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6 mx-auto">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business 
              with our proven digital marketing strategies.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Start Your Growth Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}