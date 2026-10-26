import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../../../../api/wordpressApi";
import BlogDetailsBanner from "./BlogDetailsBanner";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");
        setBlog(null);

        const data = await getBlogPostBySlug(slug);

        if (!data) {
          setError("Blog post not found.");
          return;
        }

        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog details:", err);
        setError("Unable to load this blog post. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const getPlainText = (html = "") => {
    const temp = document.createElement("div");
    temp.innerHTML = html;

    return (temp.textContent || temp.innerText || "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const featuredImage =
    blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  const title = getPlainText(blog?.title?.rendered || "");

  const formattedDate = blog?.date
    ? new Date(blog.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  // Loading state
  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#FFFBF4] px-5">
        <div className="text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-[#E8D8C4] border-t-[#603912]" />

          <p className="font-['Work_Sans'] text-sm tracking-wide text-[#796958]">
            Preparing your reading experience...
          </p>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FFFBF4] px-5 text-center">
        <span className="mb-5 text-5xl">✦</span>

        <h1 className="font-['Fraunces'] text-3xl text-[#452D1C] sm:text-4xl">
          Story Not Found
        </h1>

        <p className="mt-4 max-w-md font-['Work_Sans'] text-sm leading-7 text-[#796958]">
          {error || "Sorry, this blog post could not be found."}
        </p>

        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#603912] px-7 py-3.5 font-['Work_Sans'] text-sm font-semibold text-white transition duration-300 hover:bg-[#452D1C]"
        >
          <span aria-hidden="true">←</span>
          Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <main className="relative isolate overflow-hidden bg-[#FFFBF4]">

        <BlogDetailsBanner/>

      {/* ========================================
          BACKGROUND DECORATIONS
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-40 h-[450px] w-[450px] rounded-full bg-[#DCE8D5]/50 blur-[120px]" />

        <div className="absolute -right-48 top-[650px] h-[500px] w-[500px] rounded-full bg-[#FFD0A8]/40 blur-[130px]" />

        <div className="absolute left-1/2 top-[1100px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#F0E4D1]/60 blur-[110px]" />
      </div>

      {/* ========================================
          BLOG ARTICLE
      ======================================== */}

      <article className="relative px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-28 lg:pt-16">

        <div className="mx-auto max-w-6xl">

          {/* Top Navigation */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10">

            <Link
              to="/blog"
              className="group inline-flex items-center gap-3 rounded-full border border-[#DCC8B0]/70 bg-white/60 px-5 py-3 font-['Work_Sans'] text-sm font-medium text-[#603912] shadow-sm backdrop-blur-xl transition duration-300 hover:border-[#603912]/40 hover:bg-white/90"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              All Stories
            </Link>

            <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/50 px-4 py-2.5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#A56B32]" />

              <span className="font-['Work_Sans'] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#796958] sm:text-xs">
                Tanishq Journal
              </span>
            </div>

          </div>

          {/* Article Header */}

          <header className="mx-auto mb-9 max-w-5xl text-center sm:mb-12">

            {/* Date */}

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#DCC8B0]/70 bg-white/55 px-5 py-2.5 shadow-sm backdrop-blur-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#A56B32]"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 11h18" />
              </svg>

              <time
                dateTime={blog.date}
                className="font-['Work_Sans'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#79583B] sm:text-xs"
              >
                {formattedDate}
              </time>
            </div>

            {/* Decorative Accent */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B78A59]" />

              <span className="text-lg text-[#A56B32]">✦</span>

              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B78A59]" />
            </div>

            {/* Title */}

            <h1
              className="font-['Fraunces'] text-4xl font-medium leading-[1.15] tracking-tight text-[#382519] sm:text-5xl md:text-6xl lg:text-7xl"
              dangerouslySetInnerHTML={{
                __html: blog.title.rendered,
              }}
            />

            {/* Introductory Description */}

            {blog.excerpt?.rendered && (
              <div
                className="mx-auto mt-6 max-w-3xl font-['Work_Sans'] text-base leading-8 text-[#796958] sm:mt-7 sm:text-lg sm:leading-9 [&_p]:m-0"
                dangerouslySetInnerHTML={{
                  __html: blog.excerpt.rendered,
                }}
              />
            )}

          </header>

          {/* ========================================
              FEATURED IMAGE
          ======================================== */}

          {featuredImage && (
            <div className="group relative mx-auto mb-10 max-w-5xl sm:mb-14">

              {/* Outer Glow */}

              <div className="pointer-events-none absolute -inset-3 rounded-[30px] bg-gradient-to-br from-[#DCE8D5]/60 via-white/30 to-[#FFD0A8]/60 opacity-80 blur-xl sm:-inset-5" />

              {/* Image Frame */}

              <div className="relative overflow-hidden rounded-[22px] border border-white/80 bg-white/50 p-2 shadow-[0_20px_70px_rgba(96,57,18,0.12)] backdrop-blur-xl sm:rounded-[30px] sm:p-3">

                <div className="relative overflow-hidden rounded-[16px] bg-[#E9DDCC] sm:rounded-[22px]">

                  <img
                    src={featuredImage}
                    alt={title}
                    fetchPriority="high"
                    className="max-h-[650px] min-h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:min-h-[380px] lg:min-h-[480px]"
                  />

                  {/* Image Gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2F2116]/20 via-transparent to-white/10" />

                  {/* Image Label */}

                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2.5 font-['Work_Sans'] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#603912] shadow-sm backdrop-blur-xl sm:text-xs">
                      <span className="text-[#A56B32]">✦</span>
                      A Taste of Tanishq
                    </span>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ========================================
              ARTICLE CONTENT GLASS PANEL
          ======================================== */}

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-white/75 via-[#F4F1E5]/55 to-[#FFD9B8]/35 p-5 shadow-[0_12px_45px_rgba(96,57,18,0.06)] backdrop-blur-2xl sm:rounded-[30px] sm:p-8 md:p-10 lg:p-14">

              {/* Decorative Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/60 blur-[70px]" />

              <div className="relative z-10">

                {/* Article Section Heading */}

                <div className="mb-8 border-b border-[#DCC8B0]/70 pb-7 sm:mb-10 sm:pb-9">

                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-9 rounded-full bg-[#A56B32]" />

                    <span className="font-['Work_Sans'] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#98612E] sm:text-xs">
                      The Story
                    </span>
                  </div>

                  <h2 className="font-['Fraunces'] text-2xl font-medium text-[#452D1C] sm:text-3xl">
                    {title}
                  </h2>

                </div>

                {/* Full Blog Content */}

                <div
                  className="
                    blog-content
                    max-w-none
                    break-words
                    font-['Work_Sans']
                    text-[15px]
                    leading-[1.95]
                    text-[#625142]

                    [&>p]:mb-6
                    [&>p:last-child]:mb-0

                    [&_h2]:mb-5
                    [&_h2]:mt-12
                    [&_h2]:font-['Fraunces']
                    [&_h2]:text-3xl
                    [&_h2]:font-medium
                    [&_h2]:leading-tight
                    [&_h2]:text-[#382519]

                    [&_h3]:mb-4
                    [&_h3]:mt-10
                    [&_h3]:font-['Fraunces']
                    [&_h3]:text-2xl
                    [&_h3]:font-medium
                    [&_h3]:text-[#452D1C]

                    [&_h4]:mb-3
                    [&_h4]:mt-8
                    [&_h4]:font-['Fraunces']
                    [&_h4]:text-xl
                    [&_h4]:text-[#452D1C]

                    [&_a]:font-medium
                    [&_a]:text-[#98612E]
                    [&_a]:underline
                    [&_a]:underline-offset-4
                    [&_a:hover]:text-[#603912]

                    [&_strong]:font-semibold
                    [&_strong]:text-[#452D1C]

                    [&_img]:my-8
                    [&_img]:h-auto
                    [&_img]:max-w-full
                    [&_img]:rounded-2xl

                    [&_figure]:my-8
                    [&_figcaption]:mt-3
                    [&_figcaption]:text-center
                    [&_figcaption]:text-sm
                    [&_figcaption]:text-[#796958]

                    [&_ul]:mb-7
                    [&_ul]:list-disc
                    [&_ul]:space-y-2
                    [&_ul]:pl-6

                    [&_ol]:mb-7
                    [&_ol]:list-decimal
                    [&_ol]:space-y-2
                    [&_ol]:pl-6

                    [&_li]:pl-1

                    [&_blockquote]:my-9
                    [&_blockquote]:rounded-r-2xl
                    [&_blockquote]:border-l-4
                    [&_blockquote]:border-[#B78A59]
                    [&_blockquote]:bg-white/50
                    [&_blockquote]:px-5
                    [&_blockquote]:py-5
                    [&_blockquote]:font-['Fraunces']
                    [&_blockquote]:text-lg
                    [&_blockquote]:italic
                    [&_blockquote]:leading-8
                    [&_blockquote]:text-[#603912]

                    [&_table]:my-8
                    [&_table]:w-full
                    [&_table]:border-collapse
                    [&_th]:border
                    [&_th]:border-[#DCC8B0]
                    [&_th]:bg-white/60
                    [&_th]:p-3
                    [&_td]:border
                    [&_td]:border-[#DCC8B0]
                    [&_td]:p-3

                    [&_iframe]:my-8
                    [&_iframe]:max-w-full

                    sm:text-base
                    sm:leading-[2]
                  "
                  dangerouslySetInnerHTML={{
                    __html: blog.content?.rendered || "",
                  }}
                />

                {/* Bottom Article Divider */}

                <div className="mt-10 flex items-center gap-4 border-t border-[#DCC8B0]/70 pt-8 sm:mt-14 sm:pt-10">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/70 text-xl text-[#98612E] shadow-sm backdrop-blur-lg">
                    ✦
                  </div>

                  <div>
                    <p className="font-['Fraunces'] text-lg text-[#452D1C]">
                      Made with a love for good food.
                    </p>

                    <p className="mt-1 font-['Work_Sans'] text-xs leading-6 text-[#796958] sm:text-sm">
                      Thank you for being a part of the Tanishq story.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* ========================================
              BOTTOM NAVIGATION
          ======================================== */}

          <div className="mx-auto mt-10 max-w-5xl sm:mt-14">

            <div className="flex flex-col items-start justify-between gap-5 rounded-[22px] border border-white/80 bg-white/45 p-5 shadow-[0_10px_35px_rgba(96,57,18,0.05)] backdrop-blur-xl sm:flex-row sm:items-center sm:p-7">

              <div>
                <p className="font-['Fraunces'] text-xl text-[#452D1C] sm:text-2xl">
                  Enjoyed this story?
                </p>

                <p className="mt-2 font-['Work_Sans'] text-sm leading-6 text-[#796958]">
                  Discover more stories, flavours, and inspiration.
                </p>
              </div>

              <Link
                to="/blog"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#603912] px-7 py-3.5 font-['Work_Sans'] text-sm font-semibold text-white shadow-[0_6px_20px_rgba(96,57,18,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#452D1C] hover:shadow-lg"
              >
                View All Blogs

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>
      </article>
    </main>
  );
};

export default BlogDetails;

