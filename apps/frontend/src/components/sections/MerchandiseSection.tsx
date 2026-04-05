"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const MERCH_ITEMS = [
  { id: 1, image: "/assets/merchandise/merch-1.png", width: 420, height: 380 },
  { id: 2, image: "/assets/merchandise/merch-2.png", width: 420, height: 420 },
  { id: 3, image: "/assets/merchandise/merch-3.png", width: 478, height: 489 },
  { id: 4, image: "/assets/merchandise/merch-4.png", width: 420, height: 420 },
  { id: 5, image: "/assets/merchandise/merch-5.png", width: 420, height: 380 },
];

export default function MerchandiseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="bg-[#9F98B3] py-12 lg:py-16 relative overflow-hidden rounded-[8px] mx-4 lg:mx-[132px]">
      <div className="max-w-[1664px] mx-auto px-4 lg:px-0">
        {/* Header Row - Figma: x=0, y=23, gap=72px */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 lg:mb-[72px] gap-6 px-4 lg:px-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight">
              More Than Products
            </h2>
            <p className="text-white/80 text-lg lg:text-xl font-['Outfit'] font-normal max-w-2xl">
              Discover exclusive merchandise and access unforgettable Vita
              events
            </p>
          </div>

          <button className="px-12 py-4 lg:px-16 lg:py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-xl lg:text-[32px] tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors whitespace-nowrap w-fit">
            More
          </button>
        </div>

        {/* Horizontal Scroll Container - Figma: gap=96px */}
        <div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-8 items-center px-4 lg:px-0"
          style={{ scrollSnapType: "x proximity" }}
        >
          {MERCH_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 relative rounded-lg overflow-hidden select-none bg-white/20"
              style={{
                scrollSnapAlign: "start",
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              <Image
                src={item.image}
                alt="Vita Merchandise"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-6 flex justify-center px-4 lg:px-0">
          <div className="relative w-full max-w-[1102px] h-2 bg-white/30 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-100 rounded-full"
              style={{
                width: "30%",
                transform: `translateX(${scrollProgress * 2.33}%)`,
              }}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
