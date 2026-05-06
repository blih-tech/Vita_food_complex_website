"use client";

import { useState, useMemo, memo, useCallback } from "react";
import { useTranslations } from "next-intl";
import { products } from "./data";
import { FeedbackSection } from "@frontend/components/sections/FeedbackSection";
import { QualitySection } from "@frontend/components/sections/QualitySection";
import { ProductsHeroSection } from "@frontend/components/products/ProductsHeroSection";
import { DecorativeCookiesSection } from "@frontend/components/products/DecorativeCookiesSection";
import { ProductFilter } from "@frontend/components/products/ProductFilter";
import { ProductGrid } from "@frontend/components/products/ProductGrid";

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");

  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(products.map((p) => p.category)))];
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const getCategoryLabel = useCallback(
    (category: string) => {
      if (category === "all") return t("categories.all") || "All products";
      return t(`categories.${category.toLowerCase()}`) || category;
    },
    [t],
  );

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ProductsHeroSection title={t("hero.title")} />
      <DecorativeCookiesSection />
      <ProductFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
        getLabel={getCategoryLabel}
      />
      <ProductGrid items={filteredProducts} />
      <FeedbackSection />
      <QualitySection />
    </main>
  );
}
