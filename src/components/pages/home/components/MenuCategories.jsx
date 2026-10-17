import React from 'react';

import beverageImg from '../../../../assets/Beverages.jpg';
import starterImg from '../../../../assets/HotSoup.jpg';
import streetFoodImg from '../../../../assets/StreetFood.jpg';

const menuData = [
  {
    category: "Hot & Cold Beverages",
    image: beverageImg,
    bgColor: "bg-[#9e6232]", // First Card Color
    borderColor: "border-[#b87643]/60",
    items: [
      { name: "Red Velvet Delight", price: "đ72,000" },
      { name: "Carrot Juice", price: "đ72,000" },
      { name: "Watermelon Juice", price: "đ72,000" },
      { name: "Pineapple Juice", price: "đ72,000" },
      { name: "Sweet Lime Soda", price: "đ54,000" },
      { name: "Lime Soda", price: "đ54,000" },
      { name: "Strawberry Lassi", price: "đ69,000" },
      { name: "Mango Lassi", price: "đ69,000" },
      { name: "Sweet Lassi", price: "đ62,000" },
    ]
  },
  {
    category: "Hot Soup, Papad & Starters",
    image: starterImg,
    bgColor: "bg-[#be7c42]", // Middle Card Color (Slightly different lighter/warmer tone)
    borderColor: "border-[#d18e53]/60",
    items: [
      { name: "Creamy Tomato Soup", price: "đ82,000" },
      { name: "Spinach Soup", price: "đ82,000" },
      { name: "Mushroom Soup", price: "đ89,000" },
      { name: "Hot and Sour Soup", price: "đ82,000" },
      { name: "Veg Manchow Soup", price: "đ82,000" },
      { name: "Rasam", price: "đ82,000" },
      { name: "Fried Papad", price: "đ45,000" },
      { name: "Roasted Papad", price: "đ38,000" },
      { name: "Tandoori Paneer Tikka", price: "đ179,000" },
    ]
  },
  {
    category: "Chats & Street Food",
    image: streetFoodImg,
    bgColor: "bg-[#9e6232]", // Third Card Color
    borderColor: "border-[#b87643]/60",
    items: [
      { name: "Pani Puri", price: "đ99,000" },
      { name: "Sev Puri", price: "đ130,000" },
      { name: "Dahi Puri", price: "đ130,000" },
      { name: "Papdi Chaat", price: "đ130,000" },
      { name: "Aloo Chaat", price: "đ130,000" },
      { name: "Peanut Chaat", price: "đ130,000" },
      { name: "Samosa Chaat", price: "đ120,000" },
      { name: "Bhel", price: "đ130,000" },
      { name: "Poha", price: "đ85,000" },
    ]
  }
];

const MenuCategories = () => {
  return (
    <section className="bg-[#f5ebd9] text-[#4a2e1b] py-16 px-4 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4 tracking-wide text-[#331d0d]">
            Something for Every Craving
          </h2>
          <p className="text-sm md:text-base text-[#735d4d] max-w-xl mx-auto leading-relaxed">
            Explore a diverse selection of Indian vegetarian cuisines, inspired by regional traditions and prepared for a memorable dining experience.
          </p>
        </div>

        {/* Connected Menu Cards Stack */}
        <div className="flex flex-col rounded-sm overflow-hidden shadow-sm">
          {menuData.map((section, idx) => (
            <div 
              key={idx} 
              className={`${section.bgColor} p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
            >
              {/* Left Column - Item List */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className={`flex justify-between items-center text-sm md:text-base pb-5 border-b ${section.borderColor} text-white/95`}
                      >
                        <span className="font-medium tracking-wide">{item.name}</span>
                        <span className="font-serif font-bold text-white ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Image & Button */}
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="w-full h-[320px] md:h-[600px] overflow-hidden shadow-inner">
                  <img 
                    src={section.image} 
                    alt={section.category} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <button className="w-full py-3 px-6 border border-white/40 rounded-full text-white text-sm md:text-base tracking-wide hover:bg-white/15 transition duration-200">
                  Explore Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-[#4a2e16] text-white px-10 py-4 rounded-full text-sm md:text-base font-medium tracking-wide hover:bg-[#331d0d] transition duration-200 shadow-md">
            Explore the Full Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default MenuCategories;