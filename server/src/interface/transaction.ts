import { PaginationQuery } from "./pagination";

export interface ITransaction extends PaginationQuery {
  title: string;
  amount: number;
  date: Date;
  createdBy: string;
  categoryId: number;
}

export interface ITransactionDate extends PaginationQuery {
  startDate: string;
  endDate: string;
}
