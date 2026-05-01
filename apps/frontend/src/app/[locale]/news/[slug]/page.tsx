import React from "react";
import ArticleHero from "@frontend/components/sections/news/ArticleHero";
import ArticleContent from "@frontend/components/sections/news/ArticleContent";

export default function NewsDetailsPage() {
  return (
    <main className="flex flex-col w-full bg-white relative">
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-8 md:px-[128px] pt-36 pb-12">
        <ArticleHero />
        <ArticleContent />
      </div>
    </main>
  );
}
