import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import transactionRoutes from "./transaction";
import { auth } from "../middleware/auth";
import categoryRoutes from "./category";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/transaction", auth, transactionRoutes);

router.use("/category", categoryRoutes);

export default router;
