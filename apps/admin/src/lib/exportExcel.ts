import * as XLSX from "xlsx";
import { CustomerCareSubmissionItem } from "./customerCareSubmissionsApi";

// Mapping of keys to human-readable labels if needed
const FIELD_LABELS: Record<string, string> = {
  customerName: "Customer Name",
  phone: "Phone",
  city: "City",
  detail: "Detail",
  address: "Address",
  woreda: "Woreda",
  productDetails: "Product Details",
  productType: "Product Type",
  quantity: "Quantity"
};

export function exportSubmissionsToExcel(items: CustomerCareSubmissionItem[], fileName: string = "submissions.xlsx") {
  const feedbackItems = items.filter(item => item.kind === 'feedback');
  const complaintItems = items.filter(item => item.kind === 'complaint');

  const mapToRow = (item: CustomerCareSubmissionItem) => {
    const row: Record<string, any> = {
      Summary: item.summary,
      Type: item.kind.toUpperCase(),
      Status: item.status.toUpperCase(),
      Date: new Date(item.createdAt).toLocaleDateString(),
    };

    // Flatten payload
    Object.entries(item.payload).forEach(([key, value]) => {
      if (key === 'ratings' && typeof value === 'object') {
        Object.entries(value as Record<string, any>).forEach(([qKey, qVal]) => {
          row[`Rating: ${qKey}`] = qVal;
        });
      } else if (typeof value === 'object' && value !== null) {
        Object.entries(value as Record<string, any>).forEach(([subKey, subVal]) => {
          row[subKey] = subVal;
        });
      } else {
        const label = FIELD_LABELS[key] || key;
        row[label] = value;
      }
    });

    return row;
  };

  const wb = XLSX.utils.book_new();

  const feedbackSheet = XLSX.utils.json_to_sheet(feedbackItems.map(mapToRow));
  XLSX.utils.book_append_sheet(wb, feedbackSheet, "Feedback");

  const complaintSheet = XLSX.utils.json_to_sheet(complaintItems.map(mapToRow));
  XLSX.utils.book_append_sheet(wb, complaintSheet, "Complaints");

  XLSX.writeFile(wb, fileName);
}
