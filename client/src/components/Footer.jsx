// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left Side */}
        <p className="text-sm">
          &copy; {currentYear} Live Code <span className="text-purple-400">Guardian</span>. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="mt-2 sm:mt-0 flex space-x-4">
          <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
