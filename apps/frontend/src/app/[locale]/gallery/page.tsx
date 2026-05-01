import { useTranslations } from "next-intl";
import GalleryHeroSection from "@frontend/components/sections/gallery/GalleryHeroSection";
import CommunityWallSection from "@frontend/components/sections/gallery/CommunityWallSection";
import PartnerTestimonialSection from "@frontend/components/sections/gallery/PartnerTestimonialSection";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white pt-[100px] lg:pt-[120px]">
      <GalleryHeroSection />
      <CommunityWallSection />
      <PartnerTestimonialSection />
    </main>
  );
}
