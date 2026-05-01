import CareersHeroSection from "@frontend/components/sections/CareersHeroSection";
import WhyJoinSection from "@frontend/components/sections/WhyJoinSection";
import OpenPositionsSection from "@frontend/components/sections/OpenPositionsSection";

/* Figma Career page (node 2542:10271):
   1. Hero - "Build Your Future with Vita"
   2. Why Join section - 6 benefit buttons
   3. Open Positions - job listing cards
*/

export default function CareersPage() {
  return (
    <main className="flex flex-col">
      <CareersHeroSection />
      <WhyJoinSection />
      <OpenPositionsSection />
    </main>
  );
}
