"use client";

import { Button } from "@/components/SharedUI/Button";
import Link from "next/link";
import React from "react";

export const Home = () => {
    return (
        <div className="bg-full-image min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to this application!</h1>
          
          <div className="mt-8 flex justify-end">
            <div className="mx-4">
              <Link href="/register">
                <Button className="w-full">Click here to Sign Up!</Button>
              </Link>
            </div>
            
            <div className="mx-4 flex flex-col">
              <Link href="/login">
                <Button className="w-full">Click here to Log In!</Button>
              </Link>
            </div>
          </div>
        </div>
      );
};
