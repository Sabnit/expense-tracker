import { IExpense } from "../interface/expense";
import BaseModel from "./baseModel";

export default class ExpenseModel extends BaseModel {
  static async getExpense() {
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

  static async getExpenseById(id: number) {
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

  static async createExpense(expense: IExpense) {
    return this.queryBuilder().insert(expense).table("expense");
  }

  static async updateExpense(expenseId: number, expense: IExpense) {
    return this.queryBuilder()
      .update(expense)
      .table("expense")
      .where({ expenseId });
  }
  static async deleteExpense(expenseId: number) {
    return this.queryBuilder().table("expense").where({ expenseId }).del();
  }
}
