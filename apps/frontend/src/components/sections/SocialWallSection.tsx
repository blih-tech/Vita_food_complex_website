"use client";

import { useRef } from "react";
import Image from "next/image";

const COLUMN_1_IMAGES = [
  "/assets/social/social-1.png",
  "/assets/social/social-2.png",
  "/assets/social/social-3.png",
];

const COLUMN_2_IMAGES = [
  "/assets/social/social-4.png",
  "/assets/social/social-5.png",
  "/assets/social/social-1.png",
];

const COLUMN_3_IMAGES = [
  "/assets/social/social-6.png",
  "/assets/social/social-7.png",
  "/assets/social/social-8.png",
];

interface ScrollingColumnProps {
  images: string[];
  direction: "up" | "down";
  speed?: string;
}

function ScrollingColumn({
  images,
  direction,
  speed = "25s",
}: ScrollingColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const displayImages = [...images, ...images];

  const handleMouseEnter = () => {
    if (columnRef.current) {
      columnRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (columnRef.current) {
      columnRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      className="flex-1 overflow-hidden h-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={columnRef}
        className={`flex flex-col gap-8 md:gap-[128px] will-change-transform ${
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }`}
        style={{ animationDuration: speed }}
      >
        {displayImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-[541/680] rounded-lg overflow-hidden flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Social moment ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialWallSection() {
  return (
    <section className="bg-[#E9F7ED] py-16 lg:py-20 relative overflow-hidden">
      {/* Top shadow - Figma: x=0, y=0 */}
      <div
        className="absolute top-0 left-0 right-0 h-[286px] pointer-events-none z-10"
        style={{
          boxShadow: "0px 0px 70px 8.75px rgba(233, 247, 237, 1)",
        }}
      />

      <div className="max-w-[1842px] mx-auto px-6">
        {/* Header Area - Figma: x=94, y=0, width=1748 */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16 gap-4 px-4">
          <p className="text-[#333733] text-lg lg:text-xl font-['Outfit'] uppercase tracking-widest">
            Family time
          </p>
          <h2 className="text-[#23B349] text-4xl md:text-5xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight">
            Moments with Vita
          </h2>
          <p className="text-[#333733] text-lg lg:text-xl font-['Outfit'] max-w-3xl opacity-80">
            See how people enjoy and share their everyday moments with Vita
            biscuits
          </p>
        </div>

        {/* Scrolling Grid Container - Figma: x=0, y=211, 1842x2543 */}
        <div className="relative h-[500px] md:h-[700px] lg:h-[2543px] w-full overflow-hidden">
          {/* Grid Columns */}
          <div className="flex gap-[21px] h-full px-4">
            <ScrollingColumn images={COLUMN_1_IMAGES} direction="up" />
            <ScrollingColumn images={COLUMN_2_IMAGES} direction="down" />
            <ScrollingColumn images={COLUMN_3_IMAGES} direction="up" />
          </div>

          {/* Gradient Overlays */}
          <div
            className="absolute top-0 left-0 right-0 h-[140px] z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #E9F7ED 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[140px] z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #E9F7ED 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Bottom shadow - Figma: x=9, y=1983 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[560px] pointer-events-none z-10"
        style={{
          boxShadow: "0px 0px 70px 8.75px rgba(233, 247, 237, 1)",
        }}
      />

      <style jsx global>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}</style>
    </section>
  );
}
