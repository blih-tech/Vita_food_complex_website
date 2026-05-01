"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

// Figma assets
const imgACleanModernVectorIllustrationOfAnElegant1 = "https://www.figma.com/api/mcp/asset/b2b5777b-2996-4707-999c-89e635b9145c";
const imgACleanModernVectorIllustrationOfAnElegant2 = "https://www.figma.com/api/mcp/asset/d5225015-1421-432f-a6ae-0904447fb6a7";
const imgACleanModernVectorIllustrationOfAnElegant3 = "https://www.figma.com/api/mcp/asset/ee5c6aa7-5173-4180-ba8b-fa3ebce96f96";

export default function WhoWeAreSection() {
  const t = useTranslations("About");

  return (
    <div className="w-full px-[128px] py-[96px] bg-white">
      <div className="max-w-[1664px] mx-auto">
        {/* Section Header - Exact Figma positioning */}
        <div className="max-w-[1296px] mx-auto mb-[120px]">
          <div className="flex items-center gap-[123.809px] mb-[64px]">
            <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a]">
              Who We Are
            </h2>
            <div className="w-[123.809px] h-px bg-[#23b349]" />
            <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a]">
              & What We Stand For
            </h2>
          </div>
          
          <div className="max-w-[1296px]">
            <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1] tracking-[-0.4px] text-[#404040] mb-[64px]">
              {t("company.description")}
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-[16px] bg-[#23b349] text-white px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] hover:bg-[#1a9a3a] transition-colors"
            >
              {t("whoWeAre.cta")}
            </Link>
          </div>
        </div>

        {/* Cards Grid - Exact Figma layout with responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] relative">
          {/* Card 1 - Top left */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden">
            <div className="relative h-[354px] overflow-hidden">
              <img
                alt="Quality Innovation"
                className="w-full h-full object-cover"
                src={imgACleanModernVectorIllustrationOfAnElegant1}
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("company.highlights.quality")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666]">
                We use state-of-the-art technology and processes to ensure every product meets the highest standards of quality and safety.
              </p>
            </div>
          </div>

          {/* Card 2 - Top right with offset */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-[60px]">
            <div className="relative h-[354px] overflow-hidden">
              <img
                alt="Local Sourcing"
                className="w-full h-full object-cover"
                src={imgACleanModernVectorIllustrationOfAnElegant2}
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("company.highlights.local")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666]">
                We partner with local farmers and suppliers to source the finest ingredients, supporting communities and ensuring freshness.
              </p>
            </div>
          </div>

          {/* Card 3 - Bottom left */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden">
            <div className="relative h-[354px] overflow-hidden">
              <img
                alt="Sustainability Focus"
                className="w-full h-full object-cover"
                src={imgACleanModernVectorIllustrationOfAnElegant3}
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("company.highlights.community")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666]">
                Our commitment to environmental responsibility drives every decision, from production to packaging and distribution.
              </p>
            </div>
          </div>

          {/* Card 4 - Bottom right with offset */}
          <div className="bg-white rounded-[24px] shadow-lg overflow-hidden lg:translate-y-[60px]">
            <div className="relative h-[354px] overflow-hidden">
              <img
                alt="Community Impact"
                className="w-full h-full object-cover"
                src={imgACleanModernVectorIllustrationOfAnElegant1}
              />
            </div>
            <div className="p-6">
              <h3 className="font-['Funnel_Display'] font-bold text-[20px] leading-[1.2] text-[#1a1a1a] mb-4">
                {t("company.highlights.innovation")}
              </h3>
              <p className="font-['Funnel_Display'] font-medium text-[16px] leading-[1.5] text-[#666]">
                We create meaningful employment opportunities and contribute to the growth and development of local communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
