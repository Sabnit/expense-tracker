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
import {
  clearInput,
  hideElement,
  removeClassList,
  showElement,
  showExpense,
} from "../expenseApp/commonUtils";

const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

export const clearValidation = () => {
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

export const displaySignup = () => {
  signupLinks.signup?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    clearLoginInput();

    loginFormContainer.loginContainer.style.display = "none";
    signupFormContainer.signupContainer.style.display = "block";
  });
};

export const displayLogin = () => {
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

export const checkInputField = () => {
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

export const checkLoggedIn = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    showExpense();
  } else {
    showLogin();
  }
};
