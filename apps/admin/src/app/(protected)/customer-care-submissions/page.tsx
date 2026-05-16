"use client";

import { useState, useEffect } from "react";
import {
  Headphones,
  Trash2,
  Search,
  RefreshCw,
  Inbox,
  Archive,
  Eye,
} from "lucide-react";
import {
  CustomerCareSubmissionItem,
  CareSubmissionStatus,
  customerCareSubmissionsApi,
} from "@/lib/customerCareSubmissionsApi";

const STATUS_STYLES: Record<CareSubmissionStatus, string> = {
  new: "bg-blue-50 text-blue-600 border-blue-200",
  read: "bg-emerald-50 text-emerald-600 border-emerald-200",
  archived: "bg-gray-100 text-gray-500 border-gray-200",
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (m < 1) return "Just now";
  if (m < 60) return `${m}m ago`;
  if (h < 24) return `${h}h ago`;
  if (d < 7) return `${d}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function payloadSearchBlob(p: Record<string, unknown>): string {
  try {
    return JSON.stringify(p).toLowerCase();
  } catch {
    return "";
  }
}

export default function CustomerCareSubmissionsPage() {
  const [items, setItems] = useState<CustomerCareSubmissionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<CustomerCareSubmissionItem | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<CareSubmissionStatus | "all">("all");
  const [kindFilter, setKindFilter] = useState<"all" | "feedback" | "complaint">("all");

  const load = async () => {
    setLoading(true);
    try {
      const data = await customerCareSubmissionsApi.list();
      setItems(data);
    } catch {
      /**/
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const handleSelect = async (item: CustomerCareSubmissionItem) => {
    setSelected(item);
    if (item.status === "new") {
      try {
        await customerCareSubmissionsApi.update(item._id, "read");
        setItems((prev) => prev.map((m) => (m._id === item._id ? { ...m, status: "read" as const } : m)));
        setSelected({ ...item, status: "read" });
      } catch {
        /**/
      }
    }
  };

  const handleStatus = async (id: string, status: CareSubmissionStatus) => {
    await customerCareSubmissionsApi.update(id, status);
    setItems((prev) => prev.map((m) => (m._id === id ? { ...m, status } : m)));
    if (selected?._id === id) setSelected((s) => (s ? { ...s, status } : s));
  };

  const handleDelete = async (id: string) => {
    await customerCareSubmissionsApi.remove(id);
    setItems((prev) => prev.filter((m) => m._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const q = search.toLowerCase();

  const filtered = items
    .filter((m) => (filter === "all" ? true : m.status === filter))
    .filter((m) => (kindFilter === "all" ? true : m.kind === kindFilter))
    .filter(
      (m) =>
        !q ||
        m.summary.toLowerCase().includes(q) ||
        m.locale.toLowerCase().includes(q) ||
        payloadSearchBlob(m.payload).includes(q),
    );

  const newCount = items.filter((m) => m.status === "new").length;
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const kindBadge = (k: CustomerCareSubmissionItem["kind"]) =>
    k === "complaint"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-sky-50 text-sky-700 border-sky-200";

  const initialLetter = selected?.summary?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10 font-['Outfit']">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-[10px] bg-[#23B349]/15 flex items-center justify-center">
            <Headphones size={17} className="text-[#23B349]" />
          </div>
          <div>
            <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733] leading-none">Care forms</h1>
            <p className="text-[11px] text-gray-400 mt-0.5">{today}</p>
          </div>
          <p className="text-[11px] text-gray-500 max-w-[220px] leading-snug">
            Submissions from the public Feedback & Complaint forms.
          </p>
          {newCount > 0 && (
            <span className="bg-[#23B349] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">{newCount} new</span>
          )}
        </div>
        <button
          type="button"
          onClick={load}
          className="w-9 h-9 rounded-[10px] bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <RefreshCw size={15} className={`text-gray-500 ${loading ? "animate-spin" : ""}`} />
        </button>
      </header>

      <div className="p-4 sm:p-6 lg:p-8 font-['Outfit']">
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <div className="flex items-center gap-2">
            <h2 className="font-['Funnel_Display'] font-bold text-[#333733] text-lg">Care forms</h2>
            {newCount > 0 && (
              <span className="bg-[#23B349] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">{newCount}</span>
            )}
          </div>
          <button type="button" onClick={load} className="w-9 h-9 rounded-[10px] bg-gray-50 flex items-center justify-center">
            <RefreshCw size={15} className={`text-gray-500 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-[10px]">
            {(["all", "new", "read", "archived"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={[
                  "px-3 py-1.5 rounded-[8px] text-sm font-semibold transition-all capitalize",
                  filter === f ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500 hover:text-[#333733]",
                ].join(" ")}
              >
                {f}
                {f === "new" && newCount > 0 ? ` (${newCount})` : ""}
              </button>
            ))}
          </div>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-[10px]">
            {(["all", "feedback", "complaint"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setKindFilter(f)}
                className={[
                  "px-3 py-1.5 rounded-[8px] text-sm font-semibold transition-all capitalize",
                  kindFilter === f ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500 hover:text-[#333733]",
                ].join(" ")}
              >
                {f === "all" ? "All types" : f}
              </button>
            ))}
          </div>
          <div className="relative flex-1 min-w-[180px]">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search summaries or payload…"
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#23B349] focus:ring-2 focus:ring-[#23B349]/10 transition-all"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-48">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-3">
            <Inbox size={36} strokeWidth={1.5} />
            <p className="text-sm font-medium">No submissions yet</p>
          </div>
        ) : (
          <div className="flex gap-4 lg:gap-5" style={{ height: "calc(100vh - 270px)", minHeight: 400 }}>
            <div className={`flex flex-col gap-2 overflow-y-auto ${selected ? "hidden lg:flex lg:w-[320px] xl:w-[360px] shrink-0" : "flex-1"}`}>
              {filtered.map((msg) => (
                <button
                  key={msg._id}
                  type="button"
                  onClick={() => void handleSelect(msg)}
                  className={[
                    "w-full text-left p-4 rounded-[14px] border transition-all",
                    selected?._id === msg._id ?
                      "bg-[#23B349]/5 border-[#23B349]/30"
                    : "bg-white border-gray-100 hover:border-[#23B349]/20 hover:shadow-sm",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0 flex-wrap">
                      {msg.status === "new" && <span className="w-2 h-2 bg-[#23B349] rounded-full shrink-0" />}
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${kindBadge(msg.kind)}`}>
                        {msg.kind}
                      </span>
                      <p className={`text-sm truncate ${msg.status === "new" ? "font-bold" : "font-medium"} text-[#333733]`}>{msg.summary}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 flex-col items-end">
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border capitalize ${STATUS_STYLES[msg.status]}`}>
                        {msg.status}
                      </span>
                      <span className="text-[11px] text-gray-400">{timeAgo(msg.createdAt)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Locale · {msg.locale}</p>
                </button>
              ))}
            </div>

            {selected && (
              <div className="flex-1 bg-white rounded-[18px] border border-gray-100 flex flex-col overflow-hidden">
                <div className="flex items-start justify-between p-5 border-b border-gray-100 gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                      style={{
                        background:
                          "radial-gradient(ellipse, rgba(31,214,80,1) 0%, rgba(35,179,73,1) 60%, rgba(116,255,56,1) 100%)",
                      }}
                    >
                      {initialLetter}
                    </div>
                    <div className="min-w-0">
                      <p className="font-['Funnel_Display'] font-bold text-[#333733] text-base leading-none mb-1 truncate">{selected.summary}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${kindBadge(selected.kind)}`}>{selected.kind}</span>
                        <span className="text-xs text-gray-400">locale: {selected.locale}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                    <span className="text-xs text-gray-400">{timeAgo(selected.createdAt)}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border capitalize ${STATUS_STYLES[selected.status]}`}>{selected.status}</span>
                    <button
                      type="button"
                      onClick={() => void handleDelete(selected._id)}
                      className="w-8 h-8 rounded-[8px] bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-500 flex items-center justify-center transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="lg:hidden w-8 h-8 rounded-[8px] bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold"
                    >
                      ←
                    </button>
                  </div>
                </div>

                <div className="flex-1 p-5 overflow-y-auto">
                  <p className="text-[11px] font-bold uppercase text-gray-400 tracking-wider mb-2">Submitted data</p>
                  <pre className="bg-gray-50 rounded-[14px] p-4 text-xs text-[#333733] whitespace-pre-wrap break-words overflow-x-auto font-mono">
                    {JSON.stringify(selected.payload, null, 2)}
                  </pre>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selected.status === "new" && (
                      <button
                        type="button"
                        onClick={() => void handleStatus(selected._id, "read")}
                        className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 text-sm font-semibold px-4 py-2.5 rounded-[10px] transition-colors"
                      >
                        <Eye size={14} /> Mark read
                      </button>
                    )}
                    {selected.status !== "archived" && (
                      <button
                        type="button"
                        onClick={() => void handleStatus(selected._id, "archived")}
                        className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold px-4 py-2.5 rounded-[10px] transition-colors"
                      >
                        <Archive size={14} /> Archive
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
