import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  doc
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface Kegiatan {
  id?: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  poster?: string;
  kelas: string; // bisa “semua”, “X”, dll
  pembuat: string;
  status: "aktif" | "selesai";
}

const kegiatanCollection = collection(db, "kegiatan");

// Upload file poster
export async function uploadPoster(file: File) {
  const fileRef = ref(storage, `poster/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

// Buat kegiatan
export async function createKegiatan(data: Kegiatan) {
  await addDoc(kegiatanCollection, data);
}

// Get semua kegiatan / filter
export async function getKegiatan(filter?: Partial<Kegiatan>) {
  const cond: any[] = [];

  if (filter?.kelas) cond.push(where("kelas", "==", filter.kelas));
  if (filter?.status) cond.push(where("status", "==", filter.status));

  const q =
    cond.length > 0
      ? query(kegiatanCollection, ...cond)
      : query(kegiatanCollection);

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Kegiatan[];
}

// Update kegiatan
export async function updateKegiatan(id: string, data: Partial<Kegiatan>) {
  await updateDoc(doc(db, "kegiatan", id), data);
}

// Delete kegiatan
export async function deleteKegiatan(id: string) {
  await deleteDoc(doc(db, "kegiatan", id));
}
