"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Partnering with Vita Food Complex Distributor made our corporate gala effortless. Their attention to detail and commitment to excellence exceeded our expectations.",
    author: "Mulugeta Bekele",
    role: "CEO, EthioTech Solutions",
  },
  {
    id: 2,
    quote:
      "The Standard Event made our corporate gala seamless and stress-free. Their attention to detail and commitment to excellence exceeded our expectations.",
    author: "Mulugeta Bekele",
    role: "CEO, EthioTech Solutions",
  },
  {
    id: 3,
    quote:
      "Partnering with Vita Food Complex Distributor made our corporate gala effortless. Their attention to detail and commitment to excellence exceeded our expectations.",
    author: "Mulugeta Bekele",
    role: "CEO, EthioTech Solutions",
  },
];

export default function TestimonialSection() {
  const t = useTranslations("About");
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  return (
    <section
      className="overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#232323", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1981 }}>
        {/* Header — Figma node 2120:1668 */}
        <div className="mb-12">
          <span
            className="block mb-4"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "25px",
              letterSpacing: "-0.08px",
              color: "#FFFFFF",
            }}
          >
            {t("testimonials.label")}
          </span>

          <h2
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 14vw, 183px)",
              lineHeight: "228.77px",
              letterSpacing: "-3.66px",
              color: "#FFFFFF",
            }}
          >
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonial Cards Carousel */}
        <div
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {TESTIMONIALS.map((tm) => (
            <div
              key={tm.id}
              className="flex-shrink-0 rounded-[48px] p-10 md:p-12"
              style={{
                minWidth: "min(680px, 90vw)",
                background: "#2E2E2E",
                scrollSnapAlign: "start",
              }}
            >
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Funnel Display', sans-serif",
                  fontWeight: 400,
                  fontSize: 32,
                  lineHeight: "32px",
                  letterSpacing: "-0.128px",
                  color: "#FFFFFF",
                }}
              >
                {tm.quote}
              </p>

              <div>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: "23px",
                    letterSpacing: "-0.073px",
                    color: "#EAEAEA",
                  }}
                >
                  {tm.author}
                </span>
                <br />
                <span
                  className="text-white/60"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: "23px",
                    letterSpacing: "-0.073px",
                  }}
                >
                  {tm.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
