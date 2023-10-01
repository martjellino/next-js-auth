"use client";

import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

import React from "react";
import { Input } from "@/components/SharedUI/Input";
import { Button } from "@/components/SharedUI/Button";

export const Register = () => {
  const { registerData, handleChange, handleSubmitRegister } = useRegister();

  return (
    <div className="bg-full-image flex flex-col items-center justify-center min-h-screen">
      <div className="w-96 p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          Join to this app now!
        </h1>
        <div>
          <Input
            value={registerData.fullname}
            label="Full Name"
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <Input
            value={registerData.email}
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <Input
            value={registerData.password}
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button onClick={handleSubmitRegister}>Submit</Button>
          <div className="mt-5">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Already have account?
              <Link
                href="/login"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Just login
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
