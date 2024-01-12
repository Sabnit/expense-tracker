import { Router } from "express";
import {
  deleteUserById,
  getUserMe,
  getUsers,
  updateUserById,
} from "../controller/user";

const router = Router();

router.get("/", getUsers);

router.get("/me", getUserMe);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUserById);

export default router;
