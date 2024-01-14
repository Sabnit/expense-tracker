import { IUser } from "../interface/auth";
import BaseModel from "./baseModel";

export default class UserModel extends BaseModel {
  static async getUsers() {
    return this.queryBuilder()
      .select({
        id: "id",
        firstName: "first_name",
        LastName: "last_name",
      })
      .from("users");
  }

  static async getUserById(id: string) {
    return this.queryBuilder()
      .select({
        id: "id",
        firstName: "first_name",
        lastName: "last_name",
        email: "email",
      })
      .from("users")
      .where({ id })
      .first();
  }

  static async getByEmail(email: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        firstName: "first_name",
        lastName: "last_name",
        email: "email",
        password: "password",
      })
      .from("users")
      .where({ email })
      .first();

    return user;
  }

  static async createUser(user: IUser) {
    return this.queryBuilder().insert(user).table("users");
  }

  static async updateUser(userId: string, userInfo: IUser) {
    return this.queryBuilder()
      .update(userInfo)
      .table("users")
      .where({ userId });
  }

  static async deleteUser(userId: string) {
    return this.queryBuilder().table("users").where({ userId }).del();
  }
}
