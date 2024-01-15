import domContainer from "../dom/expenseApp/container";

const hideError = () => {
  domContainer.errorContainer.style.display = "none";
  domContainer.errorMsg.innerHTML = "";
};

export const handleError = (message: string) => {
  domContainer.errorContainer.style.display = "block";
  domContainer.errorMsg.innerHTML = message;
  setTimeout(hideError, 5000);
};
