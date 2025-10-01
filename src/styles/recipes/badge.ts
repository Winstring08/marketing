import { tv, type VariantProps } from "tailwind-variants";

export const badge = tv({
  slots: {
    // 기존 CTA의 원형 배지 스타일을 그대로 캡쳐
    root:
      "inline-flex items-center justify-center will-change-transform " +
      "w-16 h-16 rounded-full mb-6 border-2 " +
      "bg-brand/10 dark:bg-brand/20 border-brand/20 dark:border-brand/30",
    // svg baseline 영향 제거 + 색상
    icon: "block text-brand",
  },

  variants: {
    // 필요 시 사이즈 조절
    size: {
      sm: { root: "w-10 h-10 p-1.5", icon: "w-5 h-5" },   // 20px
      md: { root: "w-14 h-14 p-2.5", icon: "w-7 h-7" },   // 28px
      lg: { root: "w-16 h-16 p-3",   icon: "w-8 h-8" },   // 32px
      xl: { root: "w-24 h-24 p-4",   icon: "w-14 h-14" }, // 56px  ← 여기 키움
    },
    // 의도별(색/배경은 현재 동일, 아이콘만 다르게 씀)
    intent: {
      crown: {},
      download: {},
      key: {},
      shield: {},
    },
  },

  defaultVariants: {
    size: "lg",
    intent: "crown",
  },
});

export type BadgeVariants = VariantProps<typeof badge>;
export type BadgeSize = NonNullable<BadgeVariants["size"]>;
export type BadgeIntent = NonNullable<BadgeVariants["intent"]>;
