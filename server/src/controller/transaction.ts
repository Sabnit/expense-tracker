import { NextFunction, Request, Response } from "express";
import * as transactionService from "../service/transaction";
import { ITransaction } from "../interface/transaction";
import { JwtPayload } from "jsonwebtoken";

export async function getTransaction(
  req: Request & { user?: JwtPayload },
  res: Response
) {
  const query = req.query;

  query.createdBy = req.user?.id;

  const data = await transactionService.getTransaction(
    query as unknown as ITransaction
  );

  return res.json(data);
}

export async function createTransaction(
  req: Request & { user?: JwtPayload },
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;
    body.createdBy = req.user?.id;

    const data = await transactionService.createTransaction(
      body as unknown as ITransaction
    );

    return res.json({ message: "Transaction created successfully" });
  } catch (error) {
    next(error);
  }
}

export async function updateTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactionId = req.params.id;
    const body = req.body;
    const data = await transactionService.updateTransaction(
      transactionId,
      body
    );

    return res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deleteTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactionId = req.params.id;

    const data = await transactionService.deleteTransaction(transactionId);

    return res.json({ message: "Transaction successfully deleted" });
  } catch (error) {
    next(error);
  }
}
