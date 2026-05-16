"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CustomerCareHero() {
  const t = useTranslations("CustomerCare");

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/customer-care/customer-care-bg.png"
          alt="Customer Care Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8">
        <div className="max-w-[1000px]">
          <h1 className="font-outfit font-bold text-[40px] md:text-[64px] text-[#F1F1F1] leading-[1.1] tracking-[-2%] mb-6">
            Share your feedback, questions, or concerns with our <span className="text-white">care team</span>
          </h1>
          <p className="font-outfit font-light text-[18px] md:text-[24px] text-[#F1F1F1] max-w-[850px] mx-auto leading-tight tracking-[-0.4%]">
            We’re committed to providing the best experience for every customer. Share your feedback, report a concern, or contact our support team and we’ll respond as quickly as possible
          </p>
        </div>
      </div>
    </section>
  );
}
