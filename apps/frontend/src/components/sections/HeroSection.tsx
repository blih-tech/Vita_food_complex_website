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
      {/* Background Glows Group */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-white">
         
         {/* Top Left Edge Blur Blob + Cookie (Node 18:1574) */}
         <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-[#23B349] blur-[140px] rounded-full opacity-40" />
         <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[425px] h-[400px] md:h-[600px] opacity-90 mix-blend-multiply blur-[8px]">
            <Image src="/assets/hero/hero-bg-2-555c57.png" alt="Left Cookie Overlay" fill className="object-contain object-left-top" />
         </div>

         {/* Top Right Background Glow Elements (Node 18:1575) */}
         <div className="absolute top-[-10%] right-[-20%] w-[700px] h-[700px] bg-[#23B349] blur-[150px] rounded-full opacity-30" />
         <div className="absolute top-[-5%] right-[-10%] w-[400px] md:w-[723px] h-[500px] md:h-[800px] opacity-90 blur-[10px]">
            <Image src="/assets/hero/hero-bg-1-6b801d.png" alt="Right Edge Glow" fill className="object-contain object-right-top" />
         </div>

         {/* Center Main Text Yellow Blur Backlight (Node 18:1223 mapped as bg-center-blur) */}
         <div className="absolute top-[10%] sm:top-[12%] left-1/2 -translate-x-1/2 w-[600px] md:w-[763px] aspect-square opacity-70 mix-blend-multiply">
            <Image src="/assets/hero/bg-center-blur.png" alt="Center Brightness Aura" fill className="object-contain" />
         </div>

      </div>

      {/* Top Section - Titles & CTAs */}
      <div className="relative z-10 w-full max-w-[1200px] px-4 flex flex-col items-center pt-8 md:pt-16 pb-8">
        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative z-20">
          <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[64px] md:text-[80px] text-[#404040] leading-[1.1] tracking-tight">
            A new stylish
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-5 -mt-2 sm:-mt-4">
            <Image src="/assets/hero/fish-cookie.png" alt="Fish Cookie" width={64} height={64} className="w-[36px] h-[36px] sm:w-[64px] sm:h-[64px] object-contain -rotate-12 animate-float" />
            <h2 className="font-['Outfit'] font-extrabold text-[40px] sm:text-[64px] md:text-[80px] text-[#404040] leading-[1.1] tracking-tight">
              way of
            </h2>
            <Image src="/assets/hero/strawberry.png" alt="Strawberry" width={64} height={64} className="w-[36px] h-[36px] sm:w-[64px] sm:h-[64px] object-contain rotate-12 animate-float-delayed" />
          </div>
          
          <h1 className="font-['Outfit'] font-extrabold text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-[#23B349] leading-[0.9] tracking-tight mt-0 md:-mt-2 drop-shadow-sm">
            {t('connecting')}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[400px] sm:max-w-[500px] text-center mt-6 sm:mt-8 mb-8 sm:mb-12 z-20">
          <p className="font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#404040] leading-snug">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 items-center mb-8 z-20">
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-6 sm:px-8 py-2 md:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#1E9A3E] transition-all duration-300 shadow-md"
          >
            <span className="font-['Funnel_Display'] font-bold text-[14px] sm:text-[16px]">{t('ourProducts')}</span>
            <span className="text-[16px] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          
          <Link
            href="/about"
            className="border-[1.5px] border-[#23B349] text-[#23B349] bg-white px-6 sm:px-8 py-2 md:py-3 rounded-full flex items-center justify-center hover:bg-green-50 transition-all shadow-sm"
          >
            <span className="font-['Funnel_Display'] font-bold text-[14px] sm:text-[16px]">{t('whyVita')}</span>
          </Link>
        </div>
      </div>

      {/* Massive Green Interactive Section containing Vector Wave & Content */}
      <div className="relative w-full mt-4 sm:mt-8 md:mt-16 z-10 flex flex-col flex-grow">
         
         {/* Native SVG True Hero Wave Roof */}
         <div className="relative w-[150%] sm:w-[120%] left-[-25%] sm:left-[-10%] aspect-[3.15/1] -mb-[2px] pointer-events-none z-0">
            <Image src="/assets/hero/true-hero-wave.svg" alt="Green Arc Wave" fill className="object-fill" priority />
         </div>

         {/* Anchored Duck Character overlapping the wave on the left */}
         <div className="absolute top-[8%] sm:top-[15%] md:top-[12%] left-[2%] sm:left-[8%] md:left-[10%] w-[150px] sm:w-[220px] md:w-[350px] aspect-square animate-float z-30">
            <Image src="/assets/hero/doctor-duck.png" alt="Duck Character" fill className="object-contain drop-shadow-2xl" />
         </div>

         {/* Anchored Stack of Biscuits overlapping the wave on the right */}
         <div className="absolute top-[12%] sm:top-[20%] md:top-[20%] right-[0%] sm:right-[5%] md:right-[8%] w-[120px] sm:w-[180px] md:w-[300px] aspect-square animate-float-delayed z-30">
            <Image src="/assets/hero/biscuit-stack.png" alt="Biscuit Stack" fill className="object-contain drop-shadow-2xl" />
         </div>

         {/* Solid Green Main Layout Body */}
         <div className="relative w-full bg-[#23B349] flex-grow flex flex-col items-center px-4 pt-12 sm:pt-24 pb-24 lg:pb-32 z-10 shadow-[0_-5px_15px_rgba(35,179,73,0.2)]">
            
            {/* White Inspirational Quote */}
            <h3 className="font-['Outfit'] font-extrabold text-[22px] sm:text-[32px] md:text-[44px] lg:text-[48px] text-white leading-[1.2] max-w-[900px] mb-8 lg:mb-12 px-2">
               {t('secondaryQuote')}
            </h3>

            {/* Client Avatars Row */}
            <div className="flex items-center justify-center gap-4 bg-transparent mb-16 sm:mb-20 w-full">
               <div className="flex -space-x-3">
                  <Image src="/assets/hero/avatar-c6d.png" width={44} height={44} alt="User" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[3px] border-[#23B349] object-cover bg-white" />
                  <Image src="/assets/hero/strawberry.png" width={44} height={44} alt="User" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[3px] border-[#23B349] object-cover bg-white p-1" />
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[3px] border-[#23B349] bg-gray-200 flex items-center justify-center text-[#404040] font-bold text-xs z-10">
                     +3
                  </div>
               </div>
               <span className="font-['Outfit'] font-bold text-white text-[15px] sm:text-[16px] tracking-wide">{t('ourClients')}</span>
            </div>

            {/* Core Family Video Layout Zone */}
            <div className="relative w-full max-w-[900px] mx-auto mt-4 sm:mt-12 z-30">
               
               {/* Red Text Tape Ribbon underlaying the frame */}
               <div className="absolute top-[65%] sm:top-[75%] left-[-10vw] sm:left-[-150px] w-[120vw] md:w-[130%] h-[50px] sm:h-[100px] -z-10 flex items-center justify-center">
                  <Image src="/assets/hero/text-tape.svg" alt="Tape Decor" fill className="object-contain object-left overflow-visible" />
               </div>

               {/* Video Embed Frame Component */}
               <div className="relative w-full aspect-[16/9] lg:aspect-[2.1/1] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-[5px] sm:border-[8px] border-white bg-[#FFD700]">
                  <Image src="/assets/hero/family-true.png" alt="Family eating biscuits video placeholder" fill className="object-cover object-center" />
                  
                  {/* Frosted Glass Mute/Play Button */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-[14px] flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-white/40 transition border border-white/40 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  </div>
               </div>
               
               {/* Floating Yellow Badge over Video Frame Edge */}
               <div className="absolute -top-6 -right-6 sm:-top-12 sm:-right-10 w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] z-40 animate-float">
                 <Image src="/assets/hero/true-badge.svg" alt="Quality Badge" fill className="object-contain drop-shadow-xl" />
               </div>

            </div>
         </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
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
