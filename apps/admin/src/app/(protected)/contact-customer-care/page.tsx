"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Save,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  Layout,
  Image as ImageIcon,
  Plus,
  Trash2,
  AlertCircle,
  ExternalLink,
  Rows3,
  ClipboardList,
  MessageSquareWarning,
  ToggleLeft,
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

type Section = {
  id: string;
  type: string;
  content: Record<string, unknown>;
};

type PageData = {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
};

type ExtraSurveyRow = {
  id: string;
  primary: string;
  secondary: string;
  placeholderEn?: string;
  placeholderAm?: string;
  inputType?: "text" | "textarea";
};

type ReferenceFieldDraft = {
  key?: string;
  primary?: string;
  secondary?: string;
  type?: string;
  placeholderEn?: string;
  placeholderAm?: string;
};

function newSurveyFieldId(): string {
  const c =
    typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.randomUUID === "function"
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
  return `survey_${c}`;
}

function uniqRefFieldKey(existing: string[]): string {
  let n = 1;
  let k = `field_${n}`;
  while (existing.includes(k)) {
    n += 1;
    k = `field_${n}`;
  }
  return k;
}

const SECTION_META: Record<string, { name: string; icon: typeof Layout }> = {
  "customer-care-hero": { name: "Hero", icon: Layout },
  "customer-care-switch": { name: "Feedback / Complaint tabs", icon: ToggleLeft },
  "customer-care-feedback": { name: "Feedback form", icon: ClipboardList },
  "customer-care-complaint": { name: "Complaint form", icon: MessageSquareWarning },
};

const DEFAULT_FEEDBACK_SHARE = {
  ratingLabels: [
    { primary: "V.Good", secondary: "በጣም ጥሩ" },
    { primary: "Good", secondary: "ጥሩ" },
    { primary: "Satisfactory", secondary: "በቂ" },
    { primary: "Poor", secondary: "ዝቅተኛ" },
  ],
  feedbackQuestions: [
    { primary: "How do you get sales department Guests handling", secondary: "የሽያጭ ክፍል የእንግዳ አቀባበል እንዴት ያገኙታል?" },
    { primary: "Time taken for purchasing process", secondary: "ለግዢ ሂደት የሚወስደው ጊዜ" },
    { primary: "How do you get store keepers Customer handling", secondary: "የመጋዘን ሰራተኞች የደንበኞች አያያዝ እንዴት ያገኙታል?" },
    { primary: "Products quality and safety status", secondary: "የምርቶች ጥራት እና ደህንነት ሁኔታ" },
    { primary: "Delivery Time & adequacy", secondary: "ግዜ እና በሚፈለገው መጠን የማቅረብ ሁኔታ" },
    { primary: "Is loading condition meet standard", secondary: "የምርቱ አጫጫን ሁኔታ ደረጃውን የጠበቀ ነበር" },
    { primary: "Products' price", secondary: "የምርቶች ዋጋ" },
  ],
  referenceFields: [
    { key: "name", primary: "Name", secondary: "ስም", type: "text", placeholderEn: "Your name", placeholderAm: "ስም" },
    { key: "address", primary: "Address", secondary: "አድራሻ", type: "text", placeholderEn: "Your address", placeholderAm: "አድራሻ" },
    { key: "date", primary: "Date", secondary: "ቀን", type: "date", placeholderEn: "", placeholderAm: "" },
  ],
  extraSurveyFields: [] as ExtraSurveyRow[],
};

const DEFAULT_PAGE: PageData = {
  slug: "contact-customer-care",
  title: { en: "Contact Customer Care", am: "የደንበኞች አገልግሎት" },
  sections: [
    { id: "cc-hero", type: "customer-care-hero", content: { en: {}, am: {} } },
    { id: "cc-switch", type: "customer-care-switch", content: { en: {}, am: {} } },
    {
      id: "cc-feedback",
      type: "customer-care-feedback",
      content: { en: {}, am: {}, ...DEFAULT_FEEDBACK_SHARE },
    },
    { id: "cc-complaint", type: "customer-care-complaint", content: { en: {}, am: {} } },
  ],
};

function getPreview(section: Section) {
  const c = section.content;
  const en = (c?.en ?? {}) as Record<string, string | undefined>;
  switch (section.type) {
    case "customer-care-hero":
      return en.headlineLead || en.headlineFull || "Hero";
    case "customer-care-switch":
      return `${en.feedbackTab ?? "Feedback"} / ${en.complaintTab ?? "Complaint"}`;
    case "customer-care-feedback":
      return en.formTitle || "Feedback form";
    case "customer-care-complaint":
      return en.formTitle || "Complaint form";
    default:
      return section.type;
  }
}

