"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FFFFFF]">
      {/* ── BACKGROUND ARTISTIC ELEMENTS (The "Expensive" Look) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(35,179,73,0.05)_0%,rgba(255,255,255,1)_60%)]" />
        
        {/* Artistic Blurred Shapes */}
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] opacity-40 blur-[120px] animate-pulse">
           <Image src="/assets/hero/hero-blur-shape-1.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-[5%] right-[-10%] w-[50%] h-[50%] opacity-30 blur-[100px]">
           <Image src="/assets/hero/hero-blur-shape-2.svg" alt="" fill className="object-contain" />
        </div>
        
        {/* Subtle Yellow/Orange Glows (as requested) */}
        <div className="absolute top-[15%] left-[10%] w-[150px] h-[150px] bg-[#FFEC19]/20 blur-[80px] rounded-full" />
        <div className="absolute top-[20%] right-[15%] w-[120px] h-[120px] bg-[#DB4426]/10 blur-[70px] rounded-full" />
      </div>

      {/* ── TOP SECTION (Content) ── */}
      <div className="relative pt-[100px] pb-[40px] md:pt-[140px] md:pb-[60px] lg:pt-[160px] lg:pb-[80px] flex flex-col items-center z-10">
        
        {/* Heading Group */}
        <div className="relative flex flex-col items-center text-center px-4 max-w-[1200px] mx-auto">
          
          {/* "A new stylish way of" with Icons */}
          <div className="flex flex-col items-center mb-0 md:mb-1">
            <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[28px] md:text-[42px] lg:text-[56px] text-[#404040] leading-tight tracking-tight">
              {t("stylishWay").split(' ').slice(0, 3).join(' ')}
            </h2>
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6 mt-[-5px] md:mt-[-10px]">
              <div className="relative w-[35px] h-[35px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rotate-[-12deg] drop-shadow-md transition-transform hover:scale-110 duration-300">
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
              <div className="relative w-[35px] h-[35px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rotate-[12deg] drop-shadow-md transition-transform hover:scale-110 duration-300">
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
          <h1 className="font-[family-name:var(--font-funnel-display)] font-black text-[72px] md:text-[130px] lg:text-[180px] text-[#23B349] leading-[0.8] tracking-[-0.05em] mb-8 drop-shadow-[0_4px_4px_rgba(35,179,73,0.1)]">
            {t("connecting")}
          </h1>

          {/* Subtitle */}
          <p className="max-w-[550px] font-[family-name:var(--font-outfit)] font-medium text-[15px] md:text-[18px] lg:text-[20px] text-[#404040]/80 leading-relaxed mb-10 px-4">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/products"
              className="bg-[#23B349] text-white flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:scale-105 hover:bg-[#1fa041] active:scale-95 shadow-[0_10px_20px_-5px_rgba(35,179,73,0.4)]"
            >
              {t("ourProducts")}
              <span className="text-[20px] md:text-[28px] transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="border-[2.5px] border-[#23B349] text-[#404040] flex items-center px-8 py-4 md:px-10 md:py-5 rounded-full font-[family-name:var(--font-funnel-display)] font-bold text-[18px] md:text-[22px] lg:text-[24px] transition-all hover:bg-[#23B349]/5 active:scale-95"
            >
              {t("whyVita")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── THE HILL (Transition Section) ── */}
      <div className="relative w-full h-[350px] md:h-[550px] lg:h-[650px] mt-[-60px] md:mt-[-100px] lg:mt-[-120px]">
        
        {/* Figma-Accurate Semicircle Arc */}
        <div className="absolute bottom-0 left-0 w-full h-full z-0">
          <Image
            src="/assets/hero/semicircle-vector.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* Duck Doctor - Grounded on the Hill */}
        <div className="absolute left-[3%] md:left-[8%] lg:left-[12%] bottom-[12%] md:bottom-[18%] lg:bottom-[22%] w-[160px] h-[160px] md:w-[280px] md:h-[280px] lg:w-[380px] lg:h-[380px] z-10 animate-float">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero/doctor-duck.png"
              alt="Doctor Duck"
              fill
              className="object-contain"
              priority
            />
            {/* Contact Shadow */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[10%] bg-black/10 blur-xl rounded-full -z-10" />
          </div>
        </div>

        {/* Biscuit Stack - Grounded on the Hill */}
        <div className="absolute right-[3%] md:right-[8%] lg:right-[12%] bottom-[18%] md:bottom-[24%] lg:bottom-[28%] w-[130px] h-[130px] md:w-[230px] md:h-[230px] lg:w-[320px] lg:h-[320px] z-10 animate-float-delayed">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero/biscuit-stack.png"
              alt="Biscuit Stack"
              fill
              className="object-contain"
              priority
            />
            {/* Contact Shadow */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[70%] h-[15%] bg-black/15 blur-xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* ── QUOTE SECTION (Green Background) ── */}
      <div className="relative w-full bg-[#23B349] pb-[80px] md:pb-[120px] z-0 overflow-hidden">
        {/* Background Decorative Shape */}
        <div className="absolute top-0 right-[-10%] w-[40%] h-full opacity-10 pointer-events-none">
           <Image src="/assets/hero/hero-bg-element.svg" alt="" fill className="object-contain rotate-180" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h3 className="font-[family-name:var(--font-funnel-display)] font-semibold text-[22px] md:text-[38px] lg:text-[52px] text-white leading-[1.2] mb-12 max-w-[950px] mx-auto">
            {t("secondaryQuote")}
          </h3>

          {/* Client Avatars */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-white bg-gray-200 overflow-hidden shadow-lg z-${40 - i * 10}`}>
                  <Image
                    src={`/assets/hero/client-${i}.png`}
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-[4px] border-white bg-[#404040] flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg z-0">
                +3
              </div>
            </div>
            <span className="font-[family-name:var(--font-funnel-display)] font-bold text-white text-[18px] md:text-[20px] tracking-wide drop-shadow-sm">
              {t("ourClients")}
            </span>
          </div>
        </div>
      </div>

      {/* ── BOTTOM VIDEO SECTION (Integrated) ── */}
      <div className="relative w-full bg-[#23B349] pt-[20px] pb-[100px] md:pb-[180px]">
        <div className="max-w-[1400px] mx-auto px-4 relative">
          
          {/* Animated "Connecting!" Marquee Tape */}
          <div className="absolute top-[38%] left-[-15%] w-[130%] h-[100px] md:h-[160px] lg:h-[200px] bg-[#FFEC19] rotate-[-3.5deg] z-0 flex items-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} className="font-[family-name:var(--font-funnel-display)] font-black text-[40px] md:text-[70px] lg:text-[100px] text-[#23B349] mx-12 uppercase italic tracking-tighter">
                  Connecting!
                </span>
              ))}
            </div>
          </div>

          {/* Video Container (Premium Frame) */}
          <div className="relative z-10 mx-auto max-w-[1200px] aspect-video rounded-[40px] md:rounded-[70px] border-[8px] md:border-[15px] border-white overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group cursor-pointer">
            <Image
              src="/assets/hero/video-family.png"
              alt="Family enjoying Vita"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Sound Mute Icon */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 w-10 h-10 md:w-20 md:h-20 opacity-90 transition-all hover:scale-110 active:scale-90">
              <Image
                src="/assets/hero/sound-mute-video.svg"
                alt="Mute"
                fill
              />
            </div>

            {/* Play Overlay (Aesthetic) */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Premium Flower Badge */}
          <div className="absolute -top-[50px] md:-top-[80px] right-[4%] md:right-[8%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] z-20 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-transform hover:rotate-12 duration-500">
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
          animation: float 8s ease-in-out infinite 1s;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
