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
      
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <FormSwitch activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "feedback" ? <FeedbackForm /> : <ComplaintForm />}
      </div>
    </main>
  );
}
