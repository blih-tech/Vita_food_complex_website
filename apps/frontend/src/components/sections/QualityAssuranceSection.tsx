"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

// Figma assets
const imgEthiopianAccreditationServiceEas1 = "https://www.figma.com/api/mcp/asset/53466621-6252-4e83-892b-91eac1e581dd";
const imgLogoPng1 = "https://www.figma.com/api/mcp/asset/21782677-9757-459e-9c9d-c8cc2718e9b1";
const imgIso9001Cmyk1 = "https://www.figma.com/api/mcp/asset/90f6b9b1-fc65-4c60-82a8-749a1e2f22ac";
const img6798B7Fe93F49D346D6F8Eb7PngwingCom11 = "https://www.figma.com/api/mcp/asset/97f535c8-7378-4184-8cb2-d7d0868d5491";

export default function QualityAssuranceSection() {
  const t = useTranslations("About");

  return (
    <div className="w-full px-[128px] py-[96px] bg-white">
      <div className="max-w-[1024px] mx-auto">
        {/* Section Header - Exact Figma positioning */}
        <div className="text-center mb-[64px]">
          <div className="mb-8">
            <span className="font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] text-[#23b349] uppercase">
              {t("qualityAssurance.subtitle")}
            </span>
          </div>
          <h2 className="font-['Outfit'] font-bold text-[64px] leading-[0.96] tracking-[-2px] text-[#1a1a1a] mb-8">
            {t("qualityAssurance.title")}
          </h2>
          <p className="font-['Funnel_Display'] font-medium text-[24px] leading-[1.5] tracking-[-0.4px] text-[#404040] max-w-3xl mx-auto">
            {t("qualityAssurance.description")}
          </p>
        </div>

        {/* Certification Images Gallery - Exact Figma positioning */}
        <div className="flex justify-center items-center gap-8 mb-[64px] flex-wrap">
          <div className="relative w-[201.734px] h-[201.734px]">
            <img
              alt="Ethiopian Accreditation Service"
              className="w-full h-full object-contain"
              src={imgEthiopianAccreditationServiceEas1}
            />
          </div>
          
          <div className="relative w-[418.880px] h-[151.646px]">
            <img
              alt="Quality Certification"
              className="w-full h-full object-contain"
              src={imgLogoPng1}
            />
          </div>
          
          <div className="relative w-[248.231px] h-[266.510px]">
            <img
              alt="ISO 9001 Certification"
              className="w-full h-full object-contain"
              src={imgIso9001Cmyk1}
            />
          </div>
          
          <div className="relative w-[199.737px] h-[201.735px]">
            <img
              alt="Additional Certification"
              className="w-full h-full object-contain"
              src={img6798B7Fe93F49D346D6F8Eb7PngwingCom11}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#23b349] text-white px-8 py-4 rounded-full font-['Funnel_Display'] font-medium text-[20px] tracking-[-0.4px] hover:bg-[#1a9a3a] transition-colors">
            {t("qualityAssurance.cta")}
          </button>
        </div>
      </div>
    </div>
  );
}
