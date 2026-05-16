"use client";

import React, { useState, use } from "react";
import CustomerCareHero from "@frontend/components/sections/customer-care/CustomerCareHero";
import FormSwitch from "@frontend/components/sections/customer-care/FormSwitch";
import FeedbackForm from "@frontend/components/sections/customer-care/FeedbackForm";
import ComplaintForm from "@frontend/components/sections/customer-care/ComplaintForm";

export default function ContactCustomerCarePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = use(paramsPromise);
  const [activeTab, setActiveTab] = useState<"feedback" | "complaint">("feedback");

  return (
    <main className="flex flex-col min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      <CustomerCareHero />
      
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-8 max-w-[1480px] -mt-24 sm:-mt-36 lg:-mt-56 relative z-20 flex flex-col gap-5 sm:gap-7 lg:gap-12">
        <FormSwitch activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "feedback" ? <FeedbackForm /> : <ComplaintForm />}
      </div>
    </main>
  );
}
