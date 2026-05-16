"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CustomerCareHero({ activeTab }: { activeTab: "feedback" | "complaint" }) {
  const t = useTranslations("CustomerCare");

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeTab === "feedback" ? "/assets/images/customer-care/feedback-bg.png" : "/assets/images/customer-care/complaint-bg.png"}
          alt="Customer Care Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[40px] md:text-[80px] lg:text-[100px] text-white leading-tight mb-6 drop-shadow-lg">
          {t("heading")}
        </h1>
        <p className="font-outfit font-medium text-[18px] md:text-[24px] text-white/90 max-w-[800px] mx-auto leading-relaxed drop-shadow-md">
          {t("subheading")}
        </p>
      </div>
    </section>
  );
}
