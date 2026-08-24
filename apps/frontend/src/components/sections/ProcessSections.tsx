"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const STEPS = ["01", "02", "03"] as const;

const PROCESS_IMAGE_OVERLAY =
  "linear-gradient(180deg, rgba(255, 246, 177, 1) 0%, rgba(255, 222, 86, 1) 100%)";

const DEFAULT_IMAGES = [
  "/assets/about/wheat-farming.png",
  "/assets/about/baking-biscuits.png",
  "/assets/quality/quality-1.png",
];

const CRAFTSMANSHIP_IMAGE =
  "https://images.pexels.com/photos/8433242/pexels-photo-8433242.jpeg?auto=compress&cs=tinysrgb&w=1400";

export default function ProcessSections({
  content,
  locale,
}: {
  content?: any;
  locale?: string;
}) {
  const t = useTranslations("About.process");
  const c = content?.[locale as string] || content?.en;
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
      className="bg-white px-8 py-16 md:px-16 md:py-24 lg:px-[128px] lg:py-32"
    >
      <div className="mx-auto flex max-w-[1664px] flex-col gap-[clamp(48px,8vw,96px)]">
        {STEPS.map((id, i) => {
          const step = c?.steps?.[i];
          const imageSrc = step?.image || DEFAULT_IMAGES[i];

          return (
            <div
              key={id}
              className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease-out ${i * 0.12}s, transform 0.7s ease-out ${i * 0.12}s`,
              }}
            >
              <div className="w-full shrink-0 lg:max-w-[686px]">
                <div className="flex flex-col gap-6 pt-0 lg:pt-9">
                  <h3
                    className="max-w-[682px] font-[family-name:var(--font-outfit)] font-bold leading-[0.96] tracking-[-0.02em] text-[#23B349]"
                    style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
                  >
                    {step?.heading || t(`${id}.heading`)}
                  </h3>
                  <p
                    className="max-w-[538px] font-[family-name:var(--font-outfit)] font-normal leading-normal tracking-[-0.004em] text-[#404040]"
                    style={{ fontSize: "clamp(18px, 2vw, 20px)" }}
                  >
                    {step?.desc || t(`${id}.desc`)}
                  </p>
                </div>

                <div className="relative mt-8 h-[clamp(140px,18vw,229px)] w-full max-w-[277px] lg:mt-10">
                  <span
                    className="absolute bottom-0 left-0 select-none font-[family-name:var(--font-funnel-display)] font-normal leading-none"
                    style={{
                      color: "rgba(114, 99, 0, 0.14)",
                      fontSize: "clamp(120px, 15vw, 225px)",
                    }}
                    aria-hidden
                  >
                    {id}
                  </span>
                  <span
                    className="absolute bottom-3 left-3 font-[family-name:var(--font-funnel-display)] font-bold leading-none tracking-[-0.004em] text-black"
                    style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
                  >
                    {step?.label || t(`${id}.label`)}
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-[726px] lg:flex-1">
                <div
                  className="relative w-full overflow-hidden rounded-[24px]"
                  style={{ aspectRatio: "726.44 / 570.07" }}
                >
                  {id === "02" ? (
                    <img
                      src={CRAFTSMANSHIP_IMAGE}
                      alt="Black baker holding a baking tray"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Image
                      src={imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 726px"
                    />
                  )}

                  <div
                    className="pointer-events-none absolute inset-0 rounded-[24px] mix-blend-multiply"
                    style={{
                      background: PROCESS_IMAGE_OVERLAY,
                      opacity: 0.35,
                    }}
                  />

                  <div
                    className="absolute bottom-5 left-5 right-5 max-h-[140px] rounded-[16px] p-4 md:bottom-6 md:left-6 md:right-6 lg:p-6"
                    style={{
                      background: "rgba(35, 179, 73, 0.5)",
                      backdropFilter: "blur(90px)",
                      WebkitBackdropFilter: "blur(90px)",
                    }}
                  >
                    <p
                      className="mb-1 font-[family-name:var(--font-funnel-display)] font-bold leading-none tracking-[-0.01em] text-white"
                      style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}
                    >
                      {step?.captionTitle || t(`${id}.captionTitle`)}
                    </p>
                    <p
                      className="font-[family-name:var(--font-funnel-display)] font-medium leading-tight tracking-[-0.004em] text-[#E8E8E8]"
                      style={{ fontSize: "clamp(14px, 1.8vw, 20px)" }}
                    >
                      {step?.captionDesc || t(`${id}.captionDesc`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
