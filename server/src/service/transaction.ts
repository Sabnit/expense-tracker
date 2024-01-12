import { ITransaction } from "../interface/transaction";
import NotFoundError from "../error/notFoundError";
import { buildMeta, getPaginationOptions } from "../util/pagination";
import TransactionModel from "../model/TransactionModel";

export const getTransaction = async (query: ITransaction) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const transactionsPromise = TransactionModel.getTransaction({
    ...pageDetails,
    ...query,
  });
  const countPromise = TransactionModel.countAll(query);

  const [transaction, count] = await Promise.all([
    transactionsPromise,
    countPromise,
  ]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: transaction,
    meta,
  };
};

export const getTransactionByDateRange = async (
  startDate: Date,
  endDate: Date
) => {
  return TransactionModel.getTransactionsByDateRange(startDate, endDate);
};

export const createTransaction = async (transaction: ITransaction) => {
  return TransactionModel.createTransaction(transaction);
};

export const updateTransaction = async (
  transactionId: string,
  transaction: ITransaction
) => {
  const transactionData = await TransactionModel.getTransactionById(
    transactionId
  );

  if (!transactionData) {
    throw new NotFoundError(`User with id:${transactionId} not found`);
  }

  await TransactionModel.updateTransaction(transactionId, transaction);

  const updatedTransaction = await TransactionModel.getTransactionById(
    transactionId
  );

  return updatedTransaction;
};

export const deleteTransaction = async (transactionId: string) => {
  const user = await TransactionModel.getTransactionById(transactionId);

  if (!user) {
    throw new NotFoundError(`User with id:${transactionId} not found`);
  }

  await TransactionModel.deleteTransaction(transactionId);
};
