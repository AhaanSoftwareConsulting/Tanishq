import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import DaNangRestaurant from "../../../../assets/da-nang-restaurant.jpeg";
import DaNangRestaurant2 from "../../../../assets/da-nang-restaurant-2.jpeg";
const NewOpening = () => {
  return (
    <section className="overflow-hidden bg-[#F8ECDD] px-5 py-14 sm:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">

            <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
              New Opening
            </h2>

            <p className="mt-3 text-lg text-[#6D472B] sm:text-xl font-['Fraunces']">
              Da Nang City, Vietnam
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#88796B] sm:text-[16px] font-['Work_Sans']">
              Our love for Indian cuisine is travelling to Da Nang.
              Join us for comforting classics, aromatic spices, and
              memorable dining moments made to be shared.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-[#694018] px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#4D2D13]"
              >
                Check Menu

                <ArrowUpRight
                  size={15}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#B99A79] px-5 py-3 text-xs font-medium text-[#694018] transition-all duration-300 hover:bg-[#694018] hover:text-white"
              >
                Reserve Table

                <ArrowUpRight
                  size={15}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="order-1 min-w-0 md:order-2">

            <div className="relative">

              {/* Main Restaurant Image */}
              <div className="relative aspect-[1.22/1] overflow-hidden sm:aspect-[1.3/1]">

                <img
                  src={DaNangRestaurant}
                  alt="Indian restaurant in Da Nang, Vietnam"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* NEW OPENING BADGE CONTAINER */}
              <div className="absolute -right-2 -top-4 z-10 sm:-right-3 sm:-top-5">
                
                {/* 1. Rotating Chorka (Background Star Shape spins fast) */}
                <div 
                  className="flex h-[76px] w-[76px] items-center justify-center bg-[#35251B] sm:h-[88px] sm:w-[88px] animate-[spin_8s_linear_infinite]"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 61% 8%, 75% 4%, 81% 17%, 95% 22%, 92% 36%, 100% 50%, 92% 62%, 96% 77%, 81% 82%, 75% 96%, 61% 92%, 50% 100%, 39% 92%, 25% 96%, 19% 82%, 5% 77%, 8% 62%, 0% 50%, 8% 36%, 4% 22%, 19% 17%, 25% 4%, 39% 8%)",
                  }}
                ></div>

                {/* 2. Static Text (Stays completely fixed in place) */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white pointer-events-none">
                  <span className="font-['Work_Sans'] text-[13px] font-semibold leading-4 sm:text-xs">
                    New
                    <br />
                    Opening
                  </span>
                </div>

              </div>

              {/* BOTTOM CAPTION */}
              <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4">

                <p className="flex-1 pl-1 font-serif text-xl italic leading-6 text-[#A68A6D] sm:text-2xl" style={{ fontFamily: "'Rustic Roadway - Personal use', cursive, sans-serif" }}>
                  A New Home for Indian Flavours
                  <br />
                  <span className="text-lg sm:text-xl">
                    Da Nang, Vietnam.
                  </span>
                </p>

                {/* Small Food Image Placeholder */}
                <div className="relative -mt-10 w-[105px] shrink-0 rotate-[5deg] border-[4px] border-white bg-white shadow-md sm:-mt-12 sm:w-[125px]">

                  <img
                    src={DaNangRestaurant2}
                    alt="Indian cuisine"
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NewOpening;