export default function ContactCustomerCareAdminPage() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editSection, setEditSection] = useState<number | null>(null);

  useEffect(() => {
    void fetchPage();
  }, []);

  const fetchPage = async () => {
    setLoading(true);
    try {
      const res = await api.get("/content/pages/contact-customer-care");
      setPage(res.data);
    } catch (err: unknown) {
      const status =
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof (err as { response?: { status?: number } }).response?.status === "number" ?
          (err as { response: { status: number } }).response.status
        : 0;
      if (status === 404) {
        setPage(DEFAULT_PAGE);
      } else {
        toast.error("Failed to load page data");
      }
    } finally {
      setLoading(false);
    }
  };

  const savePage = async () => {
    if (!page) return;
    setSaving(true);
    try {
      await api.put("/content/pages/contact-customer-care", page);
      toast.success("Page saved.");
      setEditSection(null);
    } catch {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const initializePage = async () => {
    setSaving(true);
    try {
      await api.post("/content/pages", DEFAULT_PAGE);
      setPage(DEFAULT_PAGE);
      toast.success("Page initialized in database");
    } catch {
      toast.error("Failed to initialize page");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <RefreshCw className="animate-spin text-[#23B349]" size={32} />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="mx-auto text-gray-300 mb-4" size={48} />
        <h2 className="text-xl font-bold text-gray-600">Page Not Found</h2>
        <button
          type="button"
          onClick={initializePage}
          className="mt-4 bg-[#23B349] text-white px-6 py-2 rounded-lg"
        >
          Initialize Page
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <Link href="/pages" className="hover:text-[#23B349]">
              Pages
            </Link>
            <ChevronRight size={14} />
            <span>Contact Customer Care</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Contact Customer Care</h1>
          {page.updatedAt && (
            <p className="text-xs text-gray-400 mt-1">
              Last updated: {new Date(page.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://vitafoodcomplex.vercel.app/en/contact-customer-care"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} /> View Live
          </a>
          <button
            type="button"
            onClick={savePage}
            disabled={saving}
            className="flex items-center gap-2 bg-[#23B349] text-white px-6 py-2 rounded-xl hover:bg-[#1f9d40] transition-colors shadow-lg shadow-[#23B349]/20 disabled:opacity-50 font-medium"
          >
            {saving ?
              <RefreshCw size={18} className="animate-spin" />
            : <Save size={18} />}
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {page.sections.map((section, idx) => {
          const meta = SECTION_META[section.type] || { name: section.type, icon: Rows3 };
          const Icon = meta.icon;
          const isEditing = editSection === idx;

          return (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div
                role="button"
                tabIndex={0}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setEditSection(isEditing ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setEditSection(isEditing ? null : idx);
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">{meta.name}</h3>
                    <p className="text-xs text-gray-400 truncate max-w-[300px]">{getPreview(section)}</p>
                  </div>
                </div>
                <button type="button" className="p-2 text-gray-400 hover:text-[#23B349] transition-colors">
                  {isEditing ?
                    <ChevronDown size={20} />
                  : <ChevronRight size={20} />}
                </button>
              </div>

              {isEditing && (
                <div className="p-6 border-t border-gray-50 bg-gray-50/30">
                  <EditModal
                    section={section}
                    onChange={(newContent) => {
                      const newSections = [...page.sections];
                      newSections[idx] = { ...section, content: newContent };
                      setPage({ ...page, sections: newSections });
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type LangContent = Record<string, string | undefined>;

function EditModal({
  section,
  onChange,
}: {
  section: Section;
  onChange: (content: Record<string, unknown>) => void;
}) {
  const [lang, setLang] = useState<"en" | "am">("en");
  const raw = section.content || {};
  const content = raw as Record<string, unknown>;

  const setLangField = (key: string, value: string) => {
    const branch = { ...((content[lang] ?? {}) as LangContent) };
    branch[key] = value;
    onChange({ ...content, [lang]: branch });
  };

  const setBothRoot = (key: string, value: string) => {
    const newContent = { ...content };
    (["en", "am"] as const).forEach((l) => {
      newContent[l] = { ...((content[l] ?? {}) as LangContent), [key]: value };
    });
    onChange(newContent);
  };

  const setShare = <T,>(key: string, val: T) => {
    onChange({ ...content, [key]: val });
  };

  const c = (content[lang] ?? {}) as LangContent;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-xl w-fit">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
            lang === "en" ? "bg-white text-[#23B349] shadow-sm" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLang("am")}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
            lang === "am" ? "bg-white text-[#23B349] shadow-sm" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Amharic
        </button>
      </div>

      {section.type === "customer-care-hero" && (
        <div className="grid gap-4">
          <p className="text-xs text-gray-500">
            Use <strong>Headline full (Amharic)</strong> for a single headline on Amharic, or headline parts on
            English.
          </p>
          <InputField
            label="Headline — full line (prefer for Amharic)"
            value={c.headlineFull}
            onChange={(v) => setLangField("headlineFull", v)}
          />
          <InputField label="Headline — lead text" value={c.headlineLead} onChange={(v) => setLangField("headlineLead", v)} />
          <InputField label="Headline — accent" value={c.headlineAccent} onChange={(v) => setLangField("headlineAccent", v)} />
          <InputField label="Headline — tail" value={c.headlineTail} onChange={(v) => setLangField("headlineTail", v)} textarea />
          <InputField label="Subtitle" value={c.subtitle} onChange={(v) => setLangField("subtitle", v)} textarea />
          <ImageUploadField label="Background image" value={c.backgroundImage} onChange={(v) => setBothRoot("backgroundImage", v)} />
        </div>
      )}

      {section.type === "customer-care-switch" && (
        <div className="grid gap-4">
          <InputField label="Feedback tab label" value={c.feedbackTab} onChange={(v) => setLangField("feedbackTab", v)} />
          <InputField label="Complaint tab label" value={c.complaintTab} onChange={(v) => setLangField("complaintTab", v)} />
        </div>
      )}

      {section.type === "customer-care-feedback" && (
        <div className="grid gap-6">
          <div className="grid gap-4">
            <InputField label="Form title" value={c.formTitle} onChange={(v) => setLangField("formTitle", v)} />
            <InputField
              label="Subtitle (second line; optional)"
              value={c.formSubtitleSecondary}
              onChange={(v) => setLangField("formSubtitleSecondary", v)}
              textarea
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Table: No column header" value={c.tableNoHeader} onChange={(v) => setLangField("tableNoHeader", v)} />
              <InputField label="Feedback column header" value={c.feedbackColumnHeader} onChange={(v) => setLangField("feedbackColumnHeader", v)} />
            </div>
            <InputField label="Experience textarea — lead" value={c.textareaExperienceLead} onChange={(v) => setLangField("textareaExperienceLead", v)} />
            <InputField label="Experience textarea — parentheses note" value={c.textareaExperienceParen} onChange={(v) => setLangField("textareaExperienceParen", v)} textarea />
            <InputField label="Experience placeholder" value={c.textareaExperiencePlaceholder} onChange={(v) => setLangField("textareaExperiencePlaceholder", v)} />
            <InputField label="Employee textarea — lead" value={c.textareaEmployeeLead} onChange={(v) => setLangField("textareaEmployeeLead", v)} textarea />
            <InputField label="Employee textarea — parentheses note" value={c.textareaEmployeeParen} onChange={(v) => setLangField("textareaEmployeeParen", v)} textarea />
            <InputField label="Reference block — title lead" value={c.referenceTitleLead} onChange={(v) => setLangField("referenceTitleLead", v)} />
            <InputField label="Reference — parentheses note" value={c.referenceTitleParen} onChange={(v) => setLangField("referenceTitleParen", v)} />
            <div className="grid grid-cols-2 gap-4">
              <InputField label="Ref placeholder: name" value={c.refPlaceholderName} onChange={(v) => setLangField("refPlaceholderName", v)} />
              <InputField label="Ref placeholder: address" value={c.refPlaceholderAddress} onChange={(v) => setLangField("refPlaceholderAddress", v)} />
            </div>
            <InputField label="Submit button" value={c.submitButton} onChange={(v) => setLangField("submitButton", v)} />
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-700">Rating column labels (survey grid)</h4>
                <p className="text-[11px] text-gray-500 mt-1 max-w-xl leading-relaxed">
                  One column = one selectable score step (the site renders as many radios as columns). Minimum 2 columns.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const curr = [...((content.ratingLabels as Array<{ primary?: string; secondary?: string }>) || [])];
                  curr.push({ primary: "", secondary: "" });
                  setShare("ratingLabels", curr);
                }}
                className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-xl bg-[#23B349]/15 text-[#188f3f] text-xs font-bold hover:bg-[#23B349]/25 transition-colors"
              >
                <Plus size={14} /> Add column
              </button>
            </div>
            {((content.ratingLabels as { primary?: string; secondary?: string }[]) || []).map((row, i, arr) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase">Score column {i + 1}</span>
                  <button
                    type="button"
                    disabled={arr.length <= 2}
                    onClick={() => {
                      if (arr.length <= 2) return;
                      const next = arr.filter((_, idx) => idx !== i);
                      setShare("ratingLabels", next);
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold border border-red-100 text-red-500 hover:bg-red-50 disabled:opacity-35 disabled:pointer-events-none"
                  >
                    <Trash2 size={11} /> Remove
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="English"
                    value={row.primary}
                    onChange={(v) => {
                      const next = [...((content.ratingLabels as typeof row[]) || [])];
                      next[i] = { ...row, primary: v };
                      setShare("ratingLabels", next);
                    }}
                  />
                  <InputField
                    label="Amharic"
                    value={row.secondary}
                    onChange={(v) => {
                      const next = [...((content.ratingLabels as typeof row[]) || [])];
                      next[i] = { ...row, secondary: v };
                      setShare("ratingLabels", next);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-700">Table question rows</h4>
                <p className="text-[11px] text-gray-500 mt-1 max-w-xl leading-relaxed">
                  Each row becomes a numbered question beside the scoring grid (bilingual labels). Minimum 1 row.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const curr = [...((content.feedbackQuestions as Array<{ primary?: string; secondary?: string }>) || [])];
                  curr.push({ primary: "", secondary: "" });
                  setShare("feedbackQuestions", curr);
                }}
                className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-xl bg-[#23B349]/15 text-[#188f3f] text-xs font-bold hover:bg-[#23B349]/25 transition-colors"
              >
                <Plus size={14} /> Add question
              </button>
            </div>
            {((content.feedbackQuestions as { primary?: string; secondary?: string }[]) || []).map((row, i, arr) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 p-3 bg-white rounded-xl border border-gray-100 items-start">
                <InputField
                  label={`Question ${i + 1} — English`}
                  value={row.primary}
                  onChange={(v) => {
                    const next = [...((content.feedbackQuestions as typeof row[]) || [])];
                    next[i] = { ...row, primary: v };
                    setShare("feedbackQuestions", next);
                  }}
                  textarea
                />
                <InputField
                  label={`Question ${i + 1} — Amharic`}
                  value={row.secondary}
                  onChange={(v) => {
                    const next = [...((content.feedbackQuestions as typeof row[]) || [])];
                    next[i] = { ...row, secondary: v };
                    setShare("feedbackQuestions", next);
                  }}
                  textarea
                />
                <button
                  type="button"
                  disabled={arr.length <= 1}
                  onClick={() => {
                    if (arr.length <= 1) return;
                    const next = arr.filter((_, idx) => idx !== i);
                    setShare("feedbackQuestions", next);
                  }}
                  className="md:mt-7 p-2 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 disabled:opacity-35 disabled:pointer-events-none self-start md:self-auto"
                  aria-label={`Remove question ${i + 1}`}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-700">Reference fields</h4>
                <p className="text-[11px] text-gray-500 mt-1 max-w-xl leading-relaxed">
                  Compact optional fields near the footer (keys are stable ids in submissions; change labels anytime).
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                  const keys = ((content.referenceFields as ReferenceFieldDraft[]) || [])
                    .map((x) => (x.key ?? "").trim())
                    .filter(Boolean);
                  ref.push({
                    key: uniqRefFieldKey(keys),
                    primary: "",
                    secondary: "",
                    type: "text",
                    placeholderEn: "",
                    placeholderAm: "",
                  });
                  setShare("referenceFields", ref);
                }}
                className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-xl bg-[#23B349]/15 text-[#188f3f] text-xs font-bold hover:bg-[#23B349]/25 transition-colors"
              >
                <Plus size={14} /> Add field
              </button>
            </div>
            {((content.referenceFields as ReferenceFieldDraft[]) || []).map((f, i) => (
              <div key={`${f.key}-${i}`} className="p-4 bg-white rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase">Slot {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const arr = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                      arr.splice(i, 1);
                      setShare("referenceFields", arr);
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold border border-red-100 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={11} /> Remove field
                  </button>
                </div>
                <InputField label="Stable key (stored in payloads)" value={f.key ?? ""} onChange={(v) => {
                  const arr = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                  arr[i] = { ...f, key: v.replace(/\s+/g, "_").toLowerCase() };
                  setShare("referenceFields", arr);
                }} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Label EN" value={f.primary} onChange={(v) => {
                    const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                    ref[i] = { ...f, primary: v };
                    setShare("referenceFields", ref);
                  }} />
                  <InputField label="Label AM" value={f.secondary} onChange={(v) => {
                    const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                    ref[i] = { ...f, secondary: v };
                    setShare("referenceFields", ref);
                  }} />
                  <InputField label="Placeholder EN" value={f.placeholderEn} onChange={(v) => {
                    const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                    ref[i] = { ...f, placeholderEn: v };
                    setShare("referenceFields", ref);
                  }} />
                  <InputField label="Placeholder AM" value={f.placeholderAm} onChange={(v) => {
                    const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                    ref[i] = { ...f, placeholderAm: v };
                    setShare("referenceFields", ref);
                  }} />
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Input type</label>
                    <select
                      value={f.type === "date" ? "date" : "text"}
                      onChange={(e) => {
                        const ref = [...((content.referenceFields as ReferenceFieldDraft[]) || [])];
                        ref[i] = { ...f, type: e.target.value };
                        setShare("referenceFields", ref);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm bg-white"
                    >
                      <option value="text">Text</option>
                      <option value="date">Date</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-gray-700">Extra survey prompts (below table)</h4>
                <p className="text-[11px] text-gray-500 mt-1 max-w-xl leading-relaxed">
                  Optional bilingual questions answered as text fields (shown after “employee evaluation”). Answers are grouped under{" "}
                  <code className="text-[10px] bg-gray-100 px-1 rounded">extras</code> in submissions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                  list.push({
                    id: newSurveyFieldId(),
                    primary: "",
                    secondary: "",
                    placeholderEn: "",
                    placeholderAm: "",
                    inputType: "textarea",
                  });
                  setShare("extraSurveyFields", list);
                }}
                className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-xl bg-[#23B349]/15 text-[#188f3f] text-xs font-bold hover:bg-[#23B349]/25 transition-colors"
              >
                <Plus size={14} /> Add prompt
              </button>
            </div>
            {((content.extraSurveyFields as ExtraSurveyRow[]) || []).map((field, i) => (
              <div key={field.id} className="p-4 bg-white rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-gray-500 truncate max-w-[200px]" title={field.id}>{field.id}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const list = ((content.extraSurveyFields as ExtraSurveyRow[]) || []).filter((_, idx) => idx !== i);
                      setShare("extraSurveyFields", list);
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold border border-red-100 text-red-500 hover:bg-red-50"
                  >
                    <Trash2 size={11} /> Remove
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Question — English (lead)" value={field.primary} onChange={(v) => {
                    const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                    list[i] = { ...field, primary: v };
                    setShare("extraSurveyFields", list);
                  }} />
                  <InputField label="Question — Amharic" value={field.secondary} onChange={(v) => {
                    const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                    list[i] = { ...field, secondary: v };
                    setShare("extraSurveyFields", list);
                  }} />
                  <InputField label="Placeholder EN" value={field.placeholderEn} onChange={(v) => {
                    const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                    list[i] = { ...field, placeholderEn: v };
                    setShare("extraSurveyFields", list);
                  }} />
                  <InputField label="Placeholder AM" value={field.placeholderAm} onChange={(v) => {
                    const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                    list[i] = { ...field, placeholderAm: v };
                    setShare("extraSurveyFields", list);
                  }} />
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Field type</label>
                    <select
                      value={field.inputType === "text" ? "text" : "textarea"}
                      onChange={(e) => {
                        const list = [...((content.extraSurveyFields as ExtraSurveyRow[]) || [])];
                        list[i] = {
                          ...field,
                          inputType: e.target.value === "text" ? "text" : "textarea",
                        };
                        setShare("extraSurveyFields", list);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm bg-white"
                    >
                      <option value="textarea">Multi-line</option>
                      <option value="text">Single-line</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {section.type === "customer-care-complaint" && (
        <div className="grid gap-4">
          <InputField label="Form title" value={c.formTitle} onChange={(v) => setLangField("formTitle", v)} />
          <InputField label="Subtitle (second line)" value={c.formSubtitleSecondary} onChange={(v) => setLangField("formSubtitleSecondary", v)} textarea />
          <InputField label="1. Customer name — lead" value={c.customerNameLead} onChange={(v) => setLangField("customerNameLead", v)} />
          <InputField label="Customer name — note (parens)" value={c.customerNameParen} onChange={(v) => setLangField("customerNameParen", v)} textarea />
          <InputField label="Customer name placeholder" value={c.customerNamePlaceholder} onChange={(v) => setLangField("customerNamePlaceholder", v)} />

          <InputField label="2. Address — lead" value={c.addressLead} onChange={(v) => setLangField("addressLead", v)} />
          <InputField label="Address — note (parens)" value={c.addressParen} onChange={(v) => setLangField("addressParen", v)} textarea />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="City label" value={c.cityLabel} onChange={(v) => setLangField("cityLabel", v)} />
            <InputField label="City note / Amharic" value={c.cityParen} onChange={(v) => setLangField("cityParen", v)} />
            <InputField label="City placeholder" value={c.cityPlaceholder} onChange={(v) => setLangField("cityPlaceholder", v)} />
            <InputField label="Woreda label" value={c.woredaLabel} onChange={(v) => setLangField("woredaLabel", v)} />
            <InputField label="Woreda note / Amharic" value={c.woredaParen} onChange={(v) => setLangField("woredaParen", v)} />
            <InputField label="Woreda placeholder" value={c.woredaPlaceholder} onChange={(v) => setLangField("woredaPlaceholder", v)} />
            <InputField label="Phone label" value={c.phoneLabel} onChange={(v) => setLangField("phoneLabel", v)} />
            <InputField label="Phone note / Amharic" value={c.phoneParen} onChange={(v) => setLangField("phoneParen", v)} />
            <InputField label="Phone placeholder" value={c.phonePlaceholder} onChange={(v) => setLangField("phonePlaceholder", v)} />
          </div>

          <InputField label="3. Product details — lead" value={c.productDetailsLead} onChange={(v) => setLangField("productDetailsLead", v)} />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Product type label" value={c.productTypeLabel} onChange={(v) => setLangField("productTypeLabel", v)} />
            <InputField label="Product type note (parens)" value={c.productTypeParen} onChange={(v) => setLangField("productTypeParen", v)} textarea />
            <InputField label="Product type placeholder" value={c.productTypePlaceholder} onChange={(v) => setLangField("productTypePlaceholder", v)} />
            <InputField label="Quantity label" value={c.quantityLabel} onChange={(v) => setLangField("quantityLabel", v)} />
            <InputField label="Quantity note (parens)" value={c.quantityParen} onChange={(v) => setLangField("quantityParen", v)} textarea />
            <InputField label="Quantity placeholder" value={c.quantityPlaceholder} onChange={(v) => setLangField("quantityPlaceholder", v)} />
          </div>

          <InputField label="4. Complaint detail — lead" value={c.detailLead} onChange={(v) => setLangField("detailLead", v)} textarea />
          <InputField label="Detail note (parens)" value={c.detailParen} onChange={(v) => setLangField("detailParen", v)} textarea />
          <InputField label="Detail placeholder" value={c.detailPlaceholder} onChange={(v) => setLangField("detailPlaceholder", v)} textarea />

          <InputField label="Complainant — lead" value={c.complainantLead} onChange={(v) => setLangField("complainantLead", v)} />
          <InputField label="Complainant note (parens)" value={c.complainantParen} onChange={(v) => setLangField("complainantParen", v)} textarea />
          <InputField label="Complainant placeholder" value={c.complainantPlaceholder} onChange={(v) => setLangField("complainantPlaceholder", v)} />
          <InputField label="Submit button" value={c.submitButton} onChange={(v) => setLangField("submitButton", v)} />
        </div>
      )}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      {textarea ?
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm min-h-[100px]"
        />
      : <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm"
        />
      }
    </div>
  );
}

function ImageUploadField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
}) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/content/upload", formData);
      onChange(res.data.url);
      toast.success("Image uploaded");
    } catch {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center overflow-hidden bg-white shrink-0">
          {value ?
            <img src={value} alt="" className="w-full h-full object-cover" />
          : <ImageIcon size={24} className="text-gray-200" />}
        </div>
        <div className="flex-1 space-y-2">
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Image URL"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs outline-none focus:border-[#23B349]"
          />
          <div className="flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-[11px] font-bold">
              {uploading ?
                <RefreshCw size={12} className="animate-spin" />
              : <Plus size={12} />}
              Upload Image
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
            </label>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-[11px] font-bold"
              >
                <Trash2 size={12} /> Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
