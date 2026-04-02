'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className="relative w-full bg-[#E9F7ED] overflow-hidden">

      {/* ── DESKTOP LAYOUT (lg+) — aspect-ratio 1920 : 1010 ── */}
      <div className="hidden lg:block relative w-full pt-[52.6%]">

        {/* Layer 1 — Decorative background element (left side, green pattern, 15% opacity) */}
        <img
          src="/assets/hero/hero-bg-element.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-auto pointer-events-none select-none z-[1]"
          style={{ left: '0.47%' }}
        />

        {/* Layer 2 — "Flour You" — behind product image */}
        <h2
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none pointer-events-none z-[2]"
          style={{ top: '62.6%', fontSize: 'clamp(80px, 15.6vw, 300px)', lineHeight: 1.25 }}
        >
          {t('headline2')}
        </h2>

        {/* Layer 3 — "Biscuits" — behind product image */}
        <h1
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none pointer-events-none z-[3]"
          style={{ top: '11.6%', fontSize: 'clamp(80px, 13vw, 250px)', lineHeight: 1.25 }}
        >
          {t('headline1')}
        </h1>

        {/* Layer 4 — Product image (on top of both headings, transparent PNG) */}
        <img
          src="/assets/hero/product-hero.png"
          alt="Vita Products"
          className="absolute pointer-events-none object-contain z-[4]"
          style={{
            left: '13.9%',
            top: '1.7%',
            width: '69.4%',
          }}
        />

        {/* Layer 5 — Cookie decoration 2 (center-left, in front of product) */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[5]"
          style={{ left: '29.5%', top: '27.1%', width: '17.4%', filter: 'blur(4px)' }}
        />

        {/* Layer 5 — Cookie decoration 1 (bottom-center, in front of product) */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[5]"
          style={{ left: '49.4%', top: '59%', width: '14.5%', filter: 'blur(4px)' }}
        />

        {/* Layer 6 — Description text (right side) */}
        <p
          className="absolute font-['Outfit'] font-normal text-[#333733] z-[6]"
          style={{
            left: '79.9%',
            top: '46.8%',
            width: '13.5%',
            fontSize: 'clamp(12px, 1.04vw, 20px)',
            lineHeight: 1.26,
          }}
        >
          {t('description')}
        </p>

        {/* Layer 6 — Texted badge with avatars (right side, below description) */}
        <img
          src="/assets/hero/texted-badge.svg"
          alt={t('badge')}
          className="absolute z-[6] pointer-events-none"
          style={{ left: '79.9%', top: '59.7%', width: '13.4%' }}
        />
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
          className="w-[90%] max-w-sm object-contain -mt-4 -mb-2 relative z-10"
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
