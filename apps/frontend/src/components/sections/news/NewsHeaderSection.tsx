import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsHeaderSection() {
  const categories = [
    { name: "All News", active: true },
    { name: "News", active: false },
    { name: "Updates", active: false },
    { name: "Market insights", active: false },
    { name: "Company News", active: false },
    { name: "Product Updates", active: false },
  ];

  return (
    <section className="flex flex-col items-center w-full gap-8 md:gap-[62px]">
      {/* Date & Search Bar */}
      <div className="w-full flex justify-between items-center border-b-[1.26px] border-[#333733] pb-2 px-1">
        <div className="flex items-center gap-2">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="9.5" stroke="#333733" strokeWidth="1.5"/>
            <path d="M11.5 2V21M2 11.5H21" stroke="#333733" strokeWidth="1.5"/>
            <path d="M11.5 2C15.5 2 15.5 21 11.5 21C7.5 21 7.5 2 11.5 2Z" stroke="#333733" strokeWidth="1.5"/>
          </svg>
          <span className="font-funnel-display font-medium text-[20px] text-[#333733]">
            Tuesday, October 29, 2024
          </span>
        </div>
        <button className="p-1 hover:opacity-70 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8333 22.1667C17.988 22.1667 22.1667 17.988 22.1667 12.8333C22.1667 7.67868 17.988 3.5 12.8333 3.5C7.67868 3.5 3.5 7.67868 3.5 12.8333C3.5 17.988 7.67868 22.1667 12.8333 22.1667Z" stroke="#333733" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.5 24.5L19.425 19.425" stroke="#333733" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Title */}
      <h1 className="text-[#23B349] font-funnel-display font-bold text-5xl md:text-[80px] leading-none tracking-tight text-center">
        The News*
      </h1>

      {/* Categories */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-0 border-t-[1.26px] border-[#333733]"></div>
        <div className="flex flex-row overflow-x-auto w-full md:w-auto max-w-full items-center justify-start md:justify-center gap-6 py-3 no-scrollbar px-4 md:px-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 font-funnel-display font-medium text-[20px] md:text-[24px] leading-tight transition-colors hover:text-[#23B349] px-3 ${
                cat.active ? "text-[#23B349]" : "text-[#333733]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="w-full h-0 border-t-[1.26px] border-[#333733]"></div>
      </div>

      {/* Featured Hero Article */}
      <div className="w-full relative mt-4 md:mt-12 group cursor-pointer">
        <div className="relative w-full aspect-[16/7] md:h-[731px] rounded-3xl md:rounded-[48px] overflow-hidden">
          <Image
            src="https://picsum.photos/1664/731"
            alt="Featured News"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          {/* Top Left Badge */}
          <div className="absolute top-6 left-6 bg-white rounded flex items-center gap-2 px-3 py-1.5 shadow-sm">
            <div className="w-2.5 h-2.5 bg-[#DB4426] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
            </div>
            <span className="font-outfit font-medium text-[15px] text-[#202124]">
              Updates
            </span>
          </div>
        </div>

        {/* Info Overlay (Below Image or bottom of image depending on design) */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="flex flex-wrap gap-4">
              <span className="border-[1.26px] border-[#202124] rounded-2xl px-4 py-2 font-funnel-display font-light text-xl text-[#202124]">
                Company news
              </span>
              <span className="border-[1.26px] border-[#202124] rounded-2xl px-4 py-2 font-funnel-display font-light text-xl text-[#202124]">
                Product updates
              </span>
            </div>
            <h2 className="font-funnel-display font-normal text-4xl md:text-[48px] leading-tight text-[#333733] tracking-tight">
              Vita Officially Launches in Ethiopia&apos;s FMCG Market
            </h2>
          </div>

          <div className="flex flex-col items-end gap-8 pt-2">
            <div className="flex items-center gap-4">
              <span className="font-outfit text-sm text-[#202124]">Sep 9, 2024</span>
              <div className="w-4 h-[1.26px] bg-[#404040]"></div>
              <span className="font-outfit text-sm text-[#202124]">06 Minute</span>
            </div>
            <Link href="/news/slug" className="flex items-center gap-2 group/link hover:opacity-70 transition-opacity">
              <span className="font-funnel-display font-light text-xl text-[#000000]">Read Article</span>
              <div className="w-6 h-6 rounded-full border-[1.26px] border-[#202124] flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-[#202124] -rotate-45 group-hover/link:rotate-0 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
