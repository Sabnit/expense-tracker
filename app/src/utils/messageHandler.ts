import domContainer from "../dom/expenseApp/container";

const hideError = () => {
  domContainer.errorContainer.style.display = "none";
  domContainer.errorMsg.innerHTML = "";
};

const hideAlert = () => {
  domContainer.alertContainer.style.display = "none";
  domContainer.alertMsg.innerHTML = "";
};

const hideSuccess = () => {
  domContainer.successContainer.style.display = "none";
  domContainer.successMsg.innerHTML = "";
};

export const handleError = (message: string) => {
  domContainer.errorContainer.style.display = "flex";
  domContainer.errorMsg.innerHTML = message;

  setTimeout(hideError, 5000);
};

export const handleAlert = (message: string) => {
  domContainer.alertContainer.style.display = "flex";
  domContainer.alertMsg.innerHTML = message;

  setTimeout(hideAlert, 5000);
};

export const handleSuccess = (message: string) => {
  domContainer.successContainer.style.display = "flex";
  domContainer.successMsg.innerHTML = message;

  setTimeout(hideSuccess, 5000);
};
