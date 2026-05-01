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
    <div className="relative w-full min-h-screen lg:min-h-[1400px] md:min-h-[1200px] sm:min-h-[1000px]" data-node-id="486:2896" data-name="Hero section">
      {/* Main background image - Responsive */}
      <div 
        className="absolute inset-0 w-full h-full lg:h-[934px] md:h-[800px] sm:h-[600px]" 
        data-node-id="364:3163" 
        data-name="steptodown.com263483_upscayl_4x_realesrgan-x4plus 1"
      />

      {/* Hero background composition - Responsive */}
      <div 
        className="absolute inset-0 lg:left-[-11px] lg:top-[-47px] md:left-[-5px] md:top-[-20px] sm:left-0 sm:top-0" 
        data-node-id="486:2898" 
        data-name="Hero background"
      >
        {/* Background pattern element - Responsive */}
        <div 
          className="absolute flex items-center justify-center lg:h-[1180.918px] lg:w-[723.803px] lg:left-[calc(58.33%+98.21px)] lg:top-[-47px] md:h-[800px] md:w-[500px] md:left-[50%] md:top-[-20px] sm:h-[400px] sm:w-[300px] sm:left-[50%] sm:top-0"
        >
          <div className="flex-none rotate-180">
            <div 
              className="relative overflow-hidden pointer-events-none lg:h-[1180.918px] lg:w-[723.803px] md:h-[800px] md:w-[500px] sm:h-[400px] sm:w-[300px]" 
              data-node-id="364:3310" 
              data-name="Rectangle"
            >
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover lg:h-[-201.14%] lg:left-[59.07%] lg:max-w-none lg:top-[158.67%] lg:w-[-332.86%] md:h-[-150%] md:left-[50%] md:max-w-none md:top-[120%] md:w-[-250%] sm:h-[-100%] sm:left-[50%] sm:max-w-none sm:top-[80%] sm:w-[-150%]"
                src={imgRectangle}
              />
            </div>
          </div>
        </div>

        {/* Background overlay with effects - Responsive */}
        <div 
          className="absolute flex items-center justify-center lg:h-[1125.277px] lg:w-[425.017px] lg:left-[-11px] lg:top-[8.64px] md:h-[800px] md:w-[300px] md:left-[-5px] md:top-[20px] sm:h-[400px] sm:w-[200px] sm:left-0 sm:top-[50px]"
        >
          <div className="-scale-y-100 flex-none">
            <div 
              className="relative pointer-events-none lg:blur-[13.55px] lg:h-[1125.277px] lg:w-[425.017px] md:blur-[8px] md:h-[800px] md:w-[300px] sm:blur-[4px] sm:h-[400px] sm:w-[200px]" 
              data-node-id="364:3311" 
              data-name="Rectangle"
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute lg:h-[202.84%] lg:left-[-45.74%] lg:max-w-none lg:top-[-21.68%] lg:w-[230.77%] md:h-[150%] md:left-[-30%] md:max-w-none md:top-[-15%] md:w-[180%] sm:h-[100%] sm:left-[-20%] sm:max-w-none sm:top-[-10%] sm:w-[120%]"
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

      {/* Hero image section - Responsive */}
      <div 
        className="absolute lg:h-[647px] lg:left-[-61px] lg:top-[737px] lg:w-[2057.723px] md:h-[500px] md:left-[-30px] md:top-[500px] md:w-[1500px] sm:h-[300px] sm:left-0 sm:top-[400px] sm:w-[100%]" 
        data-node-id="364:3367" 
        data-name="Hero image"
      >
        {/* Tagline background - Responsive */}
        <div 
          className="-translate-x-1/2 absolute flex items-center justify-center lg:h-[322.73px] lg:w-[2052.554px] lg:left-[calc(50%+2.06px)] lg:top-[148.3px] md:h-[200px] md:w-[1500px] md:left-[calc(50%+1px)] md:top-[100px] sm:h-[120px] sm:w-[90%] sm:left-[calc(50%+0.5px)] sm:top-[60px]"
        >
          <div className="flex-none lg:rotate-[-6.1deg] md:rotate-[-4deg] sm:rotate-[-2deg]">
            <div 
              className="bg-[#404040] relative lg:h-[105.185px] lg:w-[2053px] md:h-[60px] md:w-[1500px] sm:h-[40px] sm:w-[90%]" 
              data-node-id="364:3368" 
              data-name="Tagline Container" 
            />
          </div>
        </div>

        {/* Tagline text - Responsive */}
        <div 
          className="-translate-x-1/2 absolute flex items-center justify-center lg:h-[290.888px] lg:w-[2054.879px] lg:left-[calc(50%+1.42px)] lg:top-[161.1px] md:h-[180px] md:w-[1500px] md:left-[calc(50%+0.7px)] md:top-[110px] sm:h-[100px] sm:w-[90%] sm:left-[calc(50%+0.3px)] sm:top-[70px]"
        >
          <div className="flex-none lg:rotate-[-5.02deg] md:rotate-[-3deg] sm:rotate-[-1deg]">
            <div 
              className="bg-[#ffec19] font-['Funnel_Display'] font-extrabold not-italic overflow-clip text-center whitespace-nowrap lg:h-[111.526px] lg:leading-[0.88] lg:text-[96px] lg:tracking-[-0.384px] lg:w-[2053px] md:h-[60px] md:leading-[0.9] md:text-[48px] md:tracking-[-0.2px] md:w-[1500px] sm:h-[40px] sm:leading-[1] sm:text-[24px] sm:tracking-[-0.1px] sm:w-[90%]" 
              style={{ color: "#db4426" }}
              data-node-id="364:3369" 
              data-name="Tagline Container"
            >
              <p 
                className="lg:-translate-x-1/2 lg:absolute lg:left-[643.46px] lg:top-[calc(50%-51.4px)] md:-translate-x-1/2 md:absolute md:left-[300px] md:top-[calc(50%-30px)] sm:-translate-x-1/2 sm:absolute sm:left-[45%] sm:top-[calc(50%-20px)]"
                data-node-id="364:3370"
              >
                <span className="lg:block md:block sm:hidden">A new stylish way of Connecting!</span>
                <span className="lg:hidden md:hidden sm:block">Stylish Connection!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main image container with gradient border - Responsive */}
        <div 
          className="-translate-x-1/2 absolute border-4 border-white border-solid lg:h-[647px] lg:left-[calc(50%+3px)] lg:rounded-[52px] lg:top-[4px] lg:w-[1380px] md:h-[500px] md:left-[calc(50%+2px)] md:rounded-[40px] md:top-[2px] md:w-[1000px] sm:h-[300px] sm:left-[calc(50%+1px)] sm:rounded-[30px] sm:top-[1px] sm:w-[90%]" 
          data-node-id="364:3372" 
          data-name="Container"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
          }} 
        />

        {/* Main image container - Responsive */}
        <div 
          className="-translate-x-1/2 absolute border-4 border-white border-solid overflow-clip lg:h-[647px] lg:left-1/2 lg:rounded-[48px] lg:top-0 lg:w-[1380px] md:h-[500px] md:left-1/2 md:rounded-[35px] md:top-0 md:w-[1000px] sm:h-[300px] sm:left-1/2 sm:rounded-[25px] sm:top-0 sm:w-[90%]" 
          data-node-id="364:3373" 
          data-name="Container"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
          }}
        >
          {/* Main hero image - Responsive */}
          <div 
            className="-translate-x-1/2 absolute lg:h-[768px] lg:left-1/2 lg:top-[-64.5px] lg:w-[1408px] md:h-[600px] md:left-1/2 md:top-[-50px] md:w-[1100px] sm:h-[400px] sm:left-1/2 sm:top-[-30px] sm:w-[95%]" 
            data-node-id="364:3374" 
            data-name="Gemini_Generated_Image_tz1t8tz1t8tz1t8t 1"
          >
            <img 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              src={imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1} 
            />
          </div>

          {/* Sound icon - Responsive */}
          <div 
            className="-translate-x-1/2 -translate-y-1/2 absolute lg:size-[63px] lg:left-[calc(50%-631.5px)] lg:top-[calc(50%-262px)] md:size-[40px] md:left-[calc(50%-400px)] md:top-[calc(50%-180px)] sm:size-[30px] sm:left-[calc(50%-200px)] sm:top-[calc(50%-100px)]" 
            data-node-id="364:3375" 
            data-name="sound_mute_light"
          >
            <img 
              alt="" 
              className="absolute block inset-0 w-full h-full object-contain" 
              src={imgSoundMuteLight} 
            />
          </div>
        </div>
      </div>

      {/* Header text content - Responsive */}
      <div 
        className="absolute content-stretch flex flex-col gap-[48px] items-center lg:left-[calc(50%-2.5px)] lg:top-[304px] lg:w-[899px] md:left-[calc(50%-2px)] md:top-[200px] md:w-[700px] sm:left-[calc(50%-1px)] sm:top-[150px] sm:w-[90%]" 
        data-node-id="364:3313" 
        data-name="hearder text"
      >
        {/* Text container - Responsive */}
        <div 
          className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 text-center w-full lg:gap-[32px] md:gap-[24px] sm:gap-[16px]" 
          data-node-id="364:3314" 
          data-name="Container"
        >
          {/* Headline - Responsive */}
          <h1 
            className="font-['Outfit'] font-extrabold leading-[0.9] relative shrink-0 text-center lg:h-[142px] lg:text-[80px] lg:tracking-[-1.6px] lg:w-[624px] md:h-[100px] md:text-[60px] md:tracking-[-1.2px] md:w-[500px] sm:h-[80px] sm:text-[40px] sm:tracking-[-0.8px] sm:w-[300px]" 
            style={{ color: "#23b349" }}
            data-node-id="364:3315"
          >
            <span className="lg:block md:block sm:block">A Better Choice</span>
            <span className="lg:block md:block sm:block">for Every Table</span>
          </h1>

          {/* Subtitle - Responsive */}
          <div 
            className="flex flex-col font-['Funnel_Display'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-center lg:text-[24px] lg:tracking-[-0.096px] lg:w-[894px] md:text-[20px] md:tracking-[-0.08px] md:w-[600px] sm:text-[16px] sm:tracking-[-0.06px] sm:w-[90%]" 
            style={{ color: "#404040" }}
            data-node-id="364:3316"
          >
            <p className="leading-none whitespace-pre-wrap lg:px-0 md:px-4 sm:px-2">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>

        {/* Button row - Responsive */}
        <div 
          className="content-stretch flex gap-[24px] items-center relative shrink-0 lg:flex-row md:flex-row md:gap-[20px] sm:flex-col sm:gap-[16px] sm:px-4" 
          data-node-id="364:3317" 
          data-name="Button Row"
        >
          {/* Primary button - Responsive */}
          <Link
            href="/products"
            className="bg-[#23b349] content-stretch flex gap-[16px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 text-white whitespace-nowrap lg:h-[56px] lg:px-[32px] lg:py-[16px] md:h-[48px] md:px-[24px] md:py-[12px] sm:h-[40px] sm:px-[20px] sm:py-[10px] lg:text-[24px] lg:tracking-[-0.096px] md:text-[20px] md:tracking-[-0.08px] sm:text-[16px] sm:tracking-[-0.06px]" 
            data-node-id="364:3318"
          >
            <p 
              className="font-['Funnel_Display'] font-medium leading-[normal] not-italic relative shrink-0 tracking-[-0.096px]" 
              data-node-id="I364:3318;18:1725"
            >
              {t("hero.primaryCta")}
            </p>
            <div 
              className="flex flex-col font-['Outfit'] font-normal justify-center leading-[0] relative shrink-0 lg:text-[20px] lg:tracking-[-0.08px] md:text-[18px] md:tracking-[-0.07px] sm:text-[14px] sm:tracking-[-0.05px]" 
              data-node-id="I364:3318;19:1779"
            >
              <p className="leading-[normal]">→</p>
            </div>
          </Link>

          {/* Secondary button - Responsive */}
          <Link
            href="/about"
            className="border border-[#1fd650] border-solid content-stretch flex gap-[16px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 whitespace-nowrap lg:h-[56px] lg:px-[32px] lg:py-[16px] md:h-[48px] md:px-[24px] md:py-[12px] sm:h-[40px] sm:px-[20px] sm:py-[10px] lg:text-[24px] lg:tracking-[-0.096px] md:text-[20px] md:tracking-[-0.08px] sm:text-[16px] sm:tracking-[-0.06px]" 
            data-node-id="364:3319"
          >
            <p 
              className="font-['Funnel_Display'] font-medium leading-[normal] not-italic relative shrink-0 text-black tracking-[-0.096px]" 
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
