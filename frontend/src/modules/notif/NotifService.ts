import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  doc,
  getDocs
} from "firebase/firestore";
import { db } from "../../firebase";
import { Notif } from "./types";

const notifCollection = collection(db, "notifikasi");

// Buat notifikasi baru
export async function pushNotif(data: Notif) {
  await addDoc(notifCollection, data);
}

// Ambil notifikasi untuk user tertentu
export async function getNotif(uid: string) {
  const q = query(
    notifCollection,
    where("uidTarget", "in", [uid, "all"])
  );

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Notif[];
}

// Tandai sebagai dibaca
export async function readNotif(id: string) {
  await updateDoc(doc(db, "notifikasi", id), { read: true });
}

// Listener realtime
export function notifListener(uid: string, callback: (data: Notif[]) => void) {
  const q = query(
    notifCollection,
    where("uidTarget", "in", [uid, "all"])
  );

  return onSnapshot(q, (snap) => {
    callback(
      snap.docs
        .map((d) => ({ id: d.id, ...d.data() } as Notif))
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    );
  });
}
