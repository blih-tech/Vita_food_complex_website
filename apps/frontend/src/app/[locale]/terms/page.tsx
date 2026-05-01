import { useTranslations } from "next-intl";
import { Shield } from "lucide-react";
import TermsSidebar from "@frontend/components/sections/terms/TermsSidebar";
import TermsContent from "@frontend/components/sections/terms/TermsContent";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FAFAFA] pt-[120px] lg:pt-[160px] pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-['Outfit'] text-[#333733] text-[14px]">
              Legal / Documentation
            </span>
            <h1 className="font-['Funnel_Display'] font-bold text-[#000500] text-[36px] md:text-[48px] leading-tight">
              Terms & Conditions
            </h1>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
            <Shield className="w-5 h-5 text-gray-500" />
            <span className="font-['Outfit'] text-[#333733] text-[14px]">
              Last updated: October 1, 2026
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-[320px] shrink-0 sticky top-[120px]">
            <TermsSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <TermsContent />
          </div>
        </div>
      </div>
    </main>
  );
}
