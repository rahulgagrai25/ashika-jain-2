'use client';
import React, { useEffect, useState } from 'react';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Logo fade-in animation
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Complete in ~3 seconds

    // Complete loading
    const completionTimer = setTimeout(() => {
      // Start exit animation
      setIsExiting(true);
      
      // Remove from DOM after fade out completes
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'unset';
      }, 600);

      return () => clearTimeout(exitTimer);
    }, 3200); // Slightly longer than progress animation

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
      clearTimeout(completionTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 bg-[#f1fafa] z-9999 flex items-center justify-center transition-opacity duration-600 ${
      isExiting ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center">
        {/* Logo Container */}
        <div className={`transition-all duration-700 transform ${
          logoVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-90'
        } ${isExiting ? 'scale-110 opacity-0' : ''}`}>
          {/* Replace with your actual logo */}
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 mx-auto">
            {/* Example logo placeholder - replace with your actual logo image */}
            <img 
              src="/Logo/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
            {/* If you have an actual image, use this instead: */}
            {/* <img 
              src="/your-logo-path.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            /> */}
          </div>

          {/* Subtitle with fade-in effect */}
          {/* <div className={`transition-opacity duration-500 delay-300 ${
            logoVisible && !isExiting ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="lato-font text-sm md:text-base text-gray-600 tracking-widest uppercase">
              Yoga & Wellness
            </p>
          </div> */}
        </div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 md:w-64">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-[#3f9a9b] h-1 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Preloader;