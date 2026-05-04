"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@frontend/lib/utils";

export default function SustainabilityGiveBackSection() {
  const t = useTranslations("Sustainability");
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

  const cards = [
    {
      key: "farmers",
      heading: t("giveBack.farmers.heading"),
      desc: t("giveBack.farmers.desc"),
      image: "/assets/images/sustainability/giveback-1.jpg",
    },
    {
      key: "employment",
      heading: t("giveBack.employment.heading"),
      desc: t("giveBack.employment.desc"),
      image: "/assets/images/sustainability/giveback-2.jpg",
    },
    {
      key: "accessibility",
      heading: t("giveBack.accessibility.heading"),
      desc: t("giveBack.accessibility.desc"),
      image: "/assets/images/sustainability/giveback-3.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 xl:px-[128px] py-[80px] sm:py-[100px] md:py-[120px] bg-white overflow-hidden"
      data-node-id="274:5212"
    >
      <div className="mx-auto max-w-[1664px]">
        {/* Header — Figma node 274:5213 */}
        <div className="mb-[48px] md:mb-[80px] max-w-[1062px]" data-node-id="274:5213">
          <h2
            className="mb-6 font-['Outfit'] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[0.96] tracking-[-1.28px] text-[#23B349] max-w-[528px]"
            style={{ fontFeatureSettings: "'liga' 0" }}
          >
            {t("giveBack.title")}
          </h2>

          <p className="font-['Funnel_Display'] font-medium text-[18px] md:text-[20px] leading-[1.25] tracking-[-0.08px] text-[#333733] max-w-[900px]">
            {t("giveBack.description")}
          </p>
        </div>

        {/* 3 Cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[32px] md:gap-[48px] xl:gap-[24px]">
          {cards.map((card, i) => (
            <div
              key={card.key}
              className={cn(
                "flex flex-col group",
                i === 1 && "xl:mt-[60px]",
                i === 2 && "xl:mt-[120px]"
              )}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
              }}
            >
              {/* Image area — rounded 24px, 544x575px in Figma */}
              <div
                className="relative w-full aspect-[544/575] rounded-[24px] overflow-hidden mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-500"
                style={{ background: "#F5F5F5" }}
              >
                <Image
                  src={card.image}
                  alt={card.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <h3
                className="mb-4 font-['Funnel_Display'] font-bold text-[24px] leading-[1] text-black"
                style={{
                  letterSpacing: card.key === "accessibility" ? "0px" : "-0.096px",
                }}
              >
                {card.heading}
              </h3>

              <p className="font-['Outfit'] font-normal text-[18px] md:text-[20px] leading-[1.26] tracking-[-0.08px] text-[#333733]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
