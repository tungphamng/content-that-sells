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
          variant === "hero" && "bg-[var(--color-pizza-red)]/12",
          variant === "cta" && "bg-[var(--color-brand-gold)]/25",
          variant === "dark" && "bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute -right-16 bottom-20 h-72 w-72 rounded-full blur-3xl orb-float-b",
          variant === "hero" && "bg-[var(--color-pizza-red)]/20",
          variant === "cta" && "bg-[var(--color-brand-green)]/40",
          variant === "dark" && "bg-[var(--color-brand-green)]/30",
        )}
      />
      <div className="sparkle-field absolute inset-0 opacity-60" />
      {variant === "hero" && (
        <div
          className="absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle,rgba(227,24,55,0.12)_0%,transparent_70%)]"
        />
      )}
    </div>
  );
}
