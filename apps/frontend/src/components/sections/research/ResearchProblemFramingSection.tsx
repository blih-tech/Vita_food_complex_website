"use client";

import { Users, HelpCircle, Clock, Target } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ResearchProblemFramingSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Research.problemFraming");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const heading = c?.heading || t("heading");
  const description = c?.description || t("description");
  const cards = c?.cards || {
    who: { title: t("cards.who.title"), text: t("cards.who.text") },
    what: { title: t("cards.what.title"), text: t("cards.what.text") },
    when: { title: t("cards.when.title"), text: t("cards.when.text") },
    why: { title: t("cards.why.title"), text: t("cards.why.text") },
  };

  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-[45%] lg:sticky lg:top-32">
          <h2 className="font-['Outfit'] font-extrabold text-[48px] md:text-[60px] lg:text-[80px] leading-[90%] tracking-[-0.02em] text-[#23B349] uppercase">
            {heading}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[18px] md:text-[24px] leading-tight text-[#8A8C8A] tracking-[-0.004em] max-w-[600px]">
            {description}
          </p>
        </div>

        {/* Right Side: Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[55%] lg:max-w-[745px]">
          
          {/* Card 1: Who */}
          <div className="bg-[#23B349] border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col min-h-[220px] sm:min-h-[260px] md:min-h-[290px]">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-auto">
              <Users className="w-6 h-6 text-[#23B349]" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-white leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              {cards.who.title}
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-white leading-[138%] tracking-[-0.01em]">
              {cards.who.text}
            </p>
          </div>

          {/* Card 2: What */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col min-h-[220px] sm:min-h-[260px] md:min-h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              {cards.what.title}
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              {cards.what.text}
            </p>
          </div>

          {/* Card 3: When */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col min-h-[220px] sm:min-h-[260px] md:min-h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <Clock className="w-6 h-6 text-[#FFEC19]" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              {cards.when.title}
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              {cards.when.text}
            </p>
          </div>

          {/* Card 4: Why */}
          <div className="bg-white border border-[#E4DDCB] rounded-[24px] p-8 md:p-10 flex flex-col min-h-[220px] sm:min-h-[260px] md:min-h-[290px]">
            <div className="w-12 h-12 bg-[#23B349] rounded-full flex items-center justify-center mb-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.03em] mb-2 mt-4">
              {cards.why.title}
            </h3>
            <p className="font-['Outfit'] font-normal text-[16px] md:text-[18px] text-[#404040] leading-[138%] tracking-[-0.01em]">
              {cards.why.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
