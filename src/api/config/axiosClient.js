import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = apiConfig.authToken;

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => response.data.content,
  (error) => Promise.reject(error.response.data.content),
);

export default axiosClient;
