import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

// Ambil semua user
router.get("/", verifyToken, requireRole(["admin"]), UserController.getAll);

// Update user
router.put("/:uid", verifyToken, requireRole(["admin"]), UserController.update);

// Delete user
router.delete("/:uid", verifyToken, requireRole(["admin"]), UserController.delete);

export default router;
