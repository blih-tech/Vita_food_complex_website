"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const LOGOS = [
  { name: "Yab Feed", src: "/assets/sister/belayab.svg" },
  { name: "Golden Tulip", src: "/assets/sister/golden-tulip.svg" },
  { name: "Long Tea", src: "/assets/sister/foods.svg" },
  { name: "Lewis Retails", src: "/assets/sister/lewis.svg" },
];

export default function SisterCompaniesSection() {
  const t = useTranslations("About");

  return (
    <section
      className="px-4 sm:px-6 lg:px-[128px]"
      style={{ background: "#FFFFFF", paddingBottom: 80 }}
    >
      <div className="mx-auto flex flex-col items-center" style={{ maxWidth: 1664, gap: 32 }}>
        {/* Horizontal divider */}
        <div style={{ width: "100%", maxWidth: 1400, height: 1, background: "#E8E8E8" }} />

        {/* Logo row */}
        <div className="w-full">
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "40px 64px" }}
          >
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center"
                style={{ width: 180, height: 60 }}
              >
                <div className="relative w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
