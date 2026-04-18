"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full bg-[#E9F7ED] overflow-hidden pt-[100px] sm:pt-[110px] lg:pt-[120px] min-h-screen flex flex-col items-center"
    >
      {/* Background Decorative Elements using original images / svgs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-5%] w-[60%] h-[120%] opacity-80">
          <Image src="/assets/hero/hero-bg-2-555c57.png" alt="" fill className="object-contain object-left-top opacity-50 mix-blend-multiply" />
        </div>
        <div className="absolute right-[-10%] top-0 w-[50%] h-[120%] opacity-80">
          <Image src="/assets/hero/hero-bg-1-6b801d.png" alt="" fill className="object-contain object-right-top opacity-50 mix-blend-multiply" />
        </div>
      </div>

      {/* Background Wave */}
      <div className="absolute top-[30%] left-0 w-full z-0 opacity-20 pointer-events-none">
        <Image src="/assets/hero/hero-wave.svg" alt="" width={7210} height={2286} className="w-[150%] max-w-none opacity-40 text-[#23B349]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-32 flex flex-col items-center">

        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative mb-8 sm:mb-12 w-full">
          {/* Decorative badges (Strawberry) */}
          <div className="absolute left-[10%] sm:left-[20%] top-0 animate-float hidden md:block">
            <div className="relative w-16 h-16 sm:w-[81px] sm:h-[81px]">
              <Image
                src="/assets/hero/strawberry.png"
                alt=""
                fill
                className="object-cover rounded-[16px] shadow-sm transform -rotate-6"
              />
            </div>
          </div>

          {/* Generated Abstract badge */}
          <div className="absolute right-[10%] sm:right-[15%] top-10 animate-float-delayed hidden md:block z-20">
            <div className="relative w-16 h-16 sm:w-[108px] sm:h-[108px]">
              <Image
                src="/assets/hero/avatar-c6d.png"
                alt=""
                fill
                className="object-cover rounded-[24px] shadow-md transform rotate-12"
              />
            </div>
          </div>

          <h2 className="font-['Outfit'] font-extrabold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] text-[#404040] leading-[0.88] tracking-tight text-center">
            {t('stylishWay')}
          </h2>
          <h1 className="heading-hero text-[#23B349] leading-[0.88] tracking-[-0.03em] mt-2 mb-4 text-center">
            {t('connecting')}
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="max-w-[720px] text-center mb-10 sm:mb-14 px-4 w-full">
          <p className="font-['Funnel_Display'] font-medium text-[16px] sm:text-[20px] text-[#404040] leading-relaxed tracking-tight break-words whitespace-normal">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 items-center z-20">
          <Link
            href="/products"
            className="group bg-black text-white px-8 sm:px-[32px] py-3 sm:py-[16px] rounded-full flex items-center justify-center gap-4 hover:bg-gray-800 transition-all duration-300 h-[56px]"
          >
            <span className="font-['Funnel_Display'] font-medium text-[20px] sm:text-[24px] tracking-tight">{t('ourProducts')}</span>
            <span className="text-[20px] font-['Outfit'] group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/about"
            className="group border-2 border-[#23B349] text-black px-8 sm:px-[32px] py-3 sm:py-[16px] rounded-full flex items-center justify-center hover:bg-[#23B349]/5 transition-all duration-300 h-[56px]"
          >
            <span className="font-['Funnel_Display'] font-medium text-[20px] sm:text-[24px] tracking-tight">{t('whyVita')}</span>
          </Link>
        </div>
      </div>

      {/* 3 Main Images Group from Figma */}
      <div className="relative z-10 w-full max-w-[1200px] mt-16 sm:mt-24 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center">
        {/* Tiramisu Left */}
        <div className="absolute left-[0%] md:left-[5%] bottom-[10%] w-[180px] sm:w-[250px] md:w-[350px] lg:w-[450px] aspect-square animate-float z-20">
          <Image src="/assets/hero/tiramisu.png" alt="Tiramisu" fill className="object-cover rounded-full shadow-2xl" />
        </div>

        {/* AI Generated Center Image */}
        <div className="absolute top-[0%] w-[200px] sm:w-[300px] md:w-[450px] lg:w-[550px] aspect-square animate-float-delayed z-10">
          <Image src="/assets/hero/chatgpt-image.png" alt="Main Dessert" fill className="object-cover rounded-[32px] shadow-2xl rotate-[-4deg]" />
          <div className="absolute inset-0 bg-[#23B349] opacity-20 blur-[60px] -z-10 rounded-full" />
        </div>

        {/* Duck Delight Right */}
        <div className="absolute right-[0%] md:right-[5%] bottom-[20%] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px] aspect-square animate-float z-30">
          <Image src="/assets/hero/doctor-duck.png" alt="Delight" fill className="object-cover rounded-[40px] shadow-2xl rotate-12" />
        </div>
      </div>

      {/* Secondary Bottom Section */}
      <div className="relative w-full bg-[#23B349] mt-24 py-16 sm:py-24 px-4 sm:px-8 flex flex-col items-center text-center z-20">
        <div className="max-w-[1200px] flex flex-col items-center gap-12">
          <h3 className="heading-section text-white max-w-[900px] leading-[1.2]">
            {t('secondaryQuote')}
          </h3>

          {/* Avatar Badge Component */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full pr-6 pl-2 py-2">
            <div className="flex items-center -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#23B349] bg-[#E9F7ED] flex items-center justify-center text-[#23B349] font-bold z-40 text-sm">
                +3
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-[#E9F7ED] bg-[#a099b5] z-30"></div>
              <div className="w-12 h-12 rounded-full border-2 border-[#E9F7ED] bg-[#7e4627] z-20"></div>
              <div className="w-12 h-12 rounded-full border-2 border-[#E9F7ED] bg-[#9d8562] z-10"></div>
            </div>
            <span className="text-white font-['Outfit'] font-medium text-[16px] ml-4 tracking-wider">
              {t('ourClients')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
