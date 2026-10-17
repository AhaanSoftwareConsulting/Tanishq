import React from "react";

// Dummy Unsplash Veg Restaurant Image (Apni caile assets folder-er image path ekhane import kore dite paren)
const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";

const AboutBanner = ({
  backgroundImage = defaultBackgroundImage,
  title = "Our Story & Tradition",
  description = "Serving authentic Indian vegetarian cuisine made with passion, fresh ingredients, and age-old family recipes in the heart of Ho Chi Minh City.",
}) => {
  return (
    <section
      className="
        relative isolate flex
        min-h-[400px]
        w-full
        items-center justify-center
        overflow-hidden
        bg-[#603912]
        sm:min-h-[480px]
        lg:min-h-[550px]
        xl:min-h-[600px]
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay for Text Readability */}
      <div
        className="absolute inset-0 -z-10 bg-black/75"
        aria-hidden="true"
      />

      {/* Hero / Banner Content Wrapper */}
      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-5 pb-12 pt-[140px]
          text-center
          sm:px-8 sm:pb-16 sm:pt-[160px]
          md:px-10
          lg:px-12 lg:pb-14 lg:pt-[180px]
          xl:px-[64px]
        "
      >
        {/* Centered Content Block */}
        <div className="mx-auto w-full max-w-[800px] flex flex-col items-center justify-center">
          
          {/* Main Heading */}
          <h1
            className="
              font-['Fraunces']
              text-[36px]
              font-semibold
              leading-[1.15]
              tracking-normal
              text-[#FFFCF7]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[62px]
              xl:text-[70px]
              xl:leading-[82px]
            "
          >
            {title}
          </h1>

          {/* Subtitle / Description Text */}
          <p
            className="
              mt-5
              max-w-[620px]
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.6]
              text-[#FFFCF7]/90
              sm:text-[16px]
              md:text-[18px]
              md:leading-[28px]
            "
          >
            {description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutBanner;