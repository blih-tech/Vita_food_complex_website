"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

interface TermSection {
  _id: string;
  sectionId: string;
  title: { en: string; am: string };
  body: { en: string; am: string };
  position: number;
}

function SectionCard({ id, title, body }: { id: string; title: string; body: string }) {
  return (
    <div id={id} className="bg-white border border-[#E8E8E8] rounded-[24px] p-8 lg:p-10 mb-8 scroll-mt-[160px]">
      <div className="border-b border-[#E8E8E8] pb-4 mb-6">
        <h2 className="font-['Funnel_Display'] font-bold text-[24px] text-[#000500] leading-tight">
          {title}
        </h2>
      </div>
      <div
        className="prose prose-base max-w-none font-['Outfit'] text-[16px] text-[#333733] leading-relaxed prose-ul:pl-6 prose-li:my-1 prose-p:my-2 prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50 prose-blockquote:rounded-lg prose-blockquote:px-4 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:text-amber-900"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

export default function TermsContent() {
  const params = useParams();
  const lang = (params?.locale as string) === "am" ? "am" : "en";
  const [sections, setSections] = useState<TermSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<TermSection[]>("/terms")
      .then((res) => setSections(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#23B349]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <SectionCard
          key={section._id}
          id={section.sectionId}
          title={section.title[lang] || section.title.en}
          body={section.body[lang] || section.body.en}
        />
      ))}
    </div>
  );
}
