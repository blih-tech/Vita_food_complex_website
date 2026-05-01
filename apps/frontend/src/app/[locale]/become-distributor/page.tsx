import DistributorHeroSection from "@frontend/components/sections/distributor/DistributorHeroSection";
import WhyWorkWithVitaSection from "@frontend/components/sections/distributor/WhyWorkWithVitaSection";
import WhoCanDistributeSection from "@frontend/components/sections/distributor/WhoCanDistributeSection";
import EasyStepsSection from "@frontend/components/sections/distributor/EasyStepsSection";
import ContactDistributionSection from "@frontend/components/sections/distributor/ContactDistributionSection";

/* Figma "Became distributor" page section order:
   1. Hero — "Grow Your Business with Vita" + warehouse background
   2. Why Work With Vita — 4 benefit cards
   3. Who Can Become a Distributor — van image + numbered criteria
   4. Start in 3 Easy Steps — neumorphic icon steps with dashed arcs
   5. Contact Our Distribution Team — split card with offices
*/

export default function BecomeDistributorPage() {
  return (
    <main className="flex flex-col">
      <DistributorHeroSection />
      <WhyWorkWithVitaSection />
      <WhoCanDistributeSection />
      <EasyStepsSection />
      <ContactDistributionSection />
    </main>
  );
}
