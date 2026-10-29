import type { ReactNode } from "react";
import { isExternal } from "../lib/links";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "ghost";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 select-none";

const variants = {
  gold: "bg-gold text-ink hover:bg-bone",
  outline: "border border-gold/60 text-bone hover:border-gold hover:bg-gold hover:text-ink",
  ghost: "text-gold hover:text-bone",
} as const;

export default function Button({
  href,
  children,
  variant = "gold",
  icon,
  className = "",
  ariaLabel,
  onClick,
}: Props) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
    </a>
  );
}
