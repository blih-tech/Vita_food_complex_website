"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Headphones,
  Trash2,
  Search,
  RefreshCw,
  Inbox,
  Archive,
  Eye,
  Download,
  FileDown,
  BarChart2,
  Layout,
  TrendingUp,
  MessageCircle,
  Heart,
  Calendar,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  CustomerCareSubmissionItem,
  CareSubmissionStatus,
  customerCareSubmissionsApi,
} from "@/lib/customerCareSubmissionsApi";
import { exportSubmissionsToPdf, exportSingleSubmissionPdf } from "@/lib/exportPdf";
import { contentApi } from "@/lib/contentApi";

const STATUS_STYLES: Record<CareSubmissionStatus, string> = {
  new: "bg-blue-50 text-blue-600 border-blue-200",
  read: "bg-emerald-50 text-emerald-600 border-emerald-200",
  archived: "bg-gray-100 text-gray-500 border-gray-200",
};

const COLORS = ["#23B349", "#DB2777"];

const FALLBACK_QUESTION_MAP: Record<string, { en: string; am: string }> = {
  q1: { en: "Sales department guest handling", am: "የሽያጭ ክፍል የእንግዳ አቀባበል" },
  q2: { en: "Purchasing process time", am: "ለግዢ ሂደት የሚወስደው ጊዜ" },
  q3: { en: "Store keepers customer handling", am: "የመጋዘን ሰራተኞች የደንበኞች አያያዝ" },
  q4: { en: "Products quality and safety", am: "የምርቶች ጥራት እና ደህንነት" },
  q5: { en: "Delivery time & adequacy", am: "የማድረስ ጊዜ እና በቂነት" },
  q6: { en: "Loading condition standard", am: "የምርቱ አጫጫን ሁኔታ ደረጃውን የጠበቀ" },
  q7: { en: "Products' price", am: "የምርቶች ዋጋ" },
  q8: { en: "General Satisfaction", am: "አጠቃላይ እርካታ" },
  previousExperience: { en: "Previous experience", am: "ከዚህ ቀደም ከምርታችን እና ከአገልግሎታችን ጋር የተያያዘ ልምድ" },
  employeeEvaluation: { en: "Employee evaluation", am: "የሰራተኞች ግምገማ" },
  suggestion: { en: "Additional suggestion", am: "ተጨማሪ አስተያየት" },
  additional: { en: "Additional information", am: "ተጨማሪ መረጃ" },
  customerName: { en: "Customer Name", am: "የደንበኛ ስም" },
  address: { en: "Address", am: "አድራሻ" },
  city: { en: "City", am: "ከተማ" },
  woreda: { en: "Woreda", am: "ወረዳ" },
  phone: { en: "Phone", am: "ስልክ" },
  productDetails: { en: "Product Details", am: "የምርት ዝርዝሮች" },
  productType: { en: "Product Type Purchased", am: "የተገዛው የምርት ዓይነት" },
  quantity: { en: "Quantity/Number", am: "ብዛት/ቁጥር" },
  detail: { en: "Detail of Complaint/Compliment", am: "የቅሬታ/ምስጋና ዝርዝር" },
  name: { en: "Reference Name", am: "ማጣቀሻ ስም" },
  date: { en: "Date", am: "ቀን" }
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

export default function CustomerCareSubmissionsPage() {
  const [items, setItems] = useState<CustomerCareSubmissionItem[]>([]);
  const [questionMap, setQuestionMap] = useState<Record<string, { en: string; am: string }>>(FALLBACK_QUESTION_MAP);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<CustomerCareSubmissionItem | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<CareSubmissionStatus | "all">("all");
  const [kindFilter, setKindFilter] = useState<"all" | "feedback" | "complaint" | "compliment">("all");
  const [viewMode, setViewMode] = useState<'list' | 'analytics'>('list');

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
    contentApi.getPage("contact-customer-care").then((page) => {
        const feedbackSection = page.sections.find((s: any) => s.type === "customer-care-feedback");
        const cmsRows = feedbackSection?.content?.feedbackQuestions as any[] | undefined;
        
        if (cmsRows) {
            const newMap = { ...FALLBACK_QUESTION_MAP };
            cmsRows.forEach((row, i) => {
                newMap[`q${i+1}`] = { en: row.primary, am: row.secondary };
            });
            setQuestionMap(newMap);
        }
    }).catch(console.error);
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
    if (!confirm("Are you sure?")) return;
    await customerCareSubmissionsApi.remove(id);
    setItems((prev) => prev.filter((m) => m._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  const filtered = items
    .filter((m) => (filter === "all" ? true : m.status === filter))
    .filter((m) => (kindFilter === "all" ? true : m.kind === kindFilter));

  const analytics = useMemo(() => {
    const total = items.length;
    const feedback = items.filter(i => i.kind === 'feedback').length;
    const complaint = items.filter(i => i.kind === 'complaint').length;
    const newCount = items.filter(i => i.status === 'new').length;
    
    // Trend (last 30 days)
    const dailyData: Record<string, number> = {};
    items.forEach(i => {
      const ds = i.createdAt.split('T')[0];
      dailyData[ds] = (dailyData[ds] || 0) + 1;
    });
    const trend = Object.keys(dailyData).sort().slice(-30).map(date => ({ date, count: dailyData[date] }));
    
    return { total, feedback, complaint, newCount, trend, 
      types: [{ name: "Feedback", value: feedback }, { name: "Complaint", value: complaint }] 
    };
  }, [items]);

  const kindBadge = (k: string) =>
    k === "complaint" ? "bg-amber-50 text-amber-700 border-amber-200" : 
    "bg-sky-50 text-sky-700 border-sky-200";

  return (
    <div className="flex flex-col h-full bg-[#F8FAF8] font-['Outfit']">
      <header className="h-16 md:h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">
        <div className="flex items-center gap-3 md:gap-6">
          <h1 className="text-lg md:text-2xl font-bold text-[#333733] font-['Funnel_Display']">Care</h1>
          <div className="flex bg-gray-100 p-1 rounded-lg md:rounded-xl">
            <button onClick={() => setViewMode('list')} className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${viewMode === 'list' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-500'}`}>
              <Layout size={14} /> <span className="hidden md:inline">List</span>
            </button>
            <button onClick={() => setViewMode('analytics')} className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${viewMode === 'analytics' ? 'bg-white text-[#23B349] shadow-sm' : 'text-gray-500'}`}>
              <BarChart2 size={14} /> <span className="hidden md:inline">Stats</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={() => exportSubmissionsToPdf(filtered)} className="flex items-center gap-2 px-3 py-2 bg-[#23B349] text-white rounded-lg md:rounded-xl text-xs md:text-sm font-semibold hover:bg-[#1f9d40]">
            <Download size={14} /> <span className="hidden md:inline">Export</span>
          </button>
          <button onClick={load} className={`p-2 rounded-lg md:rounded-xl bg-gray-50 ${loading ? 'animate-spin' : ''}`}><RefreshCw size={16} /></button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-8">
        {viewMode === 'list' ? (
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className={`flex flex-col gap-4 ${selected ? 'hidden lg:flex lg:w-1/3' : 'w-full'} transition-all`}>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {(["all", "feedback", "complaint"] as const).map(k => (
                  <button key={k} onClick={() => setKindFilter(k)} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold capitalize whitespace-nowrap ${kindFilter === k ? 'bg-[#23B349]/10 text-[#23B349]' : 'bg-white'}`}>
                    {k}
                  </button>
                ))}
              </div>
              {filtered.map(item => (
                <div key={item._id} onClick={() => handleSelect(item)} className="p-4 md:p-5 bg-white rounded-2xl border border-gray-100 cursor-pointer shadow-sm hover:shadow-md">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-sm md:text-base truncate">{item.summary}</h3>
                    <span className={`text-[9px] md:text-[10px] px-2 py-0.5 rounded-lg font-bold uppercase ${kindBadge(item.kind)}`}>{item.kind}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-400">{timeAgo(item.createdAt)}</p>
                </div>
              ))}
            </div>
            
            {selected && (
              <div className={`${selected ? 'fixed inset-0 z-30 bg-white md:relative md:inset-auto md:flex-1 md:rounded-[32px] md:border md:border-gray-100 shadow-xl' : 'hidden'} flex flex-col`}>
                 <div className="p-4 md:p-8 border-b border-gray-100 flex items-center justify-between">
                    <button onClick={() => setSelected(null)} className="lg:hidden text-gray-400 font-bold">← Back</button>
                    <h2 className="text-xl font-bold truncate">{selected.summary}</h2>
                 </div>
                 <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Submission Details</h4>
                        <div className="space-y-4">
                          {Object.entries(selected.payload).map(([key, value]) => {
                            const renderRow = (k: string, val: unknown) => {
                                const labels = questionMap[k] || { en: k, am: k };
                                return (
                                    <div key={k} className="grid grid-cols-2 gap-4 border-b border-gray-50 pb-2">
                                      <span className="text-sm font-medium text-gray-500">
                                        {labels.en} / <span className="font-desta">{labels.am}</span>
                                      </span>
                                      <span className="text-sm font-semibold text-[#333733]">{String(val)}</span>
                                    </div>
                                );
                            };

                            if (key === 'ratings' && typeof value === 'object') {
                              return Object.entries(value as Record<string, unknown>).map(([qKey, qVal]) => renderRow(qKey, qVal));
                            }
                            if (typeof value === 'object') {
                              return Object.entries(value as Record<string, unknown>).map(([subKey, subVal]) => renderRow(subKey, subVal));
                            }
                            return renderRow(key, value);
                          })}
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="p-4 md:p-8 border-t border-gray-100 flex gap-3">
                   <button onClick={() => exportSingleSubmissionPdf(selected, questionMap)} className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-xs md:text-sm font-bold flex items-center justify-center gap-2"><FileDown size={16}/> PDF</button>
                   <button onClick={() => handleDelete(selected._id)} className="flex-1 px-4 py-3 bg-red-50 text-red-500 rounded-xl text-xs md:text-sm font-bold">Delete</button>
                 </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100">
               <h3 className="text-base md:text-lg font-bold mb-6">Submission Trend (30 Days)</h3>
               <div className="h-48 md:h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={analytics.trend}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="date"/><YAxis/><Tooltip/><Area type="monotone" dataKey="count" fill="#23B349"/></AreaChart></ResponsiveContainer></div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100">
               <h3 className="text-base md:text-lg font-bold mb-6">Distribution</h3>
               <div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={analytics.types} dataKey="value" nameKey="name" fill="#8884d8"><Cell fill="#23B349"/><Cell fill="#DB2777"/></Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
