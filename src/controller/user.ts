import { Request, Response } from "express";
import * as userService from "../service/user";

export async function getUsers(req: Request, res: Response) {
  const data = await userService.getUsers();

  return res.json({
    data,
  });
}

export const createUser = (req: Request, res: Response) => {};

export const updateUserById = (req: Request, res: Response) => {};

export const deleteUserById = (req: Request, res: Response) => {};
