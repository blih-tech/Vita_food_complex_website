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
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1664 }}>
        {/* "Open Positions" — Outfit Bold 64px, lh 61.44px, ls -1.28px, #23B349 */}
        <h2
          className="mb-12"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "61.44px",
            letterSpacing: "-1.28px",
            color: "#23B349",
          }}
        >
          {t("openPositions.title")}
        </h2>

        {/* Job listing cards — Figma node 2546:10798 */}
        <div className="flex flex-col gap-6">
          {JOBS.map((job, i) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 rounded-[24px] transition-all hover:shadow-lg"
              style={{
                background: "#F5F5F5",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="flex-1">
                {/* Job title — Outfit Bold 32px, #23B349 */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: "1.2",
                    letterSpacing: "-0.64px",
                    color: "#23B349",
                  }}
                >
                  {job.title}
                </h3>

                {/* Description — Outfit Medium 22px, #333733 */}
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: "1.3",
                    color: "#333733",
                  }}
                >
                  {job.desc}
                </p>

                {/* Location + Type badges */}
                <div className="flex gap-3">
                  <span
                    className="px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      background: "#E9F7ED",
                      color: "#23B349",
                    }}
                  >
                    {job.location}
                  </span>
                  <span
                    className="px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      background: "#F0F0F0",
                      color: "#404040",
                    }}
                  >
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Apply now button — Funnel Display Medium 14px, white on green */}
              <div
                className="flex items-center gap-2 rounded-full px-6 py-3 flex-shrink-0"
                style={{ background: "#23B349" }}
              >
                <span
                  className="font-['Funnel_Display'] font-medium text-white"
                  style={{
                    fontSize: 14,
                    lineHeight: "18px",
                    letterSpacing: "-0.057px",
                  }}
                >
                  {t("openPositions.applyNow")}
                </span>
                <span className="text-white" style={{ fontSize: 12 }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
