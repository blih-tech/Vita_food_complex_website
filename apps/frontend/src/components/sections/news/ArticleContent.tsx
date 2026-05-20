"use client";

import React from "react";
import { useParams } from "next/navigation";
import { NewsArticle } from "@/hooks/useNews";
import { localized } from "@/lib/localized";

export default function ArticleContent({ article }: { article: NewsArticle }) {
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';
  const lang = locale === 'am' ? 'am' : 'en';

  const content = localized(article.content, lang);

  // If content is HTML (from rich text editor), render it directly
  const isHtml = content.trimStart().startsWith('<');

  return (
    <section className="flex flex-col w-full max-w-[1427px] mx-auto gap-8 md:gap-[38px] pt-12 pb-24">
      {isHtml ? (
        <div
          className="prose prose-lg max-w-none prose-headings:font-funnel-display prose-headings:text-[#0A0A0A] prose-p:text-[#0A0A0A] prose-p:leading-relaxed prose-a:text-[#23B349] prose-blockquote:border-[#23B349] prose-strong:text-[#0A0A0A]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        // Plain text fallback — split by double newlines
        content.split(/\n\n+/).map((p, i) => (
          <p key={i} className={`font-outfit font-normal leading-relaxed text-[#0A0A0A] ${i === 0 ? 'text-xl md:text-2xl text-[#8A8C8A]' : 'text-xl md:text-[30px] leading-snug md:leading-[38px] tracking-[-0.004em]'}`}>
            {p.trim()}
          </p>
        ))
      )}
      <div className="w-[88%] md:w-[1265px] h-[1.82px] bg-black/10 mt-12 md:mt-24" />
    </section>
  );
}
