'use client';

import { useTranslations } from 'next-intl';

export default function SocialWallSection() {
  const t = useTranslations('SocialWall');

  return (
    <section id="social" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-3">
          <span className="font-['Outfit'] font-semibold text-[#23B349] text-2xl uppercase tracking-widest">
            {t('label')}
          </span>
          <h2
            className="font-['Funnel_Display'] font-bold text-[#333733] leading-none"
            style={{ fontSize: 'clamp(36px, 3.3vw, 64px)' }}
          >
            {t('heading')}
          </h2>
          <p className="font-['Outfit'] text-[#333733]/60 text-xl max-w-xl mx-auto">
            {t('subtext')}
          </p>
        </div>

        {/* Masonry grid – 5 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {/* Large – col 1-2, row 1-2 */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group">
            <img
              src="/assets/social/social-1.svg"
              alt="Moments with Vita 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Small – col 3, row 1 */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
            <img
              src="/assets/social/social-2.svg"
              alt="Moments with Vita 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Tall – col 4, row 1-2 */}
          <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group">
            <img
              src="/assets/social/social-3.svg"
              alt="Moments with Vita 3"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Small – col 5, row 1 */}
          <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group hidden lg:block">
            <img
              src="/assets/social/social-4.svg"
              alt="Moments with Vita 4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Wide – col 3-4 or 3-5, row 2 */}
          <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl overflow-hidden group">
            <img
              src="/assets/social/social-5.svg"
              alt="Moments with Vita 5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
