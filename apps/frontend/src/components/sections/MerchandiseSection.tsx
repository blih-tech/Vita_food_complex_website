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
            {/* Merchandise Products */}
            <div className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] hover:shadow-lg transition-shadow group">
                <img 
                    src="/assets/merchandise/polo-shirt.svg" 
                    alt="Black Polo Shirt" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] hover:shadow-lg transition-shadow group">
                <img 
                    src="/assets/merchandise/cap.svg" 
                    alt="Black Cap" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] hover:shadow-lg transition-shadow group">
                <img 
                    src="/assets/merchandise/tshirt.svg" 
                    alt="White Shirt" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
