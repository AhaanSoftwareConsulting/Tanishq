
import React from "react";
import { Link } from "react-router-dom";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const phone = "919328695463";

const contactCards = [
  {
    title: "Call Us",
    description: "Speak with our team for reservations or general inquiries.",
    buttonLabel: "Call Now",
    Icon: Phone,
    iconWeight: "fill",
    href: `tel:+${phone}`,
    mobileShare: true,
  },
  {
    title: "Email Us",
    description: "Drop us an email and we’ll get back to you soon.",
    buttonLabel: "Send an Email",
    Icon: EnvelopeSimple,
    iconWeight: "fill",
    href: "mailto:tanishqveg@gmail.com",
  },
  {
    title: "Visit Us",
    description: "Come and experience the authentic flavours of India.",
    buttonLabel: "View Locations",
    Icon: MapPin,
    iconWeight: "regular",
    to: "#find-your-way",
  },
];

const buttonClass =
  "inline-flex h-[62px] items-center justify-center rounded-full bg-[#5E3A17] px-8 font-sans text-[17px] font-medium text-white transition-colors duration-300 hover:bg-[#4A2D11]";

const ContactCard = ({ card }) => {
  const {
    title,
    description,
    buttonLabel,
    Icon,
    iconWeight,
    href,
    to,
    mobileShare,
  } = card;

  const handleContactClick = async () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (mobileShare && isMobile && navigator.share) {
      try {
        await navigator.share({
          title: "Contact Tanishq",
          text: "Contact Tanishq for reservations and inquiries:",
          url: `https://wa.me/${phone}`,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          window.location.href = href;
        }
      }
    } else {
      window.location.href = href;
    }
  };

  const handleLocationClick = (event) => {
    if (to === "#find-your-way") {
      event.preventDefault();

      document.getElementById("find-your-way")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", "#find-your-way");
    }
  };

  return (
    <div className="flex flex-col items-center rounded-[24px] border-2 border-[#EFE3D0] px-6 pb-6 pt-6 text-center">

      {/* ICON */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E0C0]">
        <Icon size={22} weight={iconWeight} className="text-[#5E3A17]" />
      </div>

      {/* TITLE */}
      <h3 className="mt-4 font-serif text-[28px] font-normal leading-[36px] text-[#5E3A17]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-1 max-w-[290px] font-sans text-[17px] font-normal leading-[28px] text-[#7A7167]">
        {description}
      </p>

      {/* BUTTON */}
      <div className="mt-5">
        {to ? (
          <Link
            to={to}
            className={buttonClass}
            onClick={handleLocationClick}
          >
            {buttonLabel}
          </Link>
        ) : mobileShare ? (
          <button
            type="button"
            onClick={handleContactClick}
            className={buttonClass}
          >
            {buttonLabel}
          </button>
        ) : (
          <a href={href} className={buttonClass}>
            {buttonLabel}
          </a>
        )}
      </div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <section className="bg-[#FFFAF2] px-5 py-14 sm:px-8 lg:pb-20 lg:pt-[70px]">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px]">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-5 max-w-[740px] font-sans text-[16px] font-normal leading-[26px] text-[#7A7167] lg:text-[18px] lg:leading-[28px]">
            At Tanishq, every dish carries the taste of India. Fresh spices,
            family recipes and a warm welcome, right here in Vietnam.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-[60px]">
          {contactCards.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;
