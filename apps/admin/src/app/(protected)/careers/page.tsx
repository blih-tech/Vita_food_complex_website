"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Briefcase, Plus, Pencil, Trash2, X, Users, ChevronDown,
  ExternalLink, Search, FileText, CheckCircle, Clock, XCircle,
} from "lucide-react";
import api from "@/lib/api";
import { CareerItem, CareerPayload, LocalizedText, careersApi } from "@/lib/careersApi";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Application {
  _id: string;
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  currentRole: string;
  yearsExperience: string;
  highestEducation: string;
  institution: string;
  fieldOfStudy: string;
  skills: string;
  coverLetter: string;
  additionalInfo: string;
  cvUrl: string;
  cvFileName: string;
  status: 'pending' | 'shortlisted' | 'rejected';
  createdAt: string;
}

type AppStatus = 'all' | 'pending' | 'shortlisted' | 'rejected';
type Tab = 'jobs' | 'applicants';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35";

const blankLocalized = (): LocalizedText => ({ en: "", am: "" });

function parseLocalizedList(value: string): LocalizedText[] {
  return value.split("\n").map((l) => l.trim()).filter(Boolean).map((l) => {
    const [en = "", am = ""] = l.split("|");
    return { en: en.trim(), am: am.trim() };
  });
}

function stringifyLocalizedList(values: LocalizedText[] = []) {
  return values.map((v) => `${v.en} | ${v.am}`).join("\n");
}

const defaultForm: CareerPayload = {
  id: "", title: blankLocalized(), location: blankLocalized(),
  type: blankLocalized(), department: blankLocalized(),
  summary: blankLocalized(), reportsTo: blankLocalized(),
  responsibilities: [], requirements: [], benefits: [], active: true,
};

