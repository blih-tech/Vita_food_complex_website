"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

// Certification logos — actual images will be managed via CMS
const certLogos = [
  {
    alt: "ISO 9001:2015 — Quality Management System",
    src: "/assets/quality/quality-1.png",
    width: 248,
    height: 150,
  },
  {
    alt: "HACCP — Food Safety Management",
    src: "/assets/quality/quality-2.png",
    width: 200,
    height: 150,
  },
  {
    alt: "Ethiopian Accreditation Service (EAS)",
    src: "/assets/quality/quality-3.png",
    width: 337,
    height: 150,
  },
  {
    alt: "Ethiopian Standards Agency (ESA)",
    src: "/assets/quality/quality-1.png",
    width: 418,
    height: 150,
  },
  {
    alt: "Quality Standards Compliance",
    src: "/assets/quality/quality-2.png",
    width: 200,
    height: 150,
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
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
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
                height={logo.height}
                className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
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
                height={logo.height}
                className="object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
