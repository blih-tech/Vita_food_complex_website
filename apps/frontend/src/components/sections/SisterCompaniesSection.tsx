"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useViewportActivity } from "@/hooks/useViewportActivity";

const LOGO_FILE_OVERRIDES: Record<string, string> = {
  "motors.svg": "/assets/sister/motors.png",
  "cables.svg": "/assets/sister/cables.png",
  "limestone.svg": "/assets/sister/limestone.png",
  "golden-tulip.svg": "/assets/sister/golden-tulip-official.webp",
  "golden-tulip.png": "/assets/sister/golden-tulip-official.webp",
  "long-tea-logo.png": "/assets/sister/long-tea-official.webp",
  "lewis.svg": "/assets/sister/lewis-logo.png",
  "lewis.png": "/assets/sister/lewis-logo.png",
  "foods.svg": "/assets/sister/foods.png",
};

const LOGO_NAME_OVERRIDES: Record<string, string> = {
  "golden tulip": "/assets/sister/golden-tulip-official.webp",
  "long tea": "/assets/sister/long-tea-official.webp",
  "lewis": "/assets/sister/lewis-logo.png",
  "lewis retails": "/assets/sister/lewis-logo.png",
  "belayab foods": "/assets/sister/foods.png",
  "belayab food": "/assets/sister/foods.png",
};

function normalizeBrandName(value?: string) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function resolveLogoSrc(src: string, alt?: string) {
  const trimmedSrc = src.trim();
  const brandName = normalizeBrandName(alt);

  if (brandName && LOGO_NAME_OVERRIDES[brandName]) {
    return LOGO_NAME_OVERRIDES[brandName];
  }

  const fileName = trimmedSrc.split("?")[0]?.split("/").pop()?.toLowerCase();

  if (fileName && LOGO_FILE_OVERRIDES[fileName]) {
    return LOGO_FILE_OVERRIDES[fileName];
  }

  return trimmedSrc;
}

export default function SisterCompaniesSection({
  content,
  locale,
}: {
  content?: any;
  locale?: string;
}) {
  const t = useTranslations("About.sisterCompanies");
  const c = content?.[locale as string] || content?.en;
  const { ref: sectionRef, isActive } =
    useViewportActivity<HTMLElement>("200px 0px");

  const cmsLogos: Array<{ src: string; alt?: string }> = (c?.logos || [])
    .filter(
      (logo: any) =>
        logo && typeof logo.src === "string" && logo.src.trim() !== "",
    )
    .map((logo: any) => ({
      src: resolveLogoSrc(logo.src, logo.alt),
      alt: logo.alt,
    }));

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24"
    >
      <div className="mx-auto mb-16 flex max-w-[1024px] flex-col items-center px-5 text-center">
        <p className="mb-3 font-['Funnel_Display'] text-[16px] font-medium text-[#404040] sm:text-[18px]">
          {c?.subtitle || "Sister Companies"}
        </p>
        <h2 className="font-['Outfit'] text-[36px] font-bold leading-tight tracking-tight text-[#23B349] sm:text-[48px] lg:text-[60px]">
          {c?.heading || "Different Experiences"}
        </h2>
      </div>

      {cmsLogos.length > 0 && (
        <div className="relative mb-12 w-full overflow-hidden py-8">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

          <div
            className="flex animate-marquee items-center whitespace-nowrap"
            style={{
              gap: "200px",
              animationPlayState: isActive ? "running" : "paused",
              willChange: isActive ? "transform" : "auto",
            }}
          >
            {cmsLogos.map((logo, idx) => (
              <div
                key={`logo-a-${idx}`}
                className="flex flex-shrink-0 flex-col items-center justify-center gap-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Sister Company ${idx + 1}`}
                  width={300}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  quality={90}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 300px"
                  className="h-[90px] w-[180px] object-contain transition-transform duration-500 hover:scale-105 sm:h-[120px] sm:w-[240px] lg:h-[150px] lg:w-[300px]"
                />
                {logo.alt && (
                  <p className="font-['Outfit'] text-[16px] font-semibold tracking-wide text-[#404040]">
                    {logo.alt}
                  </p>
                )}
              </div>
            ))}

            {cmsLogos.map((logo, idx) => (
              <div
                key={`logo-b-${idx}`}
                className="flex flex-shrink-0 flex-col items-center justify-center gap-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Sister Company ${idx + 1}`}
                  width={300}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  quality={90}
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 300px"
                  className="h-[90px] w-[180px] object-contain transition-transform duration-500 hover:scale-105 sm:h-[120px] sm:w-[240px] lg:h-[150px] lg:w-[300px]"
                />
                {logo.alt && (
                  <p className="font-['Outfit'] text-[16px] font-semibold tracking-wide text-[#404040]">
                    {logo.alt}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-8 px-5 text-center">
        <p className="max-w-[450px] font-['Funnel_Display'] text-[14px] leading-relaxed text-[#404040] sm:text-[16px]">
          {c?.description ||
            "Through our diverse sister companies, we deliver value across every touchpoint of everyday life."}
        </p>
        <Link
          href={c?.link || "/about#sister-companies"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#23B349] px-6 py-2 font-['Funnel_Display'] text-[14px] text-white transition-colors duration-300 hover:bg-[#1d963c]"
        >
          {c?.cta || "See more"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
