"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  href,
  external = false,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/30 border border-transparent",
    secondary:
      "bg-neutral-850 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800",
    outline:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 border border-neutral-350 dark:border-neutral-800 hover:border-neutral-600 dark:hover:border-neutral-700",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900/50 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          {...motionProps}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClassName}`}
          onClick={onClick}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink
        {...motionProps}
        href={href}
        className={`group ${combinedClassName}`}
        onClick={onClick}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={`group ${combinedClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
};
