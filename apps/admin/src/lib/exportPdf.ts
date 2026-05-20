"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CustomerCareSubmissionItem } from "./customerCareSubmissionsApi";

const BRAND_GREEN: [number, number, number] = [35, 179, 73];
const BRAND_DARK: [number, number, number] = [51, 55, 51];
const BRAND_LIGHT: [number, number, number] = [240, 250, 243];

const QUESTION_MAP: Record<string, string> = {
  q1: "How do you get sales department Guests handling",
  q2: "Time taken for purchasing process",
  q3: "How do you get store keepers Customer handling",
  q4: "Products quality and safety status",
  q5: "Delivery Time & adequacy",
  q6: "Is loading condition meet standard",
  q7: "Products' price",
  q8: "General Satisfaction",
  previousExperience: "Previous experience",
  employeeEvaluation: "Employee evaluation",
  suggestion: "Additional suggestion",
  additional: "Additional information",
  customerName: "Customer Name",
  address: "Address",
  city: "City",
  woreda: "Woreda",
  phone: "Phone",
  productDetails: "Product Details",
  productType: "Product Type Purchased",
  quantity: "Quantity/Number",
  detail: "Detail of Complaint/Compliment"
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

function addSummaryBadges(
  doc: jsPDF,
  items: { label: string; value: number; color: [number, number, number] }[],
  startY: number
) {
  const badgeWidth = (doc.internal.pageSize.width - 28 - (items.length - 1) * 5) / items.length;
  
  items.forEach((badge, i) => {
    const x = 14 + i * (badgeWidth + 5);
    doc.setFillColor(...BRAND_LIGHT);
    doc.roundedRect(x, startY, badgeWidth, 14, 2, 2, "F");
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...badge.color);
    doc.text(String(badge.value), x + badgeWidth / 2, startY + 9, { align: "center" });
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120, 120, 120);
    doc.text(badge.label, x + badgeWidth / 2, startY + 13, { align: "center" });
  });
}

export function exportSubmissionsToPdf(items: CustomerCareSubmissionItem[], title = "Customer Care Submissions") {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  addBrandHeader(doc, "Vita Food Complex", title);

  const stats = [
    { label: "Total", value: items.length, color: BRAND_DARK },
    { label: "Feedback", value: items.filter(i => i.kind === 'feedback').length, color: BRAND_GREEN },
    { label: "Complaints", value: items.filter(i => i.kind === 'complaint').length, color: [219, 39, 119] as [number, number, number] },
    { label: "New", value: items.filter(i => i.status === 'new').length, color: [37, 99, 235] as [number, number, number] },
  ];

  addSummaryBadges(doc, stats, 36);

  autoTable(doc, {
    startY: 56,
    head: [["#", "Summary", "Type", "Status", "Locale", "Submitted"]],
    body: items.map((i, idx) => [
      idx + 1,
      i.summary,
      i.kind.toUpperCase(),
      i.status.toUpperCase(),
      i.locale.toUpperCase(),
      formatDate(i.createdAt),
    ]),
    styles: { fontSize: 8, cellPadding: 3, textColor: BRAND_DARK },
    headStyles: {
      fillColor: BRAND_GREEN,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8.5,
    },
    alternateRowStyles: { fillColor: BRAND_LIGHT },
    didDrawPage: (data) => {
      doc.setFontSize(7);
      doc.setTextColor(160, 160, 160);
      doc.text(
        `Page ${data.pageNumber} of ${doc.getNumberOfPages()}  •  Vita Food Complex — Customer Care Report`,
        148.5,
        doc.internal.pageSize.height - 5,
        { align: "center" }
      );
    },
  });

  doc.save(`vita-care-submissions-${Date.now()}.pdf`);
}

export function exportSingleSubmissionPdf(item: CustomerCareSubmissionItem) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  addBrandHeader(doc, "Vita Food Complex", "Customer Care Detail");

  doc.setFillColor(...BRAND_LIGHT);
  doc.roundedRect(14, 38, 182, 35, 3, 3, "F");

  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND_DARK);
  doc.text(item.summary, 24, 49);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  doc.text(`Type: ${item.kind.toUpperCase()}`, 24, 57);
  doc.text(`Locale: ${item.locale.toUpperCase()}`, 24, 63);

  const statusColors: Record<string, [number, number, number]> = {
    new: [37, 99, 235],
    read: BRAND_GREEN,
    archived: [107, 114, 128],
  };
  const sColor = statusColors[item.status] ?? BRAND_DARK;
  doc.setFillColor(...sColor);
  doc.roundedRect(155, 42, 30, 10, 2, 2, "F");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(item.status.toUpperCase(), 170, 49, { align: "center" });

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(`Received: ${formatDate(item.createdAt)}`, 155, 63);

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND_GREEN);
  doc.text("Submission Content", 14, 85);

  doc.setFillColor(248, 250, 252);
  doc.roundedRect(14, 89, 182, 160, 3, 3, "F");

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...BRAND_DARK);

  let y = 100;
  Object.entries(item.payload).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
        Object.entries(value as Record<string, unknown>).forEach(([subKey, subVal]) => {
           const label = QUESTION_MAP[subKey] || subKey;
           doc.setFont("helvetica", "bold");
           doc.text(`${label}:`, 18, y);
           doc.setFont("helvetica", "normal");
           doc.text(String(subVal), 100, y);
           y += 7;
        });
    } else {
        const label = QUESTION_MAP[key] || key;
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, 18, y);
        doc.setFont("helvetica", "normal");
        doc.text(String(value), 100, y);
        y += 7;
    }
  });

  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text(`Submission ID: ${item._id}`, 14, 275);
  if (item.readAt) doc.text(`Viewed at: ${formatDate(item.readAt)}`, 14, 279);

  doc.text("Vita Food Complex — Customer Care Document", 105, 285, { align: "center" });

  doc.save(`vita-care-${item._id}.pdf`);
}
