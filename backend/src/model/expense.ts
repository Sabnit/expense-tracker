import { IExpense } from "../interface/expense";
import BaseModel from "./baseModel";

export default class ExpenseModel extends BaseModel {
  static async getExpense(params: any) {
    const query = this.queryBuilder()
      .select({
        Title: "title",
        Amount: "amount",
        Date: "date",
        Created_by: "created_by",
        Category_id: "category_id",
      })
      .from("expense")
      .where({ Created_by: params.createdBy });
    query.offset(params.offset).limit(params.limit);

    return query;
  }

  static async getExpenseById(id: string) {
    return this.queryBuilder()
      .select({
        Title: "title",
        Amount: "amount",
        Date: "date",
        Created_by: "created_by",
        Category_id: "category_id",
      })
      .from("expense")
      .where({ id })
      .first();
  }

  static async getExpensesByDateRange(startDate: Date, endDate: Date) {
    return this.queryBuilder()
      .select({
        Title: "title",
        Amount: "amount",
        Date: "date",
        Created_by: "created_by",
        Category_id: "category_id",
      })
      .from("expense");
  }

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("expense")
      .where({ Created_by: params.createdBy })
      .count({ count: "id" })
      .first();

    console.log(query);

    return query;
  }

  static async createExpense(expense: IExpense) {
    return this.queryBuilder().insert(expense).table("expense");
  }

  static async updateExpense(expenseId: string, expense: IExpense) {
    return this.queryBuilder()
      .update(expense)
      .table("expense")
      .where({ expenseId });
  }

  static async deleteExpense(expenseId: string) {
    return this.queryBuilder().table("expense").where({ id: expenseId }).del();
  }
}
