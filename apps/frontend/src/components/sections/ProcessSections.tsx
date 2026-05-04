"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const STEPS = ["01", "02", "03"] as const;

/** Figma 2080:3663: Page width 1664, row gap 24px; image 726.44×570.07 r24; overlay fill_EGQIFS; caption fill_PO08N8 + blur(90px) r16; numbers style_V1HZTM rgba(114,99,0,0.14) */
const PROCESS_IMAGE_OVERLAY =
  "linear-gradient(180deg, rgba(255, 246, 177, 1) 0%, rgba(255, 222, 86, 1) 100%)";

export default function ProcessSections() {
  const t = useTranslations("About.process");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-8 py-20 md:px-16 lg:px-[128px]"
    >
      <div className="mx-auto flex max-w-[1664px] flex-col gap-6">
        {STEPS.map((id, i) => (
          <div
            key={id}
            className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.7s ease-out ${i * 0.12}s, transform 0.7s ease-out ${i * 0.12}s`,
            }}
          >
            <div className="w-full shrink-0 lg:max-w-[686px]">
              <div className="flex flex-col gap-6 pt-9">
                <h3
                  className="max-w-[682px] font-[family-name:var(--font-outfit)] text-[32px] font-bold leading-[0.96] tracking-[-0.02em] text-[#23B349] md:text-[48px] lg:text-[64px]"
                >
                  {t(`${id}.heading`)}
                </h3>
                <p
                  className="max-w-[538px] font-[family-name:var(--font-outfit)] text-[18px] font-normal leading-normal tracking-[-0.004em] text-[#404040] md:text-[20px]"
                >
                  {t(`${id}.desc`)}
                </p>
              </div>

              <div className="relative mt-10 h-[180px] w-full max-w-[277px] lg:mt-0 lg:h-[229px]">
                <span
                  className="absolute bottom-0 left-0 select-none font-[family-name:var(--font-funnel-display)] text-[120px] font-normal leading-none md:text-[180px] lg:text-[225px]"
                  style={{ color: "rgba(114, 99, 0, 0.14)" }}
                  aria-hidden
                >
                  {id}
                </span>
                <span className="absolute bottom-3 left-3 font-[family-name:var(--font-funnel-display)] text-[28px] font-bold leading-none tracking-[-0.004em] text-black md:text-[32px]">
                  {t(`${id}.label`)}
                </span>
              </div>
            </div>

            <div className="relative w-full max-w-[726px] lg:flex-1">
              <div
                className="relative w-full overflow-hidden rounded-[24px]"
                style={{ aspectRatio: "726.44 / 570.07" }}
              >
                <Image
                  src={
                    id === "01"
                      ? "/assets/about/wheat-farming.png"
                      : id === "02"
                        ? "/assets/about/baking-biscuits.png"
                        : "/assets/quality/quality-1.png"
                  }
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 726px"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-[24px] mix-blend-multiply"
                  style={{
                    background: PROCESS_IMAGE_OVERLAY,
                    opacity: 0.35,
                  }}
                />
                <div
                  className="absolute bottom-5 left-5 right-5 max-h-[123px] rounded-[16px] p-4 md:bottom-6 md:left-6 md:right-6"
                  style={{
                    background: "rgba(35, 179, 73, 0.5)",
                    backdropFilter: "blur(90px)",
                    WebkitBackdropFilter: "blur(90px)",
                  }}
                >
                  <p className="mb-1 font-[family-name:var(--font-funnel-display)] text-[22px] font-bold leading-none tracking-[-0.01em] text-white md:text-[32px]">
                    {t(`${id}.captionTitle`)}
                  </p>
                  <p className="font-[family-name:var(--font-funnel-display)] text-[16px] font-medium leading-tight tracking-[-0.004em] text-[#E8E8E8] md:text-[20px]">
                    {t(`${id}.captionDesc`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
