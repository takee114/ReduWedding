"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DM</span>
              </div>
              <span className="font-extrabold text-xl text-gray-900">
                DigitalMedia Pro
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/services"
              className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-150"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="/"
                className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/services"
                className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="/about"
                className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="font-medium text-sm text-gray-900 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}