"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

// Figma assets
const imgImage = "https://www.figma.com/api/mcp/asset/b5b7823f-9e81-4434-ae18-517095403d5f";
const imgImage1 = "https://www.figma.com/api/mcp/asset/f057c027-434f-4798-b046-ddf64391a6dd";

export default function OurProductSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="w-full px-[128px] py-[96px] bg-gray-50">
      <div className="max-w-[1664px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[120px]">
          <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a]">
            {t("products.title")}
          </h2>
        </div>

        {/* Product Cards Grid - Exact Figma layout with responsive design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          {/* Product Card 1 */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden">
            <div className="relative h-[400px] overflow-hidden">
              <img
                alt="Premium Biscuits"
                className="w-full h-full object-cover"
                src={imgImage}
              />
              {/* Overlay badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg">
                <div className="w-8 h-8 bg-[#23b349] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">NEW</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-['Funnel_Display'] font-bold text-[32px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("products.biscuits.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[18px] leading-[1.5] text-[#666] mb-6">
                {t("products.biscuits.description")}
              </p>
              <button className="bg-[#23b349] text-white px-6 py-3 rounded-full font-['Funnel_Display'] font-medium text-[16px] hover:bg-[#1a9a3a] transition-colors">
                {t("products.biscuits.cta")}
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden">
            <div className="relative h-[400px] overflow-hidden">
              <img
                alt="Quality Flour Products"
                className="w-full h-full object-cover"
                src={imgImage1}
              />
              {/* Overlay badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg">
                <div className="w-8 h-8 bg-[#ffec19] rounded-full flex items-center justify-center">
                  <span className="text-[#db4426] text-xs font-bold">TOP</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-['Funnel_Display'] font-bold text-[32px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("products.flour.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[18px] leading-[1.5] text-[#666] mb-6">
                {t("products.flour.description")}
              </p>
              <button className="bg-[#23b349] text-white px-6 py-3 rounded-full font-['Funnel_Display'] font-medium text-[16px] hover:bg-[#1a9a3a] transition-colors">
                {t("products.flour.cta")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
