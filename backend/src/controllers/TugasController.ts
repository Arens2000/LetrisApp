import { Request, Response } from "express";
import { TugasService } from "../services/TugasService";
import { success, error } from "../utils/response";

export class TugasController {
  static async createTugas(req: Request, res: Response) {
    try {
      const data = await TugasService.createTugas(req.body);
      return success(res, "Tugas berhasil dibuat", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async getTugasKelas(req: Request, res: Response) {
    try {
      const { kelas } = req.params;
      const data = await TugasService.getTugasKelas(kelas);
      return success(res, "Data tugas kelas ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async submit(req: any, res: Response) {
    try {
      const uid = req.user.uid;
      const { tugasId } = req.params;

      const file = req.file;

      if (!file) return error(res, "File tidak ditemukan", 400);

      const submission = await TugasService.submit(
        uid,
        tugasId,
        file,
        req.body
      );

      return success(res, "Tugas berhasil dikumpulkan", submission);
    } catch (err: any) {
      return error(res, err.message);
    }
  }

  static async getSubmission(req: Request, res: Response) {
    try {
      const { tugasId } = req.params;
      const data = await TugasService.getSubmission(tugasId);
      return success(res, "Submission ditemukan", data);
    } catch (err: any) {
      return error(res, err.message);
    }
  }
}
