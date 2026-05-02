"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center bg-gradient-to-b from-[var(--color-background-page)] to-white min-h-[100vh] pt-20"
    >
      {/* ── Background Elements ── */}
      <div className="absolute top-0 left-0 w-full h-[1180.918px] pointer-events-none z-0 overflow-hidden">

        {/* Left blur shape - matching Figma exactly */}
        <div className="absolute top-[-1px] left-[-33.02px] w-[425.017px] h-[1125.277px] bg-[#23b349] blur-[13.55px] rounded-full opacity-30 mix-blend-screen" 
             style={{
               background: 'linear-gradient(73.61234608838203deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)',
               mixBlendMode: 'screen'
             }}
        />

        {/* Right decorative element - matching Figma positioning */}
        <div className="absolute top-[-1px] left-[1196.2px] w-[723.803px] h-[1180.918px] pointer-events-none">
          <div className="w-full h-full rotate-180">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#23b349]/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom wave vector */}
        <div className="absolute top-[934.79px] left-1/2 -translate-x-1/2 w-[7210.039px] h-[2286.921px] pointer-events-none">
          <svg viewBox="0 0 7210.039 2286.921" className="w-full h-full">
            <path d="M0,0 C1000,500 2000,300 3000,600 C4000,900 5000,200 6000,400 C7000,600 7210,300 7210,0 L7210,2286.921 L0,2286.921 Z" 
                  fill="rgba(35,179,73,0.1)" />
          </svg>
        </div>
      </div>

      {/* ── Top Section: Heading + Subtitle + CTAs ── */}
      <div className="relative z-20 w-full max-w-[1024px] px-4 flex flex-col items-center pt-8 md:pt-16 pb-12 mx-auto">

        {/* Hero text container - matching Figma exactly */}
        <div className="relative w-full flex flex-col items-center gap-[48px] mt-[267.71px] md:mt-[300px]">
          
          {/* Main heading container */}
          <div className="relative w-full h-[326.885px] md:h-[400px]">
            
            {/* "A new stylish way of" text */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full md:w-[1024px]">
              <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-[60px] md:text-[96px] leading-[0.88] tracking-[-0.384px] text-[#404040] text-center whitespace-nowrap">
                <span className="block leading-[0.88]">A new stylish</span>
                <span className="block leading-[0.88]">way of</span>
              </h2>
            </div>
            
            {/* Strawberry decoration - responsive positioning */}
            <div className="absolute right-[10%] top-[84.25px] md:left-[708.48px] md:right-auto w-[60px] h-[60px] md:w-[81.73px] md:h-[81.73px]">
              <Image
                src="/assets/hero/strawberry.png"
                alt="Strawberry decoration"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Gemini decoration - responsive positioning */}
            <div className="absolute left-[10%] top-[86.42px] md:left-[224.6px] w-[80px] h-[80px] md:w-[108px] md:h-[108px] flex items-center justify-center">
              <div className="w-[60px] h-[60px] md:w-[84.994px] md:h-[84.994px] rotate-[18.96deg]">
                <Image
                  src="/assets/hero/gemini-generated-image-1.png"
                  alt="Decoration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* "Connecting!" text - large green */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[157.89px] md:top-[157.89px] w-full md:w-[1024px] h-[120px] md:h-[169px]">
              <h1 className="font-[family-name:var(--font-outfit)] font-extrabold text-[120px] md:text-[192px] leading-[0.88] tracking-[-5.76px] text-[#23b349] text-center whitespace-nowrap">
                {t("connecting")}
              </h1>
            </div>
          </div>

          {/* Subtitle - matching Figma typography exactly */}
          <div className="relative w-full text-center">
            <p className="font-[family-name:var(--font-funnel-display)] font-medium text-[20px] leading-[normal] tracking-[-0.08px] text-[#404040] text-center whitespace-nowrap">
              <span className="block leading-[normal]">{t("description")}</span>
            </p>
          </div>

          {/* CTA Buttons - matching Figma exactly */}
          <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-center justify-center">
            
            {/* Primary button - filled green */}
            <Link
              href="/products"
              className="bg-[#23b349] text-white flex gap-[12px] md:gap-[16px] items-center justify-center px-[24px] md:px-[32px] py-[12px] md:py-[16px] h-[48px] md:h-[56px] rounded-[999px] whitespace-nowrap hover:bg-[#1e9a3e] transition-all duration-300 shadow-lg shadow-green-600/25 active:scale-95 w-full md:w-auto"
            >
              <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[18px] md:text-[24px] leading-[normal] tracking-[-0.096px]">
                {t("ourProducts")}
              </span>
              <span className="text-[16px] md:text-[20px]">→</span>
            </Link>

            {/* Secondary button - bordered */}
            <Link
              href="/about"
              className="border border-[#1fd650] border-solid flex gap-[12px] md:gap-[16px] items-center justify-center px-[24px] md:px-[32px] py-[12px] md:py-[16px] h-[48px] md:h-[56px] rounded-[999px] whitespace-nowrap hover:bg-[#23b349] hover:text-white transition-all duration-300 active:scale-95 w-full md:w-auto"
            >
              <span className="font-[family-name:var(--font-funnel-display)] font-medium text-[18px] md:text-[24px] leading-[0] tracking-[-0.096px] text-[#000000]">
                {t("whyVita")}
                <span className="font-[family-name:var(--font-outfit)] font-normal text-[16px] md:text-[20px] tracking-[-0.08px]">®</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Green Block (curves + quote + video) ── */}
      <div className="relative w-full z-10 flex-grow flex flex-col items-center bg-[var(--color-primary)] px-4 pt-16 sm:pt-24 pb-32 lg:pb-40">

        {/* SVG Wave Curve Edge - Pixel Perfect from hero-wave.svg */}
        <div className="absolute top-0 left-0 w-full -translate-y-[99%] pointer-events-none z-0 overflow-hidden h-[12vw] min-h-[60px] max-h-[220px]">
          <svg
            viewBox="0 0 7211 800"
            preserveAspectRatio="none"
            className="w-full h-full fill-[var(--color-primary)]"
          >
            <path d="M7210.29 502.487C7160.26 520.812 7117.01 534.957 7083.12 543.637C6415.35 717.563 5727.56 525.312 5268.29 333.384C4738.97 112.2 4179.32 0 3605.14 0C3030.97 0 2471.31 112.2 1942 333.384C1482.72 525.312 794.939 717.884 127.164 543.637C93.2754 534.957 50.0266 520.812 0 502.487V800H7211V502.487H7210.29Z" />
          </svg>
        </div>

        {/* Doctor Duck - matching Figma positioning */}
        <div className="absolute top-[3.87px] left-[-432.14px] z-30">
          <div className="relative w-[685px] h-[612px]">
            {/* Tiramisu */}
            <div className="absolute top-[548px] left-[1386px] w-[250.296px] h-[250.296px] mix-blend-multiply">
              <Image
                src="/assets/hero/tiramisu.png"
                alt="Tiramisu"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Doctor Duck */}
            <div className="absolute top-[548px] left-[1386px] w-[250.296px] h-[250.296px] mix-blend-multiply">
              <Image
                src="/assets/hero/doctor-duck-delight.png"
                alt="Doctor Duck"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* ChatGPT Image */}
            <div className="absolute top-[548px] left-[1386px] w-[250.296px] h-[250.296px] mix-blend-multiply">
              <Image
                src="/assets/hero/chatgpt-image.png"
                alt="ChatGPT"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Gemini Generated Image 2 */}
            <div className="absolute top-[548px] left-[1386px] w-[250.296px] h-[250.296px] mix-blend-multiply">
              <Image
                src="/assets/hero/gemini-generated-image-2.png"
                alt="Gemini"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Sound Mute Icon */}
            <div className="absolute left-[calc(50%-631.5px)] top-[calc(50%-262px)] w-[63px] h-[63px] flex items-center justify-center">
              <Image
                src="/assets/hero/sound-mute-light.svg"
                alt="Sound Mute"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── HERO SECOND TEXT ── */}
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-start relative z-20 gap-10 sm:gap-16 mt-8 sm:mt-12">

          {/* White Inspirational Quote */}
          <h3 className="font-[family-name:var(--font-outfit)] font-semibold text-[18px] min-[375px]:text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] text-white leading-[1.1] tracking-[-0.01em] max-w-[900px] text-left drop-shadow-lg">
            &quot;{t("secondaryQuote")}&quot;
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 border-white bg-[#BDBDBD] flex items-center justify-center text-white font-[family-name:var(--font-outfit)] font-semibold text-[12px] sm:text-[14px] z-0">
                +3
              </div>
            </div>
            <span className="font-[family-name:var(--font-outfit)] font-semibold text-white text-[14px] sm:text-[16px] tracking-wide">
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
            <div className="w-full h-[16px] min-[375px]:h-[20px] sm:h-[32px] md:h-[45px] bg-[var(--color-body-text)]" />
            {/* Yellow marquee layer */}
            <div className="w-full h-[45px] min-[375px]:h-[55px] sm:h-[100px] md:h-[140px] bg-[#FFEC19] flex items-center overflow-hidden">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#DB4426] text-[20px] min-[375px]:text-[28px] sm:text-[48px] md:text-[72px] lg:text-[96px] font-[family-name:var(--font-funnel-display)] font-extrabold uppercase tracking-tight px-6 sm:px-12"
                  >
                    A new stylish way of Connecting!
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Video Frame */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.2/1] rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-[5px] sm:border-[10px] border-white bg-[var(--color-body-text)]">
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

          {/* Quality Badge — top-right */}
          <div className="absolute top-[1705.96px] left-[1489.22px] w-[249.646px] h-[249.646px] z-40">
            <div className="relative w-[214.946px] h-[214.946px] rounded-full rotate-[10.21deg]">
              <div className="absolute inset-0 flex items-center justify-center" style={{ containerType: "size" }}>
                <div className="w-full h-full rotate-[23.84deg]">
                  <div className="w-full h-full relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#FFEC19" />
                      <text x="50" y="55" textAnchor="middle" fill="#DB4426" fontSize="12" fontWeight="bold">QUALITY</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
