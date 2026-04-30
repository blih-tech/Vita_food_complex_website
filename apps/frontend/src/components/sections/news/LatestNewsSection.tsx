import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { Play } from "lucide-react";

export default function LatestNewsSection() {
  const horizontalArticles = [
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      category: "Updates",
      date: "Feb 9, 2026",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      category: "Updates",
      date: "Feb 9, 2026",
      image: "https://picsum.photos/400/300?random=2",
    },
  ];

  const gridArticles = [
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      readTime: "20 mins read",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      title: "Vita Flour: Supporting Every Home Kitchen",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      title: "Inside Vita's \"House of Brands\" Strategy",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=5",
    },
    {
      title: "Vita Flour: Supporting Every Home Kitchen",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=6",
    },
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      readTime: "20 mins read",
      image: "https://picsum.photos/600/400?random=7",
    },
    {
      title: "Inside Vita's \"House of Brands\" Strategy",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=8",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-8 md:gap-10">
      {/* Header */}
      <div className="flex flex-col w-full gap-4">
        <h2 className="font-funnel-display text-4xl md:text-[48px] leading-none text-[#202124]">
          Latest News
        </h2>
        <div className="w-full h-0 border-t-[1.26px] border-[#202124]"></div>
      </div>

      {/* Top Layout: 1 Large Left, 2 Horizontal Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* Large Left Article */}
        <Link href="/news/vita-food-complex-ai-driven-food-solutions" className="group relative w-full aspect-[4/3] lg:h-[630px] rounded-3xl overflow-hidden block">
          <Image
            src="https://picsum.photos/800/600?random=9"
            alt="Podcast thumbnail"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#242526]/80 to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-[75px] md:h-[75px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-[1.26px] border-white transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 text-white ml-1 fill-white" />
          </div>

          {/* Info */}
          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
            <h3 className="font-funnel-display font-medium text-2xl text-white underline decoration-1 underline-offset-4">
              Vita Flour: Supporting Every Home Kitchen
            </h3>
            <div className="flex items-center gap-4 text-white/90">
              <span className="font-outfit font-light text-base">Updates</span>
              <div className="w-4 h-[1.26px] bg-white"></div>
              <span className="font-outfit font-light text-base">Sep 6, 2024</span>
            </div>
          </div>
        </Link>

        {/* 2 Horizontal Right Articles */}
        <div className="flex flex-col gap-8 md:gap-10 justify-between h-full">
          {horizontalArticles.map((article, idx) => (
            <Link key={idx} href="/news/vita-food-complex-ai-driven-food-solutions" className="group flex flex-col sm:flex-row items-center gap-6 w-full h-full sm:h-[290px]">
              <div className="flex flex-col gap-4 flex-1 py-4 sm:py-8">
                <h3 className="font-funnel-display font-medium text-xl leading-snug text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-[#202124]">
                  <span className="font-outfit font-light text-base">{article.category}</span>
                  <div className="w-4 h-[1.26px] bg-[#202124]/50"></div>
                  <span className="font-outfit font-light text-base">{article.date}</span>
                </div>
              </div>
              <div className="relative w-full sm:w-[383px] aspect-[4/3] sm:h-full rounded-3xl overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 383px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Layout: 6 Articles Grid (2 rows of 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px] mt-8">
        {gridArticles.map((article, idx) => (
          <Link key={idx} href="/news/vita-food-complex-ai-driven-food-solutions" className="group flex flex-col w-full gap-5">
            <div className="relative w-full aspect-[16/10] lg:h-[346px] rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-end">
                <span className="font-outfit text-sm text-[#512727]/85 text-right">
                  {article.readTime}
                </span>
              </div>
              <h3 className="font-funnel-display font-medium text-xl leading-tight text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
