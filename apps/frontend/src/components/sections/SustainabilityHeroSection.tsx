"use client";

import { useTranslations } from "next-intl";

export default function SustainabilityHeroSection() {
  const t = useTranslations("Sustainability");

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 815,
        borderRadius: "0 0 48px 48px",
      }}
    >
      {/* Hero background image from Figma */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/sustainability/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ borderRadius: "0 0 48px 48px" }}
        />
      </div>

      {/* Hero text — Figma node 274:5183 */}
      <div
        className="relative z-10 flex flex-col items-center text-white text-center"
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(50% + 47px)",
          transform: "translateX(-50%)",
          width: "961px",
          gap: "16px"
        }}
      >
        {/* "Sourced with Care, Shared with Purpose" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #FFFFFF */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "80px",
            lineHeight: "0.9",
            letterSpacing: "-1.6px",
            color: "#FFFFFF",
            whiteSpace: "pre-wrap",
            minWidth: "100%"
          }}
        >
          {t("hero.headline")}
        </h1>

        {/* "We are committed to nourishing communities..." — Funnel Display Medium 24px, lh 24px, ls -0.096px, #FFFFFF */}
        <p
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing: "-0.096px",
            color: "#FFFFFF",
            width: "662.922px",
            height: "79px"
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
