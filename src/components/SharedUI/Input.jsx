import React from "react";

export const Input = ({ value, name, placeholder, type, label, onChange }) => {
  return (
    <div className="mb-6">
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};