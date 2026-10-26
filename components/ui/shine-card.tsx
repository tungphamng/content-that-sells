import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

export function ShineCard({
  children,
  className,
  glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "shine-card-sweep rounded-2xl transition-all duration-500",
        glow && "shadow-[0_0_40px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
