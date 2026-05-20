"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import api from "@/lib/api";
import { localized } from "@/lib/localized";

interface Job {
  _id: string;
  id: string;
  title: { en: string; am?: string };
  location: { en: string; am?: string };
  type: { en: string; am?: string };
  summary: { en: string; am?: string };
  active: boolean;
}

export default function OpenPositionsSection() {
  const t = useTranslations("Careers");
  const locale = (typeof window !== 'undefined'
    ? window.location.pathname.split('/')[1]
    : 'en') as 'en' | 'am';

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.get<Job[]>('/jobs')
      .then((res) => setJobs(res.data.filter((j) => j.active)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const lang = locale === 'am' ? 'am' : 'en';

  return (
    <section
      id="open-positions"
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(80px, 12vw, 160px)" }}
    >
      <div className="mx-auto flex flex-col" style={{ maxWidth: 1664, gap: "clamp(60px, 10vw, 140px)" }}>
        <h2
          className="font-[family-name:var(--font-outfit)] font-bold text-[#23B349] text-center"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "0.96em", letterSpacing: "-0.02em" }}
        >
          {t("openPositions.title")}
        </h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-400 font-['Outfit'] text-lg py-12">
            No open positions at the moment. Check back soon!
          </p>
        ) : (
          <div className="flex flex-col" style={{ gap: "clamp(80px, 12vw, 146px)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(40px, 8vw, 132px)" }}>
              {jobs.map((job, i) => (
                <div
                  key={job._id}
                  className="flex flex-col justify-between rounded-3xl border border-gray-100 p-6 transition-all hover:shadow-lg"
                  style={{
                    gap: 13.32,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease-out ${i * 0.12}s`,
                  }}
                >
                  <div className="flex flex-col" style={{ gap: 19.98 }}>
                    <div className="flex flex-col" style={{ gap: 8.88 }}>
                      <h3
                        className="font-[family-name:var(--font-funnel-display)] font-normal text-[#23B349]"
                        style={{ fontSize: "clamp(24px, 2.8vw, 35.52px)", lineHeight: "1em", letterSpacing: "-0.01em" }}
                      >
                        {localized(job.title, lang)}
                      </h3>
                      <div className="flex flex-row flex-wrap" style={{ gap: 8.88 }}>
                        {[localized(job.location, lang), localized(job.type, lang)].map((tag, ti) => (
                          <span
                            key={ti}
                            className="font-[family-name:var(--font-outfit)] font-medium text-[#404040]"
                            style={{ fontSize: 14, lineHeight: "1.17em", padding: "6px 16px", borderRadius: 32.19, border: "1.11px solid #404040" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p
                      className="font-[family-name:var(--font-outfit)] font-medium text-[#333733]"
                      style={{ fontSize: "clamp(16px, 1.8vw, 22.2px)", lineHeight: "1.26em", letterSpacing: "-0.004em" }}
                    >
                      {localized(job.summary, lang)}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#23B349] px-5 py-2 transition-all hover:scale-105 hover:bg-[#1fa041]"
                    >
                      <span
                        className="font-[family-name:var(--font-funnel-display)] font-medium text-white"
                        style={{ fontSize: 14.32, lineHeight: "1.25em", letterSpacing: "-0.004em" }}
                      >
                        {t("openPositions.applyNow")}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
