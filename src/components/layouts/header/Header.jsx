import { useState } from "react";
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
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-3 pt-5 sm:px-5 sm:pt-8 lg:px-6 lg:pt-[66px]">

      {/* Main Navigation Bar */}
      <div className="relative mx-auto flex h-[64px] w-full max-w-[1400px] items-center justify-between rounded-full bg-[#603912] px-3 shadow-lg sm:h-[76px] sm:px-5 lg:h-[110px] lg:px-5">

        {/* Left Navigation - Desktop */}
        <nav className="hidden items-center gap-[10px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`inline-flex h-[46px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 font-['Work_Sans'] text-[18px] font-medium leading-none tracking-normal transition-colors duration-300 ${
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
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Center Logo */}
        <Link
          to="/"
          aria-label="Tanishq Home"
          className="absolute left-1/2 top-1/2 z-20 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#603912] p-1 sm:h-[94px] sm:w-[94px] lg:h-[150px] lg:w-[150px]"
        >
          <img
            src={logo}
            alt="Tanishq Indian Restaurant"
            className="h-full w-full object-contain"
          />
        </Link>

        {/* Right CTA Button */}
        <Link
          to="/menu"
          className="ml-auto inline-flex h-[38px] shrink-0 items-center justify-center rounded-full bg-white px-3 font-['Work_Sans'] text-[11px] font-medium leading-none text-[#603912] transition-colors duration-300 hover:bg-[#F1D6A8] sm:h-[44px] sm:px-4 sm:text-xs lg:h-[61px] lg:w-[181px] lg:px-[30px] lg:text-[18px]"
        >
          Explore Menu
        </Link>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        className={`mx-auto mt-3 w-full max-w-[1400px] overflow-hidden rounded-2xl bg-[#603912] shadow-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[420px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-xl px-4 py-3 font-['Work_Sans'] text-sm font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <Link
            to="/menu"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-white px-5 font-['Work_Sans'] text-sm font-medium text-[#603912] transition-colors duration-300 hover:bg-[#F1D6A8]"
          >
            Explore Menu
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;