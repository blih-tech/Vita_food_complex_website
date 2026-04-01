'use client';

import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('CTA');

  return (
    <section className="py-24 bg-[#0f4b1f]">
      <div className="container mx-auto px-6 relative overflow-hidden rounded-[4rem] bg-white/5 p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="space-y-8 max-w-2xl text-center lg:text-left">
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight">
            {t('heading')}
          </h2>
          <p className="text-xl text-white/60">
            {t('subtext')}
          </p>
          <button className="px-12 py-5 bg-white text-[#0f4b1f] rounded-full font-bold text-xl hover:bg-zinc-100 transition-all shadow-xl">
            {t('cta')}
          </button>
        </div>

        <div className="relative flex gap-4">
             {/* Animal Illustration Placeholders */}
             <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xs rotate-12">Chicken</div>
             <div className="w-32 h-32 bg-green-300/20 rounded-full flex items-center justify-center text-green-300 font-bold text-xs -rotate-12 translate-y-8">Horse</div>
             <div className="w-28 h-28 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold text-xs rotate-45">Cow</div>
        </div>
      </div>
    </section>
  );
}
