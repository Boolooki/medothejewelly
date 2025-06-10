// components/Carousel.js
"use client"; // Use client-side rendering for interactivity

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      title: "The Empress Ring",
      originalPrice: "65,000 ฿",
      salePrice: "34,900 ฿",
      discount: "46% off",
      image: "/CarouselBox1.jpeg", // Replace with your image path
    },
    {
      id: 2,
      title: "The Everyday Moment Necklace",
      originalPrice: "78,000 ฿",
      salePrice: "44,900 ฿",
      discount: "42% off",
      image: "/CarouselBox2.jpeg", // Replace with your image path
    },
    {
      id: 3,
      title: "The Everyday Charm Bracelet",
      originalPrice: "70,000 ฿",
      salePrice: "38,900 ฿",
      discount: "44% off",
      image: "/CarouselBox3.jpeg", // Replace with your image path
    },
  ];

  // Scroll handling
  const scroll = (direction: string) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8; // Scroll by 80% of the container width
    const currentScroll = container.scrollLeft;

    if (direction === "prev") {
      container.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update button states based on scroll position
  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    setIsAtStart(container.scrollLeft === 0);
    setIsAtEnd(
      container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto py-4 bg-[orange] px-4">
      {/* Carousel Header */}
      <h2 className="text-2xl font-bold mb-4 text-center">
        The Excellence Everyday Essential
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Discover our exclusive collection of everyday essentials, designed to
        elevate your style and comfort. Each piece is crafted with care and
        attention to detail.
      </p>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("prev")}
          disabled={isAtStart}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-md z-10 ${
            isAtStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick={() => scroll("next")}
          disabled={isAtEnd}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow-md z-10 ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Scrollable Product List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 py-4 scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-80 snap-center bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={320}
                  className="w-full h-80 object-contain"
                  priority={product.id === 1} // Optimize for first image
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
                <a
                  href={`/products/${product.id}`}
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  aria-label="Quick Buy"
                >
                    <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"></path>
                    </svg>
                </a>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <a href={`/products/${product.id}`} className="hover:underline">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                </a>
                <div className="mt-2">
                  <span className="text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="ml-2 text-red-600 font-bold">
                    {product.salePrice}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
