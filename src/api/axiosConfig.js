import axios from "axios";

// url short krne ke liye baseURL set kr diya hai
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// har request ke sath token bhejne ke liye interceptor set kr diya hai
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// har response me error ko handle krne ke liye interceptor set kr diya hai
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response);
    return Promise.reject(error);
  }
);

export default api;