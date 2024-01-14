import domContainer from "../dom/expenseApp/container";
import { hideElement, showElement } from "../utils/expenseApp/commonUtils";
import domButton from "../dom/expenseApp/button";

import { addNewTransaction } from "../components/expenses/addTransaction";

const buttonEventListeners = () => {
  domButton.addTransactionBtn?.addEventListener("click", () => {
    showElement(domContainer.addTransactionForm);
  });

  domButton.submitTransactionBtn?.addEventListener("click", () => {
    console.log("submit");
    addNewTransaction();
    hideElement(domContainer.addTransactionForm);
  });
};

export default buttonEventListeners;
