"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle, ImagePlus, Loader2, RefreshCw, Save, UtensilsCrossed } from "lucide-react";
import api from "@/lib/api";

type Locale = "en" | "am";

type RecipeItemContent = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
};

type RecipesSectionContent = {
  en: {
    items: RecipeItemContent[];
  };
  am: {
    items: RecipeItemContent[];
  };
};

type HeroSectionContent = {
  en: { title: string; image: string };
  am: { title: string; image: string };
};

type HeaderSectionContent = {
  en: { title: string; description: string };
  am: { title: string; description: string };
};

type RecipesPageData = {
  slug: "recipes";
  title: { en: string; am: string };
  sections: Array<{
    id: "hero" | "header" | "recipes-grid";
    type: "hero" | "header" | "recipes-grid";
    content: HeroSectionContent | HeaderSectionContent | RecipesSectionContent;
  }>;
  updatedAt?: string;
};

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

const textareaCls = `${inputCls} resize-none`;

const defaultRecipeItems = (): RecipeItemContent[] => [
  {
    title: "Creamy Delights",
    description: "Experience the rich, velvety texture of our signature cream biscuits.",
    image: "/assets/recipes/recipe-1.png",
    bgColor: "#4B2C19",
  },
  {
    title: "Oreo Moments",
    description: "Perfectly balanced chocolate and cream for your tea time.",
    image: "/assets/recipes/recipe-2.png",
    bgColor: "#DCA519",
  },
  {
    title: "Sweet Bites",
    description: "Small, crunchy treats that bring big smiles to everyone.",
    image: "/assets/recipes/recipe-3.png",
    bgColor: "#005A40",
  },
];

const DEFAULT_RECIPES_PAGE: RecipesPageData = {
  slug: "recipes",
  title: { en: "Recipes", am: "የምግብ አዘገጃጀት" },
  sections: [
    {
      id: "hero",
      type: "hero",
      content: {
        en: { title: "Recipes", image: "/assets/recipes/hero.png" },
        am: { title: "የምግብ አዘገጃጀት", image: "/assets/recipes/hero.png" },
      },
    },
    {
      id: "header",
      type: "header",
      content: {
        en: {
          title: "Our Recipes",
          description: "Discover delicious ways to enjoy Vita products in your daily meals.",
        },
        am: {
          title: "የእኛ የምግብ አዘገጃጀቶች",
          description: "የቪታ ምርቶችን በዕለታዊ ምግቦችዎ ውስጥ ለመጠቀም ጣፋጭ መንገዶችን ያግኙ።",
        },
      },
    },
    {
      id: "recipes-grid",
      type: "recipes-grid",
      content: {
        en: { items: defaultRecipeItems() },
        am: {
          items: [
            {
              title: "ክሬሚ ደስታ",
              description: "የእኛ ልዩ የክሬም ቢስኩቶች የበለፀገ እና ለስላሳ ይዘት ይለማመዱ።",
              image: "/assets/recipes/recipe-1.png",
              bgColor: "#4B2C19",
            },
            {
              title: "የኦሪዮ ጊዜ",
              description: "ለሻይ ሰዓትዎ ፍጹም የተመጣጠነ ቸኮሌት እና ክሬም።",
              image: "/assets/recipes/recipe-2.png",
              bgColor: "#DCA519",
            },
            {
              title: "ጣፋጭ ንክሻ",
              description: "ለሁሉም ሰው ትልቅ ፈገግታ የሚያመጡ ትናንሽ ጣፋጭ ንክሻዎች።",
              image: "/assets/recipes/recipe-3.png",
              bgColor: "#005A40",
            },
          ],
        },
      },
    },
  ],
};

function ensureRecipeItems(content?: RecipesSectionContent): RecipesSectionContent {
  const fallback = defaultRecipeItems();
  const enItems = content?.en?.items?.length ? content.en.items : fallback;
  const amItems = content?.am?.items?.length
    ? content.am.items
    : enItems.map((item) => ({ ...item }));

  return {
    en: { items: enItems.map((item, idx) => ({ ...fallback[idx], ...item })) },
    am: { items: amItems.map((item, idx) => ({ ...fallback[idx], ...item })) },
  };
}

