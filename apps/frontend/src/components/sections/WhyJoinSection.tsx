"use client";

import { useTranslations } from "next-intl";

const BENEFITS = [
  { key: "growth", label: "Growth & Learning Opportunities" },
  { key: "culture", label: "Supportive Team Culture" },
  { key: "environment", label: "Modern Work Environment" },
  { key: "impact", label: "Real Community Impact" },
  { key: "innovation", label: "Innovation-Driven Company" },
  { key: "balance", label: "Work-Life Balance" },
];

/* SVG icon used for each benefit button — 47.4×47.4px per Figma node 2546:10662 */
function BenefitIcon() {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="23.5" cy="23.5" r="23.5" fill="#23B349" />
      <path
        d="M14 23.5L20.5 30L33 17"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyJoinSection() {
  const t = useTranslations("Careers");

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      {/* Two-column layout: heading left (520px), buttons right (730px), gap ~180px */}
      <div
        className="mx-auto flex flex-col lg:flex-row"
        style={{ maxWidth: 1664, gap: "clamp(40px, 10vw, 180px)" }}
      >
        {/* Left — "Why Join Vita Food Complex": Headline (179:449) Outfit 800, 80px, 0.9em lh, -2% ls, #23B349 */}
        <div style={{ flex: "0 0 520px", maxWidth: 520 }}>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-1.6px",
              color: "#23B349",
            }}
          >
            {t("whyJoin.title")}
          </h2>
        </div>

        {/* Right — layout_UAYX5G: column, gap:14.67px */}
        {/* Each Button — layout_QOB0YA: row, center, gap:35.55px, padding-left:35.55px, w:730px, h:105.17px, radius:23.7px */}
        <div
          className="flex flex-col"
          style={{ gap: 14.67, flex: "0 0 730px", maxWidth: 730 }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.key}
              className="flex flex-row items-center"
              style={{
                gap: 35.55,
                paddingLeft: 35.55,
                height: 105,
                borderRadius: 23.7,
                background: "#F5F5F5",
              }}
            >
              {/* Icon — layout_ENUIGI: 47.4×47.4px SVG */}
              <div style={{ flexShrink: 0, width: 47.4, height: 47.4 }}>
                <BenefitIcon />
              </div>

              {/* Text — style_768L80: Outfit 400, 36.87px, 1.567em lh (~57.77px), #333733 */}
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2.8vw, 36.87px)",
                  lineHeight: "1.567em",
                  color: "#333733",
                }}
              >
                {t(`whyJoin.benefits.${b.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
