import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDqSYC2gbjk_zoHaaGTI1FQr34ggBpiGjA",
  authDomain: "smk-letris-2-indonesia.firebaseapp.com",
  projectId: "smk-letris-2-indonesia",
  storageBucket: "smk-letris-2-indonesia.appspot.com",
  messagingSenderId: "78817737345",
  appId: "1:78817737345:web:ad4f46b73840ebd80cab80",
  measurementId: "G-8R8NSLDXF2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const messaging = await isSupported() ? getMessaging(app) : null;

export default app;
