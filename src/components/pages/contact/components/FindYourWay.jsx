import React, { useState } from "react";
import { Sparkle } from "@phosphor-icons/react";

const branches = [
  {
    id: "hcm",
    label: "Ho Chi Minh City",
    mapQuery: "258 Lý Tự Trọng, Ho Chi Minh City",
  },
  {
    id: "danang",
    label: "Da Nang City",
    mapQuery: "Da Nang City, Vietnam", // TODO: replace with exact address when ready
  },
];

const getMapSrc = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

const BranchButton = ({ branch, isActive, onSelect }) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    onClick={() => onSelect(branch.id)}
    className={`cursor-pointer inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border px-7 font-sans text-[15px] font-medium transition-colors duration-300 lg:h-[60px] lg:min-w-[200px] lg:px-8 ${
      isActive
        ? "border-[#5E3A17] bg-[#5E3A17] text-white"
        : "border-[#8C6A48] bg-transparent text-[#5E3A17] hover:bg-[#5E3A17] hover:text-white"
    }`}
  >
    <Sparkle size={18} weight="fill" />
    {branch.label}
  </button>
);

 const FindYourWay = ({ id }) => {
  const [activeId, setActiveId] = useState(branches[0].id);
  const activeBranch = branches.find((b) => b.id === activeId);

  return (
    <section id={id} className="overflow-hidden bg-[#FFFAF2] px-5 py-14 sm:px-8 lg:px-0 lg:pb-20 lg:pt-20">
      <div className="mx-auto w-full max-w-[1400px] lg:px-14">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            Find Your Way To Tanishq
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] font-sans text-[16px] font-normal leading-[26px] text-[#7A7167] lg:text-[18px] lg:leading-[28px]">
            Select a branch to view the location on map and plan your visit.
          </p>
        </div>

        {/* BRANCH TOGGLE BUTTONS */}
        <div
          role="tablist"
          aria-label="Select a branch"
          className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:mt-8"
        >
          {branches.map((branch) => (
            <BranchButton
              key={branch.id}
              branch={branch}
              isActive={branch.id === activeId}
              onSelect={setActiveId}
            />
          ))}
        </div>

        {/* MAP */}
        <div className="mt-8 h-[320px] w-full overflow-hidden sm:h-[380px] lg:mt-10 lg:h-[435px]">
          <iframe
            key={activeBranch.id}
            title={`Tanishq ${activeBranch.label} location map`}
            src={getMapSrc(activeBranch.mapQuery)}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default FindYourWay;