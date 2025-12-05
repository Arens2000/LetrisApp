export class KegiatanController {
  static async create(req: any, res: any) {
    await db.collection("kegiatan").add(req.body);
    res.json({ message: "Kegiatan ditambahkan" });
  }

  static async list(req: any, res: any) {
    const snap = await db.collection("kegiatan").get();
    res.json(snap.docs.map((d) => d.data()));
  }
}

