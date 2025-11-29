"use client";

import { useState } from "react";
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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroCategories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCategory = heroCategories[currentIndex];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Text */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-[#5fcfc3] text-sm sm:text-base font-semibold uppercase tracking-wider">
                {currentCategory.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {currentCategory.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                {currentCategory.description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={goToPrevious}
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#5fcfc3] hover:text-white"
                aria-label="Previous category"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Category Indicators */}
              <div className="flex gap-2">
                {heroCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#5fcfc3]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to category ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#5fcfc3] hover:text-white"
                aria-label="Next category"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full">
              <Image
                src={currentCategory.image}
                alt={currentCategory.title}
                fill
                className="object-contain transition-opacity duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
