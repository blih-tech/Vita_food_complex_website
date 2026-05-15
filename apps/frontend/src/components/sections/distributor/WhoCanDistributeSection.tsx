"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface WhoCanPartnerContent {
  sectionTitle?: string;
  title?: string;
  description?: string;
  image?: string;
  items?: string[];
}

export default function WhoCanDistributeSection({ content }: { content?: WhoCanPartnerContent }) {
  const t = useTranslations("Distributor");
  const fallbackCriteria = [
    t("whoCanPartner.items.0"),
    t("whoCanPartner.items.1"),
    t("whoCanPartner.items.2"),
    t("whoCanPartner.items.3"),
    t("whoCanPartner.items.4"),
  ];
  const criteria = content?.items?.length ? content.items : fallbackCriteria;

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto flex flex-col gap-10 max-w-[1920px] px-4 sm:px-6 lg:px-[128px]">
        {/* Section heading */}
        <h2
          className="w-full uppercase"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(48px, 6vw, 80px)",
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            color: "#23B349",
          }}
        >
          {content?.sectionTitle || t("whoCanPartner.sectionTitle")}
        </h2>

        {/* Content row */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-8 w-full">
          {/* Van image */}
          <div className="relative rounded-[24px] sm:rounded-[48px] overflow-hidden w-full xl:w-[55%] max-w-[964px] h-[300px] sm:h-[450px] xl:h-[548px] bg-[#E8E8E8]">
            <Image
              src={content?.image || "/assets/distributor/delivery-van.png"}
              alt="Vita delivery van"
              fill
              className="object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col items-start justify-center gap-8 lg:gap-16 w-full xl:w-[42%] max-w-[651px]">
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
                {content?.title || t("whoCanPartner.title")}
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
                {content?.description || t("whoCanPartner.description")}
              </p>
            </div>

            {/* Numbered criteria list */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              {criteria.map((item, idx) => (
                <div key={idx} className="flex flex-row items-start gap-[19px]">
                  {/* Number */}
                  <span
                    className="shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-funnel-display), 'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(24px, 2.5vw, 32px)",
                      lineHeight: "1",
                      letterSpacing: "-0.01em",
                      color: "#E6B720",
                      width: "47px",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Criteria text */}
                  <span
                    style={{
                      fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(18px, 2vw, 32px)",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
