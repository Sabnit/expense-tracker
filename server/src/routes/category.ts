import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryIdByName,
  updateCategory,
} from "../controller/category";

const router = Router();

router.get("/", getAllCategory);

router.get("/:name", getCategoryIdByName);

router.post("/", createCategory);

router.put("/", updateCategory);

router.delete("/", deleteCategory);

export default router;
