"use client";

import { AuthContext } from "@/context/auth-provider";
import React, { useContext, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, error, loading, login } = useContext(AuthContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here using the email and password states
    login(email, password);
  };

  return (
    <div>
      <form className="m-4 space-y-4" onSubmit={handleSubmit}>
        {error && <div className="text-red-500">{error}</div>}
        <input
          className="block text-black"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="block text-black"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          className="bg-white text-black px-4 py-2"
          type="submit"
          value={loading ? "Loading..." : "Login"}
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </form>
    </div>
  );
};

export default Login;
