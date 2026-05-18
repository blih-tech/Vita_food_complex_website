"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type LocaleKey = "en" | "am";

export default function CustomerCareHero({
  content,
  locale = "en",
}: {
  content?: Record<string, unknown>;
  locale?: string;
}) {
  const t = useTranslations("CustomerCare");
  const lang: LocaleKey = locale === "am" ? "am" : "en";
  const branch = content?.[lang] as Record<string, string | undefined> | undefined;
  const enBranch = content?.en as Record<string, string | undefined> | undefined;

  const subtitle = branch?.subtitle ?? t("subheading");
  const backgroundImage =
    branch?.backgroundImage ?? enBranch?.backgroundImage ?? "/assets/images/customer-care/customer-care-bg.png";

  const headlineFull = branch?.headlineFull ?? (lang === "am" ? t("heading") : undefined);

  const headlineLead =
    branch?.headlineLead ??
    (lang === "en"
      ? "Share your feedback, questions, or concerns with our "
      : "");
  const headlineAccent =
    branch?.headlineAccent ?? (lang === "en" ? "care team" : "");
  const headlineTail = branch?.headlineTail ?? "";

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[850px] flex items-start justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6">
        <div className="max-w-[90vw] sm:max-w-[700px] lg:max-w-[1000px]">
          <h1 className="font-outfit font-bold text-[26px] sm:text-[38px] md:text-[52px] lg:text-[64px] text-[#F1F1F1] leading-[1.15] tracking-[-0.02em] mb-3 sm:mb-6">
            {headlineFull != null && headlineFull !== "" ? (
              headlineFull
            ) : (
              <>
                {headlineLead}
                {!!headlineAccent && <span className="text-white">{headlineAccent}</span>}
                {headlineTail}
              </>
            )}
          </h1>
          <p className="font-outfit font-light text-[13px] sm:text-[15px] md:text-[18px] lg:text-[24px] text-[#F1F1F1] max-w-[95%] sm:max-w-[850px] mx-auto leading-snug tracking-[-0.004em]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
