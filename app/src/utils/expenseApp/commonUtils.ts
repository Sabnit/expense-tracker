import { navItems, navLists } from "../../dom/expenseApp/navItems";
import domContainer from "../../dom/expenseApp/container";
import { ICategory } from "../../interface/category";
import {
  domInputFields,
  domTransactionDetailInputs,
} from "../../dom/expenseApp/inputFields";
import { ITransaction } from "../../interface/transaction";
import { renderDashboard } from "../../components/expenses/expenseTab";
import { format } from "date-fns";
import { categoryIconList } from "./category";
import { handleAlert, handleError } from "../messageHandler";
import domButton from "../../dom/expenseApp/button";
import {
  getAllExpenseTransactions,
  getAllIncomeTransactions,
  getAllTransactionsPerPage,
} from "../../services/transaction";

// const TABS = ["dashboard", "expense", "income", "budget"];
const TABS = ["dashboard", "expense", "income"];

let activeTab: string;

export const setActiveTab = (tab: string) => {
  activeTab = tab;
};

// Function to check if a tab is active
export const getActiveTab = () => {
  const activeTabState: Record<string, boolean> = {};

  for (const tab of TABS) {
    activeTabState[tab] = activeTab === tab;
  }
  return activeTabState;
};

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

export const initializeApp = () => {
  hideElement(domContainer.loginContainer);
  showElement(domContainer.expenseContainer);
  renderDashboard();
};

export const getCategoryList = (categoryList: any, category: string) => {
  return categoryList
    .filter((item: ICategory) => item.type === category)
    .map((item: ICategory) => item.category);
};

export const getTransactionList = (transactions: any, category: string) => {
  return transactions.filter(
    (transaction: ITransaction) => transaction.categoryType === category
  );
};

export const createList = (list: any) => {
  domInputFields.categorySelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Select a category";
  domInputFields.categorySelect.add(defaultOption);
  domTransactionDetailInputs.category.append(defaultOption);

  list.forEach((category: string) => {
    const option = document.createElement("option");

    option.value = category;
    option.text = category;
    domInputFields.categorySelect.add(option);
    domTransactionDetailInputs.category.add(option);
  });
};
// Function to create transaction list
export const createTransactionList = (transactions: any, iconList: any) => {
  const transactionList = domContainer.transactionList;
  transactionList.innerHTML = "";

  // Group transactions by date
  const transactionsByDate = transactions.reduce(
    (acc: any, transaction: any) => {
      const date = new Date(transaction.date).toLocaleDateString();

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(transaction);

      return acc;
    },
    {}
  );

  // Sort dates in descending order
  const sortedDates = Object.keys(transactionsByDate).sort((a, b) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return dateB - dateA;
  });

  // Iterate through sorted dates and create HTML elements
  for (const date of sortedDates) {
    const dateSection = document.createElement("div");
    dateSection.classList.add("date-section");

    const dateHeader = document.createElement("h3");
    dateHeader.classList.add("date-data");
    dateHeader.textContent = date;
    dateSection.appendChild(dateHeader);

    transactionsByDate[date].forEach((transaction: any) => {
      const liElement = document.createElement("li");
      liElement.classList.add("transaction-item");

      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");

      const iconSpan = document.createElement("span");
      iconSpan.classList.add("item-icon");

      const iconClass = iconList.find(
        (iconItem: any) => iconItem.name === transaction.categoryName
      )?.icon;

      if (iconClass) {
        const iconElement = document.createElement("i");
        iconElement.className = iconClass;
        iconSpan.appendChild(iconElement);
      }

      categoryContainer.appendChild(iconSpan);

      const titleSpan = document.createElement("span");
      titleSpan.classList.add("item-title");
      titleSpan.textContent = transaction.categoryName;

      categoryContainer.appendChild(titleSpan);

      const amountSpan = document.createElement("span");
      amountSpan.classList.add("item-amount");

      if (transaction.categoryType === "expense") {
        amountSpan.style.color = "#f14c52";
        amountSpan.textContent = "-" + transaction.amount.toString();
      } else {
        amountSpan.style.color = "#2dba75";
        amountSpan.textContent = "+" + transaction.amount.toString();
      }

      liElement.appendChild(categoryContainer);
      liElement.appendChild(amountSpan);

      // Add a click event listener to the liElement
      liElement.addEventListener("click", () => {
        // Call a function to handle the click and display transaction details
        handleTransactionClick(transaction);
      });

      dateSection.appendChild(liElement);
    });

    transactionList.appendChild(dateSection);
  }

  domContainer.transactionListContainer.appendChild(transactionList);
};

