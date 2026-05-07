"use client";

import { useEffect, useMemo, useState } from "react";
import { Mail, Trash2 } from "lucide-react";
import { ContactMessageItem, MessageStatus, messagesApi } from "@/lib/messagesApi";

const statusStyles: Record<MessageStatus, string> = {
  new: "bg-blue-50 text-blue-600",
  read: "bg-emerald-50 text-emerald-600",
  archived: "bg-gray-100 text-gray-500",
};

export default function MessagesPage() {
  const [items, setItems] = useState<ContactMessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await messagesApi.list();
      setItems(data);
      if (data.length && !selectedId) setSelectedId(data[0]._id);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const selected = useMemo(
    () => items.find((item) => item._id === selectedId) ?? null,
    [items, selectedId],
  );

  const updateStatus = async (id: string, status: MessageStatus) => {
    await messagesApi.update(id, status);
    await load();
  };

  const remove = async (id: string) => {
    await messagesApi.remove(id);
    await load();
    if (selectedId === id) setSelectedId(null);
  };

  return (
    <>
      <header className="hidden lg:flex h-[68px] bg-white border-b border-gray-100 px-8 items-center justify-between sticky top-0 z-10">
        <h1 className="font-['Funnel_Display'] text-lg font-bold text-[#333733]">Contact Messages</h1>
      </header>
      <div className="p-4 sm:p-6 lg:p-8">
        {loading ? (
          <div className="py-16 flex justify-center"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" /></div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {items.map((item) => (
                <button
                  key={item._id}
                  onClick={() => setSelectedId(item._id)}
                  className={`w-full px-4 py-3 border-b border-gray-50 text-left hover:bg-gray-50 ${selectedId === item._id ? "bg-[#23B349]/5" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#333733] truncate">{item.fullName}</p>
                      <p className="text-xs text-gray-400 truncate">{item.email}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-[11px] font-semibold ${statusStyles[item.status]}`}>{item.status}</span>
                  </div>
                </button>
              ))}
              {!items.length && <p className="text-sm text-gray-400 p-5">No messages found.</p>}
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-5">
              {selected ? (
                <>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="font-['Funnel_Display'] text-xl font-bold text-[#333733]">{selected.fullName}</h2>
                      <p className="text-sm text-gray-500">{selected.email} • {selected.phoneNumber}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(selected.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button onClick={() => remove(selected._id)} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4 text-sm text-[#333733] whitespace-pre-wrap min-h-32">
                    {selected.message}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {(["new", "read", "archived"] as MessageStatus[]).map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(selected._id, status)}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold ${statusStyles[status]} border border-transparent`}
                      >
                        Mark {status}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="h-full min-h-48 flex flex-col items-center justify-center text-gray-400">
                  <Mail size={22} />
                  <p className="text-sm mt-2">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
