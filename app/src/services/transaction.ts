import {
  EXPENSE_URL,
  INCOME_URL,
  TRANSACTION_URL,
} from "../constants/expenseApp";
import { showError } from "../utils/auth/commonUtils";
import { handleError } from "../utils/error";
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
  }
};

export const getAllTransactions = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(TRANSACTION_URL, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response.data;
    }
  } catch (error: unknown) {
    console.log("getallTra");
    handleError((error as Error).message);
  }
};

export const getAllExpenseTransactions = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(EXPENSE_URL, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response.data;
    }
  } catch (error) {
    handleError((error as Error).message);
  }
};

export const getAllIncomeTransactions = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await get(INCOME_URL, {
        Authorization: `Bearer ${accessToken}`,
      });
      return response.data;
    }
  } catch (error) {
    handleError((error as Error).message);
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
  }
};
