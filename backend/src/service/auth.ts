import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const login = async (body: IUser) => {
  const user = await UserModel.getByEmail(body.email);

  console.log(body.password, user.password);

  if (!user) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  console.log(passwordMatch);

  if (!passwordMatch) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiry,
  });

  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: config.jwt.refreshTokenExpiry,
  });

  return {
    accessToken,
    refreshToken,
  };
};
