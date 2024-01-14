import iconItems from "../dom/expenseApp/icon";
import { hideElement } from "../utils/expenseApp/commonUtils";
import domContainer from "../dom/expenseApp/container";

const iconEventListeners = () => {
  iconItems.closeIconAddTransactionForm.addEventListener("click", () => {
    hideElement(domContainer.addTransactionForm);
  });

  iconItems.closeIconEditTransactionItem.addEventListener("click", () => {
    hideElement(domContainer.transactionDetailContainer);
  });
};

export default iconEventListeners;
