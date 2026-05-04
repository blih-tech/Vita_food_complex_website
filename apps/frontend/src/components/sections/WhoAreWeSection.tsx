"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";
import { Target, Eye, Heart, Compass, UserCheck } from "lucide-react";

/** Figma 2080:3549 + 2080:3630: Who style_HP5ZJI 140 #E6E6E6; line 123.81×10 #E6E6E6; Are We style_B94LVJ 150/90% white; body style_L2HN6I 32px center max 1291; cards ~399×399 radius 24; icons ~47.67 in 44.7 padding */
export default function WhoAreWeSection() {
  const t = useTranslations("About");
  const tMv = useTranslations("About.mv");

  const cards = [
    { key: "mission", label: tMv("mission.label"), desc: tMv("mission.desc"), icon: Target },
    { key: "vision", label: tMv("vision.label"), desc: tMv("vision.desc"), icon: Eye },
    { key: "values", label: tMv("values.label"), desc: tMv("values.desc"), icon: Heart },
    { key: "purpose", label: tMv("purpose.label"), desc: tMv("purpose.desc"), icon: Compass },
  ];

  return (
    <section className="relative overflow-hidden bg-[#23B349] px-8 pb-16 pt-20 md:px-16 md:pb-24 md:pt-28 lg:px-[128px] lg:pb-32 lg:pt-32">
      <div className="mx-auto flex max-w-[1664px] flex-col items-center">
        <div className="mb-12 flex flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
          <h2 className="w-[min(100%,344px)] text-center font-[family-name:var(--font-funnel-display)] text-[56px] font-bold leading-none tracking-[-0.02em] text-[#E6E6E6] md:text-[100px] lg:text-[140px]">
            Who
          </h2>
          <div
            className="hidden h-[10px] w-[123.81px] shrink-0 rounded-full bg-[#E6E6E6] sm:block"
            aria-hidden
          />
          <h2 className="max-w-[518px] text-center font-[family-name:var(--font-funnel-display)] text-[60px] font-extrabold leading-[0.9] tracking-[-0.02em] text-white md:text-[110px] lg:text-[150px]">
            Are We
          </h2>
        </div>

        <p className="mb-16 max-w-[1291px] text-center font-[family-name:var(--font-outfit)] text-[18px] font-normal leading-normal tracking-[-0.004em] text-white md:text-[26px] lg:text-[32px]">
          {t("whoWeAre.description")}
        </p>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="relative min-h-[400px] overflow-hidden rounded-[24px] bg-white lg:col-span-7 lg:min-h-[816px] lg:max-w-[821px]">
            <div className="relative z-10 flex max-w-[358px] flex-col gap-[22px] p-11 lg:absolute lg:left-[45px] lg:top-[44px]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#23B349]/15">
                <UserCheck className="h-6 w-6 text-[#23B349]" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-funnel-display)] text-[24px] font-bold leading-none tracking-[-0.004em] text-[#23B349] md:text-[28px]">
                {tMv("newGen.title")}
              </h3>
              <p className="font-[family-name:var(--font-outfit)] text-[16px] leading-normal tracking-[-0.004em] text-[#8A8C8A] md:text-[20px]">
                {tMv("newGen.desc")}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 h-[55%] w-[85%] lg:h-[60%] lg:w-[72%]">
              <Image
                src={ABOUT_ASSETS.content.storyImage}
                alt=""
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {cards.map((card) => (
              <div
                key={card.key}
                className="relative flex min-h-[280px] flex-col rounded-[24px] border border-[#FFFFFF]/80 bg-white p-11 sm:min-h-[320px] lg:min-h-[399px]"
              >
                <div className="mb-2 flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#23B349]/10">
                  <card.icon className="h-6 w-6 text-[#23B349]" aria-hidden />
                </div>
                <h4 className="mb-2 font-[family-name:var(--font-funnel-display)] text-[24px] font-bold leading-none tracking-[-0.004em] text-[#23B349] md:text-[28px]">
                  {card.label}
                </h4>
                <p className="font-[family-name:var(--font-outfit)] text-[16px] leading-normal tracking-[-0.004em] text-[#8A8C8A] md:text-[20px]">
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
