import React, { useState, useRef } from 'react';

// Assets folder path onujayi image gulo import kore nin
import paneerTikkaImg from '../../../../assets/PaneerTikka.jpg'; // Ba apnar exact image name
import dalMakhaniImg from '../../../../assets/DalMakhani.jpg';
import masalaDosaImg from '../../../../assets/MasalaDosa.jpg';
import choleBhatureImg from '../../../../assets/CholeBhature.jpg';
import thaliImg from '../../../../assets/Thali.png'; // Apnar thali image path
import jainPaneerImg from '../../../../assets/JainFriendly.png';

const categories = [
  { id: 'most-favorites', label: 'Most Favorites', icon: '✦' },
  { id: 'north-indian', label: 'North Indian', icon: '★' },
  { id: 'south-indian', label: 'South Indian', icon: '✹' },
  { id: 'thalis', label: 'Thalis', icon: '✹' },
  { id: 'jain-friendly', label: 'Jain-Friendly', icon: '✹' },
];

const foodItems = [
  {
    id: 1,
    title: "Paneer Tikka",
    description: "Spice-marinated paneer grilled to perfection and served with mint chutney.",
    price: "đ120,000",
    image: paneerTikkaImg,
    category: "most-favorites"
  },
  {
    id: 2,
    title: "Dal Makhani",
    description: "A rich, comforting lentil curry with warming spices and a creamy finish.",
    price: "đ110,000",
    image: dalMakhaniImg,
    category: "most-favorites"
  },
  {
    id: 3,
    title: "Masala Dosa",
    description: "A crisp golden dosa filled with spiced potato, served with chutneys and sambar.",
    price: "đ95,000",
    image: masalaDosaImg,
    category: "most-favorites"
  },
  {
    id: 4,
    title: "Chole Bhature",
    description: "Spiced chickpea curry paired with golden fried bread.",
    price: "đ105,000",
    image: choleBhatureImg,
    category: "most-favorites"
  },
  {
    id: 5,
    title: "Butter Paneer",
    description: "Rich and creamy tomato-based gravy cooked with fresh cottage cheese.",
    price: "đ130,000",
    image: paneerTikkaImg,
    category: "north-indian"
  },
  {
    id: 6,
    title: "Rava Dosa",
    description: "Crispy semolina crepe served with freshly ground coconut chutney.",
    price: "đ90,000",
    image: masalaDosaImg,
    category: "south-indian"
  },
  // --- Thalis Category Items ---
  {
    id: 7,
    title: "Special Maharaja Thali",
    description: "A lavish platter with 2 curries, dal makhani, paneer, naan, rice, and dessert.",
    price: "đ180,000",
    image: thaliImg,
    category: "thalis"
  },
  // --- Jain-Friendly Category Items ---
  {
    id: 8,
    title: "Jain Shahi Paneer",
    description: "Rich cashew and tomato gravy made strictly without onion, garlic, or root veggies.",
    price: "đ135,000",
    image: jainPaneerImg,
    category: "jain-friendly"
  },
  {
    id: 9,
    title: "Jain Yellow Dal Fry",
    description: "Comforting yellow lentils tempered with cumin, green chilies, and pure ghee.",
    price: "đ95,000",
    image: dalMakhaniImg,
    category: "jain-friendly"
  }
];

const AuthenticFlavours = () => {
  const [activeTab, setActiveTab] = useState('most-favorites');
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);

  // Filter items based on active tab
  const filteredItems = foodItems.filter(
    item => activeTab === 'most-favorites' || item.category === activeTab
  );

  // Carousel navigation handlers
  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 320; // Approx card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 320;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveDot(Math.min(index, 3));
    }
  };

  return (
    <section className="bg-[#fdf9f3] text-[#331d0d] py-16 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            A Feast of Authentic Flavours
          </h2>
          <p className="text-xs font-['Work_Sans'] md:text-sm text-[#735d4d] max-w-xl mx-auto leading-relaxed">
            From rich regional specialities to comforting everyday favourites, discover the flavours that make Indian vegetarian cuisine so memorable.
          </p>
        </div>

        {/* Filter Tabs Section */}
        <div className="flex justify-start md:justify-center items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-4 mb-10 text-xs md:text-sm font-medium">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#4a2e16] text-white border-[#4a2e16] shadow-sm'
                    : 'bg-white/80 text-[#4a2e16] border-[#e2d5c3] hover:bg-[#f3e8d7]'
                }`}
              >
                <span className="text-[10px]">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel / Cards Grid */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2 px-1 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[270px] sm:min-w-[300px] max-w-[320px] flex-1 shrink-0 snap-start flex flex-col justify-between group"
            >
              {/* Card Image Wrapper */}
              <div>
                <div className="w-full h-[260px] md:h-[290px] rounded-2xl overflow-hidden mb-4 bg-[#ede0d0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl font-bold text-[#331d0d] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7d6857] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price */}
              <div className="font-serif font-bold text-lg md:text-xl text-[#4a2e16]">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Control Bar & View All Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Carousel Pagination & Arrows Controls */}
          <div className="bg-[#f0e4d2] px-4 py-2.5 rounded-2xl flex items-center gap-4 border border-[#e2d3be]">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-md bg-[#4a2e16] text-white flex items-center justify-center text-sm hover:bg-[#331d0d] transition-colors"
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Pagination Dots / Bars */}
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((dotIndex) => (
                <span
                  key={dotIndex}
                  className={`transition-all duration-300 rounded-full ${
                    activeDot === dotIndex
                      ? 'w-6 h-2 bg-[#4a2e16]'
                      : 'w-2 h-2 bg-[#bda892]'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-md bg-[#4a2e16] text-white flex items-center justify-center text-sm hover:bg-[#331d0d] transition-colors"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* View All Button */}
          <button className="bg-[#4a2e16] hover:bg-[#331d0d] text-white text-xs md:text-sm font-medium py-3 px-8 rounded-full transition-colors duration-200 shadow-sm">
            View All
          </button>

        </div>

      </div>
    </section>
  );
}

export default AuthenticFlavours;