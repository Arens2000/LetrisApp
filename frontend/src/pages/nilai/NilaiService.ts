import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebase";

export interface Nilai {
  id?: string;
  uid: string;
  nama: string;
  kelas: string;
  mapel: string;
  semester: number;
  nilai: number;
  tanggal: string;
}

const nilaiCollection = collection(db, "nilai");

// Create
export async function addNilai(data: Nilai) {
  await addDoc(nilaiCollection, data);
}

// Get by filter
export async function getNilai(filter: Partial<Nilai>) {
  const conditions: any[] = [];

  if (filter.uid)
    conditions.push(where("uid", "==", filter.uid));

  if (filter.kelas)
    conditions.push(where("kelas", "==", filter.kelas));

  if (filter.semester)
    conditions.push(where("semester", "==", filter.semester));

  if (filter.mapel)
    conditions.push(where("mapel", "==", filter.mapel));

  const q = conditions.length
    ? query(nilaiCollection, ...conditions)
    : query(nilaiCollection);

  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Nilai[];
}

// Update
export async function updateNilai(id: string, data: Partial<Nilai>) {
  await updateDoc(doc(db, "nilai", id), data);
}

// Delete
export async function deleteNilai(id: string) {
  await deleteDoc(doc(db, "nilai", id));
}
