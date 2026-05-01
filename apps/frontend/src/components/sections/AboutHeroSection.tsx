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
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#E9F7ED" }}
    >
      {/* Background Frame with parallax — Figma node 2376:9999 */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[-10%] h-[120%] w-[120%]"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.15}px)`,
            opacity: 0.6,
            filter: "blur(10px)",
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
      </div>

      {/* Ellipse — Figma node 2066:3518 */}
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

      {/* Content */}
      <div
        className="relative z-20 mx-auto px-4 sm:px-6 lg:px-[128px]"
        style={{ maxWidth: 1664 }}
      >
        {/* Story Heading — Figma node 277:8185 */}
        <div
          className="pt-[120px] md:pt-[160px] lg:pt-[200px]"
          style={{ maxWidth: 824 }}
        >
          {/* Headline: Outfit ExtraBold 80px, line-height 72px, letter-spacing -1.6px, #FFFFFF */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: "72px",
              letterSpacing: "-1.6px",
              color: "#FFFFFF",
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle: Funnel Display Medium 24px, line-height 30px, letter-spacing -0.096px, #E8E8E8 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: "30px",
              letterSpacing: "-0.096px",
              color: "#E8E8E8",
              maxWidth: 824,
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
