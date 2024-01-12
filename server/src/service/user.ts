import UserModel from "../model/userModel";

export const getUsers = async () => {
  return UserModel.getUsers();
};

export const updateUserById = async () => {};

export const deleteUserById = async () => {};
