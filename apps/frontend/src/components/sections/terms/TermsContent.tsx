"use client";

import { Info, AlertCircle, Shield, Mail, Phone, MapPin } from "lucide-react";

function SectionCard({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="bg-white border border-[#E8E8E8] rounded-[24px] p-8 lg:p-10 mb-8 scroll-mt-[160px]">
      <div className="border-b border-[#E8E8E8] pb-4 mb-6">
        <h2 className="font-['Funnel_Display'] font-bold text-[24px] text-[#000500] leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-6 font-['Outfit'] text-[16px] text-[#333733] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function TermsContent() {
  return (
    <div className="flex flex-col">
      {/* 1. Acceptance of Terms */}
      <SectionCard id="acceptance" title="1. Acceptance of Terms">
        <p>
          Welcome to Vita Food Complex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions govern your use of our website, products, and services. By accessing our site or purchasing our products, you agree to comply with these terms.
        </p>
        <p>
          If you do not agree with any part of these terms, please do not use our services or purchase our products. We reserve the right to update or modify these terms at any time without prior notice.
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFF695]/50 border border-[#FFF265] rounded-[10px] p-6 flex items-start gap-4 mt-2">
          <Info className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              Important Notice
            </h4>
            <p className="font-['Outfit'] text-[#78350F] text-[14px] leading-relaxed">
              By continuing to use our website after changes are posted, you accept the modified Terms and Conditions. We recommend reviewing this page periodically.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 2. Use of Website */}
      <SectionCard id="use" title="2. Use of Website">
        <p>
          You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, or impair the site, or interfere with any other party&apos;s use of the website.
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Do not attempt to gain unauthorized access to any portion of the website</li>
          <li>Do not use automated systems to access the website without permission</li>
          <li>Do not engage in any activity that disrupts or interferes with our services</li>
          <li>Do not upload malicious code or viruses</li>
        </ul>
      </SectionCard>

      {/* 3. User Content */}
      <SectionCard id="content" title="3. User Content">
        <p>
          If you submit content to our community platform (such as recipes, reviews, or photos), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content.
        </p>
        <p>
          You represent that you own or have the necessary rights to any content you submit, and that it does not violate any third-party rights or applicable laws.
        </p>
      </SectionCard>

      {/* 4. Community Guidelines */}
      <SectionCard id="guidelines" title="4. Community Guidelines">
        <p>
          Our community is built on respect, collaboration, and positivity. When participating in our community features, you agree to:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Be respectful and kind to other community members</li>
          <li>Share authentic and honest content</li>
          <li>Not post offensive, discriminatory, or inappropriate material</li>
          <li>Not spam or post unauthorized commercial content</li>
          <li>Not impersonate others or create fake accounts</li>
        </ul>
        <p>
          We reserve the right to remove any content or suspend accounts that violate these guidelines.
        </p>
      </SectionCard>

      {/* 5. Product Information */}
      <SectionCard id="products" title="5. Product Information">
        <p>
          We strive to ensure that product descriptions, ingredients, and nutritional information on our website are accurate. However, recipes and packaging may change over time.
        </p>
        <p>
          We recommend checking the physical packaging of the product upon delivery for the most current information. Product images are for illustration purposes and actual products may vary slightly.
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFFBEB] border border-[#FFF695]/50 rounded-[10px] p-6 flex items-start gap-4 mt-2">
          <AlertCircle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              Allergen Information
            </h4>
            <p className="font-['Inter'] text-[#78350F] text-[14px] leading-relaxed">
              If you have food allergies or dietary restrictions, always check the product packaging for detailed allergen information. While we provide general information online, we cannot guarantee it is always up to date.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 6. Orders and Purchases */}
      <SectionCard id="orders" title="6. Orders and Purchases">
        <p>
          When placing an order through our platform, you agree to provide accurate contact and delivery information. We reserve the right to accept or decline any order for any reason, including but not limited to:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Product availability</li>
          <li>Pricing errors or system malfunctions</li>
          <li>Delivery area restrictions</li>
          <li>Suspected fraudulent activity</li>
        </ul>
        <p>
          All prices are listed in Ethiopian Birr (ETB) unless otherwise stated. Prices are subject to change without notice but will not affect orders already confirmed.
        </p>
        <p>
          Payment must be completed at the time of order. We accept various payment methods as indicated at checkout.
        </p>
      </SectionCard>

      {/* 7. Intellectual Property */}
      <SectionCard id="ip" title="7. Intellectual Property">
        <p>
          All content on this website, including but not limited to logos, text, graphics, images, videos, and software, is the property of Vita Hydro-Agro Processing PLC and is protected by copyright and intellectual property laws.
        </p>
        <p>
          You may not use, reproduce, distribute, or create derivative works from any content without our express written permission.
        </p>
        <p>
          Trademarks, service marks, and trade names displayed on this website are registered and unregistered marks of Vita Food Complex and may not be used without permission.
        </p>
      </SectionCard>

      {/* 8. Privacy Policy */}
      <SectionCard id="privacy" title="8. Privacy Policy">
        <p>
          Your privacy is important to us. Information collected through order forms, newsletter signups, or community participation is securely stored and used exclusively for:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Fulfilling and delivering your orders</li>
          <li>Communicating with you about products and services</li>
          <li>Improving our website and customer experience</li>
          <li>Sending promotional materials (with your consent)</li>
        </ul>
        <p>
          We do not sell your personal data to third parties. For more detailed information about how we collect, use, and protect your data, please refer to our Privacy Policy page.
        </p>
      </SectionCard>

      {/* 9. Limitation of Liability */}
      <SectionCard id="liability" title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Vita Food Complex shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Your use or inability to use our website or products</li>
          <li>Unauthorized access to or alteration of your data</li>
          <li>Any content, conduct, or communication on our platform</li>
          <li>Any errors or omissions in product information</li>
        </ul>
        <p>
          Our total liability for any claim arising out of these terms shall not exceed the amount you paid for the product or service in question.
        </p>
        
        {/* Highlight Box */}
        <div className="bg-[#FFFBEB] border border-[#FFF695]/50 rounded-[12px] p-6 flex items-start gap-4 mt-2">
          <Shield className="w-6 h-6 text-[#F59E0B] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="font-['Funnel_Display'] font-bold text-[#78350F] text-[14px] leading-tight">
              Product Safety
            </h4>
            <p className="font-['Outfit'] text-[#78350F] text-[14px] leading-relaxed">
              While we maintain high quality standards, we are not liable for improper storage, handling, or consumption of products after delivery. Always follow storage instructions and check expiration dates.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* 10. Contact Us */}
      <SectionCard id="contact" title="10. Contact Us">
        <p>
          If you have any questions about these Terms and Conditions, or need assistance with our products or services, please don&apos;t hesitate to contact us:
        </p>
        
        {/* Contact Card */}
        <div className="bg-gradient-to-tr from-[#23B349] to-[#C5E047] rounded-[24px] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mt-6 shadow-sm">
          <div className="flex flex-col gap-6 items-start">
            <h3 className="font-['Funnel_Display'] font-bold text-white text-[32px] leading-none">
              Get in Touch
            </h3>
            <button className="bg-white text-[#23B349] font-['Outfit'] font-medium text-[16px] px-8 py-3.5 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Send Message <span className="font-bold">→</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  Email
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  legal@vitafoodcomplex.com
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  Phone
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  +251 911 123 456
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-[10px] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Funnel_Display'] font-medium text-white text-[20px] leading-none">
                  Address
                </span>
                <span className="font-['Outfit'] font-medium text-[#E6E6E6] text-[16px] leading-tight">
                  Bole, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#545854] text-[14px] leading-[1.86] mt-4">
          Our customer service team is available Monday to Friday, 9:00 AM to 6:00 PM (EAT). We typically respond to inquiries within 24-48 hours.
        </p>
      </SectionCard>
    </div>
  );
}
