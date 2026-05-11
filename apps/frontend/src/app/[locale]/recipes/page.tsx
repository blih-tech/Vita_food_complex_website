import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { recipeSeedRows } from "./seed-data";

type LocaleParams = {
  params: Promise<{ locale: string }>;
};

type RecipeCardProps = {
  imageSrc: string;
  bgColor: string;
  title: string;
  description: string;
};

type ApiRecipe = {
  _id: string;
  slug: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
  media: { image: string };
  bgColor: string;
  sortOrder?: number;
  published?: boolean;
};

const CONTAINER_CLASS = "w-full max-w-[1400px] mx-auto px-4 lg:px-20";

/** When the API is empty, show the first cards from `seed-data.ts` (matches default CMS rows). */
const recipeImages = recipeSeedRows.slice(0, 3).map((r) => ({
  imageSrc: r.imageWebPath,
  bgColor: r.bgColor,
}));

function resolveApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api/v1";
  const urls = raw.split(",").map((u) => u.trim());
  return urls.length > 1
    ? process.env.NODE_ENV === "production"
      ? (urls.find((u) => !u.includes("localhost")) ?? urls[0])
      : urls[0]
    : urls[0];
}

async function fetchPublishedRecipes(): Promise<ApiRecipe[]> {
  const apiBase = resolveApiBase();
  try {
    const response = await fetch(`${apiBase}/recipes`, {
      next: { revalidate: 120 },
    });
    if (!response.ok) return [];
    const data = (await response.json()) as ApiRecipe[];
    if (!Array.isArray(data)) return [];
    return data.filter((r) => r.published !== false);
  } catch {
    return [];
  }
}

export default async function RecipesPage({ params }: LocaleParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Recipes");

  const apiRecipes = await fetchPublishedRecipes();
  const localeKey = locale === "am" ? "am" : "en";
  const fallbackItems = t.raw("items") as { title: string; description: string }[];

  const items =
    apiRecipes.length > 0
      ? apiRecipes.map((recipe) => ({
          key: recipe._id,
          title: recipe.title[localeKey] || recipe.title.en,
          description: recipe.description[localeKey] || recipe.description.en,
          imageSrc: recipe.media?.image || "/assets/recipes/recipe-1.png",
          bgColor: recipe.bgColor,
        }))
      : recipeImages.map((img, index) => ({
          key: `fallback-${index}`,
          title: fallbackItems[index]?.title || "",
          description: fallbackItems[index]?.description || "",
          imageSrc: img.imageSrc,
          bgColor: img.bgColor,
        }));

  const heroTitle = t("hero.title");
  const heroImage = "/assets/recipes/hero.png";
  const headerTitle = t("header.title");
  const headerDescription = t("header.description");

  return (
    <main className="flex flex-col bg-white">
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

      <section className={`${CONTAINER_CLASS} mb-8 md:mb-12`}>
        <h2 className="font-['Outfit'] font-bold text-[#23B349] text-[36px] md:text-[52px] leading-[1.1] tracking-tight mb-2">
          {headerTitle}
        </h2>
        <p className="font-['Funnel_Display'] text-[16px] md:text-[20px] text-[#404040]/80">
          {headerDescription}
        </p>
      </section>

      <section className={`${CONTAINER_CLASS} mb-20 md:mb-32`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((recipe) => (
            <RecipeCard
              key={recipe.key}
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

function RecipeCard({ imageSrc, bgColor, title, description }: RecipeCardProps) {
  return (
    <div
      className="flex flex-col w-full rounded-[24px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-full aspect-4/3 md:aspect-[1.1/1]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <svg
          className="absolute bottom-[-2px] left-0 w-full h-[40px] z-10"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path d="M0,20 Q50,-15 100,20 L100,25 L0,25 Z" fill={bgColor} />
        </svg>
      </div>

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
