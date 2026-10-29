import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

import logo from "../../../assets/CompanyLogo.png";

const leftNavLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  // { name: "Menu", path: "/menu" },
  // { name: "Blog", path: "/blog" },
];

const rightNavLinks = [
  // { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Active route detection
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Close mobile menu after navigation
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Lock background scrolling while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Reusable navigation link
  const renderNavLink = (link) => (
    <Link
      key={link.name}
      to={link.path}
      aria-current={isActive(link.path) ? "page" : undefined}
      className={`
        inline-flex h-[44px] shrink-0
        items-center justify-center
        whitespace-nowrap rounded-full
        px-3.5 font-['Work_Sans']
        text-sm font-medium
        transition-all duration-300
        xl:px-4 xl:text-base
        2xl:px-5 2xl:text-[18px]
        ${
          isActive(link.path)
            ? "bg-white/10 text-white"
            : "text-white/75 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      {link.name}
    </Link>
  );

  return (
    <>
      {/* ================= MAIN HEADER ================= */}
      <header className="absolute left-0 top-0 z-50 w-full px-3 pt-5 sm:px-5 sm:pt-8 lg:px-6 lg:pt-[66px]">
        <div
          className="
            relative mx-auto flex
            h-12 w-full max-w-[1600px]
            items-center justify-between
            rounded-full bg-[#603912]
            px-4 shadow-lg
            sm:h-14 sm:px-6
            lg:h-[90px] lg:px-8
            xl:px-10
          "
        >
          {/* LEFT SIDE: HOME, ABOUT, MENU, BLOG */}
          <nav
            aria-label="Left navigation"
            className="
              hidden min-w-0 flex-1
              items-center justify-start
              gap-2
              lg:flex
              xl:gap-3
              2xl:gap-4
            "
          >
            {leftNavLinks.map(renderNavLink)}
          </nav>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full text-white
              transition-colors hover:bg-white/10
              lg:hidden
            "
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {/* CENTER LOGO */}
          <Link
            to="/"
            aria-label="Tanishq Home"
            className="
              absolute left-1/2 top-1/2 z-20
              flex h-[76px] w-[76px]
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full bg-[#603912] p-1
              sm:h-[94px] sm:w-[94px]
              lg:h-[150px] lg:w-[150px]
              xl:h-[165px] xl:w-[165px]
            "
          >
            <img
              src={logo}
              alt="Tanishq Indian Restaurant"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* RIGHT SIDE: GALLERY, CONTACT, EXPLORE MENU */}
          <div
            className="
              hidden min-w-0 flex-1
              items-center justify-end
              gap-3
              lg:flex
              xl:gap-4
              2xl:gap-6
            "
          >
            {/* Right Navigation Links */}
            <nav
              aria-label="Right navigation"
              className="
                flex shrink-0 items-center
                gap-2
                xl:gap-3
                2xl:gap-4
              "
            >
              {rightNavLinks.map(renderNavLink)}
            </nav>

            {/* Explore Menu Button */}
            <Link
              to="/menu"
              className="
                ml-2 inline-flex h-[58px] shrink-0
                items-center justify-center
                rounded-full bg-white
                px-6
                font-['Work_Sans']
                text-base font-medium
                text-[#603912]
                transition-colors duration-300
                hover:bg-[#F1D6A8]
                xl:ml-4 xl:px-7 xl:text-[17px]
                2xl:ml-6 2xl:px-8 2xl:text-lg
              "
            >
              Explore Menu
            </Link>
          </div>

          {/* MOBILE / TABLET EXPLORE MENU BUTTON */}
          <Link
            to="/menu"
            className="
              ml-auto inline-flex shrink-0
              items-center justify-center
              rounded-full bg-white
              px-3 py-2
              font-['Work_Sans']
              text-[11px] font-medium
              text-[#603912]
              transition-colors hover:bg-[#F1D6A8]
              sm:px-5 sm:py-3 sm:text-xs
              lg:hidden
            "
          >
            Explore Menu
          </Link>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
        className={`
          fixed inset-0 z-[60]
          bg-black/50
          transition-opacity duration-300
          lg:hidden
          ${
            isMenuOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`
          fixed left-0 top-0 z-[70]
          flex h-dvh
          w-[min(85%,360px)]
          flex-col overflow-y-auto
          bg-[#603912] p-6
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${
            isMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/15 pb-5">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Tanishq Home"
            className="h-16 w-16"
          >
            <img
              src={logo}
              alt="Tanishq Indian Restaurant"
              className="h-full w-full object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full text-white
              transition-colors hover:bg-white/10
            "
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Heading */}
        <p className="mb-3 mt-7 px-4 font-['Work_Sans'] text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
          Explore Tanishq
        </p>

        {/* Mobile Navigation Links */}
        <nav
          aria-label="Mobile navigation links"
          className="flex flex-col gap-2"
        >
          {allNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={`
                flex items-center justify-between
                rounded-xl px-4 py-4
                font-['Work_Sans']
                text-base font-medium
                transition-colors duration-300
                ${
                  isActive(link.path)
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <span>{link.name}</span>

              {isActive(link.path) && (
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#F1D6A8]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Drawer CTA */}
        <div className="mt-auto pt-8">
          <Link
            to="/menu"
            onClick={closeMenu}
            className="
              flex w-full items-center
              justify-center gap-2
              rounded-full bg-white
              px-6 py-4
              font-['Work_Sans']
              text-sm font-semibold
              text-[#603912]
              transition-colors hover:bg-white/90
            "
          >
            Explore Our Menu
            <span aria-hidden="true">→</span>
          </Link>

          <p className="mt-5 text-center font-['Work_Sans'] text-xs text-white/45">
            Authentic Vegetarian Dining
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;