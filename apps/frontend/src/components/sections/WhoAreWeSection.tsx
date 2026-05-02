"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

const CARD_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="5" fill="white" />
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function WhoAreWeSection() {
  const t = useTranslations("About");
  const tMv = useTranslations("About.mv");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const cards = [
    { key: "mission", label: tMv("mission.label"), desc: tMv("mission.desc") },
    { key: "vision",  label: tMv("vision.label"),  desc: tMv("vision.desc")  },
    { key: "purpose", label: tMv("purpose.label"), desc: tMv("purpose.desc") },
    { key: "values",  label: tMv("values.label"),  desc: tMv("values.desc")  },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0d3b1f" }}
    >
      {/* Blurred green glow — same pattern as hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-full w-[140%]"
          style={{ transform: "translateX(-50%)", opacity: 0.65, filter: "blur(80px)" }}
        >
          <div className="relative w-full h-full">
            <Image src={ABOUT_ASSETS.hero.backgroundFrame} alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0" style={{ background: "rgba(35, 179, 73, 0.12)" }} />
      </div>

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[128px]"
        style={{ maxWidth: 1664, paddingTop: 100, paddingBottom: 100 }}
      >
        {/* ── "Who — Are We" typography ── */}
        {/* Figma 2080:3549 — layout_M5VWYB */}
        <div
          className="flex items-center justify-center flex-wrap"
          style={{ gap: "0 24px", marginBottom: 32 }}
        >
          {/* "Who" — Funnel Display 700, 140px, 1.25em lh, -2% ls, #E6E6E6 */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 10vw, 140px)",
              lineHeight: "1.1em",
              letterSpacing: "-2.8px",
              color: "#E6E6E6",
            }}
          >
            Who
          </span>

          {/* Separator — Figma: 123.81×2, stroke #E6E6E6 */}
          <div style={{ width: 124, height: 2, background: "#E6E6E6", flexShrink: 0 }} />

          {/* "Are We" — Funnel Display 800, 150px, 0.9em lh, -2% ls, #FFFFFF */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(64px, 11vw, 150px)",
              lineHeight: "0.9em",
              letterSpacing: "-3px",
              color: "#FFFFFF",
            }}
          >
            Are We
          </span>
        </div>

        {/* Description — Outfit 400, 32px, 1.26em lh, CENTER, #E8E8E8, maxWidth 1291 */}
        <p
          className="mx-auto"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px, 2.2vw, 32px)",
            lineHeight: "1.26em",
            letterSpacing: "-0.128px",
            color: "#E8E8E8",
            maxWidth: 1291,
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.15s",
            marginBottom: 64,
          }}
        >
          {t("whoWeAre.description")}
        </p>

        {/* ── Card Grid — Figma 2080:3630, x=128, y=3464, 1664×820.83 ── */}
        <div
          className="flex flex-col lg:flex-row gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s",
          }}
        >
          {/* ── Left large card — Figma 2080:3620: 820.83×816.36, radius 24px ── */}
          <div
            className="relative rounded-[24px] overflow-hidden flex-shrink-0"
            style={{
              background: "#FFFFFF",
              border: "1.49px solid rgba(255,255,255,0.3)",
              width: "100%",
              maxWidth: 821,
              minHeight: 500,
              boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
            }}
          >
            {/* Text block — layout_DJE6HB: top-left, maxWidth 403 */}
            <div className="absolute top-0 left-0 z-10" style={{ padding: 48, maxWidth: 420 }}>
              {/* Icon — green circle */}
              <div
                className="flex items-center justify-center rounded-full mb-5 flex-shrink-0"
                style={{ width: 48, height: 48, background: "#23B349" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white" />
                </svg>
              </div>

              {/* "A New Generation of Food" — Funnel Display 700, 28px, #23B349 */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: 28,
                  lineHeight: "1.1em",
                  letterSpacing: "-0.112px",
                  color: "#23B349",
                }}
              >
                {tMv("newGen.title")}
              </h3>

              {/* Description — Outfit 400, 20px, 1.26em, #8A8C8A */}
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
                {tMv("newGen.desc")}
              </p>
            </div>

            {/* Image — layout_5S88MA: bottom-right, 69% w, 66% h, radius 16px 0 24px 0 */}
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

          {/* ── Right 2×2 grid — Figma: 399.24×399.24 each, gap ~22px ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {cards.map((card, i) => (
              <div
                key={card.key}
                className="rounded-[24px] flex flex-col"
                style={{
                  background: "#F5F5F5",
                  minHeight: 300,
                  padding: "36px 36px",
                  gap: 16,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.8s ease-out ${0.1 * (i + 2)}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 48, height: 48, background: "#23B349" }}
                >
                  {CARD_ICON}
                </div>

                {/* Label — Funnel Display 700, 28px, #23B349 */}
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
                  {card.label}
                </h4>

                {/* Description — Outfit 400, 20px, #8A8C8A */}
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
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
