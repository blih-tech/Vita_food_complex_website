"use client";

import { useTranslations } from "next-intl";

/** Figma 2066:2563 + 277:8190: Display 64 / 96% / -2% #23B349; body style_FA981T 48 / 100% / -1% #8A8C8A; gap 32px; max content ~1522 */
export default function AboutCompanySection() {
  const t = useTranslations("About");

  return (
    <section className="bg-white px-8 py-16 md:px-16 md:py-24 lg:px-[128px] lg:py-32">
      <div className="mx-auto flex w-full max-w-[1522px] flex-col items-center gap-8 text-center">
        <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(32px,5vw,64px)] font-bold leading-[0.96] tracking-[-0.02em] text-[#23B349]">
          {t("company.title")}
        </h2>

        <p className="max-w-[1522px] font-[family-name:var(--font-outfit)] text-[clamp(20px,3.5vw,48px)] font-normal leading-[1.1] tracking-[-0.01em] text-[#8A8C8A]">
          {t("company.description")}
        </p>
      </div>
    </section>
  );
}
