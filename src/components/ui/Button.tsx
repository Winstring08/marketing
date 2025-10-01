import React, { forwardRef, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { NavLink, type NavLinkProps } from "react-router-dom";

/**
 * Button recipe (tv) + Button component in one file
 * - Enterprise-friendly: slots, semantic + boolean variants, compoundVariants, a11y
 */
export const button = tv({
  slots: {
    root:
      // 레이아웃/타이포
      "group inline-flex items-center justify-center font-semibold rounded-discord select-none " +
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
          "dark:text-white dark:hover:bg-surface-dark-100",
      },
      danger: {
        root:
          "bg-status-danger text-white hover:bg-red-600 focus-visible:ring-red-500 active:scale-[0.98]",
      },
    },

    size: {
      sm: { root: "h-8 px-3 text-sm", icon: "w-4 h-4" },
      md: { root: "h-10 px-4 text-base", icon: "w-5 h-5" },
      lg: { root: "h-14 px-10 text-lg", icon: "w-6 h-6" },
      nav: { root: "px-4 py-2 text-sm font-medium" },
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
      true: { root: "aspect-square px-0", icon: "mr-0" },
      false: {},
    },

    active: {
      true: { root: "text-brand bg-brand/10 dark:bg-brand/20" },
    },
  },

  compoundVariants: [
    { intent: "danger", class: { root: "focus-visible:ring-red-500" } },
    { intent: ["primary", "secondary", "ghost"], class: { root: "focus-visible:ring-brand" } },
  ],

  defaultVariants: {
    intent: "primary",
    size: "md",
    block: false,
    loading: false,
    iconOnly: false,
  },
});

export type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
  ButtonVariants {
  leftIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { intent, size, block, loading, iconOnly, leftIcon, className, children, ...props },
    ref
  ) => {
    const { root, icon, spinner } = button({ intent, size, block, loading, iconOnly });

    return (
      <button
        ref={ref}
        type={props.type ?? "button"}
        aria-busy={loading || undefined}
        aria-disabled={props.disabled || loading || undefined}
        data-loading={loading ? "true" : undefined}
        className={twMerge(root(), clsx(className))}
        {...props}
      >
        {loading && <span className={spinner()} aria-hidden="true" />}
        {leftIcon && <span className={icon()}>{leftIcon}</span>}
        <span className={clsx(loading && "invisible")}>{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

/**
 * 사용 예시
 *
 * <Button intent="primary" size="lg" onClick={...}>
 *   무료로 시작하기
 * </Button>
 *
 * <Button intent="ghost" size="sm" leftIcon={<DownloadIcon />}>
 *   다운로드
 * </Button>
 *
 * <Button intent="danger" loading>
 *   삭제 중...
 * </Button>
 *
 * <Button iconOnly aria-label="설정 열기">
 *   <SettingsIcon />
 * </Button>
 */
// ⬇️ Button 아래에 추가
type NavLinkButtonProps = Omit<NavLinkProps, "className"> & {
  /** nav 기본 스타일: intent=ghost, size=nav 로 고정/커스터마이즈 가능 */
  intent?: ButtonVariants["intent"];
  size?: ButtonVariants["size"];
  className?: string;
  leftIcon?: ReactNode;
  children?: ReactNode;
};

/**
 * NavLinkButton
 * - React Router NavLink + button recipe 재사용
 * - 활성 상태(active)는 NavLink의 isActive로 결정 → recipe의 active variant 사용
 * - 기본값: intent="ghost", size="nav"
 */
export function NavLinkButton({
  intent = "ghost",
  size = "nav",
  leftIcon,
  className,
  children,
  ...props
}: NavLinkButtonProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => {
        const { root } = button({ intent, size, active: isActive });
        return twMerge(root(), className);
      }}
    >
      {/* 아이콘은 size에만 의존하므로 isActive 없이도 일관됨 */}
      {leftIcon && <span className={button({ intent, size }).icon()}>{leftIcon}</span>}
      <span>{children}</span>
    </NavLink>
  );
}