import domContainer from "../dom/expenseApp/container";
import { hideElement, showElement } from "../utils/expenseApp/commonUtils";
import domButton from "../dom/expenseApp/button";

const buttonEventListeners = () => {
  domButton.addTransactionBtn?.addEventListener("click", () => {
    showElement(domContainer.addTransactionForm);
  });

  domButton.submitTransactionBtn?.addEventListener("click", () => {
    hideElement(domContainer.addTransactionForm);
  });
};

export default buttonEventListeners;
