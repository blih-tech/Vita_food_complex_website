import JobApplicationForm from "@frontend/components/sections/JobApplicationForm";

/* Figma Job Apply page (node 2586:13059):
   1. Form header
   2. 5 form cards: Personal, Professional, Education, Resume, Additional
   3. Submit button
*/

export default function JobApplyPage() {
  return (
    <main className="flex flex-col">
      <JobApplicationForm />
    </main>
  );
}
