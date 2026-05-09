"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Star, Play, Users, Building2, Award, ShoppingBag,
  Edit3, CheckCircle, RefreshCw, AlertCircle, X, Globe,
  ChevronDown, ChevronUp, Save, ArrowLeft, Loader2, ImagePlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";

interface Section { id: string; type: string; content: any; }
interface PageData {
  slug: string;
  title: { en: string; am: string };
  sections: Section[];
  updatedAt?: string;
}

const SECTION_META: Record<string, { name: string; icon: any; description: string; readOnly?: boolean }> = {
  "wcv-hero":             { name: "Hero Banner",       icon: Star,      description: "Main headline, subtitle, and CTA buttons" },
  "wcv-video":            { name: "Video Showcase",    icon: Play,      description: "Marquee banner and video player (layout only — no editable fields)", readOnly: true },
  "wcv-who-are-we":       { name: "Who Are We",        icon: Users,     description: "Section headlines, intro paragraph, and 4 feature cards" },
  "wcv-sister-companies": { name: "Sister Companies",  icon: Building2, description: "Section title and all 13 company names, categories, and descriptions" },
  "wcv-qa":               { name: "Quality Assurance", icon: Award,     description: "Caption label and section headline" },
  "wcv-products":         { name: "Our Products",      icon: ShoppingBag, description: "Section title and 2 product cards (title, description, image, link)" },
};

