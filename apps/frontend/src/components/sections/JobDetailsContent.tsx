"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getJobById, type Job } from "@frontend/constants/jobs";

interface JobDetailsContentProps {
  jobId: string;
}

export default function JobDetailsContent({ jobId }: JobDetailsContentProps) {
  const t = useTranslations("Careers");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const job: Job | undefined = getJobById(jobId);

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
        style={{ background: "#FFFFFF", paddingTop: 152, paddingBottom: 80 }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: 1303 }}>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
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
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 152, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1303 }}>
        {/* Tab — Figma node 2570:11229: Inter Medium 19.76px, #0a0a0a */}
        <div className="mb-8">
          <span
            className="inline-block px-4 py-2 rounded-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "28px",
              color: "#0a0a0a",
              background: "#F5F5F5",
            }}
          >
            {t("details.tab")}
          </span>
        </div>

        {/* Job Details Card — Figma node 2570:11234: 1303 x 1563, r=24, #FFFFFF */}
        <div
          className="rounded-[24px] p-8 md:p-12"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E5E5",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Job Header */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-10"
            style={{ borderBottom: "1px solid #E5E5E5" }}
          >
            <div>
              <h1
                className="mb-3"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.96px",
                  color: "#23B349",
                }}
              >
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {[job.location, job.type, job.department].map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      background: i === 0 ? "#E9F7ED" : "#F0F0F0",
                      color: i === 0 ? "#23B349" : "#404040",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply now button — Figma node 2586:13056 */}
            <Link
              href="apply"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3"
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
                {t("details.applyNow")}
              </span>
              <span className="text-white" style={{ fontSize: 12 }}>
                →
              </span>
            </Link>
          </div>

          {/* Job Summary */}
          <div className="mb-10">
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "24px",
                letterSpacing: "-0.096px",
                color: "#000000",
              }}
            >
              {t("details.summaryTitle")}
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "25.2px",
                letterSpacing: "-0.08px",
                color: "#333733",
              }}
            >
              {job.summary}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-10">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "24px",
                letterSpacing: "-0.096px",
                color: "#000000",
              }}
            >
              {t("details.responsibilitiesTitle")}
            </h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                    style={{ background: "#23B349" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "25.2px",
                      letterSpacing: "-0.08px",
                      color: "#333733",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-10">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "24px",
                letterSpacing: "-0.096px",
                color: "#000000",
              }}
            >
              {t("details.requirementsTitle")}
            </h2>
            <ul className="space-y-4">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                    style={{ background: "#23B349" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "25.2px",
                      letterSpacing: "-0.08px",
                      color: "#333733",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "24px",
                letterSpacing: "-0.096px",
                color: "#000000",
              }}
            >
              {t("details.benefitsTitle")}
            </h2>
            <ul className="space-y-4">
              {job.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0"
                    style={{ background: "#23B349" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 400,
                      fontSize: 20,
                      lineHeight: "25.2px",
                      letterSpacing: "-0.08px",
                      color: "#333733",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
