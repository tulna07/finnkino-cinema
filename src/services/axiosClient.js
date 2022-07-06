import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = apiConfig.authToken;

    const tokenAccess = localStorage.getItem("User")?.tokenAccess;
    if (tokenAccess) {
      config.headers.Authorization = JSON.parse(tokenAccess);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => response?.data?.content,
  (error) => Promise.reject(error),
);

export default axiosClient;
