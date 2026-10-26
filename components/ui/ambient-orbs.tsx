import { cn } from "@/lib/utils/cn";

export function AmbientOrbs({
  variant = "hero",
}: {
  variant?: "hero" | "cta" | "dark";
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className={cn(
          "absolute -left-20 top-10 h-64 w-64 rounded-full blur-3xl orb-float-a",
          variant === "hero" && "bg-white/[0.07]",
          variant === "cta" && "bg-white/[0.06]",
          variant === "dark" && "bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute -right-16 bottom-20 h-72 w-72 rounded-full blur-3xl orb-float-b",
          variant === "hero" && "bg-white/[0.05]",
          variant === "cta" && "bg-white/[0.04]",
          variant === "dark" && "bg-[var(--color-surface)]/80",
        )}
      />
      <div className="sparkle-field absolute inset-0 opacity-50" />
      {variant === "hero" && (
        <div
          className="absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]"
        />
      )}
    </div>
  );
}
