"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Save, RefreshCw, ChevronRight, ChevronDown, 
  Layout, Type, Image as ImageIcon, Plus, Trash2, 
  Globe, CheckCircle, AlertCircle, ExternalLink,
  BarChart3, HelpCircle, Users, Mail
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
  "research-hero":            { name: "Hero Section", icon: Layout },
  "research-overview":        { name: "Research Overview", icon: BarChart3 },
  "research-problem-framing": { name: "Problem Framing", icon: HelpCircle },
  "research-user-research":   { name: "User Research", icon: Users },
};

const DEFAULT_PAGE: PageData = {
  slug: "research",
  title: { en: "Research", am: "ምርምር" },
  sections: [
    { id: "hero", type: "research-hero", content: { en: {}, am: {} } },
    { id: "overview", type: "research-overview", content: { en: {}, am: {} } },
    { id: "problem-framing", type: "research-problem-framing", content: { en: {}, am: {} } },
    { id: "user-research", type: "research-user-research", content: { en: {}, am: {} } },
  ],
};

function getPreview(section: Section) {
  const c = section.content?.en || {};
  switch (section.type) {
    case "research-hero": return c.title || "Hero Section";
    case "research-overview": return c.heading || "Research Overview";
    case "research-problem-framing": return c.heading || "Problem Framing";
    case "research-user-research": return c.heading || "User Research";
    default: return "";
  }
}

export default function ResearchAdminPage() {
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
      const res = await api.get("/content/pages/research");
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
      await api.put("/content/pages/research", page);
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
            <span>Research</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Research</h1>
          {page.updatedAt && (
            <p className="text-xs text-gray-400 mt-1">
              Last updated: {new Date(page.updatedAt).toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://vitafoodcomplex.vercel.app/en/research" 
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

      {section.type === "research-hero" && (
        <div className="grid gap-4">
          <InputField label="Label" value={c.label} onChange={v => set('label', v)} />
          <InputField label="Title (supports \n)" value={c.title} onChange={v => set('title', v)} textarea />
          <InputField label="Description" value={c.description} onChange={v => set('description', v)} textarea />
          <InputField label="CTA Text" value={c.callNow} onChange={v => set('callNow', v)} />
        </div>
      )}

      {section.type === "research-overview" && (
        <div className="grid gap-4">
          <InputField label="Heading" value={c.heading} onChange={v => set('heading', v)} />
          <InputField label="Text Paragraph 1" value={c.text1} onChange={v => set('text1', v)} textarea />
          <InputField label="Text Paragraph 2" value={c.text2} onChange={v => set('text2', v)} textarea />
          <InputField label="Finding Heading" value={c.findingHeading} onChange={v => set('findingHeading', v)} />
          <InputField label="Finding Subheading" value={c.findingSubheading} onChange={v => set('findingSubheading', v)} />
          <InputField label="Info Box Text" value={c.info} onChange={v => set('info', v)} textarea />
          
          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Legend Labels</h4>
            <div className="grid grid-cols-3 gap-4">
              <InputField label="Kids" value={c.legend?.kids} onChange={v => set('legend.kids', v)} />
              <InputField label="Parents" value={c.legend?.parents} onChange={v => set('legend.parents', v)} />
              <InputField label="Youth" value={c.legend?.youth} onChange={v => set('legend.youth', v)} />
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Chart Data</h4>
            <div className="space-y-4">
              {(c.chart || []).map((data: any, i: number) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg grid grid-cols-4 gap-3">
                  <div className="col-span-1">
                    <InputField label="Label" value={data.label} onChange={v => {
                      const newChart = [...c.chart];
                      newChart[i] = { ...data, label: v };
                      set('chart', newChart);
                    }} />
                  </div>
                  <InputField label="Kids %" value={data.kids} onChange={v => {
                    const newChart = [...c.chart];
                    newChart[i] = { ...data, kids: parseInt(v) || 0 };
                    set('chart', newChart);
                  }} />
                  <InputField label="Parents %" value={data.parents} onChange={v => {
                    const newChart = [...c.chart];
                    newChart[i] = { ...data, parents: parseInt(v) || 0 };
                    set('chart', newChart);
                  }} />
                  <InputField label="Youth %" value={data.youth} onChange={v => {
                    const newChart = [...c.chart];
                    newChart[i] = { ...data, youth: parseInt(v) || 0 };
                    set('chart', newChart);
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {section.type === "research-problem-framing" && (
        <div className="grid gap-4">
          <InputField label="Heading" value={c.heading} onChange={v => set('heading', v)} />
          <InputField label="Description" value={c.description} onChange={v => set('description', v)} textarea />
          
          <div className="grid grid-cols-2 gap-4">
            {['who', 'what', 'when', 'why'].map((key) => (
              <div key={key} className="p-4 bg-white rounded-xl border border-gray-100 space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase">{key} Card</h4>
                <InputField label="Title" value={c.cards?.[key]?.title} onChange={v => set(`cards.${key}.title`, v)} />
                <InputField label="Text" value={c.cards?.[key]?.text} onChange={v => set(`cards.${key}.text`, v)} textarea />
              </div>
            ))}
          </div>
        </div>
      )}

      {section.type === "research-user-research" && (
        <div className="grid gap-4">
          <InputField label="Heading" value={c.heading} onChange={v => set('heading', v)} />
          <InputField label="Description" value={c.description} onChange={v => set('description', v)} textarea />
          <InputField label="Demographics Title" value={c.demographics} onChange={v => set('demographics', v)} />
          <InputField label="Total Respondents Label" value={c.totalRespondents} onChange={v => set('totalRespondents', v)} />
          <InputField label="Peoples Label" value={c.peoples} onChange={v => set('peoples', v)} />
          
          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Legend Labels</h4>
            <div className="grid grid-cols-3 gap-4">
              <InputField label="Kids" value={c.legend?.kids} onChange={v => set('legend.kids', v)} />
              <InputField label="Parents" value={c.legend?.parents} onChange={v => set('legend.parents', v)} />
              <InputField label="Youth" value={c.legend?.youth} onChange={v => set('legend.youth', v)} />
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Donut Chart Percentages</h4>
            <div className="grid grid-cols-3 gap-4">
              <InputField label="Kids %" value={c.percentages?.kids} onChange={v => set('percentages.kids', parseInt(v) || 0)} />
              <InputField label="Parents %" value={c.percentages?.parents} onChange={v => set('percentages.parents', parseInt(v) || 0)} />
              <InputField label="Youth %" value={c.percentages?.youth} onChange={v => set('percentages.youth', parseInt(v) || 0)} />
            </div>
            <p className="text-[10px] text-gray-400 italic">Note: Ensure total adds up to 100% for best results.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-4">
            <h4 className="text-sm font-bold text-gray-700">Newsletter CTA</h4>
            <InputField label="CTA Text" value={c.cta} onChange={v => set('cta', v)} textarea />
            <InputField label="Email Placeholder" value={c.emailPlaceholder} onChange={v => set('emailPlaceholder', v)} />
          </div>
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange, textarea }: { label: string; value: any; onChange: (v: string) => void; textarea?: boolean }) {
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
