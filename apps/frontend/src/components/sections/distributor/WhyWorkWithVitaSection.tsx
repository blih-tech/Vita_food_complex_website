"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, Truck, ShieldCheck, BadgeDollarSign } from "lucide-react";
import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  label: string;
  isHighlighted?: boolean;
}

interface WhyWorkContent {
  title?: string;
  description?: string;
  cards?: {
    demand?: string;
    supply?: string;
    brand?: string;
    margins?: string;
  };
}

function BenefitCard({ icon, label, isHighlighted = false }: BenefitCardProps) {
  return (
    <div
      className="relative flex flex-col items-center justify-between rounded-[24px] transition-transform hover:scale-105 w-full sm:w-[215px] sm:h-[240px] p-5"
      style={{
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
        className="text-center mt-4 sm:mt-0"
        style={{
          fontFamily:
            "var(--font-funnel-display), 'Funnel Display', sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "25px",
          letterSpacing: "-0.004em",
          color: isHighlighted ? "#FFFFFF" : "#404040",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function WhyWorkWithVitaSection({ content }: { content?: WhyWorkContent }) {
  const t = useTranslations("Distributor");

  const cards = {
    demand: content?.cards?.demand || t("whyWork.cards.demand"),
    supply: content?.cards?.supply || t("whyWork.cards.supply"),
    brand: content?.cards?.brand || t("whyWork.cards.brand"),
    margins: content?.cards?.margins || t("whyWork.cards.margins"),
  };

  const benefits = [
    {
      icon: <TrendingUp size={28} strokeWidth={2.5} />,
      label: cards.demand,
      isHighlighted: true,
    },
    {
      icon: <Truck size={28} strokeWidth={2.5} />,
      label: cards.supply,
      isHighlighted: false,
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={2.5} />,
      label: cards.brand,
      isHighlighted: false,
    },
    {
      icon: <BadgeDollarSign size={28} strokeWidth={2.5} />,
      label: cards.margins,
      isHighlighted: false,
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14 max-w-[1920px] px-4 sm:px-6 lg:px-[128px]">
        {/* Left text group */}
        <div className="flex flex-col items-start gap-8 w-full lg:max-w-[700px]">
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
            {content?.title || t("whyWork.title")}
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
            }}
          >
            {content?.description || t("whyWork.description")}
          </p>
        </div>

        {/* Right cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-row lg:flex-wrap items-center gap-4 w-full lg:w-auto">
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
