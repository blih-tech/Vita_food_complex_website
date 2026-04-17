"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

type NavKey = "products" | "company" | "people-planet" | "resources" | "whats-new";

const navLinks: { key: NavKey; href: string }[] = [
  { key: "products", href: "/products" },
  { key: "company", href: "/about" },
  { key: "people-planet", href: "/people-planet" },
  { key: "resources", href: "/resources" },
  { key: "whats-new", href: "/whats-new" },
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[128px] py-[32px]">
      {/* Main bar - Figma design specifications */}
      <div 
        className="w-full max-w-[1664px] pl-[48px] pr-[32px] py-[8px] rounded-[32px] flex items-center shadow-lg"
        style={{
          background: "radial-gradient(ellipse at 25.041px 143.28px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)"
        }}
      >
        <div className="flex gap-[64px] items-center flex-1">
          {/* Logo - Figma design */}
          <Link href="/" className="flex items-center gap-0 shrink-0">
            <div className="relative">
              {/* Main logo vector */}
              <div className="w-[102.56px] h-[48.406px] relative">
                <Image
                  src="/assets/brand/vita-logo.svg"
                  alt="Vita Food Complex"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Additional logo elements from Figma */}
              <div className="absolute top-[27.23px] left-[11.05px] w-[75.896px] h-[39.724px]">
                <Image
                  src="/assets/brand/vita-logo-text.svg"
                  alt="Vita"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav links - Figma design */}
          <div className="hidden lg:flex items-center gap-[48px]">
            {navLinks.map((link) => (
              <button
                key={link.key}
                className="flex gap-[8px] items-center justify-center group"
              >
                <Link
                  href={link.href}
                  className="text-white text-[20px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.08px] hover:opacity-80 transition-opacity"
                >
                  {t(`links.${link.key}`)}
                </Link>
                <div className="flex items-center justify-center">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    className="rotate-180 text-white opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Language switcher and CTA */}
        <div className="flex gap-[24px] items-center">
          {/* Language switcher - Figma design */}
          <div className="h-[20px] rounded-[15.55px] w-[57.458px] bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
            <span className="text-white text-xs font-medium">EN</span>
          </div>

          {/* Desktop CTA - Figma design */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border border-white px-[16px] py-[8px] rounded-[99px] flex items-center justify-center gap-[8px] hover:bg-white hover:text-[#23B349] transition-colors"
            >
              <span className="text-white text-[24px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.096px]">
                {t("cta")}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown - Updated for new navigation */}
      {mobileOpen && (
        <div className="absolute top-[120px] left-4 right-4 bg-[#23B349] rounded-[32px] shadow-xl flex flex-col lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-white text-lg font-['Funnel_Display'] font-medium border-b border-white/20 last:border-0 hover:bg-white/10 transition-colors"
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
          <div className="px-6 py-4 border-t border-white/20">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center text-white text-lg font-['Funnel_Display'] font-medium py-3 border border-white rounded-[99px] hover:bg-white hover:text-[#23B349] transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
