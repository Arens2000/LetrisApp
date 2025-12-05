import { Request, Response } from "express";
import { KegiatanService } from "../services/KegiatanService";
import { success, error } from "../utils/response";

export class KegiatanController {
  static async create(req: Request, res: Response) {
    try {
      const data = await KegiatanService.create(req.body);
      return success(res, "Kegiatan berhasil ditambahkan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const data = await KegiatanService.list();
      return success(res, "Data kegiatan ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await KegiatanService.delete(id);
      return success(res, "Kegiatan berhasil dihapus", result);
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
