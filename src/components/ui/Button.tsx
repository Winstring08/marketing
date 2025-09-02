import { button } from "../../styles/recipes/button";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
};

export default function Button({
  intent,
  size,
  block,
  loading,
  leftIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const { root, icon, spinner } = button({ intent, size, block, loading });

  return (
    <button
      {...props}
      data-loading={loading ? "true" : undefined}
      className={twMerge(root(), clsx(className))}
    >
      {loading && <span className={spinner()} />}
      {leftIcon && <span className={icon()}>{leftIcon}</span>}
      <span className={clsx(loading && "invisible")}>{children}</span>
    </button>
  );
}
