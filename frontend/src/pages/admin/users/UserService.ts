import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser
} from "firebase/auth";
import { auth, db } from "../../../firebase";

export interface AppUser {
  id?: string;
  name: string;
  email: string;
  role: "admin" | "guru" | "siswa";
  kelas?: string;
}

const userCollection = collection(db, "users");

// 📌 CREATE USER (Auth + Firestore)
export async function createUser(data: AppUser, password: string) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    password
  );

  const uid = credential.user.uid;

  await addDoc(userCollection, {
    uid,
    ...data
  });

  return uid;
}

// 📌 GET ALL USERS
export async function getAllUsers() {
  const snapshot = await getDocs(userCollection);
  const users = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as AppUser[];
  return users;
}

// 📌 UPDATE USER FIRESTORE ONLY
export async function updateUserFirestore(id: string, data: Partial<AppUser>) {
  const ref = doc(db, "users", id);
  await updateDoc(ref, data);
}

// 📌 UPDATE PASSWORD USER
export async function resetUserPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}

// 📌 DELETE USER (Firestore + Auth)
export async function deleteUserAll(uid: string, docId: string) {
  await deleteDoc(doc(db, "users", docId));

  const user = auth.currentUser;
  if (user && user.uid === uid) {
    await deleteUser(user);
  }
}
