import React, { useState } from "react";
import { Sparkle } from "@phosphor-icons/react";

const branches = [
  {
    id: "hcm",
    label: "Ho Chi Minh City",
    mapQuery: "10.7719456,106.6939273",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.0309!2d106.6939273!3d10.7719456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f005cdd2991%3A0x5e8b095e1f1ff220!2sTanishq%20Indian%20Vegetarian%20Restaurant!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    mapLink: "https://maps.app.goo.gl/SpY3WLFAzeKVkNDi7",
  },
  {
    id: "danang",
    label: "Da Nang City",
    mapQuery: "16.0525833,108.2451733",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2485!2d108.2451733!3d16.0525833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177869fd16cd%3A0x1178c69997389d2b!2sTanishq%20Indian%20Vegetarian%20Restaurant%20Da%20Nang!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
    mapLink: "https://maps.app.goo.gl/7QwJB9d7Yjo3nQDy9",
  },
];

// Uses the official embed if available, otherwise falls back to the coordinates
const getMapSrc = (branch) =>
  branch.embedUrl ||
  `https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&z=17&hl=en&output=embed`;

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

const FindYourWay = () => {
  const [activeId, setActiveId] = useState(branches[0].id);
  const activeBranch = branches.find((b) => b.id === activeId);

  return (
    <section className="overflow-hidden bg-[#FFFAF2] px-5 py-14 sm:px-8 lg:px-0 lg:pb-20 lg:pt-20">
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
            src={getMapSrc(activeBranch)}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* OPEN IN GOOGLE MAPS LINK */}
        <div className="mt-6 text-center">
          <a
            href={activeBranch.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-full bg-[#5E3A17] px-7 py-3 font-sans text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#472a12]"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindYourWay;