"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const JOBS = [
  {
    id: "production-manager",
    title: "Production Manager",
    location: "Debre Sina",
    type: "Full-time",
    desc: "Oversee daily production operations and ensure quality standards",
  },
  {
    id: "quality-control",
    title: "Quality Control Specialist",
    location: "Debre Sina",
    type: "Full-time",
    desc: "Monitor product quality and maintain compliance with standards",
  },
  {
    id: "marketing-lead",
    title: "Marketing Lead",
    location: "Addis Ababa",
    type: "Full-time",
    desc: "Develop and execute marketing strategies for Vita brand growth",
  },
];

export default function OpenPositionsSection() {
  const t = useTranslations("Careers");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="open-positions"
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(80px, 12vw, 160px)" }}
    >
      {/* layout_MKIYGN: column, stretch, gap:140px, width:1664px */}
      <div className="mx-auto flex flex-col" style={{ maxWidth: 1664, gap: "clamp(60px, 10vw, 140px)" }}>
        {/* "Open Positions" — Display (20:2097): Outfit 700, 64px, 0.96em lh, -2% ls, CENTER, #23B349 */}
        <h2
          className="font-[family-name:var(--font-outfit)] font-bold text-[#23B349] text-center"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "0.96em",
            letterSpacing: "-0.02em",
          }}
        >
          {t("openPositions.title")}
        </h2>

        {/* layout_J85ETT: column, stretch, gap:146px */}
        <div className="flex flex-col" style={{ gap: "clamp(80px, 12vw, 146px)" }}>
          {/* layout_SSJ2BM: row, center, stretch, gap:132px — 3 cards per row */}
          {/* Each card — layout_00YT6Y: column, flex-end, gap:13.32px, width:466.61px */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "clamp(40px, 8vw, 132px)" }}
          >
            {JOBS.map((job, i) => (
              <div
                key={job.id}
                className="flex flex-col justify-between rounded-3xl border border-gray-100 p-6 transition-all hover:shadow-lg"
                style={{
                  gap: 13.32,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${i * 0.12}s`,
                }}
              >
                {/* layout_UMTMGS: column, fill, gap:19.98px */}
                <div className="flex flex-col" style={{ gap: 19.98 }}>
                  {/* layout_UO9DB3: column, gap:8.88px */}
                  <div className="flex flex-col" style={{ gap: 8.88 }}>
                    {/* Job title — style_2SVQRJ: Funnel Display 400, 35.52px, 1em lh, -1% ls, #23B349 */}
                    <h3
                      className="font-[family-name:var(--font-funnel-display)] font-normal text-[#23B349]"
                      style={{
                        fontSize: "clamp(24px, 2.8vw, 35.52px)",
                        lineHeight: "1em",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {job.title}
                    </h3>

                    {/* Tags — layout_OA0UX3: row, gap:8.88px */}
                    <div className="flex flex-row flex-wrap" style={{ gap: 8.88 }}>
                      {[job.location, job.type].map((tag, ti) => (
                        <span
                          key={ti}
                          className="font-[family-name:var(--font-outfit)] font-medium text-[#404040]"
                          style={{
                            fontSize: 14,
                            lineHeight: "1.17em",
                            padding: "6px 16px",
                            borderRadius: 32.19,
                            background: "transparent",
                            border: "1.11px solid #404040",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description — style_IXAA2U: Outfit 500, 22.20px, 1.26em lh, -0.4% ls, #333733 */}
                  <p
                    className="font-[family-name:var(--font-outfit)] font-medium text-[#333733]"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 22.2px)",
                      lineHeight: "1.26em",
                      letterSpacing: "-0.004em",
                    }}
                  >
                    {job.desc}
                  </p>
                </div>

                {/* Apply now button — layout_RHQPX4: row, center, gap:9.55px, padding:9.55px 19.10px, h:33.42px, radius:596px, #23B349 */}
                <div className="mt-6 flex justify-end">
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#23B349] px-5 py-2 transition-all hover:scale-105 hover:bg-[#1fa041]"
                    style={{
                      gap: 9.55,
                    }}
                  >
                    {/* "Apply now" — style_LMTW3S: Funnel Display 500, 14.32px, 1.25em lh, -0.4% ls, white */}
                    <span
                      className="font-[family-name:var(--font-funnel-display)] font-medium text-white"
                      style={{
                        fontSize: 14.32,
                        lineHeight: "1.25em",
                        letterSpacing: "-0.004em",
                      }}
                    >
                      {t("openPositions.applyNow")}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
