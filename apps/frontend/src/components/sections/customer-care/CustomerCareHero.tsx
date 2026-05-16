"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CustomerCareHero() {
  const t = useTranslations("CustomerCare");

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[850px] flex items-start justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/customer-care/customer-care-bg.png"
          alt="Customer Care Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6">
        <div className="max-w-[90vw] sm:max-w-[700px] lg:max-w-[1000px]">
          <h1 className="font-outfit font-bold text-[26px] sm:text-[38px] md:text-[52px] lg:text-[64px] text-[#F1F1F1] leading-[1.15] tracking-[-0.02em] mb-3 sm:mb-6">
            Share your feedback, questions, or concerns with our <span className="text-white">care team</span>
          </h1>
          <p className="font-outfit font-light text-[13px] sm:text-[15px] md:text-[18px] lg:text-[24px] text-[#F1F1F1] max-w-[95%] sm:max-w-[850px] mx-auto leading-snug tracking-[-0.004em]">
            We&apos;re committed to providing the best experience for every customer. Share your feedback, report a concern, or contact our support team and we&apos;ll respond as quickly as possible
          </p>
        </div>
      </div>
    </section>
  );
}
