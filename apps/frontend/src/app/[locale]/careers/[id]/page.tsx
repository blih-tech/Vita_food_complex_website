import { notFound } from "next/navigation";
import JobDetailsContent from "@frontend/components/sections/JobDetailsContent";
import OpenPositionsSection from "@frontend/components/sections/OpenPositionsSection";

/* Figma Job Details page (node 2570:11373):
   1. Job details card with Apply now CTA
   2. Open Positions section below
*/

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <JobDetailsContent jobId={id} />
      <OpenPositionsSection />
    </main>
  );
}
