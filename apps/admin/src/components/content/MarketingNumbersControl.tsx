"use client";

import { useMemo, useState } from "react";
import { BarChart3, CheckCircle2, Loader2, Save, X } from "lucide-react";
import { usePathname } from "next/navigation";
import api from "@/lib/api";

type Locale = "en" | "am";

type Fact = {
  id?: string;
  value?: string;
  value2?: string;
  label?: string;
};

type LocalizedQuickFacts = {
  label?: string;
  facts?: Fact[];
};

type QuickFactsContent = Record<Locale, LocalizedQuickFacts>;

type MarketingMetric = {
  id: "investment" | "biscuits" | "flour";
  title: string;
  example: string;
};

const METRICS: MarketingMetric[] = [
  {
    id: "investment",
    title: "Total Investment",
    example: "423,566,605 Birr",
  },
  {
    id: "biscuits",
    title: "Biscuit Production Capacity",
    example: "1,600 kg/hr",
  },
  {
    id: "flour",
    title: "Flour Production Capacity",
    example: "100 T",
  },
];

const FALLBACK_CONTENT: QuickFactsContent = {
  en: {
    label: "Vita in Numbers",
    facts: [
      {
        id: "investment",
        value: "423,566,605 Birr",
        value2: "",
        label: "Total Investment",
      },
      {
        id: "biscuits",
        value: "1,600 kg/hr",
        label: "Biscuit Production Capacity",
      },
      {
        id: "flour",
        value: "100 T",
        label: "Flour Production Capacity",
      },
    ],
  },
  am: {
    label: "ቪታ በቁጥር",
    facts: [
      {
        id: "investment",
        value: "423,566,605 ብር",
        value2: "",
        label: "ጠቅላላ ኢንቨስትመንት",
      },
      {
        id: "biscuits",
        value: "1,600 ኪ.ግ/ሰዓት",
        label: "የቢስኩት የማምረት አቅም",
      },
      {
        id: "flour",
        value: "100 ቶን",
        label: "የዱቄት የማምረት አቅም",
      },
    ],
  },
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function normalizeContent(content: unknown): QuickFactsContent {
  const source =
    content && typeof content === "object"
      ? clone(content as Record<string, LocalizedQuickFacts>)
      : clone(FALLBACK_CONTENT);

  const normalized: QuickFactsContent = {
    en: source.en ?? clone(FALLBACK_CONTENT.en),
    am: source.am ?? clone(FALLBACK_CONTENT.am),
  };

  for (const locale of ["en", "am"] as const) {
    if (!Array.isArray(normalized[locale].facts)) {
      normalized[locale].facts = [];
    }

    for (const metric of METRICS) {
      const exists = normalized[locale].facts?.some(
        (fact) => fact.id === metric.id,
      );
      if (!exists) {
        const fallback = FALLBACK_CONTENT[locale].facts?.find(
          (fact) => fact.id === metric.id,
        );
        if (fallback) normalized[locale].facts?.push(clone(fallback));
      }
    }
  }

  return normalized;
}

export default function MarketingNumbersControl() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const [sectionId, setSectionId] = useState("quick-facts");
  const [content, setContent] = useState<QuickFactsContent>(() =>
    clone(FALLBACK_CONTENT),
  );
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const isHomeAdmin =
    pathname === "/home" || pathname?.endsWith("/home") === true;

  const facts = useMemo(
    () => (Array.isArray(content[locale]?.facts) ? content[locale].facts! : []),
    [content, locale],
  );

  if (!isHomeAdmin) return null;

  const openEditor = async () => {
    setOpen(true);
    setLoading(true);
    setMessage(null);

    try {
      const { data } = await api.get("/content/pages/home");
      const section = data?.sections?.find(
        (item: { id?: string; type?: string }) =>
          item.id === "quick-facts" || item.type === "quick-facts",
      );

      if (!section) {
        throw new Error("Marketing numbers section was not found.");
      }

      setSectionId(section.id || "quick-facts");
      setContent(normalizeContent(section.content));
    } catch {
      setMessage({
        type: "error",
        text: "Could not load the current marketing numbers.",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateMetric = (
    metricId: MarketingMetric["id"],
    field: "value" | "label",
    value: string,
  ) => {
    setContent((previous) => {
      const next = clone(previous);
      const localized = next[locale];
      const list = Array.isArray(localized.facts) ? localized.facts : [];
      const index = list.findIndex((fact) => fact.id === metricId);

      if (index >= 0) {
        list[index] = { ...list[index], [field]: value };
        if (metricId === "investment" && field === "value") {
          list[index].value2 = "";
        }
      } else {
        list.push({ id: metricId, [field]: value });
      }

      localized.facts = list;
      return next;
    });
  };

  const save = async () => {
    setSaving(true);
    setMessage(null);

    try {
      await api.patch(`/content/pages/home/sections/${sectionId}`, {
        content,
      });
      setMessage({
        type: "success",
        text: "Marketing numbers updated. The public home page will use these values.",
      });
    } catch {
      setMessage({
        type: "error",
        text: "Failed to update the marketing numbers.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openEditor}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#23B349] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(35,179,73,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1a9e3e]"
      >
        <BarChart3 size={17} />
        Marketing Numbers
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5 sm:px-7">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[#23B349]">
                  <BarChart3 size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.14em]">
                    Public Homepage
                  </span>
                </div>
                <h2 className="font-['Funnel_Display'] text-xl font-bold text-[#1F2937]">
                  Update Marketing Numbers
                </h2>
                <p className="mt-1 max-w-lg text-sm leading-6 text-gray-500">
                  These values control the three animated counters shown in the
                  “Vita in Numbers” section on the public home page.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
                aria-label="Close marketing numbers editor"
              >
                <X size={16} />
              </button>
            </div>

            <div className="border-b border-gray-100 px-6 py-3 sm:px-7">
              <div className="inline-flex rounded-[10px] bg-gray-100 p-1">
                {(["en", "am"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLocale(item)}
                    className={`rounded-[8px] px-4 py-2 text-xs font-semibold transition ${
                      locale === item
                        ? "bg-white text-[#1F2937] shadow-sm"
                        : "text-gray-500"
                    }`}
                  >
                    {item === "en" ? "English" : "Amharic"}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-7">
              {loading ? (
                <div className="flex min-h-56 items-center justify-center">
                  <Loader2 size={26} className="animate-spin text-[#23B349]" />
                </div>
              ) : (
                <div className="space-y-4">
                  {METRICS.map((metric) => {
                    const fact = facts.find((item) => item.id === metric.id);
                    return (
                      <div
                        key={metric.id}
                        className="rounded-[16px] border border-gray-100 bg-gray-50/80 p-4 sm:p-5"
                      >
                        <div className="mb-4">
                          <p className="font-['Funnel_Display'] text-sm font-bold text-[#1F2937]">
                            {metric.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">
                            Example: {metric.example}
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className="block">
                            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                              Value + unit
                            </span>
                            <input
                              value={fact?.value ?? ""}
                              onChange={(event) =>
                                updateMetric(
                                  metric.id,
                                  "value",
                                  event.target.value,
                                )
                              }
                              className="w-full rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1F2937] outline-none transition focus:border-[#23B349] focus:ring-2 focus:ring-[#23B349]/20"
                              placeholder={metric.example}
                            />
                          </label>

                          <label className="block">
                            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                              Label
                            </span>
                            <input
                              value={fact?.label ?? ""}
                              onChange={(event) =>
                                updateMetric(
                                  metric.id,
                                  "label",
                                  event.target.value,
                                )
                              }
                              className="w-full rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#1F2937] outline-none transition focus:border-[#23B349] focus:ring-2 focus:ring-[#23B349]/20"
                            />
                          </label>
                        </div>
                      </div>
                    );
                  })}

                  {message ? (
                    <div
                      className={`flex items-start gap-2 rounded-[12px] px-4 py-3 text-sm ${
                        message.type === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {message.type === "success" ? (
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                      ) : null}
                      <span>{message.text}</span>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-4 sm:px-7">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-[10px] border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={save}
                disabled={loading || saving}
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#23B349] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a9e3e] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Save size={15} />
                )}
                {saving ? "Saving…" : "Save Numbers"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
