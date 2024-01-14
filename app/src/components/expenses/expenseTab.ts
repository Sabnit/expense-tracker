import {
  expenseCategoryList,
  incomeCategotyList,
} from "../../services/category";

export const renderExpense = () => {
  expenseCategoryList();
};

export const renderIncome = () => {
  incomeCategotyList();
};
