"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, X, UtensilsCrossed } from "lucide-react";
import {
  RecipeItem,
  RecipePayload,
  RecipeUploadFiles,
  recipesApi,
} from "@/lib/recipesApi";

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

function emptyForm(): RecipePayload {
  return {
    slug: "",
    title: { en: "", am: "" },
    description: { en: "", am: "" },
    media: { image: "" },
    bgColor: "#23B349",
    sortOrder: 0,
    published: true,
  };
}

function itemToForm(item: RecipeItem): RecipePayload {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    media: { image: item.media?.image ?? "" },
    bgColor: item.bgColor,
    sortOrder: item.sortOrder ?? 0,
    published: item.published ?? true,
  };
}

function emptyUploadFiles(): RecipeUploadFiles {
  return { imageFile: null };
}

function resolvePreviewUrl(
  file: File | null | undefined,
  fallback?: string,
): string {
  if (file) return URL.createObjectURL(file);
  return fallback ?? "";
}

function formatDate(value?: string): string {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString();
}

function RecipeModal({
  title,
  value,
  files,
  onChange,
  onFilesChange,
  onClose,
  onSubmit,
  submitting,
}: {
  title: string;
  value: RecipePayload;
  files: RecipeUploadFiles;
  onChange: (next: RecipePayload) => void;
  onFilesChange: (next: RecipeUploadFiles) => void;
  onClose: () => void;
  onSubmit: () => void;
  submitting: boolean;
}) {
  const imagePreview = useMemo(
    () => resolvePreviewUrl(files.imageFile, value.media.image),
    [files.imageFile, value.media.image],
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl bg-white z-10 flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
          <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 min-h-0 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Slug <span className="text-red-500">*</span>
              </label>
              <input
                className={inputCls}
                placeholder="e.g. creamy-delights"
                value={value.slug}
                onChange={(e) => onChange({ ...value, slug: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Title (EN) <span className="text-red-500">*</span>
              </label>
              <input
                className={inputCls}
                value={value.title.en}
                onChange={(e) =>
                  onChange({
                    ...value,
                    title: { ...value.title, en: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Title (AM) <span className="text-red-500">*</span>
              </label>
              <input
                className={inputCls}
                value={value.title.am}
                onChange={(e) =>
                  onChange({
                    ...value,
                    title: { ...value.title, am: e.target.value },
                  })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Description (EN) <span className="text-red-500">*</span>
              </label>
              <textarea
                className={`${inputCls} min-h-[72px]`}
                value={value.description.en}
                onChange={(e) =>
                  onChange({
                    ...value,
                    description: { ...value.description, en: e.target.value },
                  })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Description (AM) <span className="text-red-500">*</span>
              </label>
              <textarea
                className={`${inputCls} min-h-[72px]`}
                value={value.description.am}
                onChange={(e) =>
                  onChange({
                    ...value,
                    description: { ...value.description, am: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Card background <span className="text-red-500">*</span>
              </label>
              <input
                className={inputCls}
                placeholder="#23B349"
                value={value.bgColor}
                onChange={(e) =>
                  onChange({ ...value, bgColor: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Sort order
              </label>
              <input
                type="number"
                className={inputCls}
                value={value.sortOrder ?? 0}
                onChange={(e) =>
                  onChange({ ...value, sortOrder: Number(e.target.value) || 0 })
                }
              />
            </div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#333733] md:col-span-2">
              <input
                type="checkbox"
                checked={value.published ?? true}
                onChange={(e) =>
                  onChange({ ...value, published: e.target.checked })
                }
              />
              Published
            </label>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-[#333733] mb-1">
                Recipe image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                className={inputCls}
                onChange={(e) =>
                  onFilesChange({
                    ...files,
                    imageFile: e.target.files?.[0] ?? null,
                  })
                }
              />
              {imagePreview ? (
                <div className="mt-2 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                  />
                  <p className="text-xs text-gray-500">
                    {files.imageFile
                      ? `Selected: ${files.imageFile.name}`
                      : "Current image"}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-5 border-t border-gray-100 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={submitting}
            className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70"
          >
            {submitting ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RecipesAdminPage() {
  const [items, setItems] = useState<RecipeItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [form, setForm] = useState<RecipePayload>(() => emptyForm());
  const [uploadFiles, setUploadFiles] = useState<RecipeUploadFiles>(() =>
    emptyUploadFiles(),
  );
  const [editing, setEditing] = useState<RecipeItem | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const loaded = await recipesApi.list();
      setItems(loaded);
      setSelectedIds((prev) =>
        prev.filter((id) => loaded.some((item) => item._id === id)),
      );
    } catch (error) {
      console.error(error);
      setLoadError("Failed to load recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm());
    setUploadFiles(emptyUploadFiles());
    setOpen(true);
  };

  const openEdit = (item: RecipeItem) => {
    setEditing(item);
    setForm(itemToForm(item));
    setUploadFiles(emptyUploadFiles());
    setOpen(true);
  };

  const submit = async () => {
    if (!form.slug.trim()) {
      window.alert("Slug is required.");
      return;
    }
    if (!form.title.en.trim() || !form.title.am.trim()) {
      window.alert("Title (EN) and Title (AM) are required.");
      return;
    }
    if (!form.description.en.trim() || !form.description.am.trim()) {
      window.alert("Description (EN) and (AM) are required.");
      return;
    }
    if (!editing && !uploadFiles.imageFile) {
      window.alert("Recipe image file is required.");
      return;
    }
    if (!form.bgColor.trim()) {
      window.alert("Card background color is required.");
      return;
    }

    setSubmitting(true);
    try {
      if (editing) {
        await recipesApi.update(editing._id, form, uploadFiles);
      } else {
        await recipesApi.create(form, uploadFiles);
      }
      setOpen(false);
      setUploadFiles(emptyUploadFiles());
      await load();
    } catch (error) {
      console.error(error);
      window.alert(
        "Failed to save recipe. Please check your input and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const remove = async (item: RecipeItem) => {
    if (!window.confirm(`Delete recipe "${item.title.en}"?`)) {
      return;
    }
    try {
      await recipesApi.remove(item._id);
      await load();
    } catch (error) {
      console.error(error);
      window.alert("Failed to delete recipe.");
    }
  };

  const toggleSelection = (id: string, checked: boolean) => {
    setSelectedIds((prev) =>
      checked
        ? Array.from(new Set([...prev, id]))
        : prev.filter((v) => v !== id),
    );
  };

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(items.map((item) => item._id));
      return;
    }
    setSelectedIds([]);
  };

  const deleteSelected = async () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Delete ${selectedIds.length} selected recipes?`)) {
      return;
    }
    try {
      await Promise.all(
        items
          .filter((item) => selectedIds.includes(item._id))
          .map((item) => recipesApi.remove(item._id)),
      );
      setSelectedIds([]);
      await load();
    } catch (error) {
      console.error(error);
      window.alert("Failed to delete one or more selected recipes.");
    }
  };

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">
          Recipes
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={deleteSelected}
            disabled={selectedIds.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-red-50 text-red-600 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Trash2 size={14} /> Delete Selected ({selectedIds.length})
          </button>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold"
          >
            <Plus size={14} /> Add Recipe
          </button>
        </div>
      </header>
      <div className="p-4 sm:p-6 lg:p-8">
        {loading ? (
          <div className="py-16 flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : loadError ? (
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-between">
            <p className="text-sm text-red-700">{loadError}</p>
            <button
              onClick={load}
              className="px-3 py-1.5 text-xs rounded-lg bg-white border border-red-200 text-red-700"
            >
              Retry
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
            <UtensilsCrossed className="mx-auto text-gray-300 mb-3" size={28} />
            <h3 className="text-sm font-semibold text-[#333733]">
              No recipes yet
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Create your first recipe card for the public recipes page.
            </p>
            <button
              onClick={openCreate}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-[#23B349] text-sm font-semibold"
            >
              <Plus size={14} /> Add Recipe
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full min-w-[900px]">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4 w-10">
                    <input
                      type="checkbox"
                      checked={
                        items.length > 0 && selectedIds.length === items.length
                      }
                      onChange={(e) => toggleSelectAll(e.target.checked)}
                    />
                  </th>
                  {(
                    [
                      "Recipe",
                      "Visual",
                      "Order",
                      "Status",
                      "Updated",
                      "Actions",
                    ] as const
                  ).map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id} className="border-b border-gray-50">
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item._id)}
                        onChange={(e) =>
                          toggleSelection(item._id, e.target.checked)
                        }
                      />
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="text-sm font-semibold text-[#333733]">
                          {item.title.en}
                        </p>
                        <p className="text-xs text-gray-500">{item.title.am}</p>
                        <p className="text-xs text-gray-400">{item.slug}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      {item.media?.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.media.image}
                          alt={item.title.en}
                          className="w-14 h-14 rounded-lg object-cover border border-gray-100"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No image</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {item.sortOrder ?? 0}
                    </td>
                    <td className="px-5 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.published
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-500">
                      {formatDate(item.updatedAt)}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEdit(item)}
                          className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          onClick={() => remove(item)}
                          className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center"
                        >
                          <Trash2 size={14} />
                        </button>
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
        <RecipeModal
          title={editing ? "Edit Recipe" : "Add Recipe"}
          value={form}
          files={uploadFiles}
          onChange={setForm}
          onFilesChange={setUploadFiles}
          onClose={() => setOpen(false)}
          onSubmit={submit}
          submitting={submitting}
        />
      )}
    </>
  );
}
