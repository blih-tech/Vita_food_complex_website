"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useNews } from "@/hooks/useNews";
import { localized } from "@/lib/localized";

export default function UpdatesSection() {
  const t = useTranslations("News.updates");
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';
  const { news, loading } = useNews('updates');

  if (loading || news.length === 0) return null;

  const items = news.slice(0, 4);

  return (
    <section className="flex flex-col w-full gap-8 md:gap-10">
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-between items-end w-full">
          <h2 className="font-funnel-display text-4xl md:text-[48px] leading-none text-[#333733]">{t("heading")}</h2>
          <Link href="?category=updates" className="flex items-center gap-2 group hover:opacity-70 transition-opacity pb-1">
            <span className="font-funnel-display font-light text-xl text-[#333733]">{t("viewAll")}</span>
            <div className="w-6 h-6 rounded-full border-[1.26px] border-[#333733] flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-[#333733] -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
          </Link>
        </div>
        <div className="w-full h-0 border-t-[1.26px] border-[#333733]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[38px]">
        {items.map((a) => (
          <Link key={a._id} href={`/news/${a.slug}`} className="group flex flex-col gap-4">
            <div className="relative w-full aspect-[5/4] rounded-[16px] overflow-hidden">
              <Image src={a.coverImage || 'https://picsum.photos/400/350'} alt={localized(a.title, lang)} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="font-outfit font-medium text-base text-[#333733]">{a.category.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
                <div className="w-4 h-[1.26px] bg-[#333733]" />
                <span className="font-outfit font-light text-base text-[#333733]">{new Date(a.publishedAt).toLocaleDateString()}</span>
              </div>
              <h3 className="font-funnel-display font-medium text-xl leading-tight text-[#333733] group-hover:text-[#23B349] transition-colors">{localized(a.title, lang)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
