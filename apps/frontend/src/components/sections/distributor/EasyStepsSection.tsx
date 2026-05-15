"use client";

import { useTranslations } from "next-intl";
import { Laptop, MessageCircle, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface StepProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface EasyStepsContent {
  title?: string;
  subtitle?: string;
  call?: { title?: string; description?: string };
  discussion?: { title?: string; description?: string };
  started?: { title?: string; description?: string };
}

function StepCard({ icon, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-[30px] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[484px]">
      {/* Neumorphic circle */}
      <div
        className="flex items-center justify-center rounded-full w-[120px] h-[120px] sm:w-[152px] sm:h-[152px]"
        style={{
          background: "#FFFFFF",
          border: "1.52px solid #FFFFFF",
          boxShadow:
            "inset -6px 6px 46px rgba(255, 255, 255, 0.5), inset 6px 6px 46px #D1D9E6",
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-3">
        <h4
          className="text-center"
          style={{
            fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(20px, 2vw, 24px)",
            lineHeight: "1",
            letterSpacing: "-0.004em",
            color: "#23B349",
          }}
        >
          {title}
        </h4>
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.2vw, 16px)",
            lineHeight: "1.4",
            color: "#404040",
            maxWidth: "280px"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function EasyStepsSection({ content }: { content?: EasyStepsContent }) {
  const t = useTranslations("Distributor");

  const steps = [
    {
      icon: <Laptop size={42} strokeWidth={2} color="#23B349" />,
      title: content?.call?.title || "Fill Out Our partnership Form",
      description: content?.call?.description || "Please complete the form below to get in touch with us",
    },
    {
      icon: <MessageCircle size={48} strokeWidth={2} color="#ffffff" fill="#23B349" />,
      title: content?.discussion?.title || "Quick Discussion",
      description: content?.discussion?.description || "We understand your location and business",
    },
    {
      icon: <Rocket size={48} strokeWidth={2} color="#ffffff" fill="#23B349" />,
      title: content?.started?.title || "Get Started",
      description: content?.started?.description || "Receive guidance and begin distribution",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto flex flex-col items-center gap-12 lg:gap-16 max-w-[1920px] px-4 sm:px-6 lg:px-[128px]">
        {/* Title block */}
        <div className="flex flex-col items-center gap-2">
          <h2
            className="text-center"
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 4.5vw, 64px)",
              lineHeight: "0.96",
              letterSpacing: "-0.02em",
              color: "#23B349",
            }}
          >
            {content?.title || t("steps.title")}
          </h2>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: "1.5",
              color: "#333733",
            }}
          >
            {content?.subtitle || "Simple Process"}
          </p>
        </div>

        {/* Steps row with dashed arcs */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-6 lg:gap-10 w-full max-w-[1664px]">
          {/* Dashed arc connectors - visible only on lg+ where there's enough space */}
          {/* Arc 1: from step 1 to step 2 */}
          <svg
            className="hidden lg:block absolute"
            style={{ left: "22%", top: 0, width: 377, height: 42 }}
            viewBox="0 0 377 42"
            fill="none"
          >
            <path
              d="M0 42 C94 0, 283 0, 377 42"
              stroke="#A8A8A8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          {/* Arc 2: from step 2 to step 3 (inverted) */}
          <svg
            className="hidden lg:block absolute"
            style={{ left: "56%", top: 72, width: 377, height: 42 }}
            viewBox="0 0 377 42"
            fill="none"
          >
            <path
              d="M0 0 C94 42, 283 42, 377 0"
              stroke="#A8A8A8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          {steps.map((step, idx) => (
            <StepCard
              key={idx}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
