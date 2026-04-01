'use client';

import { useTranslations } from 'next-intl';

export default function MerchandiseSection() {
  const t = useTranslations('Merchandise');

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="heading-section">
                {t('heading')}
            </h2>
            <p className="text-xl text-zinc-500 max-w-lg">
                {t('subtext')}
            </p>
          </div>
          <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all" style={{ backgroundColor: 'var(--color-primary)' }}>
            {t('cta')}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
            {/* Merch Placeholders */}
            <div className="w-full aspect-[3/4] bg-zinc-100 rounded-[2rem] flex items-center justify-center text-zinc-300 font-bold uppercase text-xs text-center p-4">
                Black Polo Shirt
            </div>
            <div className="w-full aspect-[3/4] bg-zinc-900 rounded-[2rem] flex items-center justify-center text-white/20 font-bold uppercase text-xs text-center p-4 translate-y-8">
                Black Cap
            </div>
            <div className="w-full aspect-[3/4] bg-zinc-100 rounded-[2rem] flex items-center justify-center text-zinc-300 font-bold uppercase text-xs text-center p-4">
                White Shirt
            </div>
        </div>
      </div>
    </section>
  );
}
