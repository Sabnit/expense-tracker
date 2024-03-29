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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;

    const data = await authService.login(body);

    return res.json(data);
  } catch (error) {
    next(error);
  }
};

export const logout = async (_req: Request, res: Response) => {
  return res.json({
    message: "User logged out successfully",
  });
};
