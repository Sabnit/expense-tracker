import { categoryIconList } from "../../utils/expenseApp/category";
import domContainer from "../../dom/expenseApp/container";
import { ITransaction } from "../../interface/transaction";
import {
  createTransactionList,
  hideElement,
} from "../../utils/expenseApp/commonUtils";
import { displayExpenseCategory, displayIncomeCategory } from "./category";
import {
  displayExpenseTransactions,
  displayIncomeTransactions,
  displayTransactions,
} from "./getTransaction";

export const renderExpense = () => {
  displayExpenseCategory();
  displayExpenseTransactions();
};

export const renderIncome = () => {
  displayIncomeCategory();
  displayIncomeTransactions();
};

export const renderDashboard = () => {
  displayTransactions();

  hideElement(domContainer.transactionDetailContainer);
};

export const renderTransactions = (transactions: ITransaction[]) => {
  createTransactionList(transactions, categoryIconList);
};
