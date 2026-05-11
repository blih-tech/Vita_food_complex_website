"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle, Edit3, RefreshCw, Type, X } from "lucide-react";
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

const inputCls =
  "w-full border border-gray-200 rounded-[10px] px-3 py-2 text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349]";

function setAtPath<T extends object>(
  source: T,
  path: (string | number)[],
  value: unknown,
): T {
  const draft = JSON.parse(JSON.stringify(source)) as Record<string, unknown>;
  let current: Record<string, unknown> = draft;
  for (let i = 0; i < path.length - 1; i++) {
    const key = String(path[i]);
    if (typeof current[key] !== "object" || current[key] === null) current[key] = {};
    current = current[key] as Record<string, unknown>;
  }
  current[String(path[path.length - 1])] = value;
  return draft as T;
}

function getPreview(section: Section): string {
  const content = section.content as Record<string, unknown>;
  const en = (content?.en as Record<string, unknown>) ?? {};
  const text = typeof en.title === "string" ? en.title : "";
  return text.length > 70 ? `${text.slice(0, 70)}...` : text;
}

export default function ProductsPageCmsPanel() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [formContent, setFormContent] = useState<unknown>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(
    null,
  );

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3200);
  };

  const fetchPage = useCallback(async () => {
    try {
      const res = await api.get<PageData>("/content/pages/products");
      setPage(res.data);
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
      const res = await api.post<PageData>("/content/pages/products/initialize");
      setPage(res.data);
      showToast("success", "Products page content initialized.");
    } catch {
      showToast("error", "Failed to initialize products page CMS.");
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
      await api.patch(`/content/pages/products/sections/${editingSection.id}`, {
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
          <p className="text-sm font-semibold text-[#333733]">Products page (CMS)</p>
          <p className="text-xs text-gray-500 mt-1">
            Hero section copy for the public products page.
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
            Products page CMS not created yet
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Initialize default bilingual hero content and edit it here.
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
            {initializing ? "Initializing..." : "Initialize products page CMS"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {page.sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                {index + 1}
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#23B349]/10 flex items-center justify-center shrink-0">
                <Type size={18} className="text-[#23B349]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#1F2937] text-sm">Hero section</p>
                <p className="text-xs text-gray-400 mt-0.5 truncate">{getPreview(section)}</p>
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
          ))}
        </div>
      )}

      {editingSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">
                  Edit hero content
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Page headline and subtitle
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
              <input
                className={inputCls}
                placeholder="Title"
                value={(localized.title as string) ?? ""}
                onChange={(e) =>
                  setFormContent((prev: unknown) =>
                    setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value),
                  )
                }
              />
              <textarea
                className={inputCls}
                rows={3}
                placeholder="Subtitle"
                value={(localized.subtitle as string) ?? ""}
                onChange={(e) =>
                  setFormContent((prev: unknown) =>
                    setAtPath((prev ?? {}) as object, [lang, "subtitle"], e.target.value),
                  )
                }
              />
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
                disabled={saving}
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
