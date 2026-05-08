"use client";

import { useState, useEffect, use } from 'react';
import api from '@/lib/api';
import { Save, ArrowLeft, Plus, Trash2, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PageEditor({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeLang, setActiveLang] = useState<'en' | 'am'>('en');
  const router = useRouter();

  useEffect(() => {
    if (params.slug === 'home')  { router.replace('/home');  return; }
    if (params.slug === 'about') { router.replace('/about'); return; }
    if (params.slug === 'become-distributor') { router.replace('/become-distributor'); return; }
    fetchPage();
  }, [params.slug]);

  const fetchPage = async () => {
    try {
      const response = await api.get(`/content/pages/${params.slug}`);
      setPage(response.data);
    } catch (error) {
      console.error('Failed to fetch page:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put(`/content/pages/${params.slug}`, page);
      alert('Page saved successfully!');
    } catch (error) {
      console.error('Failed to save page:', error);
      alert('Failed to save page.');
    } finally {
      setSaving(false);
    }
  };

  const updateSectionContent = (sectionIndex: number, field: string, value: any) => {
    const newPage = { ...page };
    const section = newPage.sections[sectionIndex];
    
    // Handle nested fields (e.g., "en.title")
    const fields = field.split('.');
    let current = section.content;
    for (let i = 0; i < fields.length - 1; i++) {
      if (!current[fields[i]]) current[fields[i]] = {};
      current = current[fields[i]];
    }
    current[fields[fields.length - 1]] = value;
    
    setPage(newPage);
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23B349]"></div>
      </div>
    );
  }

  if (!page) return <div>Page not found</div>;

  return (
    <>
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/pages" className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#404040]">Edit Page: {page.title.en}</h1>
            <p className="text-sm text-gray-500">Slug: /{page.slug}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setActiveLang('en')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeLang === 'en' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-500'}`}
            >
              English
            </button>
            <button 
              onClick={() => setActiveLang('am')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeLang === 'am' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-500'}`}
            >
              Amharic
            </button>
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="bg-[#23B349] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1fa041] transition-all disabled:opacity-70"
          >
            <Save size={20} />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </header>

      <div className="p-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          {page.sections.map((section: any, index: number) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-[#23B349] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-[#404040]">{section.type}</h3>
                  <span className="text-xs text-gray-400 font-mono">#{section.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-all">
                    <ChevronUp size={18} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-all">
                    <ChevronDown size={18} />
                  </button>
                  <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all ml-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Dynamic fields based on section type */}
                {section.type === 'HeroSection' && (
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Heading Part 1 ({activeLang.toUpperCase()})
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-[#23B349] focus:border-[#23B349] outline-none"
                        value={section.content[activeLang]?.stylishWayPart1 || ''}
                        onChange={(e) => updateSectionContent(index, `${activeLang}.stylishWayPart1`, e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Heading Part 2 ({activeLang.toUpperCase()})
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-[#23B349] focus:border-[#23B349] outline-none"
                        value={section.content[activeLang]?.stylishWayPart2 || ''}
                        onChange={(e) => updateSectionContent(index, `${activeLang}.stylishWayPart2`, e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Description ({activeLang.toUpperCase()})
                      </label>
                      <textarea 
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-[#23B349] focus:border-[#23B349] outline-none"
                        value={section.content[activeLang]?.description || ''}
                        onChange={(e) => updateSectionContent(index, `${activeLang}.description`, e.target.value)}
                      />
                    </div>
                  </div>
                )}
                
                {/* Fallback for unknown section types */}
                {!['HeroSection'].includes(section.type) && (
                  <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl text-yellow-700 text-sm">
                    Editor for <strong>{section.type}</strong> is not yet implemented. 
                    You can still edit the raw JSON if needed (coming soon).
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold flex items-center justify-center gap-2 hover:border-[#23B349] hover:text-[#23B349] transition-all group">
            <Plus size={24} className="group-hover:scale-110 transition-transform" />
            Add New Section
          </button>
        </div>
      </div>
    </>
  );
}
