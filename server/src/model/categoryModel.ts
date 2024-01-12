import { query } from "express";
import BaseModel from "./baseModel";

export default class CategoryModel extends BaseModel {
  static async getCategory() {
    const query = this.queryBuilder()
      .select({
        category: "name",
      })
      .from("category");
    return query;
  }

  static async getCategoryIdByName() {
    const query = this.queryBuilder()
      .select({
        id: "id",
        category: "name",
      })
      .from("category");

    return query;
  }
}
