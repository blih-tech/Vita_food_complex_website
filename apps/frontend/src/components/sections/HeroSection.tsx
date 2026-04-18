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
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-0">
            {/* Fish Cookie emoji (Node 18:1577) */}
            <div className="relative w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] animate-float shrink-0">
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
            <div className="relative w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] animate-float-delayed shrink-0">
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
        <div className="max-w-[380px] sm:max-w-[520px] text-center mt-8 sm:mt-10">
          <p className="font-['Funnel_Display'] font-medium text-[15px] sm:text-[18px] md:text-[20px] text-[#404040] leading-[1.25]">
            {t("description")}
          </p>
        </div>

        {/* CTA Buttons (Node 18:1742) */}
        <div className="flex flex-row gap-4 sm:gap-6 items-center mt-8 sm:mt-10 pb-14 sm:pb-24">

          {/* Primary — filled green (Node 18:1737) */}
          <Link
            href="/products"
            className="group bg-[#23B349] text-white px-8 sm:px-10 py-3 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#1e9a3e] transition-all duration-300 shadow-lg shadow-green-600/20 active:scale-95"
          >
            <span className="font-['Funnel_Display'] font-medium text-[16px] sm:text-[20px] sm:text-[24px] whitespace-nowrap">
              {t("ourProducts")}
            </span>
            <span className="text-[18px] group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Secondary — black text w/ radial gradient border (Node 18:1740) */}
          <Link
            href="/about"
            className="relative px-8 sm:px-10 py-3 md:py-4 rounded-full flex items-center justify-center hover:bg-green-50 transition-all active:scale-95"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), radial-gradient(circle at 2% 163%, #1FD650 0%, #23B349 52%, #74FF38 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <span className="font-['Funnel_Display'] font-medium text-[16px] sm:text-[20px] sm:text-[24px] text-black whitespace-nowrap">
              {t("whyVita")}
            </span>
          </Link>
        </div>
      </div>

      {/* ── Green Block (curves + quote + video) ── */}
      <div className="relative w-full z-10 flex-grow flex flex-col items-center bg-[#23B349] px-4 pt-10 sm:pt-20 pb-24 lg:pb-32">

        {/* CSS Mountain Curve Edge */}
        <div className="absolute top-[-12vw] sm:top-[-14vw] left-[-25%] w-[150%] h-[14vw] bg-[#23B349] rounded-t-[100%] pointer-events-none -z-10" />

        {/* Doctor Duck — left, floating above curve (Node 16:1211) */}
        <div className="absolute top-[-8vw] sm:top-[-10vw] md:top-[-11vw] left-[2%] sm:left-[6%] md:left-[9%] z-30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <div className="relative w-[140px] sm:w-[200px] md:w-[320px] aspect-square animate-float -translate-y-[85%]">
            <Image
              src="/assets/hero/doctor-duck.png"
              alt="Doctor Duck"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Biscuit Stack — right, floating above curve (Node 15:1203) */}
        <div className="absolute top-[-8vw] sm:top-[-10vw] md:top-[-11vw] right-[0%] sm:right-[4%] md:right-[7%] z-30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          <div className="relative w-[110px] sm:w-[160px] md:w-[260px] aspect-square animate-float-delayed -translate-y-[85%]">
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
        <div className="w-full max-w-[950px] mx-auto flex flex-col items-start relative z-20 gap-12 sm:gap-16">

          {/* White Inspirational Quote (Node 20:2095) */}
          <h3 className="font-['Outfit'] font-bold text-[22px] sm:text-[30px] md:text-[42px] lg:text-[52px] text-white leading-[0.96] tracking-[-0.02em] max-w-[700px] text-left drop-shadow-md">
            {t("secondaryQuote")}
          </h3>

          {/* Client Avatars (Node 23:2734) */}
          <div className="flex items-center gap-4 sm:gap-5 w-fit">
            <div className="flex -space-x-2 sm:-space-x-3 drop-shadow-md">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[2px] border-white bg-[#BDBDBD] overflow-hidden z-30">
                <Image src="/assets/hero/client-1.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[2px] border-white overflow-hidden z-20" style={{ background: "#b0b0b0" }}>
                <Image src="/assets/hero/client-2.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[2px] border-white overflow-hidden z-10" style={{ background: "#c0c0c0" }}>
                <Image src="/assets/hero/client-3.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[2px] border-white bg-[#BDBDBD] flex items-center justify-center text-white font-['Roboto'] font-normal text-[14px] sm:text-[16px] z-0">
                +3
              </div>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-[14px] sm:text-[18px] tracking-[0.007em]">
              {t("ourClients")}
            </span>
          </div>
        </div>

        {/* ── Video Layout (Node 33:286) ── */}
        <div className="relative w-full max-w-[950px] mx-auto z-30 mt-12 sm:mt-20">

          {/* Multi-layered Yellow Text Tape (Node 20:2099 / 20:2100) */}
          <div
            className="absolute top-[76%] sm:top-[80%] left-[-18vw] w-[136vw] -z-10 -rotate-[6deg] origin-center flex flex-col overflow-hidden drop-shadow-2xl"
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
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.1/1] rounded-[20px] sm:rounded-[48px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border-[6px] sm:border-[10px] border-white bg-[#404040]">
            <Image
              src="/assets/hero/family-true.png"
              alt="Family enjoying Vita products"
              fill
              className="object-cover object-center hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            {/* Sound Mute Icon — top-left (Node 161:926) */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-12 h-12 sm:w-[63px] sm:h-[63px] rounded-full flex items-center justify-center bg-black/29 backdrop-blur-sm shadow-lg">
              <Image
                src="/assets/hero/sound-mute.svg"
                alt="Mute"
                width={28}
                height={28}
                className="sm:w-9 sm:h-9"
              />
            </div>
          </div>

          {/* Yellow Quality Badge — top-right (Node 19:2004) */}
          <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-6 w-[90px] h-[90px] sm:w-[160px] sm:h-[160px] z-40 animate-float pointer-events-none drop-shadow-xl">
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
