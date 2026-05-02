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
      description: "In Ethiopia's fertile highlands, every grain begins its journey in the hands of dedicated farmers who understand the land.",
      image: "/assets/about/wheat-farming.png",
    },
    {
      number: "02",
      label: "Crafting",
      captionLabel: "HANDS BEHIND THE QUALITY",
      captionDesc: "Crafted by skilled professionals committed to delivering trusted food for every moment.",
      heading: "Hands that shape nourishment",
      description: "Behind every Vita product are skilled individuals who transform raw ingredients into trusted food essentials.",
      image: "/assets/about/baking-biscuits.png",
    },
    {
      number: "03",
      label: "Production",
      captionLabel: "THE ART OF PRECISION",
      captionDesc: "Where technology, quality control, and innovation come together to create Vita products.",
      heading: "Refined with purpose, delivered",
      description: "Inside our modern production facilities, innovation meets discipline. Using advanced technology and rigorous quality control, we ensure every product meets the highest standards.",
      image: "/assets/quality/quality-1.png",
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
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.8s ease-out ${i * 0.15}s`,
            }}
          >
            {/* Left Content — layout_G0BXEC: 686w × 571h */}
            <div className="flex-shrink-0 w-full lg:w-auto" style={{ maxWidth: 686 }}>
              {/* Section Text Container — layout_UHQ2TV: column, gap:24px */}
              <div className="mb-8" style={{ gap: 24 }}>
                {/* Heading — Display: Outfit 700, 64px, 0.96em lh, -2% ls, #23B349 */}
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 4vw, 64px)",
                    lineHeight: "0.96em",
                    letterSpacing: "-1.28px",
                    color: "#23B349",
                  }}
                >
                  {p.heading}
                </h3>

                {/* Description — style_8X9JNH: Outfit 400, 20px, 1.26em lh, -0.4% ls, #404040, w=538 */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: "1.26em",
                    letterSpacing: "-0.08px",
                    color: "#404040",
                    maxWidth: 538,
                  }}
                >
                  {p.description}
                </p>
              </div>

              {/* Label Container — layout_JAVRGZ: at y=342, w=277, h=229 */}
              <div className="relative" style={{ height: 180 }}>
                {/* Section Number — style_ITZKC9: Funnel Display 400, 225px, fill rgba(114,99,0,0.14) */}
                <span
                  className="absolute bottom-0 left-0 leading-none select-none"
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(120px, 16vw, 225px)",
                    color: "rgba(114, 99, 0, 0.14)",
                    lineHeight: 1,
                  }}
                >
                  {p.number}
                </span>

                {/* Label — style_C6D040: Funnel Display 700, 32px, 1em lh, -0.4% ls, #000 */}
                <span
                  className="absolute bottom-3 left-3"
                  style={{
                    fontFamily: "'Funnel Display', sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: "1em",
                    letterSpacing: "-0.128px",
                    color: "#000000",
                  }}
                >
                  {p.label}
                </span>
              </div>
            </div>

            {/* Right Image — layout_JPM41M: 726.44 × 570.07 */}
            <div className="flex-1 w-full">
              <div
                className="relative rounded-[24px] overflow-hidden"
                style={{ paddingBottom: "78.5%" /* 570/726 */ }}
              >
                <Image
                  src={p.image}
                  alt={p.label}
                  fill
                  className="object-cover"
                />

                {/* Caption Container — layout_UQBDFO: x=22.45, y=426.54, w=682, h=123, radius 16px */}
                {/* fill_SINNNE: rgba(35,179,73,0.5) + backdropFilter blur(90px) */}
                <div
                  className="absolute bottom-6 left-6 right-6 p-4"
                  style={{
                    background: "rgba(35, 179, 73, 0.5)",
                    borderRadius: 16,
                    backdropFilter: "blur(90px)",
                    WebkitBackdropFilter: "blur(90px)",
                  }}
                >
                  {/* Caption Heading — style_U46CFA: Funnel Display 700, 32px, 1em, #FFFFFF */}
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(18px, 2vw, 32px)",
                      lineHeight: "1em",
                      letterSpacing: "-0.32px",
                      color: "#FFFFFF",
                    }}
                  >
                    {p.captionLabel}
                  </p>

                  {/* Caption Body — Subtitle 2: Funnel Display 500, 20px, 1.25em, #E8E8E8 */}
                  <p
                    style={{
                      fontFamily: "'Funnel Display', sans-serif",
                      fontWeight: 500,
                      fontSize: 20,
                      lineHeight: "1.25em",
                      letterSpacing: "-0.08px",
                      color: "#E8E8E8",
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
