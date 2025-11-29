"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCategory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const heroCategories: HeroCategory[] = [
  {
    title: "Transform Your Life",
    subtitle: "Welcome to Yoga Journey",
    description: "Discover inner peace and strength through the ancient practice of yoga. Join us on a transformative journey to wellness.",
    image: "/Hero/frame1.png",
  },
  {
    title: "Mindful Movement",
    subtitle: "Balance Body & Mind",
    description: "Experience the harmony of movement and meditation. Our classes guide you to find balance in every aspect of your life.",
    image: "/Hero/frame2.png",
  },
  {
    title: "Strength & Flexibility",
    subtitle: "Build Your Practice",
    description: "Develop physical strength and mental resilience. Each session brings you closer to your personal best.",
    image: "/Hero/frame1.png",
  },
  {
    title: "Wellness & Healing",
    subtitle: "Nurture Your Soul",
    description: "Embrace holistic wellness through yoga. Heal your body, calm your mind, and rejuvenate your spirit.",
    image: "/Hero/frame2.png",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroCategories.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === heroCategories.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === heroCategories.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const currentCategory = heroCategories[currentIndex];

  return (
    <section className="relative w-full min-h-[100vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#4AC29A',
          background: 'linear-gradient(to top, #BDFFF3, #4AC29A)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Faded Image Background - Mobile Only */}
      <div 
        key={`bg-${currentIndex}`}
        className="lg:hidden absolute inset-0 opacity-30 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${currentCategory.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)'
        }}
      ></div>

      {/* Decorative Circles - Hidden on very small screens */}
      <div className="hidden sm:block absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Hero Text */}
          <div className="relative z-10 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex flex-col justify-center text-center lg:text-left">
              {/* Subtitle with accent */}
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="h-0.5 w-8 sm:w-12 bg-white/60"></div>
                <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                  {currentCategory.subtitle}
                </p>
              </div>

              {/* Main Title with fade animation */}
              <h1 
                key={currentIndex}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in"
              >
                <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent break-words">
                  {currentCategory.title}
                </span>
              </h1>

              {/* Description with fade animation */}
              <p 
                key={`desc-${currentIndex}`}
                className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-delay"
              >
                {currentCategory.description}
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#5fcfc3] text-sm sm:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl active:scale-95 sm:hover:scale-105 hover:bg-white/95">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Journey
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5fcfc3] to-[#4db8ad] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="hidden lg:block relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] order-1 lg:order-2">
            {/* Image Container */}
            <div className="relative w-full h-full">
              {/* Image with smooth transition */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  key={currentIndex}
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  fill
                  className="object-contain animate-fade-in-left"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>

              {/* Floating Decorative Elements - Smaller on mobile */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl animate-bounce-slow"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-bounce-slow delay-500"></div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Centered on mobile, Left on desktop */}
        <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 sm:pt-8 md:pt-10 relative z-10">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/30 active:scale-95 sm:hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous category"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Category Indicators */}
          <div className="flex gap-2 sm:gap-3 items-center">
            {heroCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-8 sm:w-10 h-2 sm:h-3 bg-white shadow-lg"
                    : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 active:bg-white/60 sm:hover:bg-white/60"
                } disabled:cursor-not-allowed`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/30 active:scale-95 sm:hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next category"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
