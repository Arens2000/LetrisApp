import { Router } from "express";
import { PengumumanController } from "../controllers/PengumumanController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

// Buat pengumuman
router.post(
  "/",
  verifyToken,
  requireRole(["guru", "admin"]),
  PengumumanController.create
);

// Semua pengumuman
router.get(
  "/",
  verifyToken,
  requireRole(["siswa", "guru", "admin"]),
  PengumumanController.list
);

// Hapus
router.delete(
  "/:id",
  verifyToken,
  requireRole(["admin"]),
  PengumumanController.delete
);

export default router;

