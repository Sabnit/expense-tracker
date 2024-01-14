import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransaction,
  updateTransaction,
} from "../controller/transaction";
import {} from "../service/transaction";

const router = Router();

router.get("/", getTransaction);

router.post("/", createTransaction);

router.put("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);

export default router;
