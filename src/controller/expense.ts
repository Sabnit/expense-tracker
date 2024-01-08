import { NextFunction, Request, Response } from "express";
import * as expenseService from "../service/expense";

export async function getExpense(_req: Request, res: Response) {
  const data = await expenseService.getExpense();

  return res.json({
    data,
  });
}

export async function createExpense(_req: Request, res: Response) {}

export async function updateExpense(_req: Request, res: Response) {}

export async function deleteExpense(_req: Request, res: Response) {}
