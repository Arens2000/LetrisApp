import { db } from "../config/firebase";

export class TugasController {
  static async createTugas(req: any, res: any) {
    await db.collection("tugas").add(req.body);
    res.json({ message: "Tugas dibuat" });
  }

  static async submit(req: any, res: any) {
    await db.collection("submission").add(req.body);
    res.json({ message: "Submission dikirim" });
  }

  static async getSubmission(req: any, res: any) {
    const { tugasId } = req.params;
    const snap = await db
      .collection("submission")
      .where("tugasId", "==", tugasId)
      .get();

    res.json(snap.docs.map((d) => d.data()));
  }
}

