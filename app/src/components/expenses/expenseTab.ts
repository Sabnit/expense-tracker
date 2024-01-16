import domButton from "../../dom/expenseApp/button";
import domContainer from "../../dom/expenseApp/container";
import { ITransaction } from "../../interface/transaction";
import { categoryIconList } from "../../utils/expenseApp/category";
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
  domButton.nextPageLink.disabled = false;
};

export const renderIncome = () => {
  displayIncomeCategory();
  displayIncomeTransactions();
  domButton.nextPageLink.disabled = false;
};

export const renderDashboard = () => {
  displayTransactions();
  domButton.nextPageLink.disabled = false;

  hideElement(domContainer.transactionDetailContainer);
};

export const renderTransactions = (transactions: ITransaction[]) => {
  createTransactionList(transactions, categoryIconList);
};
