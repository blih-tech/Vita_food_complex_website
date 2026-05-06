"use client";

import { useTranslations } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

/** Figma About (277:8084): Header hero fill_JQM9DP; headline Headline (179:449); subtitle style_8R6JGC; image 277:8195 824×586, radius 16px */
const HERO_RADIAL =
  "radial-gradient(circle at 2% 163%, rgb(31, 214, 80) 0%, rgb(35, 179, 73) 60%, rgb(116, 255, 56) 100%)";

export default function AboutHeroSection() {
  const t = useTranslations("About");

  return (
    <section className="relative w-full overflow-hidden" style={{ background: HERO_RADIAL }}>
      <div className="relative z-10 mx-auto flex max-w-[1920px] flex-col items-center px-8 pb-0 pt-[clamp(80px,10vw,160px)] text-center md:px-16 lg:px-[128px]">
        <h1
          className="mb-8 max-w-[1000px] font-[family-name:var(--font-outfit)] text-[clamp(36px,6vw,80px)] font-extrabold leading-[1] tracking-[-0.02em] text-white"
        >
          {t("hero.headline")}
        </h1>

        <p
          className="mb-16 max-w-[824px] font-[family-name:var(--font-funnel-display)] text-[clamp(16px,1.8vw,24px)] font-medium leading-normal tracking-[-0.004em] text-[#E8E8E8]"
        >
          {t("hero.subtitle")}
        </p>

        <div
          className="relative w-full max-w-[824px] overflow-hidden rounded-[16px]"
          style={{ aspectRatio: "824 / 586" }}
        >
          <Image
            src={ABOUT_ASSETS.hero.storyImage}
            alt={t("hero.headline")}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 900px) 100vw, 824px"
          />
        </div>
      </div>

      <div className="relative mt-[-48px] h-[100px] w-full md:mt-[-64px] md:h-[140px] lg:mt-[-80px] lg:h-[180px]">
        <div className="absolute bottom-0 left-1/2 aspect-[4/1] w-[150%] -translate-x-1/2 rounded-t-[100%] bg-white" />
      </div>
    </section>
  );
}
