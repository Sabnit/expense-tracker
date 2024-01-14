import { Router } from "express";
import {
  deleteUser,
  getCurrentUser,
  getUsers,
  updateUser,
} from "../controller/user";
import { auth } from "../middleware/auth";

const router = Router();

router.get("/", getUsers);

router.get("/me", auth, getCurrentUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
