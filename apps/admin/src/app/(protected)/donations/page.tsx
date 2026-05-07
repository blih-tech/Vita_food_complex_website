"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Heart, X, Trash2, Search, ChevronDown,
  CheckCircle, Clock, Star, DollarSign, Package,
} from "lucide-react";
import api from "@/lib/api";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Donation {
  _id: string;
  type: "money" | "inkind";
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  amount?: string;
  items?: string[];
  status: "pending" | "reviewed" | "completed";
  createdAt: string;
}

type StatusFilter = "all" | "pending" | "reviewed" | "completed";
type TypeFilter = "all" | "money" | "inkind";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  pending:   { label: "Pending",   icon: Clock,         cls: "bg-amber-50 text-amber-600 border-amber-200" },
  reviewed:  { label: "Reviewed",  icon: Star,          cls: "bg-blue-50 text-blue-600 border-blue-200" },
  completed: { label: "Completed", icon: CheckCircle,   cls: "bg-emerald-50 text-emerald-600 border-emerald-200" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<TypeFilter>("all");
  const [filterStatus, setFilterStatus] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Donation | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get<Donation[]>("/donations");
      setDonations(data);
    } catch { /* silently handle */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = donations.filter((d) => {
    if (filterType !== "all" && d.type !== filterType) return false;
    if (filterStatus !== "all" && d.status !== filterStatus) return false;
    if (search) {
      const q = search.toLowerCase();
      if (
        !d.fullName.toLowerCase().includes(q) &&
        !d.email.toLowerCase().includes(q) &&
        !d.phone.includes(q)
      ) return false;
    }
    return true;
  });

  const changeStatus = async (id: string, status: Donation["status"]) => {
    setUpdatingStatus(true);
    try {
      await api.put(`/donations/${id}/status`, { status });
      setDonations((prev) => prev.map((d) => d._id === id ? { ...d, status } : d));
      if (selected?._id === id) setSelected((s) => s ? { ...s, status } : s);
    } finally { setUpdatingStatus(false); }
  };

  const remove = async (id: string) => {
    await api.delete(`/donations/${id}`);
    setDonations((prev) => prev.filter((d) => d._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const moneyCount = donations.filter((d) => d.type === "money").length;
  const inkindCount = donations.filter((d) => d.type === "inkind").length;
  const pendingCount = donations.filter((d) => d.status === "pending").length;

  return (
    <>
      {/* Header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Donations</h1>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[#23B349]/10 text-[#23B349]">{donations.length} total</span>
            {pendingCount > 0 && (
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600">{pendingCount} pending</span>
            )}
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total", value: donations.length, icon: Heart, color: "text-[#23B349]", bg: "bg-[#23B349]/10" },
            { label: "Money", value: moneyCount, icon: DollarSign, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "In-Kind", value: inkindCount, icon: Package, color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Pending", value: pendingCount, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#333733]">{value}</p>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 h-[calc(100vh-300px)]">
          {/* Left: list */}
          <div className={`flex flex-col gap-4 ${selected ? "hidden lg:flex lg:w-[420px] shrink-0" : "w-full"}`}>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full pl-8 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35"
                  placeholder="Search name, email, or phone…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="relative">
                <select
                  className="appearance-none pl-3 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35 text-gray-700"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as TypeFilter)}
                >
                  <option value="all">All Types</option>
                  <option value="money">Money</option>
                  <option value="inkind">In-Kind</option>
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1">
                {(["all", "pending", "reviewed", "completed"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${filterStatus === s ? "bg-[#23B349] text-white" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex-1 overflow-y-auto">
              {loading ? (
                <div className="py-16 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#23B349]" /></div>
              ) : filtered.length === 0 ? (
                <div className="py-16 text-center">
                  <Heart size={32} className="mx-auto text-gray-200 mb-3" />
                  <p className="text-gray-400 text-sm">No donations found</p>
                </div>
              ) : filtered.map((d) => {
                const cfg = STATUS_CONFIG[d.status];
                const StatusIcon = cfg.icon;
                return (
                  <div
                    key={d._id}
                    onClick={() => setSelected(d)}
                    className={`flex items-center gap-4 px-5 py-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50/60 transition-colors ${selected?._id === d._id ? "bg-[#23B349]/5 border-l-2 border-l-[#23B349]" : ""}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${d.type === "money" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"}`}>
                      {d.type === "money" ? <DollarSign size={16} /> : <Package size={16} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#333733] truncate">{d.fullName}</p>
                      <p className="text-xs text-gray-400 truncate">{d.email}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {d.type === "money" ? `${d.amount} ETB` : `${d.items?.join(", ") ?? ""}`}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.cls}`}>
                        <StatusIcon size={10} />{cfg.label}
                      </span>
                      <span className="text-xs text-gray-300">{new Date(d.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-400 text-center">{filtered.length} donation{filtered.length !== 1 ? "s" : ""}</p>
          </div>

          {/* Right: detail panel */}
          {selected && (
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 overflow-y-auto flex flex-col">
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${selected.type === "money" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"}`}>
                    {selected.type === "money" ? <DollarSign size={18} /> : <Package size={18} />}
                  </div>
                  <div>
                    <p className="font-semibold text-[#333733]">{selected.fullName}</p>
                    <p className="text-xs text-gray-400 capitalize">{selected.type === "money" ? "Monetary Donation" : "In-Kind Donation"}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {/* Status actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-medium text-gray-600">Status:</span>
                  {(["pending", "reviewed", "completed"] as const).map((s) => {
                    const cfg = STATUS_CONFIG[s];
                    const SIcon = cfg.icon;
                    const isActive = selected.status === s;
                    return (
                      <button
                        key={s}
                        disabled={updatingStatus || isActive}
                        onClick={() => changeStatus(selected._id, s)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all disabled:opacity-50 ${isActive ? cfg.cls : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"}`}
                      >
                        <SIcon size={12} />{cfg.label}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => remove(selected._id)}
                    className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={12} /> Delete
                  </button>
                </div>

                {/* Donation details */}
                {selected.type === "money" && selected.amount && (
                  <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
                    <DollarSign size={20} className="text-blue-600" />
                    <div>
                      <p className="text-xs text-blue-400">Donation Amount</p>
                      <p className="text-2xl font-bold text-blue-700">{selected.amount} ETB</p>
                    </div>
                  </div>
                )}

                {selected.type === "inkind" && selected.items && selected.items.length > 0 && (
                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-xs text-purple-400 mb-2">Donated Items</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-white rounded-full text-sm text-purple-700 border border-purple-200 font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["Full Name", selected.fullName],
                    ["Email", selected.email],
                    ["Phone", selected.phone],
                    ["Submitted", new Date(selected.createdAt).toLocaleString()],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-400 mb-1">{label}</p>
                      <p className="text-sm text-[#333733] font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Message */}
                {selected.message && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Message</p>
                    <div className="bg-gray-50 rounded-xl p-4 text-sm text-[#333733] leading-relaxed whitespace-pre-wrap">{selected.message}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
