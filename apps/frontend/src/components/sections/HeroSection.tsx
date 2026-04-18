"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center bg-gradient-to-b from-[#E8F5E8] to-white min-h-[100vh] pt-20"
    >
      {/* ── Background Elements ── */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">

        {/* Top-left green glow */}
        <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#23B349] blur-[140px] rounded-full opacity-30 mix-blend-multiply" />

        {/* Top-right green glow */}
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#23B349] blur-[150px] rounded-full opacity-25 mix-blend-multiply" />

        {/* Decorative circles */}
        <div className="absolute top-[10%] left-[10%] w-[100px] h-[100px] bg-[#FFEC19] rounded-full opacity-20 blur-xl" />
        <div className="absolute top-[20%] right-[15%] w-[80px] h-[80px] bg-[#DB4426] rounded-full opacity-15 blur-xl" />
      </div>

      {/* ── Top Section: Heading + Subtitle + CTAs ── */}
      <div className="relative z-20 w-full max-w-[1200px] px-4 flex flex-col items-center pt-8 md:pt-16 pb-12">

        {/* Butterfly - Top Left (using existing fish-cookie temporarily) */}
        <div className="absolute top-0 left-[5%] sm:left-[10%] w-[80px] sm:w-[120px] md:w-[160px] h-[80px] sm:h-[120px] md:h-[160px] animate-float z-10">
          <Image
            src="/assets/hero/fish-cookie.png"
            alt="Decorative element"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Main Heading Group */}
        <div className="flex flex-col items-center text-center relative w-full mt-8 sm:mt-12">

          {/* Line 1: "A new stylish" */}
          <h2
            className="font-['Outfit'] font-extrabold text-[6vw] min-[375px]:text-[32px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-[#404040] leading-[0.9] tracking-[-0.01em]"
          >
            A new stylish
          </h2>

          {/* Line 2: 🍪 way of 🍓 */}
          <div className="flex items-center justify-center gap-2 min-[375px]:gap-3 mt-0">
            {/* Chocolate Chip Cookie (using existing fish-cookie temporarily) */}
            <div className="relative w-[6vw] h-[6vw] min-[375px]:w-[28px] min-[375px]:h-[28px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] animate-float shrink-0 self-baseline -mb-2 sm:-mb-3">
              <Image
                src="/assets/hero/fish-cookie.png"
                alt="Chocolate Chip Cookie"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h2
              className="font-['Outfit'] font-extrabold text-[6vw] min-[375px]:text-[32px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-[#404040] leading-[0.9] tracking-[-0.01em]"
            >
              way of
            </h2>

            {/* Strawberry */}
            <div className="relative w-[6vw] h-[6vw] min-[375px]:w-[28px] min-[375px]:h-[28px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] animate-float-delayed shrink-0 self-end -mb-1 sm:-mb-2">
              <Image
                src="/assets/hero/strawberry.png"
                alt="Strawberry"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Line 3: "Connecting!" — large green */}
          <h1
            className="font-['Outfit'] font-extrabold text-[10vw] min-[375px]:text-[50px] sm:text-[90px] md:text-[140px] lg:text-[180px] text-[#23B349] leading-[0.85] tracking-[-0.03em] mt-2"
          >
            {t("connecting")}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] text-center mt-6 sm:mt-8">
          <p className="font-['Funnel_Display'] font-medium text-[12px] sm:text-[16px] md:text-[18px] text-[#404040] leading-[1.4] tracking-tight">
            {t("description")}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-8 sm:mt-12 pb-12 sm:pb-20">

          {/* Primary — filled green */}
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#1e9a3e] transition-all duration-300 shadow-lg shadow-green-600/25 active:scale-95 min-w-[160px] justify-center"
          >
            <span className="font-['Funnel_Display'] font-semibold text-[14px] sm:text-[16px] whitespace-nowrap">
              {t("ourProducts")}
            </span>
            <span className="text-[16px] group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Secondary — white with green border */}
          <Link
            href="/about"
            className="relative px-8 sm:px-10 py-3 sm:py-4 bg-white border-2 border-[#23B349] rounded-full flex items-center justify-center hover:bg-[#23B349] hover:text-white transition-all active:scale-95 shadow-md min-w-[160px] justify-center group"
          >
            <span className="font-['Funnel_Display'] font-semibold text-[14px] sm:text-[16px] text-[#23B349] whitespace-nowrap group-hover:text-white">
              {t("whyVita")}
            </span>
            <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#23B349] text-white transition-colors group-hover:bg-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 group-hover:fill-[#23B349]">
                <polygon points="9 6 18 12 9 18 9 6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Green Block (curves + quote + video) ── */}
      <div className="relative w-full z-10 flex-grow flex flex-col items-center bg-[#23B349] px-4 pt-16 sm:pt-24 pb-32 lg:pb-40">

        {/* CSS Wave Curve Edge */}
        <div className="absolute top-[-8vw] sm:top-[-10vw] left-[-25%] w-[150%] h-[10vw] bg-[#23B349] rounded-t-[100%] pointer-events-none -z-10" />

        {/* Doctor Duck — left, floating above curve */}
        <div className="absolute top-[-4vw] sm:top-[-6vw] md:top-[-8vw] left-[2%] sm:left-[5%] md:left-[8%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="relative w-[25vw] min-[375px]:w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] aspect-square animate-float -translate-y-[90%]">
            <Image
              src="/assets/hero/doctor-duck.png"
              alt="Doctor Duck"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Biscuit Stack — right, floating above curve */}
        <div className="absolute top-[-3vw] sm:top-[-5vw] md:top-[-7vw] right-[-5%] sm:right-[-3%] md:right-[-1%] z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="relative w-[20vw] min-[375px]:w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] aspect-square animate-float-delayed -translate-y-[90%]">
            <Image
              src="/assets/hero/biscuit-stack.png"
              alt="Biscuit Stack"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* ── HERO SECOND TEXT ── */}
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-start relative z-20 gap-10 sm:gap-16 mt-8 sm:mt-12">

          {/* White Inspirational Quote */}
          <h3 className="font-['Outfit'] font-bold text-[18px] min-[375px]:text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] text-white leading-[1.1] tracking-[-0.01em] max-w-[900px] text-left drop-shadow-lg">
            "{t("secondaryQuote")}"
          </h3>

          {/* Client Avatars */}
          <div className="flex items-center gap-4 sm:gap-6 w-fit">
            <div className="flex -space-x-3 sm:-space-x-4 drop-shadow-lg">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white bg-[#BDBDBD] overflow-hidden z-30">
                <Image src="/assets/hero/client-1.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white overflow-hidden z-20" style={{ background: "#b0b0b0" }}>
                <Image src="/assets/hero/client-2.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white overflow-hidden z-10" style={{ background: "#c0c0c0" }}>
                <Image src="/assets/hero/client-3.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white bg-[#BDBDBD] flex items-center justify-center text-white font-['Outfit'] font-semibold text-[12px] sm:text-[14px] z-0">
                +3
              </div>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-[14px] sm:text-[16px] tracking-wide">
              {t("ourClients")}
            </span>
          </div>
        </div>

        {/* ── Video Layout ── */}
        <div className="relative w-full max-w-[900px] mx-auto z-30 mt-12 sm:mt-20 pb-12">

          {/* Multi-layered Yellow Text Tape */}
          <div
            className="absolute top-[60%] sm:top-[65%] left-[-25vw] w-[150vw] -z-10 -rotate-[3deg] origin-center flex flex-col overflow-hidden drop-shadow-2xl"
          >
            {/* Gray base layer */}
            <div className="w-full h-[16px] min-[375px]:h-[20px] sm:h-[32px] md:h-[45px] bg-[#404040]" />
            {/* Yellow marquee layer */}
            <div className="w-full h-[45px] min-[375px]:h-[55px] sm:h-[100px] md:h-[140px] bg-[#FFEC19] flex items-center overflow-hidden">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#DB4426] text-[20px] min-[375px]:text-[28px] sm:text-[48px] md:text-[72px] lg:text-[96px] font-['Funnel_Display'] font-extrabold uppercase tracking-tight px-6 sm:px-12"
                  >
                    A new stylish way of Connecting!
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video Frame */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.2/1] rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-[5px] sm:border-[10px] border-white bg-[#404040]">
            <Image
              src="/assets/hero/family-true.png"
              alt="Family enjoying Vita products"
              fill
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
            />

            {/* Sound Mute Icon — top-left */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center bg-black/30 backdrop-blur-md shadow-lg hover:bg-black/50 transition-colors cursor-pointer border-2 border-white/20">
              <Image
                src="/assets/hero/sound-mute.svg"
                alt="Mute"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </div>
          </div>

          {/* Yellow Quality Badge — top-right */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-[18vw] h-[18vw] min-[375px]:w-[90px] min-[375px]:h-[90px] sm:w-[140px] sm:h-[140px] z-40 animate-float pointer-events-none drop-shadow-2xl">
            <Image src="/assets/hero/true-badge.svg" alt="Quality Badge" fill className="object-contain" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(-90%) rotate(0deg); }
          50% { transform: translateY(calc(-90% - 15px)) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-90%) rotate(0deg); }
          50% { transform: translateY(calc(-90% - 15px)) rotate(-2deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
          animation-delay: -4s;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  );
}
