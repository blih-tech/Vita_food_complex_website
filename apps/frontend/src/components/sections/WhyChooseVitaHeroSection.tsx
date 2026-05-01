"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

// Figma assets - using MCP URLs for production
const imgHeroMain = "https://www.figma.com/api/mcp/asset/5f8a9c12-3456-7890-abcd-ef1234567890";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/why-choose-vita/hero-bg-pattern.jpg')] bg-cover bg-center opacity-10" />
      
      {/* Main hero content container */}
      <div className="relative z-10 w-full min-h-[900px] lg:min-h-[800px] md:min-h-[700px] sm:min-h-[600px] flex items-center px-[128px] lg:px-[128px] md:px-[64px] sm:px-[32px] py-[96px] lg:py-[96px] md:py-[64px] sm:py-[48px]">
        <div className="max-w-[1664px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Hero content */}
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <h1 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a] lg:text-[64px] md:text-[48px] sm:text-[36px]">
                  {t("hero.headline")}
                </h1>
                <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1.5] tracking-[-0.4px] text-[#404040] lg:text-[24px] md:text-[20px] sm:text-[18px] max-w-[600px]">
                  {t("hero.subtitle")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-[16px] bg-[#23b349] text-white px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] hover:bg-[#1a9a3a] transition-colors lg:text-[20px] md:text-[18px] sm:text-[16px]"
                >
                  {t("hero.primaryCta")}
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-[16px] bg-white text-[#23b349] border-2 border-[#23b349] px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] hover:bg-[#23b349] hover:text-white transition-colors lg:text-[20px] md:text-[18px] sm:text-[16px]"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
            </div>
            
            {/* Right side - Hero image */}
            <div className="relative">
              <div className="relative w-full h-[500px] lg:h-[500px] md:h-[400px] sm:h-[300px] rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src={imgHeroMain}
                  alt="Family enjoying Vita products"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#23b349]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#23b349]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
