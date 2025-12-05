import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

export const loginService = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerService = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, password);

export const forgotPasswordService = (email: string) =>
  sendPasswordResetEmail(auth, email);

export const logoutService = () => signOut(auth);
