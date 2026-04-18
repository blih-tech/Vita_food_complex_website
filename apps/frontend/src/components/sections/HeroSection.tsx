"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center bg-white min-h-[100vh] pt-20"
    >
      {/* Top Background Images (the specific Figma blur sections for above the curve) */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden text-center">
        <Image src="/assets/hero/hero-bg-2-555c57.png" alt="" fill className="object-contain object-left-top opacity-50 absolute left-[-10%] top-[-5%]" />
        <Image src="/assets/hero/hero-bg-1-6b801d.png" alt="" fill className="object-contain object-right-top opacity-50 absolute right-[-10%] top-[-10%]" />
      </div>

      {/* Center Yellowish Blur right above the curve */}
      <div className="absolute top-[20%] w-[100%] max-w-[1200px] h-[600px] pointer-events-none z-0 opacity-80 mix-blend-multiply flex justify-center">
        <div className="relative w-full h-full">
          <Image src="/assets/hero/bg-center-blur.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Top Section - Text & Buttons */}
      <div className="relative z-10 w-full max-w-[1200px] px-4 flex flex-col items-center pt-12 md:pt-16 pb-12">
        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative z-20">
          <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[64px] md:text-[80px] text-[#404040] leading-[1.1] tracking-tight">
            A new stylish
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 -mt-2 sm:-mt-4">
            <Image src="/assets/hero/cookie-decoration-1.png" alt="Biscuit" width={64} height={64} className="w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] object-contain -rotate-12 animate-float" />
            <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[64px] md:text-[80px] text-[#404040] leading-[1.1] tracking-tight">
              way of
            </h2>
            <Image src="/assets/hero/strawberry.png" alt="Strawberry" width={64} height={64} className="w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] object-contain rotate-12 animate-float-delayed" />
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-[#23B349] leading-[0.9] tracking-tight mt-0 md:-mt-2">
            {t('connecting')}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[400px] sm:max-w-[500px] text-center mt-6 sm:mt-8 mb-8 sm:mb-12">
          <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#404040] leading-snug">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 items-center mb-12 sm:mb-24 z-20">
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-6 sm:px-8 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#1E9A3E] transition-all duration-300 shadow-md"
          >
            <span className="font-['Funnel_Display'] font-bold text-[14px] sm:text-[16px]">{t('ourProducts')}</span>
            <span className="text-[16px] group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/about"
            className="border-[1.5px] border-[#23B349] text-[#23B349] bg-white px-6 sm:px-8 py-2 md:py-3 rounded-full flex items-center justify-center hover:bg-green-50 transition-all"
          >
            <span className="font-['Funnel_Display'] font-bold text-[14px] sm:text-[16px]">{t('whyVita')}</span>
          </Link>
        </div>
      </div>

      {/* Massive Green Curve Background & Bottom Content */}
      <div className="relative w-full mt-4 md:mt-12 flex-grow flex flex-col items-center text-center pb-24 lg:pb-32">
        {/* Background Arc */}
        <div className="absolute top-0 left-[-25%] w-[150%] h-[150%] bg-[#23B349] rounded-t-[100%] z-0 shadow-[0_0_150px_rgba(35,179,73,0.3)]" />

        {/* Decorative Assets overlapping the curve */}
        {/* Left Side Duck */}
        <div className="absolute top-[-80px] md:top-[-200px] left-[2%] sm:left-[10%] w-[180px] sm:w-[250px] md:w-[400px] aspect-square animate-float z-20">
          <Image src="/assets/hero/doctor-duck.png" alt="Duck Character" fill className="object-contain drop-shadow-2xl" />
        </div>

        {/* Right Side Biscuits */}
        <div className="absolute top-[-60px] md:top-[-120px] right-[2%] sm:right-[5%] w-[150px] sm:w-[200px] md:w-[350px] md:h-[350px] animate-float-delayed z-20">
          <Image src="/assets/hero/biscuit-stack.png" alt="Biscuit Stack" fill className="object-contain drop-shadow-2xl" />
        </div>

        {/* Content Inside Green Area */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 flex flex-col items-center pt-[15%] sm:pt-[10%]">

          <h3 className="font-['Outfit'] font-extrabold text-[24px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-white leading-[1.2] tracking-normal max-w-[900px] mb-8 lg:mb-12 drop-shadow-sm">
            {t('secondaryQuote')}
          </h3>

          {/* Client Avatars */}
          <div className="flex items-center justify-center gap-4 bg-transparent mb-16 sm:mb-24 mt-4 w-full">
            <div className="flex -space-x-3">
              <Image src="/assets/hero/avatar-c6d.png" width={40} height={40} alt="User" className="w-10 h-10 rounded-full border-[3px] border-[#23B349] object-cover bg-white" />
              <Image src="/assets/hero/strawberry.png" width={40} height={40} alt="User" className="w-10 h-10 rounded-full border-[3px] border-[#23B349] object-cover bg-white p-1" />
              <div className="w-10 h-10 rounded-full border-[3px] border-[#23B349] bg-gray-200 flex items-center justify-center text-[#404040] font-bold text-xs z-10">
                +3
              </div>
            </div>
            <span className="font-['Outfit'] font-bold text-white text-[16px] tracking-wide">{t('ourClients')}</span>
          </div>

          {/* Family Video Area */}
          <div className="relative w-full max-w-[880px] mx-auto z-30 mt-8 sm:mt-16">

            {/* The Text Tape component fetched freshly from figma covering left side under the video */}
            <div className="absolute top-[60%] sm:top-[70%] left-[-15vw] sm:left-[-250px] w-[130vw] md:w-[130%] h-[60px] sm:h-[120px] -z-10 bg-transparent flex items-center justify-center">
              <Image src="/assets/hero/text-tape.svg" alt="Tape Decor" fill className="object-contain object-left overflow-visible" />
            </div>

            {/* Main Video Frame */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] sm:border-[8px] border-white z-10 bg-[#FFD700]">
              <Image src="/assets/hero/family-true.png" alt="Family eating biscuits" fill className="object-cover object-center" />

              {/* Video Play overlay */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-10 h-10 sm:w-14 sm:h-14 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-black/50 transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4 sm:w-6 sm:h-6 ml-1">
                  <polygon points="9 7 17 12 9 17 9 7" fill="white"></polygon>
                </svg>
              </div>
            </div>

            {/* Pop-out True Yellow Badge */}
            <div className="absolute -top-8 -right-8 sm:-top-16 sm:-right-12 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] z-30 animate-float">
              <Image src="/assets/hero/true-badge.svg" alt="Badge" fill className="object-contain drop-shadow-xl" />
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -3s;
        }
      `}</style>
    </section>
  );
}
