"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Star, Play, Users, Building2, Award, ShoppingBag,
  ArrowLeft, Loader2, Save, Globe, ChevronDown, ChevronUp,
  Plus, Trash2, ImagePlus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

// ── Components ──────────────────────────────────────────────────────────────

function InputField({ label, value, onChange, multiline = false }: { 
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean 
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
      {multiline ? (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#23B349]/20 focus:border-[#23B349] outline-none transition-all resize-none"
        />
      ) : (
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#23B349]/20 focus:border-[#23B349] outline-none transition-all"
        />
      )}
    </div>
  );
}

function ImageUploadField({ label, value, onChange }: { 
  label: string; value: string; onChange: (url: string) => void 
}) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await api.post("/content/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onChange(data.url);
      toast.success("Image uploaded!");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
      <div className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 bg-white shrink-0">
          {value ? (
            <Image src={value} alt="preview" fill className="object-cover" unoptimized />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <ImagePlus size={24} />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer transition-all">
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <ImagePlus size={16} />}
            {uploading ? "Uploading..." : "Choose Image"}
            <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} accept="image/*" />
          </label>
          {value && <p className="mt-1.5 text-[10px] text-gray-400 truncate">{value}</p>}
        </div>
      </div>
    </div>
  );
}

// ── Main Editor ─────────────────────────────────────────────────────────────

const SECTION_META: Record<string, { name: string; icon: any; description: string }> = {
  "wcv-hero":             { name: "Hero Banner",       icon: Star,      description: "Main headline, subtitle, and CTA buttons" },
  "wcv-video":            { name: "Video Showcase",    icon: Play,      description: "Marquee text and video assets" },
  "wcv-who-are-we":       { name: "Who Are We",        icon: Users,     description: "Section headlines, intro paragraph, and feature cards" },
  "wcv-sister-companies": { name: "Sister Companies",  icon: Building2, description: "Section title and company details" },
  "wcv-qa":               { name: "Quality Assurance", icon: Award,     description: "Caption, title, and certifications" },
  "wcv-products":         { name: "Our Products",      icon: ShoppingBag, description: "Section title and product cards" },
};

const COMPANY_KEYS = [
  "longTea", "belayabMotors", "belayabCable", "belayabFoods", "goldenTulip",
  "belayabDelivery", "aradaCoffee", "lionstone", "belayabPharmaceuticals",
  "huajiaInternationalTrade", "belayabPoultryAndFeed", "belayabGeepas", "lewisRetailsSupermarket",
];

