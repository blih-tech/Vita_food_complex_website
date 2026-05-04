"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

// ── SUB-COMPONENTS ──

const BackgroundDecorations = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Top Left Blurred Cookie */}
    <div className="absolute top-[8%] left-[-5%] w-[300px] h-[300px] opacity-[0.12] blur-[40px] rotate-[-15deg]">
       <Image src="/assets/hero/cookie.png" alt="" fill className="object-contain" />
    </div>
    
    {/* Soft Radial Brand Glows */}
    <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-[#23B349]/5 blur-[130px] rounded-full" />
    <div className="absolute top-[15%] left-[12%] w-[400px] h-[400px] bg-[#FFEC19]/5 blur-[110px] rounded-full" />
  </div>
);

const HeroContent = ({ t }: { t: any }) => (
  <div className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-[140px] md:pb-[40px] lg:pt-[220px] lg:pb-[60px] flex flex-col items-center z-10">
    <div className="relative flex flex-col items-center text-center px-5 sm:px-6 max-w-[1200px] mx-auto w-full">
      
      {/* Headline Group - Improved mobile spacing and sizing */}
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl sm:text-[28px] md:text-[42px] lg:text-[56px] text-[#404040] leading-tight tracking-tight">
          A new stylish
        </h2>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-[-4px] sm:mt-[-5px] md:mt-[-10px]">
          <div className="relative w-9 h-9 sm:w-[35px] sm:h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] rotate-[-12deg] drop-shadow-lg transition-transform hover:scale-110 duration-300">
            <Image src="/assets/hero/cookie.png" alt="Cookie" fill className="object-contain" />
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl sm:text-[28px] md:text-[42px] lg:text-[56px] text-[#404040] leading-tight tracking-tight">
            way of
          </h2>
          <div className="relative w-9 h-9 sm:w-[35px] sm:h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] rotate-[12deg] drop-shadow-lg transition-transform hover:scale-110 duration-300">
            <Image src="/assets/hero/strawberry.png" alt="Strawberry" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Main Heading - Better mobile scaling */}
      <h1 className="font-[family-name:var(--font-funnel-display)] font-black text-[52px] sm:text-[72px] md:text-[130px] lg:text-[180px] text-[#23B349] leading-[0.9] sm:leading-[0.85] tracking-[-0.04em] sm:tracking-[-0.05em] mb-8 sm:mb-10 md:mb-12">
        {t("connecting")}
      </h1>

      {/* Subtitle - Responsive text size */}
      <p className="max-w-[620px] font-[family-name:var(--font-outfit)] font-medium text-base sm:text-[15px] md:text-[18px] lg:text-[20px] text-[#404040]/70 leading-relaxed mb-10 sm:mb-12 px-2 sm:px-4">
        {t("description")}
      </p>

      {/* CTA Buttons - Mobile-first, larger tap targets */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto">
        <Link
          href="/products"
          className="bg-[#23B349] text-white flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-lg sm:text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:scale-105 hover:bg-[#1fa041] active:scale-95 shadow-[0_10px_25px_-5px_rgba(35,179,73,0.35)] min-h-[52px] sm:min-h-0 touch-manipulation"
        >
          {t("ourProducts")} <span className="text-xl sm:text-[20px] md:text-[28px]">→</span>
        </Link>
        <Link
          href="/about"
          className="border-[2.5px] border-[#23B349] text-[#404040] flex items-center justify-center px-10 py-4 sm:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-lg sm:text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:bg-[#23B349]/5 active:scale-95 min-h-[52px] sm:min-h-0 touch-manipulation"
        >
          {t("whyVita")}
        </Link>
      </div>
    </div>
  </div>
);

// ── MAIN COMPONENT ──

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      <BackgroundDecorations />
      <HeroContent t={t} />
    </section>
  );
}
