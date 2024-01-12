import axios from "axios";

import {
  loginFormContainer,
  loginInputFields,
} from "../../dom/login/domElements";
import {
  checkLoggedIn,
  showError,
  validateForm,
} from "../../utils/loginSignup/commonUtils";

const login = () => {
  loginFormContainer.loginForm.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const email = loginInputFields.email.value;
    const password = loginInputFields.password.value;

    // Stops backend validation
    const isValid = validateForm(loginFormContainer.loginForm);
    if (!isValid) return;

    try {
      const response = await axios({
        url: "http://localhost:8000/auth/login",
        data: {
          email,
          password,
        },
        method: "POST",
      });

      localStorage.setItem("accessToken", response.data.accessToken);

      checkLoggedIn();
    } catch (e: any) {
      if (e.response.status == 400) {
        showError();
      }
    }
  });
};

checkLoggedIn();

export default login;
