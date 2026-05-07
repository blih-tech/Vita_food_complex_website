"use client";

import React from "react";
import { useParams } from "next/navigation";
import { NewsArticle } from "@/hooks/useNews";

export default function ArticleContent({ article }: { article: NewsArticle }) {
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';

  const paragraphs = article.content[lang]
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <section className="flex flex-col w-full max-w-[1427px] mx-auto gap-8 md:gap-[38px] pt-12 pb-24">
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`font-outfit font-normal leading-relaxed text-[#0A0A0A] ${
            i === 0
              ? 'text-xl md:text-2xl text-[#8A8C8A]'
              : 'text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em]'
          }`}
        >
          {para}
        </p>
      ))}
      <div className="w-[88%] md:w-[1265px] h-[1.82px] bg-black/10 mt-12 md:mt-24" />
    </section>
  );
}
