import React from "react";
import { useTranslations } from "next-intl";

export default function ArticleContent() {
  const t = useTranslations("NewsDetail");

  return (
    <section className="flex flex-col w-full max-w-[1427px] mx-auto gap-8 md:gap-[38px] pt-12 pb-24">
      {/* Lead Paragraph */}
      <p className="font-outfit font-normal text-xl md:text-2xl leading-relaxed text-[#8A8C8A]">
        {t("article.lead")}
      </p>

      {/* Content Section */}
      <div className="flex flex-col gap-6 md:gap-10 mt-4 md:mt-8">
        <h3 className="font-inter font-medium text-xl md:text-2xl leading-snug text-[#0A0A0A]">
          {t("article.section1.title")}
        </h3>

        <div className="flex flex-col gap-6 md:gap-[38px]">
          <p className="font-outfit font-normal text-base md:text-lg leading-relaxed text-[#0A0A0A]">
            {t("article.section1.p1")}
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            {t("article.section1.p2")}
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            {t("article.section1.p2")}
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            {t("article.section1.p2")}
          </p>

          <p className="font-outfit font-normal text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em] text-[#0A0A0A]">
            {t("article.section1.p2")}
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-[88%] md:w-[1265px] h-[1.82px] bg-black/10 mt-12 md:mt-24"></div>
    </section>
  );
}
