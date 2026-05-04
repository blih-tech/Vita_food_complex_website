"use client";

import { useTranslations } from "next-intl";
import { Link } from "@frontend/navigation";
import Image from "next/image";

export default function WhyChooseVitaHeroSection() {
  const t = useTranslations("WhyChooseVita");

  return (
    <section className="relative w-full overflow-hidden bg-white pt-[80px] md:pt-[120px] lg:pt-[160px]">
      {/* ── TOP CONTENT ── */}
      <div className="relative z-10 mx-auto px-4 flex flex-col items-center text-center max-w-[1200px]">
        {/* Headline — Outfit 800, Brand Green */}
        <h1
          className="font-[family-name:var(--font-outfit)] font-extrabold text-[32px] sm:text-[40px] md:text-[64px] lg:text-[80px] text-[#23B349] leading-[1.1] tracking-tight mb-6"
        >
          A Better Choice <br className="hidden sm:block" /> for Every Table
        </h1>

        {/* Subtitle — Funnel Display 500 */}
        <p
          className="font-[family-name:var(--font-funnel-display)] font-medium text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#404040]/70 max-w-[850px] leading-relaxed mb-8 md:mb-12 px-2"
        >
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-24 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/products"
            className="bg-[#23B349] text-white px-8 py-3 md:py-4 rounded-full font-bold text-[16px] md:text-[18px] transition-transform hover:scale-105 text-center"
          >
            Explore products →
          </Link>
          <Link
            href="/contact"
            className="border-[2px] border-[#404040]/20 text-[#404040] px-8 py-3 md:py-4 rounded-full font-bold text-[16px] md:text-[18px] transition-transform hover:bg-[#404040]/5 text-center"
          >
            Contact US
          </Link>
        </div>

        {/* ── VIDEO/IMAGE FRAME WITH MARQUEE ── */}
        <div className="relative w-full max-w-[1100px] mx-auto mb-16 md:mb-32">
          
          {/* Marquee Tape Behind */}
          <div className="absolute top-[40%] left-[-15%] w-[130%] h-14 sm:h-20 md:h-32 bg-[#FFEC19] rotate-[-2.5deg] z-0 flex items-center overflow-hidden shadow-lg">
            <div className="flex whitespace-nowrap animate-marquee">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span key={i} className="font-[family-name:var(--font-funnel-display)] font-black text-[24px] sm:text-[30px] md:text-[60px] text-[#23B349] mx-6 sm:mx-10 uppercase italic tracking-tighter">
                  Connecting!
                </span>
              ))}
            </div>
          </div>

          {/* Video Container */}
          <div className="relative z-10 aspect-video rounded-[20px] sm:rounded-[30px] md:rounded-[60px] border-[4px] sm:border-[8px] md:border-[15px] border-white overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/hero/video-family.png"
              alt="Family enjoying Vita"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Sound Icon */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-8 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 opacity-80">
               <Image src="/assets/hero/sound-mute-video.svg" alt="Mute" fill />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