const DEFAULT_PAGE: PageData = {
  slug: "why-choose-vita",
  title: { en: "Why Choose Vita", am: "ለምን ቪታ" },
  sections: [
    {
      id: "wcv-hero", type: "wcv-hero",
      content: {
        en: { title: "A Better Choice\nfor Every Table", description: "Vita is committed to providing high-quality, nutritious food products that nourish families and support local communities.", exploreProducts: "Explore products", contactUs: "Contact US" },
        am: { title: "ለእያንዳንዱ ማዕድ\nየተሻለ ምርጫ", description: "ቪታ ቤተሰቦችን የሚመግቡ och የአካባቢ ማህበረሰቦችን የሚደግፉ ከፍተኛ ጥራት ያላቸው och የተመጣጠነ የምግብ ምርቶችን ለማቅረብ ቁርጠኛ ነው።", exploreProducts: "ምርቶችን ያስሱ", contactUs: "ያግኙን" },
      },
    },
    {
      id: "wcv-video", type: "wcv-video",
      content: {},
    },
    {
      id: "wcv-who-are-we", type: "wcv-who-are-we",
      content: {
        en: {
          headlineWho: "WHO", headlineAreWe: "ARE WE",
          fmcgIntro: "Vita is a leading FMCG company in Ethiopia, dedicated to producing high-quality food products that meet the needs of our diverse consumers.",
          moreAboutCta: "More About Vita",
          featureCards: [
            { title: "Built on Trust", description: "We have earned the trust of millions of families through our commitment to quality and safety." },
            { title: "Reliable Supply", description: "Our robust supply chain ensures that our products are always available when you need them." },
            { title: "Continuous Innovation", description: "We are constantly innovating to bring you new and exciting food products." },
            { title: "Community Focused", description: "We are dedicated to supporting the communities we serve through various social initiatives." },
          ],
        },
        am: {
          headlineWho: "እኛ", headlineAreWe: "ማን ነን",
          fmcgIntro: "ቪታ በኢትዮጵያ ውስጥ ግንባር ቀደም የፍጆታ ምርቶች አምራች ድርጅት ሲሆን፣ የተለያዩ ሸማቾቻችንን ፍላጎት የሚያሟሉ ከፍተኛ ጥራት ያላቸው የምግብ ምርቶችን ለማምረት የተቋቋመ ነው።",
          moreAboutCta: "ስለ ቪታ ተጨማሪ",
          featureCards: [
            { title: "በእምነት ላይ የተገነባ", description: "ለጥራት och ለደህንነት ባለን ቁርጠኝነት በሚሊዮኖች የሚቆጠሩ ቤተሰቦችን እምነት አትርፈናል።" },
            { title: "አስተማማኝ አቅርቦት", description: "የእኛ ጠንካራ የአቅርቦት ሰንሰለት ምርቶቻችንን በሚፈልጉበት ጊዜ ሁሉ ጊዜ መገኘቱን ያረጋግጣል።" },
            { title: "ቀጣይነት ያለው ፈጠራ", description: "አዲስ och አስደሳሽ የምግብ ምርቶችን ለእርስዎ ለማቅረብ ዘወትር አዲስ ፈጠራዎችን እንሰራለን።" },
            { title: "ማህበረሰብ ተኮር", description: "በተለያዩ ማህበራዊ ተነሳሽነቶች የምናገለግላቸውን ማህበረሰቦች ለመደገፍ ቆርጠን ተነስተናል።" },
          ],
        },
      },
    },
    {
      id: "wcv-sister-companies", type: "wcv-sister-companies",
      content: {
        en: {
          title: "Our Sister Companies", seeMore: "See More",
          companies: {
            longTea:                  { name: "Long Tea",                   category: "Beverages",        description: "Premium tea products sourced from the finest tea gardens." },
            belayabMotors:            { name: "Belayab Motors",             category: "Automotive",       description: "Leading automotive distributor and assembler in Ethiopia." },
            belayabCable:             { name: "Belayab Cable",              category: "Manufacturing",    description: "High-quality electrical and telecommunication cables." },
            belayabFoods:             { name: "Belayab Foods",              category: "Food & Beverage",  description: "Diverse range of food products for the Ethiopian market." },
            goldenTulip:              { name: "Golden Tulip",               category: "Hospitality",      description: "World-class hospitality and hotel services." },
            belayabDelivery:          { name: "Belayab Delivery",           category: "Logistics",        description: "Efficient and reliable delivery services across the nation." },
            aradaCoffee:              { name: "Arada Coffee",               category: "Beverages",        description: "Authentic Ethiopian coffee experience." },
            lionstone:                { name: "Lionstone",                  category: "Real Estate",      description: "Innovative real estate development projects." },
            belayabPharmaceuticals:   { name: "Belayab Pharmaceuticals",   category: "Healthcare",       description: "Essential pharmaceutical products and medical supplies." },
            huajiaInternationalTrade: { name: "Huajia International Trade", category: "Trade",           description: "Global trading and import-export services." },
            belayabPoultryAndFeed:    { name: "Belayab Poultry and Feed",   category: "Agriculture",     description: "Sustainable poultry farming and high-quality animal feed." },
            belayabGeepas:            { name: "Belayab Geepas",             category: "Electronics",     description: "Wide range of household electronics and appliances." },
            lewisRetailsSupermarket:  { name: "Lewis Retails Supermarket",  category: "Retail",          description: "Premium retail experience with a wide selection of products." },
          },
        },
        am: {
          title: "እህት ኩባንያዎቻችን", seeMore: "ተጨማሪ ይመልከቱ",
          companies: {
            longTea:                  { name: "ሎንግ ቲ",                         category: "መጠጦች",             description: "ከምርጥ የሻይ አትክልት ስፍራዎች የተገኙ ምርጥ የሻይ ምርቶች።" },
            belayabMotors:            { name: "በላያብ ሞተርስ",                    category: "አውቶሞቲቭ",           description: "በኢትዮጵያ ውስጥ ግንባር ቀደም የአውቶሞቢል አከፋፋይ och ገጣሚ።" },
            belayabCable:             { name: "በላያብ ኬብል",                     category: "ማምረት",             description: "ከፍተኛ ጥራት ያላቸው የኤሌክትሪክ och የቴሌኮሙኒኬሽን ኬብሎች።" },
            belayabFoods:             { name: "በላያብ ፑድስ",                     category: "ምግብ och መጠጥ",     description: "ለኢትዮጵያ ገበያ የሚቀርቡ የተለያዩ የምግብ ምርቶች።" },
            goldenTulip:              { name: "ጎልደን ቱሊፕ",                     category: "ሆስፒታሊቲ",          description: "ዓለም አቀፍ ደረጃ የሚጠብቅ የሆቴል och የእንግዳ ተቀባይነት አገልግሎቶች።" },
            belayabDelivery:          { name: "በላያብ ዴሊቬሪ",                   category: "ሎጂስቲክስ",           description: "በመላ ሀገሪቱ ቀልጣፋ och አስተማማኝ የማድረስ አገልግሎቶች።" },
            aradaCoffee:              { name: "አራዳ ኮፊ",                        category: "መጠጦች",             description: "እውነተኛ የኢትዮጵያ ቡና ተሞክሮ።" },
            lionstone:                { name: "ላይን ስቶን",                       category: "ሪል እስቴት",          description: "አዲስ የሪል እስቴት ልማት ፕሮጀክቶች።" },
            belayabPharmaceuticals:   { name: "በላያብ ፋርማሲዩቲካልስ",             category: "ጤና ጥበቃ",           description: "አስፈላጊ የመድሃኒት ምርቶች och የሕክምና አቅርቦቶች።" },
            huajiaInternationalTrade: { name: "ሁዋጂያ ኢንተርናሽናል ትሬድ",          category: "ንግድ",               description: "ዓለም አቀፍ የንግድ och የወጪ ንግድ አገልግሎቶች።" },
            belayabPoultryAndFeed:    { name: "በላያብ ፖልትሪ እንድ ፊድ",           category: "ግብርና",             description: "ዘላቂ የዶሮ እርባታ och ከፍተኛ ጥራት ያለው የእንስሳት መኖ።" },
            belayabGeepas:            { name: "በላያብ ጊፓስ",                     category: "ኤሌክትሮኒክስ",         description: "የተለያዩ የቤት ውስጥ ኤሌክትሮኒክስ och መሳሪያዎች።" },
            lewisRetailsSupermarket:  { name: "ሌዊስ ሪቴይልስ ሱፐርማርኬት",         category: "ችርቻሮ",             description: "ሰፊ የምርት ምርጫ ያለው ምርጥ የችርቻሮ ተሞክሮ።" },
          },
        },
      },
    },
    {
      id: "wcv-qa", type: "wcv-qa",
      content: {
        en: { caption: "Uplifting Every Daily Food Moment.", title: "Quality is Built Around Us!" },
        am: { caption: "የዕለት ተዕለት የምግብ ጊዜዎችን ማሳደግ።", title: "ጥራት በዙሪያዎቻችን ተገንብቷል!" },
      },
    },
    {
      id: "wcv-products", type: "wcv-products",
      content: {
        en: {
          title: "Our Products",
          products: [
            { title: "Biscuits", description: "Delicious and crunchy biscuits for every occasion.", image: "/assets/images/why-choose-vita/products-image-1.png", href: "/products#biscuits" },
            { title: "Flour", description: "Premium quality flour for all your baking needs.", image: "/assets/images/why-choose-vita/products-image-2.png", href: "/products#flour" },
          ],
        },
        am: {
          title: "ምርቶቻችን",
          products: [
            { title: "ቢስኩቶች", description: "ለማንኛውም አጋጣሚ የሚሆኑ ጣፋጭ och ጥርሳሳ ቢስኩቶች።", image: "/assets/images/why-choose-vita/products-image-1.png", href: "/products#biscuits" },
            { title: "ዱቄት", description: "ለማንኛውም የምጋገሪያ ፍላጎቶ ከፍተኛ ጥራት ያለው ዱቄት።", image: "/assets/images/why-choose-vita/products-image-2.png", href: "/products#flour" },
          ],
        },
      },
    },
  ],
};

