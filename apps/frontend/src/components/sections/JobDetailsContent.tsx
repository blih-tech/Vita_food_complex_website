"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getJobById, type Job } from "@frontend/constants/jobs";

interface JobDetailsContentProps {
  jobId: string;
}

export default function JobDetailsContent({ jobId }: JobDetailsContentProps) {
  const t = useTranslations("Careers");
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const job = {
    title: t(`jobs.${jobId}.title`),
    location: t(`jobs.${jobId}.location`),
    type: t(`jobs.${jobId}.type`),
    department: t(`jobs.${jobId}.department`),
    summary: t(`jobs.${jobId}.summary`),
    responsibilities: t.raw(`jobs.${jobId}.responsibilities`) as string[],
    requirements: t.raw(`jobs.${jobId}.requirements`) as string[],
    benefits: t.raw(`jobs.${jobId}.benefits`) as string[],
  };

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

  if (!job) {
    return (
      <section
        className="px-4 sm:px-6 lg:px-[128px]"
        style={{ background: "#F9FAFB", paddingTop: 187, paddingBottom: 80 }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: 1303 }}>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 32,
              color: "#23B349",
            }}
          >
            {t("details.notFound")}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Rectangle 3846 — fill_D67ZIB: #F9FAFB background covering the top section */}
      <div
        className="w-full"
        style={{ background: "#F9FAFB" }}
      >
        {/* layout_AYUHIA: column, gap:22px, x:128px, y:187px, width:1303px */}
        <div
          ref={sectionRef}
          className="mx-auto px-4 sm:px-6 lg:px-[128px]"
          style={{ paddingTop: 187, paddingBottom: 80 }}
        >
          <div
            className="mx-auto flex flex-col"
            style={{ maxWidth: 1303, gap: 22 }}
          >
            {/* Tab — layout_PYYJKD: row, center, gap:8px, padding:10px 16px, radius:18px */}
            {/* fill_BWBWB3: transparent border; style_WD7N6S: Inter 500, 19.76px, 1.43em lh, #0A0A0A */}
            <div>
              <span
                className="inline-flex items-center justify-center"
                style={{
                  gap: 8,
                  padding: "10px 16px",
                  borderRadius: 18,
                  border: "1.13px solid rgba(0,0,0,0)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 19.76,
                  lineHeight: "1.43em",
                  color: "#0A0A0A",
                  background: "#F0F0F0",
                }}
              >
                {t("details.tab")}
              </span>
            </div>

            {/* Card — layout_HIGVCA: column, flex-end, fill, gap:16px, padding:42px */}
            {/* fill_XFHDL8: rgba(0,0,0,0.1) border 1.41px, radius:24px */}
            <div
              className="flex flex-col"
              style={{
                gap: 16,
                padding: "clamp(24px, 3vw, 42px)",
                borderRadius: 24,
                border: "1.41px solid rgba(0,0,0,0.1)",
                background: "#FFFFFF",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out",
              }}
            >
              {/* layout_6K1O3E: column, stretch, gap:42px */}
              <div className="flex flex-col" style={{ gap: 42 }}>
                {/* Header — layout_07PPUI: row, stretch, gap:28.22px */}
                <div
                  className="flex flex-col sm:flex-row items-start"
                  style={{ gap: 28.22 }}
                >
                  {/* Company logo placeholder — layout_B4AHS5: 112.9×112.9px, radius:7px */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 112.9,
                      height: 112.9,
                      borderRadius: 7.06,
                      background: "#E9F7ED",
                      border: "1px solid #23B349",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "#23B349",
                      }}
                    >
                      V
                    </span>
                  </div>

                  {/* Job info — style_273Q7J: Inter 400, 28.22px, 1.5em lh, #0A0A0A */}
                  <div className="flex flex-col" style={{ gap: 0 }}>
                    {/* Job title */}
                    <h1
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(22px, 2.5vw, 28.22px)",
                        lineHeight: "1.5em",
                        color: "#0A0A0A",
                      }}
                    >
                      {job.title}
                    </h1>

                    {/* Company name — same style, #4A5565 */}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(18px, 2vw, 28.22px)",
                        lineHeight: "1.5em",
                        color: "#4A5565",
                      }}
                    >
                      {t("details.companyName")}
                    </p>

                    {/* Location/type — style_Q9CLFY: Inter 400, 24.70px, 1.43em lh, #4A5565 */}
                    <div
                      className="flex flex-wrap items-center"
                      style={{ gap: 8 }}
                    >
                      {[job.location, job.type, job.department].map(
                        (item, i) => (
                          <span
                            key={i}
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              fontSize: "clamp(14px, 1.5vw, 24.7px)",
                              lineHeight: "1.43em",
                              color: "#4A5565",
                            }}
                          >
                            {i > 0 && (
                              <span style={{ marginRight: 8, color: "#6A7282" }}>
                                •
                              </span>
                            )}
                            {item}
                          </span>
                        ),
                      )}
                    </div>

                    {/* Badges — layout_TULNV2: padding:3.53px 14.11px, radius:14.11px, bg:#ECEEF2 */}
                    <div
                      className="flex flex-row flex-wrap"
                      style={{ gap: 14.11, marginTop: 12 }}
                    >
                      {[t("details.fullTime"), t("details.onSite")].map((badge) => (
                        <span
                          key={badge}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: 21.17,
                            lineHeight: "1.33em",
                            color: "#030213",
                            background: "#ECEEF2",
                            border: "1.41px solid rgba(0,0,0,0)",
                            borderRadius: 14.11,
                            padding: "3.53px 14.11px",
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider — layout_USQIHF: fill rgba(0,0,0,0.1), height:1.76px */}
                <div
                  style={{
                    height: 1.76,
                    background: "rgba(0,0,0,0.1)",
                    borderRadius: 1,
                  }}
                />

                {/* Content sections — layout_FPFXVR: column, stretch, gap:28.22px */}
                <div className="flex flex-col" style={{ gap: 28.22 }}>
                  {/* About the job — style_8JTXLM: Inter 500, 35.28px, 1.5em lh, #0A0A0A */}
                  <div className="flex flex-col" style={{ gap: 14.11 }}>
                    <h2
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(22px, 2.8vw, 35.28px)",
                        lineHeight: "1.5em",
                        color: "#0A0A0A",
                      }}
                    >
                      {t("details.summaryTitle")}
                    </h2>
                    {/* Body text — style_273Q7J: Inter 400, 28.22px, 1.5em lh, #364153 */}
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 2vw, 28.22px)",
                        lineHeight: "1.5em",
                        color: "#364153",
                      }}
                    >
                      {job.summary}
                    </p>
                  </div>

                  {/* Responsibilities — layout_CDY73Y: column, stretch, gap:14.11px */}
                  <div className="flex flex-col" style={{ gap: 14.11 }}>
                    <h2
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(22px, 2.8vw, 35.28px)",
                        lineHeight: "1.5em",
                        color: "#0A0A0A",
                      }}
                    >
                      {t("details.responsibilitiesTitle")}
                    </h2>
                    {/* layout_0TR9F0: column, stretch, gap:7.06px */}
                    <div className="flex flex-col" style={{ gap: 7.06 }}>
                      {job.responsibilities.map((item, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.8vw, 28.22px)",
                            lineHeight: "1.5em",
                            color: "#364153",
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Requirements / Qualifications — layout_CDY73Y */}
                  <div className="flex flex-col" style={{ gap: 14.11 }}>
                    <h2
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(22px, 2.8vw, 35.28px)",
                        lineHeight: "1.5em",
                        color: "#0A0A0A",
                      }}
                    >
                      {t("details.requirementsTitle")}
                    </h2>
                    <div className="flex flex-col" style={{ gap: 7.06 }}>
                      {job.requirements.map((item, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.8vw, 28.22px)",
                            lineHeight: "1.5em",
                            color: "#364153",
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-col" style={{ gap: 14.11 }}>
                    <h2
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(22px, 2.8vw, 35.28px)",
                        lineHeight: "1.5em",
                        color: "#0A0A0A",
                      }}
                    >
                      {t("details.benefitsTitle")}
                    </h2>
                    <div className="flex flex-col" style={{ gap: 7.06 }}>
                      {job.benefits.map((item, i) => (
                        <p
                          key={i}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(14px, 1.8vw, 28.22px)",
                            lineHeight: "1.5em",
                            color: "#364153",
                          }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply now button — layout_IPQ5CN: row, center, gap:10px, padding:10px 20px, w:240px, h:55px, radius:48px, #23B349 */}
              {/* Positioned at flex-end (right-aligned) per layout_HIGVCA alignItems:flex-end */}
              <div className="flex justify-end">
                <Link
                  href={`${pathname}/apply`}
                  className="inline-flex items-center justify-center"
                  style={{
                    gap: 10,
                    padding: "10px 20px",
                    width: 240,
                    height: 55,
                    borderRadius: 48,
                    background: "#23B349",
                  }}
                >
                  {/* "Apply now" — style_UYPSHL: Funnel Display 500, 14.32px, 1.25em lh, -0.4% ls, white */}
                  <span
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 14.32,
                      lineHeight: "1.25em",
                      letterSpacing: "-0.057px",
                      color: "#FFFFFF",
                    }}
                  >
                    {t("details.applyNow")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
