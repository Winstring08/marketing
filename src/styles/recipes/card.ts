import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    root: "rounded-lg transition duration-200",
  },
  variants: {
    tone: {
      default: { root: "bg-surface-light-100 dark:bg-surface-dark-300 shadow-discord hover:shadow-discord-lg" },
      elevated:{ root: "bg-surface-light-100 dark:bg-surface-dark-200 shadow-discord-lg border border-surface-light-300 dark:border-surface-dark-100" },
    },
    padding: {
      none:   { root: "" },
      sm:     { root: "p-3" },
      md:     { root: "p-6" },
      lg:     { root: "p-8" },
    },
  },
  defaultVariants: {
    tone: "default",
    padding: "md",
  },
});
