"use client";

import { useTranslations } from "next-intl";

export default function SustainabilityHeroSection({
  content,
  locale,
}: {
  content?: any;
  locale?: string;
}) {
  const t = useTranslations("Sustainability");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const headline = c?.headline || t("hero.headline");
  const subtitle = c?.subtitle || t("hero.subtitle");
  const heroImage = c?.heroImage || "/assets/images/sustainability/hero-bg.jpg";

  return (
    <section
      data-vita-sustainability-hero
      className="relative w-full overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[815px]"
    >
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center px-4 text-center text-white sm:px-6 md:px-8"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "961px",
          width: "100%",
          gap: "clamp(12px, 2vw, 16px)",
        }}
      >
        <h1
          className="font-[family-name:var(--font-outfit)] font-extrabold text-white"
          style={{
            fontSize: "clamp(32px, 7vw, 80px)",
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
          }}
        >
          {headline}
        </h1>

        <p
          className="max-w-[662px] font-[family-name:var(--font-funnel-display)] font-medium text-white"
          style={{
            fontSize: "clamp(16px, 2.2vw, 24px)",
            lineHeight: "1.2",
            letterSpacing: "-0.004em",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
