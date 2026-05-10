"use client";

import { useState, useEffect } from "react";
import {
  Home, Info, Image as ImageIcon,
  FileText, Edit3, ExternalLink, RefreshCw, UtensilsCrossed, Truck, Star,
  CheckCircle, Clock, Leaf, Globe, Lightbulb, Heart, BarChart3,
} from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

type DbPage = { slug: string; sections: any[]; updatedAt: string };

const ALL_PAGES = [
  {
    slug: "home",
    name: "Home",
    description: "Main landing page — hero, products, testimonials",
    icon: Home,
    editorHref: "/home",
    liveHref: "https://vitafoodcomplex.vercel.app/en",
  },
  {
    slug: "about",
    name: "About Us",
    description: "Company story, sister companies, mission & vision",
    icon: Info,
    editorHref: "/about",
    liveHref: "https://vitafoodcomplex.vercel.app/en/about",
  },
  {
    slug: "become-distributor",
    name: "Become Distributor",
    description: "Distributor journey and office contact sections",
    icon: Truck,
    editorHref: "/become-distributor",
    liveHref: "https://vitafoodcomplex.vercel.app/en/become-distributor",
  },
  {
    slug: "why-choose-vita",
    name: "Why Choose Vita",
    description: "Hero, who we are, sister companies, QA, products",
    icon: Star,
    editorHref: "/why-choose-vita",
    liveHref: "https://vitafoodcomplex.vercel.app/en/why-choose-vita",
  },
  {
    slug: "recipes",
    name: "Recipes",
    description: "Recipe hero, intro, and recipe cards",
    icon: UtensilsCrossed,
    editorHref: "/recipes",
    liveHref: "https://vitafoodcomplex.vercel.app/en/recipes",
  },
  {
    slug: "gallery",
    name: "Gallery",
    description: "Visual journey, community wall, and partner testimonials",
    icon: ImageIcon,
    editorHref: "/gallery",
    liveHref: "https://vitafoodcomplex.vercel.app/en/gallery",
  },
  {
    slug: "innovation",
    name: "Innovation",
    description: "Approach and diverse business ecosystem",
    icon: Lightbulb,
    editorHref: "/innovation",
    liveHref: "https://vitafoodcomplex.vercel.app/en/innovation",
  },
  {
    slug: "people-planet",
    name: "People & Planet",
    description: "Community support, charity initiatives, and impact",
    icon: Globe,
    editorHref: "/people-planet",
    liveHref: "https://vitafoodcomplex.vercel.app/en/people-planet",
  },
  {
    slug: "sustainability",
    name: "Sustainability",
    description: "Hero, commitments, process, and giving back",
    icon: Leaf,
    editorHref: "/sustainability",
    liveHref: "https://vitafoodcomplex.vercel.app/en/sustainability",
  },
  {
    slug: "we-care",
    name: "We Care",
    description: "Nourishing communities, the heart behind Vita Care, and making a difference",
    icon: Heart,
    editorHref: "/we-care",
    liveHref: "https://vitafoodcomplex.vercel.app/en/we-care",
  },
  {
    slug: "research",
    name: "Research",
    description: "Market and consumer research, packaging influence, and user insights",
    icon: BarChart3,
    editorHref: "/research",
    liveHref: "https://vitafoodcomplex.vercel.app/en/research",
  },
];

export default function PagesHub() {
  const [dbPages, setDbPages] = useState<Record<string, DbPage>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/content/pages")
      .then(res => {
        const map: Record<string, DbPage> = {};
        (res.data as DbPage[]).forEach(p => { map[p.slug] = p; });
        setDbPages(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="font-['Funnel_Display'] font-bold text-[28px] text-[#1F2937]">Pages</h1>
        <p className="text-sm text-gray-400 mt-1">Manage content for every page on the public website.</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <RefreshCw size={22} className="animate-spin text-[#23B349]" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_PAGES.map(page => {
            const db = dbPages[page.slug];
            const hasEditor = !!page.editorHref;
            const Icon = page.icon;
            return (
              <div
                key={page.slug}
                className="bg-white rounded-[20px] border border-gray-100 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-[12px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#23B349]" />
                  </div>
                  {hasEditor ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#23B349] bg-[#23B349]/10 px-2 py-1 rounded-full">
                      <CheckCircle size={10} /> Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock size={10} /> Coming Soon
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-[#1F2937] text-[15px]">{page.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{page.description}</p>
                </div>

                {db ? (
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
                      {db.sections.length} sections
                    </span>
                    <span>Updated {new Date(db.updatedAt).toLocaleDateString()}</span>
                  </div>
                ) : (
                  <div className="text-[11px] text-gray-300">Not yet in database</div>
                )}

                <div className="flex items-center gap-2 pt-1 border-t border-gray-50">
                  {hasEditor ? (
                    <Link
                      href={page.editorHref!}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] text-sm font-semibold bg-[#23B349] text-white hover:bg-[#1a9e3e] transition-colors"
                    >
                      <Edit3 size={13} /> Edit Content
                    </Link>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed select-none">
                      <FileText size={13} /> Editor Coming Soon
                    </div>
                  )}
                  <a
                    href={page.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-[10px] border border-gray-200 text-gray-400 hover:text-[#23B349] hover:border-[#23B349]/30 transition-colors"
                    title="View live page"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
