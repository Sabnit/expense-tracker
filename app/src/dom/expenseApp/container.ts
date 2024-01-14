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
};

export default domContainer;
