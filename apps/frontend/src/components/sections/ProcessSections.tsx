"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

interface ProcessData {
  number: string;
  label: string;
  captionLabel: string;
  captionDesc: string;
  heading: string;
  description: string;
  image: string;
}

export default function ProcessSections() {
  const t = useTranslations("About.process");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* Figma (node 2080:3663): 3 SectionContainer frames, each row space-between
     Left: SectionTextContainer (686w) + LabelContainer (number + label)
     Right: ImageContainer (726.44 × 570.07) with caption overlay
     Caption bg: rgba(35,179,73,0.5) + backdrop-blur(90px), radius 16px
     Section number: Funnel Display 400, 225px, fill_1AXTC2: rgba(114,99,0,0.14) */

  const processes: ProcessData[] = [
    {
      number: "01",
      label: "Sourcing",
      captionLabel: "NATURE'S FOUNDATION",
      captionDesc: "Our story begins in Ethiopia's farmlands, where quality is nurtured from the ground up.",
      heading: "From rich soil, a powerful beginning",
      description: "In Ethiopia's fertile highlands, every grain begins its journey in the hands of dedicated farmers. With deep knowledge of the land and generations of experience, they cultivate wheat that meets the highest standards of quality and care.",
      image: "/assets/process/section-image.png",
    },
    {
      number: "02",
      label: "Crafting",
      captionLabel: "HANDS BEHIND THE QUALITY",
      captionDesc: "Crafted by skilled professionals committed to delivering trusted food for every home",
      heading: "Hands that shape nourishment",
      description: "Behind every Vita product are skilled individuals who transform raw ingredients into trusted food essentials. From sourcing to preparation, every step is guided by precision, hygiene, and a commitment to excellence.",
      image: "/assets/process/section-image-1.png",
    },
    {
      number: "03",
      label: "Production",
      captionLabel: "THE ART OF PRECISION",
      captionDesc: "Where technology, quality control, and innovation come together to create Vita products.",
      heading: "Refined with purpose, delivered",
      description: "Inside our modern production facilities, innovation meets discipline. Using advanced technology and strict quality control, Vita transforms locally sourced ingredients into products that meet global standards.",
      image: "/assets/process/section-image-2.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto flex flex-col gap-16" style={{ maxWidth: 1664 }}>
        {processes.map((p, i) => (
          <div
            key={p.number}
            className="flex items-center justify-between"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease-out ${i * 0.15}s`,
            }}
          >
            {/* Left Content — Figma exact positioning */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start" style={{ width: i === 1 ? 612 : i === 2 ? 556 : 682 }}>
              {/* Section Text Container — exact Figma positioning */}
              <div 
                className="content-stretch flex flex-col gap-[24px] items-start"
                style={{ 
                  marginLeft: i === 0 ? "4px" : "0px",
                  marginTop: "0px",
                  paddingTop: "36px",
                  width: i === 1 ? 612 : i === 2 ? 556 : 682
                }}
              >
                {/* Heading — Figma exact: Outfit Bold, 64px, 0.96em lh, -1.28px ls, #23b349 */}
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 4vw, 64px)",
                    lineHeight: "0.96em",
                    letterSpacing: "-1.28px",
                    color: "#23b349",
                    fontFeatureSettings: "'liga' 0",
                    minWidth: "fit-content",
                  }}
                >
                  {p.heading}
                </h3>

                {/* Description — Figma exact: Outfit Regular, 20px, normal lh, -0.08px ls, #404040 */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "normal",
                    letterSpacing: "-0.08px",
                    color: "#404040",
                    width: i === 0 ? 538 : i === 1 ? 542 : 540,
                  }}
                >
                  {p.description}
                </p>
              </div>

              {/* Label Container — Figma exact positioning */}
              <div 
                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start"
                style={{ 
                  marginLeft: "0px",
                  marginTop: i === 1 ? "341px" : "342px"
                }}
              >
                {/* Section Number — Figma exact: Funnel Display Regular, 225px, rgba(114,99,0,0.14) */}
                <p
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(120px, 16vw, 225px)",
                    lineHeight: "normal",
                    color: "rgba(114, 99, 0, 0.14)",
                    height: i === 1 ? "230px" : "229px",
                    width: i === 1 ? 271 : i === 2 ? 273 : 277,
                  }}
                >
                  {p.number}
                </p>

                {/* Label — Figma exact: Funnel Display Bold, 32px, normal lh, -0.128px ls, #000 */}
                <p
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: "none",
                    letterSpacing: "-0.128px",
                    color: "#000000",
                    height: "34.566px",
                    marginLeft: i === 2 ? "11px" : i === 1 ? "9px" : "10.52px",
                    marginTop: i === 2 ? "159px" : "168.51px",
                    width: i === 2 ? 171 : i === 1 ? 128 : 162.48,
                  }}
                >
                  {p.label}
                </p>
              </div>
            </div>

            {/* Right Image — Figma exact: 726.442 × 570.07 */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start">
              {/* Gradient Overlay — Figma exact: from #fff6b1 to #ffde56, rounded 10px */}
              <div 
                className="absolute"
                style={{
                  width: "726.442px",
                  height: "570.07px",
                  background: "linear-gradient(to bottom, #fff6b1, #ffde56)",
                  borderRadius: "10px",
                }}
              />
              
              {/* Image Container */}
              <div 
                className="relative rounded-[24px] overflow-hidden"
                style={{ 
                  width: "726.442px", 
                  height: "570.07px" 
                }}
              >
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover rounded-[24px]"
                  style={{ 
                    objectPosition: i === 2 ? "-14.64% -0.13%" : "center",
                    objectFit: i === 2 ? "cover" : "cover"
                  }}
                />
              </div>

              {/* Caption Container — Figma exact: x=22.44, y=426.54, w=682, h=123, radius 16px */}
              <div 
                className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start absolute"
                style={{
                  marginLeft: "22.44px",
                  marginTop: "426.54px",
                  width: "682px",
                  height: "123px",
                }}
              >
                {/* Caption Background — Figma exact: rgba(35,179,73,0.5) + backdrop-blur(45px) */}
                <div 
                  className="absolute"
                  style={{
                    background: "rgba(35, 179, 73, 0.5)",
                    borderRadius: "16px",
                    backdropFilter: "blur(45px)",
                    WebkitBackdropFilter: "blur(45px)",
                    width: "682px",
                    height: "123px",
                  }}
                />
                
                {/* Caption Text Container */}
                <div 
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
                  style={{
                    marginLeft: "17px",
                    marginTop: i === 0 ? "17px" : "15px",
                  }}
                >
                  {/* Caption Heading — Figma exact: Funnel Display Bold, 32px/36px, none lh, -0.32px/-0.36px ls, #FFFFFF */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: i === 0 ? 32 : 36,
                      lineHeight: "none",
                      letterSpacing: i === 0 ? "-0.32px" : "-0.36px",
                      color: "#FFFFFF",
                      marginLeft: "1.44px",
                      width: i === 0 ? 595 : i === 1 ? "fit-content" : 629,
                      whiteSpace: i === 1 ? "nowrap" : "normal",
                    }}
                  >
                    {p.captionLabel}
                  </p>

                  {/* Caption Body — Figma exact: Funnel Display Medium, 20px, normal lh, -0.08px ls, #e8e8e8 */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 20,
                      lineHeight: "normal",
                      letterSpacing: "-0.08px",
                      color: "#e8e8e8",
                      marginLeft: "0px",
                      marginTop: i === 0 ? "40px" : "44px",
                      width: 647,
                    }}
                  >
                    {p.captionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
