import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function CareersHeroSection() {
  const t = useTranslations("Careers");

  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingTop: "clamp(100px, 12vw, 152px)", paddingBottom: 80 }}
    >
      {/* Background Shapes — Figma nodes 2546:10637 & 2546:10638 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Left Shape */}
        <div 
          className="absolute left-[-10%] top-[10%] w-[60%] h-[80%] opacity-60 blur-[27px]"
          style={{
            background: "linear-gradient(79deg, rgba(35, 179, 73, 0) 31%, rgba(35, 179, 73, 0.8) 95%)",
            borderRadius: "50%",
            transform: "rotate(-15deg)"
          }}
        />
        {/* Right Shape */}
        <div 
          className="absolute right-[-10%] bottom-[10%] w-[60%] h-[80%] opacity-60 blur-[27px]"
          style={{
            background: "linear-gradient(79deg, rgba(35, 179, 73, 0) 31%, rgba(35, 179, 73, 0.8) 95%)",
            borderRadius: "50%",
            transform: "rotate(165deg)"
          }}
        />
      </div>

      {/* Hero content — layout_TEXN57: column, CENTER, gap:48px, width:947px */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 947, gap: "clamp(32px, 5vw, 48px)" }}
      >
        {/* Inner — layout_5LPPOP: column, CENTER, gap:24px */}
        <div className="flex flex-col items-center" style={{ gap: 24 }}>
          {/* "Build Your Future with Vita" — Headline (179:449): Outfit 800, 80px, 0.9em lh, -2% ls, CENTER, #23B349 */}
          <h1
            className="font-[family-name:var(--font-outfit)] font-extrabold text-[#23B349]"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: "0.9em",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle — style_74OUNN: Outfit 500, 24px, 1em lh, -0.4% ls, CENTER, #333733, width:898px */}
          <p
            className="font-[family-name:var(--font-outfit)] font-medium text-[#333733]"
            style={{
              fontSize: "clamp(16px, 2.2vw, 24px)",
              lineHeight: "1.2",
              letterSpacing: "-0.004em",
              maxWidth: 898,
              textAlign: "center",
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>

        {/* CTA Button — layout_4A5MP9: row, center, gap:16px, padding:16px 32px, height:56px, radius:999px, bg:#23B349 */}
        <Link
          href="#open-positions"
          className="inline-flex items-center justify-center rounded-full bg-[#23B349] transition-all hover:scale-105 hover:bg-[#1fa041]"
          style={{
            gap: 16,
            padding: "16px 32px",
            height: 56,
            boxShadow: "0 4px 12px rgba(35,179,73,0.3)",
          }}
        >
          {/* "View Open Positions" — Button 1: Funnel Display 500, 24px, 1.25em lh, -0.4% ls, white */}
          <span
            className="font-[family-name:var(--font-funnel-display)] font-medium text-white"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: "1.25em",
              letterSpacing: "-0.004em",
            }}
          >
            {t("hero.cta")}
          </span>
          {/* "→" — Button 2: Outfit 400, 20px, 1.26em lh, white */}
          <span
            className="font-[family-name:var(--font-outfit)] font-normal text-white"
            style={{
              fontSize: 20,
              lineHeight: "1.26em",
            }}
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
