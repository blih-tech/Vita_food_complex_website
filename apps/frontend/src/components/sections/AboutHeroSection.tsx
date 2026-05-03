"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutHeroSection() {
  const t = useTranslations("About");

  return (
    <section className="relative w-full overflow-hidden bg-[#23B349]">
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/10 blur-[120px] rounded-full" />
        
        {/* Dotted Pattern (Approximated) */}
        <div className="absolute top-[20%] left-[5%] opacity-20">
          <div className="grid grid-cols-6 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-4 pt-[100px] md:pt-[140px] lg:pt-[160px] flex flex-col items-center text-center max-w-[1200px]">
        {/* Headline — Outfit 800, white */}
        <h1
          className="font-[family-name:var(--font-outfit)] font-extrabold text-[40px] md:text-[64px] lg:text-[80px] text-white leading-[1.1] tracking-tight mb-8"
        >
          {t("hero.headline")}
        </h1>

        {/* Subtitle — Funnel Display 500, #E8E8E8 */}
        <p
          className="font-[family-name:var(--font-funnel-display)] font-medium text-[16px] md:text-[20px] lg:text-[24px] text-white/90 max-w-[850px] leading-relaxed mb-16"
        >
          {t("hero.subtitle")}
        </p>

        {/* Story Image (The Boy) — Large rounded frame */}
        <div className="relative w-full max-w-[800px] aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden border-[12px] md:border-[20px] border-white/10 shadow-2xl">
          <Image
            src={ABOUT_ASSETS.hero.storyImage}
            alt="Vita Story"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Transition (Curve) */}
      <div className="relative w-full h-[100px] md:h-[150px] lg:h-[200px] mt-[-50px] md:mt-[-80px] lg:mt-[-100px]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] aspect-[4/1] bg-white rounded-t-[100%] shadow-[0_-20px_50px_rgba(35,179,73,0.1)]" />
      </div>
    </section>
  );
}
