import { ITransaction } from "../interface/transaction";
import BaseModel from "./baseModel";

export default class TransactionModel extends BaseModel {
  static async getTransaction(params: any) {
    const query = this.queryBuilder()
      .select({
        title: "title",
        amount: "amount",
        date: "date",
        created_by: "created_by",
        category_id: "category_id",
      })
      .from("transaction")
      .where({ created_by: params.createdBy });
    query.offset(params.offset).limit(params.limit);

    return query;
  }

  static async getTransactionById(id: string) {
    return this.queryBuilder()
      .select({
        Title: "title",
        Amount: "amount",
        Date: "date",
        Created_by: "created_by",
        Category_id: "category_id",
      })
      .from("transaction")
      .where({ id })
      .first();
  }

  static async getTransactionsByDateRange(startDate: Date, endDate: Date) {
    return this.queryBuilder()
      .select({
        Title: "title",
        Amount: "amount",
        Date: "date",
        Created_by: "created_by",
        Category_id: "category_id",
      })
      .from("transaction");
  }

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("transaction")
      .where({ Created_by: params.createdBy })
      .count({ count: "id" })
      .first();

    return query;
  }

  static async createTransaction(transaction: ITransaction) {
    return this.queryBuilder().insert(transaction).table("transaction");
  }

  static async updateTransaction(
    transactionId: string,
    transaction: ITransaction
  ) {
    return this.queryBuilder()
      .update(transaction)
      .table("transaction")
      .where({ transactionId });
  }

  static async deleteTransaction(transactionId: string) {
    return this.queryBuilder()
      .table("transaction")
      .where({ id: transactionId })
      .del();
  }
}
