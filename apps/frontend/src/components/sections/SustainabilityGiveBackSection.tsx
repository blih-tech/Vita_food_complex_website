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
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        {/* Header — Figma node 274:5213 */}
        <div className="mb-12" style={{ maxWidth: 1062 }}>
          {/* "How We Give Back" — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "61.44px",
              letterSpacing: "-1.28px",
              color: "#23B349",
              maxWidth: 528,
            }}
          >
            {t("giveBack.title")}
          </h2>

          {/* Description — Funnel Display Medium 20px, lh 25px, ls -0.08px, #333733 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "25px",
              letterSpacing: "-0.08px",
              color: "#333733",
            }}
          >
            {t("giveBack.description")}
          </p>
        </div>

        {/* 3 Cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.key}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s ease-out ${i * 0.15}s`,
                marginTop: i * 60,
              }}
            >
              {/* Image area — rounded 24px, gradient bg */}
              <div
                className="rounded-[24px] overflow-hidden mb-6"
                style={{
                  minHeight: 400,
                  background: `linear-gradient(${135 + i * 30}deg, #E9F7ED 0%, ${i === 1 ? "#F0F9F4" : "#F5F5F5"} 100%)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div
                    className="w-full rounded-[16px] flex items-center justify-center"
                    style={{
                      aspectRatio: "3/4",
                      background: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <span className="text-[#23B349] text-5xl font-bold opacity-20">
                      {card.key === "farmers"
                        ? "🌾"
                        : card.key === "employment"
                          ? "👥"
                          : "🍞"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Heading — Funnel Display Bold 24px, lh 24px, ls -0.096px, #000000 */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "24px",
                  letterSpacing:
                    card.key === "accessibility" ? "0px" : "-0.096px",
                  color: "#000000",
                }}
              >
                {card.heading}
              </h3>

              {/* Description — Outfit Regular 20px, lh 25.2px, ls -0.08px */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: "25.2px",
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
