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
      {/* ── Background Glows ── */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">

        {/* Top-left green glow core */}
        <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#23B349] blur-[140px] rounded-full opacity-50 mix-blend-multiply" />

        {/* Top-left blurred decorative image (hero-bg-2 / Node 18:1574) */}
        <div className="absolute top-[-50px] left-[-50px] w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] opacity-90 blur-[8px] z-10">
          <Image src="/assets/hero/hero-bg-2-555c57.png" alt="" fill className="object-contain object-left-top" />
        </div>

        {/* Top-right green glow core */}
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#23B349] blur-[150px] rounded-full opacity-40 mix-blend-multiply" />

        {/* Top-right blurred texture (hero-bg-1 / Node 18:1575) */}
        <div className="absolute top-0 right-0 w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] opacity-90 blur-[10px] z-10">
          <Image src="/assets/hero/hero-bg-1-6b801d.png" alt="" fill className="object-contain object-right-top" />
        </div>

        {/* Center radial glow (bg-center-blur / Node 18:1223) */}
        <div className="absolute top-[80px] sm:top-[100px] left-1/2 -translate-x-1/2 w-[460px] sm:w-[640px] aspect-square opacity-75 mix-blend-multiply z-0">
          <Image src="/assets/hero/bg-center-blur.png" alt="" fill className="object-contain object-center" />
        </div>
      </div>

      {/* ── Top Section: Heading + Subtitle + CTAs ── */}
      <div className="relative z-20 w-full max-w-[1200px] px-4 flex flex-col items-center pt-6 md:pt-12 pb-10">

        {/* Main Heading Group (Node 15:1013 / 19:1910) */}
        <div className="flex flex-col items-center text-center relative w-full">

          {/* Line 1: "A new stylish" */}
          <h2
            className="font-['Outfit'] font-extrabold text-[38px] sm:text-[64px] md:text-[88px] text-[#404040] leading-[0.88] tracking-[-0.01em]"
          >
            A new stylish
          </h2>

          {/* Line 2: 🍪 way of 🍓 */}
          <div className="flex items-center justify-center gap-2 mt-0">
            {/* Fish Cookie emoji (Node 18:1577) */}
            <div className="relative w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px] animate-float shrink-0 self-baseline -mb-2 sm:-mb-3">
              <Image
                src="/assets/hero/fish-cookie.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            <h2
              className="font-['Outfit'] font-extrabold text-[38px] sm:text-[64px] md:text-[88px] text-[#404040] leading-[0.88] tracking-[-0.01em]"
            >
              way of
            </h2>

            {/* Strawberry emoji (Node 16:1209) */}
            <div className="relative w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px] animate-float-delayed shrink-0 self-end -mb-1 sm:-mb-2">
              <Image
                src="/assets/hero/strawberry.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Line 3: "Connecting!" — large green (Node 19:1903) */}
          <h1
            className="font-['Outfit'] font-extrabold text-[60px] sm:text-[110px] md:text-[170px] lg:text-[192px] text-[#23B349] leading-[0.88] tracking-[-0.03em] mt-1"
          >
            {t("connecting")}
          </h1>
        </div>

        {/* Subtitle (Node 19:1769) */}
        <div className="max-w-[340px] sm:max-w-[420px] text-center mt-6 sm:mt-8">
          <p className="font-['Funnel_Display'] font-medium text-[11px] sm:text-[14px] md:text-[15px] text-[#404040] leading-[1.35] tracking-tight">
            {t("description")}
          </p>
        </div>

        {/* CTA Buttons (Node 18:1742) */}
        <div className="flex flex-row gap-3 sm:gap-4 items-center mt-6 sm:mt-8 pb-10 sm:pb-16">

          {/* Primary — filled green (Node 18:1737) */}
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-[#1e9a3e] transition-all duration-300 shadow-sm shadow-green-600/20 active:scale-95"
          >
            <span className="font-['Funnel_Display'] font-medium text-[13px] sm:text-[15px] whitespace-nowrap">
              {t("ourProducts")}
            </span>
            <span className="text-[13px] group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Secondary — white with faint border (Node 18:1740) */}
          <Link
            href="/about"
            className="relative px-5 sm:px-6 py-2 sm:py-2.5 bg-white border border-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-green-50/50 transition-all active:scale-95 shadow-[0_2px_10px_rgba(0,0,0,0.02)] gap-2 group"
          >
            <span className="font-['Funnel_Display'] font-medium text-[13px] sm:text-[15px] text-[#404040] whitespace-nowrap">
              {t("whyVita")}
            </span>
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-[1px] border-[#23B349]/30 text-[#23B349] transition-colors group-hover:bg-[#23B349] group-hover:text-white group-hover:border-[#23B349]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 ml-[1px]">
                <polygon points="9 6 18 12 9 18 9 6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Green Block (curves + quote + video) ── */}
      <div className="relative w-full z-10 flex-grow flex flex-col items-center bg-[#23B349] px-4 pt-10 sm:pt-20 pb-24 lg:pb-32">

        {/* CSS Mountain Curve Edge */}
        <div className="absolute top-[-10vw] sm:top-[-12vw] left-[-25%] w-[150%] h-[12vw] bg-[#23B349] rounded-t-[100%] pointer-events-none -z-10" />

        {/* Doctor Duck — left, floating above curve (Node 16:1211) */}
        <div className="absolute top-[-6vw] sm:top-[-8vw] md:top-[-9vw] left-[1%] sm:left-[3%] md:left-[5%] z-30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <div className="relative w-[130px] sm:w-[170px] md:w-[260px] aspect-square animate-float -translate-y-[85%]">
            <Image
              src="/assets/hero/doctor-duck.png"
              alt="Doctor Duck"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Biscuit Stack — right, floating above curve (Node 15:1203) cut off on the right edge */}
        <div className="absolute top-[-4vw] sm:top-[-6vw] md:top-[-7vw] right-[-10%] sm:right-[-8%] md:right-[-6%] z-30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <div className="relative w-[120px] sm:w-[180px] md:w-[280px] aspect-square animate-float-delayed -translate-y-[85%]">
            <Image
              src="/assets/hero/biscuit-stack.png"
              alt="Biscuit Stack"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* ── HERO SECOND TEXT (Node 23:2788) ── */}
        <div className="w-full max-w-[950px] mx-auto flex flex-col items-start relative z-20 gap-8 sm:gap-12 mt-4 sm:mt-8">

          {/* White Inspirational Quote (Node 20:2095) */}
          <h3 className="font-['Outfit'] font-bold text-[20px] sm:text-[28px] md:text-[38px] lg:text-[46px] text-white leading-[1.0] tracking-[-0.01em] max-w-[800px] text-left drop-shadow-md">
            “{t("secondaryQuote")}”
          </h3>

          {/* Client Avatars (Node 23:2734) */}
          <div className="flex items-center gap-3 sm:gap-4 w-fit">
            <div className="flex -space-x-2 sm:-space-x-2 drop-shadow-md">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white bg-[#BDBDBD] overflow-hidden z-30">
                <Image src="/assets/hero/client-1.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white overflow-hidden z-20" style={{ background: "#b0b0b0" }}>
                <Image src="/assets/hero/client-2.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white overflow-hidden z-10" style={{ background: "#c0c0c0" }}>
                <Image src="/assets/hero/client-3.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white bg-[#BDBDBD] flex items-center justify-center text-white font-['Roboto'] font-normal text-[11px] sm:text-[13px] z-0">
                +3
              </div>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-[12px] sm:text-[14px] tracking-wide">
              {t("ourClients")}
            </span>
          </div>
        </div>

        {/* ── Video Layout (Node 33:286) ── */}
        <div className="relative w-full max-w-[850px] mx-auto z-30 mt-10 sm:mt-16 pb-8">

          {/* Multi-layered Yellow Text Tape (Node 20:2099 / 20:2100) */}
          <div
            className="absolute top-[65%] sm:top-[70%] left-[-20vw] w-[140vw] -z-10 -rotate-[4deg] origin-center flex flex-col overflow-hidden drop-shadow-2xl"
          >
            {/* Gray base layer */}
            <div className="w-full h-[18px] sm:h-[28px] md:h-[40px] bg-[#404040]" />
            {/* Yellow marquee layer */}
            <div className="w-full h-[50px] sm:h-[90px] md:h-[130px] bg-[#FFEC19] flex items-center overflow-hidden">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#DB4426] text-[24px] sm:text-[44px] md:text-[68px] lg:text-[88px] font-['Funnel_Display'] font-extrabold uppercase tracking-tight px-6 sm:px-10"
                  >
                    A new stylish way of Connecting!
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video Frame (Node 38:736) */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.1/1] rounded-[16px] sm:rounded-[36px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border-[4px] sm:border-[8px] border-white bg-[#404040]">
            <Image
              src="/assets/hero/family-true.png"
              alt="Family enjoying Vita products"
              fill
              className="object-cover object-center hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            {/* Sound Mute Icon — top-left (Node 161:926) */}
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm shadow-sm hover:bg-black/40 transition-colors cursor-pointer border border-white/10">
              <Image
                src="/assets/hero/sound-mute.svg"
                alt="Mute"
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Yellow Quality Badge — top-right (Node 19:2004) */}
          <div className="absolute -top-5 -right-4 sm:-top-8 sm:-right-8 w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] z-40 animate-float pointer-events-none drop-shadow-xl">
            <Image src="/assets/hero/true-badge.svg" alt="Quality Badge" fill className="object-contain" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(-85%) rotate(0deg); }
          50% { transform: translateY(calc(-85% - 12px)) rotate(1.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-85%) rotate(0deg); }
          50% { transform: translateY(calc(-85% - 12px)) rotate(-1.5deg); }
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
