"use client";

import { createContext, useState } from "react";
import mockData from "@/data/mock.json";
import { sleep } from "@/utils/sleep";

type User = {
  id: number;
  email: string;
  fullname: string;
  username: string;
  password: string;
};

type AuthContext = {
  user: User | null;
  error: string;
  loading: boolean;
  login: (email: string, password: string) => void;
  register: (
    email: string,
    password: string,
    fullname: string,
    username: string
  ) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContext>({
  user: null,
  error: "",
  loading: false,
  login: (email, password) => {},
  register: (email, password, fullname, username) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Mock Database
  const [users, setUsers] = useState(mockData);

  // Shared states
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Shared functions
  const login = async (email: string, password: string) => {
    setLoading(true);
    // Perform login logic here

    const user = users.find(
      (user) => email === user.email && password === user.password
    );

    // Delay
    await sleep(1000);

    if (user) {
      setUser(user);
    } else {
      setError("User tidak ditemukan");
    }

    setLoading(false);
  };

  const register = (
    email: string,
    password: string,
    fullname: string,
    username: string
  ) => {
    // Perform register logic here
    const newUser = {
      id: users.length + 1,
      email,
      password,
      fullname,
      username,
    };
    setUsers([...users, newUser]);
    setUser(newUser);
  };

  const logout = () => {
    // Perform logout logic here
    setUser(null);
  };

  // Context value
  const value = {
    user,
    error,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
