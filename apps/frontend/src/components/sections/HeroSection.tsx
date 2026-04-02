'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className="relative w-full bg-[#E9F7ED] overflow-hidden">

      {/* ── DESKTOP LAYOUT (lg+) — aspect-ratio 1920:1010 ── */}
      <div className="hidden lg:block relative w-full pt-[52.6%]">

        {/* "Flour You" — bottom text, behind everything */}
        <h2
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none pointer-events-none z-0"
          style={{ top: '62.6%', fontSize: 'clamp(80px, 15.6vw, 300px)', lineHeight: 1.25 }}
        >
          {t('headline2')}
        </h2>

        {/* Cookie decoration 1 — center-left, behind product image */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-10 blur-[4px]"
          style={{ left: '29.5%', top: '27.1%', width: '17.4%', opacity: 0.9 }}
        />

        {/* Product image — centered, large */}
        <img
          src="/assets/hero/product-hero.png"
          alt="Vita Products"
          className="absolute z-20 pointer-events-none object-contain"
          style={{ left: '50%', transform: 'translateX(-50%)', top: '1.7%', width: '69.4%' }}
        />

        {/* Cookie decoration 2 — bottom-center, in front of product */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-30 blur-[4px]"
          style={{ left: '49.4%', top: '59%', width: '14.5%', opacity: 0.9 }}
        />

        {/* "Biscuits" — top text, in front of product */}
        <h1
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none pointer-events-none z-40"
          style={{ top: '11.6%', fontSize: 'clamp(80px, 13vw, 250px)', lineHeight: 1.25 }}
        >
          {t('headline1')}
        </h1>

        {/* Description text — right side */}
        <p
          className="absolute font-['Outfit'] font-normal text-[#333733] z-40"
          style={{ right: '2.1%', top: '46.8%', width: '13.5%', fontSize: '1.04vw', lineHeight: 1.26 }}
        >
          {t('description')}
        </p>
      </div>

      {/* ── MOBILE LAYOUT (< lg) ── */}
      <div className="lg:hidden flex flex-col items-center overflow-hidden pt-8 pb-4">
        <h1
          className="font-['Funnel_Display'] font-bold text-[#23B349] text-center leading-none select-none"
          style={{ fontSize: 'clamp(56px, 20vw, 120px)', lineHeight: 1.2 }}
        >
          {t('headline1')}
        </h1>
        <img
          src="/assets/hero/product-hero.png"
          alt="Vita Products"
          className="w-[85%] max-w-xs object-contain -mt-4 -mb-4 relative z-10"
        />
        <h2
          className="font-['Funnel_Display'] font-bold text-[#333733] text-center leading-none select-none"
          style={{ fontSize: 'clamp(60px, 22vw, 140px)', lineHeight: 1.2 }}
        >
          {t('headline2')}
        </h2>
        <p className="font-['Outfit'] font-normal text-[#333733]/70 text-center text-sm px-8 pt-4 pb-6 max-w-xs">
          {t('description')}
        </p>
      </div>

    </section>
  );
}
