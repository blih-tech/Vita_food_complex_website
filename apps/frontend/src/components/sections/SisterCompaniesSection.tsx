"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

/** Figma 2066:3482: label style_VLDFGR; title style_XR92PF; logo row gap 200px (layout_R9ZNMY); CTA Frame 225 */
const LOGOS: { name: string; src: string; width: number; height: number }[] = [
  { name: "Belayab", src: "/assets/sister/belayab.svg", width: 120, height: 48 },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.svg", width: 160, height: 48 },
  { name: "Long Tea", src: "/assets/sister/cables.svg", width: 120, height: 48 },
  { name: "Lewis", src: "/assets/sister/lewis.svg", width: 160, height: 48 },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About.sisterCompanies");

  return (
    <section className="flex flex-col items-center bg-white px-8 py-16 md:px-16 md:py-24 lg:px-[128px]">
      <div className="mx-auto flex w-full max-w-[1664px] flex-col items-center text-center">
        <div className="mb-8 flex flex-col items-center gap-8">
          <span className="font-[family-name:var(--font-funnel-display)] text-[13.3px] font-medium leading-none tracking-[-0.004em] text-[#404040]">
            {t("label")}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-[32px] font-extrabold leading-[0.9] tracking-[-0.02em] text-[#23B349] md:text-[44px] lg:text-[53.2px]">
            {t("title")}
          </h2>
        </div>

        <div className="mb-16 flex w-full max-w-[1281px] flex-wrap items-center justify-center gap-x-12 gap-y-10 overflow-x-auto md:gap-x-16 lg:gap-x-[200px]">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="relative h-12 w-[140px] shrink-0 grayscale md:h-14 md:w-[180px]"
              style={{ opacity: 0.85 }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>

        <p className="mb-10 max-w-[600px] font-[family-name:var(--font-funnel-display)] text-[15px] font-medium leading-relaxed tracking-[-0.004em] text-[#404040]/80 md:text-[16px]">
          {t("description")}
        </p>

        <Link
          href="/gallery"
          className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#23B349] px-8 font-[family-name:var(--font-funnel-display)] text-[24px] font-medium tracking-[-0.004em] text-white transition-colors hover:bg-[#1fa041]"
        >
          <span>{t("cta")}</span>
          <span className="font-[family-name:var(--font-outfit)] text-[20px] font-normal tracking-[-0.004em]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
