import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const galleryImages = [
  {
    id: 1,
    title: "Traditional Indian Thali",
    category: "Indian Cuisine",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Fresh Vegetarian Delights",
    category: "Vegetarian Food",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "A Taste of India",
    category: "Indian Specialties",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    title: "Fresh Garden Salad",
    category: "Healthy Choices",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    title: "Restaurant Experience",
    category: "Our Ambience",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    title: "Delicious Curry",
    category: "Chef's Special",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    title: "Beautiful Dining",
    category: "Restaurant Interior",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  },

  // Additional Gallery Images
  {
    id: 8,
    title: "Authentic Indian Flavours",
    category: "Indian Cuisine",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    title: "Fresh Mediterranean Salad",
    category: "Healthy Choices",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    title: "Delicious Pasta",
    category: "Vegetarian Specials",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    title: "Freshly Baked Pizza",
    category: "Chef's Special",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    title: "Delightful Desserts",
    category: "Sweet Moments",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 13,
    title: "Elegant Restaurant Interior",
    category: "Restaurant Ambience",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 15,
    title: "Fresh and Healthy Bowls",
    category: "Healthy Food",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=85",
  },
];

const OurGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Close image preview using Escape key
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  // Prevent background scrolling while preview is open
  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

  const labelClass = `
    mb-2
    block
    font-['Work_Sans']
    text-[10px]
    font-medium
    uppercase
    tracking-[2px]
    text-[#E9C18D]
    sm:text-[11px]
  `;

  return (
    <section
      id="gallery"
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-[60px]
        sm:px-6
        sm:py-[75px]
        lg:px-8
        lg:py-[100px]
      "
    >
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Section Heading */}
        <div
          className="
            mx-auto
            mb-[35px]
            max-w-[700px]
            text-center
            sm:mb-[48px]
            lg:mb-[60px]
          "
        >
          <h2
            className="
              font-['Fraunces']
              text-[36px]
              font-normal
              leading-[1.15]
              text-[#70451F]
              sm:text-[46px]
              md:text-[52px]
              lg:text-[62px]
            "
          >
            Our Gallery
          </h2>

          <p
            className="
              mx-auto
              mt-[18px]
              max-w-[560px]
              font-['Work_Sans']
              text-[14px]
              leading-[1.9]
              text-[#7A7167]
              sm:text-[16px]
            "
          >
            Take a glimpse into our world of authentic flavours,
            fresh ingredients, beautiful dishes, and memorable
            dining experiences.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div
          className="
            columns-1
            gap-5
            sm:columns-2
            lg:columns-3
            lg:gap-6
          "
        >
          {galleryImages.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveImage(item)}
              aria-label={`View ${item.title}`}
              className="
                group
                relative
                mb-5
                block
                w-full
                break-inside-avoid
                overflow-hidden
                bg-[#E8DCCB]
                text-left
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#BD8747]
                lg:mb-6
              "
            >
              {/* Gallery Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/10
                  to-transparent
                  opacity-80
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Image Content */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  flex
                  items-end
                  justify-between
                  gap-3
                  p-4
                  sm:p-5
                  lg:p-6
                "
              >
                <div className="min-w-0">
                  <span className={labelClass}>
                    {item.category}
                  </span>

                  <h3
                    className="
                      font-['Fraunces']
                      text-[20px]
                      font-medium
                      leading-[1.3]
                      text-white
                      sm:text-[22px]
                      lg:text-[24px]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* View Icon */}
                <span
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    shrink-0
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#603912]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    group-focus-visible:translate-y-0
                    group-focus-visible:opacity-100
                  "
                >
                  <ArrowUpRight size={21} weight="regular" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Description */}
        <div
          className="
            mt-[35px]
            text-center
            sm:mt-[45px]
            lg:mt-[55px]
          "
        >
          <p
            className="
              font-['Work_Sans']
              text-[13px]
              leading-[1.8]
              text-[#7A7167]
              sm:text-[14px]
            "
          >
            Fresh ingredients. Authentic flavours. Beautiful
            moments.
          </p>
        </div>
      </div>

      {/* Image Preview Modal */}
      {activeImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            sm:p-8
          "
          onClick={() => setActiveImage(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-[1000px]
              overflow-hidden
              bg-[#F5EFE5]
            "
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
              className="
                absolute
                right-3
                top-3
                z-10
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[28px]
                text-[#603912]
                shadow-md
                transition-colors
                hover:bg-[#F5EFE5]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#BD8747]
              "
            >
              &times;
            </button>

            {/* Preview Image */}
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="
                block
                max-h-[75vh]
                min-h-[220px]
                w-full
                bg-black
                object-contain
              "
            />

            {/* Preview Details */}
            <div className="px-5 py-5 sm:px-8 sm:py-6">
              <p
                className="
                  font-['Work_Sans']
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#BD8747]
                "
              >
                {activeImage.category}
              </p>

              <h3
                className="
                  mt-2
                  font-['Fraunces']
                  text-[25px]
                  font-medium
                  text-[#70451F]
                  sm:text-[32px]
                "
              >
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallery;