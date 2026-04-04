'use client';

import { useState, useRef } from 'react';
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
    <div className="relative w-full">
      {/* ══════════════════════════════════════════
          OUR COMPANY (Top Half)
          ══════════════════════════════════════════ */}
      <section id="company" className="relative bg-[#E9F7ED] overflow-visible z-[1]">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-24 lg:pt-32 pb-24 lg:pb-40">
          <div className="w-full lg:max-w-[50%] flex flex-col gap-12">
            
            {/* Heading Group */}
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-normal text-[#333733] font-['Outfit']">
                {t('home.company.label')}
              </p>

              <div className="flex flex-col font-['Funnel_Display'] font-bold leading-[1.1]">
                <h2 className="text-[120px] md:text-[180px] lg:text-[200px] text-[#23B349]">
                  Our
                </h2>
                <h2 className="text-[100px] md:text-[150px] lg:text-[180px] text-[#23B349] -mt-4">
                  Company
                </h2>
              </div>
            </div>

            {/* Body */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-[1.26] tracking-[0.96px] max-w-3xl">
              {t('home.company.body')}
            </p>

            {/* CTA */}
            <div className="flex">
              <button className="px-20 py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-[32px] leading-10 tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors shadow-lg">
                {t('home.company.cta')}
              </button>
            </div>
          </div>
        </div>

        {/* ── BRIDGING SNACK BAG IMAGES (Spans into products) ── */}
        <div className="absolute hidden lg:flex z-[30] pointer-events-none right-0 bottom-[-20%] w-[48%] h-[800px] items-end justify-end">
          <div className="relative w-full h-full">
            {/* 7b914c12-7f60-4b0e-a98c-19e9815df713 1 */}
            <div className="absolute left-[0%] top-[15%] w-[55%] h-auto -rotate-6">
              <img src="/assets/products/bridge-product-2.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
            {/* zoo straw 1 */}
            <div className="absolute left-[35%] top-[25%] w-[45%] h-auto z-10">
              <img src="/assets/products/bridge-product-3.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
            {/* Free Packaging Snack Bar Mockup 1 (The Snack Bag) */}
            <div className="absolute right-[-5%] top-[10%] w-[50%] h-auto rotate-[12deg] z-0">
              <img src="/assets/products/bridge-product-1.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <WaveDivider
        fillColor="#0F4B1F"
        bgColor="#E9F7ED"
        direction="down"
        className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[160px] relative z-[20]"
      />

      {/* ══════════════════════════════════════════
          OUR PRODUCTS (Bottom Half)
          ══════════════════════════════════════════ */}
      <section id="products" className="relative bg-[#0F4B1F] overflow-hidden z-[10] -mt-[1px]">
        <div className="relative z-[10] max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] py-24 lg:py-32">
          
          {/* Header row: header (left) counter (right) */}
          <div className="flex items-end justify-between mb-24 lg:mb-32">
            <div className="flex flex-col gap-4">
              <p className="text-white opacity-80 text-2xl font-semibold font-['Outfit']">
                {t('home.products.label')}
              </p>
              <h2 className="text-white text-6xl md:text-8xl lg:text-[96px] font-semibold font-['Funnel_Display'] leading-none">
                {t('home.products.heading')}
              </h2>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-6xl md:text-[96px] leading-none tabular-nums opacity-90">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* PRODUCT DISPLAY AREA */}
          <div className="relative flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">

            {/* Left: product info */}
            <div className="z-10 relative lg:w-1/3 mb-20 lg:mb-0 text-center lg:text-left flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-white text-2xl font-normal font-['Outfit'] opacity-90">{product.category}</p>
                <h3 className="text-white text-4xl lg:text-[56px] font-bold font-['Funnel_Display'] leading-tight">
                  {product.name}
                </h3>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#0F4B1F] border-2 border-white/20 hover:bg-white hover:text-[#0F4B1F] text-white px-20 py-5 rounded-lg font-bold text-[32px] leading-none tracking-[1.28px] transition-all duration-300 font-['Funnel_Display'] uppercase">
                  {t('home.products.viewProduct')}
                </button>
              </div>
            </div>

            {/* Center: circle + main product */}
            <div className="relative flex-1 w-full flex items-center justify-center scale-110 lg:scale-125">
              {/* Figma Circles */}
              <div className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] lg:w-[750px] lg:h-[750px] rounded-full bg-[#BBE7C7] absolute z-0" />
              
              {/* Product Shadow (Ellipse 30) */}
              <div className="absolute bottom-[5%] w-[80%] h-[100px] bg-[#000500] rounded-full blur-[60px] opacity-50 z-5" />

              {/* Main product image */}
              <div className="relative z-10 w-80 h-80 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>

              {/* Scattered biscuit pieces */}
              <div className="absolute right-[-10%] top-[-10%] hidden md:block z-20">
                <Image src="/assets/products/biscuit-piece.png" width={180} height={180}
                       className="object-contain animate-float blur-[2px]" alt="" />
              </div>
              <div className="absolute left-[-15%] bottom-[10%] hidden md:block z-20">
                <Image src="/assets/products/biscuit-piece.png" width={140} height={140}
                       className="object-contain rotate-45 animate-float-delayed blur-[1px]" alt="" />
              </div>
              <div className="absolute right-[5%] bottom-[-15%] hidden md:block z-20">
                <Image src="/assets/products/biscuit-piece.png" width={120} height={120}
                       className="object-contain -rotate-12 blur-[10px]" alt="" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — Navigation arrows */}
          <div className="flex items-center justify-between mt-24 lg:mt-32">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
                         hover:bg-white hover:text-[#0F4B1F] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
                         hover:bg-white hover:text-[#0F4B1F] transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
