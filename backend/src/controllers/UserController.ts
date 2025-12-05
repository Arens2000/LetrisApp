import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { success, error } from "../utils/response";

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      return success(res, "Data user ditemukan", users);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { uid } = req.params;
      const updated = await UserService.update(uid, req.body);
      return success(res, "User berhasil diupdate", updated);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { uid } = req.params;
      const result = await UserService.delete(uid);
      return success(res, "User berhasil dihapus", result);
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
