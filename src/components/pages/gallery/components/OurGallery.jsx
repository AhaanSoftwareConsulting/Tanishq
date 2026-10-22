import { useEffect, useState } from "react";
import { getGalleries } from "../../../../api/wordpressApi";

const categories = [
  { label: "All", value: "all" },
  { label: "Ho Chi Minh City", value: "ho-chi-minh" },
  { label: "Da Nang City", value: "da-nang" },
];

const OurGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getGalleries();

        const formattedData = data.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Gallery Image",
          category: item.acf?.gallery_category || "ho-chi-minh",
          image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          alt: item._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || item.title?.rendered || "Gallery Image",
        }));

        setGalleries(formattedData.filter((item) => item.image));
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError("Unable to load gallery images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const filteredGalleries = galleries.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="bg-[#FFFFF] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-['Fraunces'] text-[36px] font-normal leading-[1.1] text-[#5E3A17] sm:text-[46px] lg:text-[55px] mb-6">
            Our Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-['Work_Sans'] text-base leading-7 text-[#6B5745] md:text-lg">
            Explore our delicious vegetarian dishes and memorable dining
            experiences at our restaurant branches.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full border px-6 py-3 font-['Work_Sans'] text-sm font-medium transition-all duration-300 md:text-base ${
                activeCategory === category.value
                  ? "border-[#603912] bg-[#603912] text-white"
                  : "border-[#603912]/30 bg-transparent text-[#603912] hover:border-[#603912] hover:bg-[#603912] hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="py-16 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#603912]/20 border-t-[#603912]" />
            <p className="mt-4 font-['Work_Sans'] text-[#603912]">
              Loading gallery...
            </p>
          </div>
        ) : error ? (
          <p className="py-12 text-center font-['Work_Sans'] text-red-700">
            {error}
          </p>
        ) : filteredGalleries.length === 0 ? (
          <p className="py-12 text-center font-['Work_Sans'] text-[#603912]">
            No gallery images found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGalleries.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E9D9C4] text-left"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  <h3
                    className="font-['Fraunces'] text-xl font-medium text-white md:text-2xl"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/30"
            aria-label="Close image preview"
          >
            &times;
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />
            <h3
              className="mt-4 text-center font-['Fraunces'] text-2xl text-white"
              dangerouslySetInnerHTML={{ __html: selectedImage.title }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallery;