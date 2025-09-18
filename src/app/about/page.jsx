import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrackingPixels from "@/components/TrackingPixels";
import {
  Award,
  Eye,
  Heart,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

export const metadata = {
  title: 'About Us - Our Goals, Vision & Mission | DigitalMedia Pro',
  description: 'Learn about DigitalMedia Pro\'s mission to transform businesses through innovative digital marketing strategies. Discover our goals, vision, and commitment to client success.',
  keywords: 'about us, digital marketing agency, company mission, vision, goals, team',
  openGraph: {
    title: 'About Us - Our Goals, Vision & Mission | DigitalMedia Pro',
    description: 'Learn about our mission to transform businesses through innovative digital marketing strategies.',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and success."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team to achieve your goals."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from strategy development to campaign execution."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously innovate to give our clients a competitive edge."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Sarah has over 10 years of experience in digital marketing and has helped over 200 businesses achieve their growth goals."
    },
    {
      name: "Michael Chen",
      position: "Head of SEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Michael is a certified SEO expert with a track record of improving organic traffic by an average of 250% for clients."
    },
    {
      name: "Emily Rodriguez",
      position: "Social Media Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Emily specializes in creating viral social media campaigns that drive engagement and brand awareness."
    },
    {
      name: "David Park",
      position: "PPC Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "David manages over $2M in ad spend annually and consistently delivers 300%+ ROI for our clients."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Successful Campaigns" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "5+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TrackingPixels />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
            About
            <span className="relative inline-block ml-4">
              DigitalMedia Pro
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
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping businesses succeed in the digital world. 
            Our team of experts combines creativity, strategy, and technology to deliver 
            exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, DigitalMedia Pro started with a simple mission: to help 
                  businesses harness the power of digital marketing to achieve sustainable growth. 
                  What began as a small team of passionate marketers has grown into a full-service 
                  digital marketing agency trusted by over 500 businesses worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning, innovation, and an 
                  unwavering commitment to our clients' success. We've had the privilege of 
                  working with businesses of all sizes, from ambitious startups to established 
                  enterprises, helping them navigate the ever-evolving digital landscape.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders, with our campaigns 
                  generating over $50 million in revenue for our clients and our strategies 
                  being featured in leading marketing publications.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals, Vision & Mission */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Our Goals, Vision &amp; Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core principles and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Goals */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Help 1,000+ businesses achieve their digital marketing goals by 2025
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Maintain our 98% client satisfaction rate
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuously innovate and stay ahead of industry trends
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Generate $100M+ in revenue for our clients
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be the world's most trusted digital marketing partner, empowering businesses 
                of all sizes to achieve unprecedented growth through innovative, data-driven 
                marketing strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where every business, regardless of size or industry, 
                has access to world-class digital marketing expertise that drives measurable, 
                sustainable results.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To transform businesses through innovative digital marketing strategies that 
                deliver measurable results, exceed expectations, and create lasting value 
                for our clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing exceptional service, maintaining the highest 
                standards of integrity, and building long-term partnerships that fuel 
                mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every strategy we develop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of digital marketing experts is passionate about 
              helping businesses achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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