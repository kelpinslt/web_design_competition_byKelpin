import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EmptyStateProps = {
  title: string;
  description: string;
  /** Optional next step, e.g. a link to related content that does exist. */
  action?: ReactNode;
  className?: string;
};

/**
 * Honest placeholder for content that is not yet verified (PRD C3).
 * Says plainly what is missing and, where possible, where to go instead.
 */
export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div role="status" className={cn("border-t border-(--rule) pt-8", className)}>
      <p className="font-serif text-h3 text-(--fg)">{title}</p>
      <p className="prose-measure mt-3 text-body text-(--fg-muted)">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
