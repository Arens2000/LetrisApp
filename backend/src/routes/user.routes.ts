import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { verifyToken } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = Router();

router.get("/", verifyToken, requireRole(["admin"]), UserController.getAll);
router.put("/:uid", verifyToken, requireRole(["admin"]), UserController.updateUser);
router.delete("/:uid", verifyToken, requireRole(["admin"]), UserController.deleteUser);

export default router;