const COMPANY_KEYS = [
  "longTea", "belayabMotors", "belayabCable", "belayabFoods", "goldenTulip",
  "belayabDelivery", "aradaCoffee", "lionstone", "belayabPharmaceuticals",
  "huajiaInternationalTrade", "belayabPoultryAndFeed", "belayabGeepas", "lewisRetailsSupermarket",
];

// ── ImageUploadField ───────────────────────────────────────────────────────
function ImageUploadField({
  currentUrl, uploading, onFileSelected,
}: {
  currentUrl: string; uploading: boolean; onFileSelected: (file: File) => void;
}) {
  return (
    <div className="flex items-center gap-3 mt-1">
      {currentUrl ? (
        <div className="relative w-14 h-14 rounded-[10px] overflow-hidden border border-gray-200 shrink-0">
          <Image src={currentUrl} alt="preview" fill className="object-cover" unoptimized />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-[10px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center shrink-0">
          <ImagePlus size={18} className="text-gray-400" />
        </div>
      )}
      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-[10px] text-xs font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer">
        {uploading ? <Loader2 size={13} className="animate-spin" /> : <ImagePlus size={13} />}
        {uploading ? "Uploading…" : "Change Image"}
        <input type="file" accept="image/*" className="hidden" disabled={uploading}
          onChange={e => { const f = e.target.files?.[0]; if (f) onFileSelected(f); }} />
      </label>
      {currentUrl && <p className="text-[10px] text-gray-400 truncate max-w-[160px]">{currentUrl.split("/").pop()}</p>}
    </div>
  );
}

function getPreview(section: Section): string {
  const en = section.content?.en || section.content;
  const text = en?.title || en?.headlineWho || en?.caption || "";
  return text.length > 55 ? text.slice(0, 55).replace(/\n/g, " ") + "…" : text.replace(/\n/g, " ");
}

export default function WhyChooseVitaEditor() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [activeLang, setActiveLang] = useState<"en" | "am">("en");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [uploading, setUploading] = useState<string | null>(null);

  const showToast = (type: "success" | "error", msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    api.get("/content/pages/why-choose-vita")
      .then((res) => setPage(res.data))
      .catch(() => setPage(DEFAULT_PAGE))
      .finally(() => setLoading(false));
  }, []);

  const set = useCallback((sectionId: string, lang: "en" | "am", path: string[], value: any) => {
    setPage((prev) => {
      if (!prev) return prev;
      const sections = prev.sections.map((s) => {
        if (s.id !== sectionId) return s;
        const content = JSON.parse(JSON.stringify(s.content));
        let cur = content[lang] ??= {};
        for (let i = 0; i < path.length - 1; i++) {
          cur = cur[path[i]] ??= Array.isArray(cur[path[i]]) ? [] : {};
        }
        cur[path[path.length - 1]] = value;
        return { ...s, content };
      });
      return { ...prev, sections };
    });
  }, []);

  // Sets the same value in both EN and AM (used for images shared across locales)
  const setBothLangs = useCallback((sectionId: string, path: string[], value: any) => {
    set(sectionId, "en", path, value);
    set(sectionId, "am", path, value);
  }, [set]);

  const uploadImage = useCallback(async (key: string, file: File, onUrl: (url: string) => void) => {
    setUploading(key);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await api.post("/content/upload-image", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUrl(data.url);
    } finally {
      setUploading(null);
    }
  }, []);

  const handleSave = async () => {
    if (!page) return;
    setSaving(true);
    try {
      await api.put("/content/pages/why-choose-vita", page);
      showToast("success", "Page saved successfully!");
    } catch {
      try {
        await api.post("/content/pages/upsert", page);
        showToast("success", "Page created & saved!");
      } catch {
        showToast("error", "Failed to save. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };

  const toggleSection = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-[#23B349]" />
      </div>
    );
  }

  if (!page) return null;

  return (
    <>
      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl text-white text-sm font-semibold transition-all ${toast.type === "success" ? "bg-[#23B349]" : "bg-red-500"}`}>
          {toast.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          {toast.msg}
          <button onClick={() => setToast(null)}><X size={16} /></button>
        </div>
      )}

      {/* Header */}
      <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/pages" className="p-2 hover:bg-gray-100 rounded-lg transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#404040]">Why Choose Vita</h1>
            <p className="text-sm text-gray-400">Manage all sections of the /why-choose-vita page</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {(["en", "am"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 ${activeLang === lang ? "bg-white text-[#23B349] shadow-sm" : "text-gray-500"}`}
              >
                <Globe size={13} />
                {lang === "en" ? "English" : "Amharic"}
              </button>
            ))}
          </div>
          {/* Live link */}
          <a
            href="https://vitafoodcomplex.vercel.app/en/why-choose-vita"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:text-[#23B349] hover:border-[#23B349]/30 transition-colors"
          >
            View Live ↗
          </a>
          {/* Save */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-[#23B349] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1fa041] transition-all disabled:opacity-70"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="p-8 max-w-5xl mx-auto space-y-4">
        {page.sections.map((section) => {
          const meta = SECTION_META[section.type];
          const Icon = meta?.icon ?? Edit3;
          const isOpen = expanded[section.id] ?? false;

          return (
            <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Section header row */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100 hover:bg-gray-100/60 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[10px] bg-[#23B349]/10 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-[#23B349]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1F2937] text-[15px]">{meta?.name ?? section.type}</p>
                    <p className="text-xs text-gray-400">{meta?.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {!isOpen && (
                    <span className="text-xs text-gray-400 max-w-[200px] truncate hidden sm:block">
                      {getPreview(section)}
                    </span>
                  )}
                  {meta?.readOnly && (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Auto</span>
                  )}
                  {isOpen ? <ChevronUp size={18} className="text-gray-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                </div>
              </button>

              {/* Section fields */}
              {isOpen && (
                <div className="p-6">
                  {meta?.readOnly ? (
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-700 text-sm">
                      This section renders automatically — no editable fields.
                    </div>
                  ) : (
                    <SectionEditor
                      section={section}
                      lang={activeLang}
                      onChange={(path, value) => set(section.id, activeLang, path, value)}
                      onImageUpload={(key, file, path) =>
                        uploadImage(key, file, (url) => setBothLangs(section.id, path, url))
                      }
                      uploading={uploading}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ── Per-section field editors ──────────────────────────────────────────────

function SectionEditor({ section, lang, onChange, onImageUpload, uploading }: {
  section: Section;
  lang: "en" | "am";
  onChange: (path: string[], value: any) => void;
  onImageUpload: (key: string, file: File, path: string[]) => void;
  uploading: string | null;
}) {
  const c = section.content?.[lang] ?? {};

  const field = (label: string, path: string[], multiline = false) => (
    <div key={path.join(".")} className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349] outline-none resize-none"
          value={path.reduce((o: any, k) => o?.[k], c) ?? ""}
          onChange={(e) => onChange(path, e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#23B349]/30 focus:border-[#23B349] outline-none"
          value={path.reduce((o: any, k) => o?.[k], c) ?? ""}
          onChange={(e) => onChange(path, e.target.value)}
        />
      )}
    </div>
  );

  if (section.type === "wcv-hero") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("Title (supports \\n for line breaks)", ["title"], true)}
        {field("Description", ["description"], true)}
        {field("Explore Products Button", ["exploreProducts"])}
        {field("Contact Us Button", ["contactUs"])}
      </div>
    );
  }

  if (section.type === "wcv-who-are-we") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {field("Headline — Part 1 (e.g. WHO)", ["headlineWho"])}
          {field("Headline — Part 2 (e.g. ARE WE)", ["headlineAreWe"])}
          {field("Intro Paragraph", ["fmcgIntro"], true)}
          {field("More About CTA", ["moreAboutCta"])}
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Feature Cards</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-3">
                <p className="text-xs font-semibold text-gray-400">Card {i + 1}</p>
                {field("Title", ["featureCards", String(i), "title"])}
                {field("Description", ["featureCards", String(i), "description"], true)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section.type === "wcv-sister-companies") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {field("Section Title", ["title"])}
          {field("See More Link Text", ["seeMore"])}
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Companies (13)</p>
          <div className="space-y-3">
            {COMPANY_KEYS.map((key) => (
              <div key={key} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 mb-3 font-mono">{key}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {field("Name", ["companies", key, "name"])}
                  {field("Category", ["companies", key, "category"])}
                  {field("Description", ["companies", key, "description"], true)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section.type === "wcv-qa") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("Caption (small text above title)", ["caption"])}
        {field("Section Title", ["title"])}
      </div>
    );
  }

  if (section.type === "wcv-products") {
    return (
      <div className="space-y-6">
        {field("Section Title", ["title"])}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[0, 1].map((i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-gray-400">Product {i + 1}</p>
              {field("Title", ["products", String(i), "title"])}
              {field("Description", ["products", String(i), "description"], true)}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Image</label>
                <ImageUploadField
                  currentUrl={c?.products?.[i]?.image || ""}
                  uploading={uploading === `product-${i}`}
                  onFileSelected={(file) => onImageUpload(`product-${i}`, file, ["products", String(i), "image"])}
                />
              </div>
              {field("Link (href)", ["products", String(i), "href"])}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-yellow-700 text-sm">
      No editor defined for <strong>{section.type}</strong>.
    </div>
  );
}
