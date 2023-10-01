"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccessMessage("");

      const { email, password } = loginData;
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-cache",
      });

      const data = await res.json();

      if (res.status != 200) {
        toast.error(data.message);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setTimeout(() => {
        toast.success("Successfully Login!");
        router.replace("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginData, handleChange, handleSubmitLogin };
};
