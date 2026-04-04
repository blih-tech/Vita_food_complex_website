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
          
          <div className="w-full lg:max-w-[50%]">
            
            {/* Label - Pixel Perfect 24px */}
            <p className="text-xl lg:text-2xl font-normal text-[#333733] mb-4">
              {t('home.company.label')}
            </p>

            {/* Heading - Pixel Perfect 200px/180px */}
            <div className="flex flex-col mb-8 font-['Funnel_Display'] font-bold leading-[0.9]">
              <h2 className="text-[120px] md:text-[180px] lg:text-[200px] text-[#23B349]">
                Our
              </h2>
              <h2 className="text-[100px] md:text-[150px] lg:text-[180px] text-[#23B349]">
                Company
              </h2>
            </div>

            {/* Body - Outfit 20px/24px */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-xl lg:text-2xl leading-relaxed tracking-[0.04em] mb-10 lg:mb-12 max-w-2xl">
              {t('home.company.body')}
            </p>

            {/* CTA - Pixel Perfect 32px */}
            <button className="px-12 lg:px-16 py-4 lg:py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-[32px] tracking-[0.04em] hover:bg-[#1a6b2e] transition-colors">
              {t('home.company.cta')}
            </button>
          </div>
        </div>

        {/* ── Bridging product image (desktop only) ── */}
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

      {/* Wavy Divider */}
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
          
          {/* Header row: label/heading (left) counter (right) */}
          <div className="flex items-end justify-between mb-16 lg:mb-24">
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl lg:text-2xl font-normal opacity-80">
                {t('home.products.label')}
              </p>
              <h2 className="text-white text-5xl md:text-7xl lg:text-[80px] font-bold font-['Funnel_Display']">
                {t('home.products.heading')}
              </h2>
            </div>
            {/* Counter - Pixel Perfect 96px */}
            <span className="font-['Outfit'] font-semibold text-white text-6xl md:text-[96px] leading-none tabular-nums opacity-90">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* PRODUCT DISPLAY AREA */}
          <div className="relative flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[600px]">

            {/* Left: product info */}
            <div className="z-10 relative lg:w-1/3 mb-16 lg:mb-0 text-center lg:text-left">
              {/* Category - Pixel Perfect 24px */}
              <p className="text-white/80 text-xl lg:text-2xl font-['Outfit'] mb-4">{product.category}</p>
              {/* Name - Pixel Perfect 48px */}
              <h3 className="text-white text-4xl lg:text-[48px] font-bold font-['Funnel_Display'] mb-10 leading-tight">
                {product.name}
              </h3>
              <button className="bg-[#23B349] hover:bg-[#1d9e3e] text-white px-10 py-4 rounded-lg font-bold text-xl lg:text-2xl transition-colors font-['Funnel_Display'] tracking-wider uppercase">
                {t('home.products.viewProduct')}
              </button>
            </div>

            {/* Center: circle + main product */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Figma Circles - high contrast light mint */}
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#BBE7C7]/20 border-[10px] border-[#20A342]/30 absolute" />
              <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#BBE7C7] border border-[#20A342] absolute shadow-inner" />
              
              {/* Main product image */}
              <div className="relative z-10 w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>

              {/* Scattered biscuit pieces */}
              <div className="absolute right-0 top-0 hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={120} height={120}
                       className="object-contain animate-float" alt="" />
              </div>
              <div className="absolute left-[10%] bottom-[10%] hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={100} height={100}
                       className="object-contain rotate-45 animate-float-delayed" alt="" />
              </div>
              <div className="absolute right-[15%] bottom-0 hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={80} height={80}
                       className="object-contain -rotate-12 opacity-80" alt="" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — Navigation arrows */}
          <div className="flex items-center justify-between mt-16 lg:mt-24">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-4xl
                         hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-4xl
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
