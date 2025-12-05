import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";
import { db } from "../../firebase";

export interface Presensi {
  id?: string;
  uid: string;
  nama: string;
  kelas: string;
  tanggal: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpha";
}

const presensiCollection = collection(db, "presensi");

// Tambah presensi
export async function addPresensi(data: Presensi) {
  await addDoc(presensiCollection, data);
}

// Get presensi dengan filter
export async function getPresensi(filter: Partial<Presensi>) {
  const conditions: any[] = [];

  if (filter.uid) conditions.push(where("uid", "==", filter.uid));
  if (filter.kelas) conditions.push(where("kelas", "==", filter.kelas));
  if (filter.tanggal) conditions.push(where("tanggal", "==", filter.tanggal));

  const q =
    conditions.length > 0
      ? query(presensiCollection, ...conditions)
      : query(presensiCollection);

  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Presensi[];
}

// Update
export async function updatePresensi(id: string, data: Partial<Presensi>) {
  await updateDoc(doc(db, "presensi", id), data);
}

// Delete
export async function deletePresensi(id: string) {
  await deleteDoc(doc(db, "presensi", id));
}
