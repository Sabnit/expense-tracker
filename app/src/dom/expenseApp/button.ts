const domButton = {
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
};

export default domButton;
