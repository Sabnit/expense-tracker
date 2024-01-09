import ExpenseModel from "../model/expense";
import { IExpense } from "../interface/expense";
import NotFoundError from "../error/notFoundError";
import { buildMeta, getPaginationOptions } from "../util/pagination";

export const getExpense = async (query: IExpense) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const expensesPromise = ExpenseModel.getExpense({ ...pageDetails, ...query });
  const countPromise = ExpenseModel.countAll(query);

  // console.log(countPromise);

  const [expense, count] = await Promise.all([expensesPromise, countPromise]);

  console.log(expense);
  console.log(count);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: expense,
    meta,
  };
};

export const getExpensesByDateRange = async (
  startDate: Date,
  endDate: Date
) => {
  return ExpenseModel.getExpensesByDateRange(startDate, endDate);
};

export const createExpense = async (expense: IExpense) => {
  return ExpenseModel.createExpense(expense);
};

export const updateExpense = async (expenseId: string, expense: IExpense) => {
  const expenseData = await ExpenseModel.getExpenseById(expenseId);

  if (!expenseData) {
    throw new NotFoundError(`User with id:${expenseId} not found`);
  }

  await ExpenseModel.updateExpense(expenseId, expense);

  const updatedExpense = await ExpenseModel.getExpenseById(expenseId);

  return updatedExpense;
};

export const deleteExpense = async (expenseId: string) => {
  const user = await ExpenseModel.getExpenseById(expenseId);

  if (!user) {
    throw new NotFoundError(`User with id:${expenseId} not found`);
  }

  await ExpenseModel.deleteExpense(expenseId);
};
