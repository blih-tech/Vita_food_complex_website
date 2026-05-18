"use client";

import React, { useState, use } from "react";
import { usePage } from "@/hooks/usePage";
import CustomerCareHero from "@frontend/components/sections/customer-care/CustomerCareHero";
import FormSwitch from "@frontend/components/sections/customer-care/FormSwitch";
import FeedbackForm from "@frontend/components/sections/customer-care/FeedbackForm";
import ComplaintForm from "@frontend/components/sections/customer-care/ComplaintForm";

export default function ContactCustomerCarePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(paramsPromise);
  const [activeTab, setActiveTab] = useState<"feedback" | "complaint">("feedback");
  const { page, loading } = usePage("contact-customer-care");

  const sections = page?.sections;

  const heroContent = sections?.find((s: { type: string }) => s.type === "customer-care-hero")?.content;
  const switchContent = sections?.find((s: { type: string }) => s.type === "customer-care-switch")?.content;
  const feedbackContent = sections?.find((s: { type: string }) => s.type === "customer-care-feedback")?.content;
  const complaintContent = sections?.find((s: { type: string }) => s.type === "customer-care-complaint")?.content;

  if (loading || !sections?.length) {
    return (
      <main className="flex flex-col min-h-screen bg-[#F9FAFB] overflow-x-hidden">
        <CustomerCareHero locale={locale} />
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-8 max-w-[1480px] -mt-24 sm:-mt-36 lg:-mt-56 relative z-20 flex flex-col gap-5 sm:gap-7 lg:gap-12">
          <FormSwitch activeTab={activeTab} onTabChange={setActiveTab} locale={locale} />
          {activeTab === "feedback" ?
            <FeedbackForm locale={locale} />
          : <ComplaintForm locale={locale} />}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      <CustomerCareHero content={heroContent} locale={locale} />

      <div className="w-full mx-auto px-3 sm:px-4 lg:px-8 max-w-[1480px] -mt-24 sm:-mt-36 lg:-mt-56 relative z-20 flex flex-col gap-5 sm:gap-7 lg:gap-12">
        <FormSwitch
          activeTab={activeTab}
          onTabChange={setActiveTab}
          content={switchContent}
          locale={locale}
        />

        {activeTab === "feedback" ?
          <FeedbackForm content={feedbackContent} locale={locale} />
        : <ComplaintForm content={complaintContent} locale={locale} />}
      </div>
    </main>
  );
}
