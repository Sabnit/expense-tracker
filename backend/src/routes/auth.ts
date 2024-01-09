import { Router } from "express";
import { login, signUp } from "../controller/auth";
import { validateReqBody } from "../middleware/validator";
import { createUserSchema } from "../schema/user";

const router = Router();

router.use("/signup", validateReqBody(createUserSchema), signUp);

router.use("/login", login);

export default router;
