"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Edit3,
  ImageIcon,
  Loader2,
  RefreshCw,
  Type,
  X,
} from "lucide-react";
import api from "@/lib/api";

type Lang = "en" | "am";

interface Section {
  id: string;
  type: string;
  content: unknown;
}

interface PageData {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
}

type RecipesSectionKind = "recipes-hero" | "recipes-header";

const SECTION_META: Record<
  RecipesSectionKind,
  { name: string; description: string; icon: typeof ImageIcon }
> = {
  "recipes-hero": {
    name: "Hero banner",
    description: "Screen-reader title and hero image",
    icon: ImageIcon,
  },
  "recipes-header": {
    name: "Intro copy",
    description: "Label, headline, tagline and description below the hero",
    icon: Type,
  },
};

/** Removed from DB on load; recipe cards use the Recipe cards tab + recipes API. */
const REMOVED_LEGACY_SECTION_TYPES = new Set(["recipes-grid"]);

/** Legacy pages used `hero` / `header`; new pages use `recipes-hero` / `recipes-header`. */
function normalizeRecipesSectionKind(sectionType: string): RecipesSectionKind | null {
  if (sectionType === "recipes-hero" || sectionType === "hero") {
    return "recipes-hero";
  }
  if (sectionType === "recipes-header" || sectionType === "header") {
    return "recipes-header";
  }
  return null;
}

function sectionDisplayMeta(sectionType: string) {
  const kind = normalizeRecipesSectionKind(sectionType);
  if (kind) return SECTION_META[kind];
  return {
    name: sectionType,
    description: "Unknown section type — not managed on this screen",
    icon: Type,
  };
}

function setAtPath<T extends object>(
  source: T,
  path: (string | number)[],
  value: unknown,
): T {
  const draft = JSON.parse(JSON.stringify(source)) as Record<string, unknown>;
  let current: Record<string, unknown> = draft;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    const next = current[String(key)];
    if (typeof next !== "object" || next === null) current[String(key)] = {};
    current = current[String(key)] as Record<string, unknown>;
  }
  current[String(path[path.length - 1])] = value;
  return draft as T;
}

function getPreview(section: Section): string {
  const content = section.content as Record<string, unknown>;
  const en = (content?.en as Record<string, unknown>) ?? {};
  const candidates = [
    en.title,
    en.label,
    en.description,
  ].filter((v): v is string => typeof v === "string" && v.trim().length > 0);
  const text = candidates[0] ?? "";
  return text.length > 70 ? `${text.slice(0, 70)}...` : text;
}

