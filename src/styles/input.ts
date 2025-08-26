import { tv } from "tailwind-variants";

export const input = tv({
  slots: {
    root: "w-full",
    label:
      "mb-1 block text-xs font-semibold text-text-muted " +
      "dark:text-secondary",
    control:
      "w-full rounded-discord bg-white text-text-light " +
      "placeholder:text-muted border border-surface-light-400 " +
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand " +
      "h-10 px-3 transition " +
      "dark:bg-surface-dark-300 dark:text-primary dark:border-surface-dark-200",
    helper: "mt-1 text-xxs text-muted",
    error: "mt-1 text-xxs text-status-danger",
  },
  variants: {
    invalid: {
      true:
        { control: "border-status-danger focus-visible:ring-red-500" },
    },
    size: {
      sm: { control: "h-8 text-sm" },
      md: { control: "h-10 text-base" },
      lg: { control: "h-12 text-lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
