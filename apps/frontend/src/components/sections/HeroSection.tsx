"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* ── TOP SECTION (White Background) ── */}
      <div className="relative pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] lg:pt-[180px] lg:pb-[100px] flex flex-col items-center z-10">
        
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[#23B349]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[50%] bg-[#23B349]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-[-20%] right-[10%] w-[30%] h-[40%] bg-[#FFEC19]/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Heading Group */}
        <div className="relative flex flex-col items-center text-center px-4 max-w-[1200px] mx-auto">
          
          {/* "A new stylish way of" with Icons */}
          <div className="flex flex-col items-center mb-2">
            <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[32px] md:text-[48px] lg:text-[64px] text-[#404040] leading-tight tracking-tight">
              A new stylish
            </h2>
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
              <div className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px] rotate-[-15deg]">
                <Image
                  src="/assets/hero/cookie.png"
                  alt="Cookie"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[32px] md:text-[48px] lg:text-[64px] text-[#404040] leading-tight tracking-tight">
                way of
              </h2>
              <div className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px] rotate-[15deg]">
                <Image
                  src="/assets/hero/strawberry.png"
                  alt="Strawberry"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* "Connecting!" Main Heading */}
          <h1 className="font-[family-name:var(--font-funnel-display)] font-black text-[80px] md:text-[140px] lg:text-[180px] text-[#23B349] leading-[0.85] tracking-[-0.04em] mb-8">
            {t("connecting")}
          </h1>

          {/* Subtitle */}
          <p className="max-w-[600px] font-[family-name:var(--font-outfit)] font-medium text-[16px] md:text-[20px] text-[#404040] leading-relaxed mb-10 px-4">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/products"
              className="bg-[#23B349] text-white flex items-center gap-3 px-8 py-4 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[24px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#23B349]/20"
            >
              {t("ourProducts")}
              <span className="text-[20px] md:text-[28px]">→</span>
            </Link>
            <Link
              href="/about"
              className="border-2 border-[#23B349] text-[#404040] flex items-center px-8 py-4 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[24px] transition-all hover:bg-[#23B349]/5 active:scale-95"
            >
              {t("whyVita")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── THE HILL (Transition Section) ── */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] mt-[-100px] md:mt-[-150px] lg:mt-[-200px]">
        
        {/* Large Green Arc (The Hill) */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] lg:w-[120%] h-full bg-[#23B349] rounded-t-[100%] z-0"
        />

        {/* Duck Doctor - Positioned on the Hill */}
        <div className="absolute left-[5%] md:left-[10%] lg:left-[15%] bottom-[10%] md:bottom-[15%] lg:bottom-[20%] w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] z-10 animate-float">
          <Image
            src="/assets/hero/doctor-duck.png"
            alt="Doctor Duck"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Biscuit Stack - Positioned on the Hill */}
        <div className="absolute right-[5%] md:right-[10%] lg:right-[15%] bottom-[15%] md:bottom-[20%] lg:bottom-[25%] w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] z-10 animate-float-delayed">
          <Image
            src="/assets/hero/biscuit-stack.png"
            alt="Biscuit Stack"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ── QUOTE SECTION (Green Background) ── */}
      <div className="relative w-full bg-[#23B349] pb-[100px] z-0">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="font-[family-name:var(--font-funnel-display)] font-semibold text-[24px] md:text-[42px] lg:text-[56px] text-white leading-[1.15] mb-12 max-w-[1000px] mx-auto">
            {t("secondaryQuote")}
          </h3>

          {/* Client Avatars */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden z-${40 - i * 10}`}>
                  <Image
                    src={`/assets/hero/client-${i}.png`}
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-[#BDBDBD] flex items-center justify-center text-white font-bold text-sm md:text-lg z-0">
                +3
              </div>
            </div>
            <span className="font-[family-name:var(--font-funnel-display)] font-bold text-white text-[18px] md:text-[20px] tracking-wide">
              {t("ourClients")}
            </span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM VIDEO SECTION ── */}
      <div className="relative w-full bg-[#23B349] pt-[50px] pb-[150px]">
        <div className="max-w-[1400px] mx-auto px-4 relative">
          
          {/* Yellow Tape Behind Video */}
          <div className="absolute top-[35%] left-[-10%] w-[120%] h-[120px] md:h-[180px] bg-[#FFEC19] rotate-[-4deg] z-0 flex items-center overflow-hidden shadow-2xl">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} className="font-[family-name:var(--font-funnel-display)] font-black text-[40px] md:text-[80px] text-[#23B349] mx-10 uppercase italic">
                  Connecting!
                </span>
              ))}
            </div>
          </div>

          {/* Video Container */}
          <div className="relative z-10 mx-auto max-w-[1200px] aspect-video rounded-[32px] md:rounded-[64px] border-[6px] md:border-[12px] border-white overflow-hidden shadow-2xl">
            <Image
              src="/assets/hero/video-family.png"
              alt="Family enjoying Vita"
              fill
              className="object-cover"
              priority
            />
            
            {/* Mute Icon */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-10 h-10 md:w-16 md:h-16 opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
              <Image
                src="/assets/hero/sound-mute-video.svg"
                alt="Mute"
                fill
              />
            </div>

            {/* Play Overlay (optional, for aesthetics) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/0 transition-colors cursor-pointer group">
               {/* Could add a play button here if needed */}
            </div>
          </div>

          {/* Flower Badge */}
          <div className="absolute -top-[40px] right-[5%] md:right-[10%] w-[100px] h-[100px] md:w-[160px] md:h-[160px] z-20 animate-pulse-slow">
            <Image
              src="/assets/hero/badge.svg"
              alt="Quality Badge"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── STYLE HOOKS ── */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
