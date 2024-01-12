import navbarEventListeners from "../../eventListeners/expenseApp/navbar";
import iconEventListeners from "../../eventListeners/expenseApp/icon";
import buttonEventListeners from "../../eventListeners/expenseApp/button";

import { navItems } from "../../dom/expenseApp/navItems";

export const expenseAppFunctions = () => {
  navbarEventListeners();
  iconEventListeners();
  buttonEventListeners();
};

let expenseTabActive = false;
let incomeTabActive = false;
let dashboardTabActive = true;

navItems.expense?.addEventListener("click", () => {
  expenseTabActive = true;
  incomeTabActive = false;
  dashboardTabActive = false;

  console.log("income:", incomeTabActive);
  console.log("expense:", expenseTabActive);
  console.log("dashboard:", dashboardTabActive);
});

navItems.income?.addEventListener("click", () => {
  incomeTabActive = true;
  expenseTabActive = false;
  dashboardTabActive = false;

  console.log("income:", incomeTabActive);
  console.log("expense:", expenseTabActive);
  console.log("dashboard:", dashboardTabActive);
});

function setActiveTab(tabType: string) {
  incomeTabActive = false;
  expenseTabActive = false;
  dashboardTabActive = false;

  if (tabType === "income") {
    incomeTabActive = true;
  } else if (tabType === "expense") {
    expenseTabActive = true;
  } else if (tabType === "dashboard") {
    dashboardTabActive = true;
  } else {
    // Handle unknown tabType if needed
  }
}
