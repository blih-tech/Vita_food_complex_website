"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const OWNERS = [
  { id: 1, name: "Owner Name 1", role: "Co-Founder", image: "/assets/about/owner-1.png" },
  { id: 2, name: "Owner Name 2", role: "CEO", image: "/assets/about/owner-2.png" },
  { id: 3, name: "Owner Name 3", role: "Operations Director", image: "/assets/about/owner-3.png" },
  { id: 4, name: "Owner Name 4", role: "Marketing Head", image: "/assets/about/owner-4.png" },
  { id: 5, name: "Owner Name 5", role: "Production Manager", image: "/assets/about/owner-5.png" },
  { id: 6, name: "Owner Name 6", role: "Financial Controller", image: "/assets/about/owner-6.png" },
  { id: 7, name: "Owner Name 7", role: "Quality Specialist", image: "/assets/about/owner-7.png" },
  { id: 8, name: "Owner Name 8", role: "HR Manager", image: "/assets/about/owner-8.png" },
  { id: 9, name: "Owner Name 9", role: "Community Lead", image: "/assets/about/owner-9.png" },
];

export default function AboutOwnersSection() {
  const t = useTranslations("About.owners");
  const [activeOwner, setActiveOwner] = useState<number | null>(null);

  return (
    <section className="bg-[#E9F7ED] py-24 lg:py-32">
      <div className="max-w-[1664px] mx-auto px-6 lg:px-[128px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-24">
          <h2 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-5xl lg:text-[80px] leading-[1] tracking-[-1.28px]">
            {t("title")}
          </h2>
          <p className="font-['Outfit'] font-medium text-[#333733] text-lg lg:text-[24px] leading-relaxed opacity-70 max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Owners Accordion Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-6 h-[600px]">
          {OWNERS.map((owner) => (
            <div
              key={owner.id}
              onMouseEnter={() => setActiveOwner(owner.id)}
              onMouseLeave={() => setActiveOwner(null)}
              className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${
                activeOwner === owner.id ? "flex-[4]" : "flex-[1]"
              }`}
            >
              <Image
                src={owner.image}
                alt={owner.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay with info */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#0F4B1F]/90 via-transparent to-transparent transition-opacity duration-500 flex flex-col justify-end p-8 ${
                activeOwner === owner.id ? "opacity-100" : "opacity-0"
              }`}>
                <h3 className="font-['Outfit'] font-bold text-white text-2xl lg:text-3xl mb-1">
                  {owner.name}
                </h3>
                <p className="font-['Outfit'] font-medium text-white/80 text-lg">
                  {owner.role}
                </p>
              </div>

              {/* Collapsed label */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                activeOwner === owner.id ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}>
                <div className="rotate-90 whitespace-nowrap font-['Outfit'] font-bold text-[#0F4B1F]/40 text-xl tracking-widest uppercase">
                  {owner.id < 10 ? `0${owner.id}` : owner.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
