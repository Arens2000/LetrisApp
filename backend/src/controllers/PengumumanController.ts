import { Request, Response } from "express";
import { PengumumanService } from "../services/PengumumanService";
import { success, error } from "../utils/response";

export class PengumumanController {
  static async create(req: Request, res: Response) {
    try {
      const data = await PengumumanService.create(req.body);
      return success(res, "Pengumuman berhasil dibuat", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const data = await PengumumanService.list();
      return success(res, "Daftar pengumuman ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await PengumumanService.delete(id);
      return success(res, "Pengumuman berhasil dihapus", result);
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
