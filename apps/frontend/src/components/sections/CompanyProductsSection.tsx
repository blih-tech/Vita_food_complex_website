'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import WaveDivider from '@frontend/components/ui/WaveDivider';

const PRODUCTS = [
  { name: 'Bora-Chocolate', category: 'Cream', image: '/assets/products/bora-chocolate.svg' },
  { name: 'Kiyu Cream With Milk', category: 'Cream', image: '/assets/products/vita-vanilla.svg' },
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
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-24 lg:pt-32 pb-24 lg:pb-40">
          
          <div className="w-full lg:max-w-[50%] flex flex-col gap-12">
            
            {/* Heading Group */}
            <div className="flex flex-col gap-6">
              {/* Label - Pixel Perfect 24px */}
              <p className="text-2xl font-normal text-[#333733] font-['Outfit']">
                {t('home.company.label')}
              </p>

              {/* Heading - Pixel Perfect 200px/180px */}
              <div className="flex flex-col font-['Funnel_Display'] font-bold leading-[1.25]">
                <h2 className="text-[120px] md:text-[180px] lg:text-[200px] text-[#23B349]">
                  Our
                </h2>
                <h2 className="text-[100px] md:text-[150px] lg:text-[180px] text-[#23B349]">
                  Company
                </h2>
              </div>
            </div>

            {/* Body - Pixel Perfect 24px, 0.96 letter spacing */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-[1.26] tracking-[0.96px] max-w-3xl">
              {t('home.company.body')}
            </p>

            {/* CTA - Pixel Perfect 32px, 20/80 padding */}
            <div className="flex">
              <button className="px-20 py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-[32px] leading-10 tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors">
                {t('home.company.cta')}
              </button>
            </div>
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
        <div className="relative z-[10] max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] py-24 lg:py-32">
          
          {/* Header row: header (left) counter (right) */}
          <div className="flex items-end justify-between mb-24 lg:mb-32">
            <div className="flex flex-col gap-4">
              {/* About Label - Pixel Perfect 24px */}
              <p className="text-white opacity-80 text-2xl font-semibold font-['Outfit']">
                {t('home.products.label')}
              </p>
              {/* Heading - Pixel Perfect 96px */}
              <h2 className="text-white text-6xl md:text-8xl lg:text-[96px] font-semibold font-['Funnel_Display'] leading-[1.25]">
                {t('home.products.heading')}
              </h2>
            </div>
            {/* Counter - Pixel Perfect 96px */}
            <span className="font-['Outfit'] font-semibold text-white text-6xl md:text-[96px] leading-none tabular-nums">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* PRODUCT DISPLAY AREA */}
          <div className="relative flex flex-col lg:flex-row items-center min-h-[600px]">

            {/* Left: product info */}
            <div className="z-10 relative lg:w-1/3 mb-20 lg:mb-0 text-center lg:text-left flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                {/* Category - Pixel Perfect 24px */}
                <p className="text-white text-2xl font-normal font-['Outfit'] opacity-90">{product.category}</p>
                {/* Name - Pixel Perfect 48px */}
                <h3 className="text-white text-4xl lg:text-[48px] font-bold font-['Funnel_Display'] leading-[1.25]">
                  {product.name}
                </h3>
              </div>
              {/* View Product Button - Pixel Perfect 32px, 20/80 padding */}
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#0F4B1F] border border-white/20 hover:bg-[#1a6b2e] text-white px-20 py-5 rounded-lg font-bold text-[32px] leading-10 tracking-[1.28px] transition-colors font-['Funnel_Display']">
                  {t('home.products.viewProduct')}
                </button>
              </div>
            </div>

            {/* Center: circle + main product */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              {/* Figma Circles */}
              <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-[#BBE7C7] absolute" />
              
              {/* Product Shadow (Ellipse 30) */}
              <div className="absolute bottom-[10%] w-[600px] h-[100px] bg-[#000500] rounded-full blur-[50px] opacity-60" />

              {/* Main product image */}
              <div className="relative z-10 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>

              {/* Scattered biscuit pieces */}
              <div className="absolute right-[-5%] top-[-5%] hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={150} height={150}
                       className="object-contain animate-float blur-[4px]" alt="" />
              </div>
              <div className="absolute left-[-10%] bottom-[5%] hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={120} height={120}
                       className="object-contain rotate-45 animate-float-delayed blur-[3px]" alt="" />
              </div>
              <div className="absolute right-[10%] bottom-[-10%] hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={100} height={100}
                       className="object-contain -rotate-12 blur-[14px]" alt="" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — Navigation arrows */}
          <div className="flex items-center justify-between mt-24 lg:mt-32">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
                         hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
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
