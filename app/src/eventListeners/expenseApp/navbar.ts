import domContainer from "../../dom/expenseApp/container";
import { navLists } from "../../dom/expenseApp/navItems";
import { hideElement } from "../../utils/expenseApp/commonUtils";
import {
  budgetTabIsActive,
  dashboardTabIsActive,
  incomeTabIsActive,
  expenseTabIsActive,
  userTabIsClicked,
} from "../../utils/expenseApp/navbarUtils";

const navbarEventListeners = () => {
  navLists.dashboard?.addEventListener("click", () => {
    dashboardTabIsActive();
  });

  navLists.expense?.addEventListener("click", () => {
    expenseTabIsActive();
  });

  navLists.income?.addEventListener("click", () => {
    incomeTabIsActive();
  });

  navLists.budget?.addEventListener("click", () => {
    budgetTabIsActive();
  });

  navLists.user?.addEventListener("click", (event: MouseEvent) => {
    userTabIsClicked();
    if (!navLists.user?.contains(event.target as Node)) {
      console.log("cl");
      // hideElement(domContainer.userMenu);
    }
  });

  document.addEventListener("click", (event: MouseEvent) => {
    if (!navLists.user?.contains(event.target as Node)) {
      hideElement(domContainer.userMenu);
    }
  });

  // document.addEventListener("click", (event: MouseEvent) => {
  //   if (!domContainer.addexpenseForm?.contains(event.target as Node)) {
  //     hideElement(domContainer.addexpenseForm);
  //   }
  // });
};

export default navbarEventListeners;
