import { navItems } from "../../dom/expenseApp/navItems";

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
