"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CompanySection() {
  const t = useTranslations("Company");

  return (
    <section
      id="company"
      className="relative bg-[#E9F7ED] py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle background circle */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#23B349] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* ── LEFT: text ── */}
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          {/* Label */}
          <p className="font-['Outfit'] font-normal text-[#333733]/60 text-2xl leading-snug tracking-[0.04em]">
            {t("label")}
          </p>

          {/* Big heading */}
          <div className="leading-none overflow-hidden -mt-2">
            <span
              className="block font-['Funnel_Display'] font-bold text-[#23B349]"
              style={{
                fontSize: "clamp(60px, 10.5vw, 200px)",
                lineHeight: 1.05,
              }}
            >
              Our
            </span>
            <span
              className="block font-['Funnel_Display'] font-bold text-[#23B349] -mt-2 lg:-mt-4"
              style={{
                fontSize: "clamp(54px, 9.4vw, 180px)",
                lineHeight: 1.05,
              }}
            >
              {t("heading")}
            </span>
          </div>

          {/* Body */}
          <p className="font-['Outfit'] font-normal text-[#333733] text-xl lg:text-2xl leading-relaxed max-w-xl tracking-[0.04em]">
            {t("body")}
          </p>

          {/* CTA */}
          <div>
            <button className="px-16 py-5 lg:py-6 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-3xl tracking-[0.04em] hover:bg-[#1a6b2e] transition-colors">
              {t("cta")}
            </button>
          </div>
        </div>

        {/* ── RIGHT: image ── */}
        <div className="order-1 lg:order-2 flex items-center justify-center relative">
          <div className="relative w-full max-w-lg">
            {/* Decorative circle behind image */}
            <div className="absolute inset-0 scale-110 bg-[#23B349]/10 rounded-full blur-2xl" />
            <Image
              src="/assets/company/snack-bag.svg"
              alt="Vita Food Snack Bag"
              width={500}
              height={400}
              className="relative w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
