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
}
