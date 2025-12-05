import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { success, error } from "../utils/response";
import { db } from "../config/firebase";

export class AuthController {
  static async createUser(req: any, res: Response) {
    try {
      const user = await UserService.create(req.body);
      return success(res, "User berhasil dibuat", user);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async getProfile(req: any, res: Response) {
    try {
      const uid = req.user.uid;
      const doc = await db.collection("users").doc(uid).get();
      return success(res, "Profil ditemukan", doc.data());
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
