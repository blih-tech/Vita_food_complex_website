"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function WhoAreWeSection() {
  const t = useTranslations("About");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#232323", paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Decorative ellipse — Figma node 2066:3521 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[2260px]">
        <div className="relative" style={{ height: 341 }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(35,179,73,0.3) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto" style={{ maxWidth: 1664 }}>
        {/* Large Typography — Figma nodes 2066:3507, 2066:3509 */}
        <div className="mb-10" style={{ maxWidth: 1357 }}>
          {/* "Who " — Funnel Display Bold 140px, lh 175px, ls -2.8px, #E6E6E6 */}
          <div className="flex items-center flex-wrap">
            <span
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 12vw, 140px)",
                lineHeight: "175px",
                letterSpacing: "-2.8px",
                color: "#E6E6E6",
              }}
            >
              Who
            </span>

            {/* Separator line — Figma node 2066:3508 */}
            <div
              className="mx-6"
              style={{ width: 124, height: 2, background: "#404040" }}
            />

            {/* "Are We" — Funnel Display ExtraBold 150px, lh 135px, ls -3px, #FFFFFF */}
            <span
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(80px, 12vw, 150px)",
                lineHeight: "135px",
                letterSpacing: "-3px",
                color: "#FFFFFF",
              }}
            >
              Are We
            </span>
          </div>
        </div>

        {/* Body Text — Figma node 2066:3511: Outfit Regular 32px, lh 40.32px, ls -0.128px, #E8E8E8 */}
        <p
          className="max-w-[1291px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.5vw, 32px)",
            lineHeight: "40.32px",
            letterSpacing: "-0.128px",
            color: "#E8E8E8",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          {t("whoWeAre.description")}
        </p>

        {/* "Quality from the Heart of Ethiopia" badge */}
        <div className="mt-12 flex items-center gap-4">
          <Image
            src={ABOUT_ASSETS.content.madeInEthiopia}
            alt="Quality from the Heart of Ethiopia"
            width={120}
            height={120}
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
          />
          <span
            className="font-['Outfit'] font-medium"
            style={{ color: "#E8E8E8", fontSize: "clamp(16px, 2vw, 24px)" }}
          >
            Quality from the Heart of Ethiopia
          </span>
        </div>
      </div>
    </section>
  );
}
