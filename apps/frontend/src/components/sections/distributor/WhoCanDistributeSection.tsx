"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhoCanDistributeSection() {
  const t = useTranslations("Distributor");

  const criteria = [
    t("whoCanPartner.items.0"),
    t("whoCanPartner.items.1"),
    t("whoCanPartner.items.2"),
    t("whoCanPartner.items.3"),
    t("whoCanPartner.items.4"),
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto flex flex-col gap-9 max-w-[1920px] px-4 sm:px-6 lg:px-[128px]">
        {/* Section heading */}
        <h2
          className="max-w-[768px]"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 5.5vw, 80px)",
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            color: "#23B349",
          }}
        >
          {t("whoCanPartner.sectionTitle")}
        </h2>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {/* Van image */}
          <div className="relative rounded-[24px] sm:rounded-[48px] overflow-hidden flex-shrink-0 w-full max-w-[964px] h-[260px] sm:h-[380px] lg:h-[548px]">
            <Image
              src="/assets/distributor/delivery-van.png"
              alt="Vita delivery van"
              fill
              className="object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col items-start gap-8 lg:gap-16 w-full lg:max-w-[651px]">
            {/* Sub-heading + description */}
            <div className="flex flex-col gap-4">
              <h3
                style={{
                  fontFamily:
                    "var(--font-funnel-display), 'Funnel Display', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  lineHeight: "1",
                  letterSpacing: "-0.01em",
                  color: "#23B349",
                }}
              >
                {t("whoCanPartner.title")}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(16px, 1.5vw, 20px)",
                  lineHeight: "25px",
                  letterSpacing: "-0.004em",
                  color: "#000000",
                }}
              >
                {t("whoCanPartner.description")}
              </p>
            </div>

            {/* Numbered criteria list */}
            <div className="flex flex-row gap-5">
              {/* Numbers column */}
              <div className="flex flex-col gap-5 lg:gap-8">
                {criteria.map((_, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily:
                        "var(--font-funnel-display), 'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(24px, 2.5vw, 32px)",
                      lineHeight: "1",
                      letterSpacing: "-0.01em",
                      color: "#E6B720",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>

              {/* Criteria text column */}
              <div className="flex flex-col gap-5 lg:gap-8">
                {criteria.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(16px, 2vw, 32px)",
                      lineHeight: "1",
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
