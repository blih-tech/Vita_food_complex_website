"use client";

import { useEffect, useState, useRef } from "react";
import { Newspaper, Plus, Pencil, Trash2, X, Upload, Loader2 } from "lucide-react";
import { NewsCategory, NewsItem, NewsPayload, newsApi } from "@/lib/newsApi";
import api from "@/lib/api";
import RichTextEditor from "@/components/RichTextEditor";

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

const categories: NewsCategory[] = [
  "news",
  "updates",
  "market-insights",
  "company-news",
  "product-updates",
];

const defaultForm: NewsPayload = {
  slug: "",
  title: { en: "", am: "" },
  summary: { en: "", am: "" },
  content: { en: "", am: "" },
  category: "news",
  coverImage: "",
  readTime: "5 min read",
  publishedAt: new Date().toISOString(),
  isPublished: false,
};

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState<NewsPayload>(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const imgRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    setLoading(true);
    try {
      setItems(await newsApi.list());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(defaultForm);
    setOpen(true);
  };

  const openEdit = (item: NewsItem) => {
    setEditing(item);
    setForm({
      slug: item.slug,
      title: item.title,
      summary: item.summary,
      content: item.content,
      category: item.category,
      coverImage: item.coverImage,
      readTime: item.readTime,
      publishedAt: item.publishedAt,
      isPublished: item.isPublished,
    });
    setOpen(true);
  };

  const uploadImage = async (file: File) => {
    setUploadingImg(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const { data } = await api.post('/applications/upload-cv', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setForm(f => ({ ...f, coverImage: data.url }));
    } finally {
      setUploadingImg(false);
    }
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      if (editing) await newsApi.update(editing._id, form);
      else await newsApi.create(form);
      setOpen(false);
      await load();
    } finally {
      setSubmitting(false);
    }
  };

  const remove = async (id: string) => {
    await newsApi.remove(id);
    await load();
  };

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">News</h1>
        <button onClick={openCreate} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold">
          <Plus size={14} /> Add Article
        </button>
      </header>
      <div className="p-4 sm:p-6 lg:p-8">
        {loading ? (
          <div className="py-16 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" /></div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-gray-100">
                <tr>
                  {["Article", "Category", "Published", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-b border-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Newspaper size={16} className="text-[#23B349]" />
                        <div>
                          <p className="text-sm font-semibold text-[#333733]">{item.title.en}</p>
                          <p className="text-xs text-gray-400">{item.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">{item.category}</td>
                    <td className="px-5 py-4 text-sm text-gray-500">{new Date(item.publishedAt).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.isPublished ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
                        {item.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(item)} className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center"><Pencil size={14} /></button>
                        <button onClick={() => remove(item._id)} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">{editing ? "Edit News" : "Add News"}</h3>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><X size={14} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputCls} placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
              <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as NewsCategory })}>
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
              <input className={inputCls} placeholder="Title (EN)" value={form.title.en} onChange={(e) => setForm({ ...form, title: { ...form.title, en: e.target.value } })} />
              <input className={inputCls} placeholder="Title (AM)" value={form.title.am} onChange={(e) => setForm({ ...form, title: { ...form.title, am: e.target.value } })} />
              <input className={inputCls} placeholder="Summary (EN)" value={form.summary.en} onChange={(e) => setForm({ ...form, summary: { ...form.summary, en: e.target.value } })} />
              <input className={inputCls} placeholder="Summary (AM)" value={form.summary.am} onChange={(e) => setForm({ ...form, summary: { ...form.summary, am: e.target.value } })} />
              <div className="md:col-span-2 flex gap-2 items-center">
                <input className={inputCls} placeholder="Cover Image URL" value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} />
                <button type="button" onClick={() => imgRef.current?.click()} disabled={uploadingImg}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm hover:bg-gray-200 disabled:opacity-60 transition-colors">
                  {uploadingImg ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                  {uploadingImg ? 'Uploading…' : 'Upload'}
                </button>
                <input ref={imgRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f); }} />
              </div>
              {form.coverImage && (
                <div className="md:col-span-2 relative h-32 rounded-xl overflow-hidden border border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={form.coverImage} alt="cover preview" className="w-full h-full object-cover" />
                </div>
              )}
              <input className={inputCls} placeholder="Read Time" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} />
              <input className={inputCls} type="datetime-local" value={form.publishedAt.slice(0, 16)} onChange={(e) => setForm({ ...form, publishedAt: new Date(e.target.value).toISOString() })} />
              <label className="flex items-center gap-2 text-sm font-medium text-[#333733]">
                <input type="checkbox" checked={form.isPublished ?? false} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })} />
                Published
              </label>
              <div className="md:col-span-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Content (English)</p>
                <RichTextEditor
                  value={form.content.en}
                  onChange={(html) => setForm(f => ({ ...f, content: { ...f.content, en: html } }))}
                  placeholder="Write the full article content in English…"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Content (Amharic)</p>
                <RichTextEditor
                  value={form.content.am}
                  onChange={(html) => setForm(f => ({ ...f, content: { ...f.content, am: html } }))}
                  placeholder="ሙሉ የጽሑፉን ይዘት በአማርኛ ይፃፉ…"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm">Cancel</button>
              <button onClick={submit} disabled={submitting} className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70">
                {submitting ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
