'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const products = [
    { id: 1, name: 'Bora-Chocolate', type: 'Biscuit', color: 'bg-zinc-800' },
    { id: 2, name: 'Vita-Vanilla', type: 'Biscuit', color: 'bg-zinc-200' },
    { id: 3, name: 'Super-Flour', type: 'Wheat Flour', color: 'bg-yellow-100' },
];

export default function ProductsSection() {
  const t = useTranslations('Products');
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[activeIndex];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                {t('label')}
            </span>
            <h2 className="heading-section">
                {t('heading')}
            </h2>
          </div>
          <div className="text-4xl font-bold text-zinc-300 tabular-nums">
            {activeIndex + 1}/{products.length}
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center gap-16">
            {/* Product Card */}
            <div className="w-full lg:w-1/2 aspect-square flex items-center justify-center relative">
                <div className={`w-80 h-[500px] ${currentProduct.color} rounded-[3rem] shadow-drop p-12 flex flex-col justify-between transition-all duration-500 transform`}>
                    <div className="space-y-4">
                        <span className="text-white/60 font-bold uppercase tracking-widest text-sm">
                            {currentProduct.type}
                        </span>
                        <h3 className="text-5xl font-black text-white tracking-tighter leading-none">
                            {currentProduct.name}
                        </h3>
                    </div>
                    
                    <button className="w-full py-4 bg-white text-zinc-900 rounded-full font-bold transition-transform hover:scale-105">
                        {t('cta')}
                    </button>
                </div>

                {/* Scattered biscuit pieces placeholders */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-zinc-400 rounded-xl rotate-12 opacity-40"></div>
                <div className="absolute bottom-20 left-0 w-12 h-12 bg-zinc-300 rounded-lg -rotate-45 opacity-60"></div>
            </div>

            <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-6">
                    <p className="text-2xl font-bold text-zinc-900">
                        {t('items.bora.description')}
                    </p>
                    <p className="text-zinc-500 text-lg max-w-md">
                        Experience the perfect crunch and rich flavor in every bite. Our products are made with passion and precision.
                    </p>
                </div>

                <div className="flex gap-6">
                    <button 
                        onClick={prevSlide}
                        className="w-16 h-16 rounded-full border-2 border-zinc-200 flex items-center justify-center text-2xl hover:bg-zinc-100 transition-colors"
                    >
                        ←
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="w-16 h-16 rounded-full border-2 border-zinc-200 flex items-center justify-center text-2xl hover:bg-zinc-100 transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Wavy Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 text-background-page translate-y-px" style={{ color: 'var(--color-background-page)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
