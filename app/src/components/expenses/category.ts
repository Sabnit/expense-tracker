import { getCategory } from "../../services/category";
import {
  createList,
  getCategoryList,
} from "../../utils/expenseApp/commonUtils";

export const displayExpenseCategory = async () => {
  const categoryObj = await getCategory();

  const expenseList = getCategoryList(categoryObj, "expense");

  createList(expenseList);
};

export const displayIncomeCategory = async () => {
  const categoryObj = await getCategory();

  const incomeList = getCategoryList(categoryObj, "income");

  createList(incomeList);
};
