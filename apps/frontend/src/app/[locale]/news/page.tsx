"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import NewsHeaderSection from "@frontend/components/sections/news/NewsHeaderSection";
import LatestNewsSection from "@frontend/components/sections/news/LatestNewsSection";
import UpdatesSection from "@frontend/components/sections/news/UpdatesSection";
import NewsGridSection from "@frontend/components/sections/news/NewsGridSection";
import FilteredNewsGrid from "@frontend/components/sections/news/FilteredNewsGrid";

function NewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize with the current URL parameter or default
  const [activeCategory, setActiveCategory] = useState("all-news");

  // Listen to searchParams changes using useEffect as requested
  useEffect(() => {
    const category = searchParams.get("category") || "all-news";
    setActiveCategory(category);
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    // Use Next.js searchParams to build the new query
    const params = new URLSearchParams(searchParams.toString());
    
    if (slug === "all-news") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    
    // Use Next.js router to update the URL
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-8 md:px-[128px] pt-36 pb-12">
      <NewsHeaderSection
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />

      <div className="mt-16 md:mt-24 flex flex-col gap-16 md:gap-[128px]">
        {activeCategory === "all-news" ? (
          <>
            <LatestNewsSection />
            <UpdatesSection />
            <NewsGridSection />
          </>
        ) : (
          <FilteredNewsGrid category={activeCategory} />
        )}
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <main className="flex flex-col w-full bg-white relative">
      <Suspense fallback={<div className="min-h-screen w-full" />}>
        <NewsContent />
      </Suspense>
    </main>
  );
}
