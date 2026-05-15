"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Newspaper, BookOpen, Building2, Users, Cog, MessageSquare,
  Edit3, CheckCircle, RefreshCw, AlertCircle, X, Globe,
  ChevronDown, ChevronUp, ImagePlus, Loader2,
} from "lucide-react";
import Image from "next/image";
import api from "@/lib/api";

// ── Types ──────────────────────────────────────────────────────────────────
interface Section { id: string; type: string; content: any; }
interface PageData {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
}

// ── Section metadata ───────────────────────────────────────────────────────
const SECTION_META: Record<string, { name: string; icon: any; description: string }> = {
  "about-hero":         { name: "Hero Banner",       icon: Newspaper,    description: "Main headline, subtitle, and hero image" },
  "about-company":      { name: "Our Company",        icon: BookOpen,     description: "Company title and description paragraph" },
  "about-sister":       { name: "Sister Companies",   icon: Building2,    description: "Brand logos carousel and section text" },
  "about-who-we-are":   { name: "Who Are We",         icon: Users,        description: "Mission, vision, values, purpose cards" },
  "about-process":      { name: "Process Steps",      icon: Cog,          description: "3 production steps with images and captions" },
  "about-testimonials": { name: "Testimonials",       icon: MessageSquare,description: "Customer quotes, authors, and photos" },
};

