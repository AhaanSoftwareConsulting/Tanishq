import React, { useRef } from 'react';

const reviewsData = [
  {
    rating: 5,
    comment: "Authentic Indian food! They offer south & north Indian. Great atmosphere and very friendly staff.",
    author: "Elena Rostova"
  },
  {
    rating: 5,
    comment: "“Süper yemekler iyi ortam tavsiye ederim fiyatlarda çok makul”",
    author: "İlker Ören"
  },
  {
    rating: 5,
    comment: "“Food was excellent! Nice place”",
    author: "S Horaib"
  },
  {
    rating: 5,
    comment: "“Great to find a totally vegetarian Indian restaurant. Friendly service. Tasty food at a good price.”",
    author: "David Pickering"
  },
  {
    rating: 5,
    comment: "“Very good north Indian food! Soon you hopefully offer south Indian food again. Great atmosphere and friendly waiters.”",
    author: "David & Amy"
  },
  {
    rating: 5,
    comment: "“Amazing experience, delicious food and warm hospitality. Highly recommended!”",
    author: "Sarah Connor"
  }
];

const GuestReviews = () => {
  const scrollContainerRef = useRef(null);

  // Smooth scroll left and right functions
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#fcf8f2] text-[#3d2616] py-20 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
              Loved by Our Guests
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="max-w-md font-['Work_Sans'] text-[18px] font-medium leading-[28px] tracking-[0] text-[#735d4d]">
  Every meal tells a story, and every guest makes ours special.
  Discover what our guests have to say about the flavours, hospitality,
  and memorable moments at Tanishq.
</p>
            {/* Scroll Control Arrows */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-[#735d4d]/40 flex items-center justify-center hover:bg-[#302117] hover:text-white transition-colors duration-200"
                aria-label="Previous"
              >
                ‹
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-[#735d4d]/40 flex items-center justify-center hover:bg-[#302117] hover:text-white transition-colors duration-200"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-4 -mx-4 px-4 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#302117] text-white p-8 rounded-none min-w-[280px] max-w-[320px] md:min-w-[320px] h-[340px] flex flex-col justify-between shrink-0 shadow-md select-none"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex gap-1 text-white text-lg mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base leading-relaxed text-stone-200 font-light">
                  {review.comment}
                </p>
              </div>

              {/* Author Line */}
              <div className="flex items-center gap-3 pt-6">
                <span className="w-4 h-[1px] bg-stone-500"></span>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-stone-300">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#5c3718] hover:bg-[#472a12] text-white text-sm font-medium py-3.5 px-8 rounded-full transition-colors duration-200 shadow-sm">
            Leave us a review
          </button>
        </div>

      </div>
    </section>
  );
};

export default GuestReviews;