"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ResearchUserResearchSection({ content, locale }: { content?: any; locale?: string }) {
  const [email, setEmail] = useState("");
  const t = useTranslations("Research.userResearch");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const heading = c?.heading || t("heading");
  const description = c?.description || t("description");
  const demographics = c?.demographics || t("demographics");
  const totalRespondents = c?.totalRespondents || t("totalRespondents");
  const peoples = c?.peoples || t("peoples");
  const cta = c?.cta || t("cta");
  const emailPlaceholder = c?.emailPlaceholder || t("emailPlaceholder");
  const legend = c?.legend || {
    kids: t("legend.kids"),
    parents: t("legend.parents"),
    youth: t("legend.youth"),
  };

  // Dynamic percentages for the donut chart
  const p = c?.percentages || { kids: 33, parents: 33, youth: 34 };
  const total = p.kids + p.parents + p.youth;
  
  // SVG Donut Calculations
  const radius = 35;
  const circumference = 2 * Math.PI * radius; // ~219.9
  
  const kidsOffset = circumference - (p.kids / 100) * circumference;
  const parentsOffset = circumference - (p.parents / 100) * circumference;
  const youthOffset = circumference - (p.youth / 100) * circumference;
  
  const kidsRotate = 0;
  const parentsRotate = (p.kids / 100) * 360;
  const youthRotate = ((p.kids + p.parents) / 100) * 360;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Research file requested for:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-['Funnel_Display'] font-bold text-[36px] md:text-[48px] leading-none text-[#23B349] tracking-[-0.01em]">
            {heading}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] text-[#8A8C8A] tracking-[-0.004em]">
            {description}
          </p>
        </div>

        {/* Content: Chart + Demographics */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left: Donut Chart with floating badges */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center lg:ml-12 overflow-visible">
            
            {/* SVG Donut Chart */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
              {/* Kids Segment */}
              <circle 
                cx="50" cy="50" r={radius} 
                fill="transparent" 
                stroke="#90D152" 
                strokeWidth="24" 
                strokeDasharray={circumference} 
                strokeDashoffset={kidsOffset} 
                className="transform origin-center transition-all duration-1000 ease-out"
                style={{ transform: `rotate(${kidsRotate}deg)` }}
              />
              {/* Parents Segment */}
              <circle 
                cx="50" cy="50" r={radius} 
                fill="transparent" 
                stroke="#116D29" 
                strokeWidth="24" 
                strokeDasharray={circumference} 
                strokeDashoffset={parentsOffset} 
                className="transform origin-center transition-all duration-1000 ease-out"
                style={{ transform: `rotate(${parentsRotate}deg)` }}
              />
              {/* Youth Segment */}
              <circle 
                cx="50" cy="50" r={radius} 
                fill="transparent" 
                stroke="#E8E8E8" 
                strokeWidth="24" 
                strokeDasharray={circumference} 
                strokeDashoffset={youthOffset} 
                className="transform origin-center transition-all duration-1000 ease-out"
                style={{ transform: `rotate(${youthRotate}deg)` }}
              />
            </svg>

            {/* Floating Badges */}
            <div className="absolute top-[15%] left-[5%] w-[70px] sm:w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 transition-all duration-700">
              <span className="font-['Outfit'] font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] text-black">{p.kids}%</span>
            </div>

            <div className="absolute top-[35%] right-[0%] sm:right-[-5%] lg:right-[-10%] w-[70px] sm:w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 transition-all duration-700">
              <span className="font-['Outfit'] font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] text-black">{p.parents}%</span>
            </div>

            <div className="absolute bottom-[5%] left-[15%] w-[70px] sm:w-[80px] md:w-[120px] lg:w-[140px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 transition-all duration-700">
              <span className="font-['Outfit'] font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] text-black">{p.youth}%</span>
            </div>
          </div>

          {/* Right: Demographics & Newsletter */}
          <div className="flex flex-col w-full lg:w-[50%] gap-12 lg:gap-24">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-['Outfit'] font-medium text-[36px] md:text-[48px] text-[#23B349] leading-tight tracking-[-0.004em]">
                {demographics}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="font-['Outfit'] font-medium text-[20px] md:text-[24px] text-[#404040]">
                  {totalRespondents}
                </span>
                <span className="font-['Funnel_Display'] font-bold text-[36px] md:text-[48px] text-[#23B349] leading-none">
                  450+ <span className="text-[20px] md:text-[24px] font-medium text-[#404040]">{peoples}</span>
                </span>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#90D152] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px] text-[#333733]">{legend.kids}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#116D29] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px] text-[#333733]">{legend.parents}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#E8E8E8] rounded-[16px] md:rounded-[24px] shrink-0"></div>
                  <span className="font-['Outfit'] font-medium text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px] text-[#333733]">{legend.youth}</span>
                </div>
              </div>
            </div>

            {/* Newsletter / File Download CTA */}
            <div className="flex flex-col gap-6 pt-8 border-t border-gray-100">
              <h4 className="font-['Funnel_Display'] font-medium text-[24px] md:text-[32px] text-[#000500] leading-tight tracking-[-0.004em] max-w-[400px]">
                {cta}
              </h4>
              
              <form onSubmit={handleSubmit} className="flex items-center gap-3 sm:gap-4 w-full sm:max-w-[480px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailPlaceholder}
                  required
                  className="flex-1 min-w-0 h-[48px] sm:h-[56px] px-4 sm:px-6 md:px-8 border border-[#404040] rounded-full font-['Funnel_Display'] font-medium text-[16px] sm:text-[18px] md:text-[24px] text-[#404040] placeholder:text-[#404040]/50 outline-none focus:border-[#23B349]"
                />
                <button
                  type="submit"
                  className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#23B349] rounded-full flex items-center justify-center shrink-0 hover:bg-[#1e993f] transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
