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
      {/* Decorative rectangles — Figma nodes 2546:10637 (x:-16,y:470,w:1167,h:425) and 2546:10638 (x:812,y:470,w:1107,h:425) */}
      {/* fill_YPNAIA: gradient linear-gradient(79deg, transparent 31%, white 95%) over #23B349 */}
      <div
        className="absolute left-0 w-[1167px] h-[425px] rounded-r-[32px] pointer-events-none"
        style={{
          top: "calc(152px + 85px)",
          background:
            "linear-gradient(79deg, rgba(35,179,73,0.15) 0%, rgba(35,179,73,0) 95%)",
        }}
      />
      <div
        className="absolute right-0 w-[1107px] h-[425px] rounded-l-[32px] pointer-events-none"
        style={{
          top: "calc(152px + 85px)",
          background:
            "linear-gradient(259deg, rgba(35,179,73,0.12) 0%, rgba(35,179,73,0) 95%)",
        }}
      />

      {/* Hero content — layout_TEXN57: column, CENTER, gap:48px, width:947px */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 947, gap: 48 }}
      >
        {/* Inner — layout_5LPPOP: column, CENTER, gap:24px */}
        <div className="flex flex-col items-center" style={{ gap: 24 }}>
          {/* "Build Your Future with Vita" — Headline (179:449): Outfit 800, 80px, 0.9em lh, -2% ls, CENTER, #23B349 */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-1.6px",
              color: "#23B349",
              textAlign: "center",
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle — style_74OUNN: Outfit 500, 24px, 1em lh, -0.4% ls, CENTER, #333733, width:898px */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: "1em",
              letterSpacing: "-0.096px",
              color: "#333733",
              maxWidth: 898,
              textAlign: "center",
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        {/* CTA Button — layout_4A5MP9: row, center, gap:16px, padding:16px 32px, height:56px, radius:999px, bg:#23B349 */}
        <Link
          href="#open-positions"
          className="inline-flex items-center justify-center rounded-full"
          style={{
            background: "#23B349",
            gap: 16,
            padding: "16px 32px",
            height: 56,
            boxShadow: "0 4px 12px rgba(0,72,21,0.5)",
          }}
        >
          {/* "View Open Positions" — Button 1: Funnel Display 500, 24px, 1.25em lh, -0.4% ls, white */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 24,
              lineHeight: "1.25em",
              letterSpacing: "-0.096px",
              color: "#FFFFFF",
            }}
          >
            {t("hero.cta")}
          </span>
          {/* "→" — Button 2: Outfit 400, 20px, 1.26em lh, white */}
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "1.26em",
              color: "#FFFFFF",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
