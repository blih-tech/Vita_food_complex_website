"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";
import { Target, Eye, Heart, Compass, Users } from "lucide-react";

export default function WhoAreWeSection() {
  const t = useTranslations("About");
  const tMv = useTranslations("About.mv");

  const cards = [
    { key: "mission", label: tMv("mission.label"), desc: tMv("mission.desc"), icon: Target },
    { key: "vision",  label: tMv("vision.label"),  desc: tMv("vision.desc"),  icon: Eye },
    { key: "values",  label: tMv("values.label"),  desc: tMv("values.desc"),  icon: Heart },
    { key: "purpose", label: tMv("purpose.label"), desc: tMv("purpose.desc"), icon: Compass },
  ];

  return (
    <section className="relative bg-[#23B349] py-20 lg:py-32 px-4 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-24 h-24 border-[1px] border-white/20 rounded-full flex items-center justify-center">
        <div className="w-20 h-20 border-[1px] border-white/30 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1400px] flex flex-col items-center">
        {/* Giant Headline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <h2 className="font-[family-name:var(--font-funnel-display)] font-bold text-[60px] md:text-[100px] lg:text-[140px] text-white/40 leading-none tracking-tighter">
            Who
          </h2>
          <div className="w-[80px] md:w-[150px] h-[4px] bg-white/30 rounded-full" />
          <h2 className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[60px] md:text-[100px] lg:text-[140px] text-white leading-none tracking-tighter">
            Are We
          </h2>
        </div>

        {/* Description */}
        <p className="font-[family-name:var(--font-outfit)] font-medium text-[16px] md:text-[20px] lg:text-[24px] text-white/90 text-center max-w-[1000px] mb-20 leading-relaxed">
          {t("whoWeAre.description")}
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left Large Card */}
          <div className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 flex flex-col relative overflow-hidden min-h-[500px] md:min-h-[700px]">
            <div className="relative z-10 max-w-[450px]">
              <div className="w-12 h-12 bg-[#23B349] rounded-2xl flex items-center justify-center mb-6">
                 <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="font-[family-name:var(--font-funnel-display)] font-bold text-[28px] md:text-[36px] text-[#23B349] mb-4 leading-tight">
                {tMv("newGen.title")}
              </h3>
              <p className="font-[family-name:var(--font-outfit)] text-[16px] md:text-[18px] text-[#404040]/70">
                {tMv("newGen.desc")}
              </p>
            </div>
            
            {/* Girl Image — Positioned at bottom center/right */}
            <div className="absolute bottom-0 right-0 w-[80%] h-[55%] md:w-[70%] md:h-[60%]">
               <Image
                 src={ABOUT_ASSETS.content.storyImage}
                 alt="New Generation"
                 fill
                 className="object-contain object-bottom"
               />
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div key={card.key} className="bg-white rounded-[32px] p-8 flex flex-col hover:shadow-xl transition-shadow border border-white/10">
                <div className="w-10 h-10 bg-[#23B349]/10 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="text-[#23B349] w-5 h-5" />
                </div>
                <h4 className="font-[family-name:var(--font-funnel-display)] font-bold text-[20px] md:text-[24px] text-[#23B349] mb-3">
                  {card.label}
                </h4>
                <p className="font-[family-name:var(--font-outfit)] text-[14px] md:text-[16px] text-[#404040]/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
