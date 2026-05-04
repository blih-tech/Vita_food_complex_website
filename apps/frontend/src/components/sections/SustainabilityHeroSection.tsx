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
          gap: "clamp(12px, 2vw, 16px)",
        }}
      >
        {/* "Sourced with Care, Shared with Purpose" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #FFFFFF */}
        <h1
          className="font-[family-name:var(--font-outfit)] font-extrabold text-white"
          style={{
            fontSize: "clamp(32px, 7vw, 80px)",
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
          }}
        >
          {t("hero.headline")}
        </h1>

        {/* "We are committed to nourishing communities..." — Funnel Display Medium 24px, lh 24px, ls -0.096px, #FFFFFF */}
        <p
          className="font-[family-name:var(--font-funnel-display)] font-medium text-white max-w-[662px]"
          style={{
            fontSize: "clamp(16px, 2.2vw, 24px)",
            lineHeight: "1.2",
            letterSpacing: "-0.004em",
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
