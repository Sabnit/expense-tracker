import BaseModel from "./baseModel";
import { ICategory } from "../interface/category";
import { Knex } from "knex";

export default class CategoryModel extends BaseModel {
  private static injectFilter(query: Knex.QueryBuilder, params: any) {
    if (params.type) {
      query.where({
        "category.type": params.type,
      });
    }
  }

  static async getCategory(params: ICategory) {
    const query = this.queryBuilder()
      .select({
        id: "id",
        category: "name",
        type: "type",
      })
      .from("category");

    this.injectFilter(query, params);

    return query;
  }
}
