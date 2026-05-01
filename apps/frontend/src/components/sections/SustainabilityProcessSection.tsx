"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function SustainabilityProcessSection() {
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

  /* Figma structure (node 274:5187):
     Each process step is 360px wide, staggered vertically:
     - Farmers: y=0
     - Processing: y=100
     - Distribution: y=200
     - Reuse: y=300
     Each card: heading (64px) + image area (540/500/460/410px) + description
  */

  const steps = [
    {
      key: "farmers",
      heading: t("process.farmers.heading"),
      desc: t("process.farmers.desc"),
      imageHeight: 540,
    },
    {
      key: "processing",
      heading: t("process.processing.heading"),
      desc: t("process.processing.desc"),
      imageHeight: 500,
    },
    {
      key: "distribution",
      heading: t("process.distribution.heading"),
      desc: t("process.distribution.desc"),
      imageHeight: 460,
    },
    {
      key: "reuse",
      heading: t("process.reuse.heading"),
      desc: t("process.reuse.desc"),
      imageHeight: 410,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div style={{ paddingLeft: "128px", paddingRight: "128px" }}>
        {/* Process text — Figma node 2080:3766 */}
        <div className="mb-12" style={{ maxWidth: 871 }}>
          {/* "From farm to table..." — Funnel Display Medium 24px, lh 24px, ls -0.096px, #333733 */}
          <span
            className="block mb-4"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 24,
              lineHeight: "24px",
              letterSpacing: "-0.096px",
              color: "#333733",
            }}
          >
            {t("process.sublabel")}
          </span>

          {/* "Our Sustainable Process" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #23B349 */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "80px",
              lineHeight: "0.9",
              letterSpacing: "-1.6px",
              color: "#23B349",
            }}
          >
            {t("process.title")}
          </h2>
        </div>

        {/* Process Steps — Figma node 274:5191, 4 columns staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.key}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s ease-out ${i * 0.15}s`,
                marginTop: i * 100,
              }}
            >
              {/* Heading — Outfit Bold 64px (Reuse is Funnel Display Bold 40px), lh 61.44px, ls -1.28px, #333733 */}
              <h3
                className="mb-6"
                style={{
                  fontFamily:
                    step.key === "reuse"
                      ? "'Funnel Display', sans-serif"
                      : "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize:
                    step.key === "reuse" ? 40 : "clamp(32px, 4vw, 64px)",
                  lineHeight: step.key === "reuse" ? "50px" : "61.44px",
                  letterSpacing: "-1.28px",
                  color: "#333733",
                }}
              >
                {step.heading}
              </h3>

              {/* Process images from Figma */}
              <div
                className="rounded-[24px] overflow-hidden mb-6"
                style={{
                  height: `${step.imageHeight * 0.6}px`,
                }}
              >
                <img
                  src={`/assets/images/sustainability/process-${step.key}.jpg`}
                  alt={step.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description — Funnel Display Medium 20px, lh 25px, ls -0.08px */}
              <p
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "25px",
                  letterSpacing: "-0.08px",
                  color: i === 1 || i === 3 ? "#545854" : "#404040",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