// ── Default page content ───────────────────────────────────────────────────
const DEFAULT_PAGE: PageData = {
  slug: "about",
  title: { en: "About Us", am: "ስለ እኛ" },
  sections: [
    {
      id: "hero", type: "about-hero",
      content: {
        en: { headline: "Sourced with Care,\nShared with Purpose", subtitle: "We are committed to nourishing communities and protecting our planet through sustainable practices and responsible sourcing.", heroImage: "" },
        am: { headline: "በጥንቃቄ የተገኘ፣\nበዓላማ የተጋራ", subtitle: "በዘላቂ አሰራር እና በኃላፊነት ስሜት ግብዓቶችን በማቅረብ ማህበረሰቦችን ለመመገብ እና ፕላኔታችንን ለመጠበቅ ቆርጠን ተነስተናል።", heroImage: "" },
      },
    },
    {
      id: "company", type: "about-company",
      content: {
        en: { title: "Our Company", description: "Vita is a leading food manufacturing company dedicated to providing high-quality, nutritious products to families across Ethiopia." },
        am: { title: "ድርጅታችን", description: "ቪታ በኢትዮጵያ ውስጥ ለሚገኙ ቤተሰቦች ከፍተኛ ጥራት ያላቸውን እና የተመጣጠነ ምርቶችን ለማቅረብ የተቋቋመ ግንባር ቀደም የምግብ አምራች ድርጅት ነው።" },
      },
    },
    {
      id: "sister-companies", type: "about-sister",
      content: {
        en: { label: "Our Network", title: "Sister Companies", description: "We are part of a diverse group of companies working together to drive growth and innovation.", cta: "View Gallery", longTeaBlurb: "Premium tea products sourced from the finest gardens.", visitSite: "Visit Site", logos: Array.from({ length: 8 }, () => ({ src: "" })) },
        am: { label: "አውታረ መረባችን", title: "እህት ኩባንያዎች", description: "እድገትን እና ፈጠራን ለማምጣት አብረን የምንሰራ የተለያዩ ኩባንያዎች ስብስብ አካል ነን።", cta: "ጋለሪውን ይመልከቱ", longTeaBlurb: "ከምርጥ የአትክልት ስፍራዎች የተገኙ ምርጥ የሻይ ምርቶች።", visitSite: "ድረ-ገጹን ይጎብኙ", logos: Array.from({ length: 8 }, () => ({ src: "" })) },
      },
    },
    {
      id: "who-we-are", type: "about-who-we-are",
      content: {
        en: { who: "WHO", areWe: "ARE WE", description: "We are a team of passionate individuals dedicated to making a difference in the food industry.", newGenTitle: "New Generation", newGenDesc: "Empowering the next generation through nutrition and opportunity.", portrait: "", cards: [{ label: "Mission", desc: "To provide high-quality, nutritious food products that nourish families." }, { label: "Vision", desc: "To be the leading food manufacturer in the region." }, { label: "Values", desc: "Integrity, Quality, Innovation, and Community." }, { label: "Purpose", desc: "To create a positive impact on people and the planet." }] },
        am: { who: "እኛ", areWe: "ማን ነን", description: "በምግብ ኢንዱስትሪ ውስጥ ለውጥ ለማምጣት የቆረጥን ጥልቅ ስሜት ያለን ባለሙያዎች ቡድን ነን።", newGenTitle: "አዲሱ ትውልድ", newGenDesc: "በአመጋገብ እና በዕድል አዲሱን ትውልድ ማብቃት።", portrait: "", cards: [{ label: "ተልዕኮ", desc: "ቤተሰቦችን የሚመግቡ ከፍተኛ ጥራት ያላቸውን የምግብ ምርቶችን ማቅረብ።" }, { label: "ራዕይ", desc: "በቀጣናው ግንባር ቀደም የምግብ አምራች መሆን።" }, { label: "እሴቶች", desc: "ታማኝነት፣ ጥራት፣ ፈጠራ እና ማህበረሰብ።" }, { label: "ዓላማ", desc: "በሰዎች እና በፕላኔታችን ላይ አዎንታዊ ተፅእኖ መፍጠር።" }] },
      },
    },
    {
      id: "process", type: "about-process",
      content: {
        en: { steps: [{ heading: "Sourcing", desc: "We source the finest ingredients from local farmers.", label: "Step 01", captionTitle: "Quality Ingredients", captionDesc: "Only the best for our products.", image: "" }, { heading: "Crafting", desc: "Our expert bakers craft each product with care.", label: "Step 02", captionTitle: "Expert Craftsmanship", captionDesc: "Tradition meets innovation.", image: "" }, { heading: "Production", desc: "State-of-the-art production for consistent quality.", label: "Step 03", captionTitle: "Modern Production", captionDesc: "Efficiency and safety first.", image: "" }] },
        am: { steps: [{ heading: "ምንጭ", desc: "ከአካባቢው አርሶ አደሮች ምርጥ ግብዓቶችን እናገኛለን።", label: "ደረጃ 01", captionTitle: "ጥራት ያላቸው ግብዓቶች", captionDesc: "ለጥራት ምርቶቻችን ምርጥ የሆኑት ብቻ።", image: "" }, { heading: "አዘገጃጀት", desc: "ባለሙያ ጋጋሪዎቻችን እያንዳንዱን ምርት በጥንቃቄ ያዘጋጃሉ።", label: "ደረጃ 02", captionTitle: "የባለሙያ ጥበብ", captionDesc: "ባህል ከፈጠራ ጋር ይገናኛል።", image: "" }, { heading: "ምርት", desc: "ለተከታታይ ጥራት ዘመናዊ የምርት ሂደት።", label: "ደረጃ 03", captionTitle: "ዘመናዊ ምርት", captionDesc: "ውጤታማነት እና ደህንነት ቅድሚያ ይሰጣቸዋል።", image: "" }] },
      },
    },
    {
      id: "testimonials", type: "about-testimonials",
      content: {
        en: { label: "Testimonials", titleLead: "What People", titleAccent: "Say", items: [{ quote: "The quality of Vita products is unmatched in the market.", author: "Abebe Kebede", role: "Retailer", image: "" }, { quote: "My kids love the Zoo biscuits! They are healthy and tasty.", author: "Sara Tekle", role: "Parent", image: "" }] },
        am: { label: "ምስክርነቶች", titleLead: "ሰዎች ምን", titleAccent: "ይላሉ", items: [{ quote: "የቪታ ምርቶች ጥራት በገበያው ላይ ሊወዳደር አይችልም።", author: "አበበ ከበደ", role: "ችርቻሮ ሻጭ", image: "" }, { quote: "ልጆቼ ዙ ቢስኩቶቹን ይወዳሉ! ጤናማ እና ጣፋጭ ናቸው።", author: "ሳራ ተክሌ", role: "ወላጅ", image: "" }] },
      },
    },
  ],
};

