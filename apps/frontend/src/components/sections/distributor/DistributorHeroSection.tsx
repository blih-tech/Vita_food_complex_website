"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DistributorHeroSection() {
  const t = useTranslations("Distributor");

  return (
    <section className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[650px] lg:min-h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/distributor/hero-bg.png"
          alt="Vita distribution warehouse"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Bottom wave / white fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80px] z-10"
        style={{
          background: "linear-gradient(to top, #FFFFFF 0%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex flex-col items-start justify-center px-4 sm:px-6 lg:px-[128px] max-w-[1920px] pt-[100px] sm:pt-[150px] lg:pt-[200px] pb-[60px] sm:pb-[90px] lg:pb-[120px]">
        {/* Glassmorphic content card */}
        <div
          className="flex flex-col items-start gap-6 rounded-[24px] sm:rounded-[48px] p-6 sm:p-10 lg:p-[82px_28px] w-full max-w-[705px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Inner text group */}
          <div className="flex flex-col items-start gap-4 w-full max-w-[649px]">
            {/* Sub-label */}
            <span
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 2vw, 24px)",
                lineHeight: "1",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {t("hero.label")}
            </span>

            {/* Headline */}
            <h1
              className="text-[40px] sm:text-[56px] lg:text-[80px]"
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                lineHeight: "1",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {t("hero.headline")}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(16px, 2vw, 24px)",
                lineHeight: "1",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-full bg-[#23B349] gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 transition-transform hover:scale-105 active:scale-95"
          >
            <span
              className="text-[18px] sm:text-[24px]"
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                lineHeight: "30px",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
              }}
            >
              {t("hero.cta")}
            </span>
            <span
              className="text-[16px] sm:text-[20px]"
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
