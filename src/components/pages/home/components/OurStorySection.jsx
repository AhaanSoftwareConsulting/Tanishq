import React from 'react';

// Apnar assets folder-er path onujayi image import kore nin
import staffImg from '../../../../assets/StaffGroup.png'; // Ba apnar local image path
import guestImg from '../../../../assets/GuestsGroup.png'; // Ba apnar local image path

const OurStorySection = () => {
  return (
    <section className="bg-[#fcf8f2] text-[#331d0d] py-20 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Header Title */}
        <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
          A Taste of Home, Shared with Vietnam
        </h2>

        {/* Subtitle Description */}
        <p className="text-xs sm:text-sm md:text-base text-[#735d4d] max-w-2xl mx-auto leading-relaxed mb-8">
          At Tanishq, every dish carries the taste of India. Fresh spices, family recipes and a
          warm welcome, right here in Ho Chi Minh City.
        </p>

        {/* Read Our Story CTA Button */}
        <div className="mb-14">
          <button className="bg-[#4a2e16] hover:bg-[#331d0d] text-white text-xs md:text-sm font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-sm">
            Read our story
          </button>
        </div>

        {/* Images Grid with Rotated Photo Frame Effect (Full Width & Larger Size) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start justify-center max-w-7xl mx-auto px-2">
          
          {/* Left Image - Slightly Tilted Left */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 overflow-hidden w-full md:col-span-7">
            <div className="w-full h-full overflow-hidden">
              <img
                src={staffImg}
                alt="Tanishq Staff Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Image - Slightly Tilted Right with Cursive Text Below */}
          <div className="flex flex-col items-center w-full md:col-span-5">
            <div className="w-full transform rotate-2 hover:rotate-0 transition-transform duration-300 overflow-hidden">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={guestImg}
                  alt="Guests enjoying at Tanishq"
                  className="w-full h-[490px] object-cover object-center"
                />
              </div>
            </div>

            {/* Cursive Handwriting Text Under Second Image */}
            <div className="mt-8 text-center text-3xl sm:text-2xl md:text-3xl text-[#4a2e16] leading-tight" style={{ fontFamily: "'Rustic Roadway - Personal use', cursive, sans-serif" }}>
              <p>Experience the taste of tradition.</p>
              <p className="mt-2">Experience Tanishq.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStorySection;