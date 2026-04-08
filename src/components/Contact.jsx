"use client";
import { useState } from "react";
import { Instagram, Send, User, Mail, Phone, Calendar, MessageSquare, CheckCircle } from "lucide-react";
export default function Contact() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        message: "",
      });
      const [formSubmitted, setFormSubmitted] = useState(false);
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  
const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      message: "",
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };
    return(  
         <section id="contact" className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Contact<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Let's start planning your perfect day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 XXX XXX XXX"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="weddingDate"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Wedding Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter rounded-md"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your wedding vision..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter resize-none rounded-md"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4958D] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#C17E75] active:bg-[#B06A61] transition-all duration-200 font-inter rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Inquiry
              </button>

              {formSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-inter rounded-md shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! We'll get back to you soon.</span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">
                Get in Touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                We'd love to hear about your wedding plans. Reach out to
                schedule a consultation and let's create something beautiful
                together.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4958D]" />
                  Email
                </h4>
                <a
                  href="mailto:reduweddings@gmail.com"
                  className="text-gray-600 font-inter hover:text-[#D4958D] transition-colors duration-200"
                >
                  reduweddings@gmail.com
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4958D]" />
                  Phone
                </h4>
                <a
                  href="tel:+251929148708"
                  className="text-gray-600 font-inter hover:text-[#D4958D] transition-colors duration-200"
                >
                  +251 929 148708
                </a>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                  Social
                </h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://t.me/Redietayele03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D4958D] transition-colors duration-200 p-2 rounded-full hover:bg-gray-50"
                    aria-label="Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/rediet_ayele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D4958D] transition-colors duration-200 p-2 rounded-full hover:bg-gray-50"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4958D]" />
                  Office Hours
                </h4>
                <div className="text-gray-600 font-inter space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                  Location
                </h4>
                <div className="text-gray-600 font-inter">
                  <p>Addis Ababa</p>
                  <p>Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}