"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "@frontend/components/layout/Navbar";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative w-full bg-[#E9F7ED] overflow-hidden">
      {/* Desktop Layout - Figma: 1920x1010px */}
      <div className="hidden lg:block relative w-full h-[1010px]">
        {/* Background element - Figma: x=9, y=0, 435x1010 */}
        <div className="absolute left-[9px] top-0 w-[435px] h-full z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover opacity-[0.15]"
          />
        </div>

        {/* Navbar - Figma: x=128, y=17, 1664x100 */}
        <div className="absolute left-[128px] top-[17px] w-[1664px] h-[100px] z-10">
          <Navbar />
        </div>

        {/* "Biscuits" text - Figma: x=483, y=117, 250px */}
        <h1
          className="absolute left-[483px] top-[117px] font-['Funnel_Display'] font-bold text-[#23B349] text-center select-none z-[3]"
          style={{
            fontSize: "clamp(120px, 13vw, 250px)",
            lineHeight: 1.25,
          }}
        >
          {t("headline1")}
        </h1>

        {/* "Flour You" text - Figma: x=280, y=632, 300px */}
        <h2
          className="absolute left-[280px] top-[632px] font-['Funnel_Display'] font-bold text-[#333733] text-center select-none z-[2]"
          style={{
            fontSize: "clamp(140px, 15.6vw, 300px)",
            lineHeight: 1.25,
          }}
        >
          {t("headline2")}
        </h2>

        {/* Product image - Figma: x=266.82, y=17, 1331.79x1088.43 */}
        <div className="absolute left-[266px] top-[17px] w-[1331px] h-[1088px] z-[4]">
          <Image
            src="/assets/hero/chewata-ginger.png"
            alt="Vita Products"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Cookie decoration 1 - Figma: x=948, y=595, blurred 4px */}
        <div
          className="absolute left-[948px] top-[595px] w-[278px] h-[296px] z-[5]"
          style={{ filter: "blur(4px)" }}
        >
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Cookie decoration 2 - Figma: x=566, y=274, blurred 4px */}
        <div
          className="absolute left-[566px] top-[274px] w-[333px] h-[329px] z-[5]"
          style={{ filter: "blur(4px)" }}
        >
          <Image
            src="/assets/hero/cookie-decoration-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Description text - Figma: x=1534, y=473, 20px */}
        <p
          className="absolute left-[1534px] top-[473px] font-['Outfit'] font-normal text-[#333733] z-[6]"
          style={{
            fontSize: "20px",
            lineHeight: 1.26,
          }}
        >
          {t("description")}
        </p>

        {/* Badge - Figma: x=1534, y=603 */}
        <div className="absolute left-[1534px] top-[603px] w-[258px] z-[6]">
          <Image
            src="/assets/hero/texted-badge.svg"
            alt={t("badge")}
            width={258}
            height={60}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden relative w-full pt-[52.6%]">
        <div className="absolute inset-0">
          <div className="absolute left-[9px] top-0 w-[435px] h-full z-[1] opacity-[0.15]">
            <Image
              src="/assets/hero/hero-bg-element.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <h1
            className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none z-[3]"
            style={{
              top: "11.6%",
              fontSize: "clamp(80px, 13vw, 200px)",
              lineHeight: 1.25,
            }}
          >
            {t("headline1")}
          </h1>

          <h2
            className="absolute w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none z-[2]"
            style={{
              top: "62.6%",
              fontSize: "clamp(100px, 15.6vw, 250px)",
              lineHeight: 1.25,
            }}
          >
            {t("headline2")}
          </h2>

          <div
            className="absolute z-[4]"
            style={{
              left: "13.9%",
              top: "1.7%",
              width: "69.4%",
              paddingBottom: "56.6%",
            }}
          >
            <Image
              src="/assets/hero/chewata-ginger.png"
              alt="Vita Products"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div
            className="absolute z-[5]"
            style={{
              left: "29.5%",
              top: "27.1%",
              width: "17.4%",
              paddingBottom: "17.4%",
              filter: "blur(4px)",
            }}
          >
            <Image
              src="/assets/hero/cookie-decoration-1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div
            className="absolute z-[5]"
            style={{
              left: "49.4%",
              top: "59%",
              width: "14.5%",
              paddingBottom: "14.5%",
              filter: "blur(4px)",
            }}
          >
            <Image
              src="/assets/hero/cookie-decoration-1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <p
            className="absolute font-['Outfit'] font-normal text-[#333733] z-[6]"
            style={{
              left: "79.9%",
              top: "46.8%",
              width: "13.5%",
              fontSize: "clamp(11px, 1.04vw, 20px)",
              lineHeight: 1.26,
            }}
          >
            {t("description")}
          </p>

          <div
            className="absolute z-[6]"
            style={{ left: "79.9%", top: "59.7%", width: "13.4%" }}
          >
            <Image
              src="/assets/hero/texted-badge.svg"
              alt={t("badge")}
              width={258}
              height={60}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col items-center overflow-hidden bg-[#E9F7ED]">
        <div className="absolute left-0 top-0 w-[60%] h-[60%] opacity-60 z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <h1
          className="relative z-[3] w-full text-center font-['Funnel_Display'] font-bold text-[#23B349] leading-none select-none pt-8 px-4"
          style={{
            fontSize: "clamp(52px, 19vw, 120px)",
            lineHeight: 1.2,
          }}
        >
          {t("headline1")}
        </h1>

        <div className="relative z-[4] w-full flex justify-center -mt-4 -mb-4">
          <Image
            src="/assets/hero/chewata-ginger.png"
            alt="Vita Products"
            width={400}
            height={300}
            className="w-[88%] max-w-[400px] object-contain"
            priority
          />
          <div
            className="absolute bottom-[10%] right-[4%] w-[22%] aspect-square z-[5]"
            style={{ filter: "blur(3px)" }}
          >
            <Image
              src="/assets/hero/cookie-decoration-1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2
          className="relative z-[3] w-full text-center font-['Funnel_Display'] font-bold text-[#333733] leading-none select-none px-2 -mt-3"
          style={{
            fontSize: "clamp(56px, 21vw, 140px)",
            lineHeight: 1.2,
          }}
        >
          {t("headline2")}
        </h2>

        <div className="relative z-[6] flex flex-col items-center gap-3 px-6 pt-5 pb-8 w-full max-w-sm">
          <p className="font-['Outfit'] font-normal text-[#333733]/80 text-center text-sm leading-relaxed">
            {t("description")}
          </p>
          <Image
            src="/assets/hero/texted-badge.svg"
            alt={t("badge")}
            width={160}
            height={80}
            className="w-40"
          />
        </div>
      </div>
    </section>
  );
}
