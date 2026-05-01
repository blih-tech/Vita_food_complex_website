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
        {/* Story Heading — Figma node 277:8185 — layout_53ZLGZ: column, gap:32px, CENTER */}
        <div
          className="flex flex-col items-center text-center pt-[120px] md:pt-[160px] lg:pt-[200px]"
          style={{ gap: 32 }}
        >
          {/* Headline — Headline (179:449): Outfit 800, 80px, 0.9em lh, -2% ls, CENTER, #FFFFFF */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-1.6px",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle — style_56XI9S: Funnel Display 500, 24px, 1.25em lh, -0.4% ls, CENTER, #E8E8E8 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: "1.25em",
              letterSpacing: "-0.096px",
              color: "#E8E8E8",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
