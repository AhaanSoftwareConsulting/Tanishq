import React, { useState } from 'react';
import leftArrow from '../../../../assets/leftArrow.png';
import rightArrow from '../../../../assets/rightArrow.png';

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

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryImages.length
    );
  };

  const prevIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;

  const nextIndex =
    (currentIndex + 1) % galleryImages.length;

  return (
    <section className="overflow-hidden bg-[#f5ebd9] px-4 py-16 text-[#331d0d] sm:py-20 md:px-12">
      <div className="mx-auto max-w-[1440px] text-center">

        {/* Section heading */}
        <h2 className="mb-6 font-['Fraunces'] text-[36px] font-normal leading-tight text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
          A Little Glimpse of Us
        </h2>

        {/* Gallery button */}
        <div className="mb-12 sm:mb-16">
          <button
            type="button"
            className="rounded-full bg-[#5c3718] px-7 py-3 text-xs font-medium tracking-wide text-white shadow-sm transition-colors duration-300 hover:bg-[#472a12] md:text-sm"
          >
            See Full Gallery
          </button>
        </div>

        {/* Image carousel */}
        <div className="relative mx-auto flex gap-4 min-h-[260px] w-full max-w-[1280px] items-center justify-center overflow-hidden lg:min-h-[400px] xl:min-h-[516px]">

          {/* Previous image: full-size landscape, tilted left */}
          <div
            className="pointer-events-none absolute -left-[5%] w-[15%] xl:left-[-16%] top-1/2 z-10 hidden xl:w-[30%] -translate-y-1/2 -rotate-[15deg] overflow-hidden grayscale-[80%] sepia-[25%] contrast-[85%] opacity-35 transition-all duration-700 ease-in-out sm:block sm:h-[200px] lg:h-[325px]"
            aria-hidden="true"
          >
            <img
              src={galleryImages[prevIndex].url}
              alt=""
              className="h-full w-full object-cover"
              draggable="false"
            />
          </div>

          {/* Active center image */}
          <div
            key={galleryImages[currentIndex].id}
            className="relative z-20 h-[240px] w-[95%] sm:w-[68%] xl:w-[80%] max-w-[800px] overflow-hidden lg:h-[400px] xl:h-[516px]"
          >
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              className="h-full w-full animate-[galleryFadeIn_500ms_ease-in-out] object-cover object-center"
              draggable="false"
            />
          </div>

          {/* Next image: full-size landscape, tilted right */}
          <div
            className="pointer-events-none absolute -right-[5%] w-[15%]  top-1/2 z-10 hidden xl:right-[-16%] top-1/2 z-10 hidden xl:w-[30%] -translate-y-1/2 rotate-[15deg] overflow-hidden grayscale-[80%] sepia-[25%] contrast-[85%] opacity-35 transition-all duration-700 ease-in-out sm:block sm:h-[200px] lg:h-[325px]"
            aria-hidden="true"
          >
            <img
              src={galleryImages[nextIndex].url}
              alt=""
              className="h-full w-full object-cover"
              draggable="false"
            />
          </div>
        </div>

        {/* Reference-style navigation */}
        <div className="relative mx-auto gap-6 lg:gap-16 mt-7 flex items-center justify-center sm:mt-8">
          
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="relative z-10  items-center  cursor-pointer"
          >
            <img
              src={leftArrow}
              alt=""
              className="h-[80%] w-[80%] lg:h-full lg:w-full object-contain"
              draggable="false"
            />
          </button>

          

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="relative z-10  items-center cursor-pointer"
          >
            <img
              src={rightArrow}
              alt=""
              className="h-[80%] w-[80%] lg:h-full lg:w-full object-contain"
              draggable="false"
            />
          </button>
        </div>

      </div>


    </section>
  );
};

export default RestaurantGlimpse;

