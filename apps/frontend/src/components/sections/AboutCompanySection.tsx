"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ABOUT_ASSETS } from "@frontend/constants/aboutAssets";

export default function AboutCompanySection() {
  const t = useTranslations("About");
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

  /* Figma layout (node 277:8084, section 2):
     Story: heading + image + badge + Our Story heading + paragraph
     Layout: row, left=image (w~600), right=text content (w~686)
     Badge: Made in Ethiopia — layout_D0GAG6: x=45, y=44, w=187, h=54, radius: 100px
     Image: story-image, radius: 24px
  */

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-8" // Updated gap to match Figma's 32px
        style={{ maxWidth: 1664 }}
      >        {/* Left: Story Image + Badge — Figma layout_1WPN5A */}
        <div
          className="relative flex-shrink-0 w-full lg:w-[600px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div
            className="relative rounded-[24px] overflow-hidden"
            style={{ paddingBottom: "71.11%" /* 586/824 */ }}
          >
            <Image
              src={ABOUT_ASSETS.content.storyImage}
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          {/* Made in Ethiopia Badge — Figma layout_D0GAG6 */}
          <div
            className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={ABOUT_ASSETS.content.madeInEthiopia}
              alt="Made in Ethiopia"
              width={24}
              height={24}
            />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "#23B349",
              }}
            >
              {t("company.badge")}
            </span>
          </div>
        </div>

        {/* Right: Text Content — Figma layout_A6NW2R */}
        <div
          className="flex-1"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.1s",
          }}
        >
          {/* "Our Story" Heading — Display: Outfit 700, 64px, 0.96em lh, -2% ls, #23B349 */}
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "0.96em",
              letterSpacing: "-1.28px",
              color: "#23B349",
            }}
          >
            {t("company.title")}
          </h2>

          {/* Body Paragraph — style_Q6BBTW: Outfit 400, 48px, 1em lh, -1% ls, #8A8C8A */}
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(20px, 3vw, 48px)",
              lineHeight: "1em",
              letterSpacing: "-0.48px",
              color: "#8A8C8A",
            }}
          >
            {t("company.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
