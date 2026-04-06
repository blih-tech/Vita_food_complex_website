"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* ─── Mock products (3 items cycling over 11 Figma slots) ─── */
const PRODUCTS = [
  {
    name: "Bora-Chocolate",
    category: "Cream",
    image: "/assets/products/product-1.png",
  },
  {
    name: "Kiyu Cream With Milk",
    category: "Cream",
    image: "/assets/products/product-2.png",
  },
  {
    name: "Vita Wheat Flour",
    category: "Flour",
    image: "/assets/products/product-3.png",
  },
];

const TOTAL_PRODUCTS = 11; // Figma shows 1/11

export default function CompanyProductsSection() {
  const t = useTranslations("home");
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = PRODUCTS[currentIndex % PRODUCTS.length];

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? TOTAL_PRODUCTS - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i + 1) % TOTAL_PRODUCTS);

  /* Split heading into first word + rest for two-line Figma display */
  const headingFull = t("company.heading"); // e.g. "Our Company"
  const headingParts = headingFull.split(" ");
  const headingLine1 = headingParts[0]; // "Our"
  const headingLine2 = headingParts.slice(1).join(" "); // "Company"

  return (
    <div className="relative w-full">
      {/* ═══════════════════════════════════════════════════════════
          OUR COMPANY  — cream background  (#E9F7ED)
          Figma: frame 332-1282, frame width 875px at 1920 (45.6%)
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="company"
        className="relative bg-[#E9F7ED] overflow-visible z-[1]"
      >
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%] pt-20 lg:pt-28 pb-24 lg:pb-40">
          {/* Left column — max 50% on desktop (Figma: 875px / 1920px = 45.6%) */}
          <div className="w-full lg:max-w-[50%] flex flex-col gap-8 lg:gap-10">

            {/* Label — Figma: Outfit Regular 24px, #333733 */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-snug">
              {t("company.label")}
            </p>

            {/*
              Heading — Figma: two lines, Funnel Display Bold
                Line 1 "Our"     : 200px at 1920 → clamp(48px, 10.4vw, 200px)
                Line 2 "Company" : 180px at 1920 → clamp(44px,  9.4vw, 180px)
              Both #23B349 (medium green).
              At desktop the text naturally wraps: container 50% of viewport < text width.
            */}
            <div className="flex flex-col font-['Funnel_Display'] font-bold text-[#23B349] leading-[1.25]">
              <span style={{ fontSize: "clamp(48px, 10.4vw, 200px)" }}>
                {headingLine1}
              </span>
              {headingLine2 && (
                <span
                  style={{
                    fontSize: "clamp(44px, 9.4vw, 180px)",
                    marginTop: "-0.06em",
                  }}
                >
                  {headingLine2}
                </span>
              )}
            </div>

            {/* Body — Figma: Outfit Regular 24px, #333733, tracking 4% */}
            <p className="font-['Outfit'] font-normal text-[#333733] text-2xl leading-[1.26] tracking-[0.96px]">
              {t("company.body")}
            </p>

            {/* CTA — Figma: #0F4B1F, px-20 py-5, Funnel Display Bold 32px, white, rounded-lg */}
            <div>
              <button className="px-20 py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-[32px] leading-10 tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors shadow-lg">
                {t("company.cta")}
              </button>
            </div>
          </div>
        </div>

        {/*
          ── Bridging product image group ──
          Figma node 332:1363 — composite of flour bag + Zoo + Mlez
          Position derived from Figma coordinates:
            x = 1044px → right-aligned (1044+904=1948 ≈ 1920)
            y = -283px in Products frame → top is 283px above Products start
            height = 596px → bottom is 313px into Products frame
          At 1920px: bottom offset = 313px = 313/1920 = 16.3vw below Company bottom
        */}
        <div
          className="absolute hidden lg:block right-0 z-[30] pointer-events-none"
          style={{ bottom: "-16.3vw", width: "47.1%" }}
        >
          <img
            src="/assets/products/product-display.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR PRODUCTS  — aspect-ratio section with Figma SVG background
          Figma: frame 332-1293, 1920×2083 px
          Background: products-full-bg.svg (medium-green arch over dark-green base)
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="products"
        className="relative w-full aspect-[1920/2083] overflow-visible bg-transparent -mt-1"
      >
        {/* ── Figma exact full-background SVG (medium-green arch shape) ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/assets/sections/products-full-bg.svg"
            className="w-full h-full object-fill"
            alt=""
          />
        </div>

        {/* ── Concentric circles — Figma: 1200 / 1000 / 800 px ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[62.5%] aspect-square max-w-[1200px] opacity-30 rounded-full border-[10px] border-[#20A342] absolute top-[27.2%]" />
          <div className="w-[52%] aspect-square max-w-[1000px] opacity-30 rounded-full border-[10px] border-[#20A342] absolute top-[32%]" />
          <div className="w-[41.6%] aspect-square max-w-[800px] bg-[#BBE7C7] rounded-full border border-[#20A342] absolute top-[36.8%]" />
        </div>

        {/* ── Biscuit decorations — Figma blur / opacity values ── */}
        <img
          src="/assets/products/biscuit-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[2]"
          style={{ right: 0, top: "3%", width: "38%", filter: "blur(14px)", opacity: 0.5 }}
        />
        <img
          src="/assets/products/biscuit-large.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[2]"
          style={{ left: "27%", top: "36%", width: "45%", filter: "blur(50px)", opacity: 0.6 }}
        />
        <img
          src="/assets/products/biscuit-piece.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[3]"
          style={{ left: "26.8%", top: "53%", width: "8%", filter: "blur(3px)" }}
        />
        <img
          src="/assets/products/biscuit-scatter.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[3]"
          style={{ right: "10%", top: "55%", width: "5%", filter: "blur(4px)" }}
        />

        {/* ── Responsive content area (percentage positions from 1920×2083 frame) ── */}
        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">

          {/* Header row — Figma: y=638 → 30.6% */}
          <div className="absolute top-[30.6%] left-[6.7%] right-[6.7%] flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-8">
            <div className="flex flex-col gap-2 lg:gap-4">
              {/* Label — Figma: Outfit Semibold 24px, #333733 */}
              <span className="font-['Outfit'] font-semibold text-[#333733] text-lg lg:text-2xl leading-snug opacity-80">
                {t("products.label")}
              </span>
              {/* Heading — Figma: Funnel Display Semibold 96px, white */}
              <h2
                className="font-['Funnel_Display'] font-semibold text-white leading-none"
                style={{ fontSize: "clamp(32px, 5vw, 96px)" }}
              >
                {t("products.heading")}
              </h2>
            </div>
            {/* Counter — Figma: Outfit Semibold 96px, white */}
            <span
              className="font-['Outfit'] font-semibold text-white tabular-nums leading-none shrink-0"
              style={{ fontSize: "clamp(28px, 5vw, 96px)" }}
            >
              {currentIndex + 1}/{TOTAL_PRODUCTS}
            </span>
          </div>

          {/* Product info — Figma: y=1136 → 54.5% */}
          <div className="absolute top-[54.5%] left-[6.7%] z-20 flex flex-col gap-6 lg:gap-8 pointer-events-auto">
            <div className="flex flex-col gap-2">
              {/* Category — Figma: Outfit Regular 24px, white */}
              <p className="font-['Outfit'] font-normal text-white text-lg lg:text-2xl leading-snug">
                {product.category}
              </p>
              {/* Name — Figma: Funnel Display Bold 48px, white */}
              <h3
                className="font-['Funnel_Display'] font-bold text-white leading-tight"
                style={{ fontSize: "clamp(24px, 2.5vw, 48px)" }}
              >
                {product.name}
              </h3>
            </div>
            {/* View Product — Figma: #0F4B1F bg, px-20 py-5, Funnel Display Bold 32px */}
            <button className="self-start bg-[#0F4B1F] text-white px-10 lg:px-20 py-4 lg:py-5 rounded-lg font-['Funnel_Display'] font-bold text-lg lg:text-[32px] leading-none tracking-[1.28px] transition-all hover:bg-[#1a6b2e] shadow-xl border border-white/10">
              {t("products.viewProduct")}
            </button>
          </div>

          {/* Centre product image — Figma: y=759 → ~36.4%, centred horizontally */}
          <div className="absolute top-[36.4%] left-1/2 -translate-x-1/2 w-[40%] aspect-square flex items-center justify-center">
            {/* Drop shadow ellipse */}
            <div className="absolute bottom-0 w-full h-[8%] bg-[#000500] rounded-full blur-[40px] opacity-40" />
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)]"
                priority={currentIndex === 0}
              />
            </div>
          </div>

          {/* Navigation arrows — Figma: y=1431 → 68.7%, justify-between, 100px circles */}
          <div className="absolute top-[68.7%] left-[6.7%] right-[6.7%] flex items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous product"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] rounded-full border-2 border-white/40 flex items-center justify-center text-white text-2xl lg:text-4xl hover:bg-white hover:text-[#0F4B1F] transition-all duration-300 pointer-events-auto"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] rounded-full border-2 border-white/40 flex items-center justify-center text-white text-2xl lg:text-4xl hover:bg-white hover:text-[#0F4B1F] transition-all duration-300 pointer-events-auto"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
