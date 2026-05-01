"use client";

import { useTranslations } from "next-intl";

// Arrow icon component
const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SisterCompanySection() {
  const t = useTranslations("About");

  const companies = [
    { key: "belayabFoods" },
    { key: "anadiaCoffee" },
    { key: "longTea" },
    { key: "belayabMotors" },
    { key: "belayabDelivery" },
    { key: "goldenTulip" },
    { key: "belayabPoultry" },
    { key: "belayabGorges" },
    { key: "belayabGlobal" },
    { key: "lionstoneDistribution" },
    { key: "huaRaInternational" },
    { key: "lewiHotels" }
  ];

  return (
    <div className="w-full bg-[#23b349] py-[96px] px-[128px] lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[96px] md:py-[64px] sm:py-[48px]">
      <div className="max-w-[1664px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[80px] lg:mb-[80px] md:mb-[60px] sm:mb-[40px]">
          <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-white mb-[32px] lg:text-[64px] md:text-[48px] sm:text-[36px]">
            {t("sisterCompanies.title")}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1.5] tracking-[-0.4px] text-white max-w-3xl mx-auto lg:text-[24px] md:text-[20px] sm:text-[18px]">
            {t("sisterCompanies.description")}
          </p>
        </div>

        {/* Companies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] max-w-[1200px] mx-auto lg:gap-[32px] md:gap-[24px] sm:gap-[16px]">
          {companies.map((company, index) => (
            <div 
              key={company.key}
              className="group flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-[16px] p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20"
            >
              <span className="font-['Funnel_Display'] font-medium text-[20px] text-white lg:text-[20px] md:text-[18px] sm:text-[16px]">
                {t(`sisterCompanies.companies.${company.key}`)}
              </span>
              <div className="flex-shrink-0 ml-4">
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
