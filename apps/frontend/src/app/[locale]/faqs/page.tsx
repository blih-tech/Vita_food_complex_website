import { useTranslations } from "next-intl";
import FAQSection from "@frontend/components/sections/FAQSection";

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF] pt-[120px] lg:pt-[160px] pb-24">
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-[270px]">
        <FAQSection />
      </div>
    </main>
  );
}
