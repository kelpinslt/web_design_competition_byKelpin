import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Tone = "obsidian" | "brown" | "ivory";

type SectionProps = {
  as?: ElementType;
  tone?: Tone;
  /** Vertical rhythm. `none` lets the section control its own padding. */
  spacing?: "default" | "tight" | "none";
  /** Draw the warp-line grid behind the content (dark tones only). */
  warp?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">;

const spacingClass = {
  default: "py-section",
  tight: "py-section-tight",
  none: "",
} as const;

/**
 * A full-width band with a declared tone. Components inside read the tone's
 * semantic colours (--fg, --fg-muted, --rule), so light and dark sections
 * can alternate without per-component colour overrides.
 */
export function Section({
  as: Tag = "section",
  tone = "obsidian",
  spacing = "default",
  warp = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      data-tone={tone}
      className={cn("relative isolate", spacingClass[spacing], className)}
      {...rest}
    >
      {warp && tone !== "ivory" ? (
        <div
          aria-hidden="true"
          className="shell warp pointer-events-none absolute inset-0 -z-10"
        />
      ) : null}
      {children}
    </Tag>
  );
}

type ContainerProps = {
  as?: ElementType;
  /** Apply the 4 / 6 / 12 column editorial grid. */
  grid?: boolean;
  className?: string;
  children: ReactNode;
};

/** Page-width container aligned to the warp-line grid. */
export function Container({ as: Tag = "div", grid = false, className, children }: ContainerProps) {
  return <Tag className={cn("shell", grid && "grid-editorial", className)}>{children}</Tag>;
}
