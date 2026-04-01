'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Product = {
  name: string;
  category: string;
  image: string;
};

const PRODUCTS: Product[] = [
  { name: 'Bora-Chocolate', category: 'biscuit', image: '/assets/products/bora-chocolate.svg' },
  { name: 'Kiyu - Cream With Milk', category: 'biscuit', image: '/assets/products/vita-vanilla.svg' },
  { name: 'Vita Wheat Flour', category: 'flour', image: '/assets/products/super-flour.svg' },
];

export default function ProductsSection() {
  const t = useTranslations('Products');
  const [activeIndex, setActiveIndex] = useState(0);

  const total = PRODUCTS.length;
  const current = PRODUCTS[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <section id="products" className="relative w-full bg-[#0F4B1F] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 pt-16 lg:pt-24 pb-0">

        {/* ── Header row ── */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div className="flex flex-col gap-1">
            {/* Label */}
            <span className="font-['Outfit'] font-semibold text-white/60 text-2xl leading-snug">
              {t('label')}
            </span>
            {/* Heading */}
            <span
              className="font-['Funnel_Display'] font-semibold text-white leading-none"
              style={{ fontSize: 'clamp(40px, 5vw, 96px)' }}
            >
              {t('heading')}
            </span>
          </div>

          {/* Counter */}
          <span
            className="font-['Outfit'] font-semibold text-white/70 hidden sm:block"
            style={{ fontSize: 'clamp(32px, 5vw, 96px)' }}
          >
            {activeIndex + 1}/{total}
          </span>
        </div>

        {/* ── Product layout ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">

          {/* LEFT: info + CTA + blurred image */}
          <div className="lg:w-[300px] xl:w-[380px] flex flex-col gap-6 lg:gap-8 flex-shrink-0">
            <div className="flex flex-col gap-1">
              <span className="font-['Outfit'] font-normal text-white/60 text-2xl capitalize">
                {current.category}
              </span>
              <h3
                className="font-['Funnel_Display'] font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(32px, 2.5vw, 48px)' }}
              >
                {current.name}
              </h3>
            </div>

            <button className="w-full lg:w-auto px-10 py-4 lg:py-5 border-2 border-white/30 rounded-lg font-['Funnel_Display'] font-bold text-white text-2xl lg:text-3xl tracking-[0.04em] hover:bg-white/10 transition-colors text-left lg:text-center">
              {t('cta')}
            </button>

            {/* Blurred decorative image – desktop */}
            <div className="hidden lg:block w-full h-[280px] overflow-hidden rounded-lg blur-[2px] opacity-50 mt-2">
              <img
                src={current.image}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CENTER: main product image */}
          <div className="flex-1 flex items-end justify-center min-h-[300px] sm:min-h-[440px] lg:min-h-[600px]">
            <img
              key={activeIndex}
              src={current.image}
              alt={current.name}
              className="w-full max-w-[380px] sm:max-w-[540px] lg:max-w-[700px] xl:max-w-[900px] h-auto object-contain drop-shadow-2xl transition-opacity duration-300"
            />
          </div>

          {/* RIGHT: navigation + blurred stack */}
          <div className="lg:w-[260px] xl:w-[340px] flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-end gap-4 lg:gap-6 flex-shrink-0 pb-4 lg:pb-16">
            {/* Navigation arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous product"
                className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next product"
                className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Blurred stacked images – desktop */}
            <div className="hidden lg:flex flex-col w-[160px] overflow-hidden rounded-lg blur-[5px] opacity-40">
              {[0, 1, 2].map((_, i) => (
                <img
                  key={i}
                  src={current.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-[140px] object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Wavy bottom divider ── */}
      <div className="w-full mt-4 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1920 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,120 640,0 960,60 C1280,120 1600,0 1920,60 L1920,120 L0,120 Z"
            fill="#E9F7ED"
          />
        </svg>
      </div>
    </section>
  );
}
