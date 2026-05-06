import { useTranslations } from "next-intl";
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

/* ─────────────────────────────────────────────
   Constants
   ───────────────────────────────────────────── */

const CONTAINER_CLASS = "w-full max-w-[1400px] mx-auto px-4 lg:px-20";

const recipeImages = [
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#4B2C19" },
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#DCA519" },
  { imageSrc: "/assets/recipes/recipe-1.png", bgColor: "#005A40" },
];

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default async function RecipesPage({
  params,
}: LocaleParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Recipes");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className={`${CONTAINER_CLASS} mt-8 md:mt-12 mb-12 md:mb-16`}>
        <div className="relative w-full aspect-[4/3] md:aspect-[2.1/1] rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#23B349]">
          <h1 className="sr-only">{t("hero.title")}</h1>
          <Image
            src="/assets/recipes/hero.png"
            alt={t("hero.title")}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Header Section */}
      <section className={`${CONTAINER_CLASS} mb-8 md:mb-12`}>
        <h2 className="font-['Outfit'] font-bold text-[#23B349] text-[36px] md:text-[52px] leading-[1.1] tracking-tight mb-2">
          {t("header.title")}
        </h2>
        <p className="font-['Funnel_Display'] text-[16px] md:text-[20px] text-[#404040]/80">
          {t("header.description")}
        </p>
      </section>

      {/* Grid Section */}
      <section className={`${CONTAINER_CLASS} mb-20 md:mb-32`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recipeImages.map((recipe, index) => (
            <RecipeCard
              key={index}
              imageSrc={recipe.imageSrc}
              bgColor={recipe.bgColor}
              title={items[index]?.title || ""}
              description={items[index]?.description || ""}
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
      <div className="relative w-full aspect-[4/3] md:aspect-[1.1/1]">
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
