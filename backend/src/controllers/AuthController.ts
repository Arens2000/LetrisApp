import { Request, Response } from "express";
import { authAdmin, db } from "../config/firebase";

export class AuthController {
  static async createUser(req: Request, res: Response) {
    try {
      const { email, password, role, name, kelas, nis } = req.body;

      const user = await authAdmin.createUser({
        email,
        password,
        displayName: name,
      });

      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        email,
        role,
        name,
        kelas,
        nis
      });

      res.json({ message: "User created", user });
    } catch (err) {
      res.status(400).json({ message: "Error creating user", error: err });
    }
  }

  static async getProfile(req: any, res: Response) {
    const uid = req.user.uid;
    const doc = await db.collection("users").doc(uid).get();
    res.json(doc.data());
  }
}

