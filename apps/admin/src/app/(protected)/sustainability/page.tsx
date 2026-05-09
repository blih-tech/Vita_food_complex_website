"use client";

import { useState, useEffect, useCallback } from "react";
import { Leaf, ShieldCheck, Cog, Heart, Edit3, CheckCircle, RefreshCw, AlertCircle, X, Globe, ChevronDown, ChevronUp, ImagePlus, Loader2 } from "lucide-react";
import Image from "next/image";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

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
  "sustainability-hero":       { name: "Hero Banner",       icon: Leaf,         description: "Main headline, subtitle, and hero image" },
  "sustainability-commitment": { name: "Our Commitment",    icon: ShieldCheck,  description: "Commitment text, cards, and quick facts" },
  "sustainability-process":    { name: "Sustainability Process", icon: Cog,     description: "4-step process with images" },
  "sustainability-give-back":  { name: "How We Give Back",  icon: Heart,        description: "Social impact cards and description" },
};

// ── Default page content ───────────────────────────────────────────────────
const DEFAULT_PAGE: PageData = {
  slug: "sustainability",
  title: { en: "Sustainability", am: "ዘላቂነት" },
  sections: [
    {
      id: "hero", type: "sustainability-hero",
      content: {
        en: { headline: "Sourced with Care,\nShared with Purpose", subtitle: "We are committed to nourishing communities and protecting our planet through sustainable practices and responsible sourcing.", heroImage: "/assets/images/sustainability/hero-bg.jpg" },
        am: { headline: "በጥንቃቄ የተገኘ፣\nበዓላማ የተጋራ", subtitle: "በዘላቂ አሰራር እና በኃላፊነት ስሜት ግብዓቶችን በማቅረብ ማህበረሰቦችን ለመመገብ እና ፕላኔታችንን ለመጠበቅ ቆርጠን ተነስተናል።", heroImage: "/assets/images/sustainability/hero-bg.jpg" },
      },
    },
    {
      id: "commitment", type: "sustainability-commitment",
      content: {
        en: { 
          description: "Our commitment to sustainability is at the heart of everything we do...", 
          title: "Our Commitment",
          commitments: [
            { title: "Local Sourcing", items: ["Item 1", "Item 2"] },
            { title: "Community Impact", items: ["Item 1", "Item 2"] },
            { title: "Responsible Production", items: ["Item 1", "Item 2"] }
          ],
          stats: {
            skus: { value: "+11", label: "SKUs" },
            biscuits: { value: "1.2B", label: "Biscuits" },
            flour: { value: "60tn", label: "Flour" },
            quickFact: "Quick Fact",
            jobs: { value: "+200", label: "Jobs" },
            factory: { value: "22Km²", label: "Factory Size" },
            investment: { value: "$10M", label: "Investment" },
            export: { value: "Export" }
          }
        },
        am: { 
          description: "የዘላቂነት ቁርጠኝነታችን በምናደርገው ነገር ሁሉ እምብርት ነው...", 
          title: "ቁርጠኝነታችን",
          commitments: [
            { title: "የአገር ውስጥ ግብዓት", items: ["Item 1", "Item 2"] },
            { title: "የማህበረሰብ ተፅእኖ", items: ["Item 1", "Item 2"] },
            { title: "ኃላፊነት የተሞላበት ምርት", items: ["Item 1", "Item 2"] }
          ],
          stats: {
            skus: { value: "+11", label: "SKUs" },
            biscuits: { value: "1.2B", label: "ቢስኩቶች" },
            flour: { value: "60tn", label: "ዱቄት" },
            quickFact: "ፈጣን እውነታ",
            jobs: { value: "+200", label: "ስራዎች" },
            factory: { value: "22Km²", label: "የፋብሪካ መጠን" },
            investment: { value: "$10M", label: "ኢንቨስትመንት" },
            export: { value: "ወደ ውጭ መላክ" }
          }
        },
      },
    },
    {
      id: "process", type: "sustainability-process",
      content: {
        en: { sublabel: "OUR PROCESS", title: "Sustainability Process", steps: Array.from({ length: 4 }, () => ({ heading: "", desc: "", image: "" })) },
        am: { sublabel: "ሂደታችን", title: "የዘላቂነት ሂደት", steps: Array.from({ length: 4 }, () => ({ heading: "", desc: "", image: "" })) },
      },
    },
    {
      id: "give-back", type: "sustainability-give-back",
      content: {
        en: { title: "How We Give Back", description: "...", cards: Array.from({ length: 3 }, () => ({ heading: "", desc: "", image: "" })) },
        am: { title: "እንዴት እንደምንመልስ", description: "...", cards: Array.from({ length: 3 }, () => ({ heading: "", desc: "", image: "" })) },
      },
    },
  ],
};

