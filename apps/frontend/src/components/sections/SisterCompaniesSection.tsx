"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@frontend/navigation";

const LOGOS = [
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.png", width: 240, height: 240 },
  { name: "Long Tea", src: "/assets/sister/long-tea.png", width: 200, height: 150 }, // Approximation
  { name: "Lewis Retails", src: "/assets/sister/lewis-logo.png", width: 300, height: 100 }, // Approximation
  { name: "Belayab foods", src: "/assets/sister/foods.png", width: 200, height: 80 },
];

// Fallback for missing logos in array if needed
const ALL_LOGOS = [
  { name: "Belayab Foods", src: "/assets/sister/foods.png" },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.png" },
  { name: "Long Tea", src: "/assets/sister/cables.png" }, // Placeholder for Long Tea if missing
  { name: "Lewis Retails", src: "/assets/sister/lewis-logo.png" },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About.sisterCompanies");

  return (
    <section className="bg-white py-16 md:py-24 px-4 flex flex-col items-center">
      <div className="mx-auto max-w-[1400px] w-full flex flex-col items-center text-center">
        {/* Label — Sister Companies */}
        <span className="font-[family-name:var(--font-funnel-display)] font-semibold text-[14px] md:text-[16px] text-[#404040]/50 uppercase tracking-widest mb-4">
          {t("label")}
        </span>

        {/* Title — Different Experiences */}
        <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[56px] text-[#23B349] mb-12">
          {t("title")}
        </h2>

        {/* Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-32 mb-16">
          {ALL_LOGOS.map((logo) => (
            <div key={logo.name} className="relative w-[150px] md:w-[200px] h-[80px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] md:text-[16px] text-[#404040]/60 max-w-[600px] mb-8">
          {t("description")}
        </p>

        {/* Button */}
        <Link
          href="/sister-companies"
          className="bg-[#23B349] text-white px-8 py-3 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[16px] hover:bg-[#1fa041] transition-colors"
        >
          {t("cta")} +
        </Link>
      </div>
    </section>
  );
}
