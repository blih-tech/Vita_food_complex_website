"use client";

import { useEffect, useState } from "react";
import { Package, Plus, Pencil, Trash2, X } from "lucide-react";
import { ProductItem, ProductPayload, productsApi } from "@/lib/productsApi";

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

function ProductModal({
  title,
  value,
  onChange,
  onClose,
  onSubmit,
  submitting,
}: {
  title: string;
  value: ProductPayload;
  onChange: (next: ProductPayload) => void;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <X size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className={inputCls} placeholder="ID" value={value.id} onChange={(e) => onChange({ ...value, id: e.target.value })} />
          <select className={inputCls} value={value.category} onChange={(e) => onChange({ ...value, category: e.target.value as ProductPayload["category"] })}>
            <option value="Biscuit">Biscuit</option>
            <option value="Flour">Flour</option>
          </select>
          <input className={inputCls} placeholder="Name (EN)" value={value.name.en} onChange={(e) => onChange({ ...value, name: { ...value.name, en: e.target.value } })} />
          <input className={inputCls} placeholder="Name (AM)" value={value.name.am} onChange={(e) => onChange({ ...value, name: { ...value.name, am: e.target.value } })} />
          <input className={inputCls} placeholder="Image URL" value={value.media.image} onChange={(e) => onChange({ ...value, media: { ...value.media, image: e.target.value } })} />
          <input className={inputCls} placeholder="Gallery URLs (comma separated)" value={(value.media.gallery || []).join(",")} onChange={(e) => onChange({ ...value, media: { ...value.media, gallery: e.target.value.split(",").map((v) => v.trim()).filter(Boolean) } })} />
          <input className={inputCls} placeholder="Description (EN)" value={value.content.description.en} onChange={(e) => onChange({ ...value, content: { description: { ...value.content.description, en: e.target.value } } })} />
          <input className={inputCls} placeholder="Description (AM)" value={value.content.description.am} onChange={(e) => onChange({ ...value, content: { description: { ...value.content.description, am: e.target.value } } })} />
          <input className={inputCls} placeholder="BG Color (#hex)" value={value.ui.bgColor} onChange={(e) => onChange({ ...value, ui: { ...value.ui, bgColor: e.target.value } })} />
          <input className={inputCls} placeholder="Text Color (#hex)" value={value.ui.textColor} onChange={(e) => onChange({ ...value, ui: { ...value.ui, textColor: e.target.value } })} />
          <input className={inputCls} placeholder="Name Color (#hex)" value={value.ui.nameColor} onChange={(e) => onChange({ ...value, ui: { ...value.ui, nameColor: e.target.value } })} />
          <label className="flex items-center gap-2 text-sm font-medium text-[#333733]">
            <input type="checkbox" checked={value.available ?? true} onChange={(e) => onChange({ ...value, available: e.target.checked })} />
            Available
          </label>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm">Cancel</button>
          <button onClick={onSubmit} disabled={submitting} className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70">
            {submitting ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

const defaultForm: ProductPayload = {
  id: "",
  name: { en: "", am: "" },
  category: "Biscuit",
  media: { image: "", gallery: [] },
  ui: { bgColor: "#FFFFFF", textColor: "#333333", nameColor: "#333333" },
  content: { description: { en: "", am: "" } },
  available: true,
};

export default function ProductsPage() {
  const [items, setItems] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<ProductPayload>(defaultForm);
  const [editing, setEditing] = useState<ProductItem | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      setItems(await productsApi.list());
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

  const openEdit = (item: ProductItem) => {
    setEditing(item);
    setForm({
      id: item.id,
      name: item.name,
      category: item.category,
      media: item.media,
      ui: item.ui,
      content: item.content,
      available: item.available,
    });
    setOpen(true);
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      if (editing) await productsApi.update(editing.id, form);
      else await productsApi.create(form);
      setOpen(false);
      await load();
    } finally {
      setSubmitting(false);
    }
  };

  const remove = async (id: string) => {
    await productsApi.remove(id);
    await load();
  };

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Products</h1>
        <button onClick={openCreate} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold">
          <Plus size={14} /> Add Product
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
                  {["Product", "Category", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-b border-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Package size={16} className="text-[#23B349]" />
                        <div>
                          <p className="text-sm font-semibold text-[#333733]">{item.name.en}</p>
                          <p className="text-xs text-gray-400">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">{item.category}</td>
                    <td className="px-5 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.available ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
                        {item.available ? "Available" : "Unavailable"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => openEdit(item)} className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center"><Pencil size={14} /></button>
                        <button onClick={() => remove(item.id)} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"><Trash2 size={14} /></button>
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
        <ProductModal
          title={editing ? "Edit Product" : "Add Product"}
          value={form}
          onChange={setForm}
          onClose={() => setOpen(false)}
          onSubmit={submit}
          submitting={submitting}
        />
      )}
    </>
  );
}
