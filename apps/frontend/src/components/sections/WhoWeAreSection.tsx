"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

// Figma assets for Belayab products
const imgBelayabFoods = "https://www.figma.com/api/mcp/asset/b2b5777b-2996-4707-999c-89e635b9145c";
const imgBelayabCoffee = "https://www.figma.com/api/mcp/asset/d5225015-1421-432f-a6ae-0904447fb6a7";
const imgBelayabJuice = "https://www.figma.com/api/mcp/asset/ee5c6aa7-5173-4180-ba8b-fa3ebce96f96";
const imgBelayabWater = "https://www.figma.com/api/mcp/asset/b2b5777b-2996-4707-999c-89e635b9145c";

export default function WhoWeAreSection() {
  const t = useTranslations("About");

  return (
    <div className="w-full px-[128px] py-[96px] bg-white lg:px-[128px] md:px-[64px] sm:px-[32px] lg:py-[96px] md:py-[64px] sm:py-[48px]">
      <div className="max-w-[1664px] mx-auto">
        {/* Section Header - Exact Figma positioning */}
        <div className="max-w-[1296px] mx-auto mb-[120px] lg:mb-[120px] md:mb-[80px] sm:mb-[64px]">
          <div className="text-center mb-[64px] lg:mb-[64px] md:mb-[48px] sm:mb-[32px]">
            <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a] mb-[32px] lg:text-[64px] md:text-[48px] sm:text-[36px]">
              Who—Are We
            </h2>
            <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1] tracking-[-0.4px] text-[#404040] max-w-[800px] mx-auto mb-[64px] lg:text-[24px] md:text-[20px] sm:text-[18px] lg:mb-[64px] md:mb-[48px] sm:mb-[32px]">
              {t("whoWeAre.description")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-[16px] bg-[#23b349] text-white px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] hover:bg-[#1a9a3a] transition-colors lg:text-[20px] md:text-[18px] sm:text-[16px] lg:px-[32px] md:px-[24px] sm:px-[20px]"
            >
              {t("whoWeAre.cta")}
            </Link>
          </div>
        </div>

        {/* Belayab Products Grid - Exact Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[1200px] mx-auto lg:gap-[32px] md:gap-[24px] sm:gap-[16px]">
          {/* Belayab Foods - Top Left */}
          <div className="bg-white rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-[300px] overflow-hidden lg:h-[300px] md:h-[250px] sm:h-[200px]">
              <img
                alt="Belayab foods"
                className="w-full h-full object-cover"
                src={imgBelayabFoods}
              />
            </div>
            <div className="p-6 lg:p-6 md:p-4 sm:p-3">
              <h3 className="font-['Funnel_Display'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-3 lg:text-[24px] md:text-[20px] sm:text-[18px]">
                {t("whoWeAre.products.foods.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[13px]">
                {t("whoWeAre.products.foods.description")}
              </p>
            </div>
          </div>

          {/* Belayab Coffee - Top Right */}
          <div className="bg-white rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-[300px] overflow-hidden lg:h-[300px] md:h-[250px] sm:h-[200px]">
              <img
                alt="Belayab coffee"
                className="w-full h-full object-cover"
                src={imgBelayabCoffee}
              />
            </div>
            <div className="p-6 lg:p-6 md:p-4 sm:p-3">
              <h3 className="font-['Funnel_Display'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-3 lg:text-[24px] md:text-[20px] sm:text-[18px]">
                {t("whoWeAre.products.coffee.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[13px]">
                {t("whoWeAre.products.coffee.description")}
              </p>
            </div>
          </div>

          {/* Belayab Juice - Bottom Left */}
          <div className="bg-white rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-[300px] overflow-hidden lg:h-[300px] md:h-[250px] sm:h-[200px]">
              <img
                alt="Belayab juice"
                className="w-full h-full object-cover"
                src={imgBelayabJuice}
              />
            </div>
            <div className="p-6 lg:p-6 md:p-4 sm:p-3">
              <h3 className="font-['Funnel_Display'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-3 lg:text-[24px] md:text-[20px] sm:text-[18px]">
                {t("whoWeAre.products.juice.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[13px]">
                {t("whoWeAre.products.juice.description")}
              </p>
            </div>
          </div>

          {/* Belayab Water - Bottom Right */}
          <div className="bg-white rounded-[16px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-[300px] overflow-hidden lg:h-[300px] md:h-[250px] sm:h-[200px]">
              <img
                alt="Belayab water"
                className="w-full h-full object-cover"
                src={imgBelayabWater}
              />
            </div>
            <div className="p-6 lg:p-6 md:p-4 sm:p-3">
              <h3 className="font-['Funnel_Display'] font-bold text-[24px] leading-[1.2] text-[#1a1a1a] mb-3 lg:text-[24px] md:text-[20px] sm:text-[18px]">
                {t("whoWeAre.products.water.title")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666] lg:text-[16px] md:text-[14px] sm:text-[13px]">
                {t("whoWeAre.products.water.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
