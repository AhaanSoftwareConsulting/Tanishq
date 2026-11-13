import React from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "information-collect", title: "Information We Collect" },
  { id: "information-use", title: "How We Use Your Information" },
  { id: "information-protect", title: "How We Protect Your Information" },
  { id: "sharing-information", title: "Sharing of Information" },
  { id: "cookies", title: "Cookies and Website Technologies" },
  { id: "third-party", title: "Third-Party Websites" },
  { id: "privacy-rights", title: "Your Privacy Rights" },
  { id: "data-retention", title: "Data Retention" },
  { id: "children-privacy", title: "Children's Privacy" },
  { id: "policy-changes", title: "Changes to This Privacy Policy" },
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

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li
        key={index}
        className="flex items-start gap-3 text-sm md:text-base text-[#75685D] leading-7"
      >
        <span className="text-[#A17B55] mt-1">✦</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// ================= CONTACT CARD =================

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

        {/* ADDRESS GOOGLE MAPS LINK */}
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
      href="/contact"
      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#603912] hover:gap-3 transition-all"
    >
      Contact Branch
      <span>→</span>
    </a>
  </div>
);

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p className="text-[#E2D5C7] text-sm md:text-base max-w-2xl mx-auto mt-6 leading-7">
            Your privacy matters to us. Learn how we collect,
            use and protect your personal information when
            you interact with Tanishq Indian Restaurant.
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

            Last Updated: November 13, 2026

          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 md:pt-20">

        <div className="max-w-4xl mx-auto text-center mb-14">

          <span className="text-[#A17B55] text-xs tracking-[3px] uppercase font-semibold">
            Your Privacy Matters
          </span>

          <h2 className="font-[Fraunces] text-2xl md:text-3xl text-[#2F2116] mt-4 mb-5">
            Your Trust Is Our Priority
          </h2>

          <p className="text-[#75685D] text-sm md:text-base leading-8">
            At Tanishq Indian Restaurant, we respect your privacy
            and value your trust. This Privacy Policy explains how
            we collect, use and protect your personal information
            when you visit our website, contact us or make a
            reservation enquiry.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 pb-20">

          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 lg:self-start">

            <div className="bg-white rounded-2xl border border-[#EAE0D5] p-6 shadow-sm">

              <h3 className="font-[Fraunces] text-xl text-[#2F2116] mb-2">
                In This Section
              </h3>

              <p className="text-xs text-[#A18A75] mb-5">
                Explore our privacy policies
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

          {/* PRIVACY POLICY CONTENT */}
          <div className="space-y-12 min-w-0">

            {/* 01 */}
            <section id="information-collect" className="scroll-mt-28">

              <SectionHeading number="01">
                Information We Collect
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                When you use our website or contact us, we may
                collect the following information:
              </p>

              <BulletList
                items={[
                  "Name and contact details, such as phone number and email address.",
                  "Information submitted through reservation or enquiry forms.",
                  "Your preferred restaurant location and reservation details.",
                  "Messages, feedback or other information you voluntarily share with us.",
                  "Basic website usage information, such as browser type, device information and pages visited.",
                ]}
              />

              <p className="text-[#75685D] text-sm md:text-base leading-8 mt-5">
                We only collect information that is reasonably
                necessary to respond to your requests and improve
                our services.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 02 */}
            <section id="information-use" className="scroll-mt-28">

              <SectionHeading number="02">
                How We Use Your Information
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                The information we collect may be used to:
              </p>

              <BulletList
                items={[
                  "Respond to your enquiries and reservation requests.",
                  "Contact you regarding your preferred restaurant location.",
                  "Provide information about our menu, food options and services.",
                  "Improve our website and customer experience.",
                  "Share updates, offers or promotions where permitted and where you have agreed to receive them.",
                  "Maintain website security and prevent misuse.",
                ]}
              />

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 03 */}
            <section id="information-protect" className="scroll-mt-28">

              <SectionHeading number="03">
                How We Protect Your Information
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                We take reasonable steps to protect your personal
                information against unauthorized access, misuse,
                loss or disclosure.
                <br /><br />

                Access to customer information is limited to
                authorized personnel and service providers who
                need it to support our restaurant operations.
                <br /><br />

                However, no online system or method of data
                transmission can be guaranteed to be completely
                secure.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 04 */}
            <section id="sharing-information" className="scroll-mt-28">

              <SectionHeading number="04">
                Sharing of Information
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                We do not sell or rent your personal information
                to third parties.
                <br /><br />

                Your information may be shared with trusted
                service providers when necessary to operate our
                website, manage enquiries, support communications
                or provide our services.
                <br /><br />

                We may also disclose information when required
                by applicable laws or lawful requests from
                relevant authorities.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 05 */}
            <section id="cookies" className="scroll-mt-28">

              <SectionHeading number="05">
                Cookies and Website Technologies
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Our website may use cookies or similar technologies
                to improve browsing, understand website usage and
                enhance user experience.
                <br /><br />

                These technologies may help us understand visitor
                preferences and website performance.
                <br /><br />

                You can manage or disable cookies through your
                browser settings. Some website features may not
                function properly if cookies are disabled.
                <br /><br />

                If analytics, advertising or social media tracking
                tools are used, their use will be subject to
                applicable privacy requirements and relevant
                consent choices.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 06 */}
            <section id="third-party" className="scroll-mt-28">

              <SectionHeading number="06">
                Third-Party Websites
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Our website may contain links to external platforms,
                including Facebook, Instagram, Google Maps and
                other third-party websites.
                <br /><br />

                These platforms have their own privacy policies
                and practices. We are not responsible for how
                external websites collect or use your information.
                <br /><br />

                We recommend reviewing their privacy policies
                before sharing personal information with them.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 07 */}
            <section id="privacy-rights" className="scroll-mt-28">

              <SectionHeading number="07">
                Your Privacy Rights
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-5">
                You may contact us to:
              </p>

              <BulletList
                items={[
                  "Request access to your personal information.",
                  "Ask us to correct inaccurate information.",
                  "Request deletion of your information where applicable.",
                  "Withdraw consent for certain uses of your information.",
                  "Ask questions about how your information is collected and used.",
                ]}
              />

              <p className="text-[#75685D] text-sm md:text-base leading-8 mt-5">
                We will review and respond to reasonable requests
                in accordance with applicable laws.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 08 */}
            <section id="data-retention" className="scroll-mt-28">

              <SectionHeading number="08">
                Data Retention
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                We retain personal information only for as long
                as reasonably necessary to respond to enquiries,
                manage reservations, provide our services and
                meet applicable legal requirements.
                <br /><br />

                When information is no longer required, we take
                reasonable steps to delete or securely dispose
                of it.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 09 */}
            <section id="children-privacy" className="scroll-mt-28">

              <SectionHeading number="09">
                Children's Privacy
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                Our website is intended for general audiences.
                We do not knowingly collect personal information
                from children without appropriate authorization
                where required by applicable law.
                <br /><br />

                If you believe a child has provided personal
                information to us inappropriately, please contact
                us so we can review the matter.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 10 */}
            <section id="policy-changes" className="scroll-mt-28">

              <SectionHeading number="10">
                Changes to This Privacy Policy
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8">
                We may update this Privacy Policy from time to
                time to reflect changes in our website, services
                or applicable requirements.
                <br /><br />

                Any updates will be published on this page
                along with the revised date.
              </p>

            </section>

            <div className="border-b border-[#EAE0D5]" />

            {/* 11 */}
            <section id="contact" className="scroll-mt-28">

              <SectionHeading number="11">
                Contact Us
              </SectionHeading>

              <p className="text-[#75685D] text-sm md:text-base leading-8 mb-8">
                If you have any questions, concerns or requests
                regarding this Privacy Policy, please contact us.
                Our team will be happy to assist you.
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
                  mapLink="https://maps.app.goo.gl/g1FdKeZTuikwJbwy7"
                />

                <ContactCard
                  city="Da Nang City"
                  address="46 Phan Ton, Ngu Hanh Son Ward, Da Nang, Vietnam"
                  phone="+84 702 985 336"
                  mapLink="https://maps.app.goo.gl/rVxTteC3uZE2htiC8"
                />

              </div>

              {/* EMAIL & WEBSITE */}
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
            Your Trust Means Everything
          </span>

          <h2 className="font-[Fraunces] text-3xl md:text-5xl text-[#2F2116] mt-5 leading-tight">
            Thank You for Trusting Tanishq
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-[#75685D] leading-8 mt-5">
            Your trust and confidence mean a lot to us.
            We are committed to respecting your privacy
            while delivering a memorable vegetarian
            dining experience.
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

export default PrivacyPolicy;
