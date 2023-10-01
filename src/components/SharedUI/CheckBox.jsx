import React, { useRef } from "react";

export const CheckBox = ({ id, name, type, label }) => {
  const checkboxRef = useRef(null);

  const checkTheCheckbox = () => {
    checkboxRef.current.checked = true;
  };

  return (
    <div className="mb-6 flex items-center gap-2">
      <input
        ref={checkboxRef}
        id={id}
        type={type}
        name={name}
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        required
      />
      <label
        onClick={checkTheCheckbox}
        className="block text-gray-900 dark:text-white"
      >
        {label}
      </label>
    </div>
  );
};
