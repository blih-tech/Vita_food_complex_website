"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutCompanySection() {
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
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        {/* Story Image Frame — Figma node 277:8195 (824x586) */}
        <div
          className={`relative mb-10 overflow-hidden`}
          style={{
            maxWidth: 824,
            borderRadius: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div
            className="relative"
            style={{ paddingBottom: "71.11%" /* 586/824 */ }}
          >
            <Image
              src={ABOUT_ASSETS.content.storyImage}
              alt="Vita Story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Made in Ethiopia Badge — Figma node 2080:3631 (312x211) */}
        <div className="relative mb-12" style={{ maxWidth: 312 }}>
          <Image
            src={ABOUT_ASSETS.content.madeInEthiopia}
            alt="Made in Ethiopia"
            width={312}
            height={211}
            className="w-auto h-auto"
          />
        </div>

        {/* "Our Story" Heading — Figma node 2066:2563: Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
        <h2
          className={`mb-8`}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "61.44px",
            letterSpacing: "-1.28px",
            color: "#23B349",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.1s",
          }}
        >
          {t("company.title")}
        </h2>

        {/* Body Paragraph — Figma node 277:8190: Outfit Regular 48px, lh 48px, ls -0.48px, #8A8C8A */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(20px, 3vw, 48px)",
            lineHeight: "48px",
            letterSpacing: "-0.48px",
            color: "#8A8C8A",
            maxWidth: 1522,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          {t("company.description")}
        </p>
      </div>
    </section>
  );
}
