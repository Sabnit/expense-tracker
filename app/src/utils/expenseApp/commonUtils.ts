import { navItems, navLists } from "../../dom/expenseApp/navItems";
import domContainer from "../../dom/expenseApp/container";
import { ICategory } from "../../interface/category";
import { domInputFields } from "../../dom/expenseApp/inputFields";

export const addClassList = (element: HTMLElement, className: string) => {
  element.classList.add(`${className}`);
};

export const removeClassList = (element: HTMLElement, className: string) => {
  element.classList.remove(`${className}`);
};

export const hideElement = (element: HTMLElement) => {
  element.style.display = "none";
};

export const showElement = (element: HTMLElement) => {
  element.style.display = "block";
};

export const clearInput = (element: HTMLInputElement) => {
  element.value = "";
};

export const showExpense = () => {
  hideElement(domContainer.loginContainer);
  showElement(domContainer.expenseContainer);
};

export const getCategoryList = (data: any, category: string) => {
  return data
    .filter((item: ICategory) => item.type === category)
    .map((item: ICategory) => item.category);
};

export const createList = (list: any) => {
  domInputFields.categorySelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Select a category";
  domInputFields.categorySelect.add(defaultOption);

  list.forEach((category: string) => {
    const option = document.createElement("option");

    option.value = category;
    option.text = category;
    domInputFields.categorySelect.add(option);
  });
};

// NavBar Utils

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
