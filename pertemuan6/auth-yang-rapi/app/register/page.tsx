"use client";

import { useAuth } from "@/context/auth-provider";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, register } = useAuth();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleFullnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    register({ email, username, fullname, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          className="block m-4 text-black"
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
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
          type="text"
          name="fullname"
          id="fullname"
          placeholder="fullname"
          value={fullname}
          onChange={handleFullnameChange}
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
          value={loading ? "Loading..." : "Register"}
          className="bg-white px-6 py-2 m-4 text-black inline-block"
        />
      </form>
    </div>
  );
};

export default Register;
