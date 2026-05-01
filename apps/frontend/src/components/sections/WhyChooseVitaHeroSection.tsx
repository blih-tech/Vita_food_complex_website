"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

// Figma assets from MCP
const imgRectangle = "https://www.figma.com/api/mcp/asset/fb2e1be5-6251-4b1b-bb3b-eb9c7fa2d3a9";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/7ed61dd9-f290-4260-8552-3214e1468bab";
const imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1 = "https://www.figma.com/api/mcp/asset/4f7be253-8a49-4faf-a2d7-604d1530374d";
const imgSoundMuteLight = "https://www.figma.com/api/mcp/asset/50ed4656-e8cd-4651-a455-32cdc5cb27ed";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="relative size-full" data-node-id="486:2896" data-name="Hero section">
      {/* Main background image - Node 364:3163 */}
      <div 
        className="absolute h-[934px] left-0 top-0 w-[1920px]" 
        data-node-id="364:3163" 
        data-name="steptodown.com263483_upscayl_4x_realesrgan-x4plus 1"
      />

      {/* Hero background composition - Node 486:2898 */}
      <div 
        className="absolute contents left-[-11px] top-[-47px]" 
        data-node-id="486:2898" 
        data-name="Hero background"
      >
        {/* Background pattern element - Node 364:3310 */}
        <div 
          className="absolute flex h-[1180.918px] items-center justify-center left-[calc(58.33%+98.21px)] top-[-47px] w-[723.803px]"
        >
          <div className="flex-none rotate-180">
            <div 
              className="h-[1180.918px] relative w-[723.803px] overflow-hidden pointer-events-none" 
              data-node-id="364:3310" 
              data-name="Rectangle"
            >
              <img
                alt=""
                className="absolute h-[-201.14%] left-[59.07%] max-w-none top-[158.67%] w-[-332.86%]"
                src={imgRectangle}
              />
            </div>
          </div>
        </div>

        {/* Background overlay with effects - Node 364:3311 */}
        <div 
          className="absolute flex h-[1125.277px] items-center justify-center left-[-11px] top-[8.64px] w-[425.017px]"
        >
          <div className="-scale-y-100 flex-none">
            <div 
              className="blur-[13.55px] h-[1125.277px] relative w-[425.017px] pointer-events-none" 
              data-node-id="364:3311" 
              data-name="Rectangle"
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute h-[202.84%] left-[-45.74%] max-w-none top-[-21.68%] w-[230.77%]"
                    src={imgRectangle1}
                  />
                </div>
                <div className="absolute bg-[#23b349] inset-0 mix-blend-screen" />
                <div 
                  className="absolute inset-0" 
                  style={{ backgroundImage: "linear-gradient(73.61234608838203deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image section - Node 364:3367 */}
      <div 
        className="absolute h-[647px] left-[-61px] top-[737px] w-[2057.723px]" 
        data-node-id="364:3367" 
        data-name="Hero image"
      >
        {/* Tagline background - Node 364:3368 */}
        <div 
          className="-translate-x-1/2 absolute flex h-[322.73px] items-center justify-center left-[calc(50%+2.06px)] top-[148.3px] w-[2052.554px]"
        >
          <div className="flex-none rotate-[-6.1deg]">
            <div 
              className="bg-[#404040] h-[105.185px] relative w-[2053px]" 
              data-node-id="364:3368" 
              data-name="Tagline Container" 
            />
          </div>
        </div>

        {/* Tagline text - Node 364:3369 */}
        <div 
          className="-translate-x-1/2 absolute flex h-[290.888px] items-center justify-center left-[calc(50%+1.42px)] top-[161.1px] w-[2054.879px]"
        >
          <div className="flex-none rotate-[-5.02deg]">
            <div 
              className="bg-[#ffec19] font-['Funnel_Display'] font-extrabold h-[111.526px] leading-[0.88] not-italic overflow-clip relative text-[96px] text-[#db4426] text-center tracking-[-0.384px] w-[2053px] whitespace-nowrap" 
              data-node-id="364:3369" 
              data-name="Tagline Container"
            >
              <p 
                className="-translate-x-1/2 absolute left-[643.46px] top-[calc(50%-51.4px)]" 
                data-node-id="364:3370"
              >
                A new stylish way of Connecting!
              </p>
              <p 
                className="-translate-x-1/2 absolute left-[1325.75px] top-[calc(50%-47.63px)]" 
                data-node-id="364:3371"
              >
                A new stylish way of Connecting!
              </p>
            </div>
          </div>
        </div>

        {/* Main image container with gradient border - Node 364:3372 */}
        <div 
          className="-translate-x-1/2 absolute border-4 border-white border-solid h-[647px] left-[calc(50%+3px)] rounded-[52px] top-[4px] w-[1380px]" 
          data-node-id="364:3372" 
          data-name="Container"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
          }} 
        />

        {/* Main image container - Node 364:3373 */}
        <div 
          className="-translate-x-1/2 absolute border-4 border-white border-solid h-[647px] left-1/2 overflow-clip rounded-[48px] top-0 w-[1380px]" 
          data-node-id="364:3373" 
          data-name="Container"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
          }}
        >
          {/* Main hero image - Node 364:3374 */}
          <div 
            className="-translate-x-1/2 absolute h-[768px] left-1/2 top-[-64.5px] w-[1408px]" 
            data-node-id="364:3374" 
            data-name="Gemini_Generated_Image_tz1t8tz1t8tz1t8t 1"
          >
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
              src={imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1} 
            />
          </div>

          {/* Sound icon - Node 364:3375 */}
          <div 
            className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-631.5px)] size-[63px] top-[calc(50%-262px)]" 
            data-node-id="364:3375" 
            data-name="sound_mute_light"
          >
            <img 
              alt="" 
              className="absolute block inset-0 max-w-none size-full" 
              src={imgSoundMuteLight} 
            />
          </div>
        </div>
      </div>

      {/* Header text content - Node 364:3313 */}
      <div 
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-[calc(50%-2.5px)] top-[304px] w-[899px]" 
        data-node-id="364:3313" 
        data-name="hearder text"
      >
        {/* Text container - Node 364:3314 */}
        <div 
          className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 text-center w-full" 
          data-node-id="364:3314" 
          data-name="Container"
        >
          {/* Headline - Node 364:3315 */}
          <h1 
            className="font-['Outfit'] font-extrabold h-[142px] leading-[0.9] relative shrink-0 text-[80px] text-[#23b349] tracking-[-1.6px] w-[624px]" 
            data-node-id="364:3315"
          >
            {t("hero.headline")}
          </h1>

          {/* Subtitle - Node 364:3316 */}
          <div 
            className="flex flex-col font-['Funnel_Display'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[#404040] tracking-[-0.096px] w-[894px]" 
            data-node-id="364:3316"
          >
            <p className="leading-none whitespace-pre-wrap">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>

        {/* Button row - Node 364:3317 */}
        <div 
          className="content-stretch flex gap-[24px] items-center relative shrink-0" 
          data-node-id="364:3317" 
          data-name="Button Row"
        >
          {/* Primary button - Node 364:3318 */}
          <Link
            href="/products"
            className="bg-[#23b349] content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 text-white whitespace-nowrap" 
            data-node-id="364:3318"
          >
            <p 
              className="font-['Funnel_Display'] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] tracking-[-0.096px]" 
              data-node-id="I364:3318;18:1725"
            >
              {t("hero.primaryCta")}
            </p>
            <div 
              className="flex flex-col font-['Outfit'] font-normal justify-center leading-[0] relative shrink-0 text-[20px] tracking-[-0.08px]" 
              data-node-id="I364:3318;19:1779"
            >
              <p className="leading-[normal]">→</p>
            </div>
          </Link>

          {/* Secondary button - Node 364:3319 */}
          <Link
            href="/about"
            className="border border-[#1fd650] border-solid content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0" 
            data-node-id="364:3319"
          >
            <p 
              className="font-['Funnel_Display'] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.096px] whitespace-nowrap" 
              data-node-id="I364:3319;18:1725"
            >
              {t("hero.secondaryCta")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
