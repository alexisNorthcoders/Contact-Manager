import React, { useState, useContext } from "react";
import { getCurrentUser, loginUser } from "./utils/api";
import { UserContext } from "./UserHandler";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  function handleLogin(event) {
    console.log("logging in...");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password).then((response) => {
      getCurrentUser(response).then((user) =>
        setUser((current) => ({
          ...current,
          accessToken: response,
          username: user.username,
          email: user.email,
          id: user.id,
        }))
      );
    });
  }

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        {user.username ? (
          `Welcome ${user.username}`
        ) : (
          <div className="w-full max-w-xs">
            <form
              onSubmit={handleLogin}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
