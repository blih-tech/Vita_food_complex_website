"use client";

import { useTranslations } from "next-intl";

const BENEFITS = [
  { key: "growth", icon: "📈" },
  { key: "culture", icon: "🤝" },
  { key: "environment", icon: "🏢" },
  { key: "impact", icon: "🌍" },
  { key: "innovation", icon: "💡" },
  { key: "balance", icon: "⚖️" },
];

export default function WhyJoinSection() {
  const t = useTranslations("Careers");

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row gap-12"
        style={{ maxWidth: 1664 }}
      >
        {/* Left: Heading — Outfit ExtraBold 80px, lh 72px, ls -1.6px, #23B349 */}
        <div className="lg:w-[520px] flex-shrink-0">
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "72px",
              letterSpacing: "-1.6px",
              color: "#23B349",
            }}
          >
            {t("whyJoin.title")}
          </h2>
        </div>

        {/* Right: 6 benefit buttons — Figma node 2546:10651 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map((b, i) => (
            <div
              key={b.key}
              className="flex items-center gap-4 rounded-[24px] p-6"
              style={{
                background: "#F5F5F5",
              }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: 48, height: 48, background: "#23B349" }}
              >
                <span className="text-white text-xl">{b.icon}</span>
              </div>

              {/* Text — Outfit Regular ~37px, lh 57.77px, #333733 */}
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2.5vw, 37px)",
                  lineHeight: "57.77px",
                  letterSpacing: "0px",
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
