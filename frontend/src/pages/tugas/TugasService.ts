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
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface Tugas {
  id?: string;
  judul: string;
  deskripsi: string;
  mapel: string;
  kelas: string;
  deadline: string;
  lampiran?: string;
  guru: string;
}

export interface Submission {
  id?: string;
  tugasId: string;
  uid: string;
  nama: string;
  kelas: string;
  fileUrl: string;
  nilai?: number;
  status: "submitted" | "review" | "done";
  tanggalSubmit: string;
}

const tugasCollection = collection(db, "tugas");
const submissionCollection = collection(db, "submission");

// Upload file to Firebase Storage
export async function uploadAttachment(file: File, path: string) {
  const fileRef = ref(storage, path);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

// Create tugas
export async function createTugas(data: Tugas) {
  await addDoc(tugasCollection, data);
}

// Get tugas by filter (kelas or mapel)
export async function getTugas(filter: Partial<Tugas>) {
  const cond: any[] = [];

  if (filter.kelas) cond.push(where("kelas", "==", filter.kelas));
  if (filter.mapel) cond.push(where("mapel", "==", filter.mapel));

  const q = cond.length ? query(tugasCollection, ...cond) : query(tugasCollection);

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Tugas[];
}

// Create submission
export async function submitTugas(data: Submission) {
  await addDoc(submissionCollection, data);
}

// Get submission by tugasId
export async function getSubmissionByTugas(tugasId: string) {
  const q = query(submissionCollection, where("tugasId", "==", tugasId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Submission[];
}

// Update submission (nilai / status)
export async function updateSubmission(id: string, data: Partial<Submission>) {
  await updateDoc(doc(db, "submission", id), data);
}
