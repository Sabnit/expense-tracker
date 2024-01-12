import axios from "axios";

import {
  signupFormContainer,
  signupInputFields,
  singupButtons,
} from "../../dom/signup/domElements";
import { validateForm } from "../../utils/loginSignup/commonUtils";

const signup = () => {
  singupButtons.registerBtn?.addEventListener("click", async (e: Event) => {
    e.preventDefault();

    const firstName = signupInputFields.firstName.value;
    const lastName = signupInputFields.lastName.value;
    const email = signupInputFields.email.value;
    const password = signupInputFields.password.value;

    // Stops backend validation
    const isValid = validateForm(signupFormContainer.signupForm);
    if (!isValid) return;

    try {
      const response = await axios({
        url: "http://localhost:8000/auth/signup",
        data: {
          firstName,
          lastName,
          email,
          password,
        },
        method: "POST",
      });

      if (response.status === 201) {
        console.log("signup");
      }
    } catch (e) {
      console.log("error", e);
    }
  });
};

export default signup;
