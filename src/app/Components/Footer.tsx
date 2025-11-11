import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation items with their respective paths
  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#f1fafa] border-t border-gray-200">
      <div className="h-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mb-4 md:mb-0">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.path}
                className="lato-font text-gray-600 hover:text-[#5ab5b6] transition-colors duration-200 text-sm font-light"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex gap-4">
            {/* Facebook Icon */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
              <img 
                src="/Social/facebook.png" 
                alt="Facebook" 
                className="w-5 h-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </a>
            
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
              <img 
                src="/Social/instagram.png" 
                alt="Instagram" 
                className="w-5 h-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </a>
            
            {/* Twitter Icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <img 
                src="/Social/twitter.png" 
                alt="Twitter" 
                className="w-5 h-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </a>
            
            {/* YouTube Icon */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
              <img 
                src="/Social/youtube.png" 
                alt="YouTube" 
                className="w-5 h-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="border-t border-gray-300"></div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center">
          <p className="poiret-font text-gray-500 text-xs md:text-sm">
            Copyright © {currentYear}&nbsp;&nbsp;<span className='font-medium'>Ashika Jain.</span>&nbsp;&nbsp;All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;