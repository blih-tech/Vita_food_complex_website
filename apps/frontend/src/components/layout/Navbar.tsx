'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@frontend/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('links.products'), href: '/products' },
    { name: t('links.company'), href: '/about' },
    { name: t('links.recipes'), href: '/recipes' },
    { name: t('links.more'), href: '/learn' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter uppercase" style={{ color: 'var(--color-primary)' }}>
            Vita Food
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-body-text hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Language Switcher */}
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-zinc-100 rounded-full p-1">
            <Link
              href={pathname}
              locale="en"
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                pathname.startsWith('/en') ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500'
              }`}
            >
              EN
            </Link>
            <Link
              href={pathname}
              locale="am"
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                pathname.startsWith('/am') ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500'
              }`}
            >
              AM
            </Link>
          </div>
          
          <button className="hidden sm:block px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
            {t('cta')}
          </button>
        </div>
      </div>
    </nav>
  );
}
