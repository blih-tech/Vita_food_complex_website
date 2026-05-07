"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Newspaper, Play, ShoppingBag, Cookie, UtensilsCrossed,
  BarChart3, ShoppingCart, Share2, Award, Edit3, CheckCircle,
  RefreshCw, AlertCircle, X, Globe, ChevronDown, ChevronUp,
} from "lucide-react";
import api from "@/lib/api";

// ── Types ──────────────────────────────────────────────────────────────────
interface Section {
  id: string;
  type: string;
  content: any;
}

interface PageData {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
}

// ── Section metadata ───────────────────────────────────────────────────────
const SECTION_META: Record<string, { name: string; icon: any; description: string; readOnly?: boolean }> = {
  hero:          { name: "Hero Banner",      icon: Newspaper,      description: "Main headline and call-to-action buttons" },
  "hero-video":  { name: "Video Showcase",   icon: Play,           description: "Secondary quote and video section" },
  products:      { name: "Products Section", icon: ShoppingBag,    description: "Auto-populated from the Products catalogue", readOnly: true },
  "biscuit-brand":{ name: "Biscuit Brands",  icon: Cookie,         description: "Brand carousel, tagline and CTA" },
  recipes:       { name: "Recipes",          icon: UtensilsCrossed,description: "5 featured recipe cards with titles and descriptions" },
  "quick-facts": { name: "Quick Facts",      icon: BarChart3,      description: "Key statistics and numbers" },
  merchandise:   { name: "Merchandise",      icon: ShoppingCart,   description: "Vita merchandise items and heading" },
  "social-wall": { name: "Social Wall",      icon: Share2,         description: "Social media section heading and CTA" },
  partners:      { name: "Partners",         icon: Award,          description: "Certifications and partners section header" },
};

