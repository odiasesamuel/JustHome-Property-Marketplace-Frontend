"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuth: boolean;
  login: (userInfo: UserInfo, userToken: string) => void;
  logout: () => void;
};

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  accountType: "Individual" | "Property owner" | "Property agent";
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");
    setIsAuth(!!token);
  }, []);

  const login = (userInfo: UserInfo, userToken: string) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    sessionStorage.setItem("userToken", userToken);
    setIsAuth(true);
  };

  const logout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userInfo");
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)!;
