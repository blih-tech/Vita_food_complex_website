"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <section className="relative w-full overflow-hidden bg-white pt-[80px] md:pt-[120px] lg:pt-[160px]">
      {/* ── TOP CONTENT ── */}
      <div className="relative z-10 mx-auto px-4 flex flex-col items-center text-center max-w-[1200px]">
        {/* Headline — Outfit 800, Brand Green */}
        <h1
          className="font-[family-name:var(--font-outfit)] font-extrabold text-[32px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#23B349] leading-[1.1] tracking-tight mb-6"
        >
          A Better Choice <br className="hidden sm:block" /> for Every Table
        </h1>

        {/* Subtitle — Funnel Display 500 */}
        <p
          className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#404040]/70 max-w-[850px] leading-relaxed mb-8 md:mb-12 px-2"
        >
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-24 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/products"
            className="bg-[#23B349] text-white px-8 py-3 md:py-4 rounded-full font-bold text-[16px] md:text-[18px] transition-transform hover:scale-105 text-center"
          >
            Explore products →
          </Link>
          <Link
            href="/contact"
            className="border-[2px] border-[#404040]/20 text-[#404040] px-8 py-3 md:py-4 rounded-full font-bold text-[16px] md:text-[18px] transition-transform hover:bg-[#404040]/5 text-center"
          >
            Contact US
          </Link>
        </div>
      </div>

    </section>
  );
}
