"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CustomerCareSubmissionItem } from "./customerCareSubmissionsApi";

const BRAND_GREEN: [number, number, number] = [35, 179, 73];
const BRAND_DARK: [number, number, number] = [51, 55, 51];
const BRAND_LIGHT: [number, number, number] = [240, 250, 243];

const QUESTION_MAP: Record<string, { en: string; am: string }> = {
  q1: { en: "Sales department guest handling", am: "የሽያጭ ክፍል የእንግዳ አቀባበል" },
  q2: { en: "Purchasing process time", am: "ለግዢ ሂደት የሚወስደው ጊዜ" },
  q3: { en: "Store keepers customer handling", am: "የመጋዘን ሰራተኞች የደንበኞች አያያዝ" },
  q4: { en: "Products quality and safety", am: "የምርቶች ጥራት እና ደህንነት" },
  q5: { en: "Delivery time & adequacy", am: "የማድረስ ጊዜ እና በቂነት" },
  q6: { en: "Loading condition standard", am: "የምርቱ አጫጫን ሁኔታ ደረጃውን የጠበቀ" },
  q7: { en: "Products' price", am: "የምርቶች ዋጋ" },
  q8: { en: "Do you love vita?", am: "ቪታን ትወደዋለህ?" },
  previousExperience: { en: "Previous experience", am: "ከዚህ ቀደም ከምርታችን እና ከአገልግሎታችን ጋር የተያያዘ ልምድ" },
  employeeEvaluation: { en: "Employee evaluation", am: "የሰራተኞች ግምገማ" },
  suggestion: { en: "Additional suggestion", am: "ተጨማሪ አስተያየት" },
  additional: { en: "Additional information", am: "ተጨማሪ መረጃ" },
  customerName: { en: "Customer Name", am: "የደንበኛ ስም" },
  address: { en: "Address", am: "አድራሻ" },
  city: { en: "City", am: "ከተማ" },
  woreda: { en: "Woreda", am: "ወረዳ" },
  phone: { en: "Phone", am: "ስልክ" },
  productDetails: { en: "Product Details", am: "የምርት ዝርዝሮች" },
  productType: { en: "Product Type Purchased", am: "የተገዛው የምርት ዓይነት" },
  quantity: { en: "Quantity/Number", am: "ብዛት/ቁጥር" },
  detail: { en: "Detail of Complaint/Compliment", am: "የቅሬታ/ምስጋና ዝርዝር" },
  name: { en: "Reference Name", am: "ማጣቀሻ ስም" },
  date: { en: "Date", am: "ቀን" }
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function sanitizeText(text: any): string {
    if (typeof text !== 'string') return String(text ?? '');
    // Remove non-printable characters and control characters
    return text.replace(/[^\x20-\x7E\u1200-\u137F\u00A0-\u00FF]/g, '');
}

function addBrandHeader(doc: jsPDF, title: string, subtitle: string) {
  doc.setFillColor(...BRAND_GREEN);
  doc.rect(0, 0, doc.internal.pageSize.width, 32, "F");

  doc.setFillColor(255, 255, 255);
  doc.circle(18, 16, 7, "F");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND_GREEN);
  doc.setFont("helvetica", "bold");
  doc.text("V", 15.5, 18.5);

  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text(title, 30, 13);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, 30, 22);

  const now = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  doc.setFontSize(8);
  doc.text(`Generated: ${now}`, doc.internal.pageSize.width - 14, 22, { align: "right" });
}

export function exportSingleSubmissionPdf(
    item: CustomerCareSubmissionItem, 
    questionMap: Record<string, { en: string; am: string }>
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  
  // Note: Standard fonts don't support Amharic well without specific unicode support.
  // Using standard font but filtering characters, or potentially using a custom font if available.
  addBrandHeader(doc, "Vita Food Complex", "Submission Detail Report");

  doc.setFillColor(...BRAND_LIGHT);
  doc.roundedRect(14, 38, 182, 35, 3, 3, "F");

  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND_DARK);
  doc.text(sanitizeText(item.summary), 24, 49);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  doc.text(`Type: ${item.kind.toUpperCase()}`, 24, 57);
  doc.text(`Locale: ${item.locale.toUpperCase()}`, 24, 63);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND_GREEN);
  doc.text("Submission Details", 14, 85);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...BRAND_DARK);

  let y = 95;

  const renderPayload = (payload: Record<string, unknown>) => {
    Object.entries(payload).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        Object.entries(value as Record<string, unknown>).forEach(([subKey, subVal]) => {
           const labels = questionMap[subKey] || { en: subKey, am: subKey };
           doc.setFont("helvetica", "bold");
           doc.text(`${labels.en}:`, 18, y);
           doc.setFont("helvetica", "normal");
           doc.text(sanitizeText(subVal), 80, y);
           y += 7;
        });
      } else {
        const labels = questionMap[key] || { en: key, am: key };
        doc.setFont("helvetica", "bold");
        doc.text(`${labels.en}:`, 18, y);
        doc.setFont("helvetica", "normal");
        doc.text(sanitizeText(value), 80, y);
        y += 7;
      }
    });
  };

  renderPayload(item.payload);

  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text(`Submission ID: ${item._id}`, 14, 280);
  doc.text("Vita Food Complex — Customer Care Document", 105, 285, { align: "center" });

  doc.save(`submission-${item._id}.pdf`);
}
