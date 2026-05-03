"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* ── BACKGROUND ARTISTIC ELEMENTS (Top White Area) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left Blurred Cookie - Premium "Expensive" Look */}
        <div className="absolute top-[8%] left-[-5%] w-[300px] h-[300px] opacity-[0.12] blur-[40px] rotate-[-15deg]">
           <Image src="/assets/hero/cookie.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Soft Radial Brand Glows */}
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-[#23B349]/5 blur-[130px] rounded-full" />
        <div className="absolute top-[15%] left-[12%] w-[400px] h-[400px] bg-[#FFEC19]/5 blur-[110px] rounded-full" />
      </div>

      {/* ── HERO TOP CONTENT ── */}
      {/* Increased padding-top to clear the fixed navbar (approx 100-120px) */}
      <div className="relative pt-[140px] pb-[40px] md:pt-[180px] md:pb-[50px] lg:pt-[220px] lg:pb-[60px] flex flex-col items-center z-10">
        
        <div className="relative flex flex-col items-center text-center px-4 max-w-[1200px] mx-auto">
          
          {/* Headline Group */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[28px] md:text-[42px] lg:text-[56px] text-[#404040] leading-tight tracking-tight">
              A new stylish
            </h2>
            <div className="flex items-center gap-3 md:gap-5 mt-[-5px] md:mt-[-10px]">
              <div className="relative w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] rotate-[-12deg] drop-shadow-lg transition-transform hover:scale-110 duration-300">
                <Image
                  src="/assets/hero/cookie.png"
                  alt="Cookie"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[28px] md:text-[42px] lg:text-[56px] text-[#404040] leading-tight tracking-tight">
                way of
              </h2>
              <div className="relative w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] rotate-[12deg] drop-shadow-lg transition-transform hover:scale-110 duration-300">
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
          <h1 className="font-[family-name:var(--font-funnel-display)] font-black text-[72px] md:text-[130px] lg:text-[180px] text-[#23B349] leading-[0.85] tracking-[-0.05em] mb-10 md:mb-12">
            {t("connecting")}
          </h1>

          {/* Subtitle */}
          <p className="max-w-[620px] font-[family-name:var(--font-outfit)] font-medium text-[15px] md:text-[18px] lg:text-[20px] text-[#404040]/70 leading-relaxed mb-10 md:mb-12 px-4">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link
              href="/products"
              className="bg-[#23B349] text-white flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:scale-105 hover:bg-[#1fa041] active:scale-95 shadow-[0_10px_25px_-5px_rgba(35,179,73,0.35)]"
            >
              {t("ourProducts")}
              <span className="text-[20px] md:text-[28px]">→</span>
            </Link>
            <Link
              href="/about"
              className="border-[2.5px] border-[#23B349] text-[#404040] flex items-center px-10 py-4 md:px-12 md:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:bg-[#23B349]/5 active:scale-95"
            >
              {t("whyVita")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── GREEN TRANSITION AREA (The Hill) ── */}
      <div className="relative w-full">
        
        {/* The Arc/Hill Shape - Shallower, wider, and positioned lower */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] md:w-[150%] lg:w-[130%] aspect-[6/1] bg-[#23B349] rounded-t-[100%] translate-y-[5%] z-0" />

        {/* Floating Assets Container */}
        <div className="relative max-w-[1400px] mx-auto h-[350px] md:h-[500px] lg:h-[650px] z-10 pointer-events-none">
          {/* Doctor Duck - Bridging white/green perfectly */}
          <div className="absolute left-[2%] md:left-[6%] lg:left-[10%] bottom-[12%] md:bottom-[15%] lg:bottom-[20%] w-[180px] h-[180px] md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] animate-float">
            <Image
              src="/assets/hero/doctor-duck.png"
              alt="Doctor Duck"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Biscuit Stack */}
          <div className="absolute right-[2%] md:right-[5%] lg:right-[8%] bottom-[18%] md:bottom-[22%] lg:bottom-[28%] w-[150px] h-[150px] md:w-[260px] md:h-[260px] lg:w-[400px] lg:h-[400px] animate-float-delayed">
            <Image
              src="/assets/hero/biscuit-stack.png"
              alt="Biscuit Stack"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ── GREEN SECTION CONTENT ── */}
        <div className="relative bg-[#23B349] pt-12 pb-[100px] md:pb-[160px] z-10">
          
          <div className="max-w-[1200px] mx-auto px-6">
            
            {/* Quote and Clients Avatars */}
            <div className="mb-24 md:mb-36">
              <h3 className="font-[family-name:var(--font-funnel-display)] font-bold text-[24px] md:text-[38px] lg:text-[52px] text-white leading-[1.15] mb-12 max-w-[1050px]">
                {t("secondaryQuote")}
              </h3>

              <div className="flex flex-row items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden shadow-lg">
                      <Image
                        src={`/assets/hero/client-${i}.png`}
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white bg-[#404040] flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg">
                    +3
                  </div>
                </div>
                <span className="font-[family-name:var(--font-funnel-display)] font-bold text-white text-[18px] md:text-[20px] tracking-wide">
                  {t("ourClients")}
                </span>
              </div>
            </div>

            {/* Video & Marquee Section */}
            <div className="relative max-w-[1150px] mx-auto">
              
              {/* Marquee Tape Behind Video */}
              <div className="absolute top-[42%] left-[-10%] w-[120%] h-20 md:h-32 lg:h-44 bg-[#FFEC19] rotate-[-2.5deg] z-0 flex items-center overflow-hidden shadow-xl">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <span key={i} className="font-[family-name:var(--font-funnel-display)] font-black text-[30px] md:text-[60px] lg:text-[90px] text-[#23B349] mx-10 uppercase italic tracking-tighter">
                      Connecting!
                    </span>
                  ))}
                </div>
              </div>

              {/* Video Container */}
              <div className="relative z-10 aspect-video rounded-[35px] md:rounded-[55px] lg:rounded-[70px] border-[8px] md:border-[15px] border-white overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.25)] group cursor-pointer">
                <Image
                  src="/assets/hero/video-family.png"
                  alt="Family enjoying Vita"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay Play Indicator Area */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                   <div className="absolute top-6 left-6 md:top-12 md:left-12 w-10 h-10 md:w-20 md:h-20 opacity-90 transition-all hover:scale-110 active:scale-90">
                    <Image
                      src="/assets/hero/sound-mute-video.svg"
                      alt="Mute"
                      fill
                    />
                  </div>
                </div>

                {/* Quality Badge - Top Right Corner */}
                <div className="absolute -top-[10%] -right-[5%] md:-top-[15%] md:-right-[4%] w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] z-20 drop-shadow-2xl transition-transform hover:rotate-12 duration-700">
                  <Image
                    src="/assets/hero/badge.svg"
                    alt="Quality Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── ANIMATIONS ── */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
