import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: "Cozy Dining Interior",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Traditional Street Food Prep",
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Warm Seating Area",
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Delicious Thali Presentation",
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Ambience & Lighting",
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
  }
];

const RestaurantGlimpse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and Previous handlers for the carousel
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Get previous and next indexes for side previews
  const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="bg-[#f5ebd9] text-[#331d0d] py-20 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Header Title */}
        <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wide mb-6">
          A Little Glimpse of Us
        </h2>

        {/* See Full Gallery Button */}
        <div className="mb-14">
          <button className="bg-[#5c3718] hover:bg-[#472a12] text-white text-xs md:text-sm font-medium py-3 px-7 rounded-full transition-colors duration-200 shadow-sm tracking-wide">
            See Full Gallery
          </button>
        </div>

        {/* Carousel Showcase Wrapper */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto min-h-[350px] md:min-h-[480px]">
          
          {/* Left Tilted Preview Image */}
          <div className="hidden lg:block absolute left-[-40px] z-10 w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-lg transform -rotate-6 opacity-60 hover:opacity-90 transition-all duration-300 pointer-events-none">
            <img
              src={galleryImages[prevIndex].url}
              alt="Previous preview"
              className="w-full h-full object-cover filter grayscale-[30%]"
            />
          </div>

          {/* Main Active Center Image */}
          <div className="relative z-20 w-full max-w-[800px] h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Right Tilted Preview Image */}
          <div className="hidden lg:block absolute right-[-40px] z-10 w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-lg transform rotate-6 opacity-60 hover:opacity-90 transition-all duration-300 pointer-events-none">
            <img
              src={galleryImages[nextIndex].url}
              alt="Next preview"
              className="w-full h-full object-cover filter grayscale-[30%]"
            />
          </div>

        </div>

        {/* Navigation Arrow Buttons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#8c6b52] flex items-center justify-center text-[#5c3718] hover:bg-[#5c3718] hover:text-white transition-all duration-200 shadow-sm"
            aria-label="Previous slide"
          >
            <span className="text-xl">←</span>
          </button>
          
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#8c6b52] flex items-center justify-center text-[#5c3718] hover:bg-[#5c3718] hover:text-white transition-all duration-200 shadow-sm"
            aria-label="Next slide"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default RestaurantGlimpse;