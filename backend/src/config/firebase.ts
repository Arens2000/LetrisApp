import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import serviceAccount from "../../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  storageBucket: "smk-letris-2-indonesia.appspot.com"
});

export const db = getFirestore();
export const bucket = getStorage().bucket();
export const authAdmin = admin.auth();

