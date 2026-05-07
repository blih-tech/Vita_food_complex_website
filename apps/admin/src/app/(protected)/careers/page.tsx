"use client";

import { useEffect, useState } from "react";
import { Briefcase, Plus, Pencil, Trash2, X } from "lucide-react";
import { CareerItem, CareerPayload, LocalizedText, careersApi } from "@/lib/careersApi";

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

const blankLocalized = (): LocalizedText => ({ en: "", am: "" });

function parseLocalizedList(value: string): LocalizedText[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [en = "", am = ""] = line.split("|");
      return { en: en.trim(), am: am.trim() };
    });
}

function stringifyLocalizedList(values: LocalizedText[] = []) {
  return values.map((v) => `${v.en} | ${v.am}`).join("\n");
}

const defaultForm: CareerPayload = {
  id: "",
  title: blankLocalized(),
  location: blankLocalized(),
  type: blankLocalized(),
  department: blankLocalized(),
  summary: blankLocalized(),
  reportsTo: blankLocalized(),
  responsibilities: [],
  requirements: [],
  benefits: [],
  active: true,
};

export default function CareersPage() {
  const [items, setItems] = useState<CareerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CareerItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [benefitsText, setBenefitsText] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      setItems(await careersApi.list());
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
    setResponsibilitiesText("");
    setRequirementsText("");
    setBenefitsText("");
    setOpen(true);
  };

  const openEdit = (item: CareerItem) => {
    setEditing(item);
    setForm(item);
    setResponsibilitiesText(stringifyLocalizedList(item.responsibilities));
    setRequirementsText(stringifyLocalizedList(item.requirements));
    setBenefitsText(stringifyLocalizedList(item.benefits));
    setOpen(true);
  };

  const submit = async () => {
    const payload: CareerPayload = {
      ...form,
      responsibilities: parseLocalizedList(responsibilitiesText),
      requirements: parseLocalizedList(requirementsText),
      benefits: parseLocalizedList(benefitsText),
    };
    setSubmitting(true);
    try {
      if (editing) await careersApi.update(editing.id, payload);
      else await careersApi.create(payload);
      setOpen(false);
      await load();
    } finally {
      setSubmitting(false);
    }
  };

  const remove = async (id: string) => {
    await careersApi.remove(id);
    await load();
  };

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Careers</h1>
        <button onClick={openCreate} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold">
          <Plus size={14} /> Add Role
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
                  {["Role", "Location", "Department", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-b border-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Briefcase size={16} className="text-[#23B349]" />
                        <div>
                          <p className="text-sm font-semibold text-[#333733]">{item.title.en}</p>
                          <p className="text-xs text-gray-400">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">{item.location.en}</td>
                    <td className="px-5 py-4 text-sm text-gray-500">{item.department.en}</td>
                    <td className="px-5 py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.active ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
                        {item.active ? "Active" : "Inactive"}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">{editing ? "Edit Role" : "Add Role"}</h3>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><X size={14} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputCls} placeholder="Role ID" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
              <label className="flex items-center gap-2 text-sm font-medium text-[#333733]">
                <input type="checkbox" checked={form.active ?? true} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                Active
              </label>
              <input className={inputCls} placeholder="Title (EN)" value={form.title.en} onChange={(e) => setForm({ ...form, title: { ...form.title, en: e.target.value } })} />
              <input className={inputCls} placeholder="Title (AM)" value={form.title.am} onChange={(e) => setForm({ ...form, title: { ...form.title, am: e.target.value } })} />
              <input className={inputCls} placeholder="Location (EN)" value={form.location.en} onChange={(e) => setForm({ ...form, location: { ...form.location, en: e.target.value } })} />
              <input className={inputCls} placeholder="Location (AM)" value={form.location.am} onChange={(e) => setForm({ ...form, location: { ...form.location, am: e.target.value } })} />
              <input className={inputCls} placeholder="Type (EN)" value={form.type.en} onChange={(e) => setForm({ ...form, type: { ...form.type, en: e.target.value } })} />
              <input className={inputCls} placeholder="Type (AM)" value={form.type.am} onChange={(e) => setForm({ ...form, type: { ...form.type, am: e.target.value } })} />
              <input className={inputCls} placeholder="Department (EN)" value={form.department.en} onChange={(e) => setForm({ ...form, department: { ...form.department, en: e.target.value } })} />
              <input className={inputCls} placeholder="Department (AM)" value={form.department.am} onChange={(e) => setForm({ ...form, department: { ...form.department, am: e.target.value } })} />
              <input className={inputCls} placeholder="Reports To (EN)" value={form.reportsTo?.en || ""} onChange={(e) => setForm({ ...form, reportsTo: { ...(form.reportsTo || blankLocalized()), en: e.target.value } })} />
              <input className={inputCls} placeholder="Reports To (AM)" value={form.reportsTo?.am || ""} onChange={(e) => setForm({ ...form, reportsTo: { ...(form.reportsTo || blankLocalized()), am: e.target.value } })} />
              <input className={inputCls} placeholder="Summary (EN)" value={form.summary.en} onChange={(e) => setForm({ ...form, summary: { ...form.summary, en: e.target.value } })} />
              <input className={inputCls} placeholder="Summary (AM)" value={form.summary.am} onChange={(e) => setForm({ ...form, summary: { ...form.summary, am: e.target.value } })} />
            </div>
            <div className="mt-4 space-y-3">
              <textarea className={inputCls + " min-h-24"} placeholder="Responsibilities lines: English | Amharic" value={responsibilitiesText} onChange={(e) => setResponsibilitiesText(e.target.value)} />
              <textarea className={inputCls + " min-h-24"} placeholder="Requirements lines: English | Amharic" value={requirementsText} onChange={(e) => setRequirementsText(e.target.value)} />
              <textarea className={inputCls + " min-h-24"} placeholder="Benefits lines: English | Amharic" value={benefitsText} onChange={(e) => setBenefitsText(e.target.value)} />
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
