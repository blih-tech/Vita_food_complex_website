import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FilteredNewsGrid({ category }: { category: string }) {
  // In a real app, you would fetch or filter articles based on the `category` prop
  const gridArticles = [
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      readTime: "20 mins read",
      image: "https://picsum.photos/600/400?random=31",
    },
    {
      title: "Vita Flour: Supporting Every Home Kitchen",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=32",
    },
    {
      title: "Inside Vita's \"House of Brands\" Strategy",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=33",
    },
    {
      title: "Vita Flour: Supporting Every Home Kitchen",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=34",
    },
    {
      title: "The Rise of Modern Snacking Culture in Ethiopia",
      readTime: "20 mins read",
      image: "https://picsum.photos/600/400?random=35",
    },
    {
      title: "Inside Vita's \"House of Brands\" Strategy",
      readTime: "4 mins read",
      image: "https://picsum.photos/600/400?random=36",
    },
  ];

  return (
    <section className="flex flex-col w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[30px]">
        {gridArticles.map((article, idx) => (
          <Link key={idx} href="/news/slug" className="group flex flex-col w-full gap-5">
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
