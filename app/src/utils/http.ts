import axios from "axios";
import { showLogin } from "./auth/commonUtils";

export const post = async (
  url: string,
  data: any,
  headers?: Record<string, string>
) => {
  const response = await axios({
    url,
    data,
    method: "POST",
    headers,
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        showLogin();
      }
      throw error.response.data;
    });

  return response;
};

export const get = async (url: string, headers?: Record<string, string>) => {
  const response = await axios({
    url,
    method: "GET",
    headers,
  })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        showLogin();
      }

      throw error.response.data;
    });

  return response;
};
