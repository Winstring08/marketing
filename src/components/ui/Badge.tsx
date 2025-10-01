import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import {
  CrownIcon,
  DownloadIcon,
  KeyIcon,
  ShieldIcon,
} from "@/components/Icons";
import type { HTMLMotionProps } from "framer-motion";

/**
 * Badge recipe(tv) + Badge component in one file
 * - Enterprise-friendly: slots, semantic + boolean variants, compoundVariants, a11y, reduced motion
 */
export const badge = tv({
  slots: {
    root:
      // 레이아웃
      "inline-flex items-center justify-center rounded-full border-2 will-change-transform select-none " +
      // 배경/테두리(기본 토큰)
      "bg-brand/20 dark:bg-brand/20 border-brand/20 dark:border-brand/30",
    icon: "block text-brand",
    srOnly:
      "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 clip-[rect(0,0,0,0)]",
  },
  variants: {
    size: {
      ss: { root: "w-5 h-5 p-1", icon: "w-3 h-3" },
      sm: { root: "w-10 h-10 p-1.5", icon: "w-5 h-5" }, // 20px
      md: { root: "w-14 h-14 p-2.5", icon: "w-7 h-7" }, // 28px
      lg: { root: "w-16 h-16 p-3", icon: "w-8 h-8" }, // 32px
      xl: { root: "w-24 h-24 p-4", icon: "w-14 h-14" }, // 56px
    },
    intent: {
      crown: {},
      download: {},
      key: {},
      shield: {},
    },
    interactive: { true: { root: "transition-transform hover:scale-[1.03]" } },
    elevated: { true: { root: "shadow-lg" } },
    inverted: {
      true: {
        root:
          "bg-brand/20 dark:bg-brand/30 border-brand/40 dark:border-brand/50",
      },
    },
  },
  compoundVariants: [
    // intent별로 아이콘 색을 조금 구분하고 싶다면 여기서 관리
    { intent: "shield", class: { icon: "text-emerald-500 dark:text-emerald-400" } },
    { intent: "key", class: { icon: "text-amber-500 dark:text-amber-400" } },
  ],
  defaultVariants: { size: "lg", intent: "crown" },
});

export type BadgeVariants = VariantProps<typeof badge>;
// 아이콘을 className만 받는 형태로 정규화 (타입 오류 방지)
type IconLike = React.ComponentType<{ className?: string }>;

export interface BadgeProps
  extends Omit<HTMLMotionProps<"div">, "color">,
    BadgeVariants {
  /**
   * 접근성: 의미 있는 배지라면 label 제공 (div는 role=img + aria-label)
   * 장식용이면 비워두세요(aria-hidden 처리됨)
   */
  label?: string;
}

const ICONS: Record<NonNullable<BadgeVariants["intent"]>, IconLike> = {
  crown: CrownIcon as IconLike,
  download: DownloadIcon as IconLike,
  key: KeyIcon as IconLike,
  shield: ShieldIcon as IconLike,
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      intent = "crown",
      size = "lg",
      interactive,
      elevated,
      inverted,
      label,
      className,
      ...rest
    },
    ref
  ) => {
    const prefersReduced = useReducedMotion();
    const { root, icon, srOnly } = badge({
      intent,
      size,
      interactive,
      elevated,
      inverted,
    });
    const Icon = ICONS[intent];

    return (
      <motion.div
        ref={ref}
        initial={prefersReduced ? false : { scale: 0.92, opacity: 0 }}
        whileInView={prefersReduced ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={
          prefersReduced ? undefined : { type: "spring", stiffness: 500, damping: 20 }
        }
        // 접근성: label이 있으면 의미 있는 그래픽으로 취급
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={clsx(root(), className)}
        {...rest}
      >
        {label && <span className={srOnly()}>{label}</span>}
        <Icon className={icon()} />
      </motion.div>
    );
  }
);
Badge.displayName = "Badge";

export default Badge;

/**
 * 사용 예시
 *
 * <Badge intent="crown" size="lg" label="프리미엄" />
 * <Badge intent="download" size="md" interactive elevated />
 * <Badge intent="shield" size="xl" inverted label="엔드투엔드 암호화" />
 */
