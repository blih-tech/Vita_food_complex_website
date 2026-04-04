'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import WaveDivider from '@frontend/components/ui/WaveDivider';

const PRODUCTS = [
  { name: 'Bora-Chocolate', category: 'Biscuit', image: '/assets/products/bora-chocolate.svg' },
  { name: 'Kiyu Cream With Milk', category: 'Biscuit', image: '/assets/products/vita-vanilla.svg' },
  { name: 'Vita Wheat Flour', category: 'Flour', image: '/assets/products/super-flour.svg' },
];

const TOTAL_PRODUCTS = 11;

export default function CompanyProductsSection() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use mock data but handle the index correctly
  const product = PRODUCTS[currentIndex % PRODUCTS.length];

  const prev = () => setCurrentIndex((i) => (i === 0 ? TOTAL_PRODUCTS - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i + 1) % TOTAL_PRODUCTS);

  return (
    <section id="company" className="relative overflow-visible">
      {/* ══════════════════════════════════════════
          COMPANY SECTION  — light mint background
          ══════════════════════════════════════════ */}
      <div className="relative bg-[#E9F7ED] overflow-visible z-[1]">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-20 lg:pt-28 pb-20 lg:pb-32">
          
          {/* Text column — max 50% width on desktop */}
          <div className="w-full lg:max-w-[50%]">
            
            {/* Label - Issue 2 */}
            <p className="text-sm font-medium text-green-700 mb-3">
              {t('home.company.label')}
            </p>

            {/* Heading - Issue 1 */}
            <h2 className="text-5xl md:text-[56px] font-bold leading-tight mb-8 text-[#23B349] max-w-md">
              {t('home.company.heading')}
            </h2>

            {/* Body */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-xl lg:text-2xl leading-relaxed tracking-[0.04em] mb-10 lg:mb-12">
              {t('home.company.body')}
            </p>

            {/* CTA */}
            <button className="px-16 lg:px-20 py-4 lg:py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-3xl tracking-[0.04em] hover:bg-[#1a6b2e] transition-colors">
              {t('home.company.cta')}
            </button>
          </div>
        </div>

        {/* ── Bridging product image (desktop only) - Issue 4 ── */}
        <div
          className="absolute hidden lg:block z-[20] pointer-events-none"
          style={{ right: 0, bottom: '-35%', width: '47.1%' }}
        >
          <img
            src="/assets/products/product-display.png"
            alt="Vita Products Showcase"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Wavy Divider - Issue 5 / Step 3 */}
      <WaveDivider
        fillColor="#0F4B1F"
        bgColor="#E9F7ED"
        direction="down"
        className="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
      />

      {/* ══════════════════════════════════════════
          PRODUCTS SECTION  — dark green background
          ══════════════════════════════════════════ */}
      <div id="products" className="relative bg-[#0F4B1F] overflow-hidden z-[0] -mt-[1px]">
        <div className="relative z-[10] max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] py-20 lg:py-28">
          
          {/* Header row: label/heading (left) counter (right) - Issue 6 */}
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div className="flex flex-col gap-2">
              <p className="text-green-300 text-sm font-medium uppercase tracking-widest">
                {t('home.products.label')}
              </p>
              <h2 className="text-white text-4xl md:text-6xl font-bold">
                {t('home.products.heading')}
              </h2>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-3xl md:text-5xl tabular-nums">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* PRODUCT DISPLAY AREA - Issue 5 */}
          <div className="relative flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[500px]">

            {/* Left: product info */}
            <div className="z-10 relative lg:w-1/3 mb-12 lg:mb-0 text-center lg:text-left">
              <p className="text-green-300 text-sm lg:text-lg mb-2">{product.category}</p>
              <h3 className="text-white text-3xl lg:text-5xl font-bold mb-8">{product.name}</h3>
              <button className="bg-[#23B349] hover:bg-[#1d9e3e] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors">
                {t('home.products.viewProduct')}
              </button>
            </div>

            {/* Center/Right: circle + main product */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Light green circle background */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full bg-green-400/20 absolute" />
              
              {/* Main product image */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Scattered biscuit pieces (desktop only) */}
              <div className="absolute right-0 top-0 hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={100} height={100}
                       className="object-contain animate-float" alt="" />
              </div>
              <div className="absolute right-[10%] bottom-0 hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={80} height={80}
                       className="object-contain rotate-45 animate-float-delayed" alt="" />
              </div>
              <div className="absolute left-[20%] top-[10%] hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={60} height={60}
                       className="object-contain -rotate-12 opacity-60" alt="" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — Navigation arrows - Issue 5 */}
          <div className="flex items-center justify-between mt-12 lg:mt-20">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-2xl
                         hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-2xl
                         hover:bg-white/20 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
