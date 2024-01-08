import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import expenseRoutes from "./expense";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/expense", expenseRoutes);

export default router;
