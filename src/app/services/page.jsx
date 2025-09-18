import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrackingPixels from "@/components/TrackingPixels";
import {
  ArrowRight,
  BarChart3,
  Check,
  Megaphone,
  Search,
  Share2,
  Target,
  TrendingUp
} from "lucide-react";

export const metadata = {
  title: 'Our Digital Marketing Services | DigitalMedia Pro',
  description: 'Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, and analytics. Get measurable results for your business.',
  keywords: 'SEO services, social media marketing, PPC advertising, content marketing, digital marketing services, online marketing',
  openGraph: {
    title: 'Our Digital Marketing Services | DigitalMedia Pro',
    description: 'Comprehensive digital marketing services to help your business grow online.',
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Search size={48} />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website's visibility and organic traffic with our comprehensive SEO strategies.",
      longDescription: "Our SEO experts use proven techniques to improve your website's search engine rankings and drive qualified organic traffic to your business.",
      features: [
        "Comprehensive SEO audit and analysis",
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Link building and outreach",
        "Local SEO optimization",
        "Monthly performance reporting"
      ],
      pricing: "Starting at $1,500/month",
      results: "Average 150% increase in organic traffic within 6 months"
    },
    {
      icon: <Share2 size={48} />,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all major social platforms.",
      longDescription: "Create compelling social media campaigns that drive engagement, build brand awareness, and generate leads across Facebook, Instagram, LinkedIn, and Twitter.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Social media analytics",
        "Crisis management"
      ],
      pricing: "Starting at $2,000/month",
      results: "Average 200% increase in social engagement"
    },
    {
      icon: <Target size={48} />,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive immediate traffic and conversions with targeted advertising campaigns.",
      longDescription: "Maximize your advertising ROI with expertly managed PPC campaigns across Google Ads, Facebook Ads, and other major advertising platforms.",
      features: [
        "Campaign strategy and setup",
        "Keyword research and bidding",
        "Ad copy creation and testing",
        "Landing page optimization",
        "Conversion tracking setup",
        "Budget management",
        "Performance optimization"
      ],
      pricing: "Starting at $1,200/month + ad spend",
      results: "Average 300% ROI on ad spend"
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and performance tracking.",
      longDescription: "Get deep insights into your digital marketing performance with custom dashboards, detailed reports, and actionable recommendations.",
      features: [
        "Google Analytics setup and configuration",
        "Custom dashboard creation",
        "Conversion tracking implementation",
        "Performance metric analysis",
        "Monthly detailed reports",
        "Competitor analysis",
        "ROI calculation and optimization"
      ],
      pricing: "Starting at $800/month",
      results: "Average 40% improvement in conversion rates"
    },
    {
      icon: <Megaphone size={48} />,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience.",
      longDescription: "Develop a comprehensive content strategy that positions your brand as an industry leader and drives qualified leads to your business.",
      features: [
        "Content strategy development",
        "Blog writing and optimization",
        "Video content creation",
        "Email marketing campaigns",
        "Infographic design",
        "Content distribution",
        "Performance tracking"
      ],
      pricing: "Starting at $1,800/month",
      results: "Average 180% increase in qualified leads"
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Conversion Rate Optimization",
      description: "Maximize your website's potential by optimizing user experience and conversion funnels.",
      longDescription: "Increase your website's conversion rates through systematic testing, user experience improvements, and funnel optimization.",
      features: [
        "Conversion audit and analysis",
        "A/B testing implementation",
        "Landing page optimization",
        "User experience improvements",
        "Heat map analysis",
        "Funnel optimization",
        "Performance monitoring"
      ],
      pricing: "Starting at $2,500/month",
      results: "Average 45% increase in conversion rates"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses looking to establish their online presence",
      features: [
        "SEO optimization",
        "Social media management (2 platforms)",
        "Monthly analytics report",
        "Basic content creation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing businesses ready to scale their digital marketing",
      features: [
        "Complete SEO strategy",
        "Social media management (4 platforms)",
        "PPC campaign management",
        "Content marketing",
        "Weekly analytics reports",
        "Phone & email support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$10,000",
      period: "/month",
      description: "Comprehensive solution for large businesses and enterprises",
      features: [
        "Full-service digital marketing",
        "Advanced SEO & technical optimization",
        "Multi-platform advertising",
        "Custom content strategy",
        "Dedicated account manager",
        "Real-time reporting dashboard",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TrackingPixels />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
            Our Digital Marketing
            <span className="relative inline-block ml-4">
              Services
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to help your business 
            grow and succeed in today's competitive online landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#packages"
              className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon and title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Long description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing and results */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200">
                  <div className="mb-4 sm:mb-0">
                    <div className="text-lg font-bold text-blue-600 mb-1">
                      {service.pricing}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.results}
                    </div>
                  </div>
                  <a 
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include 
              dedicated support and monthly performance reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative ${
                  pkg.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center block ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}