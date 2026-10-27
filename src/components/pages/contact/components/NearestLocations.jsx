import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "@phosphor-icons/react";

import HoChiMinhImage from "../../../../assets/HomepageBanner.png";
import DaNangImage from "../../../../assets/da-nang-restaurant.jpeg";

const locations = [
  {
    city: "Ho Chi Minh City",
    description:
      "Experience the authentic flavours of Indian vegetarian cuisine in a warm and welcoming atmosphere at our Ho Chi Minh City restaurant.",
    image: HoChiMinhImage,
    imageAlt: "Tanishq Indian Restaurant in Ho Chi Minh City",
    imagePosition: "left",

    profileUrl: "https://www.google.com/search?sca_esv=a6b1ccf14cf58966&rlz=1CAZYBT_enIN1200&sxsrf=APpeQnuo11cBEm5qL-YUXXGeXEzlgikaMg:1793094502085&q=tanishq+restaurant+vietnam&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_1S3GLULh7oSgEsRKsVmI_G6E5lI2-gyELhFZJek3Go3d1BtT6mXpaPoZiMZkPpMwp0xhOP5dXayfck9NHaWINVSgS_feJldgOJcbT3PePqG-0O0mCP8br0w0tTwgGokOkT2WhI%3D&sa=X&ved=2ahUKEwiSp-HG9dmXAxU2T2wGHagnPHEQrrQLegQIIBAA&biw=1200&bih=581&dpr=1.6",
    info: [
      { type: "address", text: "258 Lý Tự Trọng, Ho Chi Minh City" },
      { type: "phone", text: "+84 775 019 036" },
      {
        type: "hours",
        label: "Opening Hours:",
        text: "Mon – Sun : 11:00 AM – 10:00 PM",
      },
    ],
  },
  {
    city: "Da Nang City",
    description:
      "A new destination for the flavours of India. Our Da Nang branch aims to bring the same love for vegetarian cuisine, authentic recipes, and warm hospitality to another vibrant city in Vietnam.",
    image: DaNangImage,
    imageAlt: "Tanishq Indian Restaurant in Da Nang",
    imagePosition: "right",
    isNew: true,

    profileUrl: "https://www.google.com/search?q=tanishq+indian+vegetarian+restaurant+Da+nang&sca_esv=a6b1ccf14cf58966&rlz=1CAZYBT_enIN1200&biw=1200&bih=581&sxsrf=APpeQnuADjNwCuVhgdEox-JqsfeXpSTkpg%3A1793094619905&ei=23Pgav7mNpigseMP6ZPWuQQ&uact=5&oq=tanishq+indian+vegetarian+restaurant+Da+nang&gs_lp=Egxnd3Mtd2l6LXNlcnAiLHRhbmlzaHEgaW5kaWFuIHZlZ2V0YXJpYW4gcmVzdGF1cmFudCBEYSBuYW5nMgQQIxgnMggQABiABBiiBDIFEAAY7wVIlAVQrgNYrgNwAXgBkAEAmAHUAaAB1AGqAQMyLTG4AQPIAQD4AQGYAgKgAvEBwgIKEAAYRxjWBBiwA8ICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBmAMAiAYBkAYKugYECAEYGZIHBTEuMC4xoAe6A7IHAzItMbgH3wHCBwUyLTEuMcgHE4AIAQ&sclient=gws-wiz-serp#lrd=0x31752f005cdd2991:0x5e8b095e1f1ff220,1",
    info: [
      {
        type: "address",
        label: "Address coming soon:",
        text: "Da Nang City, Vietnam",
      },
      { type: "phone", text: "Contact number coming soon" },
      { type: "hours", label: "Opening Hours:", text: "To be announced" },
    ],
  },
];

const ICONS = {
  address: MapPin,
  phone: Phone,
  hours: Clock,
};

