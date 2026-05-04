"use client";

import { useTranslations } from "next-intl";

import { 
  GraduationCap, 
  Users, 
  Monitor, 
  Globe, 
  Lightbulb, 
  Clock 
} from "lucide-react";

const BENEFITS = [
  { key: "growth", label: "Growth & Learning Opportunities", icon: GraduationCap },
  { key: "culture", label: "Supportive Team Culture", icon: Users },
  { key: "environment", label: "Modern Work Environment", icon: Monitor },
  { key: "impact", label: "Real Community Impact", icon: Globe },
  { key: "innovation", label: "Innovation-Driven Company", icon: Lightbulb },
  { key: "balance", label: "Work-Life Balance", icon: Clock },
];

export default function WhyJoinSection() {
  const t = useTranslations("Careers");

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}
    >
      {/* Two-column layout: heading left (520px), buttons right (730px), gap ~180px */}
      <div
        className="mx-auto flex flex-col lg:flex-row lg:items-start"
        style={{ maxWidth: 1664, gap: "clamp(40px, 10vw, 180px)" }}
      >
        {/* Left — "Why Join Vita Food Complex": Headline (179:449) Outfit 800, 80px, 0.9em lh, -2% ls, #23B349 */}
        <div className="w-full lg:w-[520px] lg:shrink-0">
          <h2
            className="font-[family-name:var(--font-outfit)] font-extrabold text-[#23B349]"
            style={{
              fontSize: "clamp(36px, 5.5vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-0.02em",
            }}
          >
            {t("whyJoin.title")}
          </h2>
        </div>

        {/* Right — layout_UAYX5G: column, gap:14.67px */}
        {/* Each Button — layout_QOB0YA: row, center, gap:35.55px, padding-left:35.55px, w:730px, h:105.17px, radius:23.7px */}
        <div
          className="flex w-full flex-col"
          style={{ gap: 14.67, maxWidth: 730 }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.key}
              className="flex flex-row items-center transition-all hover:translate-x-2 group"
              style={{
                gap: "clamp(16px, 3vw, 35.55px)",
                paddingLeft: "clamp(16px, 3vw, 35.55px)",
                minHeight: "clamp(80px, 10vw, 105px)",
                borderRadius: 23.7,
                background: "#F5F5F5",
              }}
            >
              {/* Icon Container — layout_ENUIGI: 47.4×47.4px */}
              <div 
                className="shrink-0 flex items-center justify-center bg-[#23B349] rounded-full text-white transition-transform group-hover:scale-110" 
                style={{ width: "clamp(32px, 4vw, 47.4px)", height: "clamp(32px, 4vw, 47.4px)" }}
              >
                <b.icon className="w-[60%] h-[60%]" strokeWidth={2.5} />
              </div>

              {/* Text — style_768L80: Outfit 400, 36.87px, 1.567em lh (~57.77px), #333733 */}
              <span
                className="font-[family-name:var(--font-outfit)] font-normal text-[#333733]"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 36.87px)",
                  lineHeight: "1.2",
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
