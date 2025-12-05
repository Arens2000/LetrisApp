import { Request, Response } from "express";
import { NilaiService } from "../services/NilaiService";
import { success, error } from "../utils/response";

export class NilaiController {
  static async add(req: Request, res: Response) {
    try {
      const data = await NilaiService.add(req.body);
      return success(res, "Nilai berhasil ditambahkan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async getKelas(req: Request, res: Response) {
    try {
      const { kelas } = req.params;
      const data = await NilaiService.getNilaiKelas(kelas);
      return success(res, "Data nilai kelas ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async getSiswa(req: Request, res: Response) {
    try {
      const { uid } = req.params;
      const data = await NilaiService.getNilaiSiswa(uid);
      return success(res, "Data nilai siswa ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await NilaiService.update(id, req.body);
      return success(res, "Nilai berhasil diupdate", updated);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await NilaiService.delete(id);
      return success(res, "Nilai berhasil dihapus", deleted);
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
