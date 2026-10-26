import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// Import food images
import paneerTikkaImg from "../../../../assets/PaneerTikka.jpg";
import dalMakhaniImg from "../../../../assets/DalMakhani.jpg";
import masalaDosaImg from "../../../../assets/MasalaDosa.jpg";
import choleBhatureImg from "../../../../assets/CholeBhature.jpg";
import thaliImg from "../../../../assets/Thali.png";
import jainPaneerImg from "../../../../assets/JainFriendly.png";

// Food categories
const categories = [
  { id: "most-favorites", label: "Most Favorites", icon: "✦" },
  { id: "north-indian", label: "North Indian", icon: "★" },
  { id: "south-indian", label: "South Indian", icon: "✹" },
  { id: "thalis", label: "Thalis", icon: "✹" },
  { id: "jain-friendly", label: "Jain-Friendly", icon: "✹" },
];

// Food items
const foodItems = [
  {
    id: 1,
    title: "Paneer Tikka",
    description:
      "Spice-marinated paneer grilled to perfection and served with mint chutney.",
    price: "đ120,000",
    image: paneerTikkaImg,
    category: "most-favorites",
  },
  {
    id: 2,
    title: "Dal Makhani",
    description:
      "A rich, comforting lentil curry with warming spices and a creamy finish.",
    price: "đ110,000",
    image: dalMakhaniImg,
    category: "most-favorites",
  },
  {
    id: 3,
    title: "Masala Dosa",
    description:
      "A crisp golden dosa filled with spiced potato, served with chutneys and sambar.",
    price: "đ95,000",
    image: masalaDosaImg,
    category: "most-favorites",
  },
  {
    id: 4,
    title: "Chole Bhature",
    description:
      "Spiced chickpea curry paired with golden fried bread.",
    price: "đ105,000",
    image: choleBhatureImg,
    category: "most-favorites",
  },
  {
    id: 5,
    title: "Butter Paneer",
    description:
      "Rich and creamy tomato-based gravy cooked with fresh cottage cheese.",
    price: "đ130,000",
    image: paneerTikkaImg,
    category: "north-indian",
  },
  {
    id: 6,
    title: "Rava Dosa",
    description:
      "Crispy semolina crepe served with freshly ground coconut chutney.",
    price: "đ90,000",
    image: masalaDosaImg,
    category: "south-indian",
  },
  {
    id: 7,
    title: "Special Maharaja Thali",
    description:
      "A lavish platter with 2 curries, dal makhani, paneer, naan, rice, and dessert.",
    price: "đ180,000",
    image: thaliImg,
    category: "thalis",
  },
  {
    id: 8,
    title: "Jain Shahi Paneer",
    description:
      "Rich cashew and tomato gravy made strictly without onion, garlic, or root veggies.",
    price: "đ135,000",
    image: jainPaneerImg,
    category: "jain-friendly",
  },
  {
    id: 9,
    title: "Jain Yellow Dal Fry",
    description:
      "Comforting yellow lentils tempered with cumin, green chilies, and pure ghee.",
    price: "đ95,000",
    image: dalMakhaniImg,
    category: "jain-friendly",
  },
];

const AuthenticFlavours = () => {
  const [activeTab, setActiveTab] = useState("most-favorites");
  const [activeDot, setActiveDot] = useState(0);

  const carouselRef = useRef(null);

  // Filter food items based on the active category
  const filteredItems = foodItems.filter(
    (item) =>
      activeTab === "most-favorites" || item.category === activeTab
  );

  // Reset carousel when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId);
    setActiveDot(0);

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // Carousel navigation
  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector("[data-food-card]");

    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 320;

    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Update pagination indicator on scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector("[data-food-card]");

    if (!firstCard) {
      setActiveDot(0);
      return;
    }

    const cardWidth = firstCard.getBoundingClientRect().width + 24;
    const maxScrollLeft =
      carousel.scrollWidth - carousel.clientWidth;

    const currentIndex = Math.round(carousel.scrollLeft / cardWidth);
    const maxIndex = Math.max(0, Math.ceil(maxScrollLeft / cardWidth));

    setActiveDot(Math.min(currentIndex, maxIndex, 3));
  };

  return (
    <section className="overflow-hidden bg-[#fdf9f3] px-4 py-16 font-sans text-[#331d0d] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            A Feast of Authentic Flavours
          </h2>

          <p className="mx-auto max-w-xl font-['Work_Sans'] text-xs leading-relaxed text-[#735d4d] md:text-sm">
            From rich regional specialities to comforting everyday
            favourites, discover the flavours that make Indian vegetarian
            cuisine so memorable.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="no-scrollbar mb-10 flex items-center justify-start gap-2 overflow-x-auto pb-4 text-xs font-medium md:justify-center md:gap-3 md:text-sm">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                aria-pressed={isActive}
                className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 transition-all duration-200 ${
                  isActive
                    ? "border-[#4a2e16] bg-[#4a2e16] text-white shadow-sm"
                    : "border-[#e2d5c3] bg-white/80 text-[#4a2e16] hover:bg-[#f3e8d7]"
                }`}
              >
                <span className="text-[10px]">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Food Cards Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              data-food-card
              className="group flex w-[270px] shrink-0 snap-start flex-col justify-between sm:w-[300px] lg:w-[calc((100%-96px)/4)]"
            >
              <div>
                {/* Food Image */}
                <div className="mb-4 h-[260px] w-full overflow-hidden rounded-2xl bg-[#ede0d0] md:h-[290px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Food Title */}
                <h3 className="mb-1.5 font-['Fraunces'] text-xl font-bold text-[#331d0d]">
                  {item.title}
                </h3>

                {/* Food Description */}
                <p className="mb-4 line-clamp-2 font-['Work_Sans'] text-xs leading-relaxed text-[#7d6857]">
                  {item.description}
                </p>
              </div>

              {/* Food Price */}
              <div className="font-['Fraunces'] text-lg font-bold text-[#4a2e16] md:text-xl">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-5">
          {/* Carousel Pagination and Arrows */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#e2d3be] bg-[#f0e4d2] px-4 py-2.5">
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#4a2e16] text-sm text-white transition-colors hover:bg-[#331d0d]"
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((dotIndex) => (
                <span
                  key={dotIndex}
                  className={`rounded-full transition-all duration-300 ${
                    activeDot === dotIndex
                      ? "h-2 w-6 bg-[#4a2e16]"
                      : "h-2 w-2 bg-[#bda892]"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#4a2e16] text-sm text-white transition-colors hover:bg-[#331d0d]"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          {/* Explore Full Menu Button - Centered Below Controls */}
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-full bg-[#4a2e16] px-12 py-5 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#331d0d] md:text-md"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthenticFlavours;

