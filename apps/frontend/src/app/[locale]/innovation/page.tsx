import { setRequestLocale } from "next-intl/server";
import InnovationHeroSection from "@frontend/components/sections/innovation/InnovationHeroSection";
import InnovationApproachSection from "@frontend/components/sections/innovation/InnovationApproachSection";
import InnovationDiverseSection from "@frontend/components/sections/innovation/InnovationDiverseSection";

export default async function InnovationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
      <InnovationHeroSection />
      <InnovationApproachSection />
      <InnovationDiverseSection />
    </main>
  );
}
