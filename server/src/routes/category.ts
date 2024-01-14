import { Router } from "express";
import { getAllCategory } from "../controller/category";

const router = Router();

router.get("/", getAllCategory);

export default router;
