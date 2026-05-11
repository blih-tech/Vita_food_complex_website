"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FeedbackSection } from "@frontend/components/sections/FeedbackSection";
import { QualitySection } from "@frontend/components/sections/QualitySection";
import { ProductsHeroSection } from "@frontend/components/products/ProductsHeroSection";
import { DecorativeCookiesSection } from "@frontend/components/products/DecorativeCookiesSection";
import { ProductFilter } from "@frontend/components/products/ProductFilter";
import { ProductGrid } from "@frontend/components/products/ProductGrid";
import { Product } from "./data";

type ApiProductContent = {
  description?: { en: string; am: string };
  netWeight?: string;
  nutrition?: Product["content"] extends { nutrition?: infer T } ? T : never;
  ingredients?: Product["content"] extends { ingredients?: infer T } ? T : never;
  certifications?: Product["content"] extends { certifications?: infer T } ? T : never;
};

type ApiProduct = {
  _id: string;
  slug: string;
  name: { en: string; am: string };
  category: "Biscuit" | "Flour";
  media: { image: string; tagIcon?: string };
  ui: { bgColor: string; textColor: string; nameColor: string };
  relatedProducts?: string[];
  content?: ApiProductContent;
  available?: boolean;
};

type ProductsCmsPage = {
  sections?: Array<{
    id: string;
    type: string;
    content?: {
      en?: Record<string, unknown>;
      am?: Record<string, unknown>;
    };
  }>;
};

function normalizeApiV1Base(url: string): string {
  const trimmed = url.replace(/\/+$/, "");
  if (trimmed.endsWith("/api/v1")) return trimmed;
  return `${trimmed}/api/v1`;
}

function resolveApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api/v1";
  const urls = raw.split(",").map((u) => normalizeApiV1Base(u.trim()));
  return urls.length > 1
    ? process.env.NODE_ENV === "production"
      ? (urls.find((u) => !u.includes("localhost")) ?? urls[0])
      : urls[0]
    : urls[0];
}

function mapApiProducts(apiItems: ApiProduct[], locale: string): Product[] {
  return apiItems.map((item) => ({
    id: item.slug,
    name: locale === "am" ? item.name.am || item.name.en : item.name.en,
    category: item.category,
    media: {
      image: item.media?.image || "/assets/products/items/zoo-1.png",
      ...(item.media?.tagIcon ? { tagIcon: item.media.tagIcon } : {}),
    },
    ui: item.ui ?? {
      bgColor: "linear-gradient(135deg, #23B349 0%, #1a9e3e 100%)",
      textColor: "#FFFFFF",
      nameColor: "#FFFFFF",
    },
    relatedProducts: item.relatedProducts ?? [],
    content: item.content
      ? {
          ...(item.content.description
            ? {
                description:
                  locale === "am"
                    ? item.content.description.am || item.content.description.en
                    : item.content.description.en,
              }
            : {}),
          ...(item.content.netWeight ? { netWeight: item.content.netWeight } : {}),
          ...(item.content.nutrition ? { nutrition: item.content.nutrition } : {}),
          ...(item.content.ingredients ? { ingredients: item.content.ingredients } : {}),
          ...(item.content.certifications
            ? { certifications: item.content.certifications }
            : {}),
        }
      : undefined,
  }));
}

function getLocalizedCmsSection(
  page: ProductsCmsPage | null,
  locale: string,
): Record<string, unknown> | undefined {
  const section = page?.sections?.find(
    (s) => s.type === "products-hero" || s.type === "hero",
  );
  if (!section?.content) return undefined;
  const key = locale === "am" ? "am" : "en";
  return section.content[key] ?? section.content.en;
}

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [cmsHero, setCmsHero] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const apiBase = resolveApiBase();
    const run = async () => {
      try {
        const [productsRes, cmsRes] = await Promise.all([
          fetch(`${apiBase}/products`),
          fetch(`${apiBase}/content/pages/products`),
        ]);
        const productsJson = productsRes.ok ? ((await productsRes.json()) as ApiProduct[]) : [];
        const cmsJson = cmsRes.ok ? ((await cmsRes.json()) as ProductsCmsPage) : null;
        const mapped = Array.isArray(productsJson)
          ? mapApiProducts(productsJson.filter((p) => p.available !== false), locale)
          : [];
        setProductsData(mapped);
        setCmsHero(getLocalizedCmsSection(cmsJson, locale) ?? null);
      } catch {
        setProductsData([]);
        setCmsHero(null);
      }
    };
    run();
  }, [locale]);

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(productsData.map((p) => p.category)))],
    [productsData],
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return productsData;
    return productsData.filter((p) => p.category === activeCategory);
  }, [activeCategory, productsData]);

  const getCategoryLabel = useCallback(
    (category: string) => {
      if (category === "all") return t("categories.all") || "All products";
      const keyByCategory: Record<string, string> = {
        Biscuit: "biscuits",
        Flour: "flour",
      };
      const messageKey = keyByCategory[category] ?? category.toLowerCase();
      return t(`categories.${messageKey}`) || category;
    },
    [t],
  );

  const heroTitle =
    (typeof cmsHero?.title === "string" && cmsHero.title.trim()) || t("hero.title");
  const heroSubtitle =
    (typeof cmsHero?.subtitle === "string" && cmsHero.subtitle.trim()) ||
    t("hero.subtitle");

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ProductsHeroSection
        title={heroTitle as string}
        subtitle={heroSubtitle as string}
        products={productsData}
      />
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
