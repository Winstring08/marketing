import { input } from "../styles/input";
import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  className?: string;
};

export default function Input({
  label,
  helperText,
  errorText,
  size,
  invalid,
  className,
  ...props
}: InputProps) {
  const { root, label: labelCls, control, helper, error } = input({
    size,
    invalid,
  });

  const id = props.id ?? props.name;

  return (
    <div className={root()}>
      {label && (
        <label htmlFor={id} className={labelCls()}>
          {label}
        </label>
      )}
      <input
        {...props}
        id={id}
        aria-invalid={invalid || undefined}
        className={clsx(control(), className)}
      />
      {helperText && !errorText && <p className={helper()}>{helperText}</p>}
      {errorText && <p className={error()}>{errorText}</p>}
    </div>
  );
}
