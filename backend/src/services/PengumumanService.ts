import { db } from "../config/firebase";

export class PengumumanService {
  static async create(data: any) {
    const ref = await db.collection("pengumuman").add(data);
    return { id: ref.id, ...data };
  }

  static async list() {
    const snap = await db.collection("pengumuman").get();
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  static async delete(id: string) {
    await db.collection("pengumuman").doc(id).delete();
    return { id };
  }
}

