import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../../../api/wordpressApi";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch WordPress Blog Posts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getBlogPosts();

        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Unable to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Get Featured Image
  const getFeaturedImage = (blog) =>
    blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  // Convert HTML to Plain Text
  const getPlainText = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html || "";

    return (temp.textContent || temp.innerText || "")
      .replace(/\s+/g, " ")
      .trim();
  };

  // Get Plain Title
  const getPlainTitle = (html) => getPlainText(html);

  // Get Short Description
  const getShortDescription = (html, wordLimit = 25) => {
    const text = getPlainText(html);
    const words = text.split(" ").filter(Boolean);

    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(" ")}...`
      : text;
  };

  // Filter Blogs by Title
  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return blogs;

    return blogs.filter((blog) => {
      const title = getPlainTitle(blog.title?.rendered).toLowerCase();

      return title.includes(query);
    });
  }, [blogs, searchQuery]);

  // Glass Card Design
  const glassCard =
    "group relative flex h-full flex-col overflow-hidden rounded-[24px] " +
    "border border-white/70 " +
    "bg-gradient-to-br from-white/75 via-[#F4F1E5]/65 to-[#FFD9B8]/65 " +
    "backdrop-blur-xl " +
    "shadow-[0_12px_40px_rgba(96,57,18,0.08)] " +
    "transition-all duration-500 " +
    "hover:-translate-y-2 " +
    "hover:border-white/90 " +
    "hover:shadow-[0_20px_55px_rgba(96,57,18,0.16)]";

  // Loading State
  if (loading) {
    return (
      <section className="flex min-h-[400px] items-center justify-center bg-white px-5">
        <p className="text-lg text-[#603912]">
          Loading blog posts...
        </p>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="flex min-h-[400px] items-center justify-center bg-white px-5">
        <p className="text-center text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#DCE8D5]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-[#FFD0A8]/50 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">

          <span className="mb-4 inline-block rounded-full border border-[#D9C7AD]/70 bg-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#98612E] backdrop-blur-md">
            Our Journal
          </span>

          <h1 className="font-['Fraunces'] text-4xl font-medium leading-tight text-[#452D1C] sm:text-5xl lg:text-6xl">
            Latest Blogs & Stories
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#796958] sm:text-base">
            Discover our latest stories, food inspiration, restaurant
            experiences, and the flavours that bring people together.
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-[#B78A59] to-transparent" />
        </div>

        {/* Search Bar - Centered Above Blog Grid */}
        <div className="mx-auto mb-10 max-w-xl sm:mb-12">

          <div className="group/search flex items-center gap-3 rounded-full border border-[#D9C7AD]/60 bg-gradient-to-r from-white/80 via-[#F4F1E5]/70 to-[#FFD9B8]/60 px-4 py-3 shadow-[0_8px_30px_rgba(96,57,18,0.07)] backdrop-blur-xl transition-all duration-300 focus-within:border-[#B78A59] focus-within:shadow-[0_10px_35px_rgba(96,57,18,0.13)] sm:px-6 sm:py-4">

            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5 shrink-0 text-[#98612E] transition-transform duration-300 group-focus-within/search:scale-110"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path
                d="m16 16 4 4"
                strokeLinecap="round"
              />
            </svg>

            {/* Search Input */}
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search blogs by title..."
              aria-label="Search blogs by title"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#452D1C] outline-none placeholder:text-[#968575] sm:text-base"
            />

            {/* Clear Search Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9C7AD]/60 bg-white/50 text-sm text-[#603912] transition hover:bg-[#603912] hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Results Information */}
          <div className="mt-3 flex min-h-5 items-center justify-between gap-3 px-3">

            {/* <p className="text-xs text-[#968575] sm:text-sm">
              {searchQuery.trim()
                ? `Search results for "${searchQuery.trim()}"`
                : "Explore our latest stories"}
            </p> */}

            {searchQuery.trim() && (
              <span className="shrink-0 text-xs font-medium text-[#98612E] sm:text-sm">
                {filteredBlogs.length}{" "}
                {filteredBlogs.length === 1 ? "blog" : "blogs"} found
              </span>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {filteredBlogs.map((blog) => {
              const image = getFeaturedImage(blog);
              const title = getPlainTitle(blog.title?.rendered);

              return (
                <article
                  key={blog.id}
                  className={glassCard}
                >

                  {/* Soft Glow Inside Card */}
                  <div className="pointer-events-none absolute -right-16 -top-16 z-10 h-40 w-40 rounded-full bg-white/35 blur-3xl" />

                  {/* Featured Image */}
                  <Link
                    to={`/blog/${blog.slug}`}
                    aria-label={`Read ${title}`}
                    className="relative block p-3 pb-0"
                  >
                    <div className="relative h-56 overflow-hidden rounded-[18px] border border-white/70 bg-[#E9DDCC]/70 sm:h-60">

                      {image ? (
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-[#796958]">
                          No Featured Image
                        </div>
                      )}

                      {/* Image Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2F2116]/25 via-transparent to-white/10" />

                      {/* Glass Date Badge */}
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/70 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-xl">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#603912] sm:text-xs">
                          {new Date(blog.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">

                    {/* Decorative Line */}
                    <div className="mb-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#A56B32] to-[#E8C6A1]" />

                    {/* Blog Title */}
                    <h2
                      className="mb-3 font-['Fraunces'] text-2xl font-medium leading-snug text-[#452D1C] transition-colors duration-300 group-hover:text-[#98612E]"
                      dangerouslySetInnerHTML={{
                        __html: blog.title?.rendered || "",
                      }}
                    />

                    {/* Short Description */}
                    <p className="mb-6 flex-1 text-sm leading-7 text-[#796958] sm:text-[15px]">
                      {getShortDescription(
                        blog.excerpt?.rendered ||
                          blog.content?.rendered ||
                          "",
                        25
                      )}
                    </p>

                    {/* View More Button */}
                    <div className="mt-auto border-t border-white/70 pt-5">

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="group/button inline-flex items-center justify-center gap-3 rounded-full border border-[#CBB397]/70 bg-white/50 px-6 py-3 text-sm font-semibold text-[#603912] shadow-sm backdrop-blur-lg transition-all duration-300 hover:border-[#603912] hover:bg-[#603912] hover:text-white hover:shadow-lg"
                      >
                        View More

                        <span className="inline-block transition-transform duration-300 group-hover/button:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        ) : (

          /* Empty Search Results */
          <div className="rounded-3xl border border-white/70 bg-gradient-to-br from-white/70 via-[#F4F1E5]/60 to-[#FFD9B8]/50 px-6 py-16 text-center shadow-lg backdrop-blur-xl sm:px-10">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/60 text-[#98612E] shadow-sm">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path
                  d="m16 16 4 4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="font-['Fraunces'] text-2xl text-[#452D1C] sm:text-3xl">
              {searchQuery.trim()
                ? "No Matching Blogs Found"
                : "No Blogs Available"}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#796958]">
              {searchQuery.trim()
                ? "We couldn't find any blog with that title. Try another keyword to discover more stories."
                : "New stories will appear here soon."}
            </p>

            {searchQuery.trim() && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-6 rounded-full bg-[#603912] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#452D1C]"
              >
                View All Blogs
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;

