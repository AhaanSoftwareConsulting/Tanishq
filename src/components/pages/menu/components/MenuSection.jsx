import { useEffect, useMemo, useState } from "react";
import { getMenuItems } from "../../../../api/wordpressApi";

const CITY_OPTIONS = [
  { label: "Ho Chi Minh City", value: "ho-chi-minh" },
  { label: "Da Nang City", value: "da-nang" },
];

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  // Fetch menu items from WordPress
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

  // Close popup with Escape and prevent background scrolling
  useEffect(() => {
    if (!activeMenu) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu]);

  // Decode HTML entities
  const decodeHTML = (value) => {
    if (typeof value !== "string") return value ?? "";

    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;

    return textarea.value;
  };

  // Get ACF field value
  const getACFValue = (item, key) => {
    const value = item?.acf?.[key];

    if (typeof value === "string") return value.trim();
    if (typeof value === "number") return String(value);
    if (Array.isArray(value)) {
      return value.map(v => (typeof v === "object" ? (v.value || v.label || "") : String(v))).join(",");
    }
    if (value && typeof value === "object") {
      return String(value.value || value.label || "").trim();
    }

    return "";
  };

  // Get category name
  const getCategoryName = (item) =>
    getACFValue(item, "category_name") || "Other Menu";

  // Robust city extraction supporting strings, arrays, objects from ACF checkboxes/selects
  const getCityValuesList = (item) => {
    const raw = item?.acf?.city;
    let values = [];

    if (Array.isArray(raw)) {
      values = raw;
    } else if (typeof raw === "string") {
      values = raw.split(",");
    } else if (raw && typeof raw === "object") {
      values = [raw.value, raw.label, raw.name].filter(Boolean);
    } else {
      values = [getACFValue(item, "city")];
    }

    return values
      .map((v) => {
        const valStr = typeof v === "object" ? (v.value || v.label || "") : String(v);
        return valStr.toLowerCase().trim().replace(/\s+/g, "-");
      })
      .filter(Boolean);
  };

  // Get featured image
  const getFeaturedImage = (item) =>
    item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    item?.featured_image_url ||
    "";

  // Get menu entries from WordPress / ACF
  const getMenuEntries = (item) => {
    const entries =
      item?.menu_entries ??
      item?.acf?.menu_entries ??
      item?.acf?.menu_items ??
      item?.acf?.menu_item ??
      [];

    if (!Array.isArray(entries)) return [];

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
      .map((entry, index) => ({
        id: `${item.id}-${index}`,
        menu_name: decodeHTML(entry.menu_name || entry.name || "Menu Item"),
        menu_subname: decodeHTML(entry.menu_subname || entry.subtitle || ""),
        price: entry.price ?? "",
      }));
  };

  // Categories
  const categories = useMemo(() => {
    const categoryMap = new Map();

    menuItems.forEach((item) => {
      const category = getCategoryName(item);

      if (!categoryMap.has(category)) {
        categoryMap.set(category, category);
      }
    });

    return Array.from(categoryMap.values()).sort((a, b) => a.localeCompare(b));
  }, [menuItems]);

  // Search categories
  const searchedCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.toLowerCase().includes(categorySearch.toLowerCase().trim()),
      ),
    [categories, categorySearch],
  );

  // City filter matching
  const matchesCity = (itemCityList, selectedCity) => {
    const cityAliases = {
      "ho-chi-minh": [
        "ho-chi-minh",
        "ho-chi-minh-city",
        "ho-chi-minh-city-vietnam",
        "ho-chi-minh-city-vn",
      ],
      "da-nang": [
        "da-nang",
        "da-nang-city",
        "da-nang-city-vietnam",
        "da-nang-city-vn",
      ],
    };

    const allowed = cityAliases[selectedCity] || [selectedCity];

    return itemCityList.some((itemCity) =>
      allowed.some((alias) => itemCity.includes(alias) || alias.includes(itemCity))
    );
  };

  // Filter menu items
  const filteredMenuItems = useMemo(
    () =>
      menuItems.filter((item) => {
        const itemCityList = getCityValuesList(item);
        const category = getCategoryName(item);

        const cityMatches =
          selectedCities.length === 0 ||
          selectedCities.some((selectedCity) =>
            matchesCity(itemCityList, selectedCity),
          );

        const categoryMatches =
          selectedCategories.length === 0 ||
          selectedCategories.includes(category);

        return cityMatches && categoryMatches;
      }),
    [menuItems, selectedCities, selectedCategories],
  );

  // Toggle city
  const toggleCity = (city) => {
    setSelectedCities((previous) =>
      previous.includes(city)
        ? previous.filter((value) => value !== city)
        : [...previous, city],
    );
  };

  // Toggle category
  const toggleCategory = (category) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((value) => value !== category)
        : [...previous, category],
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedCities([]);
    setSelectedCategories([]);
    setCategorySearch("");
  };

  // Format price
  const formatPrice = (price) => {
    if (price === undefined || price === null || price === "") {
      return "";
    }

    const numericPrice = Number(String(price).replace(/[^\d.-]/g, ""));

    return Number.isFinite(numericPrice)
      ? `₫${numericPrice.toLocaleString("en-US")}`
      : String(price);
  };

  // Group by category
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

  // Glassmorphism background
  const glassBackground = {
    background: `
      radial-gradient(
        ellipse at 90% 10%,
        rgba(255, 176, 105, 0.42) 0%,
        transparent 43%
      ),
      radial-gradient(
        ellipse at 5% 12%,
        rgba(185, 199, 158, 0.38) 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 48% 100%,
        rgba(255, 165, 123, 0.38) 0%,
        transparent 48%
      ),
      linear-gradient(
        125deg,
        rgba(255, 255, 255, 0.88),
        rgba(255, 247, 235, 0.84) 48%,
        rgba(255, 224, 194, 0.86)
      )
    `,
  };

  // Open full menu
  const openFullMenu = (category, image, entries) => {
    setActiveMenu({
      category,
      image,
      entries,
    });
  };

  return (
    <>
      <section
        className="relative isolate w-full overflow-x-clip bg-[#FFFBF3] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {/* Section heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h2
            className="text-3xl font-semibold leading-tight text-[#3D2B1F] sm:text-4xl lg:text-[42px]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Something for Every Craving
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8B8177]">
            Explore a diverse selection of Indian vegetarian cuisines, inspired
            by regional traditions and prepared for a memorable dining
            experience.
          </p>
        </div>

        {/* Main layout */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:gap-8">
          {/* Filter sidebar - Height auto, no scrollbar */}
          <aside
            style={glassBackground}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/80 shadow-[0_12px_35px_rgba(91,62,39,0.09)] backdrop-blur-2xl lg:sticky lg:top-24"
          >
            <div className="shrink-0 border-b border-[#956B4A]/20 p-5">
              <h3 className="mb-4 text-sm font-semibold text-[#35271F]">
                City
              </h3>

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

            <div className="flex flex-col p-5">
              <h3 className="mb-4 shrink-0 text-sm font-semibold text-[#35271F]">
                Categories
              </h3>

              <input
                type="text"
                value={categorySearch}
                onChange={(event) => setCategorySearch(event.target.value)}
                placeholder="⌕ Search Categories"
                className="mb-4 w-full shrink-0 rounded-xl border border-white/80 bg-white/45 px-3 py-2.5 text-sm text-[#593719] outline-none backdrop-blur-lg placeholder:text-[#91877D] focus:border-[#A06A3B] focus:bg-white/70"
              />

              <div className="space-y-3 pr-1">
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
                  onClick={clearFilters}
                  className="mt-5 shrink-0 self-start text-sm font-medium text-[#89572F] underline underline-offset-4 transition-colors hover:text-[#4E2B10]"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Menu cards */}
          <div className="min-w-0">
            {loading && (
              <div className="py-16 text-center text-[#77553A]">
                Loading menu...
              </div>
            )}

            {!loading && error && (
              <div className="rounded-2xl bg-white p-6 text-center">
                <p className="text-sm text-red-600">{error}</p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-4 rounded-full bg-[#89572F] px-5 py-2 text-sm text-white transition hover:bg-[#653A16]"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && groupedCategories.length === 0 && (
              <div className="rounded-2xl bg-[#F5EEE4] py-16 text-center text-[#77553A]">
                No menu items found for the selected filters.
              </div>
            )}

            {!loading &&
              !error &&
              groupedCategories.map(([category, items]) => {
                const image = getFeaturedImage(items[0]);

                const allEntries = items.flatMap((item) => {
                  const entries = getMenuEntries(item);

                  if (entries.length > 0) {
                    return entries;
                  }

                  return [
                    {
                      id: `fallback-${item.id}`,
                      menu_name: decodeHTML(item.title?.rendered || "Menu"),
                      menu_subname: "Menu details are not available.",
                      price: "",
                    },
                  ];
                });

                const visibleEntries = allEntries.slice(0, 5);

                return (
                  <article
                    key={category}
                    style={glassBackground}
                    className="group relative isolate mb-6 grid min-w-0 gap-6 overflow-hidden rounded-[24px] border border-white/90 p-5 shadow-[0_15px_40px_rgba(91,62,39,0.09),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-shadow duration-300 last:mb-0 hover:shadow-[0_18px_45px_rgba(91,62,39,0.13)] sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,42%)] lg:gap-7"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full bg-orange-300/40 blur-[65px]"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[15%] top-1/4 -z-10 h-52 w-52 rounded-full bg-green-300/30 blur-[60px]"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-orange-200/50 blur-[65px]"
                    />

                    {/* Menu entries preview */}
                    <div className="relative z-10 min-w-0">
                      <h3
                        className="border-b border-[#77543D]/20 pb-3 text-2xl font-semibold leading-tight text-[#482B19] sm:text-[27px]"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {category}
                      </h3>

                      <div>
                        {visibleEntries.map((entry) => (
                          <div
                            key={entry.id}
                            className="border-b border-[#956B4A]/15 py-3 last:border-b-0"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-sm font-bold text-[#382318] sm:text-base">
                                {entry.menu_name}
                              </h4>

                              {entry.price !== "" && (
                                <span className="shrink-0 text-sm font-bold text-[#382318] sm:text-base">
                                  {formatPrice(entry.price)}
                                </span>
                              )}
                            </div>

                            {entry.menu_subname && (
                              <p className="mt-1 whitespace-pre-line text-xs leading-[1.6] text-[#725B4B]">
                                {entry.menu_subname}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {allEntries.length > 5 && (
                        <p className="mt-2 text-xs text-[#89572F]">
                          + {allEntries.length - 5} more menu items
                        </p>
                      )}
                    </div>

                    {/* Featured image */}
                    <div className="relative z-10 flex min-w-0 flex-col">
                      {image ? (
                        <div className="relative flex items-center justify-center overflow-hidden rounded-2xl">
                          <img
                            src={image}
                            alt={category}
                            loading="lazy"
                            className="h-auto w-[500px] rounded-2xl object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/60 bg-white/40 text-sm text-[#725B4B]">
                          No featured image
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          openFullMenu(category, image, allEntries)
                        }
                        className="mt-3 flex min-h-[46px] w-full items-center justify-center rounded-full border border-[#956B4A]/50 bg-white/35 px-5 text-sm font-medium text-[#593719] shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#89572F] hover:bg-[#89572F] hover:text-white"
                      >
                        View Full Menu
                      </button>
                    </div>
                  </article>
                );
              })}

            {!loading && !error && groupedCategories.length > 0 && (
              <div className="flex justify-center pb-2 pt-7">
                <a
                  href="/menu"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#653A16] px-8 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(101,58,22,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#89572F] hover:shadow-[0_12px_30px_rgba(101,58,22,0.25)]"
                >
                  Explore the Full Menu
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Menu Popup */}
      {activeMenu && (
        <div
          className="menu-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-[#2D1B10]/60 p-3 backdrop-blur-md sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveMenu(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="full-menu-title"
            className="menu-modal relative flex max-h-[90dvh] w-full max-w-[900px] flex-col overflow-hidden rounded-[22px] border border-white/80 shadow-[0_25px_80px_rgba(45,27,16,0.3)] sm:max-h-[88dvh] sm:rounded-[28px]"
            style={{
              ...glassBackground,
              fontFamily: "'Work Sans', sans-serif",
            }}
          >
            {/* Fixed header */}
            <header className="menu-modal-header relative z-10 shrink-0 border-b border-[#956B4A]/20 px-5 py-5 sm:px-7 sm:py-6">
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                aria-label="Close full menu"
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#956B4A]/30 bg-white/75 text-2xl leading-none text-[#482B19] shadow-sm transition-all duration-300 hover:rotate-90 hover:bg-[#653A16] hover:text-white sm:right-5 sm:top-5"
              >
                &times;
              </button>

              <div
                className={`grid items-center gap-4 pr-8 sm:gap-6 sm:pr-10 ${
                  activeMenu.image
                    ? "md:grid-cols-[minmax(0,1fr)_200px]"
                    : "grid-cols-1"
                }`}
              >
                <div className="min-w-0">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#89572F] sm:text-xs">
                    Explore Our Menu
                  </p>

                  <h2
                    id="full-menu-title"
                    className="break-words text-2xl font-semibold leading-tight text-[#482B19] sm:text-3xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {activeMenu.category}
                  </h2>

                  <p className="mt-2 max-w-lg text-xs leading-5 text-[#725B4B] sm:mt-3 sm:text-sm sm:leading-6">
                    Discover our selection of freshly prepared vegetarian
                    dishes.
                  </p>

                  <div className="mt-4 h-px w-full max-w-sm bg-[#956B4A]/25" />
                </div>

                {activeMenu.image && (
                  <div className="hidden overflow-hidden p-1 md:block">
                    <img
                      src={activeMenu.image}
                      alt={activeMenu.category}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </header>

            {/* Scrollable menu area */}
            <div
              className="menu-modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-2 sm:px-7 sm:py-3"
              tabIndex={0}
              aria-label={`${activeMenu.category} menu items`}
            >
              {activeMenu.entries.map((entry) => (
                <div
                  key={entry.id}
                  className="menu-entry-row border-b border-[#956B4A]/20 py-4 last:border-b-0 sm:py-[18px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="min-w-0 text-sm font-bold leading-6 text-[#382318] sm:text-base">
                      {entry.menu_name}
                    </h3>

                    {entry.price !== "" && (
                      <span className="shrink-0 whitespace-nowrap text-sm font-bold text-[#382318] sm:text-base">
                        {formatPrice(entry.price)}
                      </span>
                    )}
                  </div>

                  {entry.menu_subname && (
                    <p className="mt-2 whitespace-pre-line text-xs leading-6 text-[#725B4B] sm:text-sm">
                      {entry.menu_subname}
                    </p>
                  )}
                </div>
              ))}

              {activeMenu.entries.length === 0 && (
                <p className="py-10 text-center text-sm text-[#725B4B]">
                  No menu items available in this category.
                </p>
              )}
            </div>

            {/* Fixed footer */}
            <footer className="menu-modal-footer relative z-10 shrink-0 border-t border-white/60 px-4 py-4 text-center sm:px-7 sm:py-5">
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                className="min-h-[44px] min-w-[180px] rounded-full bg-[#653A16] px-8 py-3 text-sm font-semibold text-white shadow-[0_5px_15px_rgba(101,58,22,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#89572F] hover:shadow-lg"
              >
                Close Menu
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Popup scrollbar and animation styles */}
      <style>{`
        .menu-modal {
          isolation: isolate;
          animation: menuModalEnter 260ms ease-out both;
          scrollbar-gutter: stable;
        }

        .menu-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(101, 58, 22, 0.58) rgba(255, 255, 255, 0.32);
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        .menu-modal-scroll::-webkit-scrollbar {
          width: 7px;
        }

        .menu-modal-scroll::-webkit-scrollbar-track {
          margin-block: 12px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.28);
        }

        .menu-modal-scroll::-webkit-scrollbar-thumb {
          min-height: 45px;
          border: 2px solid transparent;
          border-radius: 20px;
          background: rgba(101, 58, 22, 0.58);
          background-clip: padding-box;
          transition: background 200ms ease;
        }

        .menu-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(101, 58, 22, 0.9);
          background-clip: padding-box;
        }

        .menu-modal-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }

        .menu-entry-row {
          transition: background-color 200ms ease;
        }

        .menu-entry-row:hover {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .menu-modal-header,
        .menu-modal-footer {
          background: rgba(255, 248, 238, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        @keyframes menuModalEnter {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .menu-modal-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .menu-entry-row:hover {
            background-color: transparent;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .menu-modal {
            animation: none;
          }

          .menu-modal-scroll {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
};

export default MenuSection;