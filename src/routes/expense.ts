import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpense,
  updateExpense,
} from "../controller/expense";

const route = Router();

route.get("/", getExpense);

route.post("/", createExpense);

route.put("/:id", updateExpense);

route.delete("/:id", deleteExpense);

export default route;
