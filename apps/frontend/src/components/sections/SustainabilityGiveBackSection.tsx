"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SustainabilityGiveBackSection() {
  const t = useTranslations("Sustainability");

  const cards = [
    {
      title: "Supporting Local Farmers",
      desc: "We source wheat directly from local farmers, creating stable demand and helping strengthen Ethiopia's agricultural backbone",
      image: "/assets/images/sustainability/giveback-1.jpg" // Placeholder image
    },
    {
      title: "Creating Employment",
      desc: "Our facility provides jobs for over 150–200 individuals, supporting families and contributing to local economic growth",
      image: "/assets/images/sustainability/giveback-2.jpg" // Placeholder image
    },
    {
      title: "Food Accessibility",
      desc: "We aim to deliver high-quality, affordable food products that reach more communities across the country",
      image: "/assets/images/sustainability/giveback-3.jpg" // Placeholder image
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* ── HEADING ── */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] md:text-[18px] text-[#404040]/50 block mb-4">
            We believe that business growth should benefit everyone. Through our operations and values, we actively support communities, empower local partners, and promote sustainable practices that create long-term impact.
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349]">
            How We Give Back
          </h2>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden mb-6 shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[28px] md:text-[36px] text-[#404040] mb-4">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-funnel-display)] text-[16px] md:text-[18px] text-[#404040]/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
