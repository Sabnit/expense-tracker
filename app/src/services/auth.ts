import { LOGIN_URL, SIGNUP_URL } from "../constants/auth";
import { checkLoggedIn, showError } from "../utils/auth/commonUtils";
import { post } from "../utils/http";

export const loginAuth = async (data: any) => {
  try {
    const response = await post(LOGIN_URL, data);

    localStorage.setItem("accessToken", response.accessToken);

    checkLoggedIn();
  } catch (e: any) {
    showError();
  }
};

export const signupAuth = async (data: any) => {
  try {
    const response = await post(SIGNUP_URL, data);

    if (response.status === 201) {
      console.log("signup");
    }
  } catch (e) {
    console.log("error", e);
  }
};
