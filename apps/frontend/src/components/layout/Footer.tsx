'use client';

import { useTranslations } from 'next-intl';

const socialIcons = [
  { src: 'https://c.animaapp.com/mnenh57wcZ8d2C/img/facebook-1.svg', alt: 'Facebook' },
  { src: 'https://c.animaapp.com/mnenh57wcZ8d2C/img/instagram-1.svg', alt: 'Instagram' },
  { src: 'https://c.animaapp.com/mnenh57wcZ8d2C/img/x-1.svg', alt: 'X (Twitter)' },
  { src: 'https://c.animaapp.com/mnenh57wcZ8d2C/img/linkedin-1.svg', alt: 'LinkedIn' },
] as const;

const footerColumns = [
  {
    key: 'products' as const,
    items: ['Bora-Chocolate', 'Kiyu Cream', 'Super Flour', 'Vita Vanilla'],
  },
  {
    key: 'company' as const,
    items: ['About Us', 'Careers', 'News', 'Contact'],
  },
  {
    key: 'recipes' as const,
    items: ['Biscuit Recipes', 'Flour Recipes', 'Baking Tips', 'Blog'],
  },
] as const;

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full">

      {/* ── Dark footer ── */}
      <section className="w-full bg-[#000500] py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">

            {/* Brand column */}
            <div className="flex flex-col gap-4 lg:w-[360px] xl:w-[420px] flex-shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/brand/vita-logo.svg"
                  alt="Vita Food Complex Logo"
                  className="w-10 h-10 flex-shrink-0"
                />
                <span className="font-['Funnel_Display'] font-light text-white text-2xl lg:text-[40px] leading-none">
                  Vita Food Complex
                </span>
              </div>
              <p className="font-['Outfit'] font-normal text-white/60 text-sm leading-relaxed max-w-xs">
                {t('tagline')}
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-2">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href="#"
                    aria-label={icon.alt}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-7 h-7 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="flex flex-wrap gap-10 lg:gap-16 xl:gap-20 flex-1">
              {footerColumns.map((col) => (
                <div key={col.key} className="flex flex-col gap-4 min-w-[140px]">
                  <h4 className="font-['Funnel_Display'] font-bold text-white text-xl">
                    {t(`columns.${col.key}`)}
                  </h4>
                  <nav className="flex flex-col gap-2.5">
                    {col.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="font-['Outfit'] text-white/50 text-base hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="font-['Outfit'] text-white/30 text-sm text-center">
              {t('copyright')}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
