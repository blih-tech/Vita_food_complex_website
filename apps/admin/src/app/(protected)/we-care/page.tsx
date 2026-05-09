"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Save, RefreshCw, ChevronRight, ChevronDown, 
  Layout, Type, Image as ImageIcon, Plus, Trash2, 
  Globe, CheckCircle, AlertCircle, ExternalLink,
  Heart, HandHeart, Target, Star, GraduationCap, Users, Leaf, ShieldCheck
} from "lucide-react";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

type Section = {
  id: string;
  type: string;
  content: any;
};

type PageData = {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
};

const SECTION_META: Record<string, { name: string; icon: any }> = {
  "we-care-hero":       { name: "Hero Section", icon: Layout },
  "we-care-heart":      { name: "The Heart Behind", icon: Heart },
  "we-care-driven":     { name: "Driven by Care", icon: HandHeart },
  "we-care-difference": { name: "Making a Difference", icon: Star },
  "we-care-banner":     { name: "Call to Action", icon: Layout },
};

const DEFAULT_PAGE: PageData = {
  slug: "we-care",
  title: { en: "We Care", am: "እንክብካቤ እናደርጋለን" },
  sections: [
    { id: "hero", type: "we-care-hero", content: { en: {}, am: {} } },
    { id: "heart", type: "we-care-heart", content: { en: {}, am: {} } },
    { id: "driven", type: "we-care-driven", content: { en: {}, am: {} } },
    { id: "difference", type: "we-care-difference", content: { en: {}, am: {} } },
    { id: "banner", type: "we-care-banner", content: { en: {}, am: {} } },
  ],
};

function getPreview(section: Section) {
  const c = section.content?.en || {};
  switch (section.type) {
    case "we-care-hero": return c.title || "Hero Section";
    case "we-care-heart": return c.title || "The Heart Behind";
    case "we-care-driven": return c.title || "Driven by Care";
    case "we-care-difference": return c.title || "Making a Difference";
    case "we-care-banner": return c.title || "Call to Action";
    default: return "";
  }
}

