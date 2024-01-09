import axios from "axios";

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
    console.log(response);
  } catch (e) {
    console.log("error", e);
  }
});
