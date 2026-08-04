//reusable button component with different types and sizes
import React from "react";

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  size = "medium",
  isLoading = false,
  isDisabled = false,
  ...rest
}) => {
  const btnVarient = {
    primary: "bg-blue-500 text-white hover:bg-blue-400",
    secondary: "bg-red-500 text-white hover:bg-red-400",
    success: "bg-green-500 text-white hover:bg-green-400",
    danger: "bg-red-500 text-white hover:bg-red-400",
  };

  const sizeVarient = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${className} ${btnVarient[variant]} ${sizeVarient[size]} rounded`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
