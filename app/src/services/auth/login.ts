import axios from "axios";
import { checkLoggedIn, showError } from "../../utils/loginSignup/commonUtils";
import { LOGIN } from "../../constants/auth";

export const loginAuth = async (email: string, password: string) => {
  try {
    const response = await axios({
      url: LOGIN,
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
};
