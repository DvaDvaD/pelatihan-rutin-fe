"use client";

import { createContext, useContext, useState } from "react";
import initialUsers from "@/data/mock.json";
import { sleep } from "@/utils/sleep";
import { useRouter } from "next/navigation";

// Types
type User = {
  id: number;
  username: string;
  password: string;
  fullname: string;
  email: string;
};

type AuthContext = {
  user: User | null;
  error: string;
  loading: boolean;
  login: (input: LoginInput) => void;
  register: (input: RegisterInput) => void;
  logout: () => void;
};

type LoginInput = {
  username: string;
  password: string;
};

type RegisterInput = {
  email: string;
  username: string;
  fullname: string;
  password: string;
};

export const AuthContext = createContext<AuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Simulate database
  const [users, setUsers] = useState<User[]>(initialUsers);

  // Shared states
  const [user, setUser] = useState<User | null>(null);

  // Status states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Shared functions
  const login = async ({ username, password }: LoginInput) => {
    setLoading(true);

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    // Simulate loading time
    await sleep(1000);

    if (user) {
      setError("");
      setUser(user);
      router.push("/protected");
    } else {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  const register = async ({
    email,
    username,
    fullname,
    password,
  }: RegisterInput) => {
    setLoading(true);

    const newUser = {
      id: users.length + 1,
      email,
      username,
      fullname,
      password,
    };
    setUsers([...users, newUser]);
    setUser(newUser);

    // Simulate loading time
    await sleep(1000);

    router.push("/protected");

    setLoading(false);
  };

  const logout = () => {
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
