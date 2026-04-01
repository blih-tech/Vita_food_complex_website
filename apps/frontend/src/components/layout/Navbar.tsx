'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@frontend/navigation';

type NavKey = 'products' | 'company' | 'recipes' | 'more';

const navLinks: { key: NavKey; href: string }[] = [
  { key: 'products', href: '/products' },
  { key: 'company', href: '/about' },
  { key: 'recipes', href: '/recipes' },
  { key: 'more', href: '/more' },
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Main bar */}
      <div className="w-full max-w-[1664px] h-24 px-5 py-3 bg-[#23B349] rounded-xl flex items-center shadow-lg">
        <div className="flex-1 px-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="w-[72px] h-[72px] flex-shrink-0">
            <img
              src="/assets/brand/vita-logo.svg"
              alt="Vita Food Complex"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.key} className="flex items-end gap-1.5">
                <Link
                  href={link.href}
                  className="text-white text-2xl font-semibold font-['Outfit'] leading-none hover:opacity-80 transition-opacity"
                >
                  {t(`links.${link.key}`)}
                </Link>
                <img
                  src="/assets/brand/arrow-down-01.svg"
                  alt=""
                  className="w-5 h-5 opacity-80 mb-0.5"
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#E9F7ED] rounded-lg flex items-center gap-2 hover:bg-white transition-colors"
            >
              <span className="text-[#0F4B1F] text-xl font-bold font-['Funnel_Display'] leading-none">
                {t('cta')}
              </span>
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="/contact" className="px-4 py-2 bg-[#E9F7ED] rounded-lg">
              <span className="text-[#0F4B1F] text-base font-bold font-['Funnel_Display']">
                {t('cta')}
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="text-white p-1"
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-28 left-4 right-4 bg-[#23B349] rounded-xl shadow-xl flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 text-white text-xl font-semibold font-['Outfit'] border-b border-white/20 last:border-0 hover:bg-white/10 transition-colors"
            >
              {t(`links.${link.key}`)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
