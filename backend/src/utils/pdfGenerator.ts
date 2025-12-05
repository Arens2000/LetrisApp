import PDFDocument from "pdfkit";
import { bucket } from "../config/firebase";
import fs from "fs";

interface HeaderOptions {
  title: string;
  subtitle?: string;
  logoPath?: string;
}

export function createPDF(path: string, header: HeaderOptions, build: (doc: PDFKit.PDFDocument) => void) {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 40 });
      const stream = fs.createWriteStream(path);

      doc.pipe(stream);

      // Logo
      if (header.logoPath) {
        doc.image(header.logoPath, 40, 20, { width: 70 });
      }

      // Title
      doc.fontSize(16).font("Helvetica-Bold");
      doc.text(header.title, { align: "center" });

      if (header.subtitle) {
        doc.fontSize(12).font("Helvetica");
        doc.text(header.subtitle, { align: "center" });
      }

      doc.moveDown(2);

      // Custom content
      build(doc);

      doc.end();

      stream.on("finish", () => resolve(path));
    } catch (err) {
      reject(err);
    }
  });
}

