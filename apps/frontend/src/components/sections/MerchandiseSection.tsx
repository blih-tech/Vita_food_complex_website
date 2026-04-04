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
    <section className="bg-[#E9F7ED] py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[6.7%]">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 lg:mb-[72px] gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#23B349] text-5xl md:text-6xl lg:text-[64px] font-bold font-['Funnel_Display'] leading-tight">
              More Than Products
            </h2>
            <p className="text-[#333733] text-xl lg:text-2xl font-['Outfit'] font-normal opacity-80 max-w-2xl">
              Discover exclusive merchandise and access unforgettable Vita
              events
            </p>
          </div>

          <button className="px-16 py-5 bg-[#0F4B1F] text-white rounded-lg font-['Funnel_Display'] font-bold text-2xl lg:text-[32px] tracking-[1.28px] hover:bg-[#1a6b2e] transition-colors whitespace-nowrap">
            More
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-12 items-center"
          style={{ scrollSnapType: "x proximity" }}
        >
          {MERCH_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 relative rounded-lg overflow-hidden select-none bg-white/50"
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
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1102px] h-2 bg-[#CBC59D] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#0F4B1F] transition-all duration-100 rounded-full"
              style={{
                width: "30%", // Simulated thumb width
                transform: `translateX(${scrollProgress * 2.33}%)`, // Factor to map progress to track
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
