import { Router } from "express";
import { deleteUserById, getUsers, updateUserById } from "../controller/user";

const router = Router();

router.get("/", getUsers);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUserById);

export default router;
