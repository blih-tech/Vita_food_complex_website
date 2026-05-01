"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DistributorHeroSection() {
  const t = useTranslations("Distributor");

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 800 }}>
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
      <div
        className="relative z-20 mx-auto flex flex-col items-start justify-center px-4 sm:px-6 lg:px-[128px]"
        style={{ paddingTop: 200, paddingBottom: 120, maxWidth: 1920 }}
      >
        {/* Glassmorphic content card */}
        <div
          className="flex flex-col items-start gap-6 rounded-[48px] p-7 sm:p-12 lg:p-[82px_28px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)",
            maxWidth: 705,
          }}
        >
          {/* Inner text group */}
          <div className="flex flex-col items-start gap-4" style={{ maxWidth: 649 }}>
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
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 6vw, 24px)",
                lineHeight: "1",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                maxWidth: 675,
              }}
              className="text-[40px] sm:text-[56px] lg:text-[80px]"
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
                maxWidth: 580,
              }}
            >
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "#23B349",
              gap: 16,
              padding: "16px 32px",
              height: 56,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
                fontWeight: 500,
                fontSize: 24,
                lineHeight: "30px",
                letterSpacing: "-0.004em",
                color: "#FFFFFF",
              }}
            >
              {t("hero.cta")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "25px",
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
