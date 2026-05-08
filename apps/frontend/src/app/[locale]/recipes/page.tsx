import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

type LocaleParams = {
  params: Promise<{ locale: string }>;
};

type RecipeCardProps = {
  imageSrc: string;
  bgColor: string;
  title: string;
  description: string;
};

type RecipesCmsSection =
  | {
      id: "hero";
      type: "hero";
      content?: {
        en?: { title?: string; image?: string };
        am?: { title?: string; image?: string };
      };
    }
  | {
      id: "header";
      type: "header";
      content?: {
        en?: { title?: string; description?: string };
        am?: { title?: string; description?: string };
      };
    }
  | {
      id: "recipes-grid";
      type: "recipes-grid";
      content?: {
        en?: {
          items?: Array<{
            title?: string;
            description?: string;
            image?: string;
            bgColor?: string;
          }>;
        };
        am?: {
          items?: Array<{
            title?: string;
            description?: string;
            image?: string;
            bgColor?: string;
          }>;
        };
      };
    };

type RecipesCmsPage = {
  slug: string;
  sections?: RecipesCmsSection[];
};

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const CONTAINER_CLASS = "w-full max-w-[1400px] mx-auto px-4 lg:px-20";

const recipeImages = [
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#4B2C19" },
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#DCA519" },
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#005A40" },
];

async function fetchRecipesCmsPage(): Promise<RecipesCmsPage | null> {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api/v1";
  const urls = raw.split(",").map((u) => u.trim());
  const apiBase =
    urls.length > 1
      ? process.env.NODE_ENV === "production"
        ? (urls.find((u) => !u.includes("localhost")) ?? urls[0])
        : urls[0]
      : urls[0];

  try {
    const response = await fetch(`${apiBase}/content/pages/recipes`, {
      next: { revalidate: 120 },
    });
    if (!response.ok) return null;
    return (await response.json()) as RecipesCmsPage;
  } catch {
    return null;
  }
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default async function RecipesPage({
  params,
}: LocaleParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Recipes");
  const cmsPage = await fetchRecipesCmsPage();
  const cmsSections = cmsPage?.sections ?? [];
  const heroSection = cmsSections.find((section) => section.id === "hero");
  const headerSection = cmsSections.find((section) => section.id === "header");
  const recipesGridSection = cmsSections.find((section) => section.id === "recipes-grid");

  const localeKey = locale === "am" ? "am" : "en";
  const fallbackItems = t.raw("items") as { title: string; description: string }[];
  const cmsItems = recipesGridSection?.content?.[localeKey]?.items ?? [];
  const items = recipeImages.map((img, index) => ({
    title: cmsItems[index]?.title || fallbackItems[index]?.title || "",
    description: cmsItems[index]?.description || fallbackItems[index]?.description || "",
    imageSrc: cmsItems[index]?.image || img.imageSrc,
    bgColor: cmsItems[index]?.bgColor || img.bgColor,
  }));
  const heroTitle = heroSection?.content?.[localeKey]?.title || t("hero.title");
  const heroImage = heroSection?.content?.[localeKey]?.image || "/assets/recipes/hero.png";
  const headerTitle = headerSection?.content?.[localeKey]?.title || t("header.title");
  const headerDescription =
    headerSection?.content?.[localeKey]?.description || t("header.description");

  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className={`${CONTAINER_CLASS} mt-8 md:mt-12 mb-12 md:mb-16`}>
        <div className="relative w-full aspect-4/3 md:aspect-[2.1/1] rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#23B349]">
          <h1 className="sr-only">{heroTitle}</h1>
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Header Section */}
      <section className={`${CONTAINER_CLASS} mb-8 md:mb-12`}>
        <h2 className="font-['Outfit'] font-bold text-[#23B349] text-[36px] md:text-[52px] leading-[1.1] tracking-tight mb-2">
          {headerTitle}
        </h2>
        <p className="font-['Funnel_Display'] text-[16px] md:text-[20px] text-[#404040]/80">
          {headerDescription}
        </p>
      </section>

      {/* Grid Section */}
      <section className={`${CONTAINER_CLASS} mb-20 md:mb-32`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((recipe, index) => (
            <RecipeCard
              key={index}
              imageSrc={recipe.imageSrc}
              bgColor={recipe.bgColor}
              title={recipe.title}
              description={recipe.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Components
   ───────────────────────────────────────────── */

function RecipeCard({ imageSrc, bgColor, title, description }: RecipeCardProps) {
  return (
    <div
      className="flex flex-col w-full rounded-[24px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-4/3 md:aspect-[1.1/1]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Hill Curve */}
        <svg
          className="absolute bottom-[-2px] left-0 w-full h-[40px] z-10"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path d="M0,20 Q50,-15 100,20 L100,25 L0,25 Z" fill={bgColor} />
        </svg>
      </div>

      {/* Text Area */}
      <div className="p-6 md:p-8 text-white flex flex-col gap-3 relative z-20">
        <h3 className="font-['Outfit'] font-bold text-[22px] md:text-[26px] leading-tight">
          {title}
        </h3>
        <p className="font-['Funnel_Display'] text-[14px] leading-[1.4] opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}
