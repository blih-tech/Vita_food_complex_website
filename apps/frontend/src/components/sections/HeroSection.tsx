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
      {/* Background Glows Group - Strict Top Anchors */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">

        {/* Top Left Green Blur Core */}
        <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#23B349] blur-[140px] rounded-full opacity-60 mix-blend-multiply" />

        {/* Top Left Blurred Cookie Overlay (Node 18:1574 / hero-bg-2) */}
        <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] opacity-100 blur-[8px] z-10">
          <Image src="/assets/hero/hero-bg-2-555c57.png" alt="" fill className="object-contain object-left-top" />
        </div>

        {/* Top Right Green Blur Core */}
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#23B349] blur-[150px] rounded-full opacity-50 mix-blend-multiply" />

        {/* Top Right Blurred Texture (Node 18:1575 / hero-bg-1) */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] opacity-100 blur-[10px] z-10">
          <Image src="/assets/hero/hero-bg-1-6b801d.png" alt="" fill className="object-contain object-right-top" />
        </div>

        {/* Center Yellow/Green Brightness Backlight (bg-center-blur / Node 18:1223) */}
        <div className="absolute top-[80px] sm:top-[120px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] aspect-square opacity-80 mix-blend-multiply z-0">
          <Image src="/assets/hero/bg-center-blur.png" alt="" fill className="object-contain object-center" />
        </div>

      </div>

      {/* Top Section - Titles & CTAs */}
      <div className="relative z-20 w-full max-w-[1200px] px-4 flex flex-col items-center pt-8 md:pt-16 pb-12">
        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative">
          <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[70px] md:text-[96px] text-[#404040] leading-[1.0] tracking-tight drop-shadow-sm">
            A new stylish
          </h2>
          <div className="flex items-center justify-center gap-1 sm:gap-4 -mt-1 sm:-mt-2">
            <div className="relative w-[36px] h-[36px] sm:w-[64px] sm:h-[64px] -rotate-12 animate-float shrink-0">
              <Image src="/assets/hero/fish-cookie.png" alt="Fish Cookie" fill className="object-contain" priority />
            </div>
            <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[70px] md:text-[96px] text-[#404040] leading-[1.0] tracking-tight drop-shadow-sm">
              way of
            </h2>
            <div className="relative w-[36px] h-[36px] sm:w-[64px] sm:h-[64px] rotate-12 animate-float-delayed shrink-0">
              <Image src="/assets/hero/strawberry.png" alt="Strawberry" fill className="object-contain" priority />
            </div>
          </div>

          <h1 className="font-['Outfit'] font-extrabold text-[64px] sm:text-[120px] md:text-[180px] lg:text-[200px] text-[#23B349] leading-[0.8] tracking-[-0.03em] mt-2 drop-shadow-md">
            {t('connecting')}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[400px] sm:max-w-[550px] text-center mt-8 sm:mt-12 mb-8 sm:mb-12">
          <p className="font-['Funnel_Display'] font-medium text-[15px] sm:text-[18px] md:text-[20px] text-[#404040] leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 items-center z-30 pb-12 sm:pb-24">
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 sm:px-10 py-3 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#1E9A3E] transition-all duration-300 shadow-xl shadow-green-600/20 active:scale-95"
          >
            <span className="font-['Funnel_Display'] font-bold text-[16px] sm:text-[20px]">{t('ourProducts')}</span>
            <span className="text-[18px] group-hover:translate-x-1 transition-transform font-bold">→</span>
          </Link>

          <Link
            href="/about"
            className="border-[2px] border-[#23B349] text-[#23B349] bg-white/50 backdrop-blur-sm px-8 sm:px-10 py-3 md:py-4 rounded-full flex items-center justify-center hover:bg-green-50 transition-all shadow-md active:scale-95"
          >
            <span className="font-['Funnel_Display'] font-bold text-[16px] sm:text-[20px]">{t('whyVita')}</span>
          </Link>
        </div>
      </div>

      {/* Massive Green Block Wrapper (Drops down dynamically matching CSS arc top) */}
      <div className="relative w-full mt-[12vw] sm:mt-[15vw] z-10 flex-grow flex flex-col items-center bg-[#23B349] px-4 pt-12 sm:pt-24 pb-24 lg:pb-32">

        {/* Native CSS Mountain Edge - Overflowing absolutely up out of this div */}
        <div className="absolute top-[-12vw] sm:top-[-15vw] left-[-25%] w-[150%] h-[15vw] sm:h-[15.5vw] bg-[#23B349] rounded-t-[100%] border-none outline-none pointer-events-none -z-10 shadow-[0_-5px_15px_rgba(35,179,73,0.1)]" />

        {/* Floating Doctor Duck - Positioned accurately over the green mountain edge */}
        <div className="absolute top-[-10vw] sm:top-[-15vw] md:top-[-10vw] left-[2%] sm:left-[8%] md:left-[10%] w-[150px] sm:w-[220px] md:w-[350px] aspect-square animate-float z-30 drop-shadow-2xl">
          <Image src="/assets/hero/doctor-duck.png" alt="Duck Character" fill className="object-contain object-bottom" />
        </div>

        {/* Floating Biscuit Stack - Positioned accurately over the green mountain edge */}
        <div className="absolute top-[-6vw] sm:top-[-10vw] md:top-[-8vw] right-[0%] sm:right-[5%] md:right-[8%] w-[120px] sm:w-[180px] md:w-[300px] aspect-square animate-float-delayed z-30 drop-shadow-2xl">
          <Image src="/assets/hero/biscuit-stack.png" alt="Biscuit Stack" fill className="object-contain object-bottom" />
        </div>

        {/* White Inspirational Quote */}
        <h3 className="font-['Outfit'] font-extrabold text-[22px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-white leading-[1.25] max-w-[900px] text-center mb-8 lg:mb-12 relative z-20">
          {t('secondaryQuote')}
        </h3>

        {/* Client Avatars */}
        <div className="flex items-center justify-center gap-4 bg-transparent mb-12 sm:mb-20 w-full hover:scale-105 transition-transform duration-300 cursor-default relative z-20">
          <div className="flex -space-x-3 drop-shadow-md">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#23B349] bg-white overflow-hidden">
              <Image src="/assets/hero/avatar-c6d.png" alt="Client" fill className="object-cover" />
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#23B349] bg-white overflow-hidden p-0.5">
              <Image src="/assets/hero/strawberry.png" alt="Client" fill className="object-contain" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-[#23B349] bg-gray-100 flex items-center justify-center text-[#23B349] font-black text-[14px] z-10">
              +3
            </div>
          </div>
          <span className="font-['Outfit'] font-bold text-white text-[15px] sm:text-[18px] tracking-wide">{t('ourClients')}</span>
        </div>

        {/* Video Layout Center */}
        <div className="relative w-full max-w-[950px] mx-auto z-30">

          {/* Red Tape Underlayer */}
          <div className="absolute top-[60%] sm:top-[70%] left-[-10vw] sm:left-[-150px] w-[120vw] md:w-[130%] h-[50px] sm:h-[100px] -z-10 flex items-center justify-center mix-blend-normal">
            <Image src="/assets/hero/text-tape.svg" alt="Tape Decor" fill className="object-contain object-left overflow-visible" />
          </div>

          {/* Frame */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.1/1] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border-[6px] sm:border-[10px] border-white group cursor-pointer bg-[#FFD700]">
            <Image src="/assets/hero/family-true.png" alt="Family Video" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />

            {/* Play Button */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-[16px] sm:rounded-[20px] flex items-center justify-center backdrop-blur-md hover:bg-white/40 transition border border-white/50 shadow-lg group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5 sm:w-7 sm:h-7 ml-1">
                <polygon points="9 6 18 12 9 18 9 6" fill="white"></polygon>
              </svg>
            </div>
          </div>

          {/* Yellow Badge */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-8 w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] z-40 animate-float pointer-events-none drop-shadow-xl hover:animate-spin-slow">
            <Image src="/assets/hero/true-badge.svg" alt="Quality Badge" fill className="object-contain" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
