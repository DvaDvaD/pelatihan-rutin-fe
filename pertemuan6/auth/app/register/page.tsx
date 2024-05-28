"use client";

import { AuthContext } from "@/context/auth-provider";
import React, { useContext, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");

  const { user, register } = useContext(AuthContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFullnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    register(email, password, fullname, username);
  };

  return (
    <div>
      <form className="m-4 space-y-4" onSubmit={handleSubmit}>
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
          className="block text-black"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          value={fullname}
          onChange={handleFullnameChange}
        />
        <input
          className="block text-black"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="submit"
          value="Register"
          className="bg-white text-black px-4 py-2"
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </form>
    </div>
  );
};

export default Register;
