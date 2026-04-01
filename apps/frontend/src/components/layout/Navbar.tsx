'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@frontend/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Products', href: '/products', id: 'products-main' },
    { name: 'Community', href: '/community', id: 'community' },
    { name: 'Company', href: '/about', id: 'company' },
    { name: 'Products', href: '/products-categories', id: 'products-categories' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center">
      <div className="w-[1664px] h-24 px-5 py-3 bg-brand-brand rounded-xl inline-flex justify-start items-center gap-2.5 overflow-hidden">
        <div className="flex-1 px-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="w-20 h-20 relative overflow-hidden">
            <img 
              src="/assets/brand/vita-logo.svg" 
              alt="Vita Food Complex" 
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.id} className="pb-px flex justify-center items-end gap-2 cursor-pointer group">
                <Link
                  href={link.href}
                  className="justify-start text-Text-white text-2xl font-semibold font-['Outfit'] hover:opacity-90 transition-opacity"
                >
                  {link.name}
                </Link>
                {/* Dropdown Chevron */}
                <div className="flex justify-end items-end gap-2.5">
                  <div className="w-6 h-6 relative">
                    <div className="w-3 h-1.5 left-[6px] top-[9px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-Neutral-white-white-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Now Button - Desktop */}
          <div className="hidden md:flex justify-start items-center gap-4">
            <Link 
              href="/order"
              className="px-6 py-2.5 bg-Neutral-white-white-500 rounded-lg flex justify-center items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="justify-start text-Text-dark-subtle text-2xl font-bold font-['Funnel_Display']">
                Order Now
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link 
              href="/order"
              className="px-4 py-2 bg-Neutral-white-white-500 rounded-lg flex justify-center items-center gap-2.5 overflow-hidden"
            >
              <div className="justify-start text-Text-dark-subtle text-lg font-bold font-['Funnel_Display']">
                Order Now
              </div>
            </Link>
            <button className="text-Text-white hover:opacity-90 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
