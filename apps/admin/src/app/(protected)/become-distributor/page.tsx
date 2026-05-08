"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Edit3,
  ListChecks,
  Phone,
  RefreshCw,
  Rocket,
  Users,
  X,
} from "lucide-react";
import api from "@/lib/api";

type Lang = "en" | "am";
type Localized<T> = { en: T; am: T };

interface Section {
  id: string;
  type: string;
  content: unknown;
}

interface PageData {
  slug: string;
  title: Localized<string>;
  sections: Section[];
  updatedAt?: string;
}

interface ContactOffice {
  name: string;
  phone: string;
  address: string;
  coverage: string;
}

type DistributorSectionType =
  | "distributor-hero"
  | "distributor-why-work"
  | "distributor-who-can-partner"
  | "distributor-steps"
  | "distributor-contact";

const SECTION_META: Record<
  DistributorSectionType,
  { name: string; description: string; icon: typeof Users }
> = {
  "distributor-hero": {
    name: "Hero",
    description: "Top banner label, headline, subtitle, CTA",
    icon: Rocket,
  },
  "distributor-why-work": {
    name: "Why Work With Vita",
    description: "Section title/description and four benefit cards",
    icon: Users,
  },
  "distributor-who-can-partner": {
    name: "Who Can Partner",
    description: "Eligibility heading, copy, and requirement list",
    icon: ListChecks,
  },
  "distributor-steps": {
    name: "3 Easy Steps",
    description: "Steps title/subtitle and step cards",
    icon: Rocket,
  },
  "distributor-contact": {
    name: "Contact Team",
    description: "Contact card title, text, and office details",
    icon: Phone,
  },
};

const DEFAULT_PAGE: PageData = {
  slug: "become-distributor",
  title: {
    en: "Become a Distributor",
    am: "አከፋፋይ ይሁኑ",
  },
  sections: [
    {
      id: "hero",
      type: "distributor-hero",
      content: {
        en: {
          label: "Grow Your Business",
          headline: "Become a Vita Distributor",
          subtitle: "Join our network and bring quality products to your community.",
          cta: "Apply Now",
        },
        am: {
          label: "ንግድዎን ያሳድጉ",
          headline: "የቪታ አከፋፋይ ይሁኑ",
          subtitle: "ቡድናችንን ይቀላቀሉ እና ጥራት ያላቸውን ምርቶች ለማህበረሰብዎ ያቅርቡ።",
          cta: "አሁኑኑ ያመልክቱ",
        },
      },
    },
    {
      id: "why-work",
      type: "distributor-why-work",
      content: {
        en: {
          title: "Why Work With Vita?",
          description: "We offer a range of benefits to our distribution partners.",
          cards: { demand: "High Demand", supply: "Reliable Supply", brand: "Strong Brand", margins: "Great Margins" },
        },
        am: {
          title: "ለምን ከቪታ ጋር ይሰራሉ?",
          description: "ለአከፋፋይ አጋሮቻችን የተለያዩ ጥቅማጥቅሞችን እናቀርባለን።",
          cards: { demand: "ከፍተኛ ፍላጎት", supply: "አስተማማኝ አቅርቦት", brand: "ጠንካራ ብራንድ", margins: "ጥሩ ትርፍ" },
        },
      },
    },
    {
      id: "who-can-partner",
      type: "distributor-who-can-partner",
      content: {
        en: {
          sectionTitle: "Who Can Become a Distributor?",
          title: "Requirements",
          description: "We are looking for partners who meet the following criteria:",
          items: ["Valid business license", "Warehouse facility", "Distribution vehicles", "Financial stability", "Commitment to quality"],
        },
        am: {
          sectionTitle: "ማን አከፋፋይ መሆን ይችላል?",
          title: "መስፈርቶች",
          description: "የሚከተሉትን መስፈርቶች የሚያሟሉ አጋሮችን እንፈልጋለን፡",
          items: ["ህጋዊ የንግድ ፈቃድ", "የመጋዘን አገልግሎት", "የማከፋፈያ ተሽከርካሪዎች", "የፋይናንስ መረጋጋት", "ለጥራት ያለው ቁርጠኝነት"],
        },
      },
    },
    {
      id: "steps",
      type: "distributor-steps",
      content: {
        en: {
          title: "Start in 3 Easy Steps",
          subtitle: "Joining our network is simple and straightforward.",
          call: { title: "Call Us", description: "Contact our team to express your interest." },
          discussion: { title: "Discussion", description: "We'll discuss the terms and requirements." },
          started: { title: "Get Started", description: "Start distributing Vita products in your area." },
        },
        am: {
          title: "በ 3 ቀላል ደረጃዎች ይጀምሩ",
          subtitle: "ቡድናችንን መቀላቀል ቀላል እና ግልጽ ነው።",
          call: { title: "ይደውሉልን", description: "ፍላጎትዎን ለመግለጽ ቡድናችንን ያነጋግሩ።" },
          discussion: { title: "ውይይት", description: "ስለ ውሎች እና መስፈርቶች እንወያያለን።" },
          started: { title: "ይጀምሩ", description: "በአካባቢዎ የቪታ ምርቶችን ማከፋፈል ይጀምሩ።" },
        },
      },
    },
    {
      id: "contact",
      type: "distributor-contact",
      content: {
        en: {
          title: "Contact Our Distribution Team",
          description: "Reach out to our offices for more information.",
          offices: [
            { name: "Addis Ababa Office", phone: "+251 911 123 456", address: "Lideta SC, Addis Ababa", coverage: "Central Region" },
            { name: "Adama Office", phone: "+251 922 123 456", address: "Main Road, Adama", coverage: "Eastern Region" },
            { name: "Hawassa Office", phone: "+251 933 123 456", address: "Lake Side, Hawassa", coverage: "Southern Region" },
          ] as ContactOffice[],
        },
        am: {
          title: "የማከፋፈያ ቡድናችንን ያነጋግሩ",
          description: "ለበለጠ መረጃ ቢሮዎቻችንን ያነጋግሩ።",
          offices: [
            { name: "የአዲስ አበባ ቢሮ", phone: "+251 911 123 456", address: "ልደታ ኤስ.ሲ፣ አዲስ አበባ", coverage: "መካከለኛው ክልል" },
            { name: "የአዳማ ቢሮ", phone: "+251 922 123 456", address: "ዋናው መንገድ፣ አዳማ", coverage: "ምስራቃዊ ክልል" },
            { name: "የሀዋሳ ቢሮ", phone: "+251 933 123 456", address: "ሐይቅ ዳር፣ ሀዋሳ", coverage: "ደቡባዊ ክልል" },
          ] as ContactOffice[],
        },
      },
    },
  ],
};

