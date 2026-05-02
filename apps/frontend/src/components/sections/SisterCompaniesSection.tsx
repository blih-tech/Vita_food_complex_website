"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const LOGOS = [
  { name: "Belayab", src: "/assets/sister/belayab.svg" },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.svg" },
  { name: "Lewis", src: "/assets/sister/lewis.svg" },
  { name: "Foods", src: "/assets/sister/foods.svg" },
  { name: "Motors", src: "/assets/sister/motors.svg" },
  { name: "Cables", src: "/assets/sister/cables.svg" },
  { name: "Limestone", src: "/assets/sister/limestone.svg" },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About");

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 48, paddingBottom: 64 }}
    >
      {/* Figma 2066:3484 — column, center, gap:31.92px */}
      <div className="mx-auto flex flex-col items-center" style={{ maxWidth: 1664, gap: 24 }}>
        {/* Label — Funnel Display 500, 13.3px, #8A8C8A */}
        <span
          style={{
            fontFamily: "'Funnel Display', sans-serif",
            fontWeight: 500,
            fontSize: 13.3,
            lineHeight: "1.25em",
            letterSpacing: "-0.053px",
            color: "#8A8C8A",
            textAlign: "center",
          }}
        >
          {t("sisterCompanies.label")}
        </span>

        {/* Horizontal divider */}
        <div style={{ width: "100%", maxWidth: 1200, height: 1, background: "#E8E8E8" }} />

        {/* Logo row — horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div
            className="flex items-center justify-start md:justify-center"
            style={{ gap: 24, minWidth: "max-content", padding: "8px 0" }}
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex-shrink-0 flex items-center justify-center rounded-[16px]"
                style={{ width: 160, height: 96, background: "#F5F5F5", padding: "12px 20px" }}
              >
                <div className="relative w-full h-full">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See more — Figma layout_BVZOUK: green pill button */}
        <button
          className="flex items-center rounded-full"
          style={{ gap: 10, padding: "10px 24px", background: "#23B349" }}
        >
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "1.25em",
              color: "#FFFFFF",
            }}
          >
            {t("sisterCompanies.cta")}
          </span>
          <span style={{ color: "#FFFFFF", fontSize: 14 }}>→</span>
        </button>
      </div>
    </section>
  );
}
