"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full bg-[#E9F7ED] overflow-hidden pt-[96px] lg:pt-0"
    >
      {/* ═══════════════════════════════════════════════
          LAYERED LAYOUT — md and up (768px+)
          Uses aspect-ratio trick: padding-top = 1010/1920 = 52.6%
          All elements absolutely positioned as % of container
          ═══════════════════════════════════════════════ */}
      <div className="hidden md:block relative w-full pt-[52.6%]">
        {/* BG — decorative green geometric pattern, left side */}
        <img
          src="/assets/hero/hero-bg-element.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-[0.47%] h-full w-auto pointer-events-none select-none z-[1]"
        />

        {/* TEXT — "Flour You", behind product image */}
        <h2
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none pointer-events-none z-[2]"
          style={{
            top: "62.6%",
            fontSize: "clamp(60px, 15.6vw, 300px)",
            lineHeight: 1.25,
          }}
        >
          {t("headline2")}
        </h2>

        {/* TEXT — "Biscuits", behind product image */}
        <h1
          className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none pointer-events-none z-[3]"
          style={{
            top: "11.6%",
            fontSize: "clamp(60px, 13vw, 250px)",
            lineHeight: 1.25,
          }}
        >
          {t("headline1")}
        </h1>

        {/* PRODUCT IMAGE — transparent PNG on top of text layers */}
        <img
          src="/assets/hero/product-hero.png"
          alt="Vita Products"
          className="absolute pointer-events-none object-contain z-[4]"
          style={{ left: "13.9%", top: "1.7%", width: "69.4%" }}
        />

        {/* COOKIE — center-left decoration, blurred */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[5]"
          style={{
            left: "29.5%",
            top: "27.1%",
            width: "17.4%",
            filter: "blur(4px)",
          }}
        />

        {/* COOKIE — bottom-center decoration, blurred */}
        <img
          src="/assets/hero/cookie-decoration-1.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[5]"
          style={{
            left: "49.4%",
            top: "59%",
            width: "14.5%",
            filter: "blur(4px)",
          }}
        />

        {/* DESCRIPTION — right side text */}
        <p
          className="absolute font-['Outfit'] font-normal text-[#333733] z-[6]"
          style={{
            left: "79.9%",
            top: "46.8%",
            width: "13.5%",
            fontSize: "clamp(11px, 1.04vw, 20px)",
            lineHeight: 1.26,
          }}
        >
          {t("description")}
        </p>

        {/* BADGE — avatar badge, right side below description */}
        <img
          src="/assets/hero/texted-badge.svg"
          alt={t("badge")}
          className="absolute pointer-events-none z-[6]"
          style={{ left: "79.9%", top: "59.7%", width: "13.4%" }}
        />
      </div>

      {/* ═══════════════════════════════════════════════
          STACKED LAYOUT — xs & sm (below 768px)
          Mobile-first: product image center, text above/below
          ═══════════════════════════════════════════════ */}
      <div className="md:hidden relative flex flex-col items-center overflow-hidden bg-[#E9F7ED]">
        {/* BG pattern — top-left corner, clipped */}
        <img
          src="/assets/hero/hero-bg-element.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 h-[60%] w-auto opacity-60 pointer-events-none select-none z-[1]"
        />

        {/* "Biscuits" */}
        <h1
          className="relative z-[3] w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none pt-10 px-4"
          style={{ fontSize: "clamp(52px, 19vw, 120px)", lineHeight: 1.2 }}
        >
          {t("headline1")}
        </h1>

        {/* Product image */}
        <div className="relative z-[4] w-full flex justify-center -mt-4 -mb-4">
          <img
            src="/assets/hero/product-hero.png"
            alt="Vita Products"
            className="w-[88%] max-w-[400px] object-contain"
          />
          {/* Blurred cookie decoration — mobile */}
          <img
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-[10%] right-[4%] w-[22%] pointer-events-none z-[5]"
            style={{ filter: "blur(3px)" }}
          />
        </div>

        {/* "Flour You" */}
        <h2
          className="relative z-[3] w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none px-2 -mt-3"
          style={{ fontSize: "clamp(56px, 21vw, 140px)", lineHeight: 1.2 }}
        >
          {t("headline2")}
        </h2>

        {/* Description + badge row */}
        <div className="relative z-[6] flex flex-col items-center gap-3 px-6 pt-5 pb-8 w-full max-w-sm">
          <p className="font-['Outfit'] font-normal text-[#333733]/80 text-center text-sm leading-relaxed">
            {t("description")}
          </p>
          <img
            src="/assets/hero/texted-badge.svg"
            alt={t("badge")}
            className="w-40 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
