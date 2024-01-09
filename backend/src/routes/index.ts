import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import expenseRoutes from "./expense";
import { auth } from "../middleware/auth";
import categoryRoutes from "./category";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/expense", auth, expenseRoutes);

router.use("/category", categoryRoutes);

export default router;
