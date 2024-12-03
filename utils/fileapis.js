import axios from "axios";

const ApiCall = async (baseurl, endpoint, options, body) => {
  const url = `${baseurl}${endpoint}`;
  const config = {
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