import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingSize = "display" | "h1" | "h2" | "h3";

const headingSize: Record<HeadingSize, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

type HeadingProps = {
  /** Semantic level, independent of visual size. */
  level: 1 | 2 | 3 | 4;
  size?: HeadingSize;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Editorial heading in DM Serif Display. Level and size are set separately. */
export function Heading({ level, size, id, className, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  const visual = size ?? (level === 1 ? "h1" : level === 2 ? "h2" : "h3");
  return (
    <Tag id={id} className={cn("font-serif text-(--fg)", headingSize[visual], className)}>
      {children}
    </Tag>
  );
}

/**
 * Small group label in Manrope caps. Reserved for labels the PRD defines,
 * such as menu groups and the MENU control; not an eyebrow above every heading.
 */
export function Label({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span className={cn("text-micro font-semibold uppercase text-(--label)", className)}>
      {children}
    </span>
  );
}

/** Long-form text block, kept to a readable measure. */
export function Prose({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("prose-measure space-y-5 text-body text-(--fg)", className)}>
      {children}
    </div>
  );
}

/** Introductory paragraph, one step larger than body text. */
export function Lead({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("prose-measure text-lead text-(--fg)", className)}>{children}</p>;
}
