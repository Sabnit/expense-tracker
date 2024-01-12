import login from "./components/auth/login";
import signup from "./components/auth/signup";
import { expenseAppFunctions } from "./components/expenses/expense";
import {
  checkInputField,
  clearValidation,
  displayLogin,
  displaySignup,
  hideError,
  hideSigup,
} from "./utils/loginSignup/commonUtils";

hideSigup();
login();
displaySignup();
clearValidation();
signup();
hideError();
displayLogin();
checkInputField();

expenseAppFunctions();
