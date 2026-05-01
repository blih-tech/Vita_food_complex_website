"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CareersHeroSection() {
  const t = useTranslations("Careers");

  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 152, paddingBottom: 80 }}
    >
      {/* Decorative rectangles — Figma nodes 2546:10637, 2546:10638 */}
      <div
        className="absolute top-[152px] right-0 w-[600px] h-[425px] opacity-10 rounded-l-[32px]"
        style={{ background: "#23B349" }}
      />
      <div
        className="absolute top-[200px] right-[300px] w-[550px] h-[425px] opacity-5 rounded-l-[32px]"
        style={{ background: "#23B349" }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: 947 }}>
        {/* "Build Your Future with Vita" — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #23B349 */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(48px, 6vw, 80px)",
            lineHeight: "72px",
            letterSpacing: "-1.6px",
            color: "#23B349",
          }}
        >
          {t("hero.headline")}
        </h1>

        {/* Subtitle — Outfit Medium 24px, lh 24px, ls -0.096px, #333733 */}
        <p
          className="mb-10"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: "24px",
            letterSpacing: "-0.096px",
            color: "#333733",
            maxWidth: 898,
          }}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTA Button — Funnel Display Medium 24px, white on green pill */}
        <Link
          href="#open-positions"
          className="inline-flex items-center gap-3 rounded-full px-8 py-4"
          style={{
            background: "#23B349",
            boxShadow: "0 4px 12px rgba(0,72,21,0.5)",
          }}
        >
          <span
            className="font-['Funnel_Display'] font-medium text-white"
            style={{
              fontSize: 24,
              lineHeight: "30px",
              letterSpacing: "-0.096px",
            }}
          >
            {t("hero.cta")}
          </span>
          <span className="text-white" style={{ fontSize: 20 }}>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
