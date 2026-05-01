"use client";

import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";

const LOGOS = [
  { name: "Belayab Groups", src: "/assets/sister/belayab.png" },
  { name: "Motors", src: "/assets/sister/motors.png" },
  { name: "Cables", src: "/assets/sister/cables.png" },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.png" },
  { name: "Lewis", src: "/assets/sister/lewis.png" },
  { name: "Foods", src: "/assets/sister/foods.png" },
  { name: "Limestone", src: "/assets/sister/limestone.png" },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };
    check();
    el.addEventListener("scroll", check, { passive: true });
    return () => el.removeEventListener("scroll", check);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 64, paddingBottom: 64 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        {/* Header — Figma node 2066:3482 */}
        <div className="mb-8">
          {/* "Sister Companies" — Funnel Display Medium 13.3px, #404040 */}
          <span
            className="block mb-1"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "16.6px",
              letterSpacing: "-0.053px",
              color: "#404040",
              textTransform: "uppercase",
            }}
          >
            {t("sisterCompanies.label")}
          </span>
          {/* "Different Experiences" — Outfit ExtraBold 53px, lh 47.9px, ls -1.06px, #23B349 */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 53px)",
              lineHeight: 0.9,
              letterSpacing: "-1.06px",
              color: "#23B349",
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
                <span className="font-['Outfit'] font-semibold text-[#404040] text-lg">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description + CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-6">
          {/* Description — Funnel Display Medium 13.3px, #404040 */}
          <p
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "16.6px",
              letterSpacing: "-0.053px",
              color: "#404040",
              maxWidth: 365,
            }}
          >
            {t("sisterCompanies.description")}
          </p>

          {/* "See more" Button */}
          <div className="flex items-center gap-4">
            <button
              className="rounded-full flex items-center gap-2"
              style={{
                padding: "10px 24px",
                background: "#23B349",
                boxShadow: "0 4px 12px rgba(0,72,21,0.5)",
              }}
            >
              <span
                className="font-['Funnel_Display'] font-medium text-white"
                style={{
                  fontSize: 16,
                  lineHeight: "20px",
                  letterSpacing: "-0.064px",
                }}
              >
                {t("sisterCompanies.cta")}
              </span>
              <span className="text-white" style={{ fontSize: 14 }}>
                →
              </span>
            </button>
            <button
              className="rounded-full flex items-center gap-2"
              style={{
                padding: "10px 24px",
                background: "#000000",
              }}
            >
              <span
                className="font-['Funnel_Display'] font-medium text-white"
                style={{
                  fontSize: 16,
                  lineHeight: "20px",
                  letterSpacing: "-0.064px",
                }}
              >
                Why Vita®
              </span>
              <span className="text-white" style={{ fontSize: 14 }}>
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
