import UserModel from "../model/userModel";
import NotFoundError from "../error/notFoundError";
import { IUser } from "../interface/auth";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import serverConfig from "../config";

export const getUsers = async () => {
  return UserModel.getUsers();
};

export const getUserById = async (id: string) => {
  const user = UserModel.getUserById(id);

  console.log(user);

  if (!user) {
    throw new NotFoundError("User not found");
  }
};

export const updateUser = async (userId: string, userInfo: IUser) => {
  const user = await UserModel.getUserById(userId);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  if (userInfo.password) {
    userInfo.password = await bcrypt.hash(
      userInfo.password,
      serverConfig.saltRounds
    );
  }

  await UserModel.updateUser(userId, userInfo);

  const updatedUser = await UserModel.getUserById(userId);

  return updatedUser;
};

export const deleteUserById = async (UserId: string) => {
  const user = await UserModel.getUserById(UserId);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  await UserModel.deleteUser(UserId);
};
