"use client";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
export default function Footer() { 
    return (
          <footer className="px-6 md:px-14 py-12 border-t border-gray-200/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-inter">
            © 2026 Redu. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Terms
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>  );}