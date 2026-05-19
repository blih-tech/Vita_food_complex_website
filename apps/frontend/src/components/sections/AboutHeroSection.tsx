"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";


export default function AboutHeroSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("About");
  const c = content?.[locale as string] || content?.en;

  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-bottom bg-no-repeat" 
      style={{ backgroundImage: "url('/assets/about/about-hero.svg')" }}
    >
      <div className="relative z-10 mx-auto flex max-w-[1920px] flex-col items-center px-8 pb-0 pt-[clamp(80px,10vw,160px)] text-center md:px-16 lg:px-[128px]">
        <h1
          className="mb-8 max-w-[1000px] font-[family-name:var(--font-outfit)] text-[clamp(36px,6vw,80px)] font-extrabold leading-[1] tracking-[-0.02em] text-white"
        >
          {c?.headline || t("hero.headline")}
        </h1>

        <p
          className="mb-16 max-w-[824px] font-[family-name:var(--font-funnel-display)] text-[clamp(16px,1.8vw,24px)] font-medium leading-normal tracking-[-0.004em] text-[#E8E8E8]"
        >
          {c?.subtitle || t("hero.subtitle")}
        </p>

        <div
          className="relative w-full max-w-[824px] overflow-hidden rounded-[16px]"
          style={{ aspectRatio: "824 / 586" }}
        >
          <Image
            src={c?.heroImage || ABOUT_ASSETS.hero.storyImage}
            alt={c?.headline || t("hero.headline")}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 900px) 100vw, 824px"
          />
        </div>
      </div>


    </section>
  );
}
