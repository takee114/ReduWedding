"use client";
import { useState } from "react";
export default function Contact() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        budget: "",
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
      budget: "",
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
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="weddingDate"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                >
                  <option value="">Select a range</option>
                  <option value="under10k">Under 1,500,000 ETB</option>
                  <option value="10k-25k">1,500,000 ETB - 3,750,000 ETB</option>
                  <option value="25k-50k">3,750,000 ETB - 7,500,000 ETB</option>
                  <option value="50k-100k">7,500,000 ETB - 15,000,000 ETB</option>
                  <option value="over100k">Over 15,000,000 ETB</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4958D] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#C17E75] active:bg-[#B06A61] transition-colors duration-200 font-inter"
              >
                Send Inquiry
              </button>

              {formSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-inter">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">
                Get in Touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                We'd love to hear about your wedding plans. Reach out to
                schedule a consultation and let's create something beautiful
                together.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Email
              </h4>
              <p className="text-gray-600 font-inter">hello@reduweddings.com</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Phone
              </h4>
              <p className="text-gray-600 font-inter">+251 929 148708</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Office Hours
              </h4>
              <p className="text-gray-600 font-inter">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 font-inter">
                Saturday: By appointment
              </p>
              <p className="text-gray-600 font-inter">Sunday: Closed</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Location
              </h4>
              <p className="text-gray-600 font-inter">Addis Ababa</p>
              <p className="text-gray-600 font-inter">Ethiopia</p>
            </div>
          </div>
        </div>
      </section>
  );
}