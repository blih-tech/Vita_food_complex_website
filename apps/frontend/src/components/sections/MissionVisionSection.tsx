"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function MissionVisionSection() {
  const t = useTranslations("About.mv");
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

  /* Figma layout (node 2080:3630):
     Left card (2080:3620): 820.83 × 816.36 — text top-left + image bottom-right
     Right: 2×2 grid — Mission, Vision, Purpose, Values (399.24 × 399.24 each, gap ~22px)
  */

  const cards = [
    { key: "mission", labelKey: "mission.label", descKey: "mission.desc" },
    { key: "vision", labelKey: "vision.label", descKey: "vision.desc" },
    { key: "purpose", labelKey: "purpose.label", descKey: "purpose.desc" },
    { key: "values", labelKey: "values.label", descKey: "values.desc" },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Large card — Figma node 2080:3620 (820.83 × 816.36) */}
          <div
            className="relative rounded-[24px] overflow-hidden flex-shrink-0"
            style={{
              background: "#F9F9F9",
              border: "1px solid #E8E8E8",
              width: "100%",
              maxWidth: 821,
              minHeight: 600,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Text block — layout_DJE6HB: column, gap:22.35px, x=45, y=44.53, w=358 */}
            <div
              className="absolute top-0 left-0 p-10 md:p-12"
              style={{ zIndex: 2, maxWidth: 403 }}
            >
              {/* Leaf icon — Figma node: 47.67×47.67, green bg */}
              <div
                className="mb-5 rounded-full overflow-hidden flex-shrink-0"
                style={{ width: 48, height: 48 }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "#23B349" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L12 14h3l-2-5 3-3-2-2-2 3-3-2 5-3 5 5z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              {/* "A New Generation of Food" — style_DMJZ37: Funnel Display 700, 28px, 1em lh, -0.4% ls, #23B349 */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: "1em",
                  letterSpacing: "-0.112px",
                  color: "#23B349",
                }}
              >
                {t("newGen.title")}
              </h3>

              {/* Description — style_P2KLAN: Outfit 400, 20px, 1.26em lh, -0.4% ls, #8A8C8A */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: "1.26em",
                  letterSpacing: "-0.08px",
                  color: "#8A8C8A",
                }}
              >
                {t("newGen.desc")}
              </p>
            </div>

            {/* Image — layout_5S88MA: x=250, y=272.53, w=569, h=542, radius: 16px 0px 24px 0px */}
            <div
              className="absolute overflow-hidden"
              style={{
                bottom: 0,
                right: 0,
                width: "69%",
                height: "66%",
                borderRadius: "16px 0px 24px 0px",
              }}
            >
              <Image
                src={ABOUT_ASSETS.content.storyImage}
                alt="A New Generation of Food"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: 2×2 grid — each ~399.24×399.24 with ~22px gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {cards.map((card, i) => (
              <div
                key={card.key}
                className="rounded-[24px] p-8 md:p-10 flex flex-col gap-4"
                style={{
                  background: "#F5F5F5",
                  minHeight: 350,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease-out ${0.1 * (i + 1)}s`,
                }}
              >
                {/* Icon — Figma: 48×48, green bg, rounded full */}
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 48, height: 48, background: "#23B349" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                </div>

                {/* Label — style_DMJZ37: Funnel Display 700, 28px, 1em, #23B349 */}
                <h4
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    lineHeight: "1em",
                    letterSpacing: "-0.112px",
                    color: "#23B349",
                  }}
                >
                  {t(card.labelKey)}
                </h4>

                {/* Description — style_P2KLAN: Outfit 400, 20px, 1.26em, #8A8C8A */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "1.26em",
                    letterSpacing: "-0.08px",
                    color: "#333333", // Updated to dark gray
                  }}
                >
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
