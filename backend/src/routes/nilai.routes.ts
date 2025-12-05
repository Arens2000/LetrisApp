import { Router } from "express";
import { NilaiController } from "../controllers/NilaiController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

// Guru input nilai
router.post(
  "/",
  verifyToken,
  requireRole(["guru", "admin"]),
  NilaiController.add
);

// Nilai per kelas
router.get(
  "/kelas/:kelas",
  verifyToken,
  requireRole(["guru", "admin"]),
  NilaiController.getKelas
);

// Nilai per siswa
router.get(
  "/siswa/:uid",
  verifyToken,
  requireRole(["siswa", "guru", "admin"]),
  NilaiController.getSiswa
);

// Update nilai
router.put(
  "/:id",
  verifyToken,
  requireRole(["guru", "admin"]),
  NilaiController.update
);

// Hapus nilai
router.delete(
  "/:id",
  verifyToken,
  requireRole(["guru", "admin"]),
  NilaiController.delete
);

export default router;
