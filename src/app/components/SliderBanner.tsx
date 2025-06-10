'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = ["/Herobanner1.jpeg", "/Herobanner2.jpeg", "/Herobanner3.jpeg"];
const textContent = [
  "Discover nice Jewels",
  "No boundaries, just beauty",
  "bracelets, rings, necklaces and more",
];

const SliderBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-5">
      {/* Image Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-[500px] relative">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Text Content */}
            <div className="absolute flex flex-col bottom-0 right-0 bg-[white] p-4 items-center">
              <h2 className="text-xl md:text-2xl font-bold">{textContent[index]}</h2>
              <a href='#' className="text-sm md:text-base hover:underline rounded mt-2 inline-block bg-black text-white px-3 py-1 text-black">
                Shop Now
              </a>
            </div>
            
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderBanner;