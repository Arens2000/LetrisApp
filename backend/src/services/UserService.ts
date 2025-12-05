import { db, authAdmin } from "../config/firebase";
import { Logger } from "../utils/logger";

export class UserService {
  static async getAll() {
    const snap = await db.collection("users").get();
    return snap.docs.map((d) => d.data());
  }

  static async getByUid(uid: string) {
    const doc = await db.collection("users").doc(uid).get();
    return doc.data();
  }

  static async create(data: any) {
    Logger.info("Membuat user baru:", data.email);

    const userRecord = await authAdmin.createUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
    });

    const payload = {
      uid: userRecord.uid,
      email: data.email,
      role: data.role,
      name: data.name,
      kelas: data.kelas || "-",
      nis: data.nis || "-",
    };

    await db.collection("users").doc(userRecord.uid).set(payload);

    return payload;
  }

  static async update(uid: string, data: any) {
    await db.collection("users").doc(uid).update(data);
    return { uid, ...data };
  }

  static async delete(uid: string) {
    await db.collection("users").doc(uid).delete();
    try {
      await authAdmin.deleteUser(uid);
    } catch (err) {
      Logger.error("Gagal hapus auth user:", err);
    }
    return { uid };
  }
}