export default function RecipesPageCmsPanel() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [formContent, setFormContent] = useState<unknown>(null);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(
    null,
  );

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3200);
  };

  const fetchPage = useCallback(async () => {
    try {
      const res = await api.get<PageData>("/content/pages/recipes");
      const data = res.data;
      const hadLegacyGrid = data.sections?.some((s) =>
        REMOVED_LEGACY_SECTION_TYPES.has(s.type),
      );
      if (hadLegacyGrid) {
        const sections = data.sections.filter(
          (s) => !REMOVED_LEGACY_SECTION_TYPES.has(s.type),
        );
        try {
          const putRes = await api.put<PageData>("/content/pages/recipes", {
            slug: data.slug,
            title: data.title,
            sections,
          });
          setPage(putRes.data);
          setToast({
            type: "success",
            msg: "Removed legacy recipe grid from CMS (cards are on Recipe cards).",
          });
          setTimeout(() => setToast(null), 3200);
        } catch {
          setPage(data);
          setToast({ type: "error", msg: "Could not remove legacy recipe grid." });
          setTimeout(() => setToast(null), 3200);
        }
      } else {
        setPage(data);
      }
    } catch {
      setPage(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const initializePage = async () => {
    setInitializing(true);
    try {
      const res = await api.post<PageData>("/content/pages/recipes/initialize");
      setPage(res.data);
      showToast("success", "Recipes page content initialized.");
    } catch {
      showToast("error", "Failed to initialize recipes page CMS.");
    } finally {
      setInitializing(false);
    }
  };

  const openEditor = (section: Section) => {
    setEditingSection(section);
    const raw = section.content;
    setFormContent(
      raw != null && typeof raw === "object"
        ? JSON.parse(JSON.stringify(raw))
        : { en: {}, am: {} },
    );
    setLang("en");
  };

  const saveSection = async () => {
    if (!editingSection) return;
    setSaving(true);
    try {
      await api.patch(`/content/pages/recipes/sections/${editingSection.id}`, {
        content: formContent,
      });
      setPage((prev) =>
        prev
          ? {
              ...prev,
              sections: prev.sections.map((s) =>
                s.id === editingSection.id ? { ...s, content: formContent } : s,
              ),
            }
          : prev,
      );
      setEditingSection(null);
      showToast("success", "Section saved.");
    } catch {
      showToast("error", "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const uploadImage = async (file: File, key: string) => {
    setUploadingKey(key);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await api.post<{ url: string }>("/content/upload-image", fd, {
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

  const inputCls =
    "w-full border border-gray-200 rounded-[10px] px-3 py-2 text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349]";

  const sectionKind = editingSection
    ? normalizeRecipesSectionKind(editingSection.type)
    : null;
  const typedForm = useMemo(
    () => (formContent ?? {}) as Record<string, unknown>,
    [formContent],
  );
  const localized = (typedForm[lang] as Record<string, unknown>) ?? {};

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <RefreshCw size={24} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#333733]">Recipes page (CMS)</p>
          <p className="text-xs text-gray-500 mt-1">
            Hero and intro below the banner. Recipe cards are managed on the Recipe
            cards tab.
          </p>
          {page?.updatedAt && (
            <p className="text-xs text-gray-400 mt-2">
              CMS last updated: {new Date(page.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={fetchPage}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-100 border border-gray-200 shrink-0"
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      {!page ? (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <AlertCircle size={40} className="text-amber-400 mx-auto mb-4" />
          <h3 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937] mb-2">
            Recipes page CMS not created yet
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Insert default bilingual hero and header content, then edit each section.
          </p>
          <button
            type="button"
            onClick={initializePage}
            disabled={initializing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#23B349] text-white rounded-xl font-semibold text-sm hover:bg-[#1a9e3e] disabled:opacity-60"
          >
            {initializing ? (
              <RefreshCw size={14} className="animate-spin" />
            ) : (
              <CheckCircle size={14} />
            )}
            {initializing ? "Initializing..." : "Initialize recipes page CMS"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {page.sections.map((section, index) => {
            const meta = sectionDisplayMeta(section.type);
            const Icon = meta.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                  {index + 1}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#23B349]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#23B349]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1F2937] text-sm">
                    {meta.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {getPreview(section) || meta.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openEditor(section)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20"
                >
                  <Edit3 size={14} />
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      )}

      {editingSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">
                  {sectionDisplayMeta(editingSection.type).name}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {sectionDisplayMeta(editingSection.type).description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingSection(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X size={15} className="text-gray-500" />
              </button>
            </div>

            <div className="px-6 pt-4 flex gap-2">
              {(["en", "am"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    lang === l
                      ? "bg-[#23B349] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {l === "en" ? "English" : "አማርኛ"}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {sectionKind === "recipes-hero" && (
                <>
                  <input
                    className={inputCls}
                    placeholder="Hero title (accessibility)"
                    value={(localized.title as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value),
                      )
                    }
                  />
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Hero image
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        className={inputCls}
                        placeholder="Image URL"
                        value={(localized.image as string) ?? ""}
                        onChange={(e) =>
                          setFormContent((prev: unknown) =>
                            setAtPath((prev ?? {}) as object, [lang, "image"], e.target.value),
                          )
                        }
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 text-gray-600 text-xs font-semibold cursor-pointer shrink-0 hover:bg-gray-200">
                        {uploadingKey === `rh-${lang}` ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <ImageIcon size={14} />
                        )}
                        Upload
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          disabled={uploadingKey === `rh-${lang}`}
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const url = await uploadImage(file, `rh-${lang}`);
                            if (!url) return;
                            setFormContent((prev: unknown) =>
                              setAtPath((prev ?? {}) as object, [lang, "image"], url),
                            );
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </>
              )}
              {sectionKind === "recipes-header" && (
                <>
                  <input
                    className={inputCls}
                    placeholder="Label / eyebrow"
                    value={(localized.label as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath((prev ?? {}) as object, [lang, "label"], e.target.value),
                      )
                    }
                  />
                  <input
                    className={inputCls}
                    placeholder="Main headline"
                    value={(localized.title as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value),
                      )
                    }
                  />
                  <input
                    className={inputCls}
                    placeholder="Tagline (before accent)"
                    value={(localized.heading as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath((prev ?? {}) as object, [lang, "heading"], e.target.value),
                      )
                    }
                  />
                  <input
                    className={inputCls}
                    placeholder="Accent word (styled in brand green)"
                    value={(localized.headingAccent as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath(
                          (prev ?? {}) as object,
                          [lang, "headingAccent"],
                          e.target.value,
                        ),
                      )
                    }
                  />
                  <textarea
                    className={inputCls}
                    rows={3}
                    placeholder="Description"
                    value={(localized.description as string) ?? ""}
                    onChange={(e) =>
                      setFormContent((prev: unknown) =>
                        setAtPath(
                          (prev ?? {}) as object,
                          [lang, "description"],
                          e.target.value,
                        ),
                      )
                    }
                  />
                </>
              )}
              {sectionKind === null && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  This section type (<span className="font-mono">{editingSection.type}</span>) is not
                  supported on this page.
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setEditingSection(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveSection}
                disabled={saving || sectionKind === null}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#23B349] text-white hover:bg-[#1a9e3e] disabled:opacity-60"
              >
                {saving ? (
                  <RefreshCw size={14} className="animate-spin" />
                ) : (
                  <CheckCircle size={14} />
                )}
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-60 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold ${
            toast.type === "success" ? "bg-[#23B349] text-white" : "bg-red-500 text-white"
          }`}
        >
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
