import { GET_USER } from "../../constants/auth";
import domContainer from "../../dom/expenseApp/container";
import {
  loginElement,
  loginFormContainer,
  loginInputFields,
  loginLinks,
} from "../../dom/login/domElements";
import {
  signupFormContainer,
  signupInputFields,
  signupLinks,
} from "../../dom/signup/domElements";
import { handleError } from "../messageHandler";
import {
  clearInput,
  hideElement,
  initializeApp,
  removeClassList,
  showElement,
} from "../expenseApp/commonUtils";
import { get } from "../http";

const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

export const clearValidationEventListener = () => {
  signupLinks.signup?.addEventListener("click", (e) => {
    e.preventDefault();

    forms.forEach((form) => {
      form.classList.remove("was-validated");
    });
  });
};

export const validateForm = (form: HTMLFormElement) => {
  const isValid = form.checkValidity();

  form.classList.add("was-validated");

  return isValid;
};

export const hideSigup = () => {
  signupFormContainer.signupContainer.style.display = "none";
};

export const displaySignupEventListener = () => {
  signupLinks.signup?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    clearLoginInput();

    loginFormContainer.loginContainer.style.display = "none";
    signupFormContainer.signupContainer.style.display = "block";
  });
};

export const displayLoginEventListener = () => {
  loginLinks.login?.addEventListener("click", (e) => {
    e.preventDefault();
    clearSignupInput();

    loginFormContainer.loginContainer.style.display = "block";
    signupFormContainer.signupContainer.style.display = "none";
  });
};

export const hideError = () => {
  hideElement(loginElement.emailError);
  hideElement(loginElement.passwordError);
};

export const showError = () => {
  showElement(loginElement.emailError);
  showElement(loginElement.passwordError);
  backendErrorValidation();
};

export const clearLoginInput = () => {
  clearInput(loginInputFields.email);
  clearInput(loginInputFields.password);
};

export const clearSignupInput = () => {
  clearInput(signupInputFields.firstName);
  clearInput(signupInputFields.lastName);
  clearInput(signupInputFields.email);
  clearInput(signupInputFields.password);
};

export const checkInputFieldEventListener = () => {
  loginInputFields.email.addEventListener("change", () => {
    if (loginInputFields.email.value == "")
      hideElement(loginElement.emailError);
  });
  loginInputFields.password.addEventListener("change", () => {
    if (loginInputFields.password.value == "")
      hideElement(loginElement.passwordError);
  });
};

export const backendErrorValidation = () => {
  removeClassList(loginFormContainer.loginForm, "was-validated");
  removeClassList(loginFormContainer.loginForm, "needs-validation");
  loginInputFields.email.style.borderColor = "red";
  loginInputFields.password.style.borderColor = "red";
};

export const showLogin = () => {
  showElement(domContainer.loginContainer);
  hideElement(domContainer.expenseContainer);
};

export const checkLoggedIn = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    showLogin();
    return;
  }

  try {
    const user = await get(GET_USER, {
      Authorization: `Bearer ${accessToken}`,
    });

    if (!user) {
      showLogin();
      return;
    }

    initializeApp();
  } catch (error: any) {
    console.log(error);
    handleError(error.message);
    showLogin();
  }
};
