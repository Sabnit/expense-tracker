import axios from "axios";

const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const signupLink = document.getElementById("signup-link");
const loginLink = document.getElementById("login-link");
const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

if (signupContainer) {
  signupContainer.style.display = "none";
}

signupLink?.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginContainer && signupContainer) {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
    forms.forEach((form) => {
      form.classList.remove("was-validated");
    });
  }
});

loginLink?.addEventListener("click", (e) => {
  e.preventDefault();

  if (loginContainer && signupContainer) {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
    forms.forEach((form) => {
      form.classList.remove("was-validated");
    });
  }
});

const form = document.getElementById("login-form") as HTMLFormElement;

form.addEventListener("submit", async (e: Event) => {
  e.preventDefault();

  const email = (
    document.getElementById("validationCustomEmail") as HTMLInputElement
  ).value;

  const password = (
    document.getElementById("validationCustomPassword") as HTMLInputElement
  ).value;

  try {
    const response = await axios({
      url: "http://localhost:8000/auth/login",
      data: {
        email,
        password,
      },
      method: "POST",
    });
    console.log(response.data.accessToken);
  } catch (e) {
    console.log("error", e);
  }
});
