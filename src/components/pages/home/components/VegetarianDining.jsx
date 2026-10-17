import React from "react";
import diningImage from "../../../../assets/VegetarianDining.jpg";

const VegetarianDining = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FFFBF3]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]
          grid-cols-1
          gap-8
          px-5
          py-12
          sm:px-8
          sm:py-14
          lg:grid-cols-[1.15fr_0.85fr]
          lg:items-start
          lg:gap-x-[60px]
          lg:px-[55px]
          lg:py-[70px]
          xl:gap-x-[70px]
          xl:px-[55px]
          2xl:gap-x-[80px]
        "
      >
        {/* LEFT SIDE — FOOD IMAGE */}
        <div
          className="
            flex
            w-full
            items-center
            lg:mt-[120px]
          "
        >
          <img
            src={diningImage}
            alt="Authentic Indian vegetarian thali"
            className="
              block
              aspect-[1.42/1]
              h-auto
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div
          className="
            flex
            w-full
            flex-col
            items-stretch
            text-right
          "
        >
          {/* Heading */}
          <h2
            className="
              mb-5
              w-full
              text-right
              font-['Fraunces']
              text-[32px]
              font-normal
              leading-[1.15]
              text-[#70451F]
              sm:text-[38px]
              md:text-[44px]
              lg:mb-6
              lg:text-[36px]
              xl:text-[44px]
              2xl:text-[50px]
            "
          >
            Vegetarian Dining,
            <br />
            Rooted in Tradition
          </h2>

          {/* First Paragraph */}
          <p
            className="
              w-full
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.8]
              tracking-[0.2px]
              text-[#89847B]
              sm:text-[15px]
              lg:text-[14px]
              xl:text-[16px]
              2xl:text-[17px]
            "
          >
            Our journey began with a passion for bringing the rich culinary
            heritage of India to Vietnam. Every dish at TANISHQ is crafted
            using fresh ingredients, aromatic spices, and time-honored
            cooking techniques, ensuring an experience that is both
            delightful and satisfying. Whether you are craving North Indian
            delicacies, South Indian specialties, or Jain-friendly meals
            free from root vegetables and garlic-onion, we have something
            for every palate.
          </p>

          {/* Second Paragraph */}
          <p
            className="
              mt-6
              w-full
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.8]
              tracking-[0.2px]
              text-[#89847B]
              sm:text-[15px]
              lg:mt-6
              lg:text-[14px]
              xl:mt-7
              xl:text-[16px]
              2xl:text-[17px]
            "
          >
            With a warm ambiance, impeccable hospitality, and a commitment
            to purity, we strive to make every visit a memorable one.
            Whether you’re dining with family, friends, or looking for a
            comforting taste of home, we invite you to savor the essence
            of India with us.
          </p>

          {/* Closing Paragraph */}
          <p
            className="
              mt-6
              w-full
              font-['Work_Sans']
              text-[14px]
              font-normal
              leading-[1.8]
              tracking-[0.2px]
              text-[#89847B]
              sm:text-[15px]
              lg:mt-6
              lg:text-[14px]
              xl:mt-7
              xl:text-[16px]
              2xl:text-[17px]
            "
          >
            Come, indulge in a truly authentic vegetarian dining experience
            at TANISHQ—where tradition meets taste!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VegetarianDining;