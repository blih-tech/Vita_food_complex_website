"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

const marqueeItems = Array.from({ length: 8 });

function MarqueeBanner({ t, text }: { t: any, text: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-12 w-[220vw] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-[#FFEC19] border-b-[5px] border-[#404040] shadow-2xl sm:h-14 sm:border-b-[6px] md:h-20 md:border-b-[8px] lg:h-28 lg:border-b-[12px]">
      <div className="relative flex h-full items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex whitespace-nowrap">
          {marqueeItems.map((_, index) => (
            <span
              key={index}
              className="mx-6 sm:mx-8 md:mx-10 font-['Funnel_Display'] text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-extrabold italic tracking-tighter text-[#DB4426]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VideoShowcaseSection({ content, locale }: { content?: any; locale?: string }) {
  const t = useTranslations("Hero");
  const lang = (locale || "en") as "en" | "am";
  const c = content?.[lang];

  const marqueeText = c?.marqueeText?.replace("{connecting}", c?.connecting || t("connecting")) || t("marqueeText").replace("{connecting}", t("connecting"));
  const videoAlt = c?.videoAlt || t("videoAlt");
  const videoThumbnail = c?.videoThumbnail || "/assets/hero/video-family.png";
  const badgeImage = c?.badgeImage || "/assets/hero/badge.svg";

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pb-16 md:pb-24 lg:pb-32">
      <div className="relative mx-auto max-w-[1380px]">
        <MarqueeBanner t={t} text={marqueeText} />

        <div className="relative z-10">
          {/* Video player */}
          <div className="group relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[48px] lg:rounded-[52px] border-4 border-white bg-[#404040] shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src={videoThumbnail}
              alt={videoAlt}
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />

            <div className="absolute inset-0 bg-black/30 sm:bg-black/20 transition-all duration-500 group-hover:bg-black/5" />

            {/* Mute Button */}
            <button
              aria-label="Mute video"
              className="absolute left-3 top-3 sm:left-4 sm:top-4 md:left-8 md:top-8 flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition-all hover:scale-110"
            >
              <Image
                src="/assets/hero/sound-mute-video.svg"
                alt="Mute"
                fill
                className="p-2.5 sm:p-3"
              />
            </button>

            {/* Play Button */}
            <button
              aria-label="Play video"
              className="absolute inset-0 m-auto flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-all active:scale-95 hover:scale-110 hover:bg-white/40"
            >
              <Play className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white fill-white ml-0.5" />
            </button>
          </div>

          {/* Floating Badge */}
          <div className="absolute -right-3 -top-6 sm:-right-6 sm:-top-10 md:-right-8 md:-top-12 z-30 h-20 w-20 sm:h-24 sm:w-24 md:h-40 md:w-40 lg:h-[215px] lg:w-[215px] rotate-[10deg] drop-shadow-2xl transition-transform duration-700 hover:rotate-[20deg]">
            <Image
              src={badgeImage}
              alt="Quality Badge"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
