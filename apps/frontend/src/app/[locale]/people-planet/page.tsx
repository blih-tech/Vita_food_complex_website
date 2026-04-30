import { setRequestLocale } from "next-intl/server";
import CommunityHero from "@frontend/components/sections/community/CommunityHero";
import OurCommitment from "@frontend/components/sections/community/OurCommitment";
import CommunitySupport from "@frontend/components/sections/community/CommunitySupport";
import CharityInitiatives from "@frontend/components/sections/community/CharityInitiatives";
import MakeImpact from "@frontend/components/sections/community/MakeImpact";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "am" }];
}

export default async function PeoplePlanetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col w-full min-h-screen  overflow-hidden">
      <CommunityHero />
      <OurCommitment />
      <CommunitySupport />
      <CharityInitiatives />
      <MakeImpact />
    </main>
  );
}
