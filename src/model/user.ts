import { IsUnion } from "joi";
import { IUser } from "../interface/auth";
import BaseModel from "./baseModel";

export default class UserModel extends BaseModel {
  static async getUsers() {
    return this.queryBuilder()
      .select({
        id: "id",
        firstName: "fname",
        LastName: "lname",
      })
      .from("users");
  }
  static async getByEmail(email: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        fname: "fname",
        lname: "lname",
        email: "email",
      })
      .from("users")
      .where({ email })
      .first();

    return user;
  }

  static async createUser(user: IUser) {
    return this.queryBuilder().insert(user).table("users");
  }

  static async updateExpense(userId: number, user: IUser) {
    return this.queryBuilder().update(user).table("users").where({ userId });
  }

  static async deleteExpense(userId: number) {
    return this.queryBuilder().table("users").where({ userId }).del();
  }
}
