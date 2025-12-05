import { db, bucket } from "../config/firebase";

export class TugasService {
  static async createTugas(data: any) {
    const ref = await db.collection("tugas").add(data);
    return { id: ref.id, ...data };
  }

  static async getTugasKelas(kelas: string) {
    const snap = await db.collection("tugas").where("kelas", "==", kelas).get();
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  static async submit(uid: string, tugasId: string, file: any, payload: any) {
    const fileName = `submission/${uid}_${tugasId}_${Date.now()}`;
    const upload = bucket.file(fileName);

    await upload.save(file.buffer, {
      contentType: file.mimetype,
    });

    const fileUrl = await upload.getSignedUrl({
      action: "read",
      expires: "03-01-2030",
    });

    const data = {
      uid,
      tugasId,
      fileUrl: fileUrl[0],
      timestamp: Date.now(),
      ...payload,
    };

    await db.collection("submission").add(data);
    return data;
  }

  static async getSubmission(tugasId: string) {
    const snap = await db
      .collection("submission")
      .where("tugasId", "==", tugasId)
      .get();

    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
}

