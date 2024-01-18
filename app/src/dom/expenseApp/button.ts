const domButton = {
  loginBtn: document.getElementById("login-btn"),
  addTransactionBtn: document?.getElementById(
    "add-transaction-button"
  ) as HTMLButtonElement,
  submitTransactionBtn: document?.getElementById(
    "submit-transaction-button"
  ) as HTMLButtonElement,
  saveTransactionBtn: document?.getElementById("save-button") as HTMLElement,
  deleteTransactionBtn: document?.getElementById(
    "delete-button"
  ) as HTMLButtonElement,
  cancelTransactionBtn: document?.getElementById(
    "cancel-button"
  ) as HTMLButtonElement,
  logoutBtn: document?.getElementById("logout-btn"),
  previousPageLink: document.getElementById(
    "previous-page-navigation"
  ) as HTMLButtonElement,
  nextPageLink: document.getElementById(
    "next-page-navigation"
  ) as HTMLButtonElement,
};

export default domButton;