const STATUS_CONFIG = {
  pending:     { label: 'Pending',     icon: Clock,         cls: 'bg-amber-50 text-amber-600 border-amber-200' },
  shortlisted: { label: 'Shortlisted', icon: CheckCircle,   cls: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  rejected:    { label: 'Rejected',    icon: XCircle,       cls: 'bg-red-50 text-red-500 border-red-200' },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [tab, setTab] = useState<Tab>('jobs');

  // ── Jobs state
  const [jobs, setJobs] = useState<CareerItem[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CareerItem | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [benefitsText, setBenefitsText] = useState("");
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);

  // ── Applicants state
  const [apps, setApps] = useState<Application[]>([]);
  const [loadingApps, setLoadingApps] = useState(false);
  const [filterJob, setFilterJob] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<AppStatus>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Application | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // ── Load jobs
  const loadJobs = useCallback(async () => {
    setLoadingJobs(true);
    try { setJobs(await careersApi.list()); } finally { setLoadingJobs(false); }
  }, []);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  // ── Load applicants
  const loadApps = useCallback(async () => {
    setLoadingApps(true);
    try {
      const { data } = await api.get<Application[]>('/applications');
      setApps(data);
    } catch { /* silently handle */ }
    finally { setLoadingApps(false); }
  }, []);

  useEffect(() => { if (tab === 'applicants') loadApps(); }, [tab, loadApps]);

  // ── Filtered applicants
  const filteredApps = apps.filter((a) => {
    if (filterJob !== 'all' && a.jobId !== filterJob) return false;
    if (filterStatus !== 'all' && a.status !== filterStatus) return false;
    if (search) {
      const q = search.toLowerCase();
      const name = `${a.firstName} ${a.lastName}`.toLowerCase();
      if (!name.includes(q) && !a.email.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  // ── Job form helpers
  const openCreate = () => {
    setEditing(null); setForm(defaultForm);
    setResponsibilitiesText(""); setRequirementsText(""); setBenefitsText("");
    setOpen(true);
  };

  const openEdit = (item: CareerItem) => {
    setEditing(item); setForm(item);
    setResponsibilitiesText(stringifyLocalizedList(item.responsibilities));
    setRequirementsText(stringifyLocalizedList(item.requirements));
    setBenefitsText(stringifyLocalizedList(item.benefits));
    setOpen(true);
  };

  const viewApplicantsForJob = (jobId: string) => {
    setFilterJob(jobId);
    setTab('applicants');
    if (!apps.length) loadApps();
  };

  const submitJob = async () => {
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
      await loadJobs();
    } finally { setSubmitting(false); }
  };

  const removeJob = async (id: string) => { await careersApi.remove(id); await loadJobs(); };

  // ── Applicant helpers
  const getJobTitle = (jobId: string) => jobs.find((j) => j.id === jobId)?.title.en ?? jobId;

  const changeStatus = async (id: string, status: Application['status']) => {
    setUpdatingStatus(true);
    try {
      await api.put(`/applications/${id}/status`, { status });
      setApps((prev) => prev.map((a) => a._id === id ? { ...a, status } : a));
      if (selected?._id === id) setSelected((s) => s ? { ...s, status } : s);
    } finally { setUpdatingStatus(false); }
  };

  const deleteApp = async (id: string) => {
    await api.delete(`/applications/${id}`);
    setApps((prev) => prev.filter((a) => a._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Header */}
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Careers</h1>
          <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">
            {([['jobs', Briefcase, 'Job Postings'], ['applicants', Users, 'Applicants']] as const).map(([t, Icon, label]) => (
              <button key={t} onClick={() => setTab(t)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${tab === t ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                <Icon size={14} />{label}
                {t === 'applicants' && apps.length > 0 && (
                  <span className="bg-[#23B349] text-white text-xs rounded-full px-1.5 py-0.5 leading-none">{apps.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
        {tab === 'jobs' && (
          <button onClick={openCreate} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-[#23B349] text-sm font-semibold">
            <Plus size={14} /> Add Role
          </button>
        )}
      </header>

      <div className="p-4 sm:p-6 lg:p-8">

        {/* ── Jobs Tab ─────────────────────────────────────────── */}
        {tab === 'jobs' && (
          loadingJobs ? (
            <div className="py-16 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" /></div>
          ) : (
            <div className={`flex gap-6 ${selectedJob ? 'h-[calc(100vh-160px)]' : ''}`}>
              {/* Table */}
              <div className={`flex flex-col gap-4 ${selectedJob ? 'hidden lg:flex lg:w-[520px] shrink-0' : 'w-full'}`}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50 lg:hidden">
                    <span className="text-sm font-semibold text-[#333733]">{jobs.length} roles</span>
                    <button onClick={openCreate} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-white bg-[#23B349] text-xs font-semibold">
                      <Plus size={12} /> Add Role
                    </button>
                  </div>
                  <table className="w-full">
                    <thead className="border-b border-gray-100">
                      <tr>{["Role", "Location", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left text-xs uppercase tracking-wide text-gray-400 px-5 py-4">{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody>
                      {jobs.length === 0 ? (
                        <tr><td colSpan={4} className="text-center py-12 text-gray-400 text-sm">No job roles yet. Add one above.</td></tr>
                      ) : jobs.map((item) => (
                        <tr key={item._id}
                          onClick={() => setSelectedJob(item)}
                          className={`border-b border-gray-50 cursor-pointer hover:bg-gray-50/60 transition-colors ${selectedJob?.id === item.id ? 'bg-[#23B349]/5 border-l-2 border-l-[#23B349]' : ''}`}>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <Briefcase size={16} className="text-[#23B349] shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-[#333733]">{item.title.en}</p>
                                <p className="text-xs text-gray-400">{item.department.en} · {item.type.en}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-500">{item.location.en}</td>
                          <td className="px-5 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.active ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`}>
                              {item.active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => viewApplicantsForJob(item.id)}
                                className="h-8 px-2.5 rounded-lg bg-blue-50 text-blue-600 flex items-center gap-1.5 text-xs font-medium hover:bg-blue-100 transition-colors"
                                title="View applicants for this role">
                                <Users size={13} /> Applicants
                              </button>
                              <button onClick={() => openEdit(item)} className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center hover:bg-gray-100 transition-colors"><Pencil size={14} /></button>
                              <button onClick={() => { removeJob(item.id); if (selectedJob?.id === item.id) setSelectedJob(null); }} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors"><Trash2 size={14} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Job detail panel */}
              {selectedJob && (
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 overflow-y-auto flex flex-col">
                  {/* Panel header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#23B349]/10 flex items-center justify-center text-[#23B349] shrink-0">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#333733]">{selectedJob.title.en}</p>
                        <p className="text-xs text-gray-400">{selectedJob.title.am}</p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedJob(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                      <X size={14} />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col gap-6">
                    {/* Quick actions */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <button onClick={() => viewApplicantsForJob(selectedJob.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors">
                        <Users size={14} /> View Applicants
                      </button>
                      <button onClick={() => openEdit(selectedJob)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors">
                        <Pencil size={14} /> Edit Role
                      </button>
                      <button onClick={() => { removeJob(selectedJob.id); setSelectedJob(null); }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors ml-auto">
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>

                    {/* Info chips */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ['Status', selectedJob.active ? 'Active' : 'Inactive'],
                        ['Location', selectedJob.location.en],
                        ['Type', selectedJob.type.en],
                        ['Department', selectedJob.department.en],
                        ...(selectedJob.reportsTo?.en ? [['Reports To', selectedJob.reportsTo.en]] : []),
                        ['Role ID', selectedJob.id],
                      ].map(([label, value]) => (
                        <div key={label} className="bg-gray-50 rounded-xl p-3">
                          <p className="text-xs text-gray-400 mb-1">{label}</p>
                          <p className={`text-sm font-medium ${label === 'Status' ? (selectedJob.active ? 'text-emerald-600' : 'text-gray-500') : 'text-[#333733]'}`}>{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    {selectedJob.summary.en && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Summary</p>
                        <div className="bg-gray-50 rounded-xl p-4 text-sm text-[#333733] leading-relaxed">{selectedJob.summary.en}</div>
                        {selectedJob.summary.am && (
                          <div className="bg-gray-50 rounded-xl p-4 text-sm text-[#333733] leading-relaxed mt-2 text-right" dir="auto">{selectedJob.summary.am}</div>
                        )}
                      </div>
                    )}

                    {/* Lists */}
                    {([
                      ['Responsibilities', selectedJob.responsibilities],
                      ['Requirements', selectedJob.requirements],
                      ['Benefits', selectedJob.benefits],
                    ] as [string, LocalizedText[]][]).filter(([, v]) => v?.length).map(([label, items]) => (
                      <div key={label}>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</p>
                        <ul className="bg-gray-50 rounded-xl p-4 space-y-2">
                          {items.map((item, i) => (
                            <li key={i} className="flex gap-2 text-sm text-[#333733]">
                              <span className="text-[#23B349] mt-1 shrink-0">•</span>
                              <span>{item.en}{item.am ? <span className="text-gray-400"> / {item.am}</span> : null}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}

        {/* ── Applicants Tab ───────────────────────────────────── */}
        {tab === 'applicants' && (
          <div className="flex gap-6 h-[calc(100vh-160px)]">
            {/* Left: list */}
            <div className={`flex flex-col gap-4 ${selected ? 'hidden lg:flex lg:w-[420px] shrink-0' : 'w-full'}`}>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input className="w-full pl-8 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35"
                    placeholder="Search name or email…" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="relative">
                  <select className="appearance-none pl-3 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#23B349]/35 text-gray-700"
                    value={filterJob} onChange={(e) => setFilterJob(e.target.value)}>
                    <option value="all">All Jobs</option>
                    {jobs.map((j) => <option key={j.id} value={j.id}>{j.title.en}</option>)}
                  </select>
                  <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1">
                  {(['all', 'pending', 'shortlisted', 'rejected'] as const).map((s) => (
                    <button key={s} onClick={() => setFilterStatus(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${filterStatus === s ? 'bg-[#23B349] text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* List */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex-1 overflow-y-auto">
                {loadingApps ? (
                  <div className="py-16 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#23B349]" /></div>
                ) : filteredApps.length === 0 ? (
                  <div className="py-16 text-center">
                    <Users size={32} className="mx-auto text-gray-200 mb-3" />
                    <p className="text-gray-400 text-sm">No applicants found</p>
                  </div>
                ) : filteredApps.map((app) => {
                  const cfg = STATUS_CONFIG[app.status];
                  const StatusIcon = cfg.icon;
                  return (
                    <div key={app._id} onClick={() => setSelected(app)}
                      className={`flex items-center gap-4 px-5 py-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50/60 transition-colors ${selected?._id === app._id ? 'bg-[#23B349]/5 border-l-2 border-l-[#23B349]' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-[#23B349]/10 flex items-center justify-center text-[#23B349] font-bold text-sm shrink-0">
                        {app.firstName[0]}{app.lastName[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#333733] truncate">{app.firstName} {app.lastName}</p>
                        <p className="text-xs text-gray-400 truncate">{app.email}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{getJobTitle(app.jobId)}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${cfg.cls}`}>
                          <StatusIcon size={10} />{cfg.label}
                        </span>
                        <span className="text-xs text-gray-300">{new Date(app.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-gray-400 text-center">{filteredApps.length} applicant{filteredApps.length !== 1 ? 's' : ''}</p>
            </div>

            {/* Right: detail panel */}
            {selected && (
              <div className="flex-1 bg-white rounded-2xl border border-gray-100 overflow-y-auto flex flex-col">
                {/* Panel header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#23B349]/10 flex items-center justify-center text-[#23B349] font-bold text-sm">
                      {selected.firstName[0]}{selected.lastName[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-[#333733]">{selected.firstName} {selected.lastName}</p>
                      <p className="text-xs text-gray-400">{getJobTitle(selected.jobId)}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                    <X size={14} />
                  </button>
                </div>

                <div className="p-6 flex flex-col gap-6">
                  {/* Status actions */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-medium text-gray-600">Status:</span>
                    {(['pending', 'shortlisted', 'rejected'] as const).map((s) => {
                      const cfg = STATUS_CONFIG[s];
                      const StatusIcon = cfg.icon;
                      const isActive = selected.status === s;
                      return (
                        <button key={s} disabled={updatingStatus || isActive} onClick={() => changeStatus(selected._id, s)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all disabled:opacity-50 ${isActive ? cfg.cls : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
                          <StatusIcon size={12} />{cfg.label}
                        </button>
                      );
                    })}
                    <button onClick={() => deleteApp(selected._id)}
                      className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 transition-colors">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>

                  {/* CV link */}
                  {selected.cvUrl && (
                    <a href={selected.cvUrl} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#23B349]/10 text-[#23B349] text-sm font-medium hover:bg-[#23B349]/20 transition-colors w-fit">
                      <FileText size={14} /> {selected.cvFileName || 'View CV'} <ExternalLink size={12} />
                    </a>
                  )}

                  {/* Info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      ['Email', selected.email],
                      ['Phone', selected.phone],
                      ['Address', selected.address],
                      ['Current Role', selected.currentRole],
                      ['Years of Experience', selected.yearsExperience],
                      ['Education', selected.highestEducation],
                      ['Institution', selected.institution],
                      ['Field of Study', selected.fieldOfStudy],
                    ].filter(([, v]) => v).map(([label, value]) => (
                      <div key={label} className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-400 mb-1">{label}</p>
                        <p className="text-sm text-[#333733] font-medium">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Text areas */}
                  {[
                    ['Skills', selected.skills],
                    ['Cover Letter', selected.coverLetter],
                    ['Additional Info', selected.additionalInfo],
                  ].filter(([, v]) => v).map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</p>
                      <div className="bg-gray-50 rounded-xl p-4 text-sm text-[#333733] leading-relaxed whitespace-pre-wrap">{value}</div>
                    </div>
                  ))}

                  <p className="text-xs text-gray-300 text-center">Applied {new Date(selected.createdAt).toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Job Form Modal ───────────────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-6 z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">{editing ? "Edit Role" : "Add Role"}</h3>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><X size={14} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className={inputCls} placeholder="Role ID (e.g. production-manager)" value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} />
              <label className="flex items-center gap-2 text-sm font-medium text-[#333733]">
                <input type="checkbox" checked={form.active ?? true} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                Active (visible on website)
              </label>
              <input className={inputCls} placeholder="Title (EN)" value={form.title.en} onChange={(e) => setForm({ ...form, title: { ...form.title, en: e.target.value } })} />
              <input className={inputCls} placeholder="Title (AM)" value={form.title.am} onChange={(e) => setForm({ ...form, title: { ...form.title, am: e.target.value } })} />
              <input className={inputCls} placeholder="Location (EN)" value={form.location.en} onChange={(e) => setForm({ ...form, location: { ...form.location, en: e.target.value } })} />
              <input className={inputCls} placeholder="Location (AM)" value={form.location.am} onChange={(e) => setForm({ ...form, location: { ...form.location, am: e.target.value } })} />
              <input className={inputCls} placeholder="Type (EN) e.g. Full-Time" value={form.type.en} onChange={(e) => setForm({ ...form, type: { ...form.type, en: e.target.value } })} />
              <input className={inputCls} placeholder="Type (AM)" value={form.type.am} onChange={(e) => setForm({ ...form, type: { ...form.type, am: e.target.value } })} />
              <input className={inputCls} placeholder="Department (EN)" value={form.department.en} onChange={(e) => setForm({ ...form, department: { ...form.department, en: e.target.value } })} />
              <input className={inputCls} placeholder="Department (AM)" value={form.department.am} onChange={(e) => setForm({ ...form, department: { ...form.department, am: e.target.value } })} />
              <input className={inputCls} placeholder="Reports To (EN)" value={form.reportsTo?.en || ""} onChange={(e) => setForm({ ...form, reportsTo: { ...(form.reportsTo || blankLocalized()), en: e.target.value } })} />
              <input className={inputCls} placeholder="Reports To (AM)" value={form.reportsTo?.am || ""} onChange={(e) => setForm({ ...form, reportsTo: { ...(form.reportsTo || blankLocalized()), am: e.target.value } })} />
              <textarea className={inputCls + " min-h-16 md:col-span-2"} placeholder="Summary (EN)" value={form.summary.en} onChange={(e) => setForm({ ...form, summary: { ...form.summary, en: e.target.value } })} />
              <textarea className={inputCls + " min-h-16 md:col-span-2"} placeholder="Summary (AM)" value={form.summary.am} onChange={(e) => setForm({ ...form, summary: { ...form.summary, am: e.target.value } })} />
            </div>
            <p className="text-xs text-gray-400 mt-4 mb-2">Enter each item on a new line: <code className="bg-gray-100 px-1 rounded">English text | Amharic text</code></p>
            <div className="mt-1 space-y-3">
              <textarea className={inputCls + " min-h-24"} placeholder="Responsibilities (English | Amharic per line)" value={responsibilitiesText} onChange={(e) => setResponsibilitiesText(e.target.value)} />
              <textarea className={inputCls + " min-h-24"} placeholder="Requirements (English | Amharic per line)" value={requirementsText} onChange={(e) => setRequirementsText(e.target.value)} />
              <textarea className={inputCls + " min-h-24"} placeholder="Benefits (English | Amharic per line)" value={benefitsText} onChange={(e) => setBenefitsText(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={submitJob} disabled={submitting} className="px-4 py-2.5 rounded-xl text-sm text-white bg-[#23B349] disabled:opacity-70 hover:bg-[#1fa041] transition-colors">
                {submitting ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
