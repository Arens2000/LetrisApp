import { db } from "../config/firebase";

export class NilaiController {
  static async addNilai(req: any, res: any) {
    await db.collection("nilai").add(req.body);
    res.json({ message: "Nilai ditambahkan" });
  }

  static async getNilaiKelas(req: any, res: any) {
    const { kelas } = req.params;
    const snap = await db.collection("nilai").where("kelas", "==", kelas).get();
    res.json(snap.docs.map((d) => d.data()));
  }

  static async getNilaiSiswa(req: any, res: any) {
    const { uid } = req.params;
    const snap = await db.collection("nilai").where("uid", "==", uid).get();
    res.json(snap.docs.map((d) => d.data()));
  }
}

