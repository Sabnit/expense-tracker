import { EXPENSE_CATEGORY, INCOME_CATEGORY } from "../constants/expenseApp";
import { ICategory } from "../interface/category";
import { createList } from "../components/expenses/category";
import { get } from "../utils/http";

export const expenseCategoryList = async () => {
  try {
    const response = await get(EXPENSE_CATEGORY);

    const expenseList = response.data.map((list: ICategory) => list.name);

    createList(expenseList);
  } catch (e: any) {
    console.log("error", e);
  }
};

export const incomeCategotyList = async () => {
  try {
    const response = await get(INCOME_CATEGORY);

    const incomeList = response.data.map((list: ICategory) => list.name);

    createList(incomeList);
  } catch (e: any) {
    console.log("error", e);
  }
};
