import { NextFunction, Request, Response } from "express";
import * as expenseService from "../service/expense";
import { IExpense, IExpenseDate } from "../interface/expense";

export async function getExpense(req: Request, res: Response) {
  const query = req.query;

  const data = await expenseService.getExpense(query as unknown as IExpense);

  return res.json(data);
}

export async function getExpensesByDateRange(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page = 1, size = 10, startDate, endDate } = req.query;
    const query: IExpenseDate;

    const data = await expenseService.getExpensesByDateRange(query);

    return res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function createExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;

    const data = await expenseService.createExpense(body);

    return res.json({ message: "Expense created successfully" });
  } catch (error) {
    next(error);
  }
}

export async function updateExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const expenseId = req.params.id;
    const body = req.body;
    const data = await expenseService.updateExpense(expenseId, body);

    return res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deleteExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const expenseId = req.params.id;

    const data = await expenseService.deleteExpense(expenseId);

    return res.json({ message: "Expense successfully deleted" });
  } catch (error) {
    next(error);
  }
}
