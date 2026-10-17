import { useEffect, useRef, useState } from "react";

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFFCF7]
        px-5
        py-14
        sm:px-8
        sm:py-16
        md:px-10
        md:py-[72px]
        lg:px-12
        lg:py-[82px]
        xl:px-16
      "
    >
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">

        {/* Main Description */}
        <p
          className={`
            w-full
            max-w-[950px]
            font-['Fraunces']
            text-[19px]
            font-light
            leading-[1.5]
            tracking-normal
            text-[#896442]
            transition-all
            duration-1000
            ease-out
            sm:text-[23px]
            sm:leading-[1.5]
            md:text-[27px]
            md:leading-[1.5]
            lg:text-[30px]
            lg:leading-[1.5]
            xl:text-[35px]
            xl:leading-[50px]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          At our restaurant, every dish tells a story of spices
          <br className="hidden lg:block" />

          {" "}handpicked from India, of recipes passed down through
          <br className="hidden lg:block" />

          {" "}generations, and of the passion that goes into every bite.
          <br className="hidden lg:block" />

          {" "}From the fragrant biryanis to the sizzling tandoori delights,
          <br className="hidden lg:block" />

          {" "}each plate is a celebration of taste and tradition.
        </p>

        {/* Signature */}
        <div
          className={`
            mt-5
            sm:mt-6
            transition-all
            duration-1000
            delay-200
            ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <h2
            className="
              whitespace-nowrap
              font-['Allura']
              text-[27px]
              font-normal
              leading-[50px]
              text-[#896442]
              sm:text-[30px]
              md:text-[32px]
            "
          >
            Welcome to Tanishq
          </h2>
        </div>

        {/* Supporting Description */}
        <p
          className={`
            mt-3
            w-full
            max-w-[650px]
            font-['Work_Sans']
            text-[12px]
            font-normal
            leading-[1.8]
            text-[#89847C]
            transition-all
            duration-1000
            delay-300
            ease-out
            sm:mt-4
            sm:text-[13px]
            md:mt-5
            md:text-[14px]
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          Whether you’re seeking a comforting meal, a lavish feast, or an
          intimate dining experience, Tanishq welcomes you with warm
          hospitality and an ambiance that echoes the grandeur of Indian
          royalty. Join us on a journey of flavors and indulge in the magic of
          India, right here in Vietnam.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;