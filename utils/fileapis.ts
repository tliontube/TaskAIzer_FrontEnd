import axios, { AxiosRequestConfig } from "axios";

type ApiOptions = "GET" | "POST" | "PUT" | "DELETE";

const ApiCall = async (
  baseurl: string,
  endpoint: string,
  options: ApiOptions,
  body?: any
) => {
  const url = `${baseurl}${endpoint}`;
  const config: AxiosRequestConfig = {
    method: options,
    url: url,
  };

  if (body && options !== "GET") {
    config.data = body;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default ApiCall;
