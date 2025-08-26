import { badge } from "../styles/badge";
import clsx from "clsx";

type BadgeProps = {
  tone?: "info" | "success" | "warning" | "danger" | "neutral";
  outlined?: boolean;
  withDot?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Badge({
  tone,
  outlined,
  withDot,
  className,
  children,
}: BadgeProps) {
  const { root, dot } = badge({ tone, outlined });
  return (
    <span className={clsx(root(), className)}>
      {withDot && <span className={dot()} />}
      {children}
    </span>
  );
}
