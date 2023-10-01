"use client";

import { Button } from "@/components/SharedUI/Button";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const router = useRouter();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogOut = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);

    Cookies.remove("x-token");
    setTimeout(() => {
      toast.success("Successfully logged out!");
      router.replace("/login");
    }, 1000);
  };
  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="bg-full-image flex flex-col items-center justify-center min-h-screen space-y-10">
      <div className="text-4xl font-bold">
        The dashboard is not created yet...
      </div>
      <div className="text-4xl font-bold">
        Anyway thank you for visiting this app!
      </div>
      <div className="space-y-10">
        <div className="mx-4">
          <Button className="w-full" onClick={handleLogOut}>
            Click here to log out!
          </Button>
        </div>
      </div>
      {isLogoutModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Are you sure you want to log out?</p>
            <div className="mt-8 flex justify-end">
              <button className="mr-4 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleConfirmLogout}>
                Yes
              </button>{" "}
              {/* Increased margin */}
              <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={handleCancelLogout}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
