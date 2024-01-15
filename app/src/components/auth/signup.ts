import {
  signupFormContainer,
  signupInputFields,
  singupButtons,
} from "../../dom/signup/domElements";
import { signupAuth } from "../../services/auth";
import { validateForm } from "../../utils/auth/commonUtils";

const signupEventListener = () => {
  singupButtons.registerBtn?.addEventListener("click", async (e: Event) => {
    e.preventDefault();

    const firstName = signupInputFields.firstName.value;
    const lastName = signupInputFields.lastName.value;
    const email = signupInputFields.email.value;
    const password = signupInputFields.password.value;

    // Stops backend validation
    const isValid = validateForm(signupFormContainer.signupForm);
    if (!isValid) return;

    signupAuth({ firstName, lastName, email, password });
  });
};

export default signupEventListener;
