import api from "./axiosConfig";
import axios from "./axiosConfig";

export const loginUser = async ({ email, password }) => {

  // Fake authentication
  if (email === "admin@example.com" && password === "admin123") {
    return {
      data: {
        token: "fake-jwt-token"
      }
    };
  }

  throw new Error("Invalid credentials");
};
// user register krne ke liye
export const registerUser = (data) => {
  return api.post("/auth/register", data);
};
//user ko login krne ke liye
// export const loginUser = (credentials) => {
//   return api.post("/auth/login", credentials);
// };

//logout krne ke liye
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

//current user ki information ko get krne ke liye
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};