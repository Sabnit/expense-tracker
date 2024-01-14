import { ADD_EXPENSE_URL } from "../constants/expenseApp";
import { post } from "../utils/http";

export const storeTransaction = async (data: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await post(ADD_EXPENSE_URL, data, {
        Authorization: `Bearer ${accessToken}`,
      });
      console.log("Added New ");
    }
  } catch (e: any) {}
};
