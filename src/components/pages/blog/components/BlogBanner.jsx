import React from "react";

// Dummy restaurant background image
const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85";

const BlogBanner = ({
  backgroundImage = defaultBackgroundImage,
  title = "Stories, Flavours & Inspiration",
  description = "Discover the stories behind our food, explore authentic Indian vegetarian cuisine, and find inspiration for your next memorable dining experience.",
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
        className="
          absolute inset-0 -z-20
          bg-cover bg-center bg-no-repeat
          transition-transform duration-700
          hover:scale-105
        "
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/65"
        aria-hidden="true"
      />

      {/* Subtle Bottom Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-t
          from-[#2F2116]/55
          via-transparent
          to-black/15
        "
        aria-hidden="true"
      />

      {/* Banner Content */}
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
        <div
          className="
            mx-auto flex w-full max-w-[850px]
            flex-col items-center justify-center
          "
        >

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
              xl:leading-[1.17]
            "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[650px]
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.8]
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

export default BlogBanner;

