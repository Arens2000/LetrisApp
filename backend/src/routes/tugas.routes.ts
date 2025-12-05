import { Router } from "express";
import { TugasController } from "../controllers/TugasController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

// Guru membuat tugas
router.post(
  "/",
  verifyToken,
  requireRole(["guru", "admin"]),
  TugasController.createTugas
);

// Ambil semua tugas per kelas
router.get(
  "/kelas/:kelas",
  verifyToken,
  requireRole(["guru", "admin", "siswa"]),
  TugasController.getTugasKelas
);

// Siswa submit tugas
router.post(
  "/submit/:tugasId",
  verifyToken,
  requireRole(["siswa"]),
  upload.single("file"),
  TugasController.submit
);

// Ambil submission siswa per tugas
router.get(
  "/submission/:tugasId",
  verifyToken,
  requireRole(["guru", "admin"]),
  TugasController.getSubmission
);

export default router;

