export const domInputFields = {
  calendar: document.getElementById("start-calendar") as HTMLInputElement,
  categorySelect: document.getElementById(
    "add-transaction-category"
  ) as HTMLSelectElement,
};

export const domAddTransactionInputs = {
  category: document.getElementById(
    "add-transaction-category"
  ) as HTMLInputElement,
  date: document.getElementById("add-transaction-date") as HTMLInputElement,
  note: document.getElementById("add-transaction-note") as HTMLInputElement,
  amount: document.getElementById("add-transaction-amount") as HTMLInputElement,
};

export const domTransactionDetailInputs = {
  category: document.getElementById(
    "transaction-detail-category"
  ) as HTMLSelectElement,
  date: document.getElementById("transaction-detail-date") as HTMLInputElement,
  note: document.getElementById("transaction-detail-note") as HTMLInputElement,
  amount: document.getElementById(
    "transaction-detail-amount"
  ) as HTMLInputElement,
};
