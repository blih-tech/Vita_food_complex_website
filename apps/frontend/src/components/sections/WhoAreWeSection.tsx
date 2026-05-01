"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function WhoAreWeSection() {
  const t = useTranslations("About");
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#232323", paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Blurred green bg — Figma node 2080:3549 fill_W0K03X */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-full w-[120%]"
          style={{
            transform: "translateX(-50%)",
            opacity: 0.4,
            filter: "blur(80px)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={ABOUT_ASSETS.hero.backgroundFrame}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Additional green overlay for richer color */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(35, 179, 73, 0.15)" }}
        />
      </div>

      <div className="relative z-10 mx-auto" style={{ maxWidth: 1664 }}>
        {/* Large Typography — layout_FI4QPU: row, center — Figma nodes 2080:3549 */}
        <div
          className="flex items-center justify-center flex-wrap mb-10"
          style={{ maxWidth: 1357, margin: "0 auto 40px" }}
        >
          {/* "Who " — style_OS4ZZ2: Funnel Display 700, 140px, 1.25em lh, -2% ls, #E6E6E6 */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(80px, 12vw, 140px)",
              lineHeight: "1.25em",
              letterSpacing: "-2.8px",
              color: "#E6E6E6",
            }}
          >
            Who
          </span>

          {/* Separator line — Figma: 123.81×0, stroke #E6E6E6 */}
          <div
            className="mx-6"
            style={{ width: 124, height: 2, background: "#E6E6E6" }}
          />

          {/* "Are We" — style_5844IJ: Funnel Display 800, 150px, 0.9em lh, -2% ls, #FFFFFF */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(80px, 12vw, 150px)",
              lineHeight: "0.9em",
              letterSpacing: "-3px",
              color: "#FFFFFF",
            }}
          >
            Are We
          </span>
        </div>

        {/* Body Text — Figma: Outfit 400, 32px, 1.26em lh, -0.4% ls, CENTER, #E8E8E8, maxWidth 1291 */}
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
            transition: "all 0.8s ease-out 0.2s",
          }}
        >
          {t("whoWeAre.description")}
        </p>
      </div>
    </section>
  );
}
