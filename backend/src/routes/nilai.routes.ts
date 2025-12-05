import { Router } from "express";
import { NilaiController } from "../controllers/NilaiController";
import { verifyToken } from "../middleware/auth";

const router = Router();

router.post("/", verifyToken, NilaiController.addNilai);
router.get("/kelas/:kelas", verifyToken, NilaiController.getNilaiKelas);
router.get("/siswa/:uid", verifyToken, NilaiController.getNilaiSiswa);

export default router;

