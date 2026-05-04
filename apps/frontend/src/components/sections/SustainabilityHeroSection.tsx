"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SustainabilityHeroSection() {
  const t = useTranslations("Sustainability");

  return (
    <section className="relative w-full overflow-hidden h-[500px] md:h-[700px] lg:h-[800px]">
      {/* Background Image — Wheat field */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/about/wheat-farming.png"
          alt="Sustainability"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-[family-name:var(--font-outfit)] font-black text-[40px] md:text-[60px] lg:text-[80px] text-white leading-[1.1] tracking-tight mb-6 max-w-[900px]">
          Sourced with Care,<br />Shared with Purpose
        </h1>
        <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[16px] md:text-[20px] lg:text-[24px] text-white/90 max-w-[750px] leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[100px] bg-white rounded-t-[100%] translate-y-1/2 z-20" />
    </section>
  );
}
