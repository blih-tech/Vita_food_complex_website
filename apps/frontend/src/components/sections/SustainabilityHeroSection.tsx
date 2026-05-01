"use client";

import { useTranslations } from "next-intl";

export default function SustainabilityHeroSection() {
  const t = useTranslations("Sustainability");

  return (
    <section
      className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[815px]"
      style={{
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
        className="relative z-10 flex flex-col items-center text-white text-center px-4 sm:px-6 md:px-8"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "961px",
          width: "100%",
          gap: "16px",
        }}
      >
        {/* "Sourced with Care, Shared with Purpose" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #FFFFFF */}
        <h1
          className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            lineHeight: "0.9",
            letterSpacing: "-1.6px",
            color: "#FFFFFF",
          }}
        >
          {t("hero.headline")}
        </h1>

        {/* "We are committed to nourishing communities..." — Funnel Display Medium 24px, lh 24px, ls -0.096px, #FFFFFF */}
        <p
          className="text-[16px] sm:text-[20px] md:text-[24px] max-w-[662px]"
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            lineHeight: "1.2",
            letterSpacing: "-0.096px",
            color: "#FFFFFF",
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
