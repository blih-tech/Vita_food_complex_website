"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
     Left: large card "A New Generation of Food" + image (820.83 x 816.36)
     Right: 2x2 grid of Mission, Vision, Purpose, Values cards (399.24 x 399.24 each)
     Gap between left and right: ~22px
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
          {/* Left: Large card + image — Figma node 2080:3620 (820.83 x 816.36) */}
          <div
            className="relative rounded-[24px] overflow-hidden flex-shrink-0"
            style={{
              background: "#F5F5F5",
              width: "100%",
              maxWidth: 821,
              minHeight: 500,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            {/* "A New Generation of Food" + description */}
            <div className="p-10 md:p-12">
              {/* Icon circle */}
              <div
                className="mb-6 flex items-center justify-center rounded-full"
                style={{ width: 48, height: 48, background: "#23B349" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" fill="white" />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* "A New Generation of Food" — Funnel Display Bold 28px, lh 28px, ls -0.112px, #23B349 */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: "28px",
                  letterSpacing: "-0.112px",
                  color: "#23B349",
                }}
              >
                {t("newGen.title")}
              </h3>

              {/* Description — Outfit Regular 20px, lh 25.2px, ls -0.08px, #8A8C8A */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: "25.2px",
                  letterSpacing: "-0.08px",
                  color: "#8A8C8A",
                }}
              >
                {t("newGen.desc")}
              </p>
            </div>

            {/* Image area */}
            <div
              className="relative mx-6 mb-6 rounded-[16px] overflow-hidden"
              style={{ height: 320 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#23B349]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-['Outfit'] text-[#23B349] text-6xl font-bold opacity-30">
                  Vita
                </span>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Grid of cards — each 399.24 x 399.24 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {cards.map((card, i) => (
              <div
                key={card.key}
                className="rounded-[24px] p-8 md:p-10 flex flex-col justify-between"
                style={{
                  background: "#F5F5F5",
                  minHeight: 400,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease-out ${0.1 * (i + 1)}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="mb-6 flex items-center justify-center rounded-full"
                  style={{ width: 48, height: 48, background: "#23B349" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" fill="white" />
                  </svg>
                </div>

                {/* Label — Funnel Display Bold 28px, lh 28px, ls -0.112px, #23B349 */}
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    lineHeight: "28px",
                    letterSpacing: "-0.112px",
                    color: "#23B349",
                  }}
                >
                  {t(card.labelKey)}
                </h4>

                {/* Description — Outfit Regular 20px, lh 25.2px, ls -0.08px, #8A8C8A */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "25.2px",
                    letterSpacing: "-0.08px",
                    color: "#8A8C8A",
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
