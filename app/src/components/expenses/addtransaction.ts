import { domAddTransactionInputs } from "../../dom/expenseApp/inputFields";
import { storeTransaction } from "../../services/transaction";
import { getActiveTab } from "../../utils/expenseApp/commonUtils";
import { renderDashboard, renderExpense, renderIncome } from "./expenseTab";
import {
  displayExpenseTransactions,
  displayIncomeTransactions,
} from "./getTransaction";

export const addNewTransaction = async () => {
  const category = domAddTransactionInputs.category.value;
  const date = new Date(domAddTransactionInputs.date.value).toISOString();
  const note = domAddTransactionInputs.note.value;
  const amount = parseInt(domAddTransactionInputs.amount.value) as number;

  storeTransaction({ category, date, note, amount });

  const activeTabState = getActiveTab();

  if (activeTabState["expense"]) {
    await displayExpenseTransactions();
    renderExpense();
  }

  if (activeTabState["income"]) {
    await displayIncomeTransactions();
    renderIncome();
  }
};
