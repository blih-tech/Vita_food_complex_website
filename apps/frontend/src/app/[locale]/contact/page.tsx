import { setRequestLocale } from "next-intl/server";
import ContactFormSection from "@frontend/components/sections/contact/ContactFormSection";
import ContactMapSection from "@frontend/components/sections/contact/ContactMapSection";

export const metadata = {
  title: "Contact Us | Vita Food Complex",
  description:
    "Get in touch with Vita Food Complex. We would love to hear from you for any questions, feedback, or partnerships.",
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
    <main className="flex flex-col w-full bg-white relative overflow-hidden">
      {/* Global Background gradients representing the neon green glow for the entire page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-linear-to-br from-white via-[#D9F9CC]/70 to-white opacity-80" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-[#74FF38]/30 blur-[150px] rounded-[100%]" />
        <div className="absolute top-[5%] right-[-10%] w-[60%] h-[60%] bg-[#4EE044]/20 blur-[180px] rounded-[100%]" />
        {/* Glow bleeding down into the map area */}
        <div className="absolute top-[40%] left-[-15%] w-[50%] h-[40%] bg-[#74FF38]/25 blur-[180px] rounded-[100%]" />
      </div>

      {/* Content container */}
      <div className="w-full flex flex-col relative z-10">
        <ContactFormSection />
        <ContactMapSection />
      </div>
    </main>
  );
}
