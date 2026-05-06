import React from "react";
import Image from "next/image";
import { Link } from "@frontend/navigation";

export default function FilteredNewsGrid({ category }: { category: string }) {
  const t = useTranslations("News.latestNews"); // Assuming FilteredNewsGrid uses keys from latestNews for article structure

  const gridArticles = [
    {
      title: t("filteredGridArticle.title"),
      readTime: t("filteredGridArticle.readTime"),
      image: "https://picsum.photos/600/400?random=31",
    },
    {
      title: t("filteredGridArticle2.title"),
      readTime: t("filteredGridArticle2.readTime"),
      image: "https://picsum.photos/600/400?random=32",
    },
    {
      title: t("filteredGridArticle3.title"),
      readTime: t("filteredGridArticle3.readTime"),
      image: "https://picsum.photos/600/400?random=33",
    },
    {
      title: t("filteredGridArticle2.title"), // Reusing translation keys
      readTime: t("filteredGridArticle2.readTime"),
      image: "https://picsum.photos/600/400?random=34",
    },
    {
      title: t("filteredGridArticle.title"), // Reusing translation keys
      readTime: t("filteredGridArticle.readTime"),
      image: "https://picsum.photos/600/400?random=35",
    },
    {
      title: t("filteredGridArticle3.title"), // Reusing translation keys
      readTime: t("filteredGridArticle3.readTime"),
      image: "https://picsum.photos/600/400?random=36",
    },
  ];

  return (
    <section className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]">
        {gridArticles.map((article, idx) => (
          <Link key={idx} href="/news/vita-food-complex-ai-driven-food-solutions" className="group flex flex-col w-full gap-5">
            <div className="relative w-full aspect-[16/10] lg:h-[346px] rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-end">
                <span className="font-outfit text-sm text-[#512727]/85 text-right">
                  {article.readTime}
                </span>
              </div>
              <h3 className="font-funnel-display font-medium text-xl leading-tight text-[#27221B]/80 group-hover:text-[#23B349] transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
