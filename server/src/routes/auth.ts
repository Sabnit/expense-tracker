import { Router } from "express";
import { login, logout, signUp } from "../controller/auth";
import { validateReqBody } from "../middleware/validator";
import { createUserSchema, loginUserSchema } from "../schema/user";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/signup", validateReqBody(createUserSchema), signUp);

router.use("/login", validateReqBody(loginUserSchema), login);

router.use("/logout", auth, logout);

export default router;
