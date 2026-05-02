"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutHeroSection() {
  const t = useTranslations("About");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0d3b1f" }}>
      {/* Blurred green background frame with parallax — Figma Frame 166: blur(29.8px) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[-10%] h-[120%] w-[120%]"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.15}px)`,
            filter: "blur(30px)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={ABOUT_ASSETS.hero.backgroundFrame}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* fill_9LFXW6: rgba(55, 255, 0, 0.4) */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(55, 255, 0, 0.4)" }}
        />
      </div>

      {/* Ellipse 45 — white transition at bottom, Figma y=942, 2260×341 */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image
          src={ABOUT_ASSETS.hero.ellipse}
          alt=""
          className="w-full h-auto"
          width={2260}
          height={341}
          priority
        />
      </div>

      {/* Content — Figma layout_EA1A11: x=548, y=252, gap:32px */}
      <div
        className="relative z-20 mx-auto px-4 sm:px-6 lg:px-[128px] pb-32"
        style={{ maxWidth: 1664 }}
      >
        {/* Headline + subtitle — centered column, gap 32px */}
        <div
          className="flex flex-col items-center text-center pt-[120px] md:pt-[160px] lg:pt-[172px]"
          style={{ gap: 32 }}
        >
          {/* Headline — Outfit 800, 80px, 0.9em lh, -2% ls, #FFFFFF */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-1.6px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle — Funnel Display 500, 24px, 1.25em lh, #E8E8E8 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2.5vw, 24px)",
              lineHeight: "1.25em",
              letterSpacing: "-0.096px",
              color: "#E8E8E8",
              textAlign: "center",
              maxWidth: 824,
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Story Image — Figma node 277:8195: 824×586, fill_TW1E4Y: IMAGE + #FFFFFF */}
        {/* White fill in Figma renders as a thick white frame/mat around the portrait */}
        <div className="mx-auto mt-16" style={{ maxWidth: 940 }}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 32,
              padding: 24, // Thicker white border
              boxShadow: "0 12px 64px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: 20, paddingBottom: "71.11%" /* 586/824 ratio */ }}
            >
              <Image
                src={ABOUT_ASSETS.hero.storyImage}
                alt="Vita Story"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