// ── Default page data (for first-time initialization) ─────────────────────
const DEFAULT_PAGE: PageData = {
  slug: "home",
  title: { en: "Home", am: "መነሻ" },
  sections: [
    { id: "hero",          type: "hero",          content: { en: { stylishWayPart1: "A new stylish way of", stylishWayPart2: "connecting", description: "Experience the perfect blend of nutrition and flavor with Vita's premium range of biscuits and flour products.", cta: "Our Products" }, am: { stylishWayPart1: "አዲስ እና ዘመናዊ የ", stylishWayPart2: "መገናኛ መንገድ", description: "በቪታ ከፍተኛ ጥራት ያላቸው የቢስኩት እና የዱቄት ምርቶች የተመጣጠነ ምግብ እና ጣዕም ፍጹም ውህደትን ይለማመዱ።", cta: "ምርቶቻችን" } } },
    { id: "hero-video",    type: "hero-video",    content: { en: { secondaryQuote: "Nourishing families with every bite, bringing joy to every home.", ourClients: "Our Happy Clients" }, am: { secondaryQuote: "በእያንዳንዱ ንክሻ ቤተሰቦችን መመገብ፣ ለእያንዳንዱ ቤት ደስታን ማምጣት።", ourClients: "ደስተኛ ደንበኞቻችን" } } },
    { id: "products",      type: "products",      content: {} },
    { id: "biscuit-brand", type: "biscuit-brand", content: { en: { label: "Our Brands", title: "A World of Flavor", description: "Discover our range of delicious biscuits made with love.", cta: "Explore Products" }, am: { label: "ብራንዶቻችን", title: "የጣዕም ዓለም", description: "በፍቅር የተሰሩ ጣፋጭ ቢስኩቶቻችንን ያስሱ።", cta: "ምርቶችን ያስሱ" } } },
    { id: "recipes",       type: "recipes",       content: { en: { label: "Our Recipes Made Simple", heading: "Mix. Match. Enjoy", items: [{ title: "Creamy Delights", description: "Experience the rich, velvety texture of our signature cream biscuits." }, { title: "Oreo Moments", description: "Perfectly balanced chocolate and cream for your tea time." }, { title: "Sweet Bites", description: "Small, crunchy treats that bring big smiles to everyone." }, { title: "Morning Fresh", description: "Start your day with our high-quality wheat flour bakes." }, { title: "Baker's Secret", description: "The secret ingredient to all your favorite home recipes." }] }, am: { label: "ምግብ አዘገጃጀቶቻችን በቀላሉ", heading: "ይቀላቅሉ:: ያዛምዱ:: ይደሰቱ", items: [{ title: "ክሬም ደስታ", description: "የእኛን ልዩ የክሬም ቢስኩቶች የበለፀገ እና ለስላሳ ይዘት ይለማመዱ::" }, { title: "የኦሪዮ ጊዜያት", description: "ለሻይ ሰዓትዎ ፍጹም የተመጣጠነ ቸኮሌት እና ክሬም::" }, { title: "ጣፋጭ ንክሻዎች", description: "ለሁሉም ሰው ትልቅ ፈገግታ የሚያመጡ ትናንሽ እና ጥራጥሬ ጣፋጮች::" }, { title: "የጠዋት ትኩስነት", description: "ቀንዎን በከፍተኛ ጥራት ባለው የስንዴ ዱቄት መጋገሪያዎቻችን ይጀምሩ::" }, { title: "የጋጋሪው ምስጢር", description: "ለሁሉም ተወዳጅ የቤት ውስጥ ምግብ አዘገጃጀቶችዎ ምስጢራዊ ግብዓት::" }] } } },
    { id: "quick-facts",   type: "quick-facts",   content: { en: { label: "Quick Fact", facts: [{ id: "skus", value: "+11", label: "Unique SKUs" }, { id: "flour", value: "60tn", label: "Flour Production/Day" }, { id: "jobs", value: "+200", label: "Jobs Created" }, { id: "biscuits", value: "2tn", label: "Biscuits/Hour" }, { id: "investment", value: "$1.4M", value2: "Br210M", label: "Total Investment" }, { id: "factorySize", value: "22Km²", label: "Factory Size" }] }, am: { label: "ፈጣን እውነታ", facts: [{ id: "skus", value: "+11", label: "ልዩ ምርቶች" }, { id: "flour", value: "60tn", label: "በቀን የሚመረት የዱቄት መጠን" }, { id: "jobs", value: "+200", label: "የተፈጠሩ የስራ እድሎች" }, { id: "biscuits", value: "2tn", label: "በሰዓት የሚመረቱ ቢስኩቶች" }, { id: "investment", value: "$1.4M", value2: "Br210M", label: "ጠቅላላ ኢንቨስትመንት" }, { id: "factorySize", value: "22Km²", label: "የፋብሪካው ስፋት" }] } } },
    { id: "merchandise",   type: "merchandise",   content: { en: { label: "Merchandise", heading: "Vita Style", items: [{ title: "Necklace", desc: "Stylish Vita Necklace" }, { title: "Cap", desc: "Classic Vita Cap" }, { title: "T-Shirt", desc: "Comfortable Vita T-Shirt" }, { title: "Sweater", desc: "Warm Vita Sweater" }, { title: "Signature Cap", desc: "Premium Vita Cap" }, { title: "Badge", desc: "Vita Special Badge" }] }, am: { label: "የመታሰቢያ ዕቃዎች", heading: "የቪታ ስታይል", items: [{ title: "ሐብል", desc: "ቆንጆ የቪታ ሐብል" }, { title: "ቆብ", desc: "ክላሲክ የቪታ ቆብ" }, { title: "ቲ-ሸርት", desc: "ምቹ የቪታ ቲ-ሸርት" }, { title: "ሹራብ", desc: "ሞቅ ያለ የቪታ ሹራብ" }, { title: "ፊርማ ቆብ", desc: "ልዩ የቪታ ቆብ" }, { title: "ባጅ", desc: "የቪታ ልዩ ባጅ" }] } } },
    { id: "social-wall",   type: "social-wall",   content: { en: { label: "Social Wall", heading: "Join the Conversation", cta: "Explore More" }, am: { label: "ማህበራዊ ግድግዳ", heading: "ውይይቱን ይቀላቀሉ", cta: "ተጨማሪ ያስሱ" } } },
    { id: "partners",      type: "partners",      content: { en: { subtitle: "Our Partners", heading: "Trusted by Experts" }, am: { subtitle: "አጋሮቻችን", heading: "በባለሙያዎች የታመነ" } } },
  ],
};

// ── Helper ─────────────────────────────────────────────────────────────────
function getPreview(section: Section): string {
  if (!section.content) return "";
  const en = section.content.en || section.content;
  const fields = [en.heading, en.title, en.stylishWayPart1, en.secondaryQuote, en.label, en.subtitle];
  const text = fields.find(Boolean) || "";
  return text.length > 60 ? text.slice(0, 60) + "…" : text;
}

