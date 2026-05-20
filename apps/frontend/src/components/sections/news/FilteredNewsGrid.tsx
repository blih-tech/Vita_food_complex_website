"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { useParams } from "next/navigation";
import { useNews } from "@/hooks/useNews";
import { localized } from "@/lib/localized";

export default function FilteredNewsGrid({ category }: { category: string }) {
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';
  const { news, loading } = useNews(category);

  if (loading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
      {[1,2,3].map(i => <div key={i} className="h-[300px] bg-gray-100 rounded-2xl" />)}
    </div>
  );

  if (news.length === 0) return (
    <div className="py-20 text-center">
      <p className="font-outfit text-gray-400 text-lg">No articles in this category yet.</p>
    </div>
  );

  return (
    <section className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]">
        {news.map((a) => (
          <Link key={a._id} href={`/news/${a.slug}`} className="group flex flex-col w-full gap-5">
            <div className="relative w-full aspect-[16/10] lg:h-[346px] rounded-2xl overflow-hidden">
              <Image src={a.coverImage || 'https://picsum.photos/600/400'} alt={localized(a.title, lang)} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-outfit text-sm text-[#333733]/70">{a.category.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
                <span className="font-outfit text-sm text-[#512727]/85">{a.readTime}</span>
              </div>
              <h3 className="font-funnel-display font-medium text-xl leading-tight text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">{localized(a.title, lang)}</h3>
              <p className="font-outfit text-sm text-gray-500 line-clamp-2">{localized(a.summary, lang)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