// ── Helper ─────────────────────────────────────────────────────────────────
function getPreview(section: Section): string {
  const en = section.content?.en || section.content;
  const fields = [en?.headline, en?.title, en?.sublabel];
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

  const set = (path: string[], value: any) => {
    setForm((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      let cur = next;
      for (let i = 0; i < path.length - 1; i++) { if (!cur[path[i]]) cur[path[i]] = {}; cur = cur[path[i]]; }
      cur[path[path.length - 1]] = value;
      return next;
    });
  };

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
      case "sustainability-hero":
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

      case "sustainability-commitment":
        return (
          <div className="space-y-4">
            <div>{L("Section Title")}<input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} /></div>
            <div>{L("Description")}<textarea rows={4} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} /></div>
            
            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Commitment Cards</p>
              <div className="space-y-4">
                {(form[l]?.commitments || []).map((c: any, i: number) => (
                  <div key={i} className="bg-gray-50 rounded-[10px] p-3 space-y-2">
                    <div>{L(`Card ${i+1} Title`)}<input className={inputCls} value={c.title || ""} onChange={e => {
                      const newCommits = [...form[l].commitments]; newCommits[i].title = e.target.value; set([l, "commitments"], newCommits);
                    }} /></div>
                    <div>{L(`Card ${i+1} Items (one per line)`)}<textarea rows={4} className={textareaCls} value={(c.items || []).join("\n")} onChange={e => {
                      const newCommits = [...form[l].commitments]; newCommits[i].items = e.target.value.split("\n"); set([l, "commitments"], newCommits);
                    }} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className={labelCls}>Quick Facts / Stats</p>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(form[l]?.stats || {}).map(([key, val]: [string, any]) => {
                  if (typeof val === 'string') return <div key={key}>{L(key)}<input className={inputCls} value={val} onChange={e => set([l, "stats", key], e.target.value)} /></div>;
                  return (
                    <div key={key} className="space-y-1">
                      {L(key)}
                      <input className={inputCls} placeholder="Value" value={val.value || ""} onChange={e => set([l, "stats", key, "value"], e.target.value)} />
                      <input className={inputCls} placeholder="Label" value={val.label || ""} onChange={e => set([l, "stats", key, "label"], e.target.value)} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case "sustainability-process":
        return (
          <div className="space-y-4">
            <div>{L("Sublabel")}<input className={inputCls} value={form[l]?.sublabel || ""} onChange={e => set([l, "sublabel"], e.target.value)} /></div>
            <div>{L("Section Title")}<input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} /></div>
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {(form[l]?.steps || []).map((step: any, i: number) => (
                <div key={i} className="bg-gray-50 rounded-[10px] p-3 space-y-2">
                  <p className={labelCls}>Step {i+1}</p>
                  <div>{L("Heading")}<input className={inputCls} value={step.heading || ""} onChange={e => {
                    const newSteps = [...form[l].steps]; newSteps[i].heading = e.target.value; set([l, "steps"], newSteps);
                  }} /></div>
                  <div>{L("Description")}<textarea rows={2} className={textareaCls} value={step.desc || ""} onChange={e => {
                    const newSteps = [...form[l].steps]; newSteps[i].desc = e.target.value; set([l, "steps"], newSteps);
                  }} /></div>
                  <div>{L("Image")}
                    <ImageUploadField currentUrl={form.en?.steps?.[i]?.image || ""} uploading={uploading === `step${i}`}
                      onFileSelected={file => uploadImage(`step${i}`, file, url => {
                        const newStepsEn = [...form.en.steps]; newStepsEn[i].image = url;
                        const newStepsAm = [...form.am.steps]; newStepsAm[i].image = url;
                        set(["en", "steps"], newStepsEn); set(["am", "steps"], newStepsAm);
                      })} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "sustainability-give-back":
        return (
          <div className="space-y-4">
            <div>{L("Section Title")}<input className={inputCls} value={form[l]?.title || ""} onChange={e => set([l, "title"], e.target.value)} /></div>
            <div>{L("Description")}<textarea rows={3} className={textareaCls} value={form[l]?.description || ""} onChange={e => set([l, "description"], e.target.value)} /></div>
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {(form[l]?.cards || []).map((card: any, i: number) => (
                <div key={i} className="bg-gray-50 rounded-[10px] p-3 space-y-2">
                  <p className={labelCls}>Card {i+1}</p>
                  <div>{L("Heading")}<input className={inputCls} value={card.heading || ""} onChange={e => {
                    const newCards = [...form[l].cards]; newCards[i].heading = e.target.value; set([l, "cards"], newCards);
                  }} /></div>
                  <div>{L("Description")}<textarea rows={2} className={textareaCls} value={card.desc || ""} onChange={e => {
                    const newCards = [...form[l].cards]; newCards[i].desc = e.target.value; set([l, "cards"], newCards);
                  }} /></div>
                  <div>{L("Image")}
                    <ImageUploadField currentUrl={form.en?.cards?.[i]?.image || ""} uploading={uploading === `card${i}`}
                      onFileSelected={file => uploadImage(`card${i}`, file, url => {
                        const newCardsEn = [...form.en.cards]; newCardsEn[i].image = url;
                        const newCardsAm = [...form.am.cards]; newCardsAm[i].image = url;
                        set(["en", "cards"], newCardsEn); set(["am", "cards"], newCardsAm);
                      })} />
                  </div>
                </div>
              ))}
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

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SustainabilityAdminPage() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const [editSection, setEditSection] = useState<Section | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchPage = useCallback(async () => {
    try {
      const res = await api.get("/content/pages/sustainability");
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
      toast.success("Sustainability page initialized.");
    } catch {
      toast.error("Failed to initialize page.");
    } finally {
      setInitializing(false);
    }
  };

  const saveSection = async (content: any) => {
    if (!editSection) return;
    setSaving(true);
    try {
      await api.patch(`/content/pages/sustainability/sections/${editSection.id}`, { content });
      setPage(prev => prev ? {
        ...prev,
        sections: prev.sections.map(s => s.id === editSection.id ? { ...s, content } : s),
      } : prev);
      setEditSection(null);
      toast.success("Section saved successfully.");
    } catch {
      toast.error("Failed to save section.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64"><RefreshCw size={24} className="animate-spin text-[#23B349]" /></div>;

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">Sustainability Page</h1>
        <p className="text-sm text-gray-400 mt-1">Manage sustainability content, commitments, and social impact.</p>
      </div>

      {!page && (
        <div className="bg-amber-50 border border-amber-200 rounded-[16px] p-8 text-center">
          <AlertCircle size={40} className="text-amber-400 mx-auto mb-4" />
          <h3 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937] mb-2">Page not initialized</h3>
          <button onClick={initializePage} disabled={initializing} className="inline-flex items-center gap-2 px-6 py-3 bg-[#23B349] text-white rounded-full font-semibold text-sm hover:bg-[#1a9e3e] transition-colors">
            {initializing ? <RefreshCw size={14} className="animate-spin" /> : <CheckCircle size={14} />}
            Initialize Page
          </button>
        </div>
      )}

      {page && (
        <div className="space-y-3">
          {page.sections.map((section, index) => {
            const meta = SECTION_META[section.type];
            const Icon = meta?.icon || Leaf;
            return (
              <div key={section.id} className="bg-white rounded-[16px] border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">{index + 1}</div>
                <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center"><Icon size={18} className="text-[#23B349]" /></div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1F2937] text-sm">{meta?.name || section.type}</p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{getPreview(section)}</p>
                </div>
                <button onClick={() => setEditSection(section)} className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20 transition-colors">
                  <Edit3 size={14} /> Edit
                </button>
              </div>
            );
          })}
        </div>
      )}

      {editSection && <EditModal section={editSection} onClose={() => setEditSection(null)} onSave={saveSection} saving={saving} />}
    </div>
  );
}
