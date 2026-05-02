"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function AboutCompanySection() {
  const t = useTranslations("About");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  /* Figma node 2066:2563 (Our Story heading): x=821, y=1248, CENTER
     Figma node 277:8190  (body text):         x=199, y=1398, w=1522, CENTER */

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 64 }}
    >
      <div className="mx-auto flex flex-col items-center text-center" style={{ maxWidth: 1664 }}>

        {/* "Our Story" — Display: Outfit 700, 64px, 0.96em lh, -2% ls, CENTER, #23B349 */}
        <h2
          className="mb-8"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: "0.96em",
            letterSpacing: "-1.28px",
            color: "#23B349",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {t("company.title")}
        </h2>

        {/* Body — style_A0WEOB: Outfit 400, 48px, 1em lh, -1% ls, CENTER, #8A8C8A, w=1522 */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(18px, 3vw, 48px)",
            lineHeight: "1em",
            letterSpacing: "-0.48px",
            color: "#8A8C8A",
            maxWidth: 1522,
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out 0.1s",
          }}
        >
          {t("company.description")}
        </p>
      </div>
    </section>
  );
}
