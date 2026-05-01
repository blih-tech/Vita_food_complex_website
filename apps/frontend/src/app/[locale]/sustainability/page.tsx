import SustainabilityHeroSection from "@frontend/components/sections/SustainabilityHeroSection";
import SustainabilityCommitmentSection from "@frontend/components/sections/SustainabilityCommitmentSection";
import SustainabilityProcessSection from "@frontend/components/sections/SustainabilityProcessSection";
import SustainabilityGiveBackSection from "@frontend/components/sections/SustainabilityGiveBackSection";

/* Figma Sustainability page (node 274:5181) section order:
   1. Hero — "Sourced with Care, Shared with Purpose"
   2. Commitment — "Our Commitment" + 3 cards + Quick Fact
   3. Sustainability Process — 4 steps (Farmers, Processing, Distribution, Reuse)
   4. How We Give Back — 3 cards
*/

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col">
      <SustainabilityHeroSection />
      <SustainabilityCommitmentSection />
      <SustainabilityProcessSection />
      <SustainabilityGiveBackSection />
    </main>
  );
}
