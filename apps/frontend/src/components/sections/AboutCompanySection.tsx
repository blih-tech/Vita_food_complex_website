"use client";

import { useTranslations } from "next-intl";

export default function AboutCompanySection() {
  const t = useTranslations("About");

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center">
        {/* Title — Outfit Bold, Brand Green */}
        <h2
          className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349] leading-tight mb-8"
        >
          {t("company.title")}
        </h2>

        {/* Description — Outfit Regular, Grey */}
        <p
          className="font-[family-name:var(--font-outfit)] font-normal text-[18px] md:text-[24px] lg:text-[32px] text-[#404040]/70 leading-relaxed max-w-[1100px]"
        >
          {t("company.description")}
        </p>
      </div>
    </section>
  );
}
