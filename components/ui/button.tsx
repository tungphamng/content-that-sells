"use client";

import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { scrollToRegisterSection } from "@/lib/scroll-to-section";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "green" | "red";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "btn-shimmer text-slate-950 shadow-[0_8px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)]",
  secondary:
    "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/15",
  ghost: "text-white/90 hover:bg-white/10",
  "outline-light":
    "border border-white/40 text-white hover:border-[var(--color-pizza-red)] hover:text-white hover:bg-[var(--color-pizza-red)]/15",
  green:
    "bg-[var(--color-brand-green)] text-white hover:bg-[#2a5230] shadow-sm",
  red:
    "bg-[var(--color-pizza-red)] text-white hover:bg-[#c41230] shadow-[0_8px_30px_rgba(227,24,55,0.35)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function RegisterCtaButton({
  size = "md",
  className,
  children = "Đăng ký miễn phí",
}: {
  size?: Size;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Button
      variant="red"
      size={size}
      className={cn("rounded-full glow-pulse-red", className)}
      onClick={() => scrollToRegisterSection()}
    >
      {children}
    </Button>
  );
}
