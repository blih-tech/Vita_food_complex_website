'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const PRODUCTS = [
  { name: 'Bora-Chocolate', category: 'Biscuit', image: '/assets/products/bora-chocolate.svg' },
  { name: 'Kiyu Cream With Milk', category: 'Biscuit', image: '/assets/products/vita-vanilla.svg' },
  { name: 'Vita Wheat Flour', category: 'Flour', image: '/assets/products/super-flour.svg' },
];

export default function CompanyProductsSection() {
  const tC = useTranslations('Company');
  const tP = useTranslations('Products');
  const [idx, setIdx] = useState(0);
  const total = PRODUCTS.length;
  const product = PRODUCTS[idx];
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    /**
     * Outer wrapper is `relative overflow-visible` so the bridging
     * product-display image can be positioned across both halves.
     */
    <section id="company" className="relative overflow-visible">

      {/* ══════════════════════════════════════════
          COMPANY HALF  — cream background
          ══════════════════════════════════════════ */}
      <div className="relative bg-[#E9F7ED] overflow-visible z-[1]">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-20 lg:pt-28 pb-20 lg:pb-32">

          {/* Text column — max ~875px (45.6% of 1920) */}
          <div className="w-full lg:max-w-[45.6%]">

            {/* Label */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-snug mb-8">
              {tC('label')}
            </p>

            {/* Heading: "Our" + "Company" stacked */}
            <div className="leading-none overflow-hidden mb-8 lg:mb-10">
              <span
                className="block font-['Funnel_Display'] font-bold text-[#23B349]"
                style={{ fontSize: 'clamp(56px, 10.4vw, 200px)', lineHeight: 1.25 }}
              >
                Our
              </span>
              <span
                className="block font-['Funnel_Display'] font-bold text-[#23B349] -mt-2 lg:-mt-4"
                style={{ fontSize: 'clamp(50px, 9.4vw, 180px)', lineHeight: 1.25 }}
              >
                {tC('heading')}
              </span>
            </div>

            {/* Body */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-xl lg:text-2xl leading-relaxed tracking-[0.04em] mb-10 lg:mb-12">
              {tC('body')}
            </p>

            {/* CTA */}
            <button className="px-16 lg:px-20 py-4 lg:py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-3xl tracking-[0.04em] hover:bg-[#1a6b2e] transition-colors">
              {tC('cta')}
            </button>
          </div>
        </div>

        {/* ── Bridging product image (desktop only) ──
            Absolutely positioned relative to this cream div.
            z-[20] so it floats above both halves.
            bottom: -35% moves it ~35% of its own height below
            the cream section bottom → into the green section. */}
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

      {/* ══════════════════════════════════════════
          PRODUCTS HALF  — dark green background
          ══════════════════════════════════════════ */}
      <div id="products" className="relative bg-[#0F4B1F] overflow-hidden z-[0]">

        {/* Background: lighter green wave at top */}
        <div
          className="absolute inset-x-0 top-0 bg-[#23B349] pointer-events-none"
          style={{ height: '42%', borderRadius: '0 0 50% 50% / 0 0 30% 30%' }}
        />
        {/* Background: large decorative circle */}
        <div
          className="absolute rounded-full bg-[#23B349]/15 pointer-events-none"
          style={{ left: '18.75%', top: '15%', width: '62.5%', paddingTop: '62.5%' }}
        />

        {/* Biscuit decorations */}
        <img src="/assets/products/biscuit-bg.png" alt="" aria-hidden="true"
          className="absolute pointer-events-none z-[1]"
          style={{ right: '0%', top: '3%', width: '38%', filter: 'blur(14px)', opacity: 0.5 }} />
        <img src="/assets/products/biscuit-large.png" alt="" aria-hidden="true"
          className="absolute pointer-events-none z-[1]"
          style={{ left: '27%', top: '33%', width: '45%', filter: 'blur(50px)', opacity: 0.6 }} />
        <img src="/assets/products/biscuit-piece.png" alt="" aria-hidden="true"
          className="absolute pointer-events-none z-[2]"
          style={{ left: '27%', top: '53%', width: '16%', filter: 'blur(3px)' }} />
        <img src="/assets/products/biscuit-scatter.png" alt="" aria-hidden="true"
          className="absolute pointer-events-none z-[2]"
          style={{ right: '10%', top: '55%', width: '9%', filter: 'blur(4px)' }} />

        {/* Content */}
        <div className="relative z-[10] max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">

          {/* Top spacer on desktop = room for the bridging image
              (Figma: Products content starts at y:638/2114 ≈ 30% of section)
              At desktop this spacer is ~30vw; floor at 140px for tablet */}
          <div className="hidden lg:block" style={{ height: 'clamp(140px, 30vw, 580px)' }} />
          <div className="block lg:hidden pt-16" />

          {/* ── Header row: label/heading (left)  counter (right) ── */}
          <div className="flex items-end justify-between mb-6 lg:mb-10">
            <div className="flex flex-col gap-1 lg:gap-2">
              <span className="font-['Outfit'] font-semibold text-[#333733] text-xl lg:text-2xl leading-snug">
                {tP('label')}
              </span>
              <span
                className="font-['Funnel_Display'] font-semibold text-white"
                style={{ fontSize: 'clamp(36px, 5vw, 96px)', lineHeight: 1.25 }}
              >
                {tP('heading')}
              </span>
            </div>
            <span
              className="font-['Outfit'] font-semibold text-white tabular-nums"
              style={{ fontSize: 'clamp(28px, 5vw, 96px)', lineHeight: 1.26 }}
            >
              {idx + 1}/{total}
            </span>
          </div>

          {/* ── Product info + button ── */}
          <div className="flex flex-col gap-6 lg:gap-8 mb-10 lg:mb-14 max-w-[357px]">
            <div>
              <p className="font-['Outfit'] font-normal text-white text-xl lg:text-2xl leading-snug mb-1 opacity-80">
                {product.category}
              </p>
              <h3
                className="font-['Funnel_Display'] font-bold text-white"
                style={{ fontSize: 'clamp(26px, 2.5vw, 48px)', lineHeight: 1.25 }}
              >
                {product.name}
              </h3>
            </div>
            <button className="self-start px-12 lg:px-16 py-4 lg:py-5 bg-[#23B349] hover:bg-[#1d9e3e] text-white rounded-lg font-['Funnel_Display'] font-bold text-xl lg:text-3xl tracking-[0.04em] transition-colors border border-white/10">
              {tP('cta')}
            </button>
          </div>

          {/* ── Navigation arrows ── */}
          <div className="flex justify-between items-center mb-8 lg:mb-0">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xl lg:text-2xl hover:border-white hover:bg-white/10 transition-all"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xl lg:text-2xl hover:border-white hover:bg-white/10 transition-all"
            >
              →
            </button>
          </div>

          {/* ── Mobile product image (hidden on desktop — desktop shows the bridge) ── */}
          <div className="flex justify-center lg:hidden pt-6 pb-16">
            <img
              src={product.image}
              alt={product.name}
              className="w-56 h-56 sm:w-72 sm:h-72 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Desktop bottom spacer */}
          <div className="hidden lg:block" style={{ height: 'clamp(80px, 10vw, 200px)' }} />
        </div>
      </div>

    </section>
  );
}
