export const domInputFields = {
  calendar: document.getElementById("start-calendar") as HTMLInputElement,
  categorySelect: document.getElementById(
    "category-select"
  ) as HTMLSelectElement,
};

export const domAddTransactionInputs = {
  title: document.getElementById("add-transaction-title"),
  category: document.getElementById("add-transaction-category"),
  date: document.getElementById("add-transaction-date"),
  note: document.getElementById("add-transaction-note"),
  amount: document.getElementById("add-transaction-amount"),
};

export const domTransactionDetailInputs = {
  title: document.getElementById("transaction-detail-title"),
  category: document.getElementById("transaction-detail-category"),
  date: document.getElementById("transaction-detail-date"),
  note: document.getElementById("transaction-detail-note"),
  amount: document.getElementById("transaction-detail-amount"),
};
