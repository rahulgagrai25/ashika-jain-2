'use client';
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="poiret-font bg-[#f1fafa] shadow-lg font-normal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img 
                className='h-15 hover:scale-115 duration-500' 
                src="/Logo/logo.png" 
                alt="Logo" 
              />
            </a>
          </div>

          {/* Hamburger Menu Button - Visible on all screens */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button p-2 rounded-md hover:bg-[#3f9a9b] transition-colors duration-300"
            >
              <svg
                className="w-8 h-8 text-gray-600 hover:text-[#f1fafa]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Updated animation */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-[#f1fafa] shadow-xl transform transition-all duration-500 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <a href="/">
              <img 
                className='h-15 hover:scale-115 duration-500' 
                src="/Logo/logo.png" 
                alt="Logo" 
              />
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:scale-115 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-8 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="poiret-font block py-4 px-6 text-[#192f33] hover:bg-[#8fd1d1] rounded-xl transition-all duration-300 font-light transform hover:translate-x-2 hover:shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Additional menu footer with Social Icons */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Get in touch with us</p>
            <div className="flex justify-center space-x-6">
              {/* Facebook Icon */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1877F2] transition-colors duration-300 transform hover:scale-110"
              >
                <img 
                  src="/Social/facebook.png" 
                  alt="Facebook" 
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
                <span className="sr-only">Facebook</span>
              </a>

              {/* Instagram Icon */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E4405F] transition-colors duration-300 transform hover:scale-110"
              >
                <img 
                  src="/Social/instagram.png" 
                  alt="Instagram" 
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
                <span className="sr-only">Instagram</span>
              </a>

              {/* Twitter Icon */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1DA1F2] transition-colors duration-300 transform hover:scale-110"
              >
                <img 
                  src="/Social/twitter.png" 
                  alt="Twitter" 
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
                <span className="sr-only">Twitter</span>
              </a>

              {/* YouTube Icon */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF0000] transition-colors duration-300 transform hover:scale-110"
              >
                <img 
                  src="/Social/youtube.png" 
                  alt="YouTube" 
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay with fade animation */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black z-40 transition-opacity duration-500 ease-in-out opacity-60"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;