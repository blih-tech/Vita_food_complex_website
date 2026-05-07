"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useNews } from "@/hooks/useNews";

export default function LatestNewsSection() {
  const t = useTranslations("News.latestNews");
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';
  const { allNews, loading } = useNews();

  // skip the featured (index 0), show next 8
  const articles = allNews.slice(1, 9);

  if (loading) return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-funnel-display text-4xl md:text-[48px] leading-none text-[#202124]">{t("heading")}</h2>
        <div className="w-full h-px border-t border-[#202124]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
        <div className="h-[400px] bg-gray-100 rounded-3xl" />
        <div className="flex flex-col gap-8">
          <div className="h-[180px] bg-gray-100 rounded-3xl" />
          <div className="h-[180px] bg-gray-100 rounded-3xl" />
        </div>
      </div>
    </section>
  );

  if (articles.length === 0) return null;

  const [main, ...rest] = articles;
  const horizontal = rest.slice(0, 2);
  const grid = rest.slice(2);

  return (
    <section className="flex flex-col w-full gap-8 md:gap-10">
      <div className="flex flex-col w-full gap-4">
        <h2 className="font-funnel-display text-4xl md:text-[48px] leading-none text-[#202124]">{t("heading")}</h2>
        <div className="w-full h-0 border-t-[1.26px] border-[#202124]" />
      </div>

      {/* Top: 1 large left + 2 horizontal right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <Link href={`/news/${main.slug}`} className="group relative w-full aspect-[4/3] lg:h-[630px] rounded-3xl overflow-hidden block">
          <Image src={main.coverImage || 'https://picsum.photos/800/600'} alt={main.title[lang]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px) 100vw,50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242526]/80 to-transparent" />
          <div className="absolute bottom-8 left-8 flex flex-col gap-3">
            <h3 className="font-funnel-display font-medium text-2xl text-white underline decoration-1 underline-offset-4">{main.title[lang]}</h3>
            <div className="flex items-center gap-4 text-white/90">
              <span className="font-outfit font-light text-base">{main.category.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
              <div className="w-4 h-[1.26px] bg-white" />
              <span className="font-outfit font-light text-base">{new Date(main.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-8 md:gap-10 justify-between h-full">
          {horizontal.map((a) => (
            <Link key={a._id} href={`/news/${a.slug}`} className="group flex flex-col sm:flex-row items-center gap-6 w-full h-full sm:h-[290px]">
              <div className="flex flex-col gap-4 flex-1 py-4 sm:py-8">
                <h3 className="font-funnel-display font-medium text-xl leading-snug text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">{a.title[lang]}</h3>
                <div className="flex items-center gap-4 text-[#202124]">
                  <span className="font-outfit font-light text-base">{a.category.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
                  <div className="w-4 h-[1.26px] bg-[#202124]/50" />
                  <span className="font-outfit font-light text-base">{new Date(a.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="relative w-full sm:w-[383px] aspect-[4/3] sm:h-full rounded-3xl overflow-hidden shrink-0">
                <Image src={a.coverImage || 'https://picsum.photos/400/300'} alt={a.title[lang]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw,383px" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom grid */}
      {grid.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px] mt-8">
          {grid.map((a) => (
            <Link key={a._id} href={`/news/${a.slug}`} className="group flex flex-col w-full gap-5">
              <div className="relative w-full aspect-[16/10] lg:h-[346px] rounded-2xl overflow-hidden">
                <Image src={a.coverImage || 'https://picsum.photos/600/400'} alt={a.title[lang]} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-outfit text-sm text-[#512727]/85 text-right">{a.readTime}</span>
                <h3 className="font-funnel-display font-medium text-xl leading-tight text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">{a.title[lang]}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
