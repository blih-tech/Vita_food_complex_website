"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Navbar from "@frontend/components/layout/Navbar";

export default function AboutHeroSection() {
  const t = useTranslations("About");

  return (
    <section className="relative w-full bg-[#E9F7ED] overflow-hidden">
      {/* Desktop/Tablet Hero (1920px design) */}
      <div className="hidden md:block relative w-full min-h-screen lg:min-h-[792px]">
        {/* Background decorative elements - positioned from left */}
        <div className="absolute left-0 top-0 w-[22.656%] h-full z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover opacity-[0.15]"
          />
        </div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Hero Content - centered */}
        <div className="relative z-[2] flex flex-col items-center justify-center px-8 lg:px-[128px] pt-8 lg:pt-12">
          {/* Our Story Heading */}
          <h1 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-center w-full max-w-[916px]">
            <span className="block text-[80px] md:text-[120px] lg:text-[180px] leading-[1]">
              Our
            </span>
            <span className="block text-[80px] md:text-[120px] lg:text-[180px] leading-[1]">
              Story
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 lg:mt-12 font-['Outfit'] font-normal text-[#333733] text-center text-lg md:text-2xl lg:text-[32px] leading-[1.625] max-w-[916px]">
            Nourishing everyday life while supporting sustainable growth and
            progress across Ethiopia.
          </p>
        </div>
      </div>

      {/* Mobile Hero (< 768px) */}
      <div className="md:hidden relative flex flex-col items-center">
        {/* Background decorative element */}
        <div className="absolute top-0 left-0 w-[60%] h-[400px] opacity-[0.15] z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Navbar */}
        <div className="relative z-10 w-full">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-[2] flex flex-col items-center px-6 pt-6 pb-12">
          <h1 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-center">
            <span className="block text-[48px] sm:text-[60px] leading-[1]">
              Our
            </span>
            <span className="block text-[48px] sm:text-[60px] leading-[1]">
              Story
            </span>
          </h1>
          <p className="mt-6 font-['Outfit'] font-normal text-[#333733] text-center text-base leading-relaxed max-w-[340px]">
            Nourishing everyday life while supporting sustainable growth and
            progress across Ethiopia.
          </p>
        </div>
      </div>
    </section>
  );
}