// Smooth wavy (scalloped) circle for the "New Opening" badge
const SCALLOP_POLYGON = Array.from({ length: 140 }, (_, i) => {
  const angle = (i / 140) * 2 * Math.PI;
  const radius = 47 + 3 * Math.cos(angle * 14);
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
}).join(",");

const NewOpeningBadge = () => (
  <div className="absolute -top-11 right-0 z-10 flex h-[88px] w-[88px] items-center justify-center lg:-top-[60px] lg:h-[120px] lg:w-[120px]">
    {/* Spinning scalloped shape */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 animate-[spin_12s_linear_infinite] bg-[#35251B] motion-reduce:animate-none"
      style={{ clipPath: `polygon(${SCALLOP_POLYGON})` }}
    />
    {/* Text stays upright */}
    <span className="relative text-center font-serif text-[13px] leading-[17px] text-white lg:text-[18px] lg:leading-[24px]">
      New
      <br />
      Opening
    </span>
  </div>
);

const InfoRow = ({ item }) => {
  const Icon = ICONS[item.type];

  return (
    <div className="flex items-start gap-4 lg:gap-5">
      <Icon
        size={22}
        weight="regular"
        className="mt-[3px] shrink-0 text-[#5E3A17]"
      />
      <div className="font-sans text-[15px] leading-[26px] text-[#7A7167] lg:text-[16px] lg:leading-[28px]">
        {item.label && (
          <p className="font-medium text-[#3B2A1C]">{item.label}</p>
        )}
        <p>{item.text}</p>
      </div>
    </div>
  );
};
const phoneNumber = "919328695463";

const message = encodeURIComponent(
  "Hello Tanishq Indian Vegetarian Restaurant! I would like to know more."
);

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const LocationButtons = ({ profileUrl }) => {
  const base =
    "inline-flex h-[52px] min-w-[150px] items-center justify-center rounded-full px-8 font-sans text-[15px] font-medium transition-colors duration-300 lg:h-[60px] lg:min-w-[180px] lg:text-[16px]";

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-9">
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#5E3A17] text-white hover:bg-[#4A2D11]`}
      >
        Get Directions
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className={`${base} border border-[#8C6A48] text-[#5E3A17] hover:bg-[#5E3A17] hover:text-white`}
      >
        Reserve Table
      </a>
    </div>
  );
};

const LocationRow = ({ location }) => {
  const {
    city,
    description,
    image,
    imageAlt,
    imagePosition,
    isNew,
    info,
    profileUrl
  } = location;

  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <div className="relative min-w-0">
      <div className="aspect-[1.4/1] overflow-hidden">
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
    <div className="flex min-w-0 flex-col justify-center text-left">
      <h3 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
        {city}
      </h3>

      <p className="mt-5 font-sans text-[16px] font-normal leading-[26px] text-[#7A7167] lg:text-[18px] lg:leading-[28px]">
        {description}
      </p>

      <div className="mt-7 flex flex-col gap-4 lg:mt-8 lg:gap-5">
        {info.map((item) => (
          <InfoRow key={item.type} item={item} />
        ))}
      </div>

      <LocationButtons profileUrl={profileUrl} />
    </div>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.31fr_1fr] md:gap-12 lg:gap-20">
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

const NearestLocations = () => {
  return (
    <section className="overflow-hidden bg-[#F5EEE4] px-5 py-14 sm:px-8 lg:px-0 lg:pb-20 lg:pt-20">
      <div className="mx-auto w-full max-w-[1400px] lg:px-14">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            Visit Your Nearest Tanishq
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] font-sans text-[16px] font-normal leading-[26px] text-[#7A7167] lg:text-[18px] lg:leading-[28px]">
            Discover our restaurants in Vietnam, where authentic Indian
            flavours, warm hospitality and a memorable dining experience await.
          </p>
        </div>

        {/* ROWS */}
        <div className="mt-12 space-y-20 sm:space-y-24 lg:mt-14 lg:space-y-[140px]">
          {locations.map((location) => (
            <LocationRow key={location.city} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearestLocations;