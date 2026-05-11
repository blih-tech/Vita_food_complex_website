"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

type ApiRecipe = {
  _id: string;
  slug: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
  media: { image: string };
  bgColor: string;
  published?: boolean;
};

type RecipeCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
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

function mapApiRecipes(apiItems: ApiRecipe[], locale: string): RecipeCard[] {
  return apiItems
    .filter((item) => item.published !== false)
    .map((item) => ({
      id: item._id,
      title: locale === "am" ? item.title.am || item.title.en : item.title.en,
      description:
        locale === "am"
          ? item.description.am || item.description.en
          : item.description.en,
      imageSrc: item.media?.image || "/assets/recipes/recipe-1.png",
      bgColor: item.bgColor || "#23B349",
    }));
}

function normalizeCategoryParam(raw: string | null): "all" | "biscuit" | "flour" | "recipe" {
  if (!raw) return "all";
  const value = raw.toLowerCase();
  if (value === "biscuit" || value === "flour" || value === "recipe") return value;
  return "all";
}

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = normalizeCategoryParam(searchParams.get("category"));
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [recipesData, setRecipesData] = useState<RecipeCard[]>([]);
  const [cmsHero, setCmsHero] = useState<Record<string, unknown> | null>(null);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const apiBase = resolveApiBase();
    const run = async () => {
      setLoadingProducts(true);
      try {
        const [productsRes, cmsRes, recipesRes] = await Promise.all([
          fetch(`${apiBase}/products`),
          fetch(`${apiBase}/content/pages/products`),
          fetch(`${apiBase}/recipes`),
        ]);
        const productsJson = productsRes.ok ? ((await productsRes.json()) as ApiProduct[]) : [];
        const cmsJson = cmsRes.ok ? ((await cmsRes.json()) as ProductsCmsPage) : null;
        const recipesJson = recipesRes.ok ? ((await recipesRes.json()) as ApiRecipe[]) : [];
        const mapped = Array.isArray(productsJson)
          ? mapApiProducts(productsJson.filter((p) => p.available !== false), locale)
          : [];
        const mappedRecipes = Array.isArray(recipesJson)
          ? mapApiRecipes(recipesJson, locale)
          : [];
        setProductsData(mapped);
        setRecipesData(mappedRecipes);
        setCmsHero(getLocalizedCmsSection(cmsJson, locale) ?? null);
      } catch {
        setProductsData([]);
        setRecipesData([]);
        setCmsHero(null);
      } finally {
        setLoadingProducts(false);
      }
    };
    run();
  }, [locale]);

  const categories = useMemo(() => ["all", "biscuit", "flour", "recipe"], []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return productsData;
    if (activeCategory === "biscuit") {
      return productsData.filter((p) => p.category === "Biscuit");
    }
    if (activeCategory === "flour") {
      return productsData.filter((p) => p.category === "Flour");
    }
    return [];
  }, [activeCategory, productsData]);

  const onCategoryChange = useCallback(
    (category: string) => {
      const normalized = normalizeCategoryParam(category);
      const params = new URLSearchParams(searchParams.toString());
      if (normalized === "all") {
        params.delete("category");
      } else {
        params.set("category", normalized);
      }
      const nextQuery = params.toString();
      router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname);
    },
    [pathname, router, searchParams],
  );

  const getCategoryLabel = useCallback(
    (category: string) => {
      if (category === "all") return t("categories.all") || "All products";
      const keyByCategory: Record<string, string> = {
        biscuit: "biscuits",
        flour: "flour",
        recipe: "Recipes",
      };
      const messageKey = keyByCategory[category] ?? category.toLowerCase();
      if (messageKey === "Recipes") return "Recipes";
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
        onChange={onCategoryChange}
        getLabel={getCategoryLabel}
      />
      {loadingProducts ? (
        <section className="w-full px-6 lg:px-20 pb-24 bg-white">
          <div className="max-w-7xl mx-auto flex justify-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        </section>
      ) : activeCategory === "recipe" ? (
        <section className="w-full px-6 lg:px-20 pb-24 bg-white">
          <div className="max-w-7xl mx-auto">
            {recipesData.length === 0 ? (
              <p className="font-['Funnel_Display'] text-[18px] text-[#404040]/70 text-center py-16">
                No recipes found.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-8">
                {recipesData.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="flex flex-col rounded-[24px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
                    style={{ backgroundColor: recipe.bgColor }}
                  >
                    <div className="relative w-full aspect-[1.2/1]">
                      <Image
                        src={recipe.imageSrc}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 text-white">
                      <h3 className="font-['Outfit'] font-bold text-[24px] leading-tight">
                        {recipe.title}
                      </h3>
                      <p className="font-['Funnel_Display'] text-[14px] leading-[1.4] opacity-90 mt-3">
                        {recipe.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <ProductGrid items={filteredProducts} />
      )}
      <FeedbackSection />
      <QualitySection />
    </main>
  );
}
