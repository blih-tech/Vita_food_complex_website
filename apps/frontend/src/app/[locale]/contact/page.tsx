import { setRequestLocale } from "next-intl/server";
import ContactFormSection from "@frontend/components/sections/contact/ContactFormSection";
import ContactMapSection from "@frontend/components/sections/contact/ContactMapSection";

export const metadata = {
  title: "Contact Us | Vita Food Complex",
  description: "Get in touch with Vita Food Complex. We would love to hear from you for any questions, feedback, or partnerships.",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "am" }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col w-full bg-white relative">
      {/* Background container to hold global page styles and ensure the background is isolated correctly */}
      <div className="w-full flex flex-col">
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </main>
  );
}
