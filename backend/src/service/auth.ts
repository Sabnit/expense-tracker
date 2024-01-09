import bcrypt from "bcrypt";

import config from "../config";
import { IUser } from "../interface/auth";
import BadRequestError from "../error/badRequestError";
import UserModel from "../model/user";

export async function signup(body: IUser) {
  const hashedPassword = await bcrypt.hash(body.password, config.saltRounds);

  const userEmailExists = await UserModel.getByEmail(body.email);

  if (userEmailExists) {
    throw new BadRequestError(`User with ${body.email} already exists`);
  }

  await UserModel.createUser({
    ...body,
    password: hashedPassword,
  });

  return {
    message: "User signed up successfully",
  };
}

export const login = () => {};
