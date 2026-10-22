
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

import logo from "../../../assets/CompanyLogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Close the drawer when the route changes.
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent background scrolling while the drawer is open.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navigation Bar */}
      <header className="absolute left-0 top-0 z-50 w-full px-3 sm:px-5 pt-8 lg:px-6 lg:pt-[66px]">
        <div className="relative mx-auto flex h-12 sm:h-14 w-full max-w-[1440px] items-center justify-between rounded-full bg-[#603912] px-3 shadow-lg  lg:h-[90px]   lg:px-5">

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-[16px] lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`inline-flex h-[46px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 font-['Work_Sans'] text-[18px] font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {/* Center Logo */}
          <Link
            to="/"
            aria-label="Tanishq Home"
            className="absolute left-1/2 top-1/2 z-20 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#603912] p-1 sm:h-[94px] sm:w-[94px] lg:h-[170px] lg:w-[170px]"
          >
            <img
              src={logo}
              alt="Tanishq Indian Restaurant"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* Desktop CTA */}
          <Link
            to="/menu"
            className="ml-auto inline-flex  shrink-0 items-center justify-center rounded-full bg-white  font-['Work_Sans'] text-[11px] font-medium text-[#603912] transition-colors hover:bg-[#F1D6A8] px-3 py-2 sm:px-6 sm:py-3  sm:text-xs  lg:py-5 lg:px-[30px] lg:text-lg"
          >
            Explore Menu
          </Link>
        </div>
      </header>

      {/* Mobile / Tablet Overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Left Off-Canvas Drawer */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed left-0 top-0 z-[70] flex h-dvh w-[min(85%,360px)] flex-col overflow-y-auto bg-[#603912] p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Tanishq Home"
            className="h-16 w-16"
            tabIndex={isMenuOpen ? 0 : -1}
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
            tabIndex={isMenuOpen ? 0 : -1}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="mt-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={`rounded-xl px-4 py-4 font-['Work_Sans'] text-base font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Header;
