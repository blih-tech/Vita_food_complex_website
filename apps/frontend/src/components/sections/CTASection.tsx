'use client';

import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('CTA');

  return (
    <section id="contact" className="relative bg-[#0F4B1F] py-20 lg:py-28 overflow-hidden">
      {/* Background texture circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#23B349]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-[#23B349]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">

          {/* ── LEFT: text + CTA ── */}
          <div className="flex flex-col gap-6 lg:gap-8 max-w-xl text-center lg:text-left">
            <h2
              className="font-['Funnel_Display'] font-bold text-white leading-none"
              style={{ fontSize: 'clamp(48px, 3.75vw, 72px)' }}
            >
              {t('heading')}
            </h2>
            <p className="font-['Outfit'] font-normal text-white/60 text-xl lg:text-2xl leading-relaxed">
              {t('subtext')}
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-10 py-5 bg-[#E9F7ED] text-[#0F4B1F] rounded-xl font-['Funnel_Display'] font-bold text-2xl lg:text-3xl hover:bg-white transition-colors shadow-lg">
                {t('cta')}
              </button>
            </div>
          </div>

          {/* ── RIGHT: 3D cartoon animal illustrations ── */}
          <div className="flex items-end gap-4 lg:gap-6 flex-shrink-0">
            {/* Bear */}
            <div className="w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src="/assets/cta/bear.svg"
                alt="Bear illustration"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            {/* Fox – tallest center */}
            <div className="w-36 h-36 lg:w-48 lg:h-48 xl:w-56 xl:h-56 flex items-center justify-center -translate-y-4 hover:-translate-y-6 transition-transform duration-300">
              <img
                src="/assets/cta/fox.svg"
                alt="Fox illustration"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            {/* Rabbit */}
            <div className="w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src="/assets/cta/rabbit.svg"
                alt="Rabbit illustration"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
