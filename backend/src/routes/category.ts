import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controller/category";

const router = Router();

router.get("/", getAllCategory);

router.post("/", createCategory);

router.put("/", updateCategory);

router.delete("/", deleteCategory);

export default router;
