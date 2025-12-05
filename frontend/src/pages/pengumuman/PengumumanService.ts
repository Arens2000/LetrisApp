import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  doc
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface Pengumuman {
  id?: string;
  judul: string;
  isi: string;
  kategori: "umum" | "penting";
  target: string; // semua, kelas X, kelas XI, kelas XII
  lampiran?: string;
  tanggal: string;
  pengirim: string;
}

const pengumumanCollection = collection(db, "pengumuman");

// Upload file lampiran
export async function uploadLampiran(file: File) {
  const fileRef = ref(storage, `pengumuman/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

// Buat pengumuman
export async function createPengumuman(data: Pengumuman) {
  await addDoc(pengumumanCollection, data);
}

// Get pengumuman (opsional filter kelas)
export async function getPengumuman(target?: string) {
  let q = query(pengumumanCollection);

  if (target && target !== "semua")
    q = query(pengumumanCollection, where("target", "==", target));

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Pengumuman[];
}

// Update
export async function updatePengumuman(id: string, data: Partial<Pengumuman>) {
  await updateDoc(doc(db, "pengumuman", id), data);
}

// Delete
export async function deletePengumuman(id: string) {
  await deleteDoc(doc(db, "pengumuman", id));
}
