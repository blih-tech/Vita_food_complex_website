"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@frontend/navigation";
import Image from "next/image";
import { ChevronDown, Globe, X, Menu, ArrowRight } from "lucide-react";

type NavKey = "products" | "company" | "people-planet" | "resources" | "whats-new";

const navLinks: { key: NavKey; href: string; hasDropdown?: boolean }[] = [
  { key: "products", href: "/products", hasDropdown: true },
  { key: "company", href: "/about", hasDropdown: true },
  { key: "people-planet", href: "/people-planet", hasDropdown: true },
  { key: "resources", href: "/resources", hasDropdown: true },
  { key: "whats-new", href: "/whats-new", hasDropdown: true },
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<NavKey | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key: NavKey) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Main bar - Exact Figma design specifications with proper containment */}
      <div 
        className="w-full max-w-[1664px] pl-[12px] sm:pl-[24px] lg:pl-[48px] pr-[12px] sm:pr-[16px] lg:pr-[32px] py-[8px] sm:py-[12px] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] flex items-center shadow-lg overflow-hidden transition-all duration-300 relative z-50"
        style={{
          background: "radial-gradient(ellipse at 25.041px 143.28px, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(75,217,64,1) 80%, rgba(116,255,56,1) 100%)"
        }}
      >
        <div className="flex gap-[16px] sm:gap-[32px] lg:gap-[64px] items-center flex-1">
          {/* Logo - Clean single logo design */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative">
              <div className="w-[60px] h-[28px] sm:w-[80px] h-[38px] lg:w-[102.56px] lg:h-[48.406px] relative">
                <Image
                  src="/assets/brand/vita-logo.svg"
                  alt="Vita Food Complex"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav links - Hidden on smaller screens */}
          <div className="hidden xl:flex items-center gap-[24px] 2xl:gap-[48px]">
            {navLinks.map((link) => (
                <div
                  key={link.key}
                  className="flex gap-[4px] items-center justify-center group cursor-pointer"
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(link.key);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-white text-[16px] lg:text-[18px] 2xl:text-[20px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.08px] hover:opacity-80 transition-opacity whitespace-nowrap"
                    onClick={(e) => {
                      if (link.hasDropdown) e.preventDefault();
                    }}
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                  {link.hasDropdown && (
                    <div className="flex items-center justify-center">
                      <ChevronDown className={`w-4 h-4 text-white opacity-80 group-hover:opacity-100 transition-transform duration-300 ${activeDropdown === link.key ? "rotate-180" : ""}`} />
                    </div>
                  )}
                </div>
            ))}
          </div>
        </div>

        {/* Right side - Language switcher and CTA */}
        <div className="flex gap-[12px] sm:gap-[16px] lg:gap-[24px] items-center">
          {/* Language switcher - Black background with world icon */}
          <button
            onClick={handleLanguageSwitch}
            className="h-[24px] sm:h-[28px] lg:h-[31px] rounded-[12px] sm:rounded-[14px] lg:rounded-[15.55px] w-[70px] sm:w-[80px] lg:w-[90px] bg-black border border-white/20 flex items-center justify-center gap-1.5 cursor-pointer hover:bg-gray-900 transition-colors"
            aria-label={`Switch language. Current: ${currentLocale === 'en' ? 'English' : 'Amharic'}`}
          >
            {/* World icon */}
            <Globe size={14} strokeWidth={1.5} className="text-white flex-shrink-0" />
            <span className="text-white text-[10px] sm:text-[11px] lg:text-[12px] font-bold leading-none uppercase">
              {currentLocale === 'en' ? 'UK|EN' : 'ET|AM'}
            </span>
          </button>

          {/* Desktop CTA - Hidden on smaller screens */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border border-white px-[16px] lg:px-[24px] py-[8px] lg:py-[10px] rounded-[99px] flex items-center justify-center gap-[8px] hover:bg-white hover:text-[#23B349] transition-all duration-300 group"
            >
              <span className="text-white group-hover:text-[#23B349] text-[18px] lg:text-[20px] 2xl:text-[24px] font-['Funnel_Display'] font-medium leading-normal tracking-[-0.096px] whitespace-nowrap">
                {t("cta")}
              </span>
            </Link>
          </div>

          {/* Mobile menu button - Visible on smaller screens */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={2.5} />
            ) : (
              <Menu size={24} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown - Responsive design with proper containment */}
      {mobileOpen && (
        <div className="absolute top-[80px] sm:top-[100px] left-4 right-4 max-w-[calc(100vw-2rem)] bg-[#23B349] rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col xl:hidden overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-2">
            {navLinks.map((link) => (
              <div key={link.key}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(link.key);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  className="px-6 py-4 text-white text-[18px] sm:text-[20px] font-['Funnel_Display'] font-medium rounded-[16px] hover:bg-white/10 transition-colors flex justify-between items-center"
                >
                  {t(`links.${link.key}`)}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.key ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {/* Simple mobile sub-menu implementation */}
                {link.hasDropdown && activeDropdown === link.key && (
                   <div className="px-6 py-2 flex flex-col gap-2 pl-10 bg-black/5 rounded-[12px] mb-2 mx-2">
                     <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-white/90 py-2 text-[16px]">Overview</Link>
                   </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Language switcher in mobile menu */}
          <div className="px-6 py-4 border-t border-white/20 bg-black/5">
            <div className="space-y-4">
              <div className="text-white/80 text-[14px] font-['Funnel_Display'] font-semibold uppercase tracking-wider">
                Select Language
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* English option */}
                <Link
                  href={`/en${pathWithoutLocale}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-[16px] transition-all ${
                    currentLocale === 'en' 
                      ? 'bg-white text-[#23B349] shadow-md' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-[14px] font-bold">UK|EN</span>
                </Link>
                
                {/* Amharic option */}
                <Link
                  href={`/am${pathWithoutLocale}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-[16px] transition-all ${
                    currentLocale === 'am' 
                      ? 'bg-white text-[#23B349] shadow-md' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-[14px] font-bold">ET|AM</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-black/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center text-[#23B349] bg-white text-[18px] sm:text-[20px] font-['Funnel_Display'] font-bold py-4 rounded-[16px] shadow-lg active:scale-[0.98] transition-all"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}

      {/* Mega Menu Dropdown */}
      <div 
        className={`w-full max-w-[1664px] bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden absolute top-[calc(100%-1.5rem)] lg:top-[calc(100%-2rem)] z-40 ${
          activeDropdown && !mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ paddingTop: "2rem" }}
      >
        <div className="p-8 lg:p-12 pt-12 lg:pt-16">
          {activeDropdown === "products" && (
            <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">
              {/* Left Column: Categories */}
              <div className="flex flex-col gap-6 flex-1 max-w-[340px]">
                <div className="flex flex-col gap-3">
                  {/* Biscuit Card */}
                  <Link href="/products?category=biscuits" onClick={() => setActiveDropdown(null)} className="flex items-center justify-between p-4 rounded-[16px] border border-gray-200 hover:border-[#23B349] hover:bg-[#23B349]/5 transition-colors group">
                    <div>
                      <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[18px] font-bold group-hover:text-[#23B349] transition-colors">Biscuits</h3>
                      <p className="text-gray-500 text-[14px]">Explore all our biscuit products</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image src="/assets/products/biscuit-scatter.png" alt="Biscuits" fill className="object-cover" sizes="48px" />
                    </div>
                  </Link>
                  {/* Flour Card */}
                  <Link href="/products?category=flour" onClick={() => setActiveDropdown(null)} className="flex items-center justify-between p-4 rounded-[16px] bg-gray-50 hover:bg-[#23B349]/5 transition-colors group">
                    <div>
                      <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[18px] font-bold group-hover:text-[#23B349] transition-colors">Flour</h3>
                      <p className="text-gray-500 text-[14px]">Different purpose flour products</p>
                    </div>
                    <div className="w-12 h-12 bg-[#FFF6E5] rounded-lg overflow-hidden relative flex items-center justify-center">
                      <span className="text-2xl">🌾</span>
                    </div>
                  </Link>
                  {/* Recipes Card */}
                  <Link href="/recipes" onClick={() => setActiveDropdown(null)} className="flex items-center justify-between p-4 rounded-[16px] bg-gray-50 hover:bg-[#23B349]/5 transition-colors group">
                    <div>
                      <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[18px] font-bold group-hover:text-[#23B349] transition-colors">Recipes</h3>
                      <p className="text-gray-500 text-[14px]">Our products can always be better enjoyed</p>
                    </div>
                    <div className="w-12 h-12 bg-[#FFF0F0] rounded-lg overflow-hidden relative flex items-center justify-center">
                      <span className="text-2xl">👨‍🍳</span>
                    </div>
                  </Link>
                </div>
                <Link href="/products" onClick={() => setActiveDropdown(null)} className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#23B349] text-white px-6 py-4 rounded-[999px] font-['Funnel_Display'] text-[16px] font-medium transition-colors w-full group">
                  View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Middle Column: Product Lists */}
              <div className="flex gap-16 flex-1 border-l border-gray-100 pl-12">
                <ul className="flex flex-col gap-4">
                  {["Zoo", "Chewata", "Oreo", "Sina", "Tafach", "Marie", "Marie Cream"].map(item => (
                    <li key={item}>
                      <Link href={`/products`} onClick={() => setActiveDropdown(null)} className="text-gray-600 hover:text-[#23B349] text-[16px] font-medium transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-4">
                  {["Bora", "Cream", "Glucose", "Digestive", "Tea Biscuit", "High Energy"].map(item => (
                    <li key={item}>
                      <Link href={`/products`} onClick={() => setActiveDropdown(null)} className="text-gray-600 hover:text-[#23B349] text-[16px] font-medium transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Featured */}
              <div className="flex-1 max-w-[280px]">
                <Link href="/products" onClick={() => setActiveDropdown(null)} className="block bg-gray-50 rounded-[24px] p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow group">
                  <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl relative overflow-hidden">
                    <Image src="/assets/products/figma/figma_prod_12.png" alt="Sina Biscuit" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="280px" />
                  </div>
                  <div>
                    <p className="text-[#23B349] text-[14px] font-bold uppercase tracking-wider mb-1">Special Edition—</p>
                    <h4 className="text-[#1A1A1A] font-['Funnel_Display'] text-[20px] font-bold group-hover:text-[#23B349] transition-colors">Sina Biscuit</h4>
                    <p className="text-gray-500 text-[14px] mt-2">Latest product updates.</p>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {activeDropdown === "company" && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-4xl mx-auto">
              {[
                { title: "About Us", desc: "Discover our story and mission" },
                { title: "Why Choose Vita®", desc: "What makes our products special" },
                { title: "Sustainability", desc: "Our commitment to the planet" }
              ].map((item, idx) => (
                <Link key={idx} href="/about" onClick={() => setActiveDropdown(null)} className="flex-1 p-6 rounded-[24px] border border-gray-100 hover:border-[#23B349] hover:bg-[#23B349]/5 transition-all group">
                  <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[20px] font-bold group-hover:text-[#23B349] transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {activeDropdown === "people-planet" && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-2xl mx-auto">
              {[
                { title: "People", desc: "Our community and workforce" },
                { title: "Our Planet", desc: "Environmental initiatives" }
              ].map((item, idx) => (
                <Link key={idx} href="/people-planet" onClick={() => setActiveDropdown(null)} className="flex-1 p-6 rounded-[24px] border border-gray-100 hover:border-[#23B349] hover:bg-[#23B349]/5 transition-all group">
                  <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[20px] font-bold group-hover:text-[#23B349] transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {activeDropdown === "resources" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { title: "Resources Center", desc: "Helpful guides and docs" },
                { title: "Blogs", desc: "Read our latest articles" },
                { title: "Gallery", desc: "Visuals from our factory" },
                { title: "Certifications", desc: "Quality standards" }
              ].map((item, idx) => (
                <Link key={idx} href="/resources" onClick={() => setActiveDropdown(null)} className="flex-1 p-6 rounded-[24px] border border-gray-100 hover:border-[#23B349] hover:bg-[#23B349]/5 transition-all group">
                  <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[20px] font-bold group-hover:text-[#23B349] transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {activeDropdown === "whats-new" && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-4xl mx-auto">
              {[
                { title: "Latest News", desc: "Company announcements" },
                { title: "Events", desc: "Upcoming and past events" },
                { title: "Careers", desc: "Join our growing team" }
              ].map((item, idx) => (
                <Link key={idx} href="/whats-new" onClick={() => setActiveDropdown(null)} className="flex-1 p-6 rounded-[24px] border border-gray-100 hover:border-[#23B349] hover:bg-[#23B349]/5 transition-all group">
                  <h3 className="text-[#1A1A1A] font-['Funnel_Display'] text-[20px] font-bold group-hover:text-[#23B349] transition-colors mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
