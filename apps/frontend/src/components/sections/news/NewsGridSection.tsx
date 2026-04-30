import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsGridSection() {
  const articles = [
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=21",
    },
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=22",
    },
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=23",
    },
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=24",
    },
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=25",
    },
    {
      title: "Sustainable Food Production",
      description: "Analyzing the impact of sustainable sourcing and waste reduction",
      readTime: "10 Minutes",
      category: "Market insight",
      image: "https://picsum.photos/300/350?random=26",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-8 md:gap-10 pb-24">
      {/* Header */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-between items-end w-full">
          <h2 className="font-funnel-display text-4xl md:text-[48px] leading-none text-[#202124]">
            News
          </h2>
          <Link href="/news/archive" className="flex items-center gap-2 group hover:opacity-70 transition-opacity pb-1">
            <span className="font-funnel-display font-light text-xl text-[#202124]">View All</span>
            <div className="w-6 h-6 rounded-full border-[1.26px] border-[#202124] flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-[#202124] -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
          </Link>
        </div>
        <div className="w-full h-0 border-t-[1.26px] border-[#202124]"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {articles.map((article, idx) => (
          <Link key={idx} href="/news/slug" className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 w-full">
            <div className="relative w-full sm:w-[214px] aspect-[4/5] sm:h-[252px] rounded-2xl overflow-hidden shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 214px"
              />
            </div>
            <div className="flex flex-col gap-6 py-2 flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="font-funnel-display font-normal text-2xl leading-tight text-[#202124] group-hover:text-[#23B349] transition-colors">
                  {article.title}
                </h3>
                <p className="font-outfit font-light text-lg md:text-xl leading-snug text-[#333733]">
                  {article.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-outfit font-normal text-base text-[#333733]">
                  {article.readTime}
                </span>
                <div className="w-4 h-[1.26px] bg-[#333733]/50"></div>
                <span className="font-outfit font-normal text-[15px] text-[#333733]">
                  {article.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