export default function WhyChooseVitaEditor() {
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeLang, setActiveLang] = useState<"en" | "am">("en");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    api.get("/content/pages/why-choose-vita")
      .then((res) => setPage(res.data))
      .catch(() => toast.error("Failed to load page data"))
      .finally(() => setLoading(false));
  }, []);

  const set = useCallback((sectionId: string, path: string, value: any) => {
    setPage((prev: any) => {
      if (!prev) return prev;
      const sections = prev.sections.map((s: any) => {
        if (s.id !== sectionId) return s;
        const newContent = { ...s.content };
        const langContent = { ...(newContent[activeLang] || {}) };
        
        const keys = path.split('.');
        let current = langContent;
        for (let i = 0; i < keys.length - 1; i++) {
          current[keys[i]] = { ...(current[keys[i]] || {}) };
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        
        newContent[activeLang] = langContent;
        return { ...s, content: newContent };
      });
      return { ...prev, sections };
    });
  }, [activeLang]);

  const setBoth = useCallback((sectionId: string, path: string, value: any) => {
    setPage((prev: any) => {
      if (!prev) return prev;
      const sections = prev.sections.map((s: any) => {
        if (s.id !== sectionId) return s;
        const newContent = { ...s.content };
        
        ["en", "am"].forEach(lang => {
          const langContent = { ...(newContent[lang] || {}) };
          const keys = path.split('.');
          let current = langContent;
          for (let i = 0; i < keys.length - 1; i++) {
            current[keys[i]] = { ...(current[keys[i]] || {}) };
            current = current[keys[i]];
          }
          current[keys[keys.length - 1]] = value;
          newContent[lang] = langContent;
        });
        
        return { ...s, content: newContent };
      });
      return { ...prev, sections };
    });
  }, []);

  const handleSave = async () => {
    if (!page) return;
    setSaving(true);
    try {
      await api.put("/content/pages/why-choose-vita", page);
      toast.success("Page saved successfully!");
    } catch (error) {
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link href="/pages" className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Why Choose Vita</h1>
            <p className="text-xs text-gray-500">Manage all sections of the Why Choose Vita page</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {(["en", "am"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setActiveLang(l)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 ${activeLang === l ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500"}`}
              >
                <Globe size={14} />
                {l === "en" ? "English" : "Amharic"}
              </button>
            ))}
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#23B349] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1fa041] transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8 px-4 space-y-6">
        {page.sections.map((section: any) => {
          const meta = SECTION_META[section.type];
          const Icon = meta?.icon || Star;
          const isExpanded = expanded[section.id];
          const c = section.content?.[activeLang] || {};

          return (
            <div key={section.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setExpanded(prev => ({ ...prev, [section.id]: !isExpanded }))}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-[#23B349]/10 flex items-center justify-center text-[#23B349]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{meta?.name || section.type}</h3>
                    <p className="text-xs text-gray-500">{meta?.description}</p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 space-y-6">
                  {/* Hero Section */}
                  {section.type === "wcv-hero" && (
                    <div className="grid gap-4">
                      <InputField label="Title" value={c.title} onChange={v => set(section.id, 'title', v)} multiline />
                      <InputField label="Description" value={c.description} onChange={v => set(section.id, 'description', v)} multiline />
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Explore Products CTA" value={c.exploreProducts} onChange={v => set(section.id, 'exploreProducts', v)} />
                        <InputField label="Contact Us CTA" value={c.contactUs} onChange={v => set(section.id, 'contactUs', v)} />
                      </div>
                    </div>
                  )}

                  {/* Video Section */}
                  {section.type === "wcv-video" && (
                    <div className="grid gap-4">
                      <InputField label="Marquee Text" value={c.marqueeText} onChange={v => set(section.id, 'marqueeText', v)} />
                      <InputField label="Connecting Text (for marquee)" value={c.connecting} onChange={v => set(section.id, 'connecting', v)} />
                      <InputField label="Video Alt Text" value={c.videoAlt} onChange={v => set(section.id, 'videoAlt', v)} />
                      <ImageUploadField label="Video Thumbnail" value={c.videoThumbnail} onChange={v => setBoth(section.id, 'videoThumbnail', v)} />
                      <ImageUploadField label="Badge Image" value={c.badgeImage} onChange={v => setBoth(section.id, 'badgeImage', v)} />
                    </div>
                  )}

                  {/* Who Are We Section */}
                  {section.type === "wcv-who-are-we" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Headline Who" value={c.headlineWho} onChange={v => set(section.id, 'headlineWho', v)} />
                        <InputField label="Headline Are We" value={c.headlineAreWe} onChange={v => set(section.id, 'headlineAreWe', v)} />
                      </div>
                      <InputField label="Intro Text" value={c.fmcgIntro} onChange={v => set(section.id, 'fmcgIntro', v)} multiline />
                      <InputField label="More About CTA" value={c.moreAboutCta} onChange={v => set(section.id, 'moreAboutCta', v)} />
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-700">Feature Cards</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {(c.featureCards || []).map((card: any, idx: number) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
                              <p className="text-xs font-bold text-gray-400 uppercase">Card {idx + 1}</p>
                              <InputField label="Title" value={card.title} onChange={v => {
                                const newCards = [...c.featureCards];
                                newCards[idx] = { ...card, title: v };
                                set(section.id, 'featureCards', newCards);
                              }} />
                              <InputField label="Description" value={card.description} onChange={v => {
                                const newCards = [...c.featureCards];
                                newCards[idx] = { ...card, description: v };
                                set(section.id, 'featureCards', newCards);
                              }} multiline />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sister Companies Section */}
                  {section.type === "wcv-sister-companies" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Title" value={c.title} onChange={v => set(section.id, 'title', v)} />
                        <InputField label="See More Text" value={c.seeMore} onChange={v => set(section.id, 'seeMore', v)} />
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-700">Companies</h4>
                        <div className="grid gap-4">
                          {COMPANY_KEYS.map((key) => {
                            const company = c.companies?.[key] || {};
                            return (
                              <div key={key} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                                <p className="text-xs font-bold text-gray-400 uppercase">{key}</p>
                                <div className="grid grid-cols-2 gap-4">
                                  <InputField label="Name" value={company.name} onChange={v => set(section.id, `companies.${key}.name`, v)} />
                                  <InputField label="Category" value={company.category} onChange={v => set(section.id, `companies.${key}.category`, v)} />
                                </div>
                                <InputField label="Website Link (href)" value={company.href} onChange={v => setBoth(section.id, `companies.${key}.href`, v)} />
                                <InputField label="Description" value={company.description} onChange={v => set(section.id, `companies.${key}.description`, v)} multiline />
                                <ImageUploadField label="Company Logo" value={company.logoSrc} onChange={v => setBoth(section.id, `companies.${key}.logoSrc`, v)} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* QA Section */}
                  {section.type === "wcv-qa" && (
                    <div className="space-y-6">
                      <InputField label="Caption" value={c.caption} onChange={v => set(section.id, 'caption', v)} />
                      <InputField label="Title" value={c.title} onChange={v => set(section.id, 'title', v)} />
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-gray-700">Certifications</h4>
                          <button
                            onClick={() => {
                              const newCerts = [...(c.certs || []), { name: "", src: "" }];
                              setBoth(section.id, 'certs', newCerts);
                            }}
                            className="text-[#23B349] hover:bg-[#23B349]/10 p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold"
                          >
                            <Plus size={16} /> Add Cert
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {(c.certs || []).map((cert: any, idx: number) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3 relative">
                              <button
                                onClick={() => {
                                  const newCerts = c.certs.filter((_: any, i: number) => i !== idx);
                                  setBoth(section.id, 'certs', newCerts);
                                }}
                                className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                              >
                                <Trash2 size={14} />
                              </button>
                              <InputField label="Name" value={cert.name} onChange={v => {
                                const newCerts = [...c.certs];
                                newCerts[idx] = { ...cert, name: v };
                                setBoth(section.id, 'certs', newCerts);
                              }} />
                              <ImageUploadField label="Logo" value={cert.src} onChange={v => {
                                const newCerts = [...c.certs];
                                newCerts[idx] = { ...cert, src: v };
                                setBoth(section.id, 'certs', newCerts);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Products Section */}
                  {section.type === "wcv-products" && (
                    <div className="space-y-6">
                      <InputField label="Title" value={c.title} onChange={v => set(section.id, 'title', v)} />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-gray-700">Products</h4>
                          <button
                            onClick={() => {
                              const newProducts = [...(c.products || []), { title: "", description: "", image: "", href: "" }];
                              setBoth(section.id, 'products', newProducts);
                            }}
                            className="text-[#23B349] hover:bg-[#23B349]/10 p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold"
                          >
                            <Plus size={16} /> Add Product
                          </button>
                        </div>
                        <div className="grid gap-4">
                          {(c.products || []).map((prod: any, idx: number) => (
                            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3 relative">
                              <button
                                onClick={() => {
                                  const newProducts = c.products.filter((_: any, i: number) => i !== idx);
                                  setBoth(section.id, 'products', newProducts);
                                }}
                                className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                              >
                                <Trash2 size={14} />
                              </button>
                              <div className="grid grid-cols-2 gap-4">
                                <InputField label="Title" value={prod.title} onChange={v => {
                                  const newProds = [...c.products];
                                  newProds[idx] = { ...prod, title: v };
                                  set(section.id, 'products', newProds);
                                }} />
                                <InputField label="Link (href)" value={prod.href} onChange={v => {
                                  const newProds = [...c.products];
                                  newProds[idx] = { ...prod, href: v };
                                  setBoth(section.id, 'products', newProds);
                                }} />
                              </div>
                              <InputField label="Description" value={prod.description} onChange={v => {
                                const newProds = [...c.products];
                                newProds[idx] = { ...prod, description: v };
                                set(section.id, 'products', newProds);
                              }} multiline />
                              <ImageUploadField label="Image" value={prod.image} onChange={v => {
                                const newProds = [...c.products];
                                newProds[idx] = { ...prod, image: v };
                                setBoth(section.id, 'products', newProds);
                              }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}
