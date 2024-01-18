import domContainer from "../dom/expenseApp/container";
import {
  dashboardTabIsActive,
  hideElement,
  showElement,
} from "../utils/expenseApp/commonUtils";
import domButton from "../dom/expenseApp/button";

import { addNewTransaction } from "../components/expenses/addTransaction";
import iconItems from "../dom/expenseApp/icon";
import { navLists } from "../dom/expenseApp/navItems";
import { handleError, handleSuccess } from "../utils/messageHandler";
import { domAddTransactionInputs } from "../dom/expenseApp/inputFields";

const buttonEventListeners = () => {
  domButton.addTransactionBtn?.addEventListener("click", () => {
    showElement(domContainer.addTransactionForm);
  });

  domButton.submitTransactionBtn?.addEventListener("click", (event) => {
    hideElement(domContainer.addTransactionForm);

    const category = domAddTransactionInputs.category.value;
    const date = domAddTransactionInputs.date.value;
    const note = domAddTransactionInputs.note.value;
    const amount = domAddTransactionInputs.note.value;

    // Check if required fields are filled
    if (category === "select" || !date || !amount) {
      handleError(
        "Please fill in all required fields (Category, Date, Amount)."
      );
      event.preventDefault();
      domButton.submitTransactionBtn.disabled = true;
    }
    domButton.submitTransactionBtn.disabled = false;
    addNewTransaction();
  });

  domButton.logoutBtn?.addEventListener("click", () => {
    localStorage.clear();
    hideElement(domContainer.expenseContainer);
    showElement(domContainer.loginContainer);
    dashboardTabIsActive();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay1 = document.getElementById(
      "modal-overlay-1"
    ) as HTMLElement;
    const modalOverlay2 = document.getElementById(
      "modal-overlay-2"
    ) as HTMLElement;

    const highlightSection1 = document.createElement("div");
    const highlightSection2 = document.createElement("div");

    highlightSection1.classList.add("highlight-section-1");
    highlightSection2.classList.add("highlight-section-2");

    domButton.addTransactionBtn.addEventListener("click", function () {
      // Show the modal overlay
      modalOverlay1.style.display = "block";

      // Show the highlight section
      highlightSection1.style.display = "flex";

      document.body.appendChild(highlightSection1);
      highlightSection1.appendChild(domContainer.addTransactionForm);
    });

    navLists.user?.addEventListener("click", function () {
      // Show the modal overlay
      modalOverlay2.style.display = "block";

      // Show the highlight section
      highlightSection2.style.display = "flex";

      document.body.appendChild(highlightSection2);
      highlightSection2.appendChild(domContainer.userMenu);
    });

    // Add event listener to close the modal overlay and hide the highlight section
    modalOverlay1.addEventListener("click", function () {
      modalOverlay1.style.display = "none";
      highlightSection1.style.display = "none";
      document.body.removeChild(highlightSection1);
    });

    modalOverlay2.addEventListener("click", function () {
      modalOverlay2.style.display = "none";
      highlightSection2.style.display = "none";
      document.body.removeChild(highlightSection2);
    });

    iconItems.closeIconAddTransactionForm.addEventListener(
      "click",
      function () {
        modalOverlay1.style.display = "none";
        highlightSection1.style.display = "none";
        document.body.removeChild(highlightSection1);
      }
    );

    domButton.submitTransactionBtn.addEventListener("click", function () {
      modalOverlay1.style.display = "none";
      highlightSection1.style.display = "none";
      document.body.removeChild(highlightSection1);
      handleSuccess("Transaction added");
    });

    domButton.logoutBtn?.addEventListener("click", function () {
      modalOverlay2.style.display = "none";
      highlightSection2.style.display = "none";
      document.body.removeChild(highlightSection2);
    });
  });
};

export default buttonEventListeners;