export default function WeCareAdminPage() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editSection, setEditSection] = useState<number | null>(null);

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    setLoading(true);
    try {
      const res = await api.get("/content/pages/we-care");
      setPage(res.data);
    } catch (err: any) {
      if (err.response?.status === 404) {
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
      await api.put("/content/pages/we-care", page);
      toast.success("Page updated successfully");
    } catch (err) {
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
    } catch (err) {
      toast.error("Failed to initialize page");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <RefreshCw className="animate-spin text-[#23B349]" size={32} />
    </div>
  );

  if (!page) return (
    <div className="p-8 text-center">
      <AlertCircle className="mx-auto text-gray-300 mb-4" size={48} />
      <h2 className="text-xl font-bold text-gray-600">Page Not Found</h2>
      <button onClick={initializePage} className="mt-4 bg-[#23B349] text-white px-6 py-2 rounded-lg">
        Initialize Page
      </button>
    </div>
  );

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <Link href="/pages" className="hover:text-[#23B349]">Pages</Link>
            <ChevronRight size={14} />
            <span>We Care</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">We Care</h1>
          {page.updatedAt && (
            <p className="text-xs text-gray-400 mt-1">
              Last updated: {new Date(page.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://vitafoodcomplex.vercel.app/en/we-care" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} /> View Live
          </a>
          <button 
            onClick={savePage}
            disabled={saving}
            className="flex items-center gap-2 bg-[#23B349] text-white px-6 py-2 rounded-xl hover:bg-[#1f9d40] transition-colors shadow-lg shadow-[#23B349]/20 disabled:opacity-50 font-medium"
          >
            {saving ? <RefreshCw size={18} className="animate-spin" /> : <Save size={18} />}
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {page.sections.map((section, idx) => {
          const meta = SECTION_META[section.type] || { name: section.type, icon: Layout };
          const Icon = meta.icon;
          const isEditing = editSection === idx;

          return (
            <div key={section.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div 
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setEditSection(isEditing ? null : idx)}
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
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-[#23B349] transition-colors">
                    {isEditing ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                </div>
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

function EditModal({ section, onChange }: { section: Section; onChange: (content: any) => void }) {
  const [lang, setLang] = useState<"en" | "am">("en");
  const content = section.content || { en: {}, am: {} };
  
  const set = (path: string, value: any) => {
    const newContent = { ...content };
    if (!newContent[lang]) newContent[lang] = {};
    
    const parts = path.split('.');
    let current = newContent[lang];
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
    onChange(newContent);
  };

  const setBoth = (path: string, value: any) => {
    const newContent = { ...content };
    ['en', 'am'].forEach(l => {
      if (!newContent[l]) newContent[l] = {};
      const parts = path.split('.');
      let current = newContent[l];
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) current[parts[i]] = {};
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = value;
    });
    onChange(newContent);
  };

  const c = content[lang] || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-xl w-fit">
        <button 
          onClick={() => setLang("en")}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${lang === 'en' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLang("am")}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${lang === 'am' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Amharic
        </button>
      </div>

      {section.type === "we-care-hero" && (
        <div className="grid gap-4">
          <InputField label="Label" value={c.label} onChange={v => set('label', v)} />
          <InputField label="Title (supports \n)" value={c.title} onChange={v => set('title', v)} textarea />
          <InputField label="Subtitle" value={c.subtitle} onChange={v => set('subtitle', v)} textarea />
          <ImageUploadField label="Hero Image" value={c.heroImage} onChange={v => setBoth('heroImage', v)} />
        </div>
      )}

      {section.type === "we-care-heart" && (
        <div className="grid gap-4">
          <InputField label="Title" value={c.title} onChange={v => set('title', v)} />
          <InputField label="Description" value={c.desc} onChange={v => set('desc', v)} textarea />
        </div>
      )}

      {section.type === "we-care-driven" && (
        <div className="grid gap-4">
          <InputField label="Main Title" value={c.title} onChange={v => set('title', v)} textarea />
          <InputField label="Main Description" value={c.desc} onChange={v => set('desc', v)} textarea />
          
          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Commitment</h4>
            <InputField label="Label" value={c.commitment?.label} onChange={v => set('commitment.label', v)} />
            <InputField label="Description" value={c.commitment?.desc} onChange={v => set('commitment.desc', v)} textarea />
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Vision</h4>
            <InputField label="Label" value={c.vision?.label} onChange={v => set('vision.label', v)} />
            <InputField label="Description" value={c.vision?.desc} onChange={v => set('vision.desc', v)} textarea />
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Adapted Cards</h4>
            <InputField label="Label" value={c.adapted?.label} onChange={v => set('adapted.label', v)} />
            <div className="space-y-4">
              {(c.adapted?.cards || []).map((card: any, i: number) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg space-y-2">
                  <InputField label={`Card ${i+1} Title`} value={card.title} onChange={v => {
                    const newCards = [...c.adapted.cards];
                    newCards[i] = { ...card, title: v };
                    set('adapted.cards', newCards);
                  }} />
                  <InputField label={`Card ${i+1} Description`} value={card.desc} onChange={v => {
                    const newCards = [...c.adapted.cards];
                    newCards[i] = { ...card, desc: v };
                    set('adapted.cards', newCards);
                  }} textarea />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {section.type === "we-care-difference" && (
        <div className="grid gap-4">
          <InputField label="Title" value={c.title} onChange={v => set('title', v)} textarea />
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Impact Cards</h4>
            {(c.cards || []).map((card: any, i: number) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase">
                  <span>Icon Key: {card.key}</span>
                </div>
                <InputField label="Title" value={card.title} onChange={v => {
                  const newCards = [...c.cards];
                  newCards[i] = { ...card, title: v };
                  set('cards', newCards);
                }} />
                <InputField label="Description" value={card.desc} onChange={v => {
                  const newCards = [...c.cards];
                  newCards[i] = { ...card, desc: v };
                  set('cards', newCards);
                }} textarea />
              </div>
            ))}
          </div>
        </div>
      )}

      {section.type === "we-care-banner" && (
        <div className="grid gap-4">
          <InputField label="Title" value={c.title} onChange={v => set('title', v)} textarea />
          <InputField label="Description" value={c.desc} onChange={v => set('desc', v)} textarea />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="CTA 1 Text" value={c.cta1} onChange={v => set('cta1', v)} />
            <InputField label="CTA 2 Text" value={c.cta2} onChange={v => set('cta2', v)} />
          </div>
          <ImageUploadField label="Background Image" value={c.mainImage} onChange={v => setBoth('mainImage', v)} />
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      {textarea ? (
        <textarea 
          value={value || ""} 
          onChange={e => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm min-h-[100px]"
        />
      ) : (
        <input 
          type="text" 
          value={value || ""} 
          onChange={e => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#23B349] focus:ring-1 focus:ring-[#23B349] outline-none transition-all text-sm"
        />
      )}
    </div>
  );
}

function ImageUploadField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/content/upload-image", formData, { headers: { "Content-Type": "multipart/form-data" } });
      onChange(res.data.url);
      toast.success("Image uploaded");
    } catch (err) {
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
          {value ? (
            <img src={value} alt="" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon size={24} className="text-gray-200" />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <input 
            type="text" 
            value={value || ""} 
            onChange={e => onChange(e.target.value)}
            placeholder="Image URL"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs outline-none focus:border-[#23B349]"
          />
          <div className="flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-[11px] font-bold">
              {uploading ? <RefreshCw size={12} className="animate-spin" /> : <Plus size={12} />}
              Upload Image
              <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
            </label>
            {value && (
              <button 
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
