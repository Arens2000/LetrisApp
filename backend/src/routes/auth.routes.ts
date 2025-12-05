import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

router.post("/create", verifyToken, requireRole(["admin"]), AuthController.createUser);
router.get("/profile", verifyToken, AuthController.getProfile);

export default router;

