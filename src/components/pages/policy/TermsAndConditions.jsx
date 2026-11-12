import React from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "website-usage", title: "Website Usage" },
  { id: "menu-pricing", title: "Menu, Food & Pricing Information" },
  { id: "reservations", title: "Reservations & Enquiries" },
  { id: "food-preferences", title: "Food Preferences & Special Requests" },
  { id: "offers", title: "Offers & Promotions" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "website-availability", title: "Website Accuracy & Availability" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "changes", title: "Changes to These Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Us" },
];

const SectionHeading = ({ number, children }) => (
  <div className="flex items-start gap-4 mb-5">
    <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#F5EDE3] text-[#603912] text-sm font-semibold">
      {number}
    </span>

    <h2 className="font-[Fraunces] text-2xl md:text-[27px] text-[#2F2116] leading-snug">
      {children}
    </h2>
  </div>
);

const ContactCard = ({ city, address, phone, mapLink }) => (
  <div className="bg-white border border-[#EAE0D5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-11 h-11 rounded-full bg-[#F5EDE3] flex items-center justify-center">
        <svg
          className="w-5 h-5 text-[#603912]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
          />
          <circle cx="12" cy="9" r="2.5" strokeWidth="1.6" />
        </svg>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[2px] text-[#A18A75]">
          Our Restaurant
        </p>
        <h3 className="font-[Fraunces] text-xl text-[#2F2116]">
          {city}
        </h3>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-wider text-[#A18A75] mb-1">
          Address
        </p>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#603912] leading-6 hover:underline"
        >
          {address}
        </a>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-[#A18A75] mb-1">
          Phone
        </p>

        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-sm text-[#603912] hover:underline"
        >
          {phone}
        </a>
      </div>
    </div>

    <a
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#603912] hover:gap-3 transition-all"
    >
      Get Directions
      <span>→</span>
    </a>
  </div>
);

const TermsAndConditions = () => {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#2F2116] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full border border-[#F5E6D3]" />
          <div className="absolute -top-20 -right-8 w-72 h-72 rounded-full border border-[#F5E6D3]" />
          <div className="absolute -bottom-48 -left-20 w-96 h-96 rounded-full border border-[#F5E6D3]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-40 text-center">

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#C9A77C]" />

            <span className="w-10 h-px bg-[#C9A77C]" />
          </div>

          <h1 className="font-[Fraunces] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Terms & Conditions
          </h1>

          <p className="text-[#E2D5C7] text-sm md:text-base max-w-2xl mx-auto mt-6 leading-7">
            Please take a moment to read our terms and conditions.
            Your use of our website signifies your agreement with
            the terms outlined below.
          </p>

          <div className="mt-9 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#8A705B] text-[#E2D5C7] text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
                strokeWidth="1.5"
              />
              <path
                d="M16 3v4M8 3v4M3 10h18"
                strokeWidth="1.5"
              />
            </svg>

            Last Updated: November 12, 2026
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 md:pt-20">

        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="text-[#A17B55] text-xs tracking-[3px] uppercase font-semibold">
            Important Information
          </span>

          <h2 className="font-[Fraunces] text-2xl md:text-3xl text-[#2F2116] mt-4 mb-5">
            Welcome to Tanishq Indian Restaurant
          </h2>

          <p className="text-[#75685D] text-sm md:text-base leading-8">
            Welcome to the official website of Tanishq Indian Restaurant.
            By accessing or using our website, you agree to the following
            Terms & Conditions. Please read them carefully before using
            our website or its services.
          </p>
        </div>

        {/* ================= CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 pb-20">

          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 lg:self-start">

            <div className="bg-white rounded-2xl border border-[#EAE0D5] p-6 shadow-sm">

              <h3 className="font-[Fraunces] text-xl text-[#2F2116] mb-2">
                In This Section
              </h3>

              <p className="text-xs text-[#A18A75] mb-5">
                Explore our terms and policies
              </p>

              <div className="w-full h-px bg-[#EAE0D5] mb-5" />

              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 py-2.5 text-sm text-[#77685B] hover:text-[#603912] transition-colors"
                  >
                    <span className="text-xs text-[#B49A7C] pt-0.5 min-w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="group-hover:translate-x-1 transition-transform">
                      {section.title}
                    </span>
                  </a>
                ))}
              </nav>

            </div>
          </aside>

          {/* TERMS CONTENT */}
          <div className="space-y-12 min-w-0">

            {/* 01 */}
            <section id="website-usage" className="scroll-mt-28">
              <SectionHeading number="01">
                Website Usage
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                This website is intended to provide information about
                Tanishq Indian Restaurant, including our menu, locations,
                services, contact details, and promotional offers. You
                agree to use this website only for lawful purposes and
                in a way that does not affect its availability or
                functionality.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 02 */}
            <section id="menu-pricing" className="scroll-mt-28">
              <SectionHeading number="02">
                Menu, Food & Pricing Information
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                We make reasonable efforts to ensure that the menu
                descriptions, food images, prices, and other information
                displayed on our website are accurate and up to date.
              </p>

              <ul className="space-y-3">
                {[
                  "Menu items and availability may vary by restaurant location.",
                  "Prices, ingredients, and menu offerings may change without prior notice.",
                  "Food images are for illustrative purposes and may differ from actual presentation.",
                  "Please contact the respective branch for the latest menu and pricing information.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm md:text-base text-[#75685D] leading-7">
                    <span className="text-[#A17B55] mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 03 */}
            <section id="reservations" className="scroll-mt-28">
              <SectionHeading number="03">
                Reservations & Enquiries
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                Customers may contact us through the website, telephone,
                or other available communication channels to enquire
                about table reservations and restaurant services.
              </p>

              <ul className="space-y-3">
                {[
                  "Reservation requests are subject to availability and confirmation by the restaurant.",
                  "Submitting an enquiry does not automatically guarantee a reservation.",
                  "Customers are encouraged to provide accurate contact information.",
                  "Any changes or cancellations should be communicated to the respective restaurant in advance.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm md:text-base text-[#75685D] leading-7">
                    <span className="text-[#A17B55] mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 04 */}
            <section id="food-preferences" className="scroll-mt-28">
              <SectionHeading number="04">
                Food Preferences & Special Requests
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Tanishq Indian Restaurant offers vegetarian Indian cuisine
                and special Jain food options.
                <br /><br />
                Customers with specific dietary requirements, food
                allergies, or ingredient-related concerns should inform
                our staff before placing an order. Please contact the
                restaurant directly to confirm ingredient details and
                food preparation requirements.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 05 */}
            <section id="offers" className="scroll-mt-28">
              <SectionHeading number="05">
                Offers & Promotions
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                Promotional offers, discounts, and special deals may be
                available from time to time.
              </p>

              <ul className="space-y-3">
                {[
                  "Offers are subject to their respective terms and validity periods.",
                  "Some promotions may be available only at selected branches.",
                  "Offers cannot be combined unless explicitly stated.",
                  "Tanishq reserves the right to modify or discontinue promotions where permitted by applicable law.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm md:text-base text-[#75685D] leading-7">
                    <span className="text-[#A17B55] mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 06 */}
            <section id="intellectual-property" className="scroll-mt-28">
              <SectionHeading number="06">
                Intellectual Property
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                All content displayed on this website, including text,
                images, graphics, logos, designs, and other materials,
                belongs to Tanishq Indian Restaurant or its respective
                content owners, unless otherwise stated.
                <br /><br />
                You may not reproduce, distribute, modify, or commercially
                use website content without prior written permission.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 07 */}
            <section id="third-party-links" className="scroll-mt-28">
              <SectionHeading number="07">
                Third-Party Links
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Our website may contain links to third-party platforms,
                including social media pages and external services.
                These websites operate independently and may have their
                own terms and privacy policies.
                <br /><br />
                Tanishq Indian Restaurant is not responsible for the
                content, availability, or privacy practices of external
                websites.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 08 */}
            <section id="website-availability" className="scroll-mt-28">
              <SectionHeading number="08">
                Website Accuracy & Availability
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                We aim to keep our website accessible and information
                accurate. However, occasional technical issues,
                maintenance, or updates may temporarily affect website
                availability.
                <br /><br />
                We reserve the right to update, modify, or remove website
                content when necessary.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 09 */}
            <section id="liability" className="scroll-mt-28">
              <SectionHeading number="09">
                Limitation of Liability
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                To the extent permitted by applicable law, Tanishq Indian
                Restaurant shall not be responsible for losses arising
                from temporary website interruptions, inaccuracies in
                information, or the use of third-party websites.
                <br /><br />
                Nothing in these Terms & Conditions excludes any rights
                or responsibilities that cannot legally be excluded
                under applicable law.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 10 */}
            <section id="changes" className="scroll-mt-28">
              <SectionHeading number="10">
                Changes to These Terms
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Tanishq Indian Restaurant may update these Terms &
                Conditions from time to time. Any changes will be
                published on this page with an updated revision date.
                <br /><br />
                We encourage visitors to review this page periodically.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 11 */}
            <section id="governing-law" className="scroll-mt-28">
              <SectionHeading number="11">
                Governing Law
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                These Terms & Conditions are intended to be governed by
                the applicable laws and regulations of Vietnam. Any
                disputes will be handled in accordance with applicable
                Vietnamese law.
              </p>
            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 12 */}
            <section id="contact" className="scroll-mt-28">
              <SectionHeading number="12">
                Contact Us
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-8">
                If you have any questions about these Terms & Conditions,
                please feel free to contact us. Our team will be happy
                to assist you.
              </p>

              <h3 className="font-[Fraunces] text-2xl text-[#2F2116] mb-6">
                Tanishq Indian Restaurant
              </h3>

              {/* BRANCH CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <ContactCard
                  city="Ho Chi Minh City"
                  address="258 Ly Tu Trong, Ben Thanh Ward, Ho Chi Minh City, Vietnam"
                  phone="+84 77 501 9036"
                  mapLink="https://www.google.com/search?sca_esv=a6b1ccf14cf58966&rlz=1CAZYBT_enIN1200&sxsrf=APpeQnuo11cBEm5qL-YUXXGeXEzlgikaMg:1793094502085&q=tanishq+restaurant+vietnam&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_1S3GLULh7oSgEsRKsVmI_G6E5lI2-gyELhFZJek3Go3d1BtT6mXpaPoZiMZkPpMwp0xhOP5dXayfck9NHaWINVSgS_feJldgOJcbT3PePqG-0O0mCP8br0w0tTwgGokOkT2WhI%3D&sa=X&ved=2ahUKEwiSp-HG9dmXAxU2T2wGHagnPHEQrrQLegQIIBAA&biw=1200&bih=581&dpr=1.6"
                />

                <ContactCard
                  city="Da Nang City"
                  address="46 Phan Ton, Ngu Hanh Son Ward, Da Nang, Vietnam"
                  phone="+84 702 985 336"
                  mapLink="https://www.google.com/search?q=tanishq+indian+vegetarian+restaurant+Da+nang&sca_esv=a6b1ccf14cf58966&rlz=1CAZYBT_enIN1200&biw=1200&bih=581&sxsrf=APpeQnuADjNwCuVhgdEox-JqsfeXpSTkpg%3A1793094619905&ei=23Pgav7mNpigseMP6ZPWuQQ&uact=5&oq=tanishq+indian+vegetarian+restaurant+Da+nang&gs_lp=Egxnd3Mtd2l6LXNlcnAiLHRhbmlzaHEgaW5kaWFuIHZlZ2V0YXJpYW4gcmVzdGF1cmFudCBEYSBuYW5nMgQQIxgnMggQABiABBiiBDIFEAAY7wVIlAVQrgNYrgNwAXgBkAEAmAHUAaAB1AGqAQMyLTG4AQPIAQD4AQGYAgKgAvEBwgIKEAAYRxjWBBiwA8ICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBmAMAiAYBkAYKugYECAEYGZIHBTEuMC4xoAe6A7IHAzItMbgH3wHCBwUyLTEuMcgHE4AIAQ&sclient=gws-wiz-serp#lrd="
                />

              </div>

              {/* EMAIL */}
              <div className="mt-6 bg-[#F2EBE2] rounded-2xl p-6">

                <p className="text-xs uppercase tracking-[2px] text-[#A18A75] mb-2">
                  Email Enquiries
                </p>

                <a
                  href="mailto:tanishqveg@gmail.com"
                  className="font-[Fraunces] text-xl md:text-2xl text-[#603912] hover:text-[#2F2116] transition-colors break-all"
                >
                  tanishqveg@gmail.com
                </a>

                <div className="mt-4 pt-4 border-t border-[#DCCBBB]">
                  <p className="text-xs text-[#A18A75] mb-1">
                    Official Website
                  </p>

                  <a
                    href="https://tanishqindianrestaurant.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#603912] hover:underline break-all"
                  >
                    tanishqindianrestaurant.com
                  </a>
                </div>

              </div>

            </section>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#F0E8DE]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 text-center">

          <span className="text-[#A17B55] text-xs tracking-[3px] uppercase font-semibold">
            We Look Forward To Seeing You
          </span>

          <h2 className="font-[Fraunces] text-3xl md:text-5xl text-[#2F2116] mt-5 leading-tight">
            Thank You for Choosing Tanishq
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#75685D] leading-8 mt-5">
            Thank you for visiting Tanishq Indian Restaurant.
            We look forward to welcoming you and sharing an
            unforgettable vegetarian dining experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">

            <Link
              to="/menu"
              className="px-8 py-4 bg-[#603912] text-white text-sm font-medium rounded-full hover:bg-[#2F2116] transition-all duration-300"
            >
              Explore Our Menu
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border border-[#603912] text-[#603912] text-sm font-medium rounded-full hover:bg-[#603912] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default TermsAndConditions;
