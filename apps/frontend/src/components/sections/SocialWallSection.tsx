'use client';

import { useTranslations } from 'next-intl';

export default function SocialWallSection() {
  const t = useTranslations('SocialWall');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center space-y-4 mb-16">
        <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            {t('label')}
        </span>
        <h2 className="heading-section">
            {t('heading')}
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            {t('subtext')}
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[200px]">
        {/* Masonry-like Grid */}
        <div className="bg-zinc-100 rounded-3xl col-span-2 row-span-2 flex items-center justify-center text-zinc-300 font-bold uppercase tracking-widest">
            Lifestyle 1
        </div>
        <div className="bg-zinc-200 rounded-3xl col-span-1 row-span-1 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-widest text-xs">
            Lifestyle 2
        </div>
        <div className="bg-zinc-100 rounded-3xl col-span-1 row-span-2 flex items-center justify-center text-zinc-300 font-bold uppercase tracking-widest text-xs">
            Lifestyle 3
        </div>
        <div className="bg-zinc-300 rounded-3xl col-span-1 row-span-1 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-widest text-xs">
            Lifestyle 4
        </div>
        <div className="bg-zinc-100 rounded-3xl col-span-2 row-span-1 flex items-center justify-center text-zinc-300 font-bold uppercase tracking-widest text-xs">
            Lifestyle 5
        </div>
      </div>
    </section>
  );
}
