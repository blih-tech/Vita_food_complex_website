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
        {/* Masonry-like Grid with Real Images */}
        <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl hover:shadow-lg transition-shadow">
            <img 
                src="/assets/social/social-1.svg" 
                alt="Social Moment 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl hover:shadow-lg transition-shadow">
            <img 
                src="/assets/social/social-2.svg" 
                alt="Social Moment 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl hover:shadow-lg transition-shadow">
            <img 
                src="/assets/social/social-3.svg" 
                alt="Social Moment 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl hover:shadow-lg transition-shadow">
            <img 
                src="/assets/social/social-4.svg" 
                alt="Social Moment 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="col-span-2 row-span-1 overflow-hidden rounded-3xl hover:shadow-lg transition-shadow">
            <img 
                src="/assets/social/social-5.svg" 
                alt="Social Moment 5" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
      </div>
    </section>
  );
}
