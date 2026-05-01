"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function SustainabilityCommitmentSection() {
  const t = useTranslations("Sustainability");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const commitments = [
    {
      key: "localSourcing",
      items: [
        "localSourcing.items.0",
        "localSourcing.items.1",
        "localSourcing.items.2",
      ],
    },
    {
      key: "communityImpact",
      items: [
        "communityImpact.items.0",
        "communityImpact.items.1",
        "communityImpact.items.2",
      ],
    },
    {
      key: "responsibleProduction",
      items: [
        "responsibleProduction.items.0",
        "responsibleProduction.items.1",
        "responsibleProduction.items.2",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-[128px] py-[80px] lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[80px] md:py-[60px] sm:py-[40px]"
    >
      {/* Commitment text */}
      <div className="max-w-[1386px] mx-auto mb-[80px]">
        <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-1.28px] text-[#23B349] max-w-[498px] mb-[48px] lg:text-[64px] md:text-[48px] sm:text-[36px]">
          {t("commitment.title")}
        </h2>
        <p className="font-['Funnel_Display'] font-normal text-[clamp(20px,3vw,32px)] leading-[40px] tracking-[-0.128px] text-[#545854]">
          {t("commitment.description")}
        </p>
      </div>

      {/* 3 Commitment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-[1386px] mx-auto">
        {commitments.map((c, i) => (
          <div
            key={c.key}
            className="rounded-[24px] p-8 md:p-10 bg-[#F5F5F5] min-h-[400px] transition-all duration-800 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <h3
              className="mb-6 font-['Funnel_Display'] font-bold text-[32px] leading-[32px] tracking-[-0.32px]"
              style={{
                color: c.key === "responsibleProduction" ? "#23B349" : "#197F34",
              }}
            >
              {t(`commitment.${c.key}.title`)}
            </h3>
            <ul className="space-y-4">
              {c.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-[#23B349]" />
                  <span className="font-['Outfit'] font-normal text-[20px] leading-[25.2px] tracking-[-0.08px] text-[#333733]">
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick Fact Stats - Responsive Grid Layout */}
      <div className="bg-[#F5F5F5] rounded-[32px] p-8 md:p-12 max-w-[1386px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* +11 SKUs */}
          <div className="border-2 border-white rounded-[20px] bg-[rgba(171,255,152,0.5)] backdrop-blur-[10px] p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-center">
            <div className="font-['Outfit'] font-black text-[clamp(80px,8vw,160px)] leading-[0.88] tracking-[-4.8px] text-black text-center mb-4">
              +11
            </div>
            <div className="font-['Funnel_Display'] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[-0.08px] text-[#404040] text-center">
              Product SKUs
            </div>
          </div>

          {/* 60tn Flour */}
          <div className="border-2 border-white rounded-[20px] bg-[rgba(171,255,152,0.5)] backdrop-blur-[10px] p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-center">
            <div className="font-['Outfit'] font-black text-[clamp(80px,8vw,160px)] leading-[0.88] tracking-[-4.8px] text-black text-center mb-4">
              60tn
            </div>
            <div className="font-['Funnel_Display'] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[-0.08px] text-[#404040] text-center">
              Tones of Flour Production/Day
            </div>
          </div>

          {/* +200 Jobs */}
          <div className="border-2 border-white rounded-[20px] bg-[rgba(171,255,152,0.5)] backdrop-blur-[10px] p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-center">
            <div className="font-['Outfit'] font-black text-[clamp(80px,8vw,160px)] leading-[0.88] tracking-[-4.8px] text-black text-center mb-4">
              +200
            </div>
            <div className="font-['Funnel_Display'] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[-0.08px] text-[#404040] text-center">
              Jobs Created
            </div>
          </div>

          {/* Quick Fact */}
          <div className="border-2 border-white rounded-[20px] bg-[rgba(171,255,152,0.5)] backdrop-blur-[10px] p-6 md:p-8 h-[280px] md:h-[300px] flex items-center justify-center">
            <div className="font-['Outfit'] font-black text-[clamp(40px,4vw,66px)] leading-[0.9] tracking-[-1.33px] text-[#404040] text-center">
              Quick Fact
            </div>
          </div>

          {/* 22Km² Factory */}
          <div className="border-2 border-white rounded-[20px] bg-gradient-to-br from-[#23B349] to-[#0F4B1F] p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-center md:col-span-2">
            <div className="font-['Outfit'] font-black text-[clamp(60px,6vw,160px)] leading-[0.88] tracking-[-4.8px] text-white text-center mb-4">
              <span className="text-[clamp(60px,6vw,160px)]">22Km</span>
              <span className="text-[clamp(36px,3.6vw,96px)] align-top">2</span>
            </div>
            <div className="font-['Funnel_Display'] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[-0.08px] text-white text-center">
              Factory Size in Square Killometer
            </div>
          </div>

          {/* Investment */}
          <div className="border-2 border-white rounded-[20px] bg-gradient-to-br from-[#23B349] to-[#0F4B1F] p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-center md:col-span-2 lg:col-span-3">
            <div className="font-['Outfit'] font-black text-[clamp(60px,6vw,160px)] leading-[0.88] tracking-[-4.8px] text-white text-center mb-4">
              Br210M
            </div>
            <div className="font-['Funnel_Display'] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[-0.08px] text-white text-center mb-4">
              Total Investment
            </div>
            <div className="font-['Outfit'] font-black text-[clamp(40px,4vw,80px)] leading-[0.88] tracking-[-2.4px] text-[#404040] text-center">
              $1.4M
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
