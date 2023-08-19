// AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const isAuthenticated = !!user;
  // console.log("isAuthenticated:", isAuthenticated);

  // const login = (userData) => {
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setUser(null);
  // };
  const token = localStorage.getItem("jwtToken");
  const [user, setUser] = useState(token ? true : null); // Check if token exists

  const isAuthenticated = !!user;

  const login = (userData) => {
    // localStorage.setItem("jwtToken", userData.token); // Store token in localStorage
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken"); // Remove token from localStorage
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
