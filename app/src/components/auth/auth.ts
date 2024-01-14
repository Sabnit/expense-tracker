import {
  checkInputField,
  clearValidation,
  displayLogin,
  displaySignup,
  hideError,
  hideSigup,
} from "../../utils/auth/commonUtils";
import login from "./login";
import signup from "./signup";

const auth = () => {
  hideSigup();
  login();
  displaySignup();
  clearValidation();
  signup();
  hideError();
  displayLogin();
  checkInputField();
};

export default auth;
