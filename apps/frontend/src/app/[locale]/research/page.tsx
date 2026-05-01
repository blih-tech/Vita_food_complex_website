import { useTranslations } from "next-intl";
import ResearchHeroSection from "@frontend/components/sections/research/ResearchHeroSection";
import ResearchOverviewSection from "@frontend/components/sections/research/ResearchOverviewSection";
import ResearchProblemFramingSection from "@frontend/components/sections/research/ResearchProblemFramingSection";
import ResearchUserResearchSection from "@frontend/components/sections/research/ResearchUserResearchSection";

export default function ResearchPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
      <ResearchHeroSection />
      <ResearchOverviewSection />
      <ResearchProblemFramingSection />
      <ResearchUserResearchSection />
    </main>
  );
}
