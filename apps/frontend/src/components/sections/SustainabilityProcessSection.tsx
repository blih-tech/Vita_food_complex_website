"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@frontend/lib/utils";

export default function SustainabilityProcessSection() {
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

  const steps = [
    {
      key: "farmers",
      heading: t("process.farmers.heading"),
      desc: t("process.farmers.desc"),
      image: "/assets/images/sustainability/process-farmers.jpg",
      imageHeight: 324,
    },
    {
      key: "processing",
      heading: t("process.processing.heading"),
      desc: t("process.processing.desc"),
      image: "/assets/images/sustainability/process-processing.jpg",
      imageHeight: 300,
    },
    {
      key: "distribution",
      heading: t("process.distribution.heading"),
      desc: t("process.distribution.desc"),
      image: "/assets/images/sustainability/process-distribution.jpg",
      imageHeight: 276,
    },
    {
      key: "reuse",
      heading: t("process.reuse.heading"),
      desc: t("process.reuse.desc"),
      image: "/assets/images/sustainability/process-reuse.jpg",
      imageHeight: 246,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 xl:px-[128px] py-[80px] sm:py-[100px] md:py-[120px] bg-white overflow-hidden"
      data-node-id="274:5187"
    >
      <div className="mx-auto max-w-[1656px]">
        {/* Process text — Figma node 2080:3766 */}
        <div className="mb-[clamp(32px,6vw,64px)] max-w-[871px]" data-node-id="2080:3766">
          <span className="block mb-4 font-[family-name:var(--font-funnel-display)] font-medium leading-none text-[#333733]"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              letterSpacing: "-0.004em",
            }}
          >
            {t("process.sublabel")}
          </span>

          <h2
            className="font-[family-name:var(--font-outfit)] font-extrabold text-[#23B349] leading-[0.9]"
            style={{
              fontSize: "clamp(36px, 7vw, 80px)",
              letterSpacing: "-0.02em",
              fontFeatureSettings: "'liga' 0",
            }}
          >
            {t("process.title")}
          </h2>
        </div>

        {/* Process Steps — 4 columns staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(24px,3vw,32px)]">
          {steps.map((step, i) => (
            <div
              key={step.key}
              className={cn(
                "flex flex-col group",
                i === 1 && "lg:mt-[clamp(30px,5vw,60px)]",
                i === 2 && "lg:mt-[clamp(60px,10vw,120px)]",
                i === 3 && "lg:mt-[clamp(90px,15vw,180px)]"
              )}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
              }}
            >
              {/* Heading — Outfit Bold 64px, lh 61.44px, ls -1.28px, #333733 */}
              <h3
                className="mb-8 font-bold leading-[0.96] text-[#333733]"
                style={{
                  fontFamily: step.key === "reuse" ? "var(--font-funnel-display)" : "var(--font-outfit)",
                  fontSize: step.key === "reuse" ? "clamp(28px, 4vw, 40px)" : "clamp(32px, 5.5vw, 64px)",
                  letterSpacing: "-0.02em",
                  fontFeatureSettings: "'liga' 0"
                }}
              >
                {step.heading}
              </h3>

              {/* Image Area */}
              <div
                className="relative w-full rounded-[24px] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-500"
                style={{ height: "clamp(200px, 30vw, 324px)", background: "#F5F5F5" }}
              >
                <Image
                  src={step.image}
                  alt={step.heading}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Description — Funnel Display Medium 20px, lh 25px, ls -0.08px */}
              <p className="font-[family-name:var(--font-funnel-display)] font-medium leading-[1.25] text-[#333733]"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  letterSpacing: "-0.004em",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
