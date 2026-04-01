'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#E9F7ED] overflow-hidden flex flex-col justify-end pt-28 pb-0"
    >
      {/* Organic green blobs in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-[#23B349] opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-[#23B349] opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Cookie decoration – blurred, behind text, desktop only */}
      <img
        src="/assets/hero/cookie-decoration-1.png"
        alt=""
        aria-hidden="true"
        className="absolute hidden xl:block w-[22vw] max-w-sm blur-[3px] opacity-50 top-[38%] left-[42%] rotate-12 pointer-events-none z-0"
      />
      <img
        src="/assets/hero/biscuit-piece.svg"
        alt=""
        aria-hidden="true"
        className="absolute hidden xl:block w-[14vw] max-w-[220px] blur-[2px] opacity-40 top-[18%] left-[35%] -rotate-6 pointer-events-none z-0"
      />

      {/* Product image – right side, desktop */}
      <div className="absolute hidden lg:flex right-0 top-20 bottom-0 w-[44%] items-center justify-center pr-8 z-10 pointer-events-none">
        <div className="relative">
          <img
            src="/assets/hero/product-package.svg"
            alt="Vita Product Package"
            className="w-full max-w-[560px] object-contain drop-shadow-2xl"
          />
          {/* Star badge */}
          <img
            src="/assets/hero/star-badge.svg"
            alt={t('badge')}
            className="absolute -bottom-4 left-0 w-24 h-24 rotate-12"
          />
        </div>
      </div>

      {/* Typographic Hero – fills lower portion of section */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Mobile product image */}
        <div className="flex lg:hidden justify-center px-6 mb-6">
          <img
            src="/assets/hero/product-package.svg"
            alt="Vita Product Package"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>

        {/* "Biscuits" */}
        <div className="w-full overflow-hidden px-4 lg:px-16 xl:px-24">
          <h1
            className="font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none"
            style={{ fontSize: 'clamp(72px, 13vw, 260px)', lineHeight: 1.1 }}
          >
            {t('headline1')}
          </h1>
        </div>

        {/* "Flour You" */}
        <div className="w-full overflow-hidden px-2 lg:px-8">
          <h2
            className="font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none -mt-2 lg:-mt-5"
            style={{ fontSize: 'clamp(80px, 16vw, 310px)', lineHeight: 1.05 }}
          >
            {t('headline2')}
          </h2>
        </div>
      </div>

      {/* Subtext row – below headings */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between px-6 lg:px-16 xl:px-24 pt-4 pb-12 gap-4">
        <p className="font-['Outfit'] text-[#333733]/70 text-lg lg:text-xl max-w-xs leading-relaxed">
          From everyday baking to special treats, Vita products bring reliability, taste, and joy to your table.
        </p>
        <div className="flex items-center gap-2 text-[#23B349] font-['Outfit'] font-semibold text-sm uppercase tracking-widest">
          <span className="w-8 h-px bg-[#23B349] block" />
          100% Natural
        </div>
      </div>
    </section>
  );
}
