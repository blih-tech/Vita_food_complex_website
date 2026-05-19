"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  Eye,
  Loader2,
  MapPin,
  Package,
  Phone,
  Mail,
  RefreshCw,
  Trash2,
  User,
  X,
} from "lucide-react";
import api from "@/lib/api";

type ApplicationStatus = "pending" | "reviewing" | "approved" | "rejected";

interface DistributorApplication {
  _id: string;
  businessName: string;
  businessType: string;
  businessId: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  warehouseAddress: string;
  city: string;
  fullAddress: string;
  additionalNote?: string;
  productInterests: string[];
  status: ApplicationStatus;
  adminNote?: string;
  reviewedAt?: string;
  createdAt: string;
  updatedAt: string;
}

const STATUS_CONFIG: Record<
  ApplicationStatus,
  { label: string; color: string; bg: string; border: string }
> = {
  pending: {
    label: "Pending",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  reviewing: {
    label: "Reviewing",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  approved: {
    label: "Approved",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  rejected: {
    label: "Rejected",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

export default function DistributorSubmissionsPage() {
  const [applications, setApplications] = useState<DistributorApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<DistributorApplication | null>(null);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | ApplicationStatus>("all");

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchApplications = useCallback(async () => {
    try {
      const res = await api.get<DistributorApplication[]>("/distributor-applications");
      setApplications(res.data);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setApplications([]);
      } else {
        showToast("error", "Failed to load distributor applications.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const updateStatus = async (id: string, status: ApplicationStatus) => {
    setStatusUpdating(id);
    try {
      const res = await api.put<DistributorApplication>(`/distributor-applications/${id}`, { status });
      setApplications((prev) =>
        prev.map((a) => (a._id === id ? res.data : a)),
      );
      if (selected?._id === id) setSelected(res.data);
      showToast("success", `Status updated to ${status}.`);
    } catch {
      showToast("error", "Failed to update status.");
    } finally {
      setStatusUpdating(null);
    }
  };

  const deleteApplication = async (id: string) => {
    try {
      await api.delete(`/distributor-applications/${id}`);
      setApplications((prev) => prev.filter((a) => a._id !== id));
      if (selected?._id === id) setSelected(null);
      showToast("success", "Application deleted.");
    } catch {
      showToast("error", "Failed to delete application.");
    }
  };

  const filtered =
    filterStatus === "all"
      ? applications
      : applications.filter((a) => a.status === filterStatus);

  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    reviewing: applications.filter((a) => a.status === "reviewing").length,
    approved: applications.filter((a) => a.status === "approved").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw size={24} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">
            Distributor Applications
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Review and manage distributor partnership applications.
          </p>
        </div>
        <button
          onClick={fetchApplications}
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm text-gray-500 hover:bg-gray-100 border border-gray-200"
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
        {(["all", "pending", "reviewing", "approved", "rejected"] as const).map((key) => {
          const isActive = filterStatus === key;
          return (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`px-4 py-3 rounded-[12px] text-sm font-medium transition-all border ${
                isActive
                  ? "bg-[#23B349] text-white border-[#23B349] shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#23B349]/40"
              }`}
            >
              <span className="block text-[20px] font-bold">{counts[key]}</span>
              <span className="capitalize">{key}</span>
            </button>
          );
        })}
      </div>

      {/* Application List */}
      {filtered.length === 0 ? (
        <div className="bg-gray-50 rounded-[16px] p-12 text-center">
          <Building2 size={40} className="text-gray-300 mx-auto mb-4" />
          <p className="text-sm text-gray-400">No applications found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((app) => {
            const s = STATUS_CONFIG[app.status];
            return (
              <div
                key={app._id}
                className="bg-white rounded-[14px] border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-[#23B349]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1F2937] text-sm truncate">
                    {app.businessName}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {app.contactPerson} · {app.city} · {new Date(app.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${s.color} ${s.bg} border ${s.border}`}
                >
                  {s.label}
                </span>
                <button
                  onClick={() => setSelected(app)}
                  className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-sm font-semibold text-[#23B349] bg-[#23B349]/10 hover:bg-[#23B349]/20"
                >
                  <Eye size={14} />
                  View
                </button>
                <button
                  onClick={() => deleteApplication(app._id)}
                  className="w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center"
                >
                  <Trash2 size={14} className="text-red-400" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="font-['Funnel_Display'] font-bold text-[18px] text-[#1F2937]">
                  {selected.businessName}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Submitted {new Date(selected.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X size={15} className="text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {/* Business Info */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                  <Building2 size={14} /> Business Information
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <InfoRow label="Business Name" value={selected.businessName} />
                  <InfoRow label="Business Type" value={selected.businessType} />
                  <InfoRow label="Business ID" value={selected.businessId} />
                  <InfoRow label="Contact Person" value={selected.contactPerson} icon={<User size={13} />} />
                  <InfoRow label="Phone" value={selected.phoneNumber} icon={<Phone size={13} />} />
                  <InfoRow label="Email" value={selected.email} icon={<Mail size={13} />} />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                  <MapPin size={14} /> Location Details
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <InfoRow label="Warehouse" value={selected.warehouseAddress} />
                  <InfoRow label="City" value={selected.city} />
                  <InfoRow label="Full Address" value={selected.fullAddress} className="col-span-2" />
                </div>
                {selected.additionalNote && (
                  <div className="bg-gray-50 rounded-[10px] p-3">
                    <p className="text-xs font-semibold text-gray-400 mb-1">Note</p>
                    <p className="text-sm text-gray-600">{selected.additionalNote}</p>
                  </div>
                )}
              </div>

              {/* Products */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                  <Package size={14} /> Products of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.productInterests.length > 0 ? (
                    selected.productInterests.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#23B349]/10 text-[#23B349] border border-[#23B349]/20 capitalize"
                      >
                        {p}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400">None selected</span>
                  )}
                </div>
              </div>

              {/* Status update */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide flex items-center gap-2">
                  <Clock size={14} /> Status Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(["pending", "reviewing", "approved", "rejected"] as const).map((s) => {
                    const cfg = STATUS_CONFIG[s];
                    const isCurrent = selected.status === s;
                    return (
                      <button
                        key={s}
                        onClick={() => updateStatus(selected._id, s)}
                        disabled={isCurrent || statusUpdating === selected._id}
                        className={`px-4 py-2 rounded-[10px] text-sm font-semibold border transition-all ${
                          isCurrent
                            ? `${cfg.bg} ${cfg.color} ${cfg.border} ring-2 ring-offset-1 ring-current`
                            : `bg-white text-gray-500 border-gray-200 hover:${cfg.bg} hover:${cfg.color}`
                        } disabled:opacity-50`}
                      >
                        {statusUpdating === selected._id ? (
                          <Loader2 size={14} className="animate-spin inline mr-1" />
                        ) : null}
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
                {selected.reviewedAt && (
                  <p className="text-xs text-gray-400">
                    Last reviewed: {new Date(selected.reviewedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2.5 rounded-[10px] text-sm font-semibold text-gray-500 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-60 flex items-center gap-3 px-5 py-3 rounded-[14px] shadow-lg text-sm font-semibold ${
            toast.type === "success" ? "bg-[#23B349] text-white" : "bg-red-500 text-white"
          }`}
        >
          {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}
    </div>
  );
}

function InfoRow({
  label,
  value,
  icon,
  className = "",
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-gray-50 rounded-[10px] p-3 ${className}`}>
      <p className="text-xs font-semibold text-gray-400 mb-0.5 flex items-center gap-1">
        {icon} {label}
      </p>
      <p className="text-sm text-[#1F2937] font-medium">{value}</p>
    </div>
  );
}
