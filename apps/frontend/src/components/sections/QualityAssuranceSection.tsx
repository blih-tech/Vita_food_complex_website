"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function QualityAssuranceSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("WhyChooseVita");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const caption = c?.caption || t("qa.caption");
  const title = c?.title || t("qa.title");
  const certs = c?.certs || [
    { name: "Fortified/Halal", src: "/assets/images/why-choose-vita/qa-cert.png" },
    { name: "EFDA", src: "/assets/images/why-choose-vita/qa-logo.png" },
    { name: "LRQA", src: "/assets/images/why-choose-vita/qa-iso.png" },
    { name: "ISO 9001", src: "/assets/images/why-choose-vita/qa-cert.png" },
    { name: "EAS", src: "/assets/images/why-choose-vita/qa-eas.png" }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 flex flex-col items-center">
      <div className="mx-auto max-w-[1400px] w-full flex flex-col items-center">

        {/* Caption Label */}
        <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] md:text-[16px] text-[#404040]/50 mb-4 text-center">
          {caption}
        </span>

        {/* Headline */}
        <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349] text-center mb-8 md:mb-16">
          {title}
        </h2>

        {/* Certifications Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16 lg:gap-20">
          {certs.map((cert: any, i: number) => (
            <div key={i} className="relative w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] h-[60px] sm:h-[80px] md:h-[120px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
               <Image
                 src={cert.src}
                 alt={cert.name}
                 fill
                 className="object-contain"
                 unoptimized
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
