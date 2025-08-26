import { tv } from "tailwind-variants";

/**
 * Badge 스타일 레시피 (slots 포함)
 * - components/Badge.tsx에서 { root, dot } = badge(...) 형태로 사용
 */
export const badge = tv({
  slots: {
    root:
      "inline-flex items-center rounded-discord font-medium " +
      "px-2 py-[2px] text-xxs uppercase tracking-wide",
    dot: "w-1.5 h-1.5 rounded-full mr-1.5",
  },

  variants: {
    tone: {
      neutral: {
        root:
          "bg-surface-light-300 text-text-light " +
          "dark:bg-surface-dark-300 dark:text-primary",
        dot: "bg-text-light dark:bg-primary",
      },
      info: {
        root: "bg-brand/15 text-brand dark:bg-brand/20 dark:text-primary",
        dot: "bg-brand",
      },
      success: {
        root: "bg-status-success/15 text-status-success",
        dot: "bg-status-success",
      },
      warning: {
        root: "bg-status-warning/20 text-status-warning",
        dot: "bg-status-warning",
      },
      danger: {
        root: "bg-status-danger/15 text-status-danger",
        dot: "bg-status-danger",
      },
    },

    outlined: {
      true: { root: "border border-current bg-transparent" },
      false: {},
    },
  },

  defaultVariants: {
    tone: "neutral",
    outlined: false,
  },
});
