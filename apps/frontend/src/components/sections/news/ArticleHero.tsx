"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { useParams } from "next/navigation";
import { NewsArticle } from "@/hooks/useNews";
import { localized } from "@/lib/localized";

export default function ArticleHero({ article }: { article: NewsArticle }) {
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';

  return (
    <section className="flex flex-col items-center w-full max-w-[1427px] mx-auto gap-[76px]">
      <div className="flex flex-col w-full gap-[38px]">
        {/* Category badge */}
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center justify-center px-4 py-3 border-[1.26px] border-[#202124] rounded-2xl">
            <span className="font-funnel-display font-light text-sm md:text-base text-[#202124] leading-snug">
              {article.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <h1 className="font-funnel-display font-bold text-4xl md:text-6xl leading-tight text-[#23B349]/95">
            {localized(article.title, lang)}
          </h1>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl leading-tight text-[#8A8C8A] mt-2">
            {localized(article.summary, lang)}
          </h2>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-[38px] mt-2">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#717182]" strokeWidth={1.5} />
            <span className="font-inter font-normal text-base md:text-lg text-[#717182]">
              {new Date(article.publishedAt).toLocaleDateString(locale === 'am' ? 'am-ET' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#717182]" strokeWidth={1.5} />
            <span className="font-inter font-normal text-base md:text-lg text-[#717182]">
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="relative w-full aspect-[21/9] md:h-[611px] rounded-[16px] overflow-hidden shadow-[0px_18px_27px_-5px_rgba(0,0,0,0.1)]">
        <Image
          src={article.coverImage || 'https://picsum.photos/1427/611'}
          alt={localized(article.title, lang)}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
