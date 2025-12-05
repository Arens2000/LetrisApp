import { db } from "../config/firebase";

export class KegiatanService {
  static async create(data: any) {
    const ref = await db.collection("kegiatan").add(data);
    return { id: ref.id, ...data };
  }

  static async list() {
    const snap = await db.collection("kegiatan").get();
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  static async delete(id: string) {
    await db.collection("kegiatan").doc(id).delete();
    return { id };
  }
}

