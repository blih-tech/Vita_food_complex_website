import DistributorHeroSection from "@frontend/components/sections/distributor/DistributorHeroSection";
import WhyWorkWithVitaSection from "@frontend/components/sections/distributor/WhyWorkWithVitaSection";
import WhoCanDistributeSection from "@frontend/components/sections/distributor/WhoCanDistributeSection";
import EasyStepsSection from "@frontend/components/sections/distributor/EasyStepsSection";
import ContactDistributionSection from "@frontend/components/sections/distributor/ContactDistributionSection";

type DistributorCmsPage = {
  sections?: Array<{
    id: string;
    type: string;
    content?: {
      en?: Record<string, unknown>;
      am?: Record<string, unknown>;
    };
  }>;
};

async function fetchDistributorCmsPage(): Promise<DistributorCmsPage | null> {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api/v1";
  const urls = raw.split(",").map((u) => u.trim());
  const apiBase =
    urls.length > 1
      ? process.env.NODE_ENV === "production"
        ? (urls.find((u) => !u.includes("localhost")) ?? urls[0])
        : urls[0]
      : urls[0];

  try {
    const response = await fetch(`${apiBase}/content/pages/become-distributor`, {
      next: { revalidate: 120 },
    });
    if (!response.ok) return null;
    return (await response.json()) as DistributorCmsPage;
  } catch {
    return null;
  }
}

function getLocalizedSectionContent(
  page: DistributorCmsPage | null,
  sectionType: string | string[],
  locale: string,
): Record<string, unknown> | undefined {
  const sectionTypes = Array.isArray(sectionType) ? sectionType : [sectionType];
  const section = page?.sections?.find((s) => sectionTypes.includes(s.type));
  if (!section?.content) return undefined;
  const key = locale === "am" ? "am" : "en";
  return section.content[key] ?? section.content.en;
}

/* Figma "Became distributor" page section order:
   1. Hero — "Grow Your Business with Vita" + warehouse background
   2. Why Work With Vita — 4 benefit cards
   3. Who Can Become a Distributor — van image + numbered criteria
   4. Start in 3 Easy Steps — neumorphic icon steps with dashed arcs
   5. Contact Our Distribution Team — split card with offices
*/

type BecomeDistributorPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BecomeDistributorPage({ params }: BecomeDistributorPageProps) {
  const { locale } = await params;
  const cmsPage = await fetchDistributorCmsPage();
  const heroContent = getLocalizedSectionContent(cmsPage, "distributor-hero", locale);
  const whyWorkContent = getLocalizedSectionContent(cmsPage, "distributor-why-work", locale);
  const whoCanContent = getLocalizedSectionContent(cmsPage, "distributor-who-can-partner", locale);
  const stepsContent = getLocalizedSectionContent(
    cmsPage,
    ["distributor-easy-steps", "distributor-steps"],
    locale,
  );
  const contactContent = getLocalizedSectionContent(cmsPage, "distributor-contact", locale);

  return (
    <main className="flex flex-col">
      <DistributorHeroSection
        content={heroContent as { label?: string; headline?: string; subtitle?: string; cta?: string; image?: string } | undefined}
      />
      <WhyWorkWithVitaSection
        content={whyWorkContent as { title?: string; description?: string; cards?: { demand?: string; supply?: string; brand?: string; margins?: string } } | undefined}
      />
      <WhoCanDistributeSection
        content={whoCanContent as { sectionTitle?: string; title?: string; description?: string; image?: string; items?: string[] } | undefined}
      />
      <EasyStepsSection
        content={stepsContent as { title?: string; subtitle?: string; call?: { title?: string; description?: string }; discussion?: { title?: string; description?: string }; started?: { title?: string; description?: string } } | undefined}
      />
      <ContactDistributionSection
        content={contactContent as { title?: string; description?: string; offices?: Array<{ name?: string; phone?: string; address?: string; coverage?: string }> } | undefined}
      />
    </main>
  );
}
