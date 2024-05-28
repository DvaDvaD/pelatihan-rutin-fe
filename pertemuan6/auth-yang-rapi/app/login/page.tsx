"use client";

import { useAuth } from "@/context/auth-provider";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, login } = useAuth();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          className="block m-4 text-black"
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="block m-4 text-black"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="submit"
          value={loading ? "Loading..." : "Login"}
          className="bg-white px-6 py-2 m-4 text-black inline-block"
        />
      </form>
    </div>
  );
};

export default Login;
