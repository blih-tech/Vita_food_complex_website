import { setRequestLocale } from "next-intl/server";
import WeCareHeroSection from "@frontend/components/sections/we-care/WeCareHeroSection";
import WeCareHeartSection from "@frontend/components/sections/we-care/WeCareHeartSection";
import WeCareDrivenSection from "@frontend/components/sections/we-care/WeCareDrivenSection";
import WeCareDifferenceSection from "@frontend/components/sections/we-care/WeCareDifferenceSection";
import WeCareBannerSection from "@frontend/components/sections/we-care/WeCareBannerSection";
import SocialWallSection from "@frontend/components/sections/SocialWallSection";

export default async function WeCarePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">
      <WeCareHeroSection />
      <WeCareHeartSection />
      <WeCareDrivenSection />
      <WeCareDifferenceSection />
      <WeCareBannerSection />
      <SocialWallSection />
    </main>
  );
}
