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
  HelpCircle, Plus, Pencil, Trash2, X, GripVertical,
  Eye, EyeOff, Save, Loader2,
} from "lucide-react";
import api from "@/lib/api";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQ {
  _id: string;
  question: { en: string; am: string };
  answer: { en: string; am: string };
  position: number;
  isPublished: boolean;
}

interface FAQForm {
  question: { en: string; am: string };
  answer: { en: string; am: string };
  isPublished: boolean;
}

const EMPTY: FAQForm = {
  question: { en: "", am: "" },
  answer: { en: "", am: "" },
  isPublished: true,
};

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";
const textareaCls = inputCls + " min-h-[80px] resize-none";

// ─── Sortable Row ─────────────────────────────────────────────────────────────

function SortableRow({
  faq,
  index,
  onEdit,
  onDelete,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  onEdit: (faq: FAQ) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string, val: boolean) => void;
}) {
  const {
    attributes, listeners, setNodeRef,
    transform, transition, isDragging,
  } = useSortable({ id: faq._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : undefined,
  };

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

      {/* Question */}
      <td className="px-5 py-4">
        <p className="text-sm font-semibold text-[#333733] line-clamp-1">{faq.question.en}</p>
        {faq.question.am && (
          <p className="text-xs text-gray-400 line-clamp-1 mt-0.5" dir="auto">{faq.question.am}</p>
        )}
      </td>

      {/* Answer preview */}
      <td className="px-5 py-4 hidden md:table-cell max-w-[340px]">
        <p className="text-sm text-gray-500 line-clamp-2">{faq.answer.en}</p>
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <button
          onClick={() => onToggle(faq._id, !faq.isPublished)}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
            faq.isPublished
              ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {faq.isPublished ? <Eye size={11} /> : <EyeOff size={11} />}
          {faq.isPublished ? "Published" : "Hidden"}
        </button>
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(faq)}
            className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => onDelete(faq._id)}
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

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [form, setForm] = useState<FAQForm>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [dirty, setDirty] = useState(false); // positions changed but not saved

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<FAQ[]>("/faqs/admin/all");
      setFaqs(data);
    } catch { /* silently handle */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  // ── Drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setFaqs((prev) => {
      const oldIndex = prev.findIndex((f) => f._id === active.id);
      const newIndex = prev.findIndex((f) => f._id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
    setDirty(true);
  };

  // ── Save positions after drag
  const savePositions = async () => {
    setSaving(true);
    try {
      const updates = faqs.map((f, i) => ({ id: f._id, position: i }));
      await api.put("/faqs/positions", { updates });
      setDirty(false);
    } finally { setSaving(false); }
  };

  // ── Toggle publish
  const togglePublish = async (id: string, val: boolean) => {
    await api.put(`/faqs/${id}`, { isPublished: val });
    setFaqs((prev) => prev.map((f) => f._id === id ? { ...f, isPublished: val } : f));
  };

  // ── Open create/edit modal
  const openCreate = () => {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  };

  const openEdit = (faq: FAQ) => {
    setEditing(faq);
    setForm({
      question: { ...faq.question },
      answer: { ...faq.answer },
      isPublished: faq.isPublished,
    });
    setOpen(true);
  };

  // ── Submit
  const submit = async () => {
    if (!form.question.en.trim() || !form.answer.en.trim()) return;
    setSubmitting(true);
    try {
      if (editing) {
        const { data } = await api.put<FAQ>(`/faqs/${editing._id}`, form);
        setFaqs((prev) => prev.map((f) => f._id === editing._id ? data : f));
      } else {
        const { data } = await api.post<FAQ>("/faqs", form);
        setFaqs((prev) => [...prev, data]);
      }
      setOpen(false);
    } finally { setSubmitting(false); }
  };

  // ── Delete
  const remove = async (id: string) => {
    await api.delete(`/faqs/${id}`);
    setFaqs((prev) => prev.filter((f) => f._id !== id));
  };

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">FAQs</h1>
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[#23B349]/10 text-[#23B349]">
            {faqs.length} questions
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
            <Plus size={14} /> Add FAQ
          </button>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <span className="text-sm font-semibold text-[#333733]">{faqs.length} questions</span>
          <div className="flex gap-2">
            {dirty && (
              <button onClick={savePositions} disabled={saving}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-70">
                {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} Save Order
              </button>
            )}
            <button onClick={openCreate}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-white bg-[#23B349] text-xs font-semibold">
              <Plus size={12} /> Add FAQ
            </button>
          </div>
        </div>

        {/* Hint */}
        {faqs.length > 0 && (
          <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-blue-50 rounded-xl text-sm text-blue-600">
            <GripVertical size={14} />
            Drag rows to reorder, then click <strong className="mx-1">Save Order</strong> to persist the changes.
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
                items={faqs.map((f) => f._id)}
                strategy={verticalListSortingStrategy}
              >
                <table className="w-full">
                  <thead className="border-b border-gray-100">
                    <tr>
                      <th className="pl-4 pr-2 py-4 w-10" />
                      <th className="px-3 py-4 w-12 text-left text-xs uppercase tracking-wide text-gray-400">#</th>
                      {["Question", "Answer", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {faqs.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-16 text-center">
                          <HelpCircle size={32} className="mx-auto text-gray-200 mb-3" />
                          <p className="text-gray-400 text-sm">No FAQs yet. Add your first one above.</p>
                        </td>
                      </tr>
                    ) : (
                      faqs.map((faq, index) => (
                        <SortableRow
                          key={faq._id}
                          faq={faq}
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
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">
                {editing ? "Edit FAQ" : "Add FAQ"}
              </h3>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* Question */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Question</p>
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">EN</span>
                    <input
                      className={inputCls + " pl-10"}
                      placeholder="Question in English"
                      value={form.question.en}
                      onChange={(e) => setForm((f) => ({ ...f, question: { ...f.question, en: e.target.value } }))}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">AM</span>
                    <input
                      className={inputCls + " pl-10"}
                      placeholder="ጥያቄ በአማርኛ"
                      value={form.question.am}
                      onChange={(e) => setForm((f) => ({ ...f, question: { ...f.question, am: e.target.value } }))}
                      dir="auto"
                    />
                  </div>
                </div>
              </div>

              {/* Answer */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Answer</p>
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">EN</span>
                    <textarea
                      className={textareaCls + " pl-10"}
                      placeholder="Answer in English"
                      value={form.answer.en}
                      onChange={(e) => setForm((f) => ({ ...f, answer: { ...f.answer, en: e.target.value } }))}
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-medium">AM</span>
                    <textarea
                      className={textareaCls + " pl-10"}
                      placeholder="መልስ በአማርኛ"
                      value={form.answer.am}
                      onChange={(e) => setForm((f) => ({ ...f, answer: { ...f.answer, am: e.target.value } }))}
                      dir="auto"
                    />
                  </div>
                </div>
              </div>

              {/* Publish toggle */}
              <label className="flex items-center gap-2 text-sm font-medium text-[#333733] cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={(e) => setForm((f) => ({ ...f, isPublished: e.target.checked }))}
                  className="w-4 h-4 accent-[#23B349]"
                />
                Publish (visible on website)
              </label>

              {(!form.question.en.trim() || !form.answer.en.trim()) && (
                <p className="text-xs text-red-400">English question and answer are required.</p>
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
                disabled={submitting || !form.question.en.trim() || !form.answer.en.trim()}
                className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70 hover:bg-[#1fa041] transition-colors flex items-center gap-2"
              >
                {submitting && <Loader2 size={14} className="animate-spin" />}
                {editing ? "Save Changes" : "Add FAQ"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
