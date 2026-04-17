"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@frontend/navigation";
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
  const router = useRouter();
  const pathname = usePathname();

  // Language switcher function
  const handleLanguageSwitch = () => {
    const currentLocale = pathname.split('/')[1]; // Get current locale from URL
    const newLocale = currentLocale === 'en' ? 'am' : 'en';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // Get current locale for display
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      {/* Main bar - Exact Figma design specifications */}
      <div 
        className="w-full max-w-[1664px] mx-4 lg:mx-8 xl:mx-auto pl-[12px] sm:pl-[24px] lg:pl-[48px] pr-[12px] sm:pr-[16px] lg:pr-[32px] py-[8px] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] flex items-center shadow-lg"
        style={{
          background: "radial-gradient(ellipse at 25.041px 143.28px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)"
        }}
      >
        <div className="flex gap-[16px] sm:gap-[32px] lg:gap-[64px] items-center flex-1">
          {/* Logo - Exact Figma design with proper positioning */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative inline-grid leading-[0] place-items-start">
              {/* Main logo vector - 102.56px × 48.406px */}
              <div className="w-[60px] h-[28px] sm:w-[80px] h-[38px] lg:w-[102.56px] lg:h-[48.406px] relative">
                <Image
                  src="/assets/brand/vita-logo.svg"
                  alt="Vita Food Complex"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Logo text - positioned exactly as in Figma */}
              <div className="absolute top-[16px] left-[6px] sm:top-[20px] sm:left-[8px] lg:top-[27.23px] lg:left-[11.05px] w-[44px] h-[23px] sm:w-[55px] h-[29px] lg:w-[75.896px] lg:h-[39.724px]">
                <Image
                  src="/assets/brand/logo-text.svg"
                  alt="Vita"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Logo badge - small circle element */}
              <div className="absolute top-0 left-[24px] sm:left-[32px] lg:left-[39.88px] w-[13px] h-[13px] sm:w-[17px] sm:h-[17px] lg:w-[22.807px] lg:h-[22.467px]">
                <Image
                  src="/assets/brand/logo-badge.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav links - Hidden on smaller screens */}
          <div className="hidden xl:flex items-center gap-[48px]">
            {navLinks.map((link) => (
              <button
                key={link.key}
                className="flex gap-[8px] items-center justify-center group"
              >
                <Link
                  href={link.href}
                  className="text-white text-[16px] lg:text-[20px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.08px] hover:opacity-80 transition-opacity whitespace-nowrap"
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
        <div className="flex gap-[12px] sm:gap-[16px] lg:gap-[24px] items-center">
          {/* Language switcher - Functional with exact Figma design */}
          <button
            onClick={handleLanguageSwitch}
            className="h-[16px] sm:h-[18px] lg:h-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[15.55px] w-[46px] sm:w-[52px] lg:w-[57.458px] bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
            aria-label={`Switch language. Current: ${currentLocale === 'en' ? 'English' : 'Amharic'}`}
          >
            <span className="text-white text-[10px] sm:text-[11px] lg:text-xs font-medium uppercase">
              {currentLocale === 'en' ? 'EN' : 'AM'}
            </span>
          </button>

          {/* Desktop CTA - Hidden on smaller screens */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border border-white px-[12px] sm:px-[14px] lg:px-[16px] py-[6px] sm:py-[7px] lg:py-[8px] rounded-[99px] flex items-center justify-center gap-[8px] hover:bg-white hover:text-[#23B349] transition-colors"
            >
              <span className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.096px] whitespace-nowrap">
                {t("cta")}
              </span>
            </Link>
          </div>

          {/* Mobile menu button - Visible on smaller screens */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="xl:hidden text-white p-2"
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
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
                width="20"
                height="20"
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

      {/* Mobile dropdown - Responsive design */}
      {mobileOpen && (
        <div className="absolute top-[80px] sm:top-[90px] lg:top-[120px] left-4 right-4 bg-[#23B349] rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] shadow-xl flex flex-col xl:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 sm:px-6 py-3 sm:py-4 text-white text-[14px] sm:text-[16px] lg:text-lg font-['Funnel_Display'] font-medium border-b border-white/20 last:border-0 hover:bg-white/10 transition-colors"
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
          
          {/* Language switcher in mobile menu */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/20">
            <button
              onClick={() => {
                handleLanguageSwitch();
                setMobileOpen(false);
              }}
              className="flex items-center gap-3 text-white text-[14px] sm:text-[16px] lg:text-lg font-['Funnel_Display'] font-medium hover:bg-white/10 transition-colors w-full text-left"
            >
              <span>Language</span>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-80">Current:</span>
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  {currentLocale === 'en' ? 'EN' : 'AM'}
                </span>
                <span className="text-xs opacity-60">({currentLocale === 'en' ? 'English' : 'Amharic'})</span>
              </div>
            </button>
          </div>
          
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-white/20">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center text-white text-[14px] sm:text-[16px] lg:text-lg font-['Funnel_Display'] font-medium py-2 sm:py-3 border border-white rounded-[99px] hover:bg-white hover:text-[#23B349] transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
