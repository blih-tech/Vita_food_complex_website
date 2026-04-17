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
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLocale = pathSegments[0] || 'en';
    const newLocale = currentLocale === 'en' ? 'am' : 'en';
    
    // Handle root path case
    if (pathSegments.length === 1 && pathSegments[0] === currentLocale) {
      router.push(`/${newLocale}`);
      return;
    }
    
    // Replace the locale and keep the rest of the path
    if (pathSegments[0] === currentLocale) {
      pathSegments[0] = newLocale;
      const newPath = '/' + pathSegments.join('/');
      router.push(newPath);
    } else {
      // Fallback: add locale prefix
      router.push(`/${newLocale}${pathname}`);
    }
  };

  // Get current locale for display
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentLocale = pathSegments[0] || 'en';
  
  // Get the path without locale for navigation
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en' || segments[0] === 'am') {
      return '/' + segments.slice(1).join('/');
    }
    return pathname;
  };
  
  const pathWithoutLocale = getPathWithoutLocale();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 py-4">
      {/* Main bar - Exact Figma design specifications with proper containment */}
      <div 
        className="w-full max-w-[1664px] pl-[12px] sm:pl-[24px] lg:pl-[48px] pr-[12px] sm:pr-[16px] lg:pr-[32px] py-[8px] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] flex items-center shadow-lg overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 25.041px 143.28px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)"
        }}
      >
        <div className="flex gap-[16px] sm:gap-[32px] lg:gap-[64px] items-center flex-1">
          {/* Logo - Clean single logo design */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative">
              {/* Main logo only - no overlapping elements */}
              <div className="w-[60px] h-[28px] sm:w-[80px] h-[38px] lg:w-[102.56px] lg:h-[48.406px] relative">
                <Image
                  src="/assets/brand/vita-logo.svg"
                  alt="Vita Food Complex"
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
          {/* Language switcher - Black background with world icon */}
          <button
            onClick={handleLanguageSwitch}
            className="h-[20px] sm:h-[22px] lg:h-[24px] rounded-[12px] sm:rounded-[14px] lg:rounded-[15.55px] w-[70px] sm:w-[75px] lg:w-[80px] bg-black border border-gray-600 flex items-center justify-center gap-1 cursor-pointer hover:bg-gray-800 transition-colors"
            aria-label={`Switch language. Current: ${currentLocale === 'en' ? 'English' : 'Amharic'}`}
          >
            {/* World icon */}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-white text-[9px] sm:text-[10px] lg:text-[11px] font-bold leading-none">
              {currentLocale === 'en' ? 'UK|EN' : 'ET|AM'}
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

      {/* Mobile dropdown - Responsive design with proper containment */}
      {mobileOpen && (
        <div className="absolute top-[80px] sm:top-[90px] lg:top-[120px] left-4 right-4 max-w-[calc(100vw-2rem)] bg-[#23B349] rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] shadow-xl flex flex-col xl:hidden overflow-hidden">
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
            <div className="space-y-2">
              <div className="text-white text-[14px] sm:text-[16px] lg:text-lg font-['Funnel_Display'] font-medium">
                Language
              </div>
              <div className="flex flex-col gap-2">
                {/* English option */}
                <Link
                  href={`/en${pathWithoutLocale}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                    currentLocale === 'en' 
                      ? 'bg-white text-[#23B349]' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-sm font-medium">English (UK|EN)</span>
                </Link>
                
                {/* Amharic option */}
                <Link
                  href={`/am${pathWithoutLocale}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                    currentLocale === 'am' 
                      ? 'bg-white text-[#23B349]' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-sm font-medium">አማርኛ (ET|AM)</span>
                </Link>
              </div>
            </div>
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
