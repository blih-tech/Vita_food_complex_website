"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SustainabilityProcessSection() {
  const t = useTranslations("Sustainability");

  const steps = [
    {
      key: "farmers",
      title: "Farmers",
      desc: "Partnering with local producers to secure quality inputs and strengthen agriculture",
      image: "/assets/about/wheat-farming.png"
    },
    {
      key: "processing",
      title: "Processing",
      desc: "Transforming raw materials with manufacturing systems focused on safety and scale",
      image: "/assets/about/baking-biscuits.png" // Using baking image as proxy for processing
    },
    {
      key: "distribution",
      title: "Distribution",
      desc: "Delivering products efficiently to retailers, wholesalers, and markets",
      image: "/assets/footer/cta-person.png" // This is the delivery van image/proxy
    },
    {
      key: "reuse",
      title: "Reuse",
      desc: "Reducing waste with responsible recovery and value-maximizing operations",
      image: "/assets/images/why-choose-vita/products-image-2.png" // Proxy for reuse/factory
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-[1400px]">
        {/* ── HEADING ── */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] md:text-[18px] text-[#404040]/50 block mb-4">
            From farm to table, sustainability at every step
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#23B349]">
            Our Sustainable Process
          </h2>
        </div>

        {/* ── STEPS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="font-[family-name:var(--font-outfit)] font-bold text-[32px] md:text-[40px] text-[#404040] mb-6">
                {step.title}
              </h3>
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-[family-name:var(--font-funnel-display)] text-[16px] md:text-[18px] text-[#404040]/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
