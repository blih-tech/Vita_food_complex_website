"use client";

import { useTranslations } from "next-intl";

/** Figma 2066:2563 + 277:8190: Display 64 / 96% / -2% #23B349; body style_FA981T 48 / 100% / -1% #8A8C8A; gap 32px; max content ~1522 */
export default function AboutCompanySection() {
  const t = useTranslations("About");

  return (
    <section className="bg-white px-8 py-16 md:px-16 md:py-24 lg:px-[128px] lg:py-32">
      <div className="mx-auto flex max-w-[1522px] flex-col items-center gap-8 text-center">
        <h2 className="font-[family-name:var(--font-outfit)] text-[36px] font-bold leading-[0.96] tracking-[-0.02em] text-[#23B349] md:text-[48px] lg:text-[64px]">
          {t("company.title")}
        </h2>

        <p className="max-w-[1522px] font-[family-name:var(--font-outfit)] text-[22px] font-normal leading-[1] tracking-[-0.01em] text-[#8A8C8A] md:text-[36px] lg:text-[48px]">
          {t("company.description")}
        </p>
      </div>
    </section>
  );
}
