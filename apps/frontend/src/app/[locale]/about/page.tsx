import AboutHeroSection from "@frontend/components/sections/AboutHeroSection";
import AboutStorySection from "@frontend/components/sections/AboutStorySection";
import AboutValuesSection from "@frontend/components/sections/AboutValuesSection";
import AboutOwnersSection from "@frontend/components/sections/AboutOwnersSection";
import TestimonialSection from "@frontend/components/sections/TestimonialSection";
import CTASection from "@frontend/components/sections/CTASection";
import Footer from "@frontend/components/layout/Footer";
import Navbar from "@frontend/components/layout/Navbar";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutOwnersSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
