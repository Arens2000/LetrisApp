export class PengumumanController {
  static async create(req: any, res: any) {
    await db.collection("pengumuman").add(req.body);
    res.json({ message: "Pengumuman dibuat" });
  }

  static async list(req: any, res: any) {
    const snap = await db.collection("pengumuman").get();
    res.json(snap.docs.map((d) => d.data()));
  }
}

