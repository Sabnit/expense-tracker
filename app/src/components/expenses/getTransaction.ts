import {
  getAllExpenseTransactions,
  getAllIncomeTransactions,
  getAllTransactionsPerPage,
} from "../../services/transaction";
import { categoryIconList } from "../../utils/expenseApp/category";
import { createTransactionList } from "../../utils/expenseApp/commonUtils";
import { renderTransactions } from "./expenseTab";

export const displayTransactions = async () => {
  const transactionObj = await getAllTransactionsPerPage(1);
  createTransactionList(transactionObj.data, categoryIconList);
};

export const displayIncomeTransactions = async () => {
  const transactions = await getAllIncomeTransactions(1);

  renderTransactions(transactions.data);
};

export const displayExpenseTransactions = async () => {
  const transactions = await getAllExpenseTransactions(1);

  renderTransactions(transactions.data);
};
