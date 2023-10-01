"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccessMessage("");

      const { fullname, email, password } = registerData;
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({ fullname, email, password }),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (response.status === 201) {
        setRegisterData({ fullname: "", email: "", password: "" });
        setSuccessMessage("Registration successful!");
        setTimeout(() => {
          toast.success("Registration successful!");
          router.replace("/login");
        }, 1000);
      } else {
        setError(result.error || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred during registration.");
      toast.error("An error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    registerData,
    handleChange,
    handleSubmitRegister,
    error,
    successMessage,
  };
};
