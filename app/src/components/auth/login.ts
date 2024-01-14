import {
  loginFormContainer,
  loginInputFields,
} from "../../dom/login/domElements";
import { loginAuth } from "../../services/auth";
import { checkLoggedIn, validateForm } from "../../utils/auth/commonUtils";

const login = () => {
  loginFormContainer.loginForm.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const email = loginInputFields.email.value;
    const password = loginInputFields.password.value;

    // Stops backend validation
    const isValid = validateForm(loginFormContainer.loginForm);
    if (!isValid) return;

    loginAuth({ email, password });
  });
};

checkLoggedIn();

export default login;
