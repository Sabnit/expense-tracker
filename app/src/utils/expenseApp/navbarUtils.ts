import domContainer from "../../dom/expenseApp/container";
import { navItems, navLists } from "../../dom/expenseApp/navItems";
import { addClassList, removeClassList, showElement } from "./commonUtils";

// Active Navbars

export const dashboardTabIsClicked = () => {
  addClassList(navLists.dashboard as HTMLElement, "active-list");
  addClassList(navItems.dashboard as HTMLElement, "active-item");
};

export const expenseTabIsClicked = () => {
  addClassList(navLists.expense as HTMLElement, "active-list");
  addClassList(navItems.expense as HTMLElement, "active-item");
};

export const incomeTabIsClicked = () => {
  addClassList(navLists.income as HTMLElement, "active-list");
  addClassList(navItems.income as HTMLElement, "active-item");
};

export const budgetTabIsClicked = () => {
  addClassList(navLists.budget as HTMLElement, "active-list");
  addClassList(navItems.budget as HTMLElement, "active-item");
};

// NotClicked Navbars

export const dashboardTabIsNotClicked = () => {
  removeClassList(navLists.dashboard as HTMLElement, "active-list");
  removeClassList(navItems.dashboard as HTMLElement, "active-item");
};

export const expenseTabIsNotClicked = () => {
  removeClassList(navLists.expense as HTMLElement, "active-list");
  removeClassList(navItems.expense as HTMLElement, "active-item");
};

export const incomeTabIsNotClicked = () => {
  removeClassList(navLists.income as HTMLElement, "active-list");
  removeClassList(navItems.income as HTMLElement, "active-item");
};

export const budgetTabIsNotClicked = () => {
  removeClassList(navLists.budget as HTMLElement, "active-list");
  removeClassList(navItems.budget as HTMLElement, "active-item");
};

export const dashboardTabIsActive = () => {
  dashboardTabIsClicked();
  expenseTabIsNotClicked();
  incomeTabIsNotClicked();
  budgetTabIsNotClicked();
};

export const expenseTabIsActive = () => {
  expenseTabIsClicked();
  dashboardTabIsNotClicked();
  incomeTabIsNotClicked();
  budgetTabIsNotClicked();
};

export const incomeTabIsActive = () => {
  dashboardTabIsNotClicked();
  expenseTabIsNotClicked();
  incomeTabIsClicked();
  budgetTabIsNotClicked();
};

export const budgetTabIsActive = () => {
  dashboardTabIsNotClicked();
  expenseTabIsNotClicked();
  incomeTabIsNotClicked();
  budgetTabIsClicked();
};

export const userTabIsClicked = () => {
  showElement(domContainer.userMenu);
};
