import {
  EXPENSE_URL,
  INCOME_URL,
  TRANSACTION_URL,
} from "../constants/expenseApp";
import { handleError } from "../utils/messageHandler";
import { get, post, update } from "../utils/http";

export const storeTransaction = async (data: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await post(TRANSACTION_URL, data, {
        Authorization: `Bearer ${accessToken}`,
      });
    }
  } catch (error: unknown) {
    handleError((error as Error).message);
    console.log(error);
  }
};

export const getAllTransactionsPerPage = async (page: number) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(`${TRANSACTION_URL}?page=${page}`, {
        Authorization: `Bearer ${accessToken}`,
      });

      return response;
    }
  } catch (error: unknown) {
    handleError((error as Error).message);
    console.log(error);
  }
};

export const getAllExpenseTransactions = async (page: number) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(`${EXPENSE_URL}&page=${page}`, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    }
  } catch (error) {
    handleError((error as Error).message);
    console.log(error);
  }
};

export const getAllIncomeTransactions = async (page: number) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(`${INCOME_URL}&page=${page}`, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response;
    }
  } catch (error) {
    handleError((error as Error).message);
    console.log(error);
  }
};

export const updateTransaction = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await update(INCOME_URL, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response.data;
    }
  } catch (error) {
    handleError((error as Error).message);
    console.log(error);
  }
};