// ── Helper ─────────────────────────────────────────────────────────────────
function getPreview(section: Section): string {
  const en = section.content?.en || section.content;
  const fields = [en?.headline, en?.title, en?.label, en?.who];
  const text = fields.find(Boolean) || "";
  return text.length > 60 ? text.slice(0, 60) + "…" : text;
}

// ── ImageUploadField ───────────────────────────────────────────────────────
function ImageUploadField({
  currentUrl, uploading, onFileSelected,
}: {
  currentUrl: string; uploading: boolean; onFileSelected: (file: File) => void;
}) {
  return (
    <div className="flex items-center gap-3 mt-2">
      {currentUrl ? (
        <div className="relative w-14 h-14 rounded-[10px] overflow-hidden border border-gray-200 shrink-0">
          <Image src={currentUrl} alt="preview" fill className="object-cover" unoptimized />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-[10px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center shrink-0">
          <ImagePlus size={18} className="text-gray-400" />
        </div>
      )}
      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-[10px] text-xs font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer">
        {uploading ? <Loader2 size={13} className="animate-spin" /> : <ImagePlus size={13} />}
        {uploading ? "Uploading…" : "Change Image"}
        <input type="file" accept="image/*" className="hidden" disabled={uploading}
          onChange={e => { const f = e.target.files?.[0]; if (f) onFileSelected(f); }} />
      </label>
      {currentUrl && <p className="text-[10px] text-gray-400 truncate max-w-[160px]">{currentUrl.split("/").pop()}</p>}
    </div>
  );
}

// ── Edit Modal ─────────────────────────────────────────────────────────────
function EditModal({ section, onClose, onSave, saving }: {
  section: Section; onClose: () => void; onSave: (content: any) => void; saving: boolean;
}) {
  const [lang, setLang] = useState<"en" | "am">("en");
  const [form, setForm] = useState<any>(() => JSON.parse(JSON.stringify(section.content || {})));
  const [uploading, setUploading] = useState<string | null>(null);

  const set = (path: string[], value: string) => {
    setForm((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      let cur = next;
      for (let i = 0; i < path.length - 1; i++) { if (!cur[path[i]]) cur[path[i]] = {}; cur = cur[path[i]]; }
      cur[path[path.length - 1]] = value;
      return next;
    });
  };

  // Sets a field in BOTH locales (locale-agnostic images)
  const setBoth = (field: string, value: string) => {
    setForm((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      if (!next.en) next.en = {}; next.en[field] = value;
      if (!next.am) next.am = {}; next.am[field] = value;
      return next;
    });
  };

  const uploadImage = async (key: string, file: File, onUrl: (url: string) => void) => {
    setUploading(key);
    try {
      const fd = new FormData(); fd.append("file", file);
      const { data } = await api.post("/content/upload-image", fd, { headers: { "Content-Type": "multipart/form-data" } });
      onUrl(data.url);
    } finally { setUploading(null); }
  };

  const meta = SECTION_META[section.type] || { name: section.type };
  const inputCls = "w-full border border-gray-200 rounded-[10px] px-3 py-2 text-sm text-[#333733] focus:outline-none focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349] transition-colors";
  const textareaCls = inputCls + " resize-none";
  const labelCls = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";
  const L = (label: string) => <label className={labelCls}>{label}</label>;
  const l = lang;

  const renderFields = () => {
    switch (section.type) {
      case "about-hero":
        return (
          <div className="space-y-4">
            <div>{L("Headline")}<textarea rows={2} className={textareaCls} value={form[l]?.headline || ""} onChange={e => set([l, "headline"], e.target.value)} /></div>
            <div>{L("Subtitle")}<textarea rows={3} className={textareaCls} value={form[l]?.subtitle || ""} onChange={e => set([l, "subtitle"], e.target.value)} /></div>
            <div className="border-t border-gray-100 pt-3">
              {L("Hero Image")}
              <ImageUploadField currentUrl={form.en?.heroImage || ""} uploading={uploading === "heroImage"}
                onFileSelected={file => uploadImage("heroImage", file, url => setBoth("heroImage", url))} />
            </div>
          </div>
        );

      case "about-company":
        return (
          <div className="space-y-4">
            <div>{L("Title")}<input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} /></div>
            <div>{L("Description")}<textarea rows={4} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} /></div>
          </div>
        );

      case "about-sister": {
        const LOGO_LABELS = ["Belayab Group", "Motors", "Cables", "Long Tea (card logo)", "Golden Tulip", "Lewis", "Foods", "Limestone"];
        const logos: { src: string }[] = form.en?.logos || Array.from({ length: 8 }, () => ({ src: "" }));
        return (
          <div className="space-y-4">
            <div>{L("Network Label")}<input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} /></div>
            <div>{L("Section Title")}<input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} /></div>
            <div>{L("Description")}<textarea rows={2} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div>{L("CTA Button")}<input className={inputCls} value={form[l]?.cta || ""} onChange={e => set([l, "cta"], e.target.value)} /></div>
              <div>{L("Visit Site Button")}<input className={inputCls} value={form[l]?.visitSite || ""} onChange={e => set([l, "visitSite"], e.target.value)} /></div>
            </div>
            <div>{L("Long Tea Card Text")}<textarea rows={2} className={textareaCls} value={form[l]?.longTeaBlurb || ""} onChange={e => set([l, "longTeaBlurb"], e.target.value)} /></div>
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Brand Logos (shared across languages)</p>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-[10px] text-sm text-blue-700 flex items-start gap-2">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <p><strong>Logos are synchronized from the Home Page.</strong> Any updates to the Sister Companies logos made on the Home page will automatically be applied here.</p>
              </div>
            </div>
          </div>
        );
      }

      case "about-who-we-are": {
        const MV_KEYS = ["Mission", "Vision", "Values", "Purpose"];
        const cards = form[l]?.cards || Array.from({ length: 4 }, () => ({ label: "", desc: "" }));
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>{L("\"WHO\" text")}<input className={inputCls} value={form[l]?.who || ""} onChange={e => set([l, "who"], e.target.value)} /></div>
              <div>{L("\"ARE WE\" text")}<input className={inputCls} value={form[l]?.areWe || ""} onChange={e => set([l, "areWe"], e.target.value)} /></div>
            </div>
            <div>{L("Description")}<textarea rows={3} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} /></div>
            <div>{L("New Generation Title")}<input className={inputCls} value={form[l]?.newGenTitle || ""} onChange={e => set([l, "newGenTitle"], e.target.value)} /></div>
            <div>{L("New Generation Description")}<textarea rows={2} className={textareaCls} value={form[l]?.newGenDesc || ""} onChange={e => set([l, "newGenDesc"], e.target.value)} /></div>
            <div className="border-t border-gray-100 pt-3">
              {L("Portrait Image")}
              <ImageUploadField currentUrl={form.en?.portrait || ""} uploading={uploading === "portrait"}
                onFileSelected={file => uploadImage("portrait", file, url => setBoth("portrait", url))} />
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Mission / Vision / Values / Purpose Cards</p>
              <div className="space-y-3">
                {cards.map((card: any, i: number) => (
                  <div key={i} className="bg-gray-50 rounded-[10px] p-3 space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase">{MV_KEYS[i]}</p>
                    <div><label className="text-xs text-gray-500 block mb-0.5">Label</label>
                      <input className={inputCls} value={card.label || ""} onChange={e => {
                        const newCards = JSON.parse(JSON.stringify(cards)); newCards[i].label = e.target.value;
                        setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].cards = newCards; return next; });
                      }} /></div>
                    <div><label className="text-xs text-gray-500 block mb-0.5">Description</label>
                      <textarea rows={2} className={textareaCls} value={card.desc || ""} onChange={e => {
                        const newCards = JSON.parse(JSON.stringify(cards)); newCards[i].desc = e.target.value;
                        setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].cards = newCards; return next; });
                      }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case "about-process": {
        const STEP_LABELS = ["Step 01 — Sourcing", "Step 02 — Crafting", "Step 03 — Production"];
        const steps = form[l]?.steps || Array.from({ length: 3 }, () => ({ heading: "", desc: "", label: "", captionTitle: "", captionDesc: "", image: "" }));
        return (
          <div className="space-y-4">
            {steps.map((step: any, i: number) => (
              <ProcessStepField key={i} index={i} step={step} label={STEP_LABELS[i]}
                inputCls={inputCls} textareaCls={textareaCls}
                currentImage={form.en?.steps?.[i]?.image || ""}
                uploading={uploading === `step${i}`}
                onChange={(field, val) => {
                  const newSteps = JSON.parse(JSON.stringify(steps)); newSteps[i][field] = val;
                  setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].steps = newSteps; return next; });
                }}
                onImageUpload={file => uploadImage(`step${i}`, file, url => {
                  setForm((prev: any) => {
                    const next = JSON.parse(JSON.stringify(prev));
                    ["en", "am"].forEach(lng => {
                      if (!next[lng]) next[lng] = {};
                      if (!next[lng].steps) next[lng].steps = Array.from({ length: 3 }, () => ({}));
                      next[lng].steps[i] = { ...(next[lng].steps[i] || {}), image: url };
                    });
                    return next;
                  });
                })}
              />
            ))}
          </div>
        );
      }

      case "about-testimonials": {
        const items = form[l]?.items || [];
        return (
          <div className="space-y-4">
            <div>{L("Section Label")}<input className={inputCls} value={form[l]?.label || ""} onChange={e => set([l, "label"], e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div>{L("Title Lead")}<input className={inputCls} value={form[l]?.titleLead || ""} onChange={e => set([l, "titleLead"], e.target.value)} /></div>
              <div>{L("Title Accent")}<input className={inputCls} value={form[l]?.titleAccent || ""} onChange={e => set([l, "titleAccent"], e.target.value)} /></div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between mb-3">
                <p className={labelCls}>Testimonial Items</p>
                <button type="button" onClick={() => {
                  const newItem = { quote: "", author: "", role: "", image: "" };
                  setForm((prev: any) => {
                    const next = JSON.parse(JSON.stringify(prev));
                    ["en", "am"].forEach(lng => { if (!next[lng]) next[lng] = {}; if (!next[lng].items) next[lng].items = []; next[lng].items.push({ ...newItem }); });
                    return next;
                  });
                }} className="text-xs font-semibold text-[#23B349] hover:underline">+ Add</button>
              </div>
              <div className="space-y-3">
                {items.map((item: any, i: number) => (
                  <TestimonialItemField key={i} index={i} item={item}
                    inputCls={inputCls} textareaCls={textareaCls}
                    currentImage={form.en?.items?.[i]?.image || ""}
                    uploading={uploading === `testimonial${i}`}
                    onChange={(field, val) => {
                      const newItems = JSON.parse(JSON.stringify(items)); newItems[i][field] = val;
                      setForm((prev: any) => { const next = JSON.parse(JSON.stringify(prev)); if (!next[l]) next[l] = {}; next[l].items = newItems; return next; });
                    }}
                    onImageUpload={file => uploadImage(`testimonial${i}`, file, url => {
                      setForm((prev: any) => {
                        const next = JSON.parse(JSON.stringify(prev));
                        ["en", "am"].forEach(lng => {
                          if (!next[lng]) next[lng] = {};
                          if (!next[lng].items) next[lng].items = [];
                          if (!next[lng].items[i]) next[lng].items[i] = {};
                          next[lng].items[i].image = url;
                        });
                        return next;
                      });
                    })}
                    onRemove={() => {
                      setForm((prev: any) => {
                        const next = JSON.parse(JSON.stringify(prev));
                        ["en", "am"].forEach(lng => { if (next[lng]?.items) next[lng].items.splice(i, 1); });
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

      default:
        return <p className="text-sm text-gray-400">No editable fields for this section.</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">Edit — {meta.name}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{meta.description}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X size={15} className="text-gray-500" />
          </button>
        </div>

        <div className="px-6 pt-4 flex gap-2">
          {(["en", "am"] as const).map(tabLang => (
            <button key={tabLang} onClick={() => setLang(tabLang)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-sm font-semibold transition-colors ${lang === tabLang ? "bg-[#23B349] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>
              <Globe size={13} />
              {tabLang === "en" ? "English" : "አማርኛ"}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">{renderFields()}</div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="px-5 py-2.5 rounded-[10px] text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
          <button onClick={() => onSave(form)} disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold bg-[#23B349] text-white hover:bg-[#1a9e3e] disabled:opacity-60 transition-colors">
            {saving ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Sub-form components ────────────────────────────────────────────────────
function ProcessStepField({ index, step, label, inputCls, textareaCls, currentImage, uploading, onChange, onImageUpload }: {
  index: number; step: any; label: string; inputCls: string; textareaCls: string;
  currentImage: string; uploading: boolean;
  onChange: (field: string, val: string) => void;
  onImageUpload: (file: File) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded-[10px] border border-gray-100">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between px-4 py-2.5 text-left">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</span>
        {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gray-100 mt-0">
          <div className="mt-3"><label className="text-xs text-gray-500 block mb-0.5">Heading</label><input className={inputCls} value={step.heading || ""} onChange={e => onChange("heading", e.target.value)} /></div>
          <div><label className="text-xs text-gray-500 block mb-0.5">Description</label><textarea rows={2} className={textareaCls} value={step.desc || ""} onChange={e => onChange("desc", e.target.value)} /></div>
          <div><label className="text-xs text-gray-500 block mb-0.5">Step Label (e.g. "Step 01")</label><input className={inputCls} value={step.label || ""} onChange={e => onChange("label", e.target.value)} /></div>
          <div className="grid grid-cols-2 gap-2">
            <div><label className="text-xs text-gray-500 block mb-0.5">Caption Title</label><input className={inputCls} value={step.captionTitle || ""} onChange={e => onChange("captionTitle", e.target.value)} /></div>
            <div><label className="text-xs text-gray-500 block mb-0.5">Caption Description</label><input className={inputCls} value={step.captionDesc || ""} onChange={e => onChange("captionDesc", e.target.value)} /></div>
          </div>
          <div><label className="text-xs text-gray-500 block mb-0.5">Step Image</label>
            <ImageUploadField currentUrl={currentImage} uploading={uploading} onFileSelected={onImageUpload} />
          </div>
        </div>
      )}
    </div>
  );
}

function TestimonialItemField({ index, item, inputCls, textareaCls, currentImage, uploading, onChange, onImageUpload, onRemove }: {
  index: number; item: any; inputCls: string; textareaCls: string;
  currentImage: string; uploading: boolean;
  onChange: (field: string, val: string) => void;
  onImageUpload: (file: File) => void;
  onRemove: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded-[10px] border border-gray-100">
      <div className="flex items-center">
        <button onClick={() => setOpen(v => !v)} className="flex-1 flex items-center justify-between px-4 py-2.5 text-left">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Testimonial {index + 1} — {item.author || "(unnamed)"}</span>
          {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
        </button>
        <button onClick={onRemove} className="px-3 py-2.5 text-red-400 hover:text-red-600 transition-colors">
          <X size={13} />
        </button>
      </div>
      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gray-100">
          <div className="mt-3"><label className="text-xs text-gray-500 block mb-0.5">Quote</label><textarea rows={2} className={textareaCls} value={item.quote || ""} onChange={e => onChange("quote", e.target.value)} /></div>
          <div className="grid grid-cols-2 gap-2">
            <div><label className="text-xs text-gray-500 block mb-0.5">Author Name</label><input className={inputCls} value={item.author || ""} onChange={e => onChange("author", e.target.value)} /></div>
            <div><label className="text-xs text-gray-500 block mb-0.5">Role / Title</label><input className={inputCls} value={item.role || ""} onChange={e => onChange("role", e.target.value)} /></div>
          </div>
          <div><label className="text-xs text-gray-500 block mb-0.5">Photo</label>
            <ImageUploadField currentUrl={currentImage} uploading={uploading} onFileSelected={onImageUpload} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function AboutAdminPage() {
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
      const res = await api.get("/content/pages/about");
      const fetched: PageData = res.data;
      const existingTypes = new Set((fetched.sections || []).map((s: Section) => s.type));
      const missing = DEFAULT_PAGE.sections.filter(s => !existingTypes.has(s.type));
      if (missing.length > 0) {
        const merged = { ...fetched, sections: [...(fetched.sections || []), ...missing] };
        const synced = await api.post("/content/pages/upsert", merged);
        setPage(synced.data);
      } else {
        setPage(fetched);
      }
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
      showToast("success", "About page initialized with default content.");
    } catch {
      showToast("error", "Failed to initialize about page.");
    } finally {
      setInitializing(false);
    }
  };


  const saveSection = async (content: any) => {
    if (!editSection) return;
    setSaving(true);
    try {
      await api.patch(`/content/pages/about/sections/${editSection.id}`, { content });
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
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">About Us Page</h1>
            <p className="text-sm text-gray-400 mt-1">Edit text and images for each section of the About Us page.</p>
          </div>
          {page && (
            <button onClick={fetchPage} className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm text-gray-500 hover:bg-gray-100 transition-colors border border-gray-200">
              <RefreshCw size={14} /> Refresh
            </button>
          )}
        </div>
        {page?.updatedAt && (
          <p className="text-xs text-gray-400 mt-2">Last updated: {new Date(page.updatedAt).toLocaleString()}</p>
        )}
      </div>

      {!page && (
        <div className="bg-amber-50 border border-amber-200 rounded-[16px] p-8 text-center">
          <AlertCircle size={40} className="text-amber-400 mx-auto mb-4" />
          <h3 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937] mb-2">About page not initialized</h3>
          <p className="text-sm text-gray-500 mb-6">The About page has not been set up in the database yet.</p>
          <button onClick={initializePage} disabled={initializing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#23B349] text-white rounded-full font-semibold text-sm hover:bg-[#1a9e3e] disabled:opacity-60 transition-colors">
            {initializing ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            {initializing ? "Initializing…" : "Initialize About Page"}
          </button>
        </div>
      )}

      {page && (
        <div className="space-y-3">
          {page.sections.map((section, index) => {
            const meta = SECTION_META[section.type];
            const Icon = meta?.icon || Newspaper;
            const preview = getPreview(section);
            return (
              <div key={section.id} className="bg-white rounded-[16px] border border-gray-100 p-5 flex items-center gap-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">{index + 1}</div>
                <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#23B349]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1F2937] text-sm">{meta?.name || section.type}</p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{preview || meta?.description}</p>
                </div>
                <button onClick={() => setEditSection(section)}
                  className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20 transition-colors shrink-0">
                  <Edit3 size={14} /> Edit
                </button>
              </div>
            );
          })}
        </div>
      )}

      {editSection && (
        <EditModal section={editSection} onClose={() => setEditSection(null)} onSave={saveSection} saving={saving} />
      )}

      {toast && (
        <div className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 px-5 py-3 rounded-[14px] shadow-lg text-sm font-semibold ${toast.type === "success" ? "bg-[#23B349] text-white" : "bg-red-500 text-white"}`}>
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}
