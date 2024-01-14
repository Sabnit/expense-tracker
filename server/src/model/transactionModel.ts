import { Knex } from "knex";
import { ITransaction } from "../interface/transaction";
import BaseModel from "./baseModel";
import { start } from "repl";

export default class TransactionModel extends BaseModel {
  private static injectFilter(query: Knex.QueryBuilder, params: any) {
    if (params.type) {
      query
        .innerJoin("category", "transaction.category", "category.name")
        .where({
          "category.type": params.type,
        });
    }

    if (params.startDate) {
      query.where("transaction.date", ">=", params.startDate);
    }

    if (params.endDate) {
      query.where("transaction.date", "<=", params.endDate);
    }
  }

  static async getTransaction(params: any) {
    const query = this.queryBuilder()
      .select({
        title: "title",
        amount: "amount",
        date: "date",
        categoryName: "category_name",
        createdBy: "created_by",
      })
      .from("transaction")
      .where({ created_by: params.createdBy });

    this.injectFilter(query, params);

    query.offset(params.offset).limit(params.limit);

    return query;
  }

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("transaction")
      .where({ Created_by: params.createdBy })
      .count({ count: "transaction.id" })
      .first();

    this.injectFilter(query, params);

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

  static async getTransactionById(id: string) {
    return this.queryBuilder()
      .select({
        title: "title",
        amount: "amount",
        date: "date",
        categoryName: "category",
        createdBy: "created_by",
      })
      .from("transaction")
      .where({ id })
      .first();
  }

  static async deleteTransaction(transactionId: string) {
    return this.queryBuilder()
      .table("transaction")
      .where({ id: transactionId })
      .del();
  }
}
