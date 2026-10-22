import { useEffect, useMemo, useState } from "react";
import { getMenuItems } from "../../../../api/wordpressApi";

const CITY_OPTIONS = [
  {
    label: "Ho Chi Minh City",
    value: "ho-chi-minh",
  },
  {
    label: "Da Nang City",
    value: "da-nang",
  },
];

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMenuItems();

        if (isMounted) {
          setMenuItems(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.message || "Unable to load menu items. Please try again.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMenuItems();

    return () => {
      isMounted = false;
    };
  }, []);

  // Decode WordPress HTML entities.
  const decodeHTML = (value) => {
    if (typeof value !== "string") {
      return value ?? "";
    }

    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;

    return textarea.value;
  };

  // Convert WordPress ACF values into consistent strings.
  const getACFValue = (item, key) => {
    const value = item?.acf?.[key];

    if (typeof value === "string") {
      return value.trim();
    }

    if (typeof value === "number") {
      return String(value);
    }

    return "";
  };

  // Read category name from ACF.
  const getCategoryName = (item) => {
    return getACFValue(item, "category_name") || "Other Menu";
  };

  // Normalize city names for filtering.
  const getCityValue = (item) => {
    return getACFValue(item, "city").toLowerCase().trim().replace(/\s+/g, "-");
  };

  // Get featured image from the WordPress REST API.
  const getFeaturedImage = (item) => {
    const embeddedImage =
      item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    if (embeddedImage) {
      return embeddedImage;
    }

    // Fallback: retrieve the image from the media endpoint
    // if the API response includes the media URL separately.
    return item?.featured_image_url || "";
  };

  // Read custom repeater data from the REST API.
  // Your API response contains menu_entries directly on the item,
  // not inside item.acf.
  const getMenuEntries = (item) => {
    const entries =
      item?.menu_entries ??
      item?.acf?.menu_entries ??
      item?.acf?.menu_items ??
      item?.acf?.menu_item ??
      [];

    if (!Array.isArray(entries)) {
      return [];
    }

    return entries
      .filter(
        (entry) =>
          entry &&
          typeof entry === "object" &&
          (entry.menu_name ||
            entry.name ||
            entry.menu_subname ||
            entry.subtitle ||
            entry.price !== undefined),
      )
      .map((entry) => ({
        menu_name: decodeHTML(entry.menu_name || entry.name || "Menu Item"),
        menu_subname: decodeHTML(entry.menu_subname || entry.subtitle || ""),
        price: entry.price ?? "",
      }));
  };

  // Categories available in CMS.
  const categories = useMemo(() => {
    const categoryMap = new Map();

    menuItems.forEach((item) => {
      const name = getCategoryName(item);

      if (!categoryMap.has(name)) {
        categoryMap.set(name, name);
      }
    });

    return Array.from(categoryMap.values()).sort((a, b) => a.localeCompare(b));
  }, [menuItems]);

  // Search categories.
  const searchedCategories = useMemo(() => {
    return categories.filter((category) =>
      category.toLowerCase().includes(categorySearch.toLowerCase().trim()),
    );
  }, [categories, categorySearch]);

  // Apply city and category filters.
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      const city = getCityValue(item);
      const category = getCategoryName(item);

      const cityMatches =
        selectedCities.length === 0 ||
        selectedCities.some((selectedCity) => {
          if (selectedCity === "ho-chi-minh") {
            return [
              "ho-chi-minh",
              "ho-chi-minh-city",
              "ho-chi-minh-city-vietnam",
              "ho-chi-minh-city-vn",
            ].includes(city);
          }

          if (selectedCity === "da-nang") {
            return [
              "da-nang",
              "da-nang-city",
              "da-nang-city-vietnam",
              "da-nang-city-vn",
            ].includes(city);
          }

          return city === selectedCity;
        });

      const categoryMatches =
        selectedCategories.length === 0 ||
        selectedCategories.includes(category);

      return cityMatches && categoryMatches;
    });
  }, [menuItems, selectedCities, selectedCategories]);

  // Toggle city selection.
  const toggleCity = (city) => {
    setSelectedCities((previous) =>
      previous.includes(city)
        ? previous.filter((value) => value !== city)
        : [...previous, city],
    );
  };

  // Toggle category selection.
  const toggleCategory = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((value) => value !== category)
        : [...previous, category],
    );
  };

  // Format prices such as 69000 as ₫69,000.
  const formatPrice = (price) => {
    if (price === undefined || price === null || price === "") {
      return "";
    }

    const numericPrice = Number(String(price).replace(/[^\d.-]/g, ""));

    if (!Number.isFinite(numericPrice)) {
      return String(price);
    }

    return `₫${numericPrice.toLocaleString("en-US")}`;
  };

  // Group menu categories after applying filters.
  const groupedCategories = useMemo(() => {
    const groups = new Map();

    filteredMenuItems.forEach((item) => {
      const category = getCategoryName(item);

      if (!groups.has(category)) {
        groups.set(category, []);
      }

      groups.get(category).push(item);
    });

    return Array.from(groups.entries());
  }, [filteredMenuItems]);

  return (
    <section
      className="w-full bg-[#FFFBF3] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <h2
          className="text-3xl font-semibold leading-tight text-[#3D2B1F] sm:text-4xl lg:text-[42px]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Something for Every Craving
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8B8177]">
          Explore a diverse selection of Indian vegetarian cuisines, inspired by
          regional traditions and prepared for a memorable dining experience.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:gap-8">
        {/* Filters */}
        <aside className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(60,40,20,0.08)]">
          {/* City filter */}
          <div className="border-b border-[#EDE8E1] p-5">
            <h3 className="mb-4 text-sm font-semibold text-[#35271F]">City</h3>

            <div className="space-y-3">
              {CITY_OPTIONS.map((city) => (
                <label
                  key={city.value}
                  className="flex cursor-pointer items-center gap-2 text-sm text-[#827970]"
                >
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city.value)}
                    onChange={() => toggleCity(city.value)}
                    className="h-4 w-4 accent-[#89572F]"
                  />

                  <span>{city.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-[#35271F]">
              Categories
            </h3>

            <input
              type="text"
              value={categorySearch}
              onChange={(event) => setCategorySearch(event.target.value)}
              placeholder="⌕ Search Categories"
              className="mb-4 w-full rounded-md border border-[#EEE8E0] px-3 py-2 text-sm outline-none focus:border-[#A06A3B]"
            />

            <div className="max-h-[430px] space-y-3 overflow-y-auto pr-1">
              {searchedCategories.map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-start gap-2 text-sm text-[#827970]"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#89572F]"
                  />

                  <span>{category}</span>
                </label>
              ))}

              {searchedCategories.length === 0 && (
                <p className="text-xs text-[#91877D]">No categories found.</p>
              )}
            </div>

            {(selectedCities.length > 0 ||
              selectedCategories.length > 0 ||
              categorySearch !== "") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCities([]);
                  setSelectedCategories([]);
                  setCategorySearch("");
                }}
                className="mt-5 text-sm font-medium text-[#89572F] underline underline-offset-4"
              >
                Clear Filters
              </button>
            )}
          </div>
        </aside>

        {/* Menu content */}
        <div className="min-w-0 rounded-2xl bg-[#F5EEE4] p-3 sm:p-5 lg:p-6">
          {loading && (
            <div className="py-16 text-center text-[#77553A]">
              Loading menu...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-xl bg-white p-6 text-center">
              <p className="text-sm text-red-600">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 rounded-full bg-[#89572F] px-5 py-2 text-sm text-white"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && groupedCategories.length === 0 && (
            <div className="py-16 text-center text-[#77553A]">
              No menu items found for the selected filters.
            </div>
          )}

          {!loading &&
            !error &&
            groupedCategories.map(([category, items]) => {
              const image = getFeaturedImage(items[0]);
              const menuLink = items[0]?.link || "/menu";

              return (
                <article
                  key={category}
                  className="mb-5 grid gap-6 rounded-xl bg-[#9C673B] p-5 text-white last:mb-0 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,42%)] lg:gap-7"
                >
                  {/* Category and menu list */}
                  <div className="min-w-0">
                    <h3
                      className="border-b border-white/35 pb-3 text-2xl font-semibold leading-tight sm:text-[27px]"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {category}
                    </h3>

                    <div className="mt-1">
                      {items.map((item) => {
                        const entries = getMenuEntries(item);

                        return (
                          <div
                            key={item.id}
                            className="border-b border-white/25 last:border-b-0"
                          >
                            {entries.length > 0 ? (
                              entries.map((entry, index) => (
                                <div
                                  key={`${item.id}-${index}`}
                                  className="border-b border-white/20 py-3 last:border-b-0"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <h4 className="text-sm font-bold sm:text-base">
                                      {entry.menu_name}
                                    </h4>

                                    {entry.price !== "" && (
                                      <span className="shrink-0 text-sm font-bold sm:text-base">
                                        {formatPrice(entry.price)}
                                      </span>
                                    )}
                                  </div>

                                  {entry.menu_subname && (
                                    <p className="mt-1 whitespace-pre-line text-xs leading-[1.45] text-white/85">
                                      {entry.menu_subname}
                                    </p>
                                  )}
                                </div>
                              ))
                            ) : (
                              <div className="py-3">
                                <h4 className="text-sm font-bold sm:text-base">
                                  {decodeHTML(item.title?.rendered || "Menu")}
                                </h4>

                                <p className="mt-1 text-xs text-white/80">
                                  Menu details are not available.
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Featured image and button */}
                  <div className="flex min-w-0 flex-col">
                    {image ? (
                      <img
                        src={image}
                        alt={category}
                        loading="lazy"
                        className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[280px]"
                      />
                    ) : (
                      <div className="flex h-[240px] items-center justify-center bg-[#87552F] text-sm text-white/80 sm:h-[300px] lg:h-[280px]">
                        No featured image
                      </div>
                    )}

                    <a
                      href={menuLink}
                      className="mt-3 flex min-h-[46px] items-center justify-center rounded-full border border-white/80 px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#89572F]"
                    >
                      Explore Menu
                    </a>
                  </div>
                </article>
              );
            })}

          {!loading && !error && groupedCategories.length > 0 && (
            <div className="flex justify-center pb-2 pt-7">
              <a
                href="/menu"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#653A16] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4E2B10]"
              >
                Explore the Full Menu
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
