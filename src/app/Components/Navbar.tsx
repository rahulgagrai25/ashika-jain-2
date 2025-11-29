"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Brand name */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[var(--accent-color)] transition-colors"
              onClick={closeMobileMenu}
            >
              Ashika Jain
            </Link>
          </div>

          {/* Right side - Navigation links (Desktop) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              About Us
            </Link>
            <Link
              href="/classes"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              Classes
            </Link>
            <Link
              href="/schedule"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              Schedule
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[var(--accent-color)] transition-colors font-medium text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[var(--accent-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-md p-2 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 border-t border-gray-200">
            <Link
              href="/about"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/classes"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Classes
            </Link>
            <Link
              href="/schedule"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Schedule
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-3 text-gray-700 hover:text-[var(--accent-color)] hover:bg-gray-50 rounded-md transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

