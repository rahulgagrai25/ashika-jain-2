'use client';
import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "",
      title: "Imag 1",
      description: ""
    },
    {
      image: "",
      title: "Image 2",
      description: ""
    },
    {
      image: "",
      title: "Image 3",
      description: ""
    },
    {
      image: "",
      title: "Image 4",
      description: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden z-0">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full shrink-0 relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4">
              <h1 className="poiret-font text-2xl md:text-6xl font-light mb-2 md:mb-4 transform transition-all duration-500 delay-200">
                {slide.title}
              </h1>
              <p className="lato-font text-sm md:text-2xl mb-4 md:mb-8 max-w-2xl transform transition-all duration-500 delay-300 px-2">
                {slide.description}
              </p>
              {/* <button className="bg-[#377e83] hover:bg-[#5ab5b6] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold transform transition-all duration-500 hover:scale-105">
                Explore More
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Simple Arrow Navigation without circles */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white p-2 transition-all duration-300 opacity-80 hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg 
          className="w-5 h-5 md:w-7 md:h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white p-2 transition-all duration-300 opacity-80 hover:opacity-100"
        aria-label="Next slide"
      >
        <svg 
          className="w-5 h-5 md:w-7 md:h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;