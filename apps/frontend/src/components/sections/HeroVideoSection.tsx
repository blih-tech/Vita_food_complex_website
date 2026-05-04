"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const FloatingAssets = () => (
  <div className="relative max-w-[1400px] mx-auto h-[350px] md:h-[500px] lg:h-[650px] z-10 pointer-events-none">
    <div className="absolute left-[2%] md:left-[6%] lg:left-[10%] bottom-[12%] md:bottom-[15%] lg:bottom-[20%] w-[180px] h-[180px] md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] animate-float">
      <Image src="/assets/hero/doctor-duck.png" alt="Doctor Duck" fill className="object-contain" priority />
    </div>
    <div className="absolute right-[2%] md:right-[5%] lg:right-[8%] bottom-[18%] md:bottom-[22%] lg:bottom-[28%] w-[150px] h-[150px] md:w-[260px] md:h-[260px] lg:w-[400px] lg:h-[400px] animate-float-delayed">
      <Image src="/assets/hero/biscuit-stack.png" alt="Biscuit Stack" fill className="object-contain" priority />
    </div>
  </div>
);

const VideoMarqueeSection = ({ t }: { t: any }) => (
  <div className="relative bg-[#23B349] pt-12 pb-[100px] md:pb-[160px] z-10">
    <div className="max-w-[1200px] mx-auto px-6">
      
      {/* Quote and Clients */}
      <div className="mb-24 md:mb-36">
        <h3 className="font-[family-name:var(--font-funnel-display)] font-bold text-[24px] md:text-[38px] lg:text-[52px] text-white leading-[1.15] mb-12 max-w-[1050px]">
          {t("secondaryQuote")}
        </h3>
        <div className="flex flex-row items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden shadow-lg">
                <Image src={`/assets/hero/client-${i}.png`} alt="Client" fill className="object-cover" />
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

      {/* Video & Marquee */}
      <div className="relative max-w-[1150px] mx-auto">
        <div className="absolute top-[42%] left-[-10%] w-[120%] h-20 md:h-32 lg:h-44 bg-[#FFEC19] rotate-[-2.5deg] z-0 flex items-center overflow-hidden shadow-xl">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="font-[family-name:var(--font-funnel-display)] font-black text-[30px] md:text-[60px] lg:text-[90px] text-[#23B349] mx-10 uppercase italic tracking-tighter">
                {t("connecting")}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="aspect-video rounded-[35px] md:rounded-[55px] lg:rounded-[70px] border-[8px] md:border-[15px] border-white overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.25)] group cursor-pointer">
            <Image src="/assets/hero/video-family.png" alt="Family enjoying Vita" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
              <div className="absolute top-6 left-6 md:top-12 md:left-12 w-10 h-10 md:w-20 md:h-20 opacity-90 transition-all hover:scale-110 active:scale-90">
                <Image src="/assets/hero/sound-mute-video.svg" alt="Mute" fill />
              </div>
            </div>
          </div>

          <div className="absolute -top-[10%] -right-[5%] md:-top-[12%] md:-right-[4%] w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] z-20 drop-shadow-2xl transition-transform hover:rotate-12 duration-700">
            <Image src="/assets/hero/badge.svg" alt="Quality Badge" fill className="object-contain" />
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default function HeroVideoSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero-video" className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {/* The Arc/Hill Shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180%] md:w-[150%] lg:w-[130%] aspect-[6/1] bg-[#23B349] rounded-t-[100%] translate-y-[5%] z-0" />
        
        <FloatingAssets />
        <VideoMarqueeSection t={t} />
      </div>

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
