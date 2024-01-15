import { PaginationQuery } from "./pagination";

export interface ITransaction extends PaginationQuery {
  amount: number;
  date: string;
  createdBy: string;
  categoryId: number;
  startDate?: string;
  endDate?: string;
}
