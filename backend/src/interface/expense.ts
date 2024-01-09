import { PaginationQuery } from "./pagination";

export interface IExpense extends PaginationQuery {
  title: string;
  amount: number;
  date: Date;
  createdBy: string;
  categoryId: number;
}

export interface IExpenseDate extends PaginationQuery {
  startDate: string;
  endDate: string;
}
