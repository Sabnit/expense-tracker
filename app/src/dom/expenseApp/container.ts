const domContainer = {
  loginContainer: document?.getElementById("login-container") as HTMLElement,
  expenseContainer: document?.getElementById(
    "expense-container"
  ) as HTMLElement,
  addTransactionForm: document?.getElementById(
    "add-transaction-form"
  ) as HTMLElement,
  transactionDetailContainer: document?.getElementById(
    "transaction-detail-container"
  ) as HTMLElement,
  userMenu: document.getElementById("dropdown-menu") as HTMLElement,
  transactionList: document.getElementById(
    "transaction-details"
  ) as HTMLElement,
  transactionListContainer: document.getElementById(
    "transaction-list-section"
  ) as HTMLElement,
  errorContainer: document.getElementById("error-handler") as HTMLElement,
  errorMsg: document.getElementById("error-msg") as HTMLElement,
  alertContainer: document.getElementById("alert-handler") as HTMLElement,
  alertMsg: document.getElementById("alert-msg") as HTMLElement,
  successContainer: document.getElementById("success-handler") as HTMLElement,
  successMsg: document.getElementById("success-msg") as HTMLElement,
};

export default domContainer;
