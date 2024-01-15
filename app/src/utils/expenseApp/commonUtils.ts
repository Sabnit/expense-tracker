import { navItems, navLists } from "../../dom/expenseApp/navItems";
import domContainer from "../../dom/expenseApp/container";
import { ICategory } from "../../interface/category";
import {
  domAddTransactionInputs,
  domInputFields,
} from "../../dom/expenseApp/inputFields";
import { ITransaction } from "../../interface/transaction";
import { renderDashboard } from "../../components/expenses/expenseTab";
import { format } from "date-fns";

const TABS = ["dashboard", "expense", "income", "budget"];

let activeTab: string | null = null;

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

  list.forEach((category: string) => {
    const option = document.createElement("option");

    option.value = category;
    option.text = category;
    domInputFields.categorySelect.add(option);
  });
};
// export const createList = (list: any, iconList: any) => {
//   const categoryListContainer = document.createElement("div");
//   categoryListContainer.classList.add("custom-dropdown");

//   const selectedDisplay = document.createElement("div");
//   selectedDisplay.classList.add("selected-display");
//   selectedDisplay.textContent = "Select a category";
//   categoryListContainer.appendChild(selectedDisplay);

//   const categoryDropdown = document.createElement("ul");
//   categoryDropdown.classList.add("dropdown");
//   categoryDropdown.classList.add("scrollable-menu");

//   list.forEach((category: string) => {
//     const listItem = document.createElement("li");

//     const iconClass = iconList.find(
//       (iconItem: any) => iconItem.name === category
//     )?.icon;

//     if (iconClass) {
//       const iconElement = document.createElement("i");
//       iconElement.className = iconClass;

//       // Append the icon element to the list item
//       listItem.appendChild(iconElement);
//     }

//     const textElement = document.createElement("span");
//     textElement.textContent = category;

//     // Append the text element to the list item
//     listItem.appendChild(textElement);

//     // Append the list item to the dropdown
//     categoryDropdown.appendChild(listItem);
//   });

//   // Append the dropdown to the category list container
//   categoryListContainer.appendChild(categoryDropdown);

//   const container = domAddTransactionInputs.category;
//   if (container) {
//     container.innerHTML = "";
//     container.appendChild(categoryListContainer);
//   }

//   // Add the event listeners for dropdown functionality
//   const selectedAll = document.querySelectorAll(".custom-dropdown");

//   selectedAll.forEach((selected) => {
//     const optionsContainer = selected.querySelector(".dropdown");
//     const optionsList = selected.querySelectorAll(".dropdown li");

//     selected.addEventListener("click", () => {
//       let arrow = selected.querySelector(".arrow");

//       if (selected.classList.contains("active")) {
//         handleDropdown(selected, arrow, false);
//       } else {
//         let currentActive = document.querySelector(".custom-dropdown.active");

//         if (currentActive) {
//           let anotherArrow = currentActive.querySelector(".arrow");
//           handleDropdown(currentActive, anotherArrow, false);
//         }

//         handleDropdown(selected, arrow, true);
//       }
//     });

//     // update the display of the dropdown
//     for (let o of optionsList) {
//       o.addEventListener("click", () => {
//         selected.querySelector(".selected-display").textContent = o.textContent;
//         handleDropdown(selected, selected.querySelector(".arrow"), false);
//       });
//     }
//   });

//   // check if anything else other than the dropdown is clicked
//   window.addEventListener("click", function (e) {
//     if (!e.target.closest(".custom-dropdown")) {
//       closeAllDropdowns();
//     }
//   });

//   // close all the dropdowns
//   function closeAllDropdowns() {
//     const selectedAll = document.querySelectorAll(".custom-dropdown");
//     selectedAll.forEach((selected) => {
//       handleDropdown(selected, selected.querySelector(".arrow"), false);
//     });
//   }

//   // open/close the dropdown
//   function handleDropdown(dropdown, arrow, open) {
//     if (dropdown && arrow) {
//       if (open) {
//         arrow.classList.add("rotated");
//         dropdown.classList.add("active");
//       } else {
//         arrow.classList.remove("rotated");
//         dropdown.classList.remove("active");
//       }
//     }
//   }
// };

// export const createList = (list: any, iconList: any) => {
//   const categoryListContainer = document.createElement("ul");
//   categoryListContainer.classList.add("category-list");

//   list.forEach((category: string) => {
//     const listItem = document.createElement("li");

