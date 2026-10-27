import { Link } from "react-router-dom";
import backgroundImage from "../../../../assets/HomepageBanner.png";

const HeroBanner = () => {
  return (
    <section
      className="
        relative isolate flex
        min-h-[600px]
        w-full
        items-center
        overflow-hidden
        bg-[#603912]
        sm:min-h-[680px]
        lg:min-h-[800px]
        xl:min-h-[900px]
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/35"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div
        className="
          relative mx-auto w-full max-w-[1440px]
          px-5 pb-12 pt-[170px]
          sm:px-8 sm:pb-16 sm:pt-[190px]
          md:px-10
          lg:px-12 lg:pb-10 lg:pt-[200px]
          xl:px-[64px]
        "
      >
        {/* Content Width */}
        <div className="w-full max-w-[750px]">
          {/* Heading */}
          <h1
            className="
              font-['Fraunces']
              text-[38px]
              font-semibold
              leading-[1.12]
              tracking-normal
              text-[#FFFCF7]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[66px]
              xl:text-[75px]
              xl:leading-[92px]
            "
          >
            A Taste of India,
            <br />
            Served with Heart.
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[540px]
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.6]
              text-[#FFFCF7]
              sm:text-[15px]
              md:text-[16px]
              md:leading-[24px]
            "
          >
            Discover the rich flavours of Indian vegetarian cuisine, from
            comforting regional classics to traditional Jain-friendly choices.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-5 flex flex-wrap items-center gap-3
              sm:gap-[10px]
            "
          >
            {/* Explore Our Menu */}
            <Link
              to="/menu"
              className="
                inline-flex min-h-[42px]
                items-center justify-center
                whitespace-nowrap
                rounded-full
                bg-[#FFFCF7]
                px-6 py-3
                font-['Work_Sans']
                text-[14px]
                font-medium
                leading-none
                text-[#603912]
                transition-colors duration-300
                hover:bg-[#F1D6A8]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:min-h-[48px]
                sm:px-[30px]
                sm:text-[15px]
              "
            >
              Explore Our Menu
            </Link>

            {/* Get Direction */}
            <a
              href="/contact#find-your-way"
              
              className="
                inline-flex min-h-[42px]
                items-center justify-center
                whitespace-nowrap
                rounded-full
                border border-white/60
                bg-transparent
                px-6 py-3
                font-['Work_Sans']
                text-[14px]
                font-medium
                leading-none
                text-white
                transition-colors duration-300
                hover:border-white
                hover:bg-white/10
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                sm:min-h-[48px]
                sm:px-[30px]
                sm:text-[15px]
              "
            >
              Get Direction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;