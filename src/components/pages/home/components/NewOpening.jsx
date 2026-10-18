import React from "react";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

// Import image from assets folder
import DaNangRestaurant from "../../../../assets/da-nang-restaurant.jpg";

const NewOpening = () => {
  return (
    <section className="bg-[#F7ECDD] px-4 py-14 sm:px-6 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-center md:mb-12">
          <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-[0.3em] text-[#98643D] sm:text-xs">
            A New Chapter Begins
          </span>

          <h2 className="font-serif text-3xl font-semibold text-[#432819] sm:text-4xl md:text-5xl">
            New Opening
          </h2>


          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#735D4D] sm:text-base">
            Bringing the authentic taste of India to a new destination.
            Discover our newest restaurant in Da Nang and experience
            the warmth, flavours, and hospitality you love.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid overflow-hidden rounded-sm bg-[#A56839] md:grid-cols-2">

          {/* Restaurant Image */}
          <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[380px] md:min-h-[460px]">
            <img
              src={DaNangRestaurant}
              alt="Tanishq Indian Restaurant in Da Nang"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#24150D]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                <MapPin size={16} weight="fill" />
                Da Nang, Vietnam
              </div>

              <h3 className="font-serif text-2xl font-medium sm:text-3xl">
                A New Home for
                <br />
                Indian Flavours
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-10 text-center sm:px-10 sm:py-14 md:px-12 lg:px-16">

            <span className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#F4D9B5] sm:text-xs">
              Now Welcoming You
            </span>

            <h3 className="font-serif text-3xl leading-tight text-[#FFF7EB] sm:text-4xl lg:text-5xl">
              Namaste,
              <br />
              Da Nang!
            </h3>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#F8E8D6] sm:text-base">
              Our love for Indian cuisine is travelling to Da Nang.
              Join us for comforting classics, aromatic spices, and
              memorable dining moments made to be shared.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F8ECDD] px-6 py-3 text-xs font-semibold tracking-wide text-[#432819] transition-colors duration-300 hover:bg-white sm:text-sm"
              >
                Check Menu

                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#F8ECDD]/70 px-6 py-3 text-xs font-semibold tracking-wide text-[#FFF7EB] transition-colors duration-300 hover:bg-[#F8ECDD] hover:text-[#432819] sm:text-sm"
              >
                Reserve Table

                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

            <p className="mt-7 text-[10px] tracking-[0.15em] text-[#F4D9B5] sm:text-xs">
              AUTHENTIC INDIAN CUISINE · HEARTFELT HOSPITALITY
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOpening;