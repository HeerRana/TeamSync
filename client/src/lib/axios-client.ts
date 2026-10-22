import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const options = {
  baseURL,
  timeout: 10000,
};

const API = axios.create(options);

// Add request interceptor to include JWT token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    console.log('[axios-client] Token from localStorage:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('[axios-client] Set Authorization header:', config.headers.Authorization);
    } else {
      console.log('[axios-client] No token found, not setting Authorization header');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, status } = error.response || {};

    if (status === 401) {
      // Remove token and redirect to login ONLY if not already there
      localStorage.removeItem('authToken');
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }

    const customError: CustomError = {
      ...error,
      errorCode: data?.errorCode || "UNKNOWN_ERROR",
    };

    return Promise.reject(customError);
  }
);

export default API;
