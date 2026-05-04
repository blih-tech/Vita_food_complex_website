"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function WhyChooseVitaWhoAreWeSection() {
  const t = useTranslations("WhyChooseVita");

  const features = [
    {
      title: "Quality You Can Trust",
      desc: "Produced with strict standards to ensure consistency, freshness, and satisfaction",
      image: "/assets/about/baking-biscuits.png"
    },
    {
      title: "Reliable Supply",
      desc: "Strong manufacturing and distribution systems that keep products available",
      image: "/assets/company/snack-bag.png"
    },
    {
      title: "Innovation Driven",
      desc: "Modern packaging, new product ideas, and evolving solutions for future markets",
      image: "/assets/about/wheat-farming.png" // Approximation
    },
    {
      title: "Community Impact",
      desc: "Creating jobs, supporting farmers, and contributing to national growth",
      image: "/assets/images/why-choose-vita/card-image-2.jpg" // Approximation from previous code
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-[1400px] flex flex-col items-center">
        
        {/* Giant Headline — "Who — Are We" */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <h2 className="font-[family-name:var(--font-funnel-display)] font-bold text-[60px] md:text-[100px] lg:text-[140px] text-[#404040]/30 leading-none tracking-tighter">
            Who
          </h2>
          <div className="w-[80px] md:w-[150px] h-[4px] bg-[#23B349] rounded-full" />
          <h2 className="font-[family-name:var(--font-funnel-display)] font-extrabold text-[60px] md:text-[100px] lg:text-[140px] text-[#23B349] leading-none tracking-tighter">
            Are We
          </h2>
        </div>

        {/* Description */}
        <p className="font-[family-name:var(--font-outfit)] font-medium text-[16px] md:text-[20px] lg:text-[24px] text-[#404040]/70 text-center max-w-[1000px] mb-12 leading-relaxed">
          {t("whoWeAre.description")}
        </p>

        {/* Button */}
        <Link
          href="/about"
          className="bg-[#23B349] text-white px-8 py-3 rounded-full font-bold text-[16px] mb-24 hover:scale-105 transition-transform"
        >
          More About Vita
        </Link>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col items-center">
                <h4 className="font-[family-name:var(--font-outfit)] font-bold text-[20px] md:text-[22px] text-[#404040] mb-3">
                  {f.title}
                </h4>
                <p className="font-[family-name:var(--font-funnel-display)] text-[14px] md:text-[16px] text-[#404040]/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