// ── Edit Modal ─────────────────────────────────────────────────────────────
function EditModal({
  section,
  onClose,
  onSave,
  saving,
}: {
  section: Section;
  onClose: () => void;
  onSave: (content: any) => void;
  saving: boolean;
}) {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [form, setForm] = useState<any>(() => JSON.parse(JSON.stringify(section.content || {})));

  const set = (path: string[], value: string) => {
    setForm((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      let cur = next;
      for (let i = 0; i < path.length - 1; i++) {
        if (cur[path[i]] === undefined) cur[path[i]] = {};
        cur = cur[path[i]];
      }
      cur[path[path.length - 1]] = value;
      return next;
    });
  };

  const meta = SECTION_META[section.type] || { name: section.type };

  const inputCls = "w-full border border-gray-200 rounded-[10px] px-3 py-2 text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349] transition-colors";
  const textareaCls = inputCls + " resize-none";
  const labelCls = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";

  const L = (label: string) => <label className={labelCls}>{label}</label>;

  const renderFields = () => {
    const l = lang;
    switch (section.type) {
      case "hero":
        return (
          <div className="space-y-4">
            <div>
              {L("Headline Part 1")}
              <input className={inputCls} value={form[l]?.stylishWayPart1 || ""} onChange={e => set([l, "stylishWayPart1"], e.target.value)} />
            </div>
            <div>
              {L("Headline Part 2 (green word)")}
              <input className={inputCls} value={form[l]?.stylishWayPart2 || ""} onChange={e => set([l, "stylishWayPart2"], e.target.value)} />
            </div>
            <div>
              {L("Description")}
              <textarea rows={3} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} />
            </div>
            <div>
              {L("Primary CTA Button")}
              <input className={inputCls} value={form[l]?.cta || ""} onChange={e => set([l, "cta"], e.target.value)} />
            </div>
          </div>
        );

      case "hero-video":
        return (
          <div className="space-y-4">
            <div>
              {L("Secondary Quote")}
              <textarea rows={3} className={textareaCls} value={form[l]?.secondaryQuote || ""} onChange={e => set([l, "secondaryQuote"], e.target.value)} />
            </div>
            <div>
              {L("Client Label")}
              <input className={inputCls} value={form[l]?.ourClients || ""} onChange={e => set([l, "ourClients"], e.target.value)} />
            </div>
          </div>
        );

      case "biscuit-brand":
        return (
          <div className="space-y-4">
            <div>
              {L("Section Label (small caps)")}
              <input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} />
            </div>
            <div>
              {L("Heading Title")}
              <input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} />
            </div>
            <div>
              {L("Description")}
              <textarea rows={2} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} />
            </div>
            <div>
              {L("CTA Button")}
              <input className={inputCls} value={form[l]?.cta || ""} onChange={e => set([l, "cta"], e.target.value)} />
            </div>
          </div>
        );

      case "recipes": {
        const items = form[l]?.items || Array.from({ length: 5 }, () => ({ title: "", description: "" }));
        return (
          <div className="space-y-4">
            <div>
              {L("Section Label")}
              <input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} />
            </div>
            <div>
              {L("Section Heading")}
              <input className={inputCls} value={form[l]?.heading || ""} onChange={e => set([l, "heading"], e.target.value)} />
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Recipe Cards</p>
              <div className="space-y-3">
                {items.map((item: any, i: number) => (
                  <RecipeItemField
                    key={i}
                    index={i}
                    item={item}
                    inputCls={inputCls}
                    textareaCls={textareaCls}
                    onChange={(field, val) => {
                      const newItems = JSON.parse(JSON.stringify(items));
                      newItems[i][field] = val;
                      setForm((prev: any) => {
                        const next = JSON.parse(JSON.stringify(prev));
                        if (!next[l]) next[l] = {};
                        next[l].items = newItems;
                        return next;
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "quick-facts": {
        const facts = form[l]?.facts || [];
        return (
          <div className="space-y-4">
            <div>
              {L("Badge Label (e.g. \"Quick Fact\")")}
              <input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} />
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Stat Cards</p>
              <div className="space-y-3">
                {facts.map((fact: any, i: number) => (
                  <FactField
                    key={fact.id}
                    fact={fact}
                    inputCls={inputCls}
                    onChange={(field, val) => {
                      const newFacts = JSON.parse(JSON.stringify(facts));
                      newFacts[i][field] = val;
                      setForm((prev: any) => {
                        const next = JSON.parse(JSON.stringify(prev));
                        if (!next[l]) next[l] = {};
                        next[l].facts = newFacts;
                        return next;
                      });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "merchandise": {
        const items = form[l]?.items || Array.from({ length: 6 }, () => ({ title: "", desc: "" }));
        const labels = ["Necklace", "Cap", "T-Shirt", "Sweater", "Signature Cap", "Badge"];
        return (
          <div className="space-y-4">
            <div>
              {L("Section Label")}
              <input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} />
            </div>
            <div>
              {L("Section Heading")}
              <input className={inputCls} value={form[l]?.heading || ""} onChange={e => set([l, "heading"], e.target.value)} />
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Merch Items</p>
              <div className="space-y-3">
                {items.map((item: any, i: number) => (
                  <div key={i} className="bg-gray-50 rounded-[10px] p-3 space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">Item {i + 1} — {labels[i]}</p>
                    <div>
                      <label className="text-xs text-gray-500 mb-0.5 block">Title</label>
                      <input className={inputCls} value={item.title || ""} onChange={e => {
                        const ni = JSON.parse(JSON.stringify(items));
                        ni[i].title = e.target.value;
                        setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].items = ni; return next; });
                      }} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-0.5 block">Description</label>
                      <input className={inputCls} value={item.desc || ""} onChange={e => {
                        const ni = JSON.parse(JSON.stringify(items));
                        ni[i].desc = e.target.value;
                        setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].items = ni; return next; });
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "social-wall":
        return (
          <div className="space-y-4">
            <div>
              {L("Section Label")}
              <input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} />
            </div>
            <div>
              {L("Heading")}
              <input className={inputCls} value={form[l]?.heading || ""} onChange={e => set([l, "heading"], e.target.value)} />
            </div>
            <div>
              {L("CTA Button")}
              <input className={inputCls} value={form[l]?.cta || ""} onChange={e => set([l, "cta"], e.target.value)} />
            </div>
          </div>
        );

      case "partners":
        return (
          <div className="space-y-4">
            <div>
              {L("Subtitle")}
              <input className={inputCls} value={form[l]?.subtitle || ""} onChange={e => set([l, "subtitle"], e.target.value)} />
            </div>
            <div>
              {L("Heading")}
              <input className={inputCls} value={form[l]?.heading || ""} onChange={e => set([l, "heading"], e.target.value)} />
            </div>
          </div>
        );

      default:
        return <p className="text-sm text-gray-400">No editable fields for this section.</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">
              Edit — {meta.name}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">{meta.description}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X size={15} className="text-gray-500" />
          </button>
        </div>

        {/* Language Tabs */}
        <div className="px-6 pt-4 flex gap-2">
          {(["en", "am"] as const).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-sm font-semibold transition-colors ${
                lang === l
                  ? "bg-[#23B349] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <Globe size={13} />
              {l === "en" ? "English" : "አማርኛ"}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {renderFields()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="px-5 py-2.5 rounded-[10px] text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-[#23B349] text-white hover:bg-[#1a9e3e] disabled:opacity-60 transition-colors"
          >
            {saving ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Sub-form components ────────────────────────────────────────────────────
function RecipeItemField({ index, item, inputCls, textareaCls, onChange }: {
  index: number; item: any; inputCls: string; textareaCls: string;
  onChange: (field: string, val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded-[10px] border border-gray-100">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between px-4 py-2.5 text-left">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Recipe {index + 1} — {item.title || "(untitled)"}</span>
        {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
          <div className="mt-3">
            <label className="text-xs text-gray-500 mb-0.5 block">Title</label>
            <input className={inputCls} value={item.title || ""} onChange={e => onChange("title", e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-0.5 block">Description</label>
            <textarea rows={2} className={textareaCls} value={item.description || ""} onChange={e => onChange("description", e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

function FactField({ fact, inputCls, onChange }: {
  fact: any; inputCls: string;
  onChange: (field: string, val: string) => void;
}) {
  const FACT_NAMES: Record<string, string> = {
    skus: "Unique SKUs", flour: "Flour Production", jobs: "Jobs Created",
    biscuits: "Biscuits/Hour", investment: "Investment", factorySize: "Factory Size",
  };
  return (
    <div className="bg-gray-50 rounded-[10px] p-3 space-y-2">
      <p className="text-xs font-bold text-gray-400 uppercase">{FACT_NAMES[fact.id] || fact.id}</p>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-xs text-gray-500 mb-0.5 block">Value</label>
          <input className={inputCls} value={fact.value || ""} onChange={e => onChange("value", e.target.value)} />
        </div>
        {fact.id === "investment" && (
          <div>
            <label className="text-xs text-gray-500 mb-0.5 block">Value 2 (Birr)</label>
            <input className={inputCls} value={fact.value2 || ""} onChange={e => onChange("value2", e.target.value)} />
          </div>
        )}
        <div className={fact.id === "investment" ? "col-span-2" : ""}>
          <label className="text-xs text-gray-500 mb-0.5 block">Label</label>
          <input className={inputCls} value={fact.label || ""} onChange={e => onChange("label", e.target.value)} />
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function HomeAdminPage() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [editSection, setEditSection] = useState<Section | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchPage = useCallback(async () => {
    try {
      const res = await api.get("/content/pages/home");
      setPage(res.data);
    } catch {
      setPage(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPage(); }, [fetchPage]);

  const initializePage = async () => {
    setInitializing(true);
    try {
      const res = await api.post("/content/pages/upsert", DEFAULT_PAGE);
      setPage(res.data);
      showToast("success", "Home page initialized with default content.");
    } catch {
      showToast("error", "Failed to initialize home page.");
    } finally {
      setInitializing(false);
    }
  };

  const saveSection = async (content: any) => {
    if (!editSection) return;
    setSaving(true);
    try {
      await api.patch(`/content/pages/home/sections/${editSection.id}`, { content });
      setPage(prev => prev ? {
        ...prev,
        sections: prev.sections.map(s => s.id === editSection.id ? { ...s, content } : s),
      } : prev);
      setEditSection(null);
      showToast("success", "Section saved successfully.");
    } catch {
      showToast("error", "Failed to save section.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw size={24} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">Home Page</h1>
            <p className="text-sm text-gray-400 mt-1">Edit the text content for each section of the landing page.</p>
          </div>
          {page && (
            <button
              onClick={fetchPage}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm text-gray-500 hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
          )}
        </div>
        {page?.updatedAt && (
          <p className="text-xs text-gray-400 mt-2">
            Last updated: {new Date(page.updatedAt).toLocaleString()}
          </p>
        )}
      </div>

      {/* Not initialized */}
      {!page && (
        <div className="bg-amber-50 border border-amber-200 rounded-[16px] p-8 text-center">
          <AlertCircle size={40} className="text-amber-400 mx-auto mb-4" />
          <h3 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937] mb-2">Home page not initialized</h3>
          <p className="text-sm text-gray-500 mb-6">
            The home page has not been set up in the database yet. Initialize it to start editing content.
          </p>
          <button
            onClick={initializePage}
            disabled={initializing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#23B349] text-white rounded-full font-semibold text-sm hover:bg-[#1a9e3e] disabled:opacity-60 transition-colors"
          >
            {initializing ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {initializing ? "Initializing…" : "Initialize Home Page"}
          </button>
        </div>
      )}

      {/* Section list */}
      {page && (
        <div className="space-y-3">
          {page.sections.map((section, index) => {
            const meta = SECTION_META[section.type];
            const Icon = meta?.icon || Newspaper;
            const preview = getPreview(section);
            const isReadOnly = meta?.readOnly;

            return (
              <div
                key={section.id}
                className={`bg-white rounded-[16px] border border-gray-100 p-5 flex items-center gap-4 shadow-sm transition-shadow hover:shadow-md ${isReadOnly ? "opacity-60" : ""}`}
              >
                {/* Order badge */}
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#23B349]" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#1F2937] text-sm">{meta?.name || section.type}</p>
                    {isReadOnly && (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Auto</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{preview || meta?.description}</p>
                </div>

                {/* Edit button */}
                {!isReadOnly && (
                  <button
                    onClick={() => setEditSection(section)}
                    className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20 transition-colors shrink-0"
                  >
                    <Edit3 size={14} />
                    Edit
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Edit modal */}
      {editSection && (
        <EditModal
          section={editSection}
          onClose={() => setEditSection(null)}
          onSave={saveSection}
          saving={saving}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-5 py-3 rounded-[14px] shadow-lg text-sm font-semibold ${
          toast.type === "success" ? "bg-[#23B349] text-white" : "bg-red-500 text-white"
        }`}>
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
