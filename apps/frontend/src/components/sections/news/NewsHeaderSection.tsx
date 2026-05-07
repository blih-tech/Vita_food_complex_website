"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useNews } from "@/hooks/useNews";

export default function NewsHeaderSection({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) {
  const t = useTranslations("News.header");
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';
  const { allNews } = useNews();

  const featured = allNews[0] ?? null;

  const categories = [
    { label: t("categories.allNews"), slug: "all-news" },
    { label: t("categories.news"), slug: "news" },
    { label: t("categories.updates"), slug: "updates" },
    { label: t("categories.marketInsights"), slug: "market-insights" },
    { label: t("categories.companyNews"), slug: "company-news" },
    { label: t("categories.productUpdates"), slug: "product-updates" },
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
            {new Date().toLocaleDateString(locale === 'am' ? 'am-ET' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-[#23B349] font-funnel-display font-bold text-5xl md:text-[80px] leading-none tracking-tight text-center">
        {t("title")}
      </h1>

      {/* Categories */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-0 border-t-[1.26px] border-[#333733]"></div>
        <div className="flex flex-row overflow-x-auto w-full md:w-auto max-w-full items-center justify-start md:justify-center gap-6 py-3 no-scrollbar px-4 md:px-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex-shrink-0 font-funnel-display font-medium text-[20px] md:text-[24px] leading-tight transition-colors hover:text-[#23B349] px-3 ${
                activeCategory === cat.slug ? "text-[#23B349]" : "text-[#333733]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="w-full h-0 border-t-[1.26px] border-[#333733]"></div>
      </div>

      {/* Featured Hero Article */}
      {activeCategory === "all-news" && featured && (
        <div className="w-full relative mt-4 md:mt-12 group cursor-pointer">
          <div className="relative w-full aspect-[16/7] md:h-[731px] rounded-3xl md:rounded-[48px] overflow-hidden">
            <Image
              src={featured.coverImage || 'https://picsum.photos/1664/731'}
              alt={featured.title[lang]}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-6 left-6 bg-white rounded flex items-center gap-2 px-3 py-1.5 shadow-sm">
              <div className="w-2.5 h-2.5 bg-[#DB4426] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
              </div>
              <span className="font-outfit font-medium text-[15px] text-[#202124]">Latest</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div className="flex flex-col gap-4 max-w-4xl">
              <div className="flex flex-wrap gap-4">
                <span className="border-[1.26px] border-[#202124] rounded-2xl px-4 py-2 font-funnel-display font-light text-xl text-[#202124]">
                  {featured.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </span>
              </div>
              <h2 className="font-funnel-display font-normal text-4xl md:text-[48px] leading-tight text-[#333733] tracking-tight">
                {featured.title[lang]}
              </h2>
            </div>

            <div className="flex flex-col items-end gap-8 pt-2">
              <div className="flex items-center gap-4">
                <span className="font-outfit text-sm text-[#202124]">
                  {new Date(featured.publishedAt).toLocaleDateString()}
                </span>
                <div className="w-4 h-[1.26px] bg-[#404040]"></div>
                <span className="font-outfit text-sm text-[#202124]">{featured.readTime}</span>
              </div>
              <Link href={`/news/${featured.slug}`} className="flex items-center gap-2 group/link hover:opacity-70 transition-opacity">
                <span className="font-funnel-display font-light text-xl text-[#000000]">Read More</span>
                <div className="w-6 h-6 rounded-full border-[1.26px] border-[#202124] flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-[#202124] -rotate-45 group-hover/link:rotate-0 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
