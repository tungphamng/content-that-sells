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
          variant === "hero" && "bg-[var(--color-accent-red)]/10",
          variant === "cta" && "bg-[var(--color-accent-gold)]/15",
          variant === "dark" && "bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute -right-16 bottom-20 h-72 w-72 rounded-full blur-3xl orb-float-b",
          variant === "hero" && "bg-[var(--color-accent-red)]/15",
          variant === "cta" && "bg-[var(--color-accent-red)]/12",
          variant === "dark" && "bg-[var(--color-surface)]/80",
        )}
      />
      <div className="sparkle-field absolute inset-0 opacity-50" />
      {variant === "hero" && (
        <div
          className="absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle,rgba(229,57,53,0.1)_0%,transparent_70%)]"
        />
      )}
    </div>
  );
}
