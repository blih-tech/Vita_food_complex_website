"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

const LOGOS = [
  { name: "Belayab Groups", src: "/assets/sister/belayab.svg" },
  { name: "Motors", src: "/assets/sister/motors.svg" },
  { name: "Cables", src: "/assets/sister/cables.svg" },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.svg" },
  { name: "Lewis", src: "/assets/sister/lewis.svg" },
  { name: "Foods", src: "/assets/sister/foods.svg" },
  { name: "Limestone", src: "/assets/sister/limestone.svg" },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 64, paddingBottom: 64 }}
    >
      {/* layout_GIW9UK: column, alignItems:center, gap:31.92px */}
      <div
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1664, gap: 31.92 }}
      >
        {/* text frame — layout_IDEUKV: column, alignItems:center, gap:31.92px */}
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: 31.92 }}
        >
          {/* "Sister Companies" — style_AJAP13: Funnel Display 500, 13.3px, 1.25em lh, CENTER, #404040 */}
          <span
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 13.3,
              lineHeight: "1.25em",
              letterSpacing: "-0.053px",
              color: "#404040",
              textAlign: "center",
            }}
          >
            {t("sisterCompanies.label")}
          </span>
          {/* title — style_R06MT2: Outfit 800, 53.2px, 0.9em lh, -2% ls, CENTER, #23B349 */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 53.2px)",
              lineHeight: "0.9em",
              letterSpacing: "-1.064px",
              color: "#23B349",
              textAlign: "center",
            }}
          >
            {t("sisterCompanies.title")}
          </h2>
        </div>

        {/* Scrollable Logo Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center rounded-[16px] px-10 py-8"
                style={{
                  minWidth: 240,
                  height: 146,
                  background: "#F5F5F5",
                  scrollSnapAlign: "start",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TEXT with btn — layout_IDEUKV: column, alignItems:center, gap:31.92px */}
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: 31.92 }}
        >
          {/* Description — style_AJAP13: Funnel Display 500, 13.3px, 1.25em lh, CENTER, #404040, max-width 365 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 13.3,
              lineHeight: "1.25em",
              letterSpacing: "-0.053px",
              color: "#404040",
              maxWidth: 365,
              textAlign: "center",
            }}
          >
            {t("sisterCompanies.description")}
          </p>

          {/* "See more" Button — layout_42E7K9: row, alignItems:center, gap:15.96px */}
          <div className="flex items-center" style={{ gap: 15.96 }}>
            {/* layout_BVZOUK: row, center, gap:10.64px, padding:10.64px 21.28px, radius:664px */}
            {/* style_Q17P5T: Funnel Display 500, 15.96px, 1.25em lh, #000 on green bg */}
            <button
              className="rounded-full flex items-center"
              style={{
                gap: 10.64,
                padding: "10.64px 21.28px",
                background: "#23B349",
                borderRadius: 664,
              }}
            >
              <span
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 500,
                  fontSize: 15.96,
                  lineHeight: "1.25em",
                  letterSpacing: "-0.064px",
                  color: "#FFFFFF",
                }}
              >
                {t("sisterCompanies.cta")}
              </span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: 13.3,
                  color: "#FFFFFF",
                }}
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
