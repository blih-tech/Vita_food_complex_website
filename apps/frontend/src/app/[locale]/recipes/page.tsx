import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

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

type RecipesCmsSection = {
  id: string;
  type: string;
  content?: {
    en?: Record<string, unknown>;
    am?: Record<string, unknown>;
  };
};

type RecipesCmsPage = {
  slug: string;
  sections?: RecipesCmsSection[];
};

const CONTAINER_CLASS = "w-full max-w-[1664px] mx-auto px-4 sm:px-6 lg:px-8";

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

async function fetchRecipesCmsPage(): Promise<RecipesCmsPage | null> {
  const apiBase = resolveApiBase();
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

const RECIPES_CMS_HERO_TYPES = new Set(["recipes-hero", "hero"]);
const RECIPES_CMS_HEADER_TYPES = new Set(["recipes-header", "header"]);

function getLocalizedRecipesSection(
  page: RecipesCmsPage | null,
  kind: "hero" | "header",
  locale: string,
): Record<string, unknown> | undefined {
  const types = kind === "hero" ? RECIPES_CMS_HERO_TYPES : RECIPES_CMS_HEADER_TYPES;
  const section = page?.sections?.find((s) => types.has(s.type));
  if (!section?.content) return undefined;
  const key = locale === "am" ? "am" : "en";
  return (section.content[key] ?? section.content.en) as
    | Record<string, unknown>
    | undefined;
}

async function fetchPublishedRecipes(): Promise<ApiRecipe[]> {
  const apiBase = resolveApiBase();
  try {
    const response = await fetch(`${apiBase}/vita-recipes`, {
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

  const [cmsPage, apiRecipes] = await Promise.all([
    fetchRecipesCmsPage(),
    fetchPublishedRecipes(),
  ]);

  const localeKey = locale === "am" ? "am" : "en";
  const heroCms = getLocalizedRecipesSection(cmsPage, "hero", locale);
  const headerCms = getLocalizedRecipesSection(cmsPage, "header", locale);

  const pickStr = (cms: Record<string, unknown> | undefined, key: string, fallback: string) => {
    const v = cms?.[key];
    return typeof v === "string" && v.trim() ? v : fallback;
  };

  const items = apiRecipes.map((recipe) => ({
    key: recipe._id,
    title: recipe.title[localeKey] || recipe.title.en,
    description: recipe.description[localeKey] || recipe.description.en,
    imageSrc: recipe.media?.image || "/assets/recipes/recipe-1.png",
    bgColor: recipe.bgColor,
  }));

  const heroTitle = pickStr(heroCms, "title", t("hero.title"));
  const heroImage = pickStr(heroCms, "image", "/assets/recipes/hero.png");

  const headerLabel = pickStr(headerCms, "label", t("header.label"));
  const headerTitle = pickStr(headerCms, "title", t("header.title"));
  const headerHeading = headerCms?.heading;
  const headerHeadingAccent = headerCms?.headingAccent;
  const headerDescription = pickStr(headerCms, "description", t("header.description"));

  const headingLead =
    typeof headerHeading === "string" && headerHeading.trim() ? headerHeading : "";
  const headingAccent =
    typeof headerHeadingAccent === "string" && headerHeadingAccent.trim()
      ? headerHeadingAccent
      : "";

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
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </div>
      </section>

      <section className={`${CONTAINER_CLASS} mb-8 md:mb-12`}>
        {headerLabel.trim() ? (
          <p className="font-['Funnel_Display'] font-semibold text-[#23B349] text-[14px] md:text-[16px] tracking-wide uppercase mb-2">
            {headerLabel}
          </p>
        ) : null}
        <h2 className="font-['Outfit'] font-bold text-[#23B349] text-[36px] md:text-[52px] leading-[1.1] tracking-tight mb-3">
          {headerTitle}
        </h2>
        {(headingLead || headingAccent) && (
          <p className="font-['Funnel_Display'] text-[18px] md:text-[22px] text-[#404040]/90 mb-3">
            {headingLead}
            {headingLead && headingAccent ? " " : ""}
            {headingAccent ? (
              <span className="text-[#23B349] font-semibold">{headingAccent}</span>
            ) : null}
          </p>
        )}
        <p className="font-['Funnel_Display'] text-[16px] md:text-[20px] text-[#404040]/80">
          {headerDescription}
        </p>
      </section>

      <section className={`${CONTAINER_CLASS} mb-20 md:mb-32`}>
        {items.length === 0 ? (
          <p className="font-['Funnel_Display'] text-[16px] text-[#404040]/70">
            No recipes found.
          </p>
        ) : (
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
        )}
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
