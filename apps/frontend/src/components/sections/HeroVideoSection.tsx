"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";

const clients = [1, 2, 3];
const marqueeItems = Array.from({ length: 8 });

function ClientAvatars() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-4">
        {clients.map((client) => (
          <div
            key={client}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:h-12 md:w-12"
          >
            <Image
              src={`/assets/hero/client-${client}.png`}
              alt={`Client ${client}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-neutral-400 text-xs font-bold text-white shadow-md md:h-12 md:w-12 md:text-sm">
          +3
        </div>
      </div>
    </div>
  );
}

function MarqueeBanner({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-16 w-[220vw] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-[#FFEC19] border-b-[6px] border-[#404040] shadow-2xl md:h-24 md:border-b-[10px] lg:h-28 lg:border-b-[12px]">
      <div className="relative flex h-full items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex whitespace-nowrap">
          {marqueeItems.map((_, index) => (
            <span
              key={index}
              className="mx-10 font-['Funnel_Display'] text-3xl font-extrabold italic tracking-tight text-[#DB4426] md:text-5xl lg:text-7xl"
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
    <section id="hero-video" className="relative overflow-x-clip" aria-label="Hero section">
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

      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col px-6 pb-24 pt-28 md:px-10 md:pb-36 md:pt-40 lg:px-16 lg:pb-44 lg:pt-52">
        {/* Secondary Quote Section */}
        <div className="flex max-w-6xl flex-col items-start text-left">
          <blockquote className="max-w-5xl font-['Outfit'] text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            “{t("secondaryQuote")}”
          </blockquote>

          <div className="mt-10 flex items-center gap-5">
            <ClientAvatars />
            <span className="font-['Outfit'] text-lg font-semibold text-white md:text-xl">
              {t("ourClients")}
            </span>
          </div>
        </div>

        {/* Video Showcase */}
        <div className="relative mt-24 w-full md:mt-32">
          <MarqueeBanner t={t} />

          <div className="relative z-10 mx-auto max-w-[1380px]">
            <div className="group relative aspect-video overflow-hidden rounded-[32px] border-4 border-white bg-[#404040] shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:rounded-[48px] lg:rounded-[52px]">
              <Image
                src="/assets/hero/video-family.png"
                alt="Family enjoying Vita"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />

              {/* Mute Button */}
              <button
                aria-label="Mute video"
                className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition-transform duration-300 hover:scale-110 md:left-8 md:top-8 md:h-16 md:w-16"
              >
                <Image
                  src="/assets/hero/sound-mute-video.svg"
                  alt="Mute"
                  fill
                  className="p-3"
                />
              </button>

              {/* Play Button */}
              <button
                aria-label="Play video"
                className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30 md:h-24 md:w-24"
              >
                <Play className="h-10 w-10 text-white fill-white ml-1" />
              </button>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 -top-12 z-30 h-24 w-24 rotate-[10deg] drop-shadow-2xl transition-transform duration-700 hover:rotate-[20deg] md:-right-10 md:-top-16 md:h-40 md:w-40 lg:h-[215px] lg:w-[215px]">
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
