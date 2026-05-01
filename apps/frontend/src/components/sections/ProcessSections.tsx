"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ProcessData {
  number: string;
  label: string;
  captionLabel: string;
  captionDesc: string;
  heading: string;
  description: string;
  imageSide: "right" | "left";
}

export default function ProcessSections() {
  const t = useTranslations("About.process");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* Figma structure (node 2080:3663):
     3 SectionContainer frames, each 1664 x 571
     Each has:
       - Left: SectionTextContainer (heading + description) + LabelContainer (number + label)
       - Right: ImageContainer (726.44 x 570.07) with Caption overlay
     Image: ~726 x 570, caption: 682 x 123, rounded 16px
     Section number: Funnel Display Regular 225px, lh 281.25px, #716200
     Label: Funnel Display Bold 32px, #000000
     Heading: Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349
     Description: Outfit Regular 20px, lh 25.2px, ls -0.08px, #404040
     Caption heading: Funnel Display Bold 32/36px, #FFFFFF
     Caption body: Funnel Display Medium 20px, lh 25px, #E8E8E8
  */

  const processes: ProcessData[] = [
    {
      number: "01",
      label: "Sourcing",
      captionLabel: "NATURE'S FOUNDATION",
      captionDesc: t("01.captionDesc"),
      heading: t("01.heading"),
      description: t("01.desc"),
      imageSide: "right",
    },
    {
      number: "02",
      label: "Crafting",
      captionLabel: "HANDS BEHIND THE QUALITY",
      captionDesc: t("02.captionDesc"),
      heading: t("02.heading"),
      description: t("02.desc"),
      imageSide: "right",
    },
    {
      number: "03",
      label: "Production",
      captionLabel: "THE ART OF PRECISION",
      captionDesc: t("03.captionDesc"),
      heading: t("03.heading"),
      description: t("03.desc"),
      imageSide: "right",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto flex flex-col gap-12" style={{ maxWidth: 1664 }}>
        {processes.map((p, i) => (
          <div
            key={p.number}
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease-out ${i * 0.15}s`,
            }}
          >
            {/* Left Content — Figma nodes 2080:3665 */}
            <div className="flex-shrink-0" style={{ maxWidth: 686 }}>
              {/* Section Text Container */}
              <div className="mb-8">
                {/* Heading — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 4vw, 64px)",
                    lineHeight: "61.44px",
                    letterSpacing: "-1.28px",
                    color: "#23B349",
                  }}
                >
                  {p.heading}
                </h3>

                {/* Description — Outfit Regular 20px, lh 25.2px, ls -0.08px, #404040 */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "25.2px",
                    letterSpacing: "-0.08px",
                    color: "#404040",
                    maxWidth: 542,
                  }}
                >
                  {p.description}
                </p>
              </div>

              {/* Label Container — number + label */}
              <div className="flex items-end gap-4">
                {/* Section Number — Funnel Display Regular 225px, lh 281.25px, #716200 */}
                <span
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(120px, 18vw, 225px)",
                    lineHeight: "281.25px",
                    letterSpacing: "0px",
                    color: "#716200",
                  }}
                >
                  {p.number}
                </span>

                {/* Label — Funnel Display Bold 32px, lh 32px, ls -0.128px, #000000 */}
                <span
                  className="mb-2"
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: "32px",
                    letterSpacing: "-0.128px",
                    color: "#000000",
                  }}
                >
                  {p.label}
                </span>
              </div>
            </div>

            {/* Right Image — Figma nodes 2080:3672 (726.44 x 570.07) */}
            <div className="flex-1 w-full">
              <div
                className="relative rounded-[24px] overflow-hidden"
                style={{ minHeight: 400 }}
              >
                <div
                  className="relative"
                  style={{ paddingBottom: "78.4%" /* 570/726 */ }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F4B1F]/40 to-[#23B349]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-['Outfit'] text-white text-4xl font-bold opacity-20">
                      {p.label}
                    </span>
                  </div>
                </div>

                {/* Caption Container — Figma nodes 2080:3675 (682 x 123, rounded 16px) */}
                <div
                  className="absolute bottom-6 left-6 right-6 p-6"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    borderRadius: 16,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Caption Label — Funnel Display Bold 32px/36px, #FFFFFF */}
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: p.number === "01" ? 32 : 36,
                      lineHeight: "1",
                      letterSpacing: p.number === "01" ? "-0.32px" : "-0.36px",
                      color: "#FFFFFF",
                    }}
                  >
                    {p.captionLabel}
                  </p>

                  {/* Caption Body — Funnel Display Medium 20px, lh 25px, #E8E8E8 */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 20,
                      lineHeight: "25px",
                      letterSpacing: "-0.08px",
                      color: "#E8E8E8",
                    }}
                  >
                    {p.captionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
