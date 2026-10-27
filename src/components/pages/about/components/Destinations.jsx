import React from "react";
import { Link } from "react-router-dom";

import HoChiMinhImage from "../../../../assets/HomepageBanner.png";
import DaNangImage from "../../../../assets/da-nang-restaurant.jpeg";

const destinations = [
  {
    city: "Ho Chi Minh City",
    description:
      "Our Ho Chi Minh City restaurant brings authentic Indian vegetarian cuisine to the heart of the city. Discover traditional flavours, comforting meals, and a welcoming atmosphere created for families, friends, and food lovers.",
    image: HoChiMinhImage,
    imageAlt: "Tanishq Indian Restaurant in Ho Chi Minh City",
    imagePosition: "left",
  },
  {
    city: "Da Nang City",
    description:
      "A new destination for the flavours of India is coming to Da Nang. Our new branch aims to bring the same love for vegetarian cuisine, authentic recipes, and warm hospitality to another vibrant Vietnamese city.",
    image: DaNangImage,
    imageAlt: "Tanishq Indian Restaurant in Da Nang",
    imagePosition: "right",
    isNew: true,
  },
];

// Smooth wavy (scalloped) circle for the "New Opening" badge
const SCALLOP_POLYGON = Array.from({ length: 140 }, (_, i) => {
  const angle = (i / 140) * 2 * Math.PI;
  const radius = 47 + 3 * Math.cos(angle * 14);
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
}).join(",");

const DestinationButtons = ({ alignEnd }) => (
  <div
    className={`mt-5 flex flex-wrap items-center gap-2 ${
      alignEnd ? "md:justify-end" : "md:justify-start"
    }`}
  >
    <Link
      to="/menu"
      className="inline-flex h-[40px] min-w-[120px] items-center justify-center rounded-full bg-[#5E3A17] px-5 font-sans text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#4A2D11]"
    >
      Explore Menu
    </Link>

    <Link
      to="/contact"
      className="inline-flex h-[40px] min-w-[120px] items-center justify-center rounded-full border border-[#8C6A48] px-5 font-sans text-[13px] font-medium text-[#5E3A17] transition-colors duration-300 hover:bg-[#5E3A17] hover:text-white"
    >
      Reserve Table
    </Link>
  </div>
);

const NewOpeningBadge = () => (
  <div className="absolute -right-3 -top-6 z-10 flex h-[84px] w-[84px] items-center justify-center sm:-right-5 sm:-top-[30px]">
    {/* Spinning scalloped shape */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 animate-[spin_12s_linear_infinite] bg-[#35251B] motion-reduce:animate-none"
      style={{ clipPath: `polygon(${SCALLOP_POLYGON})` }}
    />
    {/* Text stays upright so it remains readable */}
    <span className="relative text-center font-serif text-[12px] leading-[16px] text-white">
      New
      <br />
      Opening
    </span>
  </div>
);

const DestinationRow = ({ destination }) => {
  const { city, description, image, imageAlt, imagePosition, isNew } =
    destination;

  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <div className="relative min-w-0">
      <div className="aspect-[1.52/1] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {isNew && <NewOpeningBadge />}
    </div>
  );

  const textElement = (
    <div
      className={`flex min-w-0 flex-col justify-center ${
        isImageLeft
          ? "md:items-end md:text-right"
          : "md:items-start md:text-left"
      }`}
    >
      <h3 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
        {city}
      </h3>

      <p className="mt-4 font-['Work_Sans'] text-[16px] font-normal leading-[26px] text-[#8A8075] lg:text-[18px] lg:leading-[28px]">
        {description}
      </p>

      <DestinationButtons alignEnd={isImageLeft} />
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1.5fr_1fr] md:gap-10">
      {isImageLeft ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{textElement}</div>
          <div className="order-1 md:order-2">{imageElement}</div>
        </>
      )}
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="overflow-hidden border-x border-[#EDE4D8] bg-[#FFFAF2] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-8 max-w-5xl text-center sm:mb-10">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            Two Destinations. One Tanishq
            <br className="hidden sm:block" /> Experience.
          </h2>

          <p className="mx-auto mt-5 max-w-[480px] font-sans text-[14px] font-normal leading-[22px] text-[#8A8075]">
            Wherever you find us in Vietnam, discover the flavours of India,
            the warmth of hospitality, and the comfort of a meal made with
            care.
          </p>
        </div>

        {/* DESTINATION ROWS */}
        <div className="space-y-16 sm:space-y-20">
          {destinations.map((destination) => (
            <DestinationRow key={destination.city} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;