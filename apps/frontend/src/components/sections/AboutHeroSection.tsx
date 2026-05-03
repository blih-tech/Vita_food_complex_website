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
      {/* Blurred green background frame with parallax — Figma Frame 166: blur(14.9px) */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[-29px] h-[1052px] w-[2018px]"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.15}px)`,
            filter: "blur(14.9px)",
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute h-[-193.75%] left-[99.32%] max-w-none top-[154.74%] w-[-108.26%]"
                style={{
                  transform: "translate(-50%, -50%)"
                }}
              >
                <Image
                  src={ABOUT_ASSETS.hero.backgroundFrame}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* mix-blend-soft-light equivalent */}
            <div
              className="absolute inset-0"
              style={{ 
                background: "rgba(55, 255, 0, 0.4)",
                mixBlendMode: "soft-light"
              }}
            />
          </div>
        </div>
      </div>

      {/* Ellipse 45 — white transition at bottom, Figma y=942, 2260×341 */}
      <div 
        className="absolute left-1/2 top-[913px] h-[341px] w-[2260px] z-10"
        style={{
          transform: "translateX(-50%)"
        }}
      >
        <Image
          src={ABOUT_ASSETS.hero.ellipse}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content — Figma layout_EA1A11: x=548, y=252, gap:32px */}
      <div
        className="relative z-20 mx-auto px-4 sm:px-6 lg:px-[128px] pb-32"
        style={{ maxWidth: 1664 }}
      >
        {/* Story Heading — Figma node 277:8185: exact positioning and typography */}
        <div className="flex flex-col items-center justify-center text-center gap-8 pt-[120px] md:pt-[160px] lg:pt-[172px]">
          {/* Headline — Font/Secondary ExtraBold, 80px, 0.9 lh, -1.6px ls, white */}
          <h1
            className="w-full font-extrabold leading-[0.9] tracking-[-1.6px] text-white"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 800,
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle — Font/Primary Medium, 24px, normal lh, -0.096px ls, #e8e8e8 */}
          <p
            className="w-full whitespace-pre-wrap"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 24px)",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: "-0.096px",
              color: "#e8e8e8",
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Made in Ethiopia Badge — Figma node 2080:3631: opacity-10 overlay */}
        <div className="relative mx-auto mt-16" style={{ maxWidth: 940 }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src={ABOUT_ASSETS.content.madeInEthiopia}
              alt="Made in Ethiopia"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Story Image — Figma node 277:8195: rounded-16px with white frame */}
          <div
            className="relative overflow-hidden rounded-[16px]"
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 12px 64px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[16px]"
              style={{ paddingBottom: "71.11%" /* 586/824 ratio */ }}
            >
              <div className="absolute inset-0 rounded-[16px] bg-white" />
              <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                <div
                  className="absolute h-[189.15%] left-0 top-[-0.04%] w-full"
                  style={{ transform: "translateY(0)" }}
                >
                  <Image
                    src={ABOUT_ASSETS.hero.storyImage}
                    alt="Vita Story"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "top center" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
