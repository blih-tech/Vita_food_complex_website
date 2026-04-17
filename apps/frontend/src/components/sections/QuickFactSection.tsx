"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const stats = [
  {
    key: "investment",
    icon: "/assets/quality/production-process.svg",
    color: "#23B349",
  },
  {
    key: "capacity",
    icon: "/assets/quality/raw-materials.svg",
    color: "#1648B5",
  },
  {
    key: "jobs",
    icon: "/assets/quality/quality-control.svg",
    color: "#7E4627",
  },
  {
    key: "farmers",
    icon: "/assets/about/spark.svg",
    color: "#A099B5",
  },
];

export default function QuickFactSection() {
  const t = useTranslations("QuickFact");

  return (
    <section className="relative w-full bg-[#E9F7ED] py-24 lg:py-40 overflow-hidden">
      {/* Top Repeating Pattern Container */}
      <div className="absolute top-0 left-0 w-full h-32 lg:h-48 z-10 pointer-events-none overflow-hidden">
        {/* Repeating Biscuit Piece Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/assets/hero/biscuit-piece.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
          }}
        />
        {/* Solid Wave Overlay */}
        <div className="absolute top-0 left-0 w-full h-24 lg:h-32">
          <Image 
            src="/assets/sections/top-wave.svg" 
            alt="" 
            fill 
            className="object-cover object-bottom"
          />
        </div>
      </div>

      {/* Background Decorative Spark */}
      <div className="absolute top-24 right-[-5%] w-[300px] h-[300px] opacity-10 pointer-events-none rotate-12 z-0">
        <Image src="/assets/about/spark.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <p className="font-['Funnel_Display'] font-semibold text-[18px] text-[#23B349] tracking-widest uppercase mb-4">
            {t("label")}
          </p>
          <h2 className="font-['Outfit'] font-black text-[42px] sm:text-[56px] lg:text-[72px] text-[#404040] leading-tight uppercase">
            {t("heading")}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={stat.key}
              className="group bg-white rounded-[32px] p-8 lg:p-10 shadow-xl shadow-green-900/5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:rotate-12"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <div className="relative w-10 h-10">
                  <Image 
                    src={stat.icon} 
                    alt="" 
                    fill 
                    className="object-contain" 
                    style={{ filter: idx === 3 ? "none" : "brightness(0) saturate(100%) invert(48%) sepia(82%) font-weight(700) hue-rotate(95deg) brightness(98%) contrast(102%)" }}
                  />
                </div>
              </div>

              <span 
                className="font-['Outfit'] font-black text-[48px] lg:text-[56px] leading-none mb-4"
                style={{ color: stat.color }}
              >
                {t(`stats.${stat.key}.value`)}
              </span>
              
              <p className="font-['Funnel_Display'] font-bold text-[18px] lg:text-[22px] text-[#404040]/70 leading-tight">
                {t(`stats.${stat.key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Repeating Pattern Container */}
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-48 z-10 pointer-events-none overflow-hidden">
        {/* Repeating Biscuit Piece Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/assets/hero/biscuit-piece.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)"
          }}
        />
        {/* Solid Wave Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32">
          <Image 
            src="/assets/sections/bottom-wave.svg" 
            alt="" 
            fill 
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
