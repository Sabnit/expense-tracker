import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import * as authService from "../service/auth";
import { IUser } from "../interface/auth";

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const body: IUser = req.body;
    await authService.signup(body);

    return res.status(HttpStatus.CREATED).json({
      message: "Signed up successfully",
    });
  } catch (error) {
    next(error);
  }
}
export const login = (req: Request, res: Response) => {};
