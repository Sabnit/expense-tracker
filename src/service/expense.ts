import { number } from "joi";
import ExpenseModel from "../model/expense";
import { IExpense } from "../interface/expense";
import exp from "constants";
import NotFoundError from "../error/notFoundError";
import UserModel from "../model/user";

export const getExpense = async () => {
  return ExpenseModel.getExpense();
};

export const createExpense = async (expense: IExpense) => {
  return ExpenseModel.createExpense(expense);
};

export const updateExpense = async (expenseId: number, expense: IExpense) => {
  const expenseData = await ExpenseModel.getExpenseById(expenseId);

  if (!expenseData) {
    throw new NotFoundError(`User with id:${expenseId} not found`);
  }

  await ExpenseModel.updateExpense(expenseId, expense);

  const updatedExpense = await ExpenseModel.getExpenseById(expenseId);

  return updatedExpense;
};

export const deleteExpense = async (expenseId: number) => {
  const user = await ExpenseModel.getExpenseById(expenseId);

  if (!user) {
    throw new NotFoundError(`User with id:${expenseId} not found`);
  }

  await ExpenseModel.deleteExpense(expenseId);
};
