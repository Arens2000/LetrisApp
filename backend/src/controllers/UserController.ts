import { db } from "../config/firebase";

export class UserController {
  static async getAll(req: any, res: any) {
    const snap = await db.collection("users").get();
    res.json(snap.docs.map((d) => d.data()));
  }

  static async updateUser(req: any, res: any) {
    const { uid } = req.params;
    await db.collection("users").doc(uid).update(req.body);
    res.json({ message: "User updated" });
  }

  static async deleteUser(req: any, res: any) {
    const { uid } = req.params;
    await db.collection("users").doc(uid).delete();
    res.json({ message: "User deleted" });
  }
}

