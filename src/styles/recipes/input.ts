import { tv } from "tailwind-variants";

export const input = tv({
  slots: {
    root:
      "px-3 py-2 rounded-discord w-full " +
      "bg-surface-light-300 dark:bg-surface-dark-600 " +
      "text-text-light dark:text-text-primary " +
      "border border-surface-light-400 dark:border-surface-dark-400 " +
      "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 " +
      "transition duration-150",
  },
  variants: {
    size: {
      sm: { root: "text-sm h-9" },
      md: { root: "text-base h-10" },
      lg: { root: "text-lg h-12" },
    },
    invalid: {
      true:  { root: "border-status-danger focus:ring-red-200" },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    invalid: false,
  },
});
