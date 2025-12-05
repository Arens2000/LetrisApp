import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface NilaiItem {
  mapel: string;
  kkm: number;
  nilai: number;
  predikat: string;
}

interface SiswaInfo {
  nama: string;
  nis: string;
  kelas: string;
  semester: string;
}

export async function exportNilaiPDF(
  siswa: SiswaInfo,
  nilai: NilaiItem[],
  guru: string
) {
  const doc = new jsPDF("p", "mm", "a4");

  const logo = "/assets/logo.png"; // ubah jika beda
  const ttd = "/assets/ttd-guru.png";

  // Header Kop Sekolah
  doc.addImage(logo, "PNG", 15, 10, 25, 25);

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("SMK LETRIS 2 INDONESIA", 105, 18, { align: "center" });

  doc.setFontSize(11);
  doc.text(
    "Jl. Ir. H. Juanda No. 123, Ciputat • Telp. (021) 12345678",
    105,
    26,
    { align: "center" }
  );

  doc.text("Email: info@smkletris2.sch.id • Website: www.smk-letris.sch.id", 105, 32, {
    align: "center",
  });

  // Garis kop
  doc.setLineWidth(0.8);
  doc.line(15, 40, 195, 40);

  // Judul Dokumen
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("LAPORAN PENILAIAN SISWA", 105, 52, { align: "center" });

  // Profil Siswa
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Nama        : ${siswa.nama}`, 15, 65);
  doc.text(`NIS         : ${siswa.nis}`, 15, 72);
  doc.text(`Kelas       : ${siswa.kelas}`, 15, 79);
  doc.text(`Semester    : ${siswa.semester}`, 15, 86);

  // Tabel Nilai
  autoTable(doc, {
    startY: 95,
    head: [["Mata Pelajaran", "KKM", "Nilai", "Predikat"]],
    body: nilai.map((n) => [n.mapel, n.kkm, n.nilai, n.predikat]),
    theme: "grid",
    styles: { halign: "center" },
  });

  // TTD Guru
  const y = (doc as any).lastAutoTable.finalY + 20;

  doc.text("Mengetahui,", 140, y);
  doc.text("Guru Mata Pelajaran", 140, y + 7);

  doc.addImage(ttd, "PNG", 135, y + 12, 40, 18);

  doc.text(guru, 140, y + 33);

  // Simpan PDF
  doc.save(`Nilai_${siswa.nama}_${siswa.kelas}.pdf`);
}
