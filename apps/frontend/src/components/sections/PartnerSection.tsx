"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

// Certification logos from Figma
const certLogos = [
  {
    alt: "Fortified Food",
    src: "/assets/quality/figma/cert_1.png",
    width: 150,
  },
  {
    alt: "EFDA",
    src: "/assets/quality/figma/cert_efda.png",
    width: 280,
  },
  {
    alt: "LRQA",
    src: "/assets/quality/figma/cert_lrqa.png",
    width: 150,
  },
  {
    alt: "ISO 9001",
    src: "/assets/quality/figma/cert_iso.png",
    width: 150,
  },
  {
    alt: "EAS",
    src: "/assets/quality/figma/cert_eas.png",
    width: 320,
  },
];

export default function PartnerSection() {
  const t = useTranslations("Partner");

  return (
    <section id="quality" className="relative w-full bg-white overflow-hidden py-16 lg:py-24">
      {/* ── Header ── */}
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col items-center text-center gap-4 mb-16">
        <p className="font-['Funnel_Display'] font-medium text-[20px] text-[#404040] leading-tight">
          {t("subtitle")}
        </p>
        <h2 className="font-['Outfit'] font-black text-[50px] sm:text-[64px] lg:text-[80px] text-[#23B349] leading-[0.9] tracking-[-0.02em]">
          Quality is Built Around Us!
        </h2>
      </div>

      {/* ── Certification Logo Marquee ── */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex items-center animate-marquee" style={{ gap: 128 }}>
          {/* First set */}
          {certLogos.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: 150, width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={150}
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {certLogos.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: 150, width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={150}
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
