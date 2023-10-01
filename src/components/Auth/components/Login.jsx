"use client";

import React from "react";
import { Input } from "@/components/SharedUI/Input";
import { Button } from "@/components/SharedUI/Button";

import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { isLoading, loginData, handleChange, handleSubmitLogin } = useLogin();

  return (
    <div className="bg-full-image flex flex-col items-center justify-center min-h-screen">
      <div className="w-96 p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          Log in to this app now!
        </h1>
        <div>
          <Input
            value={loginData.email}
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <Input
            value={loginData.password}
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            isLoading={isLoading}
            onClick={handleSubmitLogin}
            className="mb-10"
          >
            Login
          </Button>
        </div>
        <div className="mt-2">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {" "}
            Don't have account?{" "}
            <a
              href="/register"
              className="mt-4 text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};