// Function to handle transaction click and display details
const handleTransactionClick = (transaction: any) => {
  domTransactionDetailInputs.category.value = transaction.categoryName;
  domTransactionDetailInputs.date.value = new Date(transaction.date)
    .toISOString()
    .split("T")[0];
  domTransactionDetailInputs.note.value = transaction.note || ""; // Set an empty string if note is undefined
  domTransactionDetailInputs.amount.value = transaction.amount;
  console.log("Transaction details:", transaction);

  domContainer.transactionDetailContainer.style.display = "block";
};

let currentPage = 1; // Initial page

export const setCurrentPage = (page: number) => {
  currentPage = page;
};

// Event listener for previous page link
domButton.previousPageLink.addEventListener("click", async (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;

    let total = 0;
    let size = 0;

    const activeTabState: Record<string, boolean> = getActiveTab();

    if (activeTabState["expense"]) {
      const expenseTransaction = await getAllExpenseTransactions(currentPage);
      createTransactionList(expenseTransaction.data, categoryIconList);
      total = expenseTransaction.meta.total;
      size = expenseTransaction.meta.size;
    } else if (activeTabState["income"]) {
      const incomeTransaction = await getAllIncomeTransactions(currentPage);
      createTransactionList(incomeTransaction.data, categoryIconList);
      total = incomeTransaction.meta.total;
      size = incomeTransaction.meta.size;
    } else {
      const transaction = await getAllTransactionsPerPage(currentPage);
      createTransactionList(transaction.data, categoryIconList);
      total = transaction.meta.total;
      size = transaction.meta.size;
    }
    domButton.nextPageLink.disabled = false;
  }
});

// Event listener for next page link
domButton.nextPageLink.addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    const totalPages = 10;
    if (currentPage < totalPages) {
      currentPage++;

      let total = 0;
      let size = 0;

      const activeTabState = getActiveTab();

      if (activeTabState["expense"]) {
        const expenseTransaction = await getAllExpenseTransactions(currentPage);
        createTransactionList(expenseTransaction.data, categoryIconList);
        total = expenseTransaction.meta.total;
        size = expenseTransaction.meta.size;
      } else if (activeTabState["income"]) {
        const incomeTransaction = await getAllIncomeTransactions(currentPage);
        createTransactionList(incomeTransaction.data, categoryIconList);
        total = incomeTransaction.meta.total;
        size = incomeTransaction.meta.size;
      } else {
        const transaction = await getAllTransactionsPerPage(currentPage);
        createTransactionList(transaction.data, categoryIconList);
        total = transaction.meta.total;
        size = transaction.meta.size;
      }

      if (Math.ceil(total / size) === currentPage) {
        handleAlert("Last page");
        domButton.nextPageLink.disabled = true;
      }
    }
  } catch (error: unknown) {
    handleError("error");
    console.log(error);
  }
});

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

// export const budgetTabIsClicked = () => {
//   addClassList(navLists.budget as HTMLElement, "active-list");
//   addClassList(navItems.budget as HTMLElement, "active-item");
// };

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

// export const budgetTabIsNotClicked = () => {
//   removeClassList(navLists.budget as HTMLElement, "active-list");
//   removeClassList(navItems.budget as HTMLElement, "active-item");
// };

export const dashboardTabIsActive = () => {
  dashboardTabIsClicked();
  expenseTabIsNotClicked();
  incomeTabIsNotClicked();
  // budgetTabIsNotClicked();
  setActiveTab("dashboard");
};

export const expenseTabIsActive = () => {
  expenseTabIsClicked();
  dashboardTabIsNotClicked();
  incomeTabIsNotClicked();
  // budgetTabIsNotClicked();
  setActiveTab("expense");
};

export const incomeTabIsActive = () => {
  dashboardTabIsNotClicked();
  expenseTabIsNotClicked();
  incomeTabIsClicked();
  // budgetTabIsNotClicked();
  setActiveTab("income");
};

export const budgetTabIsActive = () => {
  dashboardTabIsNotClicked();
  expenseTabIsNotClicked();
  incomeTabIsNotClicked();
  // budgetTabIsClicked();
};

export const userTabIsClicked = () => {
  showElement(domContainer.userMenu);
};
