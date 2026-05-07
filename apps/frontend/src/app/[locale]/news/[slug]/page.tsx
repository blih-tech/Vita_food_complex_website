"use client";

import React from "react";
import { use } from "react";
import { useParams } from "next/navigation";
import { useNewsArticle } from "@/hooks/useNews";
import ArticleHero from "@frontend/components/sections/news/ArticleHero";
import ArticleContent from "@frontend/components/sections/news/ArticleContent";
import { notFound } from "next/navigation";

export default function NewsDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { article, loading, notFound: isNotFound } = useNewsArticle(slug);

  if (isNotFound) notFound();

  return (
    <main className="flex flex-col w-full bg-white relative">
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-8 md:px-[128px] pt-36 pb-12">
        {loading ? (
          <div className="flex justify-center py-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : article ? (
          <>
            <ArticleHero article={article} />
            <ArticleContent article={article} />
          </>
        ) : null}
      </div>
    </main>
  );
}
