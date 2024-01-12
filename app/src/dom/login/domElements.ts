export const loginFormContainer = {
  loginContainer: document.getElementById("login-container") as HTMLElement,
  loginForm: document.getElementById("login-form") as HTMLFormElement,
};

export const loginInputFields = {
  email: document.getElementById("login-email-input-field") as HTMLInputElement,
  password: document.getElementById("login-password-field") as HTMLInputElement,
};

export const loginLinks = {
  login: document.getElementById("login-link") as HTMLAnchorElement,
};

export const loginElement = {
  emailError: document.getElementById("email-error") as HTMLElement,
  passwordError: document.getElementById("password-error") as HTMLElement,
};
