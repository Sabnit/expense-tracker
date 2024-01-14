import { NextFunction, Request, Response } from "express";
import * as userService from "../service/user";
import { JwtPayload } from "jsonwebtoken";

export async function getUsers(req: Request, res: Response) {
  const data = await userService.getUsers();

  return res.json({
    data,
  });
}

export async function getCurrentUser(
  req: Request & { user?: JwtPayload },
  res: Response,
  next: NextFunction
) {
  {
    try {
      const { user } = req;

      if (user) {
        const data = await userService.getUserById(user.id);

        return res.json({ data });
      }
    } catch (error) {
      next(error);
    }
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.params.id;
    const userDetails = req.body;

    const data = await userService.updateUser(userId, userDetails);

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const UserId = req.params.id;

    await userService.deleteUserById(UserId);

    return res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
