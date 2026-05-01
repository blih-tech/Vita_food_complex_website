"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

// Figma assets
const imgVector9 = "https://www.figma.com/api/mcp/asset/7b99463b-e9c9-4030-b186-1fab3db1d79f";
const imgVector = "https://www.figma.com/api/mcp/asset/ab179f06-fc97-4274-a7b0-0ef075938ecd";
const imgGroup = "https://www.figma.com/api/mcp/asset/92941550-ff07-43e2-8ef3-6e4b2014939d";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/58fd133d-efcf-44c2-b418-4a77b81e5252";
const imgRectangle = "https://www.figma.com/api/mcp/asset/de528cd5-506b-4c56-9e3a-db998b2086e1";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/b373ab8a-0dba-459a-bd6a-1815656dc5da";
const imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1 = "https://www.figma.com/api/mcp/asset/c49cd403-a0be-474c-8cc6-6dfaa209dd31";
const imgSoundMuteLight = "https://www.figma.com/api/mcp/asset/3168e41e-c0ea-4e7c-aac4-018c2d10c9d8";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-50 lg:min-h-screen">
      {/* Hero Background - Exact Figma positioning */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          {/* Background gradient overlays */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(73.61234608838203deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)"
            }}
          />
          <div className="absolute inset-0 bg-[#23b349] mix-blend-screen" />
          
          {/* Background image - Exact Figma dimensions */}
          <div className="absolute inset-0">
            <img
              alt="Hero background"
              className="w-full h-full object-cover"
              src={imgRectangle1}
              style={{
                height: '202.84%',
                left: '-45.74%',
                top: '-21.68%',
                width: '230.77%',
                position: 'absolute'
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero Image Container - Exact Figma positioning */}
      <div className="absolute left-1/2 top-[737px] -translate-x-1/2 w-[2057.723px] h-[647px]">
        <div className="relative w-full h-full">
          {/* Dark tagline background - Exact positioning */}
          <div className="absolute left-[calc(50%+2.06px)] top-[148.3px] -translate-x-1/2 w-[2052.554px] h-[322.73px]">
            <div 
              className="w-full h-full bg-[#404040] rotate-[-6.1deg]"
              style={{ height: '105.185px' }}
            />
          </div>
          
          {/* Yellow tagline text - Exact positioning */}
          <div className="absolute left-[calc(50%+1.42px)] top-[161.1px] -translate-x-1/2 w-[2054.879px] h-[290.888px]">
            <div 
              className="bg-[#ffec19] font-['Funnel_Display'] font-extrabold text-[96px] leading-[0.88] text-[#db4426] text-center tracking-[-0.384px] whitespace-nowrap rotate-[-5.02deg] overflow-hidden"
              style={{ height: '111.526px' }}
            >
              <p className="absolute left-[643.46px] top-[calc(50%-51.4px)] -translate-x-1/2">
                A new stylish way of Connecting!
              </p>
              <p className="absolute left-[1325.75px] top-[calc(50%-47.63px)] -translate-x-1/2">
                A new stylish way of Connecting!
              </p>
            </div>
          </div>

          {/* Main hero image container */}
          <div className="absolute left-[calc(50%+3px)] top-[4px] w-[1380px] h-[647px] border-4 border-white rounded-[52px] overflow-hidden">
            <div className="relative w-full h-full">
              {/* Inner gradient container */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
                }}
              />
              
              {/* Dark overlay container */}
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
                }}
              >
                {/* Main hero image */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1408px] h-[768px] -top-[64px]">
                  <img
                    alt="Vita products showcase"
                    className="w-full h-full object-cover"
                    src={imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1}
                  />
                </div>
                
                {/* Sound mute icon */}
                <div className="absolute left-[calc(50%-631.5px)] top-[calc(50%-262px)] w-[63px] h-[63px] -translate-x-1/2 -translate-y-1/2">
                  <img
                    alt="Sound icon"
                    className="w-full h-full"
                    src={imgSoundMuteLight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content - Exact Figma positioning */}
      <div className="absolute left-[calc(50%-2.5px)] top-[304px] -translate-x-1/2 w-[899px] z-10 lg:w-[899px] md:w-[90%] sm:w-[95%] px-4 md:px-0">
        <div className="flex flex-col gap-[48px] items-center text-center md:gap-[32px]">
          {/* Main Headline */}
          <div className="flex flex-col gap-[32px] items-center w-full md:gap-[24px]">
            <h1 className="font-['Outfit'] font-extrabold h-[142px] leading-[0.9] tracking-[-1.6px] text-[#23b349] text-[80px] w-[624px] lg:text-[80px] md:text-[64px] sm:text-[48px] lg:w-[624px] md:w-full sm:w-full lg:h-[142px] md:h-auto sm:h-auto">
              {t("hero.headline")}
            </h1>
            
            {/* Description */}
            <p className="font-['Funnel_Display'] font-medium leading-[1.2] text-[#404040] tracking-[-0.096px] w-[894px] whitespace-pre-line lg:w-[894px] md:w-full sm:w-full lg:text-[inherit] md:text-[18px] sm:text-[16px]">
              {t("hero.description")}
            </p>
          </div>

          {/* Button Row - Exact Figma spacing */}
          <div className="flex gap-[24px] items-center md:flex-col md:gap-[16px] md:w-full">
            {/* Primary Button */}
            <Link
              href="/products"
              className="bg-[#23b349] text-white flex items-center gap-[16px] h-[56px] px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] hover:bg-[#1a9a3a] transition-colors whitespace-nowrap lg:text-[24px] md:text-[20px] sm:text-[18px] md:w-full md:justify-center"
            >
              Explore products
              <span className="font-['Outfit'] font-normal text-[20px] tracking-[-0.08px] lg:text-[20px] md:text-[18px] sm:text-[16px]">→</span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="border border-[#1fd650] text-black flex items-center gap-[16px] h-[56px] px-[32px] py-[16px] rounded-[999px] font-['Funnel_Display'] font-medium text-[24px] tracking-[-0.096px] hover:bg-[#1fd650] hover:text-white transition-colors whitespace-nowrap lg:text-[24px] md:text-[20px] sm:text-[18px] md:w-full md:justify-center"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
