"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";
import Navbar from "@frontend/components/layout/Navbar";

export default function AboutHeroSection() {
  const t = useTranslations("About");

  return (
    <section className="relative w-full bg-[#E9F7ED] overflow-hidden">
      <div className="hidden lg:block relative w-full h-[792px]">
        {/* Background element */}
        <div className="absolute left-[9px] top-0 w-[435px] h-[1010px] z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover opacity-[0.15]"
          />
        </div>

        {/* Navbar */}
        <div className="absolute left-[128px] top-[17px] w-[1664px] h-[100px] z-10">
          <Navbar />
        </div>

        {/* Story heading */}
        <div className="absolute left-[502px] top-[252px] w-[916px] flex flex-col gap-8 z-[2]">
          <h1 className="font-['Funnel_Display'] font-bold text-[#0F4B1F] text-center w-full">
            <span style={{ fontSize: "180px", lineHeight: 1 }}>Our</span>
            <br />
            <span style={{ fontSize: "180px", lineHeight: 1 }}>Story</span>
          </h1>
          <p className="font-['Outfit'] font-normal text-[#333733] text-center text-[32px] leading-[1.625] max-w-2xl mx-auto">
            Nourishing everyday life while supporting sustainable growth and
            progress across Ethiopia.
          </p>
        </div>
      </div>

      {/* Mobile/Tablet version */}
      <div className="lg:hidden relative flex flex-col items-center py-20 px-6">
        <div className="absolute top-0 left-0 w-[60%] h-[400px] opacity-[0.15] z-[1]">
          <Image
            src="/assets/hero/hero-bg-element.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <h1 className="relative z-[2] text-center font-['Funnel_Display'] font-bold text-[#0F4B1F]">
          <span className="block text-5xl md:text-7xl">Our</span>
          <span className="block text-5xl md:text-7xl">Story</span>
        </h1>
        <p className="relative z-[2] mt-6 font-['Outfit'] font-normal text-[#333733] text-center text-lg md:text-xl leading-relaxed max-w-xl">
          Nourishing everyday life while supporting sustainable growth and
          progress across Ethiopia.
        </p>
      </div>
    </section>
  );
}
