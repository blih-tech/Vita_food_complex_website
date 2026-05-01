"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function SustainabilityGiveBackSection() {
  const t = useTranslations("Sustainability");
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

  /* Figma structure (node 274:5212):
     "How We Give Back" heading + description
     3 cards staggered (y offsets: 0, 60, 120), each 544px wide
     Card: image area (575/575/575px) + text below
  */

  const cards = [
    {
      key: "farmers",
      heading: t("giveBack.farmers.heading"),
      desc: t("giveBack.farmers.desc"),
    },
    {
      key: "employment",
      heading: t("giveBack.employment.heading"),
      desc: t("giveBack.employment.desc"),
    },
    {
      key: "accessibility",
      heading: t("giveBack.accessibility.heading"),
      desc: t("giveBack.accessibility.desc"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-[48px] sm:py-[64px] md:py-[80px]"
      style={{ background: "#FFFFFF" }}
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-[128px]">
        {/* Header — Figma node 274:5213 */}
        <div className="mb-8 sm:mb-12 max-w-[1062px]">
          {/* "How We Give Back" — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
          <h2
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] mb-4 sm:mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              lineHeight: "0.96",
              letterSpacing: "-1.28px",
              color: "#23B349",
              maxWidth: 528,
            }}
          >
            {t("giveBack.title")}
          </h2>

          {/* Description — Funnel Display Medium 20px, lh 25px, ls -0.08px, #333733 */}
          <p
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              lineHeight: "1.4",
              letterSpacing: "-0.08px",
              color: "#333733",
            }}
          >
            {t("giveBack.description")}
          </p>
        </div>

        {/* 3 Cards — responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.key}
              className={`${i > 0 ? "md:mt-[30px] lg:mt-[60px]" : ""}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s ease-out ${i * 0.15}s`,
              }}
            >
              {/* Give Back images from Figma */}
              <div
                className="rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden mb-4 sm:mb-6"
                style={{
                  height: "250px",
                }}
              >
                <img
                  src={`/assets/images/sustainability/giveback-${i + 1}.jpg`}
                  alt={card.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heading — Funnel Display Bold 24px, lh 24px, ls -0.096px, #000000 */}
              <h3
                className="mb-2 sm:mb-3 text-[18px] sm:text-[20px] md:text-[24px]"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  letterSpacing:
                    card.key === "accessibility" ? "0px" : "-0.096px",
                  color: "#000000",
                }}
              >
                {card.heading}
              </h3>

              {/* Description — Outfit Regular 20px, lh 25.2px, ls -0.08px */}
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.4",
                  letterSpacing: "-0.08px",
                  color: card.key === "farmers" ? "#404040" : "#333733",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
