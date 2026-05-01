"use client";

import { useTranslations } from "next-intl";

export default function SustainabilityHeroSection() {
  const t = useTranslations("Sustainability");

  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{
        background:
          "linear-gradient(135deg, #0F4B1F 0%, #23B349 50%, #0F4B1F 100%)",
        minHeight: 815,
        paddingTop: 152,
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: -200,
            right: -100,
            background: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: -100,
            left: -50,
            background: "rgba(255,255,255,0.03)",
          }}
        />
      </div>

      {/* Hero text — Figma node 274:5183 */}
      <div
        className="relative z-10 mx-auto pt-20 pb-24"
        style={{ maxWidth: 961 }}
      >
        {/* "Sourced with Care, Shared with Purpose" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #FFFFFF */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(48px, 6vw, 80px)",
            lineHeight: "72px",
            letterSpacing: "-1.6px",
            color: "#FFFFFF",
          }}
        >
          {t("hero.headline")}
        </h1>

        {/* "We are committed to nourishing communities..." — Funnel Display Medium 24px, lh 24px, ls -0.096px, #FFFFFF */}
        <p
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: "24px",
            letterSpacing: "-0.096px",
            color: "#FFFFFF",
            maxWidth: 663,
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
