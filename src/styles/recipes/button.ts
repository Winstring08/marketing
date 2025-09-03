import { tv } from "tailwind-variants";

export const button = tv({
  slots: {
    root:
      // 레이아웃/타이포
      "inline-flex items-center justify-center font-semibold rounded-discord select-none " +
      // 상호작용/포커스
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand " +
      "disabled:opacity-50 disabled:cursor-not-allowed " +
      // 전환(색/변형/그림자 등 UI 효과만)
      "transition duration-200",
    icon: "mr-2 inline-flex",
    spinner:
      "absolute inset-0 grid place-items-center " +
      "after:content-[''] after:w-4 after:h-4 after:rounded-full " +
      "after:border after:border-white after:border-t-transparent after:animate-spin",
  },

  variants: {
    intent: {
      primary: {
        root:
          "bg-brand text-white hover:bg-brand-hover shadow-discord active:scale-[0.98] " +
          "dark:bg-brand dark:hover:bg-brand-hover",
      },
      secondary: {
        root:
          "bg-surface-light-300 text-text-light hover:bg-surface-light-400 active:scale-[0.98] " +
          "dark:bg-surface-dark-300 dark:hover:bg-surface-dark-200 dark:text-white",
      },
      ghost: {
        root:
          "bg-transparent text-text-light hover:bg-surface-light-300 " +
          "dark:text-white dark:hover:bg-surface-dark-300",
      },
      danger: {
        root:
          "bg-status-danger text-white hover:bg-red-600 focus-visible:ring-red-500 active:scale-[0.98]",
      },
    },

    size: {
      sm: { root: "h-8 px-3 text-sm" },
      md: { root: "h-10 px-4 text-base" },
      lg: { root: "h-14 px-10 text-lg" },
    },

    block: {
      true: { root: "w-full" },
      false: {},
    },

    loading: {
      true: { root: "relative pointer-events-none" },
      false: {},
    },

    iconOnly: {
      true: { root: "aspect-square px-0" },
      false: {},
    },
  },

  compoundVariants: [
    { intent: "danger", class: { root: "focus-visible:ring-red-500" } },
  ],

  defaultVariants: {
    intent: "primary",
    size: "md",
    block: false,
    loading: false,
    iconOnly: false,
  },
});
