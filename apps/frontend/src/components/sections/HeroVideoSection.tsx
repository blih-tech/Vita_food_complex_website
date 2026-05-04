"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

const clients = [1, 2, 3];
const marqueeItems = Array.from({ length: 8 });

function ClientAvatars() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex -space-x-3 sm:-space-x-4">
        {clients.map((client) => (
          <div
            key={client}
            className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:h-12 md:w-12"
          >
            <Image
              src={`/assets/hero/client-${client}.png`}
              alt={`Client ${client}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-white bg-neutral-400 text-[10px] font-bold text-white shadow-md md:h-12 md:w-12 md:text-sm">
          +3
        </div>
      </div>
    </div>
  );
}

function MarqueeBanner({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-12 w-[220vw] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-[#FFEC19] border-b-[5px] border-[#404040] shadow-2xl sm:h-16 sm:border-b-[6px] md:h-20 md:border-b-[8px] lg:h-28 lg:border-b-[12px]">
      <div className="relative flex h-full items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex whitespace-nowrap">
          {marqueeItems.map((_, index) => (
            <span
              key={index}
              className="mx-6 sm:mx-8 md:mx-10 font-['Funnel_Display'] text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold italic tracking-tighter text-[#DB4426]"
            >
              A new stylish way of {t("connecting")}!
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroVideoSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero-video"
      className="relative overflow-x-clip"
      aria-label="Hero section"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/landing-hero.svg')] bg-cover bg-top bg-no-repeat" />
      </div>

      {/* Floating Decorative Assets */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 -top-80 h-[280px] w-[280px] md:h-[420px] md:w-[420px] lg:h-[540px] lg:w-[540px]">
          <Image
            src="/assets/hero/doctor-duck.png"
            alt="Doctor Duck"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute right-0 -top-60 h-[220px] w-[220px] md:h-[360px] md:w-[360px] lg:h-[500px] lg:w-[500px]">
          <Image
            src="/assets/hero/biscuit-stack.png"
            alt="Biscuit Stack"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col px-4 sm:px-6 md:px-10 pb-16 pt-20 sm:pt-24 md:pb-36 md:pt-40 lg:px-16 lg:pb-44 lg:pt-52">
        {/* Secondary Quote Section - Responsive typography and spacing */}
        <div className="flex max-w-6xl flex-col items-start text-left px-2 sm:px-0">
          <blockquote className="max-w-4xl font-['Outfit'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-white">
            “{t("secondaryQuote")}”
          </blockquote>

          <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-5">
            <ClientAvatars />
            <span className="font-['Outfit'] text-base sm:text-lg md:text-xl font-semibold text-white">
              {t("ourClients")}
            </span>
          </div>
        </div>

        {/* Video Showcase - Responsive spacing and controls */}
        <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 w-full">
          <MarqueeBanner t={t} />

          <div className="relative z-10 mx-auto max-w-[1380px] px-2 sm:px-0">
            <div className="group relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px] border-4 border-white bg-[#404040] shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:rounded-[48px] lg:rounded-[52px]">
              <Image
                src="/assets/hero/video-family.png"
                alt="Family enjoying Vita"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 sm:bg-black/10 transition-all duration-500 group-hover:bg-black/5" />

              {/* Mute Button - Larger on mobile for touch */}
              <button
                aria-label="Mute video"
                className="absolute left-3 top-3 sm:left-4 sm:top-4 flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 md:left-8 md:top-8"
              >
                <Image
                  src="/assets/hero/sound-mute-video.svg"
                  alt="Mute"
                  fill
                  className="p-2.5 sm:p-3"
                />
              </button>

              {/* Play Button - Larger touch target on mobile */}
              <button
                aria-label="Play video"
                className="absolute inset-0 m-auto flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-all active:scale-95 hover:scale-110 hover:bg-white/40"
              >
                <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white fill-white ml-0.5" />
              </button>
            </div>

            {/* Floating Badge - Responsive positioning and size */}
            <div className="absolute -right-2 -top-8 sm:-right-4 sm:-top-12 z-30 h-20 w-20 sm:h-24 sm:w-24 md:h-40 md:w-40 lg:h-[215px] lg:w-[215px] rotate-[10deg] drop-shadow-2xl transition-transform duration-700 hover:rotate-[20deg]">
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

      <style jsx>{`
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
