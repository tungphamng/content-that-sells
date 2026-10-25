import { cn } from "@/lib/utils/cn";

export function ChevronDownIcon({
  className,
  expanded,
}: {
  className?: string;
  expanded?: boolean;
}) {
  return (
    <svg
      className={cn(
        "h-5 w-5 shrink-0 text-[var(--color-accent-gold)] transition-transform duration-300 ease-out motion-reduce:transition-none",
        expanded && "rotate-180",
        className,
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
