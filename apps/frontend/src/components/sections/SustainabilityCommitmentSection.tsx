"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function SustainabilityCommitmentSection() {
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

  const commitments = [
    {
      key: "localSourcing",
      items: [
        "localSourcing.items.0",
        "localSourcing.items.1",
        "localSourcing.items.2",
      ],
    },
    {
      key: "communityImpact",
      items: [
        "communityImpact.items.0",
        "communityImpact.items.1",
        "communityImpact.items.2",
      ],
    },
    {
      key: "responsibleProduction",
      items: [
        "responsibleProduction.items.0",
        "responsibleProduction.items.1",
        "responsibleProduction.items.2",
      ],
    },
  ];

  const stats = [
    { value: t("stats.skus.value"), label: t("stats.skus.label"), dark: true },
    {
      value: t("stats.biscuits.value"),
      label: t("stats.biscuits.label"),
      dark: true,
    },
    {
      value: t("stats.flour.value"),
      label: t("stats.flour.label"),
      dark: true,
    },
    { value: t("stats.quickFact"), label: "", dark: true },
    { value: t("stats.jobs.value"), label: t("stats.jobs.label"), dark: true },
    {
      value: t("stats.factory.value"),
      label: t("stats.factory.label"),
      dark: false,
    },
    {
      value: t("stats.investment.value"),
      label: t("stats.investment.label"),
      dark: false,
    },
    {
      value: t("stats.export.value"),
      label: t("stats.export.label"),
      dark: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        {/* Commitment text — Figma node 274:5239 */}
        <div className="mb-12" style={{ maxWidth: 1386 }}>
          {/* "Our Commitment" — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "61.44px",
              letterSpacing: "-1.28px",
              color: "#23B349",
              maxWidth: 498,
            }}
          >
            {t("commitment.title")}
          </h2>

          {/* Large body text — Funnel Display Regular 32px, lh 40px, ls -0.128px, #545854 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 3vw, 32px)",
              lineHeight: "40px",
              letterSpacing: "-0.128px",
              color: "#545854",
            }}
          >
            {t("commitment.description")}
          </p>
        </div>

        {/* 3 Commitment Cards — Figma node 274:5242, each card 544 x 558.7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {commitments.map((c, i) => (
            <div
              key={c.key}
              className="rounded-[24px] p-8 md:p-10"
              style={{
                background: "#F5F5F5",
                minHeight: 400,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.8s ease-out ${i * 0.1}s`,
              }}
            >
              {/* Card title — Funnel Display Bold 32px, lh 32px, ls -0.32px */}
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: 32,
                  lineHeight: "32px",
                  letterSpacing: "-0.32px",
                  color:
                    c.key === "responsibleProduction" ? "#23B349" : "#197F34",
                }}
              >
                {t(`commitment.${c.key}.title`)}
              </h3>

              {/* Items — Outfit Regular 24px, lh 24-30px, #333733 */}
              <ul className="space-y-4">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                      style={{ background: "#23B349" }}
                    />
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: "25.2px",
                        letterSpacing: "-0.08px",
                        color: "#333733",
                      }}
                    >
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Fact Stats — Figma node 274:5315 */}
        <div
          className="rounded-[32px] p-8 md:p-12"
          style={{
            background: "#F5F5F5",
          }}
        >
          {/* "Quick Fact" label — Outfit ExtraBold 66.67px, lh 60px, ls -1.33px, #404040 */}
          <span
            className="block mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 66px)",
              lineHeight: "60px",
              letterSpacing: "-1.33px",
              color: "#404040",
            }}
          >
            {t("stats.quickFact")}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className={stat.label ? "" : "hidden"}>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize:
                      stat.value.length > 6
                        ? "clamp(60px, 10vw, 160px)"
                        : "clamp(40px, 6vw, 80px)",
                    lineHeight: "0.9",
                    letterSpacing: stat.value.length > 6 ? "-4.8px" : "-2.4px",
                    color: stat.dark ? "#000000" : "#0F4B1F",
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <p
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "20px",
                    letterSpacing: "-0.08px",
                    color: "#404040",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
