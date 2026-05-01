"use client";

import { useTranslations } from "next-intl";
import {
  TrendingUp,
  Truck,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  label: string;
  isHighlighted?: boolean;
}

function BenefitCard({ icon, label, isHighlighted = false }: BenefitCardProps) {
  return (
    <div
      className="relative flex flex-col items-center justify-between rounded-[24px] transition-transform hover:scale-105"
      style={{
        width: 215,
        height: 240,
        padding: "20px",
        background: isHighlighted ? "#23B349" : "#FFFFFF",
        border: isHighlighted ? "none" : "1.26px solid #E8E8E8",
      }}
    >
      {/* Icon circle */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: 83,
          height: 85,
          background: isHighlighted ? "#FFEC19" : "#23B349",
        }}
      >
        <div style={{ color: isHighlighted ? "#000000" : "#FFEC19" }}>
          {icon}
        </div>
      </div>

      {/* Label */}
      <p
        className="text-center"
        style={{
          fontFamily: "var(--font-funnel-display), 'Funnel Display', sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "25px",
          letterSpacing: "-0.004em",
          color: isHighlighted ? "#FFFFFF" : "#404040",
          maxWidth: 173,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function WhyWorkWithVitaSection() {
  const t = useTranslations("Distributor");

  const benefits = [
    {
      icon: <TrendingUp size={28} strokeWidth={2.5} />,
      label: t("whyWork.cards.demand"),
      isHighlighted: true,
    },
    {
      icon: <Truck size={28} strokeWidth={2.5} />,
      label: t("whyWork.cards.supply"),
      isHighlighted: false,
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={2.5} />,
      label: t("whyWork.cards.brand"),
      isHighlighted: false,
    },
    {
      icon: <BadgeDollarSign size={28} strokeWidth={2.5} />,
      label: t("whyWork.cards.margins"),
      isHighlighted: false,
    },
  ];

  return (
    <section
      className="w-full bg-white"
      style={{ padding: "80px 0" }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-14"
        style={{ maxWidth: 1920, padding: "0 128px" }}
      >
        {/* Left text group */}
        <div className="flex flex-col items-start gap-8" style={{ maxWidth: 700 }}>
          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: "0.9",
              letterSpacing: "-0.02em",
              color: "#23B349",
            }}
          >
            {t("whyWork.title")}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 24px)",
              lineHeight: "30px",
              letterSpacing: "-0.004em",
              color: "#000000",
              maxWidth: 700,
            }}
          >
            {t("whyWork.description")}
          </p>
        </div>

        {/* Right cards grid */}
        <div className="flex flex-row flex-wrap items-center gap-4">
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              icon={benefit.icon}
              label={benefit.label}
              isHighlighted={benefit.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
