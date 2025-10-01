import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    root: "rounded-lg duration-200 transition-colors transition-shadow",
  },
  variants: {
    tone: {
      subtle:   { root: "bg-surface-light-200 dark:bg-surface-dark-400 shadow-sm hover:shadow-md" },
      default:  { root: "bg-surface-light-100 dark:bg-surface-dark-300 shadow-discord hover:shadow-discord-lg" },
      elevated: { root: "bg-surface-light-100 dark:bg-surface-dark-200 shadow-discord-lg border border-surface-light-300 dark:border-surface-dark-100 hover:shadow-discord-xl" },
      cta:      { root: "bg-gradient-to-br from-brand/5 to-brand-light/5 dark:from-brand/10 dark:to-brand-light/10 shadow-discord-lg border border-surface-light-300 dark:border-surface-dark-100 hover:shadow-discord-xl" },
    },
    padding: {
      sm: { root: "p-3" }, md: { root: "p-4" }, lg: { root: "p-6" }, xl: { root: "p-12" },
    },
    align: {
      left: { root: "text-left" }, center: { root: "text-center" },
    },
    // ✅ 새로 추가: hover 시 배경 색상
    hoverTone: {
      none:   { root: "" },
      brand:  { root: "hover:bg-brand/10 dark:hover:bg-brand/15" },
      surface:{ root: "hover:bg-surface-light-300 dark:hover:bg-surface-dark-400" },
      light:  { root: "hover:bg-brand-light/10" },
    },
  },
  defaultVariants: {
    tone: "subtle",
    padding: "md",
    align: "center",
    hoverTone: "none",
  },
});
