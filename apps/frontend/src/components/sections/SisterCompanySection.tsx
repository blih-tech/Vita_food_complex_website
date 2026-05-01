"use client";

import { useTranslations } from "next-intl";

// Figma assets
const imgSisterComapny = "https://www.figma.com/api/mcp/asset/c7170dfe-be3a-42a9-8586-ae60ac032cd0";

export default function SisterCompanySection() {
  const t = useTranslations("About");

  return (
    <div className="w-full px-[128px] py-[96px] bg-gray-50">
      <div className="max-w-[1664px] mx-auto">
        {/* Sister Company Image - Full width section */}
        <div className="relative w-full h-[4720px] mb-[96px]">
          <img
            alt="Sister Companies"
            className="w-full h-full object-cover"
            src={imgSisterComapny}
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-[64px]">
          <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a] mb-8">
            {t("sisterCompanies.title")}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1.5] tracking-[-0.4px] text-[#404040] max-w-3xl mx-auto">
            {t("sisterCompanies.description")}
          </p>
        </div>

        {/* Sister Companies Content */}
        <div className="bg-white rounded-[32px] shadow-xl p-12">
          {/* This would contain the actual sister company content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for sister company cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-50 rounded-[16px] p-8 text-center">
                <div className="w-20 h-20 bg-[#23b349] rounded-full mx-auto mb-4" />
                <h3 className="font-['Funnel_Display'] font-bold text-[20px] text-[#1a1a1a] mb-2">
                  Sister Company {item}
                </h3>
                <p className="font-['Funnel_Display'] font-medium text-[16px] text-[#666]">
                  Supporting our ecosystem with complementary products and services.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
