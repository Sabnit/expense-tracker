import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpense,
  updateExpense,
} from "../controller/expense";

const router = Router();

router.get("/", getExpense);

router.get("/date-range", getExpensesByDateRange);

router.post("/", createExpense);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

export default router;
