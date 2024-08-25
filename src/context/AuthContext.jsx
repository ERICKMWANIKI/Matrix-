import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Remove the duplicated AuthContext declaration
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5555/login", {
        email,
        password,
      });
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
