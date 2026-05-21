"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";
import { CustomerCareSubmissionItem } from "./customerCareSubmissionsApi";

const BRAND_GREEN: [number, number, number] = [35, 179, 73];
const BRAND_DARK: [number, number, number] = [51, 55, 51];
const BRAND_LIGHT: [number, number, number] = [240, 250, 243];

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

export async function exportSubmissionsToPdf(items: CustomerCareSubmissionItem[]) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  addBrandHeader(doc, "Vita Food Complex", "Customer Care Submissions Report");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BRAND_DARK);
  doc.text(`Total Submissions: ${items.length}`, 14, 45);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);

  const tableData = items.map(item => [
    item.summary,
    item.kind.toUpperCase(),
    item.status.toUpperCase(),
    new Date(item.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  ]);

  autoTable(doc, {
    startY: 55,
    head: [["Summary", "Type", "Status", "Date"]],
    body: tableData,
    headStyles: {
      fillColor: BRAND_GREEN,
      textColor: 255,
      fontStyle: "bold",
      fontSize: 9
    },
    bodyStyles: {
      fillColor: 255,
      textColor: 80,
      fontSize: 8
    },
    alternateRowStyles: {
      fillColor: BRAND_LIGHT
    },
    styles: {
      cellPadding: 4,
      overflow: "linebreak"
    }
  });

  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text("Vita Food Complex — Customer Care Document", 105, 285, { align: "center" });

  doc.save("customer-care-submissions.pdf");
}

export async function exportSingleSubmissionPdf(
    item: CustomerCareSubmissionItem,
    questionMap: Record<string, { en: string; am: string }>
) {
  // Create a hidden container to render the content
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // A4 width in pixels at 96 DPI
  container.style.padding = '40px';
  container.style.backgroundColor = '#ffffff';
  container.style.fontFamily = 'Outfit, sans-serif';

  // Build the HTML content
  let html = `
    <div style="background: #23B349; padding: 20px 40px; margin: -40px -40px 20px -40px; color: white;">
      <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Vita Food Complex</h1>
      <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Submission Detail Report</p>
    </div>
    <div style="background: #F0FAF3; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="margin: 0 0 10px 0; font-size: 18px; color: #333733; font-weight: bold;">${item.summary}</h2>
      <p style="margin: 5px 0; font-size: 12px; color: #505050;">Type: ${item.kind.toUpperCase()}</p>
      <p style="margin: 5px 0; font-size: 12px; color: #505050;">Locale: ${item.locale.toUpperCase()}</p>
    </div>
    <h3 style="font-size: 16px; color: #23B349; font-weight: bold; margin-bottom: 15px;">Submission Details</h3>
    <div style="border-top: 1px solid #f0f0f0;">
  `;

  const renderRow = (k: string, val: unknown) => {
    const labels = questionMap[k] || { en: k, am: k };
    return `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 12px 0; border-bottom: 1px solid #f9f9f9;">
        <div style="font-size: 14px; font-weight: 500; color: #6b7280;">
          ${labels.en} / <span style="font-family: 'Desta', sans-serif;">${labels.am}</span>
        </div>
        <div style="font-size: 14px; font-weight: 600; color: #333733; word-wrap: break-word;">
          ${String(val ?? '')}
        </div>
      </div>
    `;
  };

  Object.entries(item.payload).forEach(([key, value]) => {
    if (key === 'ratings' && typeof value === 'object') {
      Object.entries(value as Record<string, unknown>).forEach(([qKey, qVal]) => {
        html += renderRow(qKey, qVal);
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value as Record<string, unknown>).forEach(([subKey, subVal]) => {
        html += renderRow(subKey, subVal);
      });
    } else {
      html += renderRow(key, value);
    }
  });

  html += `
    </div>
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 11px; color: #b4b4b4;">
      <p style="margin: 5px 0;">Submission ID: ${item._id}</p>
      <p style="margin: 5px 0; text-align: center;">Vita Food Complex — Customer Care Document</p>
    </div>
  `;

  container.innerHTML = html;
  document.body.appendChild(container);

  try {
    // Render the HTML to canvas
    const canvas = await html2canvas(container, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Create PDF from canvas
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`submission-${item._id}.pdf`);
  } finally {
    document.body.removeChild(container);
  }
}
