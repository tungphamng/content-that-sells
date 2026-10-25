import { cn } from "@/lib/utils/cn";

type Size = "hero" | "header" | "section";

const sizeMap: Record<Size, string> = {
  hero: "text-xl md:text-2xl font-bold tracking-[0.2em]",
  header: "text-sm font-bold tracking-[0.18em]",
  section: "text-lg font-bold tracking-[0.16em]",
};

export function MakeItLaunchTitle({
  size = "section",
  className,
}: {
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "uppercase text-gold-shimmer font-manrope",
        sizeMap[size],
        className,
      )}
    >
      MAKE IT LAUNCH
    </span>
  );
}
