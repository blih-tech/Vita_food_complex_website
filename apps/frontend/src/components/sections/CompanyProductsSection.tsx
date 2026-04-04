'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const PRODUCTS = [
  { name: 'Bora-Chocolate', category: 'Cream', image: '/assets/products/product-1.png' },
  { name: 'Kiyu Cream With Milk', category: 'Cream', image: '/assets/products/product-2.png' },
  { name: 'Vita Wheat Flour', category: 'Flour', image: '/assets/products/product-3.png' },
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

            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-[1.26] tracking-[0.96px] max-w-3xl">
              {t('home.company.body')}
            </p>

            <div className="flex">
              <button className="px-20 py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-[32px] leading-10 tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors shadow-lg">
                {t('home.company.cta')}
              </button>
            </div>
          </div>
        </div>

        {/* ── BRIDGING SNACK BAG IMAGES ── */}
        <div className="absolute hidden lg:flex z-[30] pointer-events-none right-0 bottom-[-20%] w-[48%] h-[800px] items-end justify-end">
          <div className="relative w-full h-full">
            <div className="absolute left-[0%] top-[15%] w-[55%] h-auto -rotate-6">
              <img src="/assets/products/bridge-product-2.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
            <div className="absolute left-[35%] top-[25%] w-[45%] h-auto z-10">
              <img src="/assets/products/bridge-product-3.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
            <div className="absolute right-[-5%] top-[10%] w-[50%] h-auto rotate-[12deg] z-0">
              <img src="/assets/products/bridge-product-1.png" className="w-full h-auto object-contain drop-shadow-2xl" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR PRODUCTS (Transparent BG with SVG)
          ══════════════════════════════════════════ */}
      <section id="products" className="relative w-full aspect-[1920/2083] lg:h-[2083px] overflow-visible bg-transparent -mt-1">
        
        {/* Figma Exact Full Background SVG */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src="/assets/sections/products-full-bg.svg" 
            className="w-full h-full object-fill" 
            alt="" 
          />
        </div>

        {/* Responsive Content Area (Fitted inside SVG) */}
        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">
          
          {/* Layered Circles (Responsive positions from snippet) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Circle (1200px) */}
            <div className="w-[62.5%] aspect-square max-w-[1200px] opacity-30 rounded-full border-[10px] border-[#20A342] absolute top-[27.2%]" />
            {/* Middle Circle (1000px) */}
            <div className="w-[52%] aspect-square max-w-[1000px] opacity-30 rounded-full border-[10px] border-[#20A342] absolute top-[32%]" />
            {/* Inner Circle (800px) */}
            <div className="w-[41.6%] aspect-square max-w-[800px] bg-[#BBE7C7] rounded-full border border-[#20A342] absolute top-[36.8%]" />
          </div>

          {/* Header row: top: 638px (approx 30.6%) */}
          <div className="absolute top-[30.6%] left-[6.7%] right-[6.7%] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[#333733] text-2xl font-semibold font-['Outfit'] opacity-80">
                About
              </p>
              <h2 className="text-white text-6xl md:text-8xl lg:text-[96px] font-semibold font-['Funnel_Display'] leading-none">
                Our Products
              </h2>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-6xl md:text-[96px] leading-none tabular-nums">
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* PRODUCT DISPLAY AREA (Main image top: 759px approx 36.4%) */}
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center pointer-events-none">
            
            {/* Left: product info (top: 1136px approx 54.5%) */}
            <div className="absolute top-[54.5%] left-[6.7%] z-20 w-full lg:w-1/3 text-center lg:text-left flex flex-col gap-10 pointer-events-auto">
              <div className="flex flex-col gap-2">
                <p className="text-white text-2xl font-normal font-['Outfit']">{product.category}</p>
                <h3 className="text-white text-4xl lg:text-5xl font-bold font-['Funnel_Display'] leading-tight">
                  {product.name}
                </h3>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#0F4B1F] text-white px-16 lg:px-20 py-5 rounded-lg font-bold text-2xl lg:text-[32px] leading-none tracking-[1.28px] transition-all hover:bg-[#1a6b2e] shadow-xl">
                  {t('home.products.viewProduct')}
                </button>
              </div>
            </div>

            {/* Center: main product */}
            <div className="absolute top-[36.4%] left-1/2 -translate-x-1/2 w-[40%] aspect-square flex items-center justify-center">
              {/* Product Shadow */}
              <div className="absolute bottom-0 w-full h-[100px] bg-[#000500] rounded-full blur-[60px] opacity-40" />
              
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)]"
                  priority
                />
              </div>

              {/* Scattered biscuit pieces (Fixed positions from design) */}
              <div className="absolute left-[130%] top-[-10%] w-[30%] h-auto hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={180} height={180}
                       className="object-contain animate-float blur-[2px]" alt="" />
              </div>
              <div className="absolute left-[-15%] bottom-[-10%] w-[25%] h-auto hidden md:block">
                <Image src="/assets/products/biscuit-piece.png" width={140} height={140}
                       className="object-contain rotate-45 animate-float-delayed blur-[1px]" alt="" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW — Navigation arrows (top: 1431px approx 68.7%) */}
          <div className="absolute top-[68.7%] left-[6.7%] right-[6.7%] flex items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
                         hover:bg-white hover:text-[#0F4B1F] transition-all duration-300 pointer-events-auto"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/40
                         flex items-center justify-center text-white text-5xl
                         hover:bg-white hover:text-[#0F4B1F] transition-all duration-300 pointer-events-auto"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
