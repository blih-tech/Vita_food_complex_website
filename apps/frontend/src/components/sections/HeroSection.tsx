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
      data-node-id="466:2721"
    >
      {/* Background Elements (Exact from Figma) */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        {/* Hero background elements */}
        <div className="absolute left-[-33.02px] top-[-1px]" data-node-id="466:2719">
          {/* Right background decoration */}
          <div className="absolute flex h-[1180.918px] items-center justify-center left-[1196.2px] top-[-1px] w-[723.803px] opacity-20">
            <div className="flex-none rotate-180">
              <div className="h-[1180.918px] relative w-[723.803px]">
                <Image
                  src="/assets/hero/hero-bg-rectangle.png"
                  alt=""
                  fill
                  className="object-cover opacity-60"
                />
              </div>
            </div>
          </div>
          {/* Left background blur */}
          <div className="absolute blur-[13.55px] h-[1125.277px] left-[-33.02px] top-[-1px] w-[425.017px] mix-blend-screen opacity-30">
            <div className="absolute inset-0 bg-[#23b349]" />
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundImage: "linear-gradient(73.61234608838203deg, rgba(255, 255, 255, 0) 31.925%, rgb(255, 255, 255) 73.82%)" 
              }}
            />
            <Image
              src="/assets/hero/hero-bg-rectangle-1.png"
              alt=""
              fill
              className="object-cover opacity-40"
            />
          </div>
        </div>
        {/* Background vector wave */}
        <div className="-translate-x-1/2 absolute h-[2286.921px] left-1/2 top-[934.79px] w-[7210.039px] opacity-10">
          <Image
            src="/assets/hero/hero-bg-vector.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero Text Content (Exact Figma positioning) */}
      <div 
        className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 top-[267.71px] w-[1024px] max-w-full px-4"
        data-node-id="19:1911"
      >
        {/* Main heading group */}
        <div className="h-[326.885px] relative shrink-0 w-full" data-node-id="19:1910">
          <div className="-translate-x-1/2 absolute contents left-1/2 top-0" data-node-id="15:1013">
            {/* "Connecting!" - Large green text */}
            <div className="-translate-x-1/2 absolute h-[169px] left-1/2 top-[157.89px] w-[1024px]" data-node-id="19:1903">
              <p className="absolute font-[family-name:var(--font-secondary,'Outfit',sans-serif)] font-extrabold inset-0 leading-[0.88] text-[#23b349] text-[12vw] min-[375px]:text-[60px] sm:text-[96px] md:text-[140px] lg:text-[192px] text-center tracking-[-5.76px] whitespace-nowrap">
                {t("connecting")}
              </p>
            </div>
            {/* "A new stylish way of" - Regular text */}
            <div className="-translate-x-1/2 absolute font-[family-name:var(--font-secondary,'Outfit',sans-serif)] font-extrabold leading-[0] left-1/2 text-[6vw] min-[375px]:text-[28px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-[#404040] text-center top-0 tracking-[-0.384px] whitespace-nowrap">
              <p className="leading-[0.88] mb-0 whitespace-pre">{`A new stylish `}</p>
              <p className="leading-[0.88] whitespace-pre">way of</p>
            </div>
          </div>
          
          {/* Strawberry - Right side */}
          <div className="absolute left-[708.48px] size-[81.73px] top-[84.25px] scale-[0.8] sm:scale-100" data-node-id="16:1209">
            <Image
              src="/assets/hero/strawberry.png"
              alt="Strawberry"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Chocolate Chip Cookie - Left side */}
          <div className="absolute flex items-center justify-center left-[224.6px] size-[108px] top-[86.42px] scale-[0.8] sm:scale-100">
            <div className="flex-none rotate-[18.96deg]">
              <div className="relative size-[84.994px]" data-node-id="18:1577">
                <Image
                  src="/assets/hero/chocolate-chip-cookie.png"
                  alt="Chocolate Chip Cookie"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle - Exact Figma styling */}
        <div 
          className="font-[family-name:var(--font-primary,'Funnel_Display',sans-serif)] leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[18px] md:text-[20px] text-[#404040] text-center tracking-[-0.08px] whitespace-nowrap max-w-full"
          data-node-id="19:1769"
        >
          <p className="leading-[normal] mb-0 whitespace-pre">{`From everyday baking to special treats, Vita brings `}</p>
          <p className="leading-[normal] whitespace-pre">joy, taste, and quality to your table.</p>
        </div>

        {/* CTA Buttons - Exact Figma design */}
        <div 
          className="content-stretch flex gap-[24px] items-center relative shrink-0"
          data-node-id="18:1742"
        >
          {/* Primary button */}
          <Link
            href="/products"
            className="bg-[#23b349] content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 text-white whitespace-nowrap hover:bg-[#1e9a3e] transition-all duration-300"
            data-node-id="18:1737"
          >
            <p className="font-[family-name:var(--font-primary,'Funnel_Display',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] tracking-[-0.096px]">
              {t("ourProducts")}
            </p>
            <div className="flex flex-col font-[family-name:var(--font-secondary,'Outfit',sans-serif)] font-normal justify-center leading-[0] relative shrink-0 text-[16px] sm:text-[20px] tracking-[-0.08px]">
              <p className="leading-[normal]">→</p>
            </div>
          </Link>

          {/* Secondary button */}
          <Link
            href="/about"
            className="border border-[#1fd650] border-solid content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0 hover:bg-[#23b349] hover:text-white transition-all duration-300"
            data-node-id="18:1740"
          >
            <p className="font-[family-name:var(--font-primary,'Funnel_Display',sans-serif)] leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.096px] whitespace-nowrap">
              <span className="leading-[normal] text-[20px] sm:text-[24px]">{t("whyVita")}</span>
              <span className="font-['Outfit',sans-serif] font-normal leading-[normal] text-[16px] sm:text-[20px] tracking-[-0.08px]"></span>
            </p>
          </Link>
        </div>
      </div>

      {/* Hero Images Section (Exact Figma positioning) */}
      <div className="absolute contents left-[-432.14px] top-[3.87px]" data-node-id="466:2720">
        {/* Right side - Tiramisu image */}
        <div className="absolute h-[612px] left-[1386px] top-[548px] w-[685px]" data-node-id="19:1819">
          <div className="absolute flex h-[250.296px] items-center justify-center left-[114.77px] mix-blend-multiply top-[341.56px]">
            <div className="relative w-full h-full">
              {/* Decorative vector overlay */}
              <div className="absolute inset-0 bg-yellow-400 opacity-30 rounded-lg" />
            </div>
          </div>
          {/* Tiramisu main image */}
          <div className="absolute left-[51.627px] top-[104.422px] w-[581.485px] h-[514.683px]">
            <Image
              src="/assets/hero/tiramisu-1.png"
              alt="Tiramisu"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        
        {/* Left side - Doctor Duck */}
        <div className="absolute h-[612px] left-[140px] top-[634px] w-[550px]" data-node-id="19:1818">
          <div className="absolute flex h-[69.983px] items-center justify-center left-[26.925px] top-[500.213px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-green-400 opacity-30 rounded-lg" />
            </div>
          </div>
          {/* Doctor Duck main image */}
          <div className="absolute left-[30.79px] top-[45.988px] w-[496.42px] h-[496.42px]">
            <Image
              src="/assets/hero/doctor-duck-updated.png"
              alt="Doctor Duck"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Background decorative image */}
        <div className="absolute left-[114.07px] top-[771.611px] w-[763.085px] h-[767.739px]">
          <Image
            src="/assets/hero/chatgpt-image-aug-22.png"
            alt="Background decoration"
            fill
            className="object-cover opacity-20"
          />
        </div>
      </div>

      {/* Green Block Section */}
      <div className="absolute left-0 top-[2327.46px] w-full h-[507.263px] bg-[#23B349]" data-node-id="20:2631" />
      
      {/* Hero Second Text Section */}
      <div 
        className="absolute left-[268px] top-[1236.377px] w-[1384px] h-[352px]"
        data-node-id="23:2788"
      >
        {/* Quote text */}
        <div 
          className="absolute left-0 top-0 w-[1384px] h-[244px]"
          data-node-id="20:2095"
        >
          <h3 className="font-['Outfit'] font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-white leading-[1.0] tracking-[-0.01em] max-w-[1384px] text-left">
            "{t("secondaryQuote")}"
          </h3>
        </div>
        
        {/* Client avatars badge */}
        <div 
          className="absolute left-0 top-[308px] w-[258px] h-[44px]"
          data-node-id="23:2734"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="relative w-10 h-10 rounded-full border-2 border-white bg-[#BDBDBD] overflow-hidden z-30">
                <Image src="/assets/hero/client-1.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden z-20" style={{ background: "#b0b0b0" }}>
                <Image src="/assets/hero/client-2.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden z-10" style={{ background: "#c0c0c0" }}>
                <Image src="/assets/hero/client-3.png" alt="Client" fill className="object-cover object-top" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#BDBDBD] flex items-center justify-center text-white font-['Outfit'] font-semibold text-[12px] z-0">
                +3
              </div>
            </div>
            <span className="font-['Outfit'] font-semibold text-white text-[14px]">
              {t("ourClients")}
            </span>
          </div>
        </div>
      </div>

      {/* Video Section (Exact Figma positioning) */}
      <div 
        className="absolute left-[-68.86px] top-[1879px] w-[2057.723px] h-[647px]"
        data-node-id="33:286"
      >
        {/* Yellow text tape frames */}
        <div 
          className="absolute left-[4.646px] top-[366.443px] w-[2052.554px] h-[322.73px]"
          data-node-id="20:2099"
        >
          <div className="absolute inset-0 bg-[#404040] rounded-lg" />
        </div>
        
        <div 
          className="absolute left-[2.844px] top-[340.892px] w-[2054.879px] h-[290.888px]"
          data-node-id="20:2100"
        >
          <div className="absolute inset-0 bg-[#FFEC19] flex items-center overflow-hidden rounded-lg">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="text-[#DB4426] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-['Funnel_Display'] font-extrabold uppercase tracking-tight px-8 sm:px-12"
                >
                  A new stylish way of Connecting!
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Video frame container */}
        <div 
          className="absolute left-[341.862px] top-[4px] w-[1380px] h-[647px]"
          data-node-id="20:2101"
        />
        
        <div 
          className="absolute left-[338.862px] top-0 w-[1380px] h-[647px]"
          data-node-id="38:736"
        >
          {/* Main video frame */}
          <div className="relative w-full h-full rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-[8px] sm:border-[12px] border-white bg-[#404040]">
            <Image
              src="/assets/hero/family-true.png"
              alt="Family enjoying Vita products"
              fill
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            
            {/* Sound mute icon */}
            <div 
              className="absolute left-[calc(50%-631.5px)] top-[calc(50%-262px)] w-[63px] h-[63px] flex items-center justify-center bg-black/30 backdrop-blur-md rounded-full border border-white/20 hover:bg-black/50 transition-colors cursor-pointer"
              data-node-id="161:926"
            >
              <Image
                src="/assets/hero/sound-mute-light.svg"
                alt="Mute"
                fill
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quality Badge (Exact Figma positioning) */}
      <div 
        className="absolute flex items-center justify-center left-[1489.22px] top-[1705.96px] w-[249.646px] h-[249.646px]"
        data-node-id="19:2004"
      >
        <div className="flex-none rotate-[10.21deg]">
          <div className="relative rounded-[999px] w-[214.946px] h-[214.946px] bg-yellow-400 shadow-2xl animate-float">
            {/* Badge inner content */}
            <div className="absolute inset-[21.93%_21.96%] bg-white rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="font-['Outfit'] font-bold text-[#23B349] text-[24px] sm:text-[28px]">TRUE</div>
                <div className="font-['Outfit'] font-semibold text-[#404040] text-[12px] sm:text-[14px] mt-1">QUALITY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -3s;
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .contents {
          contents: normal;
        }
      `}</style>
    </section>
  );
}
