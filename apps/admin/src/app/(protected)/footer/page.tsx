"use client";
import { useEffect, useState } from "react";
import { Loader2, Save } from "lucide-react";
import api from "@/lib/api";

const initial = {
  ctaTitle: "Let's Work Together",
  ctaDescription: "Question, business inquiry, or partnership idea? Our team is ready to connect and support you",
  ctaButtonLabel: "Connect with us",
  newsletterTitle: "Get the Latest News & Updates...",
  phones: ["+0116686069", "+251959144444", "+251944771718"],
  email: "info@vitafoodcomplex.com",
  addressLines: ["Lideta SC, Woreda 02", "Addis Ababa, AA, Ethiopia"],
  copyrightText: "Vita Food Complex. All rights reserved."
};

export default function FooterPage() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/settings").then(({ data }) => {
      const value = Array.isArray(data) ? data[0] : data;
      if (value?.footer) setForm({ ...initial, ...value.footer });
    }).finally(() => setLoading(false));
  }, []);

  const update = <K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) =>
    setForm((old) => ({ ...old, [key]: value }));

  const save = async () => {
    setSaving(true); setMessage("");
    try { await api.put("/settings", { footer: form }); setMessage("Footer saved."); }
    catch { setMessage("Could not save footer."); }
    finally { setSaving(false); }
  };

  const input = "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#23B349]";
  if (loading) return <div className="p-8"><Loader2 className="animate-spin text-[#23B349]" /></div>;

  return <div className="max-w-4xl p-6 lg:p-8 font-['Outfit']">
    <div className="mb-7"><h1 className="font-['Funnel_Display'] text-[28px] font-bold text-[#1F2937]">Footer</h1><p className="mt-1 text-sm text-gray-400">Manage the public website footer content.</p></div>
    <div className="space-y-5">
      <section className="rounded-2xl border border-gray-100 bg-white p-6"><h2 className="mb-4 font-bold">Call to action</h2><div className="grid gap-4 sm:grid-cols-2">
        <input className={input} value={form.ctaTitle} onChange={e=>update("ctaTitle",e.target.value)} placeholder="CTA title" />
        <input className={input} value={form.ctaButtonLabel} onChange={e=>update("ctaButtonLabel",e.target.value)} placeholder="Button label" />
        <textarea className={input+" sm:col-span-2"} rows={3} value={form.ctaDescription} onChange={e=>update("ctaDescription",e.target.value)} placeholder="CTA description" />
        <input className={input+" sm:col-span-2"} value={form.newsletterTitle} onChange={e=>update("newsletterTitle",e.target.value)} placeholder="Newsletter heading" />
      </div></section>
      <section className="rounded-2xl border border-gray-100 bg-white p-6"><h2 className="mb-4 font-bold">Contact information</h2><div className="grid gap-4 sm:grid-cols-2">
        <textarea className={input} rows={4} value={form.phones.join("\n")} onChange={e=>update("phones",e.target.value.split("\n"))} placeholder="Phone numbers" />
        <textarea className={input} rows={4} value={form.addressLines.join("\n")} onChange={e=>update("addressLines",e.target.value.split("\n"))} placeholder="Address" />
        <input className={input+" sm:col-span-2"} value={form.email} onChange={e=>update("email",e.target.value)} placeholder="Email" />
      </div></section>
      <section className="rounded-2xl border border-gray-100 bg-white p-6"><h2 className="mb-4 font-bold">Copyright</h2><input className={input} value={form.copyrightText} onChange={e=>update("copyrightText",e.target.value)} /></section>
      {message && <p className="text-sm text-gray-500">{message}</p>}
      <div className="flex justify-end"><button onClick={save} disabled={saving} className="flex items-center gap-2 rounded-full bg-[#23B349] px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60">{saving?<Loader2 size={14} className="animate-spin"/>:<Save size={14}/>}Save Footer</button></div>
    </div>
  </div>;
}