function getPreview(section: Section): string {
  const content = section.content as Record<string, unknown>;
  const en = (content?.en as Record<string, unknown>) ?? {};
  const candidates = [en.title, en.headline, en.sectionTitle, en.description, en.label].filter(
    (v): v is string => typeof v === "string" && v.trim().length > 0,
  );
  const text = candidates[0] ?? "";
  return text.length > 70 ? `${text.slice(0, 70)}...` : text;
}

function setAtPath<T extends object>(source: T, path: string[], value: unknown): T {
  const draft = JSON.parse(JSON.stringify(source)) as Record<string, unknown>;
  let current: Record<string, unknown> = draft;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (typeof current[key] !== "object" || current[key] === null) current[key] = {};
    current = current[key] as Record<string, unknown>;
  }
  current[path[path.length - 1]] = value;
  return draft as T;
}

export default function BecomeDistributorAdminPage() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [formContent, setFormContent] = useState<unknown>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPage = useCallback(async () => {
    try {
      const res = await api.get<PageData>("/content/pages/become-distributor");
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
      const res = await api.post<PageData>("/content/pages/become-distributor/initialize");
      setPage(res.data);
      showToast("success", "Become Distributor page initialized.");
    } catch {
      showToast("error", "Failed to initialize page.");
    } finally {
      setInitializing(false);
    }
  };

  const openEditor = (section: Section) => {
    setEditingSection(section);
    setFormContent(JSON.parse(JSON.stringify(section.content)));
    setLang("en");
  };

  const saveSection = async () => {
    if (!editingSection) return;
    setSaving(true);
    try {
      await api.patch(`/content/pages/become-distributor/sections/${editingSection.id}`, {
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
      showToast("success", "Section saved successfully.");
    } catch {
      showToast("error", "Failed to save section.");
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full border border-gray-200 rounded-[10px] px-3 py-2 text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349]";

  const sectionType = editingSection?.type as DistributorSectionType | undefined;
  const typedForm = useMemo(() => (formContent ?? {}) as Record<string, unknown>, [formContent]);
  const localized = (typedForm[lang] as Record<string, unknown>) ?? {};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw size={24} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">
            Become Distributor Page
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage backend CMS content for distributor page sections.
          </p>
          {page?.updatedAt && (
            <p className="text-xs text-gray-400 mt-2">
              Last updated: {new Date(page.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
        {page && (
          <button
            onClick={fetchPage}
            className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm text-gray-500 hover:bg-gray-100 border border-gray-200"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        )}
      </div>

      {!page ? (
        <div className="bg-amber-50 border border-amber-200 rounded-[16px] p-8 text-center">
          <AlertCircle size={40} className="text-amber-400 mx-auto mb-4" />
          <h3 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937] mb-2">
            Become Distributor page not initialized
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Initialize default bilingual content in backend to start editing.
          </p>
          <button
            onClick={initializePage}
            disabled={initializing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#23B349] text-white rounded-full font-semibold text-sm hover:bg-[#1a9e3e] disabled:opacity-60"
          >
            {initializing ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {initializing ? "Initializing..." : "Initialize Become Distributor"}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {page.sections.map((section, index) => {
            const meta = SECTION_META[section.type as DistributorSectionType];
            const Icon = meta?.icon ?? Building2;
            return (
              <div
                key={section.id}
                className="bg-white rounded-[16px] border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                  {index + 1}
                </div>
                <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#23B349]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1F2937] text-sm">{meta?.name ?? section.type}</p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {getPreview(section) || meta?.description}
                  </p>
                </div>
                <button
                  onClick={() => openEditor(section)}
                  className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20"
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
          <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">
                  Edit - {SECTION_META[sectionType!]?.name ?? editingSection.type}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {SECTION_META[sectionType!]?.description}
                </p>
              </div>
              <button
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
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-[10px] text-sm font-semibold transition-colors ${
                    lang === l ? "bg-[#23B349] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {l === "en" ? "English" : "አማርኛ"}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {sectionType === "distributor-hero" && (
                <>
                  <input className={inputCls} placeholder="Label" value={(localized.label as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "label"], e.target.value))} />
                  <input className={inputCls} placeholder="Headline" value={(localized.headline as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "headline"], e.target.value))} />
                  <textarea className={inputCls} rows={3} placeholder="Subtitle" value={(localized.subtitle as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "subtitle"], e.target.value))} />
                  <input className={inputCls} placeholder="CTA" value={(localized.cta as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "cta"], e.target.value))} />
                </>
              )}

              {sectionType === "distributor-why-work" && (
                <>
                  <input className={inputCls} placeholder="Title" value={(localized.title as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value))} />
                  <textarea className={inputCls} rows={2} placeholder="Description" value={(localized.description as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "description"], e.target.value))} />
                  <input className={inputCls} placeholder="Card: demand" value={(localized.cards as Record<string, string> | undefined)?.demand ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "cards", "demand"], e.target.value))} />
                  <input className={inputCls} placeholder="Card: supply" value={(localized.cards as Record<string, string> | undefined)?.supply ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "cards", "supply"], e.target.value))} />
                  <input className={inputCls} placeholder="Card: brand" value={(localized.cards as Record<string, string> | undefined)?.brand ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "cards", "brand"], e.target.value))} />
                  <input className={inputCls} placeholder="Card: margins" value={(localized.cards as Record<string, string> | undefined)?.margins ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "cards", "margins"], e.target.value))} />
                </>
              )}

              {sectionType === "distributor-who-can-partner" && (
                <>
                  <input className={inputCls} placeholder="Section title" value={(localized.sectionTitle as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "sectionTitle"], e.target.value))} />
                  <input className={inputCls} placeholder="Title" value={(localized.title as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value))} />
                  <textarea className={inputCls} rows={2} placeholder="Description" value={(localized.description as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "description"], e.target.value))} />
                  {((localized.items as string[] | undefined) ?? []).map((item, idx) => (
                    <input key={idx} className={inputCls} placeholder={`Requirement ${idx + 1}`} value={item} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "items", String(idx)], e.target.value))} />
                  ))}
                </>
              )}

              {sectionType === "distributor-steps" && (
                <>
                  <input className={inputCls} placeholder="Title" value={(localized.title as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value))} />
                  <textarea className={inputCls} rows={2} placeholder="Subtitle" value={(localized.subtitle as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "subtitle"], e.target.value))} />
                  {(["call", "discussion", "started"] as const).map((key) => (
                    <div key={key} className="border border-gray-100 rounded-[10px] p-3 space-y-2">
                      <p className="text-xs font-bold uppercase text-gray-400">{key}</p>
                      <input className={inputCls} placeholder={`${key} title`} value={((localized[key] as Record<string, string> | undefined)?.title) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, key, "title"], e.target.value))} />
                      <textarea className={inputCls} rows={2} placeholder={`${key} description`} value={((localized[key] as Record<string, string> | undefined)?.description) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, key, "description"], e.target.value))} />
                    </div>
                  ))}
                </>
              )}

              {sectionType === "distributor-contact" && (
                <>
                  <input className={inputCls} placeholder="Title" value={(localized.title as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "title"], e.target.value))} />
                  <textarea className={inputCls} rows={2} placeholder="Description" value={(localized.description as string) ?? ""} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "description"], e.target.value))} />
                  {((localized.offices as ContactOffice[] | undefined) ?? []).map((office, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-[10px] p-3 space-y-2">
                      <p className="text-xs font-bold uppercase text-gray-400">Office {idx + 1}</p>
                      <input className={inputCls} placeholder="Name" value={office.name} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "offices", String(idx), "name"], e.target.value))} />
                      <input className={inputCls} placeholder="Phone" value={office.phone} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "offices", String(idx), "phone"], e.target.value))} />
                      <input className={inputCls} placeholder="Address" value={office.address} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "offices", String(idx), "address"], e.target.value))} />
                      <input className={inputCls} placeholder="Coverage" value={office.coverage} onChange={(e) => setFormContent((prev: unknown) => setAtPath((prev ?? {}) as object, [lang, "offices", String(idx), "coverage"], e.target.value))} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setEditingSection(null)}
                className="px-5 py-2.5 rounded-[10px] text-sm font-semibold text-gray-500 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={saveSection}
                disabled={saving}
                className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-[#23B349] text-white hover:bg-[#1a9e3e] disabled:opacity-60"
              >
                {saving ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-60 flex items-center gap-3 px-5 py-3 rounded-[14px] shadow-lg text-sm font-semibold ${
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

