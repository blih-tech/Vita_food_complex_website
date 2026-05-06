import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

export function QualitySection() {
  const t = useTranslations("WhyChooseVita.qa");
  return (
    <section className="w-full bg-white px-6 lg:px-24 pt-8 pb-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="font-['Outfit'] font-medium text-sm text-gray-600 mb-2">
          {t("caption")}
        </p>
        <h2 className="font-['Funnel_Display'] font-black text-4xl md:text-5xl text-[#23B349] mb-16">
          {t("title")}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 w-full">
          <div className="relative h-20 w-20 md:h-28 md:w-28 transition-transform duration-300 hover:scale-105 cursor-pointer">
             <Image src="/assets/quality/figma/cert_1.png" alt="Certification" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain" />
          </div>
          <div className="relative h-20 w-40 md:h-28 md:w-48 transition-transform duration-300 hover:scale-105 cursor-pointer">
             <Image src="/assets/quality/figma/cert_efda.png" alt="EFDA" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain" />
          </div>
          <div className="relative h-20 w-28 md:h-28 md:w-36 transition-transform duration-300 hover:scale-105 cursor-pointer">
             <Image src="/assets/quality/figma/cert_lrqa.png" alt="LRQA" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain" />
          </div>
          <div className="relative h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 hover:scale-105 cursor-pointer">
             <Image src="/assets/quality/figma/cert_iso.png" alt="ISO 9001" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain" />
          </div>
          <div className="relative h-16 w-40 md:h-24 md:w-56 transition-transform duration-300 hover:scale-105 cursor-pointer">
             <Image src="/assets/quality/figma/cert_eas.png" alt="EAS" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
