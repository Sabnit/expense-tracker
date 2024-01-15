import { categoryIconList } from "../../utils/expenseApp/category";
import {
  getAllExpenseTransactions,
  getAllIncomeTransactions,
  getAllTransactions,
} from "../../services/transaction";
import { createTransactionList } from "../../utils/expenseApp/commonUtils";
import { renderTransactions } from "./expenseTab";

export const displayTransactions = async () => {
  const transactionObj = await getAllTransactions();

  createTransactionList(transactionObj, categoryIconList);
};

export const displayIncomeTransactions = async () => {
  const transactions = await getAllIncomeTransactions();

  renderTransactions(transactions);
};

export const displayExpenseTransactions = async () => {
  const transactions = await getAllExpenseTransactions();

  renderTransactions(transactions);
};
