import React from "react";

// Dummy restaurant background image
const defaultBackgroundImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85";

const BlogDetailsBanner = ({
  backgroundImage = defaultBackgroundImage,
  title = "Flavors Beyond Imagination",
  description = "Discover the inspiration, ingredients, and culinary traditions behind our most memorable dining experiences.",
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

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-t
          from-[#2F2116]/60
          via-transparent
          to-black/20
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
          {/* Decorative Label */}
          <span
            className="
              mb-5 inline-block
              rounded-full
              border border-white/35
              bg-white/10
              px-5 py-2
              font-['Work_Sans']
              text-xs font-medium
              uppercase tracking-[0.22em]
              text-[#FFFCF7]
              backdrop-blur-md
              sm:text-sm
            "
          >
            Our Journal
          </span>

          {/* Blog Title */}
          <h1
            className="
              font-['Fraunces']
              text-[36px]
              font-semibold
              leading-[1.15]
              tracking-normal
              text-[#FFFCF7]
              drop-shadow-lg
              sm:text-[46px]
              md:text-[54px]
              lg:text-[62px]
              xl:text-[70px]
              xl:leading-[1.17]
            "
          >
            {title}
          </h1>

          {/* Blog Description */}
          {description && (
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
          )}

          {/* Decorative Divider */}
          <div
            className="
              mt-8 h-[2px] w-20
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-[#E8C6A1]
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsBanner;