export default function RecipesAdminPage() {
  const [activeLang, setActiveLang] = useState<Locale>("en");
  const [page, setPage] = useState<RecipesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 2500);
  };

  const heroSection = useMemo(
    () => page?.sections.find((section) => section.id === "hero"),
    [page],
  );
  const headerSection = useMemo(
    () => page?.sections.find((section) => section.id === "header"),
    [page],
  );
  const recipesSection = useMemo(
    () => page?.sections.find((section) => section.id === "recipes-grid"),
    [page],
  );

  const loadPage = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<RecipesPageData>("/content/pages/recipes");
      setPage({
        ...data,
        sections: data.sections.map((section) => {
          if (section.id !== "recipes-grid") return section;
          return {
            ...section,
            content: ensureRecipeItems(section.content as RecipesSectionContent),
          };
        }) as RecipesPageData["sections"],
      });
    } catch {
      setPage(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  const initializePage = async () => {
    setInitializing(true);
    try {
      const { data } = await api.post<RecipesPageData>("/content/pages/upsert", DEFAULT_RECIPES_PAGE);
      setPage(data);
      showToast("success", "Recipes page initialized.");
    } catch {
      showToast("error", "Failed to initialize recipes page.");
    } finally {
      setInitializing(false);
    }
  };

  const updateSectionInState = (sectionId: "hero" | "header" | "recipes-grid", content: unknown) => {
    setPage((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        sections: prev.sections.map((section) =>
          section.id === sectionId ? { ...section, content: content as never } : section,
        ),
      };
    });
  };

  const saveSection = async (sectionId: "hero" | "header" | "recipes-grid", content: unknown) => {
    setSaving(true);
    try {
      await api.patch(`/content/pages/recipes/sections/${sectionId}`, { content });
      updateSectionInState(sectionId, content);
      showToast("success", "Section saved.");
      await loadPage();
    } catch {
      showToast("error", "Failed to save section.");
    } finally {
      setSaving(false);
    }
  };

  const uploadImage = async (file: File, key: string): Promise<string | null> => {
    setUploadingKey(key);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await api.post<{ url: string }>("/content/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data.url;
    } catch {
      showToast("error", "Image upload failed.");
      return null;
    } finally {
      setUploadingKey(null);
    }
  };

  if (loading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="p-6 lg:p-8 max-w-4xl">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <AlertCircle size={36} className="text-amber-500 mx-auto mb-3" />
          <h2 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Recipes page not initialized</h2>
          <p className="text-sm text-gray-600 mt-1 mb-5">
            Create the recipes CMS page and start managing hero, intro, and recipe cards.
          </p>
          <button
            onClick={initializePage}
            disabled={initializing}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold disabled:opacity-70"
          >
            {initializing ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {initializing ? "Initializing..." : "Initialize Recipes Page"}
          </button>
        </div>
      </div>
    );
  }

  const heroContent = (heroSection?.content ?? DEFAULT_RECIPES_PAGE.sections[0].content) as HeroSectionContent;
  const headerContent = (headerSection?.content ?? DEFAULT_RECIPES_PAGE.sections[1].content) as HeaderSectionContent;
  const recipesContent = ensureRecipeItems(recipesSection?.content as RecipesSectionContent);

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-['Funnel_Display'] text-[28px] font-bold text-[#333733]">Recipes Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage recipes page hero, header, and recipe cards.</p>
          {page.updatedAt ? (
            <p className="text-xs text-gray-400 mt-2">Last updated: {new Date(page.updatedAt).toLocaleString()}</p>
          ) : null}
        </div>
        <button
          onClick={loadPage}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600"
        >
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <UtensilsCrossed size={16} className="text-[#23B349]" />
            <h2 className="text-sm font-semibold text-[#333733]">Hero Section</h2>
          </div>
          <button
            onClick={() => saveSection("hero", heroContent)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#23B349] text-white text-xs font-semibold disabled:opacity-70"
          >
            <Save size={12} /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className={inputCls}
            placeholder="Hero title (EN)"
            value={heroContent.en.title}
            onChange={(e) =>
              updateSectionInState("hero", {
                ...heroContent,
                en: { ...heroContent.en, title: e.target.value },
              })
            }
          />
          <input
            className={inputCls}
            placeholder="Hero title (AM)"
            value={heroContent.am.title}
            onChange={(e) =>
              updateSectionInState("hero", {
                ...heroContent,
                am: { ...heroContent.am, title: e.target.value },
              })
            }
          />
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">Hero image</label>
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                {heroContent.en.image ? (
                  <Image src={heroContent.en.image} alt="Hero preview" fill className="object-cover" unoptimized />
                ) : null}
              </div>
              <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-600 cursor-pointer">
                {uploadingKey === "hero" ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                {uploadingKey === "hero" ? "Uploading..." : "Change image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={uploadingKey === "hero"}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const url = await uploadImage(file, "hero");
                    if (!url) return;
                    updateSectionInState("hero", {
                      en: { ...heroContent.en, image: url },
                      am: { ...heroContent.am, image: url },
                    });
                  }}
                />
              </label>
              <input
                className={inputCls}
                value={heroContent.en.image}
                onChange={(e) =>
                  updateSectionInState("hero", {
                    en: { ...heroContent.en, image: e.target.value },
                    am: { ...heroContent.am, image: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#333733]">Header Section</h2>
          <button
            onClick={() => saveSection("header", headerContent)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#23B349] text-white text-xs font-semibold disabled:opacity-70"
          >
            <Save size={12} /> {saving ? "Saving..." : "Save"}
          </button>
        </div>

        <div className="flex items-center gap-2 mb-3">
          {(["en", "am"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1.5 text-xs rounded-lg font-semibold ${
                activeLang === lang ? "bg-[#23B349] text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {lang === "en" ? "English" : "Amharic"}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <input
            className={inputCls}
            placeholder={`Header title (${activeLang.toUpperCase()})`}
            value={headerContent[activeLang].title}
            onChange={(e) =>
              updateSectionInState("header", {
                ...headerContent,
                [activeLang]: { ...headerContent[activeLang], title: e.target.value },
              })
            }
          />
          <textarea
            rows={3}
            className={textareaCls}
            placeholder={`Header description (${activeLang.toUpperCase()})`}
            value={headerContent[activeLang].description}
            onChange={(e) =>
              updateSectionInState("header", {
                ...headerContent,
                [activeLang]: { ...headerContent[activeLang], description: e.target.value },
              })
            }
          />
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#333733]">Recipe Cards</h2>
          <button
            onClick={() => saveSection("recipes-grid", recipesContent)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#23B349] text-white text-xs font-semibold disabled:opacity-70"
          >
            <Save size={12} /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
        <div className="space-y-4">
          {recipesContent.en.items.map((_, index) => (
            <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Card {index + 1}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  className={inputCls}
                  placeholder="Title (EN)"
                  value={recipesContent.en.items[index]?.title ?? ""}
                  onChange={(e) => {
                    const next = ensureRecipeItems(recipesContent);
                    next.en.items[index] = { ...next.en.items[index], title: e.target.value };
                    updateSectionInState("recipes-grid", next);
                  }}
                />
                <input
                  className={inputCls}
                  placeholder="Title (AM)"
                  value={recipesContent.am.items[index]?.title ?? ""}
                  onChange={(e) => {
                    const next = ensureRecipeItems(recipesContent);
                    next.am.items[index] = { ...next.am.items[index], title: e.target.value };
                    updateSectionInState("recipes-grid", next);
                  }}
                />
                <textarea
                  rows={2}
                  className={textareaCls}
                  placeholder="Description (EN)"
                  value={recipesContent.en.items[index]?.description ?? ""}
                  onChange={(e) => {
                    const next = ensureRecipeItems(recipesContent);
                    next.en.items[index] = { ...next.en.items[index], description: e.target.value };
                    updateSectionInState("recipes-grid", next);
                  }}
                />
                <textarea
                  rows={2}
                  className={textareaCls}
                  placeholder="Description (AM)"
                  value={recipesContent.am.items[index]?.description ?? ""}
                  onChange={(e) => {
                    const next = ensureRecipeItems(recipesContent);
                    next.am.items[index] = { ...next.am.items[index], description: e.target.value };
                    updateSectionInState("recipes-grid", next);
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_150px] gap-3 items-center">
                <div className="relative w-[120px] h-[90px] rounded-lg border border-gray-200 overflow-hidden bg-white">
                  {recipesContent.en.items[index]?.image ? (
                    <Image
                      src={recipesContent.en.items[index].image}
                      alt={`Recipe ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-sm text-gray-600 cursor-pointer shrink-0">
                    {uploadingKey === `recipe-${index}` ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <ImagePlus size={14} />
                    )}
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploadingKey === `recipe-${index}`}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const url = await uploadImage(file, `recipe-${index}`);
                        if (!url) return;
                        const next = ensureRecipeItems(recipesContent);
                        next.en.items[index] = { ...next.en.items[index], image: url };
                        next.am.items[index] = { ...next.am.items[index], image: url };
                        updateSectionInState("recipes-grid", next);
                      }}
                    />
                  </label>
                  <input
                    className={inputCls}
                    value={recipesContent.en.items[index]?.image ?? ""}
                    onChange={(e) => {
                      const next = ensureRecipeItems(recipesContent);
                      next.en.items[index] = { ...next.en.items[index], image: e.target.value };
                      next.am.items[index] = { ...next.am.items[index], image: e.target.value };
                      updateSectionInState("recipes-grid", next);
                    }}
                  />
                </div>
                <input
                  className={inputCls}
                  placeholder="#23B349"
                  value={recipesContent.en.items[index]?.bgColor ?? ""}
                  onChange={(e) => {
                    const next = ensureRecipeItems(recipesContent);
                    next.en.items[index] = { ...next.en.items[index], bgColor: e.target.value };
                    next.am.items[index] = { ...next.am.items[index], bgColor: e.target.value };
                    updateSectionInState("recipes-grid", next);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {toast ? (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white ${
            toast.type === "success" ? "bg-[#23B349]" : "bg-red-500"
          }`}
        >
          {toast.type === "success" ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
          {toast.message}
        </div>
      ) : null}
    </div>
  );
}
