import { ITransaction } from "../interface/transaction";
import NotFoundError from "../error/notFoundError";
import { buildMeta, getPaginationOptions } from "../util/pagination";
import TransactionModel from "../model/TransactionModel";

export const getTransaction = async (params: ITransaction) => {
  const { page, size } = params;

  const pageDetails = getPaginationOptions({ page, size });

  const transactionsPromise = TransactionModel.getTransaction({
    ...pageDetails,
    ...params,
  });

  const countPromise = TransactionModel.countAll(params);

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

export const createTransaction = async (transaction: ITransaction) => {
  return await TransactionModel.createTransaction(transaction);
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
