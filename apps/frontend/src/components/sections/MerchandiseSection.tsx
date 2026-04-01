'use client';

import { useTranslations } from 'next-intl';

type MerchItem = {
  src: string;
  alt: string;
};

const MERCH: MerchItem[] = [
  { src: '/assets/merchandise/polo-shirt.svg', alt: 'Black Polo Shirt' },
  { src: '/assets/merchandise/cap.svg', alt: 'Black Cap' },
  { src: '/assets/merchandise/tshirt.svg', alt: 'White Shirt' },
];

export default function MerchandiseSection() {
  const t = useTranslations('Merchandise');

  return (
    <section id="merchandise" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* LEFT: text */}
          <div className="lg:w-[380px] xl:w-[440px] flex-shrink-0 space-y-6">
            <h2
              className="font-['Funnel_Display'] font-bold text-[#333733] leading-none"
              style={{ fontSize: 'clamp(36px, 3.3vw, 64px)' }}
            >
              {t('heading')}
            </h2>
            <p className="font-['Outfit'] font-normal text-[#333733]/60 text-xl lg:text-2xl leading-relaxed">
              {t('subtext')}
            </p>
            <button className="px-10 py-4 bg-[#23B349] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-3xl tracking-[0.04em] hover:bg-[#0F4B1F] transition-colors">
              {t('cta')}
            </button>
          </div>

          {/* RIGHT: 3 product images */}
          <div className="flex-1 flex flex-row gap-4 lg:gap-6 w-full">
            {MERCH.map((item) => (
              <div
                key={item.alt}
                className="flex-1 aspect-[3/4] overflow-hidden rounded-3xl bg-[#F5F5F5] group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
