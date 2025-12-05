import { db } from "../config/firebase";

export class NilaiService {
  static async add(data: any) {
    const ref = await db.collection("nilai").add(data);
    return { id: ref.id, ...data };
  }

  static async getNilaiSiswa(uid: string) {
    const snap = await db.collection("nilai").where("uid", "==", uid).get();
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  static async getNilaiKelas(kelas: string) {
    const snap = await db.collection("nilai").where("kelas", "==", kelas).get();
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  static async update(id: string, data: any) {
    await db.collection("nilai").doc(id).update(data);
    return { id, ...data };
  }

  static async delete(id: string) {
    await db.collection("nilai").doc(id).delete();
    return { id };
  }
}

