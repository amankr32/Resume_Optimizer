import axios from "axios";

// In local dev, VITE_API_BASE_URL is unset, so this falls back to "/api",
// which Vite's dev proxy (see vite.config.js) forwards to your local backend.
// In production, set VITE_API_BASE_URL to your deployed backend's full URL.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err.response?.data?.error?.message ||
      err.message ||
      "Request failed";
    return Promise.reject({
      status: err.response?.status,
      message,
      details: err.response?.data?.error?.details,
      original: err,
    });
  }
);