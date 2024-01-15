import {
  checkInputFieldEventListener,
  checkLoggedIn,
  clearValidationEventListener,
  displayLoginEventListener,
  displaySignupEventListener,
} from "../../utils/auth/commonUtils";
import addLoginEventListener from "./login";
import signupEventListener from "./signup";

const setupAuthentication = async () => {
  await checkLoggedIn();
  addLoginEventListener();
  displaySignupEventListener();
  clearValidationEventListener();
  signupEventListener();
  displayLoginEventListener();
  checkInputFieldEventListener();
};

export default setupAuthentication;
