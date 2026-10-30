import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FacebookLogo, InstagramLogo, CaretRight } from "@phosphor-icons/react";
import { WhatsappLogo, ChatCircleDots, PhoneCall } from "@phosphor-icons/react";

import logo from "../../../assets/CompanyLogo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Blog", path: "/blog" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setSubmitMessage("");

    try {
      console.log("Newsletter subscription:", data);
      setSubmitMessage("Thank you for subscribing!");
      reset();
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  const shops = [
    {
      id: "hcm",
      address: "258 Lý Tự Trọng, Bến Thành, Hồ Chí Minh 700000, Vietnam",
      mapLink: "https://maps.app.goo.gl/g1FdKeZTuikwJbwy7",
    },
    {
      id: "danang",
      address: "46 Phan Tôn, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
      mapLink: "https://maps.app.goo.gl/rVxTteC3uZE2htiC8",
    },
  ];

  return (
    <footer className="w-full bg-[#2F2116]">
      {/* Main Footer Content: Maximum Width 1400px */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          gap-10
          px-5
          pb-16
          pt-12
          sm:px-8
          md:grid-cols-2
          md:gap-x-12
          md:gap-y-12
          md:pb-20
          md:pt-14
          lg:grid-cols-[1fr_1.15fr_1fr]
          lg:gap-x-16
          lg:px-12
          lg:pb-[140px]
          lg:pt-[68px]
          xl:px-[16px]
        "
      >
        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3
            className="
              inline-block
              border-b border-white/40
              pb-[7px]
              font-['Fraunces']
              text-[18px]
              font-semibold
              leading-[1.3]
              text-[#FFFCF7]
            "
          >
            Quick Links
          </h3>

          <nav
            aria-label="Footer navigation"
            className="mt-6 flex flex-col items-start gap-[27px]"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                  font-['Work_Sans']
                  text-[15px]
                  leading-[0.8]
                  text-[#F5EDE3]
                  transition-colors duration-300
                  hover:text-[#D8AE70]
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-10">
          {/* Contact Us */}
          <div className="flex flex-col items-start">
            {" "}
            <h3 className=" inline-block min-w-[162px] border-b border-white/40 pb-[7px] font-['Fraunces'] text-[18px] font-semibold leading-[1.3] text-[#FFFCF7] ">
              {" "}
              Contact Us{" "}
            </h3>{" "}
            {/* WhatsApp */}{" "}
            <a
              href="https://wa.me/919328695463"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-5 flex items-center gap-3 font-['Work_Sans'] text-[16px] font-medium leading-[1.5] text-[#F5EDE3] transition-colors duration-300 hover:text-[#D8AE70] "
            >
              {" "}
              <WhatsappLogo size={21} weight="regular" />{" "}
              <span>+91 93286 95463</span>{" "}
            </a>{" "}
            {/* Zalo */}{" "}
            <a
              href="https://zalo.me/919328695463"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-5 flex items-center gap-3 font-['Work_Sans'] text-[16px] font-medium leading-[1.5] text-[#F5EDE3] transition-colors duration-300 hover:text-[#D8AE70] "
            >
              {" "}
              <ChatCircleDots size={21} weight="regular" />{" "}
              <span>+91 93286 95463</span>{" "}
            </a>{" "}
            {/* Viber */}{" "}
            <a
              href="viber://chat?number=%2B919328695463"
              className=" mt-5 flex items-center gap-3 font-['Work_Sans'] text-[16px] font-medium leading-[1.5] text-[#F5EDE3] transition-colors duration-300 hover:text-[#D8AE70] "
            >
              {" "}
              <PhoneCall size={21} weight="regular" />{" "}
              <span>+91 93286 95463</span>{" "}
            </a>{" "}
          </div>

          {/* Shop Location */}
          {/* Shop Location */}
          {/* <div className="flex flex-col items-start">
            <h3
              className="
      inline-block
      min-w-[255px]
      border-b border-white/40
      pb-[7px]
      font-['Fraunces']
      text-[18px]
      font-semibold
      leading-[1.3]
      text-[#FFFCF7]
    "
            >
              Shop Location
            </h3>

            <div className="mt-3 flex flex-col gap-5">
              {shops.map((shop) => (
                <a
                  key={shop.id}
                  href={shop.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          max-w-[280px]
          font-['Work_Sans']
          text-[15px]
          leading-[1.9]
          text-[#D6C9BA]
          transition-colors duration-300
          hover:text-white
        "
                >
                  {shop.address}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Newsletter */}
        <div className="flex w-full flex-col items-start">
           <h3
              className="
      inline-block
      min-w-[255px]
      border-b border-white/40
      pb-[7px]
      font-['Fraunces']
      text-[18px]
      font-semibold
      leading-[1.3]
      text-[#FFFCF7]
    "
            >
              Shop Location
            </h3>

            <div className="mt-3 flex flex-col gap-5">
              {shops.map((shop) => (
                <a
                  key={shop.id}
                  href={shop.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          max-w-[280px]
          font-['Work_Sans']
          text-[15px]
          leading-[1.9]
          text-[#D6C9BA]
          transition-colors duration-300
          hover:text-white
        "
                >
                  {shop.address}
                </a>
              ))}
            </div>
          </div>
      </div>

      {/* Bottom Bar: Full Viewport Width */}
      <div className="relative w-full bg-[#603912]">
        {/* Centered Inner Content with max-w-[1400px] */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[104px]
            w-full
            max-w-[1400px]
            flex-col
            items-center
            justify-center
            gap-5
            px-5
            py-6
            sm:px-8
            md:min-h-[104px]
            md:flex-row
            md:justify-between
            md:gap-4
            md:py-5
            lg:px-12
            xl:px-[16px]
          "
        >
          {/* Copyright */}
          <p
            className="
              order-2
              text-center
              font-['Work_Sans']
              text-[12px]
              leading-[1.8]
              text-[#F5EDE3]
              sm:text-[14px]
              md:order-1
              md:max-w-[45%]
              md:text-left
            "
          >
            © {new Date().getFullYear()} Tanishq Indian Vegetarian Restaurant.
            All rights reserved.
          </p>

          {/* Center Logo */}
          <Link
            to="/"
            aria-label="Tanishq Home"
            className="
              relative
              z-10
              order-1
              flex
              h-[110px]
              w-[110px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#603912]
              p-[10px]
              transition-transform duration-300
              hover:scale-[1.03]
              md:absolute
              md:left-1/2
              md:top-0
              md:order-none
              md:-translate-x-1/2
              md:-translate-y-1/2
              md:hover:-translate-x-1/2
              md:hover:-translate-y-1/2
              lg:h-[160px]
              lg:w-[160px]
              lg:p-[16px]
            "
          >
            <img
              src={logo}
              alt="Tanishq Indian Vegetarian Restaurant"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* Social Links */}
          <div
            className="
              order-3
              flex
              items-center
              justify-center
              gap-3
              md:ml-auto
            "
          >
            <a
              href="https://www.facebook.com/tanishqvegrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex h-[44px] w-[44px]
                items-center justify-center
                rounded-full
                border border-white/60
                text-white
                transition-all duration-300
                hover:border-[#D8AE70]
                hover:bg-[#D8AE70]
                hover:text-[#603912]
                sm:h-[48px] sm:w-[48px]
              "
            >
              <FacebookLogo size={22} weight="regular" />
            </a>

            <a
              href="https://www.instagram.com/tanishq_indian_veg_restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex h-[44px] w-[44px]
                items-center justify-center
                rounded-full
                border border-white/60
                text-white
                transition-all duration-300
                hover:border-[#D8AE70]
                hover:bg-[#D8AE70]
                hover:text-[#603912]
                sm:h-[48px] sm:w-[48px]
              "
            >
              <InstagramLogo size={22} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
