import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      // Later this will decode JWT
      setUser({
        email: "tunis@example.com",
        role: "ADMIN"
      });
    }

    setLoading(false);

  }, []);

  const login = (token, userData) => {

    localStorage.setItem("token", token);

    setUser(userData);

  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);

  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};