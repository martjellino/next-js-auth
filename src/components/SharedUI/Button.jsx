import React from "react";

export const Button = ({ isLoading, onClick, children, variant }) => {
	if (variant === "secondary") {
		return (
			<button
				variant=""
				disabled={isLoading}
				onClick={onClick}
				type="button"
				className=" w-full px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			>
				{children}
			</button>
		);
	}

	return (
		<button
			variant={variant}
			disabled={isLoading}
			onClick={onClick}
			type="button"
			className="disabled:bg-red-500 disabled:cursor-wait inline-flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			{children}
		</button>
	);
};