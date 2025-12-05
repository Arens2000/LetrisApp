import { Router } from "express";
import { KegiatanController } from "../controllers/KegiatanController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

// Tambah kegiatan
router.post(
  "/",
  verifyToken,
  requireRole(["guru", "admin"]),
  KegiatanController.create
);

// List kegiatan
router.get(
  "/",
  verifyToken,
  requireRole(["siswa", "guru", "admin"]),
  KegiatanController.list
);

// Hapus kegiatan
router.delete(
  "/:id",
  verifyToken,
  requireRole(["admin"]),
  KegiatanController.delete
);

export default router;

