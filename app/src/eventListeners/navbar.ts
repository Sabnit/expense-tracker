import {
  renderDashboard,
  renderExpense,
  renderIncome,
} from "../components/expenses/expenseTab";

import domContainer from "../dom/expenseApp/container";
import { navLists } from "../dom/expenseApp/navItems";

import {
  budgetTabIsActive,
  dashboardTabIsActive,
  expenseTabIsActive,
  hideElement,
  incomeTabIsActive,
  setCurrentPage,
  userTabIsClicked,
} from "../utils/expenseApp/commonUtils";

const navbarEventListeners = () => {
  navLists.dashboard?.addEventListener("click", () => {
    setCurrentPage(1);
    dashboardTabIsActive();
    renderDashboard();
  });

  navLists.expense?.addEventListener("click", () => {
    setCurrentPage(1);
    expenseTabIsActive();
    renderExpense();
  });

  navLists.income?.addEventListener("click", () => {
    setCurrentPage(1);
    incomeTabIsActive();
    renderIncome();
  });

  // navLists.budget?.addEventListener("click", () => {
  //   budgetTabIsActive();
  // });

  document.addEventListener("click", (event: MouseEvent) => {
    userTabIsClicked();
    if (!navLists.user?.contains(event.target as Node)) {
      hideElement(domContainer.userMenu);
    }
  });
};

export default navbarEventListeners;
