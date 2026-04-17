"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const partners = [
  { 
    key: "unicef", 
    logo: "https://www.unicef.org/sites/default/files/unicef-logo-blue.svg",
    alt: "UNICEF Logo"
  },
  { 
    key: "wfp", 
    logo: "https://www.wfp.org/themes/custom/wfp_main/logo.svg",
    alt: "World Food Programme Logo"
  },
  { 
    key: "esa", 
    logo: "/assets/brand/vita-logo.svg", // Placeholder for Ethiopian Standards Agency
    alt: "ESA Logo"
  },
  { 
    key: "usaid", 
    logo: "https://www.usaid.gov/themes/custom/usaid/logo.svg",
    alt: "USAID Logo"
  },
  { 
    key: "moa", 
    logo: "/assets/brand/vita-logo.svg", // Placeholder for Ministry of Agriculture
    alt: "MOA Logo"
  },
];

export default function PartnerSection() {
  const t = useTranslations("Partner");

  return (
    <section id="partners" className="relative w-full bg-white py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Header content */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20 gap-4">
          <h2 className="font-['Outfit'] font-black text-[32px] sm:text-[42px] lg:text-[48px] text-[#404040] leading-tight uppercase tracking-tight">
            {t("heading")}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[16px] lg:text-[18px] text-[#404040]/60 max-w-3xl leading-relaxed">
            {t("subtext")}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="w-full flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {partners.map((partner, idx) => (
            <div 
              key={partner.key}
              className="group relative flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-[140px] h-[70px] sm:w-[160px] sm:h-[90px] lg:w-[200px] lg:h-[100px] bg-gray-50 rounded-2xl p-6 flex items-center justify-center opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                {partner.logo.startsWith('http') ? (
                   <img 
                    src={partner.logo} 
                    alt={partner.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                    <Image 
                      src={partner.logo} 
                      alt={partner.alt} 
                      width={100} 
                      height={50} 
                      className="opacity-20 object-contain"
                    />
                  </div>
                )}
              </div>
              <span className="font-['Funnel_Display'] font-bold text-[14px] lg:text-[16px] text-[#404040]/30 group-hover:text-[#23B349] transition-colors duration-300">
                {t(`list.${partner.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
