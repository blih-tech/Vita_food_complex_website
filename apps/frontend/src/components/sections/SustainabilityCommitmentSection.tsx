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
      style={{ background: "#FFFFFF" }}
    >
      <div style={{ paddingLeft: "128px", paddingRight: "128px", paddingTop: "80px", paddingBottom: "80px" }}>
        {/* Commitment text — Figma node 274:5239 */}
        <div style={{ maxWidth: 1386, marginBottom: "80px" }}>
          {/* "Our Commitment" — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "0.96",
              letterSpacing: "-1.28px",
              color: "#23B349",
              maxWidth: 498,
              marginBottom: "48px"
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

        {/* Quick Fact Stats — Figma node 274:5315 - Exact positioning layout */}
        <div
          style={{
            position: "relative",
            height: "815px",
            width: "100%",
            background: "#F5F5F5",
            borderRadius: "32px",
            overflow: "hidden"
          }}
        >
          {/* +11 SKUs - positioned at left: 106.67px, top: 104.8px */}
          <div
            style={{
              position: "absolute",
              left: "106.67px",
              top: "104.8px",
              width: "381.667px",
              height: "281.667px",
              border: "2.5px solid #FFFFFF",
              borderRadius: "20px",
              background: "rgba(171,255,152,0.5)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "47.39px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "160px",
              lineHeight: "0.88",
              letterSpacing: "-4.8px",
              color: "#000000",
              textAlign: "center"
            }}>
              +11
            </div>
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "209.05px",
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "-0.08px",
              color: "#404040",
              textAlign: "center"
            }}>
              Product SKUs
            </div>
          </div>

          {/* 60tn Flour - positioned at left: 403.33px, top: 104.8px */}
          <div
            style={{
              position: "absolute",
              left: "403.33px",
              top: "104.8px",
              width: "480px",
              height: "281.667px",
              border: "2.5px solid #FFFFFF",
              borderRadius: "20px",
              background: "rgba(171,255,152,0.5)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "47.39px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "160px",
              lineHeight: "0.88",
              letterSpacing: "-4.8px",
              color: "#000000",
              textAlign: "center"
            }}>
              60tn
            </div>
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "209.05px",
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "-0.08px",
              color: "#404040",
              textAlign: "center"
            }}>
              Tones of Flour Production/Day
            </div>
          </div>

          {/* Quick Fact label - positioned at left: 403.33px, top: 406.46px */}
          <div
            style={{
              position: "absolute",
              left: "403.33px",
              top: "406.46px",
              width: "381.667px",
              height: "128.333px",
              border: "2.5px solid #FFFFFF",
              borderRadius: "20px",
              background: "rgba(171,255,152,0.5)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "66.667px",
              lineHeight: "0.9",
              letterSpacing: "-1.3333px",
              color: "#404040",
              textAlign: "center"
            }}>
              Quick Fact
            </div>
          </div>

          {/* +200 Jobs - positioned at left: 1013.33px, top: 104.8px */}
          <div
            style={{
              position: "absolute",
              left: "1013.33px",
              top: "104.8px",
              width: "480px",
              height: "281.667px",
              border: "2.5px solid #FFFFFF",
              borderRadius: "20px",
              background: "rgba(171,255,152,0.5)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "47.5px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "160px",
              lineHeight: "0.88",
              letterSpacing: "-4.8px",
              color: "#000000",
              textAlign: "center"
            }}>
              +200
            </div>
            <div style={{
              position: "absolute",
              left: "-2.5px",
              right: "-2.5px",
              top: "209.17px",
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "-0.08px",
              color: "#404040",
              textAlign: "center"
            }}>
              Jobs Created
            </div>
          </div>

          {/* 22Km² Factory - positioned at left: 106.67px, top: 553.13px */}
          <div
            style={{
              position: "absolute",
              left: "106.67px",
              top: "553.13px",
              width: "610.833px",
              height: "285.833px",
              border: "2.5px solid #FFFFFF",
              borderRadius: "20px",
              background: "rgba(171,255,152,0.5)",
              backdropFilter: "blur(10px)"
            }}
          >
            <div style={{
              position: "absolute",
              bottom: "237.5px",
              left: "-2.5px",
              right: "-2.5px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "160px",
              lineHeight: "0.88",
              letterSpacing: "-4.8px",
              color: "#FFFFFF",
              textAlign: "center",
              transform: "translateY(100%)"
            }}>
              <span style={{ fontSize: "160px" }}>22Km</span>
              <span style={{ fontSize: "96.21px", verticalAlign: "top" }}>2</span>
            </div>
            <div style={{
              position: "absolute",
              bottom: "75.83px",
              left: "-2.5px",
              right: "-2.5px",
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "-0.08px",
              color: "#FFFFFF",
              textAlign: "center",
              transform: "translateY(100%)"
            }}>
              Factory Size in Square Killometer
            </div>
          </div>

          {/* Investment stats - positioned at left: 737.5px, top: 404.17px */}
          <div
            style={{
              position: "absolute",
              left: "737.5px",
              top: "404.17px",
              width: "755.833px",
              height: "435px",
            }}
          >
            <div style={{
              position: "absolute",
              bottom: "0.2px",
              width: "755.833px",
              height: "435px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #23B349 0%, #0F4B1F 100%)"
            }}>
              <div style={{
                position: "absolute",
                bottom: "239.58px",
                left: 0,
                right: 0,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "160px",
                lineHeight: "0.88",
                letterSpacing: "-4.8px",
                color: "#FFFFFF",
                textAlign: "center",
                transform: "translateY(100%)"
              }}>
                Br210M
              </div>
              <div style={{
                position: "absolute",
                bottom: "77.92px",
                left: 0,
                right: 0,
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "20px",
                letterSpacing: "-0.08px",
                color: "#FFFFFF",
                textAlign: "center",
                transform: "translateY(100%)"
              }}>
                Total Investment
              </div>
              <div style={{
                position: "absolute",
                bottom: "390.42px",
                left: "109.64px",
                right: 0,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "80px",
                lineHeight: "0.88",
                letterSpacing: "-2.4px",
                color: "#404040",
                transform: "translateY(100%)"
              }}>
                $1.4M
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
