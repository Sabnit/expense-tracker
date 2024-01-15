import {
  loginFormContainer,
  loginInputFields,
} from "../../dom/login/domElements";
import { loginAuth } from "../../services/auth";
import { validateForm } from "../../utils/auth/commonUtils";

const addLoginEventListener = () => {
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

export default addLoginEventListener;
