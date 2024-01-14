import axios from "axios";

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
      throw error;
    });

  return response;
};

export const get = async (url: string) => {
  const response = await axios({
    url,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};
