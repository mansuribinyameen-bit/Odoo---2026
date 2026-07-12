import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-cyan-600 hover:bg-cyan-700 text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    warning:
      "bg-yellow-500 hover:bg-yellow-600 text-white",

    outline:
      "border border-cyan-600 text-cyan-600 hover:bg-cyan-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-2.5 text-base",

    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        "rounded-lg font-semibold transition-all duration-200",
        "flex items-center justify-center gap-2",
        "disabled:opacity-60 disabled:cursor-not-allowed",

        variants[variant],
        sizes[size],

        fullWidth && "w-full",

        className
      )}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity="0.25"
            />

            <path
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;