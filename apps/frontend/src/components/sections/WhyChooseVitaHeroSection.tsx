"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";

// Figma assets - pixel-perfect local copies from node 486-2896
const imgRectangle = "/assets/images/why-choose-vita/hero-bg-pattern.jpg";
const imgRectangle1 = "/assets/images/why-choose-vita/hero-bg-overlay.jpg";
const imgGeminiGeneratedImageTz1T8Tz1T8Tz1T8T1 = "/assets/images/why-choose-vita/hero-main-updated.jpg";
const imgSoundMuteLight = "/assets/images/why-choose-vita/sound-icon-updated.png";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <div className="relative size-full" data-node-id="486:2896" data-name="Hero section">
      {/* Main background image - Node 364:3163 */}
      <div 
        className="absolute" 
        style={{
          height: '934px',
          left: 0,
          top: 0,
          width: '1920px'
        }} 
        data-node-id="364:3163" 
        data-name="steptodown.com263483_upscayl_4x_realesrgan-x4plus 1"
      />

      {/* Hero background composition - Node 486:2898 */}
      <div 
        className="absolute contents" 
        style={{
          left: '-11px',
          top: '-47px'
        }} 
        data-node-id="486:2898" 
        data-name="Hero background"
      >
        {/* Background pattern element - Node 364:3310 */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            height: '1180.918px',
            left: 'calc(58.33% + 98.21px)',
            top: '-47px',
            width: '723.803px'
          }}
        >
          <div className="flex-none rotate-180">
            <div 
              className="relative overflow-hidden pointer-events-none"
              style={{
                height: '1180.918px',
                width: '723.803px'
              }} 
              data-node-id="364:3310" 
              data-name="Rectangle"
            >
              <img
                alt=""
                className="absolute max-w-none"
                src={imgRectangle}
                style={{
                  position: 'absolute',
                  height: '-201.14%',
                  left: '59.07%',
                  top: '158.67%',
                  width: '-332.86%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Background overlay with effects - Node 364:3311 */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            height: '1125.277px',
            left: '-11px',
            top: '8.64px',
            width: '425.017px'
          }}
        >
          <div className="flex-none -scale-y-100">
            <div 
              className="relative pointer-events-none"
              style={{
                filter: 'blur(13.55px)',
                height: '1125.277px',
                width: '425.017px'
              }} 
              data-node-id="364:3311" 
              data-name="Rectangle"
            >
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute max-w-none"
                    src={imgRectangle1}
                    style={{
                      position: 'absolute',
                      height: '202.84%',
                      left: '-45.74%',
                      top: '-21.68%',
                      width: '230.77%'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#23b349] mix-blend-screen" />
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    backgroundImage: "linear-gradient(73.61234608838203deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)" 
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image container - Node 364:3367 */}
      <div 
        className="absolute" 
        style={{
          height: '647px',
          left: '-61px',
          top: '737px',
          width: '2057.723px'
        }} 
        data-node-id="364:3367" 
        data-name="Hero image"
      >
        {/* Dark tagline background - Node 364:3368 */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            height: '322.73px',
            left: 'calc(50% + 2.06px)',
            top: '148.3px',
            transform: 'translateX(-50%)',
            width: '2052.554px'
          }}
        >
          <div className="flex-none rotate-[-6.1deg]">
            <div 
              className="relative"
              style={{
                backgroundColor: '#404040',
                height: '105.185px',
                width: '2053px'
              }} 
              data-node-id="364:3368" 
              data-name="Tagline Container" 
            />
          </div>
        </div>

        {/* Yellow tagline text - Node 364:3369 */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            height: '290.888px',
            left: 'calc(50% + 1.42px)',
            top: '161.1px',
            transform: 'translateX(-50%)',
            width: '2054.879px'
          }}
        >
          <div className="flex-none rotate-[-5.02deg]">
            <div 
              className="relative overflow-clip text-center whitespace-nowrap"
              style={{
                backgroundColor: '#ffec19',
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 800,
                height: '111.526px',
                lineHeight: '0.88',
                fontStyle: 'normal',
                fontSize: '96px',
                color: '#db4426',
                letterSpacing: '-0.384px',
                width: '2053px'
              }} 
              data-node-id="364:3369" 
              data-name="Tagline Container"
            >
              <p 
                className="absolute"
                style={{
                  left: '643.46px',
                  top: 'calc(50% - 51.4px)',
                  transform: 'translateX(-50%)'
                }} 
                data-node-id="364:3370"
              >
                A new stylish way of Connecting!
              </p>
              <p 
                className="absolute"
                style={{
                  left: '1325.75px',
                  top: 'calc(50% - 47.63px)',
                  transform: 'translateX(-50%)'
                }} 
                data-node-id="364:3371"
              >
                A new stylish way of Connecting!
              </p>
            </div>
          </div>
        </div>

        {/* Main hero image frame - Node 364:3372 */}
        <div 
          className="absolute border-4 border-solid overflow-hidden"
          style={{
            borderColor: '#ffffff',
            height: '647px',
            left: 'calc(50% + 3px)',
            transform: 'translateX(-50%)',
            borderRadius: '52px',
            top: '4px',
            width: '1380px',
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
          }} 
          data-name="Container"
        />

        {/* Inner hero image container - Node 364:3373 */}
        <div 
          className="absolute border-4 border-solid overflow-clip"
          style={{
            borderColor: '#ffffff',
            height: '647px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '48px',
            top: 0,
            width: '1380px',
            backgroundImage: "linear-gradient(90deg, rgb(64, 64, 64) 0%, rgb(64, 64, 64) 100%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1380 647\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(97.581 0 0 52.368 138 582.3)\\'><stop stop-color=\\'rgba(116,255,56,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(103,247,62,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(89,238,68,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(74,230,72,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(56,222,76,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(31,214,80,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
          }} 
          data-node-id="364:3373" 
          data-name="Container"
        >
          {/* Main hero image - Node 364:3374 */}
          <div 
            className="absolute"
            style={{
              height: '768px',
              left: '50%',
              top: '-64.5px',
              transform: 'translateX(-50%)',
              width: '1408px'
            }} 
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
            className="absolute"
            style={{
              height: '63px',
              left: 'calc(50% - 631.5px)',
              top: 'calc(50% - 262px)',
              transform: 'translate(-50%, -50%)',
              width: '63px'
            }} 
            data-node-id="364:3375" 
            data-name="sound_mute_light"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none"
              src={imgSoundMuteLight}
            />
          </div>
        </div>
      </div>

      {/* Hero text content - Node 364:3313 */}
      <div 
        className="absolute flex flex-col gap-[48px] items-center"
        style={{
          height: 'auto',
          left: 'calc(50% - 2.5px)',
          top: '304px',
          transform: 'translateX(-50%)',
          width: '899px'
        }} 
        data-node-id="364:3313" 
        data-name="hearder text"
      >
        {/* Text container - Node 364:3314 */}
        <div 
          className="flex flex-col gap-[32px] items-center relative shrink-0 text-center w-full"
          data-node-id="364:3314" 
          data-name="Container"
        >
          {/* Main headline - Node 364:3315 */}
          <h1 
            className="relative shrink-0 whitespace-pre-wrap"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              height: '142px',
              lineHeight: '0.9',
              letterSpacing: '-1.6px',
              color: '#23b349',
              fontSize: '80px',
              width: '624px'
            }} 
            data-node-id="364:3315"
          >
            {t("hero.headline")}
          </h1>

          {/* Description text - Node 364:3316 */}
          <div 
            className="flex flex-col justify-center relative shrink-0 whitespace-pre-wrap"
            style={{
              fontFamily: "'Funnel Display', sans-serif",
              fontWeight: 500,
              lineHeight: '0',
              letterSpacing: '-0.096px',
              color: '#404040',
              fontSize: '24px',
              width: '894px'
            }} 
            data-node-id="364:3316"
          >
            <p style={{ lineHeight: 'normal' }}>
              {t("hero.description")}
            </p>
          </div>
        </div>

        {/* Button row - Node 364:3317 */}
        <div 
          className="flex gap-[24px] items-center relative shrink-0"
          data-node-id="364:3317" 
          data-name="Button Row"
        >
          {/* Primary button - Node 364:3318 */}
          <Link
            href="/products"
            className="flex gap-[16px] items-center justify-center relative shrink-0 text-white whitespace-nowrap"
            style={{
              backgroundColor: '#23b349',
              height: '56px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
              borderRadius: '999px'
            }} 
            data-node-id="364:3318"
          >
            <p 
              className="relative shrink-0"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 500,
                lineHeight: 'normal',
                fontStyle: 'normal',
                fontSize: '24px',
                letterSpacing: '-0.096px'
              }} 
              data-node-id="I364:3318;18:1725"
            >
              Explore products
            </p>
            <div 
              className="flex flex-col justify-center relative shrink-0"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                lineHeight: '0',
                fontSize: '20px',
                letterSpacing: '-0.08px'
              }} 
              data-node-id="I364:3318;19:1779"
            >
              <p style={{ lineHeight: 'normal' }}>→</p>
            </div>
          </Link>

          {/* Secondary button - Node 364:3319 */}
          <Link
            href="/contact"
            className="flex gap-[16px] items-center justify-center relative shrink-0 whitespace-nowrap"
            style={{
              border: '1px solid #1fd650',
              height: '56px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
              borderRadius: '999px'
            }} 
            data-node-id="364:3319"
          >
            <p 
              className="relative shrink-0"
              style={{
                fontFamily: "'Funnel Display', sans-serif",
                fontWeight: 500,
                lineHeight: 'normal',
                fontStyle: 'normal',
                fontSize: '24px',
                letterSpacing: '-0.096px',
                color: '#000000'
              }} 
              data-node-id="I364:3319;18:1725"
            >
              {`Contact US `}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
