"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghostEmerald" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled = false,
      whileHover,
      whileTap,
      ...props
    },
    ref
  ) => {
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-brand-coral hover:bg-brand-coralHover text-white shadow-soft hover:shadow-glow border border-transparent",
      secondary:
        "bg-brand-navy hover:bg-brand-navyDark text-white shadow-soft dark:bg-brand-cardDark dark:hover:bg-brand-navy border border-transparent",
      ghostEmerald:
        "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/40",
      outline:
        "border border-brand-border text-brand-navy hover:bg-brand-surfaceMuted dark:border-white/20 dark:text-slate-100 dark:hover:bg-white/5",
      ghost:
        "text-brand-navy hover:bg-brand-surfaceMuted dark:text-slate-200 dark:hover:bg-brand-cardDark border border-transparent",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5 font-medium",
      md: "px-5 py-2.5 text-sm gap-2 font-medium",
      lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
    };

    const isButtonDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        disabled={isButtonDisabled}
        whileHover={!isButtonDisabled ? whileHover || { scale: 1.02, y: -1 } : undefined}
        whileTap={!isButtonDisabled ? whileTap || { scale: 0.98 } : undefined}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 select-none",
          variantStyles[variant],
          sizeStyles[size],
          isButtonDisabled && "opacity-60 cursor-not-allowed shadow-none hover:shadow-none pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0 text-current" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span className="truncate">{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
