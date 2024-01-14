import { domAddTransactionInputs } from "../../dom/expenseApp/inputFields";
import { storeTransaction } from "../../services/transaction";

export const addNewTransaction = () => {
  const title = domAddTransactionInputs.title.value;
  const category = domAddTransactionInputs.category.value;
  const date = new Date(domAddTransactionInputs.date.value).toISOString();
  const note = domAddTransactionInputs.note.value;
  const amount = parseInt(domAddTransactionInputs.amount.value) as number;

  storeTransaction({ title, category, date, note, amount });
};