//     const iconClass = iconList.find(
//       (iconItem: any) => iconItem.name === category
//     )?.icon;

//     if (iconClass) {
//       const iconElement = document.createElement("i");
//       iconElement.className = iconClass;

//       // Append the icon element to the list item
//       listItem.appendChild(iconElement);
//     }

//     const textElement = document.createElement("span");
//     textElement.textContent = category;

//     // Append the text element to the list item
//     listItem.appendChild(textElement);

//     // Append the list item to the unordered list
//     categoryListContainer.appendChild(listItem);
//   });

//   const container = domAddTransactionInputs.category;
//   if (container) {
//     container.innerHTML = "";
//     container.appendChild(categoryListContainer);
//   }
// };

export const createTransactionList = (
  transactions: ITransaction[],
  iconList: any
) => {
  const transactionList = domContainer.transactionList;

  // Clear existing content
  transactionList.innerHTML = "";

  // Group transactions by date
  const transactionsByDate: Record<string, ITransaction[]> =
    transactions.reduce((acc, transaction) => {
      const dateFormat = "MMM dd, yyyy";
      const date = format(new Date(transaction.date), dateFormat);

      // const date = new Date(transaction.date).toLocaleDateString();

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(transaction);

      return acc;
    }, {} as Record<string, ITransaction[]>);

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

    transactionsByDate[date].forEach((transaction) => {
      const liElement = document.createElement("li");
      liElement.classList.add("transaction-item");

      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");

      const iconSpan = document.createElement("span");
      iconSpan.classList.add("item-icon");

      // Find the icon for the category
      const iconClass = iconList.find(
        (iconItem: any) => iconItem.name === transaction.categoryName
      )?.icon;

      if (iconClass) {
        const iconElement = document.createElement("i");
        iconElement.className = iconClass;

        // Append the icon element to the icon span
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

      dateSection.appendChild(liElement);
    });

    transactionList.appendChild(dateSection);
  }

  domContainer.transactionListContainer.appendChild(transactionList);
};

// export const createTransactionList = (transactions: ITransaction[]) => {
//   const transactionList = domContainer.transactionList;

//   // Clear existing content
//   transactionList.innerHTML = "";

//   // Group transactions by date
//   const transactionsByDate: Record<string, ITransaction[]> =
//     transactions.reduce((acc, transaction) => {
//       const date = new Date(transaction.date).toLocaleDateString();

//       if (!acc[date]) {
//         acc[date] = [];
//       }

//       acc[date].push(transaction);

//       return acc;
//     }, {} as Record<string, ITransaction[]>);

//   // Sort dates in descending order
//   const sortedDates = Object.keys(transactionsByDate).sort((a, b) => {
//     const dateA = new Date(a).getTime();
//     const dateB = new Date(b).getTime();
//     return dateB - dateA;
//   });

//   // Iterate through sorted dates and create HTML elements
//   for (const date of sortedDates) {
//     const dateSection = document.createElement("div");
//     dateSection.classList.add("date-section");

//     const dateHeader = document.createElement("h3");
//     dateHeader.classList.add("date-data");
//     dateHeader.textContent = date;
//     dateSection.appendChild(dateHeader);

//     transactionsByDate[date].forEach((transaction) => {
//       const liElement = document.createElement("li");
//       liElement.classList.add("transaction-item");

//       const categorySpan = document.createElement("span");
//       categorySpan.classList.add("item-title");
//       categorySpan.textContent = transaction.categoryName;

//       const amountSpan = document.createElement("span");
//       amountSpan.classList.add("item-amount");

//       if (transaction.categoryType === "expense") {
//         amountSpan.style.color = "#f14c52";
//         amountSpan.textContent = "-" + transaction.amount.toString();
//       } else {
//         amountSpan.style.color = "#2dba75";
//         amountSpan.textContent = "+" + transaction.amount.toString();
//       }

//       liElement.appendChild(categorySpan);
//       liElement.appendChild(amountSpan);

//       dateSection.appendChild(liElement);
//     });

//     transactionList.appendChild(dateSection);
//   }

//   domContainer.transactionListContainer.appendChild(transactionList);
// };

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
  setActiveTab("expense");
};

export const incomeTabIsActive = () => {
  dashboardTabIsNotClicked();
  expenseTabIsNotClicked();
  incomeTabIsClicked();
  budgetTabIsNotClicked();
  setActiveTab("income");
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
