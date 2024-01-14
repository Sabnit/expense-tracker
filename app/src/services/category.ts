import { CATEGORY_URL } from "../constants/expenseApp";

import { get } from "../utils/http";

export const getCategory = async () => {
  try {
    const response = await get(CATEGORY_URL);

    const category = response.data;

    return category;
  } catch (error) {
    console.log("error", error);
  }
};
