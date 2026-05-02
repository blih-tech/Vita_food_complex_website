"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

import { Target, Eye, Heart, Compass, Users } from "lucide-react";

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
    { key: "mission", label: tMv("mission.label"), desc: tMv("mission.desc"), icon: Target },
    { key: "vision",  label: tMv("vision.label"),  desc: tMv("vision.desc"),  icon: Eye },
    { key: "values",  label: tMv("values.label"),  desc: tMv("values.desc"),  icon: Heart },
    { key: "purpose", label: tMv("purpose.label"), desc: tMv("purpose.desc"), icon: Compass },
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
        style={{ maxWidth: 1664, paddingTop: 120, paddingBottom: 120 }}
      >
        {/* ── "Who — Are We" typography ── */}
        <div
          className="flex items-center justify-center flex-wrap"
          style={{ gap: "0 24px", marginBottom: 48 }}
        >
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(48px, 8vw, 140px)",
              lineHeight: "1.1em",
              letterSpacing: "-2.8px",
              color: "#E6E6E6",
            }}
          >
            Who
          </span>

          <div className="hidden md:block" style={{ width: 124, height: 2, background: "#E6E6E6", flexShrink: 0 }} />

          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 9vw, 150px)",
              lineHeight: "0.9em",
              letterSpacing: "-3px",
              color: "#FFFFFF",
            }}
          >
            Are We
          </span>
        </div>

        {/* Description */}
        <p
          className="mx-auto"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.5vw, 32px)",
            lineHeight: "1.26em",
            letterSpacing: "-0.128px",
            color: "#E8E8E8",
            maxWidth: 1291,
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.15s",
            marginBottom: 80,
          }}
        >
          {t("whoWeAre.description")}
        </p>

        {/* ── Card Grid ── */}
        <div
          className="flex flex-col lg:flex-row gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s",
          }}
        >
          {/* ── Left large card ── */}
          <div
            className="relative rounded-[32px] overflow-hidden flex-shrink-0"
            style={{
              background: "#FFFFFF",
              width: "100%",
              maxWidth: 821,
              minHeight: 620,
              boxShadow: "0 12px 48px rgba(0,0,0,0.2)",
            }}
          >
            <div className="relative z-10 p-10 md:p-14" style={{ maxWidth: 500 }}>
              <div
                className="flex items-center justify-center rounded-2xl mb-8"
                style={{ width: 64, height: 64, background: "#23B349" }}
              >
                <Users size={32} color="white" />
              </div>

              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: "1.1em",
                  letterSpacing: "-0.112px",
                  color: "#23B349",
                }}
              >
                {tMv("newGen.title")}
              </h3>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 1.5vw, 24px)",
                  lineHeight: "1.4em",
                  letterSpacing: "-0.08px",
                  color: "#4A4A4A",
                }}
              >
                {tMv("newGen.desc")}
              </p>
            </div>

            <div
              className="absolute bottom-0 right-0 w-[85%] h-[60%] md:w-[75%] md:h-[65%]"
              style={{
                borderRadius: "32px 0px 0px 0px",
                overflow: "hidden",
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

          {/* ── Right 2×2 grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="rounded-[32px] flex flex-col p-10"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    minHeight: 280,
                    gap: 20,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.8s ease-out ${0.1 * (i + 2)}s`,
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-2xl"
                    style={{ width: 56, height: 56, background: "#23B349" }}
                  >
                    <Icon size={28} color="white" />
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(24px, 2vw, 32px)",
                      lineHeight: "1em",
                      letterSpacing: "-0.112px",
                      color: "#FFFFFF",
                    }}
                  >
                    {card.label}
                  </h4>

                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 1.2vw, 18px)",
                      lineHeight: "1.5em",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
