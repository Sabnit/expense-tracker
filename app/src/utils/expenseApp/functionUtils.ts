import domContainer from "../../dom/expenseApp/container";
import { hideElement, showElement } from "../expenseApp/commonUtils";

const showExpense = () => {
  hideElement(domContainer.loginContainer);
  showElement(domContainer.expenseContainer);
};

export default showExpense;
