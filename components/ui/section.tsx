import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type SectionVariant = "base" | "elevated" | "mesh";

const variantClass: Record<SectionVariant, string> = {
  base: "bg-poster-section",
  elevated: "bg-poster-section-alt",
  mesh: "bg-mesh-animated text-white",
};

export function Section({
  id,
  variant = "base",
  className,
  children,
}: {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 md:scroll-mt-28 md:py-24",
        variantClass[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionContainer({
  className,
  children,
  width = "default",
}: {
  className?: string;
  children: ReactNode;
  width?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-8",
        width === "narrow" && "max-w-3xl",
        width === "wide" && "max-w-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionIntro({
  label,
  title,
  description,
  descriptionAlign = "justify",
  descriptionClassName,
  labelTone = "red",
  className,
}: {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  descriptionAlign?: "justify" | "center";
  descriptionClassName?: string;
  labelTone?: "red" | "gold";
  className?: string;
}) {
  return (
    <div className={cn("section-intro", className)}>
      {label && (
        <p
          className={cn(
            "section-label",
            labelTone === "gold" && "text-[var(--foreground)]",
          )}
        >
          {label}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className={cn(
            "section-description",
            descriptionAlign === "center" && "text-center",
            descriptionAlign === "justify" && "text-justify-vi",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
