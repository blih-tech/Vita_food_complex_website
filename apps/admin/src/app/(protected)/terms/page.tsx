"use client";

import { useEffect, useState, useCallback } from "react";
import {
  DndContext, closestCenter, PointerSensor,
  KeyboardSensor, useSensor, useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext, sortableKeyboardCoordinates,
  verticalListSortingStrategy, arrayMove, useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  FileText, Plus, Pencil, Trash2, X, GripVertical,
  Eye, EyeOff, Save, Loader2, ChevronDown, ChevronUp,
} from "lucide-react";
import api from "@/lib/api";
import RichTextEditor from "@/components/RichTextEditor";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TermSection {
  _id: string;
  sectionId: string;
  title: { en: string; am: string };
  body: { en: string; am: string };
  position: number;
  isPublished: boolean;
}

interface SectionForm {
  sectionId: string;
  title: { en: string; am: string };
  body: { en: string; am: string };
  isPublished: boolean;
}

const EMPTY: SectionForm = {
  sectionId: "",
  title: { en: "", am: "" },
  body: { en: "", am: "" },
  isPublished: true,
};

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

// ─── Sortable Row ─────────────────────────────────────────────────────────────

function SortableRow({
  section,
  index,
  onEdit,
  onDelete,
  onToggle,
}: {
  section: TermSection;
  index: number;
  onEdit: (s: TermSection) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string, val: boolean) => void;
}) {
  const {
    attributes, listeners, setNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id: section._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : undefined,
  };

  // Strip HTML tags for preview
  const preview = section.body.en.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className="border-b border-gray-50 bg-white hover:bg-gray-50/50 transition-colors"
    >
      {/* Drag handle */}
      <td className="pl-4 pr-2 py-4 w-10">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-400 transition-colors touch-none"
          title="Drag to reorder"
        >
          <GripVertical size={16} />
        </button>
      </td>

      {/* Position */}
      <td className="px-3 py-4 w-12">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500">
          {index + 1}
        </span>
      </td>

      {/* Title */}
      <td className="px-5 py-4">
        <p className="text-sm font-semibold text-[#333733] line-clamp-1">{section.title.en}</p>
        <p className="text-xs text-gray-400 font-mono mt-0.5">#{section.sectionId}</p>
      </td>

      {/* Body preview */}
      <td className="px-5 py-4 hidden md:table-cell max-w-[380px]">
        <p className="text-sm text-gray-500 line-clamp-2">{preview}</p>
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <button
          onClick={() => onToggle(section._id, !section.isPublished)}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
            section.isPublished
              ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {section.isPublished ? <Eye size={11} /> : <EyeOff size={11} />}
          {section.isPublished ? "Published" : "Hidden"}
        </button>
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(section)}
            className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => onDelete(section._id)}
            className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  const [sections, setSections] = useState<TermSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<TermSection | null>(null);
  const [form, setForm] = useState<SectionForm>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [bodyTab, setBodyTab] = useState<"en" | "am">("en");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<TermSection[]>("/terms/admin/all");
      setSections(data);
    } catch { /* silently handle */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  // ── Drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setSections((prev) => {
      const oldIndex = prev.findIndex((s) => s._id === active.id);
      const newIndex = prev.findIndex((s) => s._id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
    setDirty(true);
  };

  const savePositions = async () => {
    setSaving(true);
    try {
      const updates = sections.map((s, i) => ({ id: s._id, position: i }));
      await api.put("/terms/positions", { updates });
      setDirty(false);
    } finally { setSaving(false); }
  };

  const togglePublish = async (id: string, val: boolean) => {
    await api.put(`/terms/${id}`, { isPublished: val });
    setSections((prev) => prev.map((s) => s._id === id ? { ...s, isPublished: val } : s));
  };

  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setBodyTab("en");
    setOpen(true);
  };

  const openEdit = (section: TermSection) => {
    setEditing(section);
    setForm({
      sectionId: section.sectionId,
      title: { ...section.title },
      body: { ...section.body },
      isPublished: section.isPublished,
    });
    setBodyTab("en");
    setOpen(true);
  };

  const submit = async () => {
    if (!form.title.en.trim() || !form.sectionId.trim()) return;
    setSubmitting(true);
    try {
      if (editing) {
        const { data } = await api.put<TermSection>(`/terms/${editing._id}`, form);
        setSections((prev) => prev.map((s) => s._id === editing._id ? data : s));
      } else {
        const { data } = await api.post<TermSection>("/terms", form);
        setSections((prev) => [...prev, data]);
      }
      setOpen(false);
    } finally { setSubmitting(false); }
  };

  const remove = async (id: string) => {
    await api.delete(`/terms/${id}`);
    setSections((prev) => prev.filter((s) => s._id !== id));
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Terms &amp; Conditions</h1>
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[#23B349]/10 text-[#23B349]">
            {sections.length} sections
          </span>
        </div>
        <div className="flex items-center gap-3">
          {dirty && (
            <button
              onClick={savePositions}
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-70 transition-colors"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              Save Order
            </button>
          )}
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold hover:bg-[#1fa041] transition-colors"
          >
            <Plus size={14} /> Add Section
          </button>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <span className="text-sm font-semibold text-[#333733]">{sections.length} sections</span>
          <div className="flex gap-2">
            {dirty && (
              <button onClick={savePositions} disabled={saving}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-amber-500 disabled:opacity-70">
                {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} Save Order
              </button>
            )}
            <button onClick={openCreate}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-white bg-[#23B349] text-xs font-semibold">
              <Plus size={12} /> Add Section
            </button>
          </div>
        </div>

        {sections.length > 0 && (
          <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-blue-50 rounded-xl text-sm text-blue-600">
            <GripVertical size={14} />
            Drag rows to reorder, then click <strong className="mx-1">Save Order</strong> to persist the changes to the live website.
          </div>
        )}

        {loading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={sections.map((s) => s._id)}
                strategy={verticalListSortingStrategy}
              >
                <table className="w-full">
                  <thead className="border-b border-gray-100">
                    <tr>
                      <th className="pl-4 pr-2 py-4 w-10" />
                      <th className="px-3 py-4 w-12 text-left text-xs uppercase tracking-wide text-gray-400">#</th>
                      {["Section Title", "Preview", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sections.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-16 text-center">
                          <FileText size={32} className="mx-auto text-gray-200 mb-3" />
                          <p className="text-gray-400 text-sm">No sections yet. Add the first one above.</p>
                        </td>
                      </tr>
                    ) : (
                      sections.map((section, index) => (
                        <SortableRow
                          key={section._id}
                          section={section}
                          index={index}
                          onEdit={openEdit}
                          onDelete={remove}
                          onToggle={togglePublish}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>

      {/* ── Create / Edit Modal ────────────────────────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">
                {editing ? "Edit Section" : "Add Section"}
              </h3>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {/* Section ID & Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Section ID (anchor)</p>
                  <input
                    className={inputCls}
                    placeholder="e.g. acceptance"
                    value={form.sectionId}
                    onChange={(e) => setForm((f) => ({ ...f, sectionId: e.target.value.toLowerCase().replace(/\s+/g, '-') }))}
                  />
                  <p className="text-xs text-gray-400 mt-1">Used as #anchor in the URL. No spaces.</p>
                </div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#333733] cursor-pointer self-center mt-4">
                  <input
                    type="checkbox"
                    checked={form.isPublished}
                    onChange={(e) => setForm((f) => ({ ...f, isPublished: e.target.checked }))}
                    className="w-4 h-4 accent-[#23B349]"
                  />
                  Publish (visible on website)
                </label>
              </div>

              {/* Title */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Section Title</p>
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">EN</span>
                    <input
                      className={inputCls + " pl-10"}
                      placeholder="e.g. 1. Acceptance of Terms"
                      value={form.title.en}
                      onChange={(e) => setForm((f) => ({ ...f, title: { ...f.title, en: e.target.value } }))}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">AM</span>
                    <input
                      className={inputCls + " pl-10"}
                      placeholder="ርዕስ በአማርኛ"
                      value={form.title.am}
                      onChange={(e) => setForm((f) => ({ ...f, title: { ...f.title, am: e.target.value } }))}
                      dir="auto"
                    />
                  </div>
                </div>
              </div>

              {/* Body — Rich Text with EN/AM tab switcher */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Section Body</p>
                  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setBodyTab("en")}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${bodyTab === "en" ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500"}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setBodyTab("am")}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${bodyTab === "am" ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500"}`}
                    >
                      አማርኛ
                    </button>
                  </div>
                </div>

                {bodyTab === "en" && (
                  <RichTextEditor
                    value={form.body.en}
                    onChange={(html) => setForm((f) => ({ ...f, body: { ...f.body, en: html } }))}
                    placeholder="Write section content in English…"
                  />
                )}
                {bodyTab === "am" && (
                  <RichTextEditor
                    value={form.body.am}
                    onChange={(html) => setForm((f) => ({ ...f, body: { ...f.body, am: html } }))}
                    placeholder="ይዘቱን በአማርኛ ይፃፉ…"
                  />
                )}
              </div>

              {(!form.title.en.trim() || !form.sectionId.trim()) && (
                <p className="text-xs text-red-400">Section ID and English title are required.</p>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={submitting || !form.title.en.trim() || !form.sectionId.trim()}
                className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70 hover:bg-[#1fa041] transition-colors flex items-center gap-2"
              >
                {submitting && <Loader2 size={14} className="animate-spin" />}
                {editing ? "Save Changes" : "Add Section"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
