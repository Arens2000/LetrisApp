import * as XLSX from "xlsx";

export function exportNilaiExcel(nilai: any[], filename: string) {
  const worksheet = XLSX.utils.json_to_sheet(nilai);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Nilai");

  XLSX.writeFile(workbook, filename + ".xlsx");
}
