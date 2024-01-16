const domButton = {
  loginBtn: document.getElementById("login-btn"),
  addTransactionBtn: document?.getElementById(
    "add-transaction-button"
  ) as HTMLElement,
  submitTransactionBtn: document?.getElementById(
    "submit-transaction-button"
  ) as HTMLElement,
  saveTransactionBtn: document?.getElementById("save-button") as HTMLElement,
  deleteTransactionBtn: document?.getElementById(
    "delete-button"
  ) as HTMLElement,
  cancelTransactionBtn: document?.getElementById(
    "cancel-button"
  ) as HTMLElement,
  logoutBtn: document?.getElementById("logout-btn"),
  previousPageLink: document.getElementById(
    "previous-page-navigation"
  ) as HTMLAnchorElement,
  nextPageLink: document.getElementById(
    "next-page-navigation"
  ) as HTMLButtonElement,
};

export default domButton;
