import { useState } from "react";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Products", hasDropdown: true },
  { name: "Community", hasDropdown: true },
  { name: "Company", hasDropdown: true },
  { name: "Products", hasDropdown: true },
];

interface HeaderProps {
  transparent?: boolean;
}

export const Header = ({ transparent = false }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={[
        "w-full z-20 flex items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 desktop:px-32 py-4 sm:py-6 lg:py-8",
        transparent ? "absolute top-0 left-0" : "relative bg-[#0f4b1f]",
      ].join(" ")}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img
          className="w-8 h-8 sm:w-10 sm:h-10"
          alt="Vita logo"
          src="/assets/brand/vita-logo.svg"
        />
        <div className="flex flex-col">
          <span className="[font-family:'Funnel_Display',Helvetica] font-light text-white text-lg sm:text-xl lg:text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
            Vita
          </span>
          <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-xs sm:text-sm lg:text-base tracking-[0] leading-[normal] whitespace-nowrap">
            FOOD EXPERT
          </span>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
        {navLinks.map((link) => (
          <div key={link.name} className="flex items-center gap-1 group relative">
            <a
              href="#"
              className="[font-family:'Outfit',Helvetica] font-normal text-white text-base lg:text-lg tracking-[0] leading-[normal] hover:text-[#23b349] transition-colors"
            >
              {link.name}
            </a>
            {link.hasDropdown && (
              <svg
                className="w-4 h-4 text-white group-hover:text-[#23b349] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Button className="hidden lg:flex h-auto px-6 xl:px-8 py-3 bg-white hover:bg-gray-100 rounded-lg overflow-hidden">
        <span className="[font-family:'Funnel_Display',Helvetica] font-bold text-black text-base lg:text-lg tracking-[0] leading-[normal]">
          Order Now
        </span>
      </Button>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0f4b1f] flex flex-col items-start px-4 py-6 gap-4 z-30 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-2 w-full">
              <a
                href="#"
                className="[font-family:'Outfit',Helvetica] font-normal text-white text-lg leading-normal hover:text-[#23b349] transition-colors flex-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
              {link.hasDropdown && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
          ))}
          <Button className="w-full h-auto px-6 py-3 bg-white hover:bg-gray-100 rounded-lg overflow-hidden mt-4">
            <span className="[font-family:'Funnel_Display',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
              Order Now
            </span>
          </Button>
        </div>
      )}
    </header>
  );
};
