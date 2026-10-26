"use client";

import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { scrollToRegisterSection } from "@/lib/scroll-to-section";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline-light"
  | "green"
  | "red";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "btn-shimmer text-black shadow-[0_8px_28px_rgba(255,255,255,0.2)] hover:bg-[#f0f0f0] hover:shadow-[0_12px_36px_rgba(255,255,255,0.28)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-white/5 text-white backdrop-blur hover:bg-white/10",
  ghost: "text-[var(--foreground)] hover:bg-white/10",
  "outline-light":
    "border border-[var(--color-border-strong)] text-white hover:border-white hover:bg-white/10",
  green:
    "bg-[var(--color-brand-green)] text-white hover:bg-[#2a5230] shadow-sm",
  red:
    "btn-shimmer text-black shadow-[0_8px_28px_rgba(255,255,255,0.2)] hover:bg-[#f0f0f0] hover:shadow-[0_12px_36px_rgba(255,255,255,0.28)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-base",
  lg: "min-h-14 px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
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
      type={type}
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